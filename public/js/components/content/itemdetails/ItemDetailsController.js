/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import ItemDetailsService from './ItemDetailsService.js';
import FixedAssetRegisterService from '../fixedassetregister/FixedAssetRegisterService.js';
import ModalFormCustom from '../../elements/ModalFormCustom.js';
import Label from '../../elements/Label.js';
import Input from '../../elements/Input.js';
import Required from '../../elements/Required.js';
import Button from '../../elements/Button.js';
import Table from '../../elements/Table.js';
import NothingSelectedAlert from '../../utils/NothingSelectedAlert.js';

class ItemDetailsController {
    
    static tableAutoUpdate(table, condition) {
        
        setInterval(function() {
            if ( condition ) {
                
                table.ajax.reload(null, false);
                
            }
        }, 5000);
        
    }
    
    static tableColums() {
        
        return new Array(
            { title: "Item ID", data: "item_id", visible: false },
            { title: "Item Code", data: "item_code" },
            { title: "Item Descripsion", data: "item_descripsion" },
            { title: "Item Type", data: "item_type_code" },
            { title: "FA Category ID", data: "fixed_asset_category", visible: false },
            { title: "Fixed Asset Category", data: "fixed_asset_category_code" },
            { title: "UoM", data: "unit_of_measure_code" },
            { title: "Created By", data: "user_name" },
            { title: "On Hand", data: "on_hand" }
        );
        
    }
    
    static noWhiteSpaces() {
        //inspired by https://stackoverflow.com/questions/12010275/strip-white-spaces-on-input
        $(document).on('input', '#item-code', function() {
            $(this).val(function(_, v) {
                return v.replace(/\s/g, '');
            });
        });
        
    }
    
    static checkItemCodeDuplicate() {
        //revisit validity from table
        $(document).on('keyup', '#item-code', async function() {
            await new ItemDetailsService().getItemCodeValidity({ item_code: $(this).val(), company: window.localStorage.getItem('current_user_company') }).then((response) => {
                if ( response.valid ) {
                    if ( $('#item-code-validation').hasClass('text-danger') && $('#item-code-validation').is(':visible') ) {
                        $('#item-code-validation').remove();
                    }
                    if ( !$('#item-code-validation').is(':visible') && !$('#item-code-validation').hasClass('text-success') ) {
                        $('#item-code').after('<span id="item-code-validation" class="text-success small">Item Code Valid</span>');
                    }
                } else {
                    if ( $('#item-code-validation').hasClass('text-success') && $('#item-code-validation').is(':visible') ) {
                        $('#item-code-validation').remove();
                    }
                    if ( !$('#item-code-validation').is(':visible') && !$('#item-code-validation').hasClass('text-danger') ) {
                        $('#item-code').after('<span id="item-code-validation" class="text-danger small">Item Code Exists</span>');
                    }
                }
                if ( response.empty ) {
                    if ( $('#item-code-validation').is(':visible') ) {
                        $('#item-code-validation').remove();
                    }
                }
            });
        });
        
    }
    
    static createItem(swal_text) {
        
        $(document).on('click', '#save-item', async function() {
            //validate input
            let formData = $('#item-creation').serializeArray();
            $('.inputpicker-input').each((index, input) => {
                //inspired by https://stackoverflow.com/questions/51724323/javascript-removing-object-from-array-by-key-value
                formData.splice(formData.findIndex(({name}) => name === input.id), 1);
            });
            formData.push({ name: "userid", value: JSON.parse(window.localStorage.getItem('current_user_id')) }, { name: "company", value: window.localStorage.getItem('current_user_company') }, { name: "_token", value: $('meta[name="csrf-token"]').attr("content") });
            swal_text.innerHTML = "Item Code: <b>" + $('#item-code').val() + "</b><br />Item Type: <b>" + $('#item-type').siblings().children().children('.inputpicker-input').val() + "</b>" + (function() { if ( $('#item-type').siblings().children().children('.inputpicker-input').val() === "FA" ) { return "<br />FA Category: <b>" + $('#fixed-asset-category').siblings().children().children('.inputpicker-input').val() + "</b>"; } else { return ""; } })() + "<br />UoM: <b>" + $('#item-unit-of-measure').siblings().children().children('.inputpicker-input').val() + "</b>";
            swal({
                title: "Create Item?",
                content: swal_text,
                icon: "info",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: {
                    cancel: {
                        visible: true
                    },
                    confirm: {
                        text: "Create"
                    }
                }
            }).then(async (createItem) => {
                if ( createItem ) {
                    await new ItemDetailsService().itemCreation(formData).then((response) => {
                        if ( response.created ) {
                            swal_text.innerHTML = "Item <b>" + response.item_code + "</b> created";
                            swal({
                                icon: "success",
                                title: "Successfully Created",
                                content: swal_text,
                                buttons: false,
                                timer: 3000,
                                closeOnEsc: false,
                                closeOnClickOutside: false
                            });
                        } else {
                            swal({
                                icon: "error",
                                title: "Opsss ",
                                text: "Something went terribly wrong. Please contact System Administrator",
                                buttons: false,
                                timer: 3000,
                                closeOnEsc: false,
                                closeOnClickOutside: false
                            });
                        }
                        $.unblockUI();
                        $('form')[0].reset();
                        document.body.style.overflowY = "auto";
                    });
                }
            });
        });
        
    }
    
    static selectItem(item_details, selected_row) {
        
        item_details.on('click', 'tr', function(event) {
            selected_row.selected_item = item_details.row(this).data();
            if ( item_details.row(this, { selected: true }).data() === item_details.row(this).data() ) {
                event.stopPropagation();
                return false;
            }
        });
        
    }
    
    static checkItemTransactionExists(selected_row) {
        
        
        
    }
    
    deleteItem() {
        
        
        
    }
    
    static async itemOnHandColumns(selected_row) {
        
        let columns = new Array(
            { title: "FA ID", data: "fixed_asset_register_id", visible: false  },
            { title: "FA Code", data: "fixed_asset_code" }
        );

        let fixed_asset_attributes = await new FixedAssetRegisterService().getFixedAssetCategoryAttributes(window.localStorage.getItem('current_user_company'), selected_row.selected_item.fixed_asset_category).then((resolve) => {
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
    
    itemOnHand(selected_row) {
        
        
        
    }
    
    newItem() {
        
        
        
    }
    
    viewItemCard() {
        
        
        
    }
    
    tableCreator() {
        
        
        
    }
    
    builder() {
       
       $(document).ready(function() {
            $(document).on("click", "#itemdetails", function() {

                let selected_row = {};
                let swal_text = document.createElement('div');
                swal_text.className = "swal-text text-center";

                let item_details = $('#item-details').DataTable({
                    info: false,
                    responsive: true,
                    ajax: {
                        url: "itemdetails?company=" + window.localStorage.getItem('current_user_company'),
                        dataSrc: "item_details"
                    },
                    select: {
                        style: "single"
                    },
                    rowId: "item_id",
                    scrollY: window.innerHeight - (document.getElementById('item-details').getBoundingClientRect().top + parseInt(window.navbarHeight, 10) + 100),
                    scrollCollapse: true,
                    scroller: true,
                    saveState: true,
                    columns: ItemDetailsController.tableColums(),
                    dom: "Bfrtip",
                    buttons: [
                        {
                            text: "New Item",
                            className: "btn btn-raised btn-primary waves-effect waves-light",
                            action: async function() {
                                $.blockUI({
                                    message: new ModalFormCustom("item-creation-modal", "Item Creation", { form_method: "POST", form_id: "item-creation", form_enctype: "application/x-www-form-urlencoded" },
                                    [
                                        '<div class="row">' +
                                            '<div class="col-md-4">' +
                                                '<div class="form-group">' +
                                                    new Label('item-code', [], [], 'Item Code' + Required).render() +
                                                    new Input('text', [], 'item-code', { required: true, oninput: "this.value = this.value.toUpperCase()" }).render() +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="row">' +
                                            '<div class="col">' +
                                                '<div class="form-group">' +
                                                    new Label('item-descripsion', [], [], 'Item Descripsion' + Required).render() +
                                                    //inspired by https://stackoverflow.com/questions/11100041/how-do-you-automatically-set-text-box-to-uppercase/36163192
                                                    new Input('text', [], 'item-descripsion', { required: true, oninput: "this.value = this.value.toUpperCase()" }).render() +
                                                '</div>' +
                                            '</div>'+
                                        '</div>' +
                                        '<div class="row">' +
                                            '<div class="col-md-3">' +
                                                '<div class="form-group">' +
                                                    new Label('item-type', [], [], 'Item Type' + Required).render() +
                                                    new Input('text', [], 'item-type', { required: true }).render() +
                                                '</div>' +
                                            '</div>'+
                                        '</div>' +
                                        '<div class="row">' +
                                            '<div class="col-md-3">' +
                                                '<div class="form-group">' +
                                                    new Label('item-unit-of-measure', [], [], 'Unit of Measure' + Required).render() +
                                                    new Input('text', [], 'item-unit-of-measure', { required: true }).render() +
                                                '</div>' +
                                            '</div>'+
                                        '</div>'
                                    ],
                                    [
                                        new Button(['btn-raised', 'btn-warning'], 'discard', 'Discard').render(), 
                                        new Button(['btn-raised', 'btn-success'], 'save-item', 'Create').render()
                                    ]).render()
                                });
                                
                                
                                $('#item-type').inputpicker({
                                    data: await new ItemDetailsService().getItemTypes().then((resolve) => { return resolve.item_types; }),
                                    fields: [
                                        { name: "item_type_code", text: 'ITEM TYPE' },
                                        { name: "item_type", text: 'DESCRIPSION' }
                                    ],
                                    headShow: true,
                                    fieldText : "item_type_code",
                                    fieldValue: "item_type_id",
                                    filterOpen: true,
                                    autoOpen: true
                                });
                                
                                $(document).on('change', '#item-type', async function(event) {
                                    if ( $(this).siblings().children().children('.inputpicker-input').val() === "FA" ) {
                                        event.stopImmediatePropagation();
                                        $(this).parents().closest('.col-md-3').parent().append(
                                            '<div class="col-md-5">' +
                                            '</div>' +
                                            '<div class="col-md-4">' +
                                                '<div class="form-group">' +
                                                    new Label('fixed-asset-category', [], [], 'Fixed Asset Category' + Required).render() +
                                                    new Input('text', [], 'fixed-asset-category', { required: true }).render() +
                                                '</div>' +
                                            '</div>'
                                        );
                                
                                        $('#fixed-asset-category').inputpicker({
                                            data: await new ItemDetailsService().getFixedAssetCategories(window.localStorage.getItem('current_user_company')).then((resolve) => { return resolve.fixed_asset_categories; }),
                                            fields: [
                                                { name: "fixed_asset_category_code", text: 'FA CODE' },
                                                { name: "fixed_asset_category", text: 'FA CATEGORY' }
                                            ],
                                            headShow: true,
                                            fieldText : "fixed_asset_category_code",
                                            fieldValue: "fixed_asset_category_id",
                                            filterOpen: true,
                                            autoOpen: true
                                        });
                                        
                                    } else {
                                        
                                        if ( $('#fixed-asset-category').is(':visible') ) {
                                            
                                            $(this).parents().closest('.col-md-3').siblings().remove();
                                            
                                        }
                                        
                                    }
                                });

                                $('#item-unit-of-measure').inputpicker({
                                    data: await new ItemDetailsService().getUnitsOfMeassure().then((resolve) => { return resolve.units_of_measure; }),
                                    fields: [
                                        { name: "unit_of_measure_code", text: 'UOM' },
                                        { name: "unit_of_measure", text: 'DESCRIPSION' }
                                    ],
                                    headShow: true,
                                    fieldText : "unit_of_measure_code",
                                    fieldValue: "unit_of_measure_id",
                                    filterOpen: true,
                                    autoOpen: true
                                });
                            }
                        },
                        {
                            text: "Delete",
                            className: "btn btn-raised btn-danger waves-effect waves-light",
                            action: function() {
                                if (selected_row.selected_item) {
                                    //only delete item is no item transactions are available
                                } else {
                                    new NothingSelectedAlert().render();
                                }
                            }
                        },
                        {
                            text: "On Hand",
                            className: "btn btn-raised btn-info waves-effect waves-light",
                            action: async function() {
                                if (selected_row.selected_item) {
                                    //dislay on hand ware house wise and transactions after wards
                                    switch ( selected_row.selected_item.item_type_code ) {
                                        case "FA": {
                                            $.blockUI({
                                                message: new ModalFormCustom("item-fixed-asset-on-hand-modal", selected_row.selected_item.item_descripsion, { form_method: "GET", form_id: "item-fixed-asset", form_enctype: "application/x-www-form-urlencoded" },
                                                [ 
                                                    '<div class="row">' +
                                                        '<div class="col">' +
                                                            new Table("item-fixed-asset-on-hand", [ "table", "table-bordered", "table-striped", "table-hover" ]).render() +
                                                        '</div>' +
                                                    '</div>'
                                                ],
                                                [ 
                                                    new Button([ "btn-raised", "btn-warning" ], "discard", "Close").render()
                                                ]).render()
                                            });

                                            //write attribute setter for modal
                                            $('#item-fixed-asset-on-hand-modal .modal-dialog').css({
                                                maxWidth: "90%"
                                            });
                                            
                                            let itemfixedassetonhand = $('#item-fixed-asset-on-hand').DataTable({
                                                info: false,
                                                scrollY: "90%",
                                                ajax: {
                                                    url: "fixedassetsbyitem?item_id=" + selected_row.selected_item.item_id + "&company=" + window.localStorage.getItem('current_user_company'),
                                                    dataSrc: "item_fixed_asset_register"
                                                },
                                                scrollCollapse:true,
                                                responsive: true,
                                                scroller: true,
                                                select: {
                                                    style: "single"
                                                },
                                                saveState: true,
                                                rowId: "fixed_asset_register_id",
                                                columns: await ItemDetailsController.itemOnHandColumns(selected_row)
                                            });
                                            ItemDetailsController.tableAutoUpdate(itemfixedassetonhand, $('#item-fixed-asset-on-hand-modal').is(':visible'));
                                        };
                                        break;
                                        case "CA": {
                                            
                                        };
                                        break;
                                        case "SER": {
                                            swal({
                                                icon: "info",
                                                title: "Service Item Selected",
                                                text: "Service Items do not posses on hand",
                                                buttons: false,
                                                timer: 3000,
                                                closeOnEsc: false,
                                                closeOnClickOutside: false
                                            })
                                        };
                                        break;
                                    }
                                } else {
                                    new NothingSelectedAlert().render();
                                }
                            }
                        }
                    ]
                });
                
                ItemDetailsController.tableAutoUpdate(item_details, $('#itemdetails').hasClass("active"));
                ItemDetailsController.selectItem(item_details, selected_row)
                ItemDetailsController.noWhiteSpaces();
                ItemDetailsController.checkItemCodeDuplicate();

                item_details.on('dblclick', 'tr', function() {
                    selected_row.selected_item = item_details.row(this).data();
                    $.blockUI({
                        message: new ModalFormCustom('item-card-modal', 'Item Card', { form_method: "POST", form_id: "item-card", form_enctype: "application/x-www-form-urlencoded" }, 
                        [
                            '<div class="row">' +
                                '<div class="col-md-4">' +
                                    '<div class="form-group">' +
                                        new Label('item-code', [], [], 'Item Code').render() +
                                        new Input('text', [], 'item-code', { disabled: true }).render() +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col">' +
                                    '<div class="form-group">' +
                                        new Label('item-descripsion', [], [], 'Item Descripsion' + Required).render() +
                                        new Input('text', [], 'item-descripsion', { disabled: true }).render() +
                                        '<div class="text-right small"><a href="javascript:;" class="change">Change</a></div>' +
                                    '</div>' +
                                '</div>'+
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-md-3">' +
                                    '<div class="form-group">' +
                                        new Label('item-type', [], [], 'Item Type' + Required).render() +
                                        new Input('text', [], 'item-type', { disabled: true }).render() +
                                        '<div class="text-right small"><a href="javascript:;"  class="change">Change</a></div>' +
                                    '</div>' +
                                '</div>'+
                                (function() {
                                    if ( selected_row.selected_item.item_type_code === "FA" ) {
                                        return (
                                            '<div class="col-md-5">' +
                                            '</div>' +
                                            '<div class="col-md-4">' +
                                                '<div class="form-group">' +
                                                    new Label('fixed-asset-category', [], [], 'Fixed Asset Category' + Required).render() +
                                                    new Input('text', [], 'fixed-asset-category', { disabled: true }).render() +
                                                    '<div class="text-right small"><a href="javascript:;"  class="change">Change</a></div>' +
                                                '</div>' +
                                            '</div>'
                                        );
                                    } else {
                                        return '';
                                    }
                                })() +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-md-3">' +
                                    '<div class="form-group">' +
                                        new Label('item-unit-of-measure', [], [], 'Unit of Measure' + Required).render() +
                                        new Input('text', [], 'item-unit-of-measure', { disabled: true }).render() +
                                        '<div class="text-right small"><a href="javascript:;" class="change">Change</a></div>' +
                                    '</div>' +
                                '</div>'+
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-md-3">' +
                                    '<div class="form-group">' +
                                        new Label('item-on-hand', [], [], 'On Hand : &nbsp;&nbsp;').render() +
                                        '<a href="javascript:;" id="item-on-hand" style="text-decoration:underline;text-decoration-color:inherit;"></a>' +
                                    '</div>' +
                                '</div>'+
                            '</div>'
                        ],
                        [ 
                            new Button(['btn-raised', 'btn-warning'], 'discard', 'Close').render(),
                            new Button(['btn-raised', 'btn-success'], 'save', 'Change').render()
                        ]).render()
                    });

                    $('#item-code').val(selected_row.selected_item.item_code);
                    $('#item-descripsion').val(selected_row.selected_item.item_descripsion);
                    $('#item-type').val(selected_row.selected_item.item_type_code);
                    $('#item-unit-of-measure').val(selected_row.selected_item.unit_of_measure_code);
                    $('#item-on-hand').text(selected_row.selected_item.on_hand);
                    if ( selected_row.selected_item.item_type_code === "FA"  ) {
                        $("#fixed-asset-category").val(selected_row.selected_item.fixed_asset_category_code);
                    }

                });

                $(document).on("click", "#discard", function() {
                    $.unblockUI();
                    $('form')[0].reset();
                    document.body.style.overflowY = "auto";
                });

                $(document).on("click", ".change", async function() {
                    $(this).parent().siblings(":input").removeAttr("disabled");
                    if ( $(this).parent().siblings(":input").attr("id") === "item-type" ) {
                        $(this).parent().siblings(":input").val("");
                        $('#' + $(this).parent().siblings(":input").attr("id")).inputpicker({
                            data: await new ItemDetailsService().getItemTypes().then((resolve) => { return resolve.item_types; }),
                            fields: [
                                { name: "item_type_code", text: 'ITEM TYPE' },
                                { name: "item_type", text: 'DESCRIPSION' }
                            ],
                            headShow: true,
                            fieldText : "item_type_code",
                            fieldValue: "item_type_id",
                            filterOpen: true,
                            autoOpen: true
                        });
                    }
                    if ( $(this).parent().siblings(":input").attr("id") === "item-unit-of-measure" ) {
                        $(this).parent().siblings(":input").val("");
                        $('#' + $(this).parent().siblings(":input").attr("id")).inputpicker({
                            data: await new ItemDetailsService().getUnitsOfMeassure().then((resolve) => { return resolve.units_of_measure; }),
                            fields: [
                                { name: "unit_of_measure_code", text: 'UOM' },
                                { name: "unit_of_measure", text: 'DESCRIPSION' }
                            ],
                            headShow: true,
                            fieldText : "unit_of_measure_code",
                            fieldValue: "unit_of_measure_id",
                            filterOpen: true,
                            autoOpen: true
                        });
                    }
                    if ( $(this).parent().siblings(":input").attr("id") === "fixed-asset-category" ) {
                        
                        $(this).parent().siblings(":input").val("");
                        $('#' + $(this).parent().siblings(":input").attr("id")).inputpicker({
                            data: await new ItemDetailsService().getFixedAssetCategories(window.localStorage.getItem('current_user_company')).then((resolve) => { return resolve.fixed_asset_categories; }),
                            fields: [
                                { name: "fixed_asset_category_code", text: 'FA CODE' },
                                { name: "fixed_asset_category", text: 'FA CATEGORY' }
                            ],
                            headShow: true,
                            fieldText : "fixed_asset_category_code",
                            fieldValue: "fixed_asset_category_id",
                            filterOpen: true,
                            autoOpen: true
                        });
                        
                    }
                });
                
                ItemDetailsController.createItem(swal_text);
            });
        });
      
    }
    
}

export default new ItemDetailsController().builder();