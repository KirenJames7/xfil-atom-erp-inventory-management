/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import FixedAssetRegisterService from './FixedAssetRegisterService.js';
import TabNav from '../../elements/TabNav.js';
import Table from '../../elements/Table.js';

class FixedAssetRegisterController {
    
    static tableAutoUpdate(table, visible) {
        
        setInterval(function() {
            if ( $('#fixedassetregister').hasClass("active") && $('.ui-tabs-panel:visible').attr('id') === visible ) {
                
                table.ajax.reload(null, false);
                
            }
        }, 5000);
        
    }
    
    static async tableColumns() {
        
        let columns =  new Array(
            { title: "FA ID", data: "fixed_asset_register_id", visible: false },
            { title: "FA Code", data: "fixed_asset_code" }
        );
        
        let fixed_asset_attributes = await new FixedAssetRegisterService().getFixedAssetCategoryAttributes(window.localStorage.getItem('current_user_company'), $('.ui-tabs-panel:visible').attr('content-id')).then((resolve) => {
            return resolve;
        });
        
        if ( fixed_asset_attributes.fixed_asset_attributes.length ) {
            fixed_asset_attributes.fixed_asset_attributes.each((attribute) => {
                columns.push({ title: attribute, data: attribute.replace(" ", "_") });
            });
        }
        
        columns.push({ title: "FA Status", data: "fixed_asset_transaction_status" }, { title: "GRN Date", data: "received_date" }, { title: "GIN Date", data: "issued_date" });
        return columns;
    }
    
    static async tableCreator(table, selected_row) {
        
        let current_table = $("#" + table + "-table").DataTable({
            info: false,
            ajax: {
                url: "fixedassetsbycategory?company=" + window.localStorage.getItem('current_user_company') + '&category=' + $('.ui-tabs-panel:visible').attr('content-id'),
                dataSrc: "category_fixed_asset_register"
            },
            select: {
                style: "single"
            },
            scrollY: window.innerHeight - (document.getElementById($('table:visible').attr("id")).getBoundingClientRect().top + parseInt(window.navbarHeight, 10) + 100),
            scrollCollapse: true,
            scroller: true,
            saveState: true,
            rowId: "fixed_asset_register_id",
            columns: await FixedAssetRegisterController.tableColumns()
        });
        
        FixedAssetRegisterController.tableAutoUpdate(current_table, table);
    }
    
    tabCreator(fixed_asset_categories, selected_row) {
        
        $('.card-title').after(new TabNav("fixed-asset-category-tabs", fixed_asset_categories.fixed_asset_categories.map((category) => { return [ category.fixed_asset_category_id, category.fixed_asset_category_code, category.fixed_asset_category ]; }), fixed_asset_categories.fixed_asset_categories.map((category) => { return [ category.fixed_asset_category_id, category.fixed_asset_category_code, category.fixed_asset_category ]; })).render());
        
        $('#fixed-asset-category-tabs').tabs({
            create: function(event, ui) {
                
                $(ui.panel).html(
                    '<div class="row">' +
                        '<div class="col-md-12">' +
                            '<h3 class="text-center">'  + fixed_asset_categories.fixed_asset_categories[$('.ui-tabs-panel:visible').attr('content-id')-1].fixed_asset_category_code + ' | ' + fixed_asset_categories.fixed_asset_categories[$('.ui-tabs-panel:visible').attr('content-id')-1].fixed_asset_category + '</h3>' +
                            '<div>' +
                                new Table(fixed_asset_categories.fixed_asset_categories[$('.ui-tabs-panel:visible').attr('content-id')-1].fixed_asset_category_code + "-table", [ "table", "table-bordered", "table-striped", "table-hover" ]).render() +
                            '</div>' +
                        '</div>' +
                    '</div>'
                );
                
                FixedAssetRegisterController.tableCreator(fixed_asset_categories.fixed_asset_categories[$('.ui-tabs-panel:visible').attr('content-id')-1].fixed_asset_category_code, selected_row);
            
            }
        });
        
    }
    
    tabActive(fixed_asset_categories, selected_row) {
        
        $('#fixed-asset-category-tabs').on('tabsactivate', function(event, ui) {
            
            switch ( $(ui.newPanel).attr("id") ) {
                case $('.ui-tabs-panel:visible').attr('id'): {
                    $(ui.newPanel).html(
                        '<div class="row">' +
                            '<div class="col-md-12">' +
                                '<h3 class="text-center">'  + fixed_asset_categories.fixed_asset_categories[$('.ui-tabs-panel:visible').attr('content-id')-1].fixed_asset_category_code + ' | ' + fixed_asset_categories.fixed_asset_categories[$('.ui-tabs-panel:visible').attr('content-id')-1].fixed_asset_category + '</h3>' +
                                '<div>' +
                                    new Table(fixed_asset_categories.fixed_asset_categories[$('.ui-tabs-panel:visible').attr('content-id')-1].fixed_asset_category_code + "-table", [ "table", "table-bordered", "table-striped", "table-hover" ]).render() +
                                '</div>' +
                            '</div>' +
                        '</div>'
                    );

                    FixedAssetRegisterController.tableCreator(fixed_asset_categories.fixed_asset_categories[$('.ui-tabs-panel:visible').attr('content-id')-1].fixed_asset_category_code, selected_row);
                };
                break;
            }
        });
        
    }
    
    builder() {
        
        $(document).ready(() => {
            $(document).on('click', '#fixedassetregister', async () => {
                let fixed_asset_categories = await new FixedAssetRegisterService().getFixedAssetCategories(window.localStorage.getItem('current_user_company')).then((resolve) => {
                    return resolve;
                });
                
                let selected_row = {};
                
                this.tabCreator(fixed_asset_categories, selected_row);
                this.tabActive(fixed_asset_categories, selected_row);
            });
        });
        
    }
    
}

export default new FixedAssetRegisterController().builder();