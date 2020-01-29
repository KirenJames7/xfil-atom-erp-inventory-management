/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Table from '../../elements/Table.js';
import Button from '../../elements/Button.js';
import ModalFormCustom from '../../elements/ModalFormCustom.js';
import Label from '../../elements/Label.js';
import Required from '../../elements/Required.js';
import Input from '../../elements/Input.js';
import InputHelp from '../../elements/InputHelp.js';
import SelectLabel from '../../elements/SelectLabel.js';
import Select from '../../elements/Select.js';

let data = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox&", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ]
];

class GoodsReturnedStores {
    
    constructor() {
        
    }
    
    render() {
        $(document).ready(function() {
            $(document).on("click", "#goodsreturnedstores", function(){
                let selectedrow = {};
                let swaltext = document.createElement('p');

                function nothingSelectedSWAL() {
                    swal({
                        title: "Nothing Selected!",
                        text: "Please select a record to proceed.",
                        icon: "info",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        buttons: {
                            confirm: {
                                text: "OK"
                            }
                        }
                    });
                }

                let goodsreturnedstores = $('#goods-returned-stores').DataTable({
                    paging: false,
                    info: false,
                    data: data,
                    scrollY: 225,
                    scrollCollapse: true,
                    processing: true,
                    responsive: true,
                    columns: [
                        { title: "Name" },
                        { title: "Position" },
                        { title: "Location" },
                        { title: "Code" },
                        { title: "Date" },
                        { title: "Salary", className: "text-right" }
                    ],
                    dom: "Bfrtip",
                    buttons: [
                        {
                            text: "Generate GRS",
                            className: "btn btn-raised btn-primary waves-effect waves-light",
                            action: function() {                            
                                $.blockUI({
                                    message: new ModalFormCustom('goods-returned-stores-modal', 'Goods Returned to Stores Note', { form_method: "POST", form_id: "grs-note", form_enctype: "application/x-www-form-urlencoded" },
                                        [
                                            '<div class="row justify-content-between">' +
                                                '<div class="col-md-2" style="padding-top:1.5rem">' +
                                                    '<div class="form-group">' +
                                                        new Label("goods-returned-stores-site", [], [], "Site" + Required).render() +
                                                        new Input("text", [], "goods-returned-stores-site", { required: true }).render() +
                                                    '</div>' +
                                                '</div>' +
                                                '<div class="col-md-2" style="padding-top:1.5rem">' +
                                                    '<div class="form-group">' +
                                                        new Label("goods-returned-stores-warehouse", [], [], "Warehouse" + Required).render() +
                                                        new Input("text", [], "goods-returned-stores-warehouse", { required: true }).render() +
                                                    '</div>' +
                                                '</div>' +
                                                '<div class="col-md-2">' +
                                                    '<div class="form-group">' +
                                                        new SelectLabel("Returned By" + Required).render() + '<br />' +
                                                        new Select([ "goods-returned-by" ], "goods-returned-by", { required: true }, { "0": "Please Select", "431": "Kiren Jayesuria", "430": "Roshan Raj", "350": "Ramesh Indrajth" }, 1).render() +
                                                        '<div class="small"><a href="javascript:;"  class="location" style="margin-left:5px">Return from Location</a></div>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +
                                            '<div class="row">' +
                                            '</div>' +
                                            '<div class="row">' +
                                                '<div class="col">' +
                                                    new Table("new-returned-stores", [ "table", "table-bordered", "table-striped", "table-hover" ]).render() +
                                                '</div>' +
                                            '</div>'
                                        ],
                                        [ 
                                            new Button(['btn-raised', 'btn-warning'], 'discard', 'Discard').render(), 
                                            new Button(['btn-raised', 'btn-success'], 'return', 'Return').render()
                                        ]).render()
                                });

                                $('#goods-returned-stores-modal .modal-dialog').css({
                                    maxWidth: "90%"
                                });

                                $('select').SumoSelect({
                                    search: true
                                });

                                $('.select-label').css({
                                    marginLeft: "0px",
                                    paddingTop: "14px"
                                });

                                $('#goods-returned-stores-site').inputpicker({
                                    data: [
                                        { site_code: "ZONE-NW", site_name: "Zone24x7 - Nawala" }
                                    ],
                                    fields: [
                                        { name: "site_code", text: 'SITE' },
                                        { name: "site_name", text: 'DESCRIPSION' }
                                    ],
                                    headShow: true,
                                    fieldText : "site_code",
                                    fieldValue: "site_code",
                                    filterOpen: true,
                                    autoOpen: true
                                });

                                $('#goods-returned-stores-warehouse').inputpicker({
                                    data: [
                                        { warehouse_code: "ZONE-NW-WH", warehouse_name: "Zone24x7 - Nawala Warehouse" }
                                    ],
                                    fields: [
                                        { name: "warehouse_code", text: 'WAREHOUSE' },
                                        { name: "warehouse_name", text: 'DESCRIPSION' }
                                    ],
                                    headShow: true,
                                    fieldText : "warehouse_code",
                                    fieldValue: "warehouse_code",
                                    filterOpen: true,
                                    autoOpen: true
                                });

                                let addcounter = 0;
                                let newissuenote = $('#new-returned-stores').DataTable({
                                    paging: false,
                                    info: false,
                                    searching: false,
                                    scrollY: 200,
                                    scrollCollapse:true,
                                    responsive: true,
                                    processing: true,
                                    columns: [
                                        { title: "Item Code" },
                                        { title: "Item Description" },
                                        { title: "UoM" },
                                        { title: "Qty" }
                                    ],
                                    dom: "Bfrtip",
                                    buttons: [
                                        {
                                            text: "Add",
                                            className: "btn btn-raised btn-primary waves-effect waves-light",
                                            action: function() {
                                                let currenttable = this.table();
                                                let lastrow = currenttable.row(':last', { order: 'applied' }).data();
                                                if (lastrow !== undefined) {
                                                    if (!lastrow.every(e => $("#" + $(e).attr("id")).val() !== "")) {
                                                        return false;
                                                    }
                                                }

                                                addcounter += 1;
                                                currenttable.row.add([ 
                                                    new Input("text", [], "item-code" + addcounter, { required: true }).render(),
                                                    new Input("text", [], "item-attribute-description" + addcounter, { required: true }).render(),
                                                    new Input("text", [], "item-unit-of-measure" + addcounter, { required: true }).render(),
                                                    new Input("text", [], "item-quantity" + addcounter, { required: true }).render()
                                                ]).draw(false).node();

                                                $('#item-code' + addcounter).inputpicker({
                                                    data:[
                                                        { item_code: "LAPTOP", item_descripsion: "LAPTOP", item_type: "FA", item_unit_of_measure: "PCS" },
                                                        { item_code: "SWITCH", item_descripsion: "SWITCH", item_type: "FA", item_unit_of_measure: "PCS" },
                                                        { item_code: "LAPTOPBAG", item_descripsion: "LAPTOP BAG", item_type: "CA", item_unit_of_measure: "PCS" },
                                                        { item_code: "MOUSE", item_descripsion: "MOUSE", item_type: "CA", item_unit_of_measure: "PCS" },
                                                        { item_code: "DELIVERYCHG", item_descripsion: "DELIVERY CHARGES", item_type: "SER", item_unit_of_measure: "NOS" },
                                                        { item_code: "SERVICINGCHG", item_descripsion: "SERVICE CHARGES", item_type: "SER", item_unit_of_measure: "NOS" }
                                                    ],
                                                    fields:[
                                                        { name: 'item_code', text: 'ITEM CODE' },
                                                        { name: 'item_descripsion', text: 'ITEM DESCRIPSION' }
                                                    ],
                                                    headShow: true,
                                                    fieldText : 'item_code',
                                                    fieldValue: 'item_code',
                                                    filterOpen: true,
                                                    autoOpen: true
                                                });

                                                $('#currency' + addcounter).inputpicker({
                                                    data: [
                                                        { currency_code: "LKR", currency_name: "Sri Lankan Rupee" },
                                                        { currency_code: "USD", currency_name: "United States Dollar" },
                                                        { currency_code: "GBP", currency_name: "British Pound Sterling" },
                                                        { currency_code: "EUR", currency_name: "Euro" }
                                                    ],
                                                    fields: [
                                                        { name: "currency_code", text: 'CURRENCY' },
                                                        { name: "currency_name", text: 'NAME' }
                                                    ],
                                                    headShow: true,
                                                    fieldText : "currency_code",
                                                    fieldValue: "currency_code",
                                                    filterOpen: true,
                                                    autoOpen: true
                                                });
                                                let isRunning = false;
                                                $('#item-code' + addcounter).on("change", function(e) {
                                                    e.stopImmediatePropagation();
                                                    e.preventDefault();
                                                    if ($('#item-code' + addcounter).val() !== "") {
                                                        $('#item-attribute-description' + addcounter).val($('#item-code' + addcounter).inputpicker('element', $('#item-code' + addcounter).val())["item_descripsion"]);
                                                        $('#item-unit-of-measure' + addcounter).val($('#item-code' + addcounter).inputpicker('element', $('#item-code' + addcounter).val())["item_unit_of_measure"]);
                                                        if ($('#item-code' + addcounter).inputpicker('element', $('#item-code' + addcounter).val())["item_type"] === "FA") {
                                                            //because inputpicker plugin bug
//                                                                    if (!isRunning) {
//                                                                        $('#purchase-quote-modal .modal-container').block({
//                                                                            message: new ModalFormCustom("item-attribute-descripsion-modal", "Please fill in Item Attributes", { form_method: "POST", form_id: "item-attribute-descripsion", form_enctype: "application/x-www-form-urlencoded" },
//                                                                                [
//                                                                                    '<div class="row">' +
//                                                                                        '<div class="col">' +
//                                                                                            '<div class="form-group">' +
//                                                                                                new Label('attribute-test', [], [], 'Test Attribute' + Required).render() +
//                                                                                                new Input('text', [], 'attribute-test', { required: true }).render() +
//                                                                                            '</div>' +
//                                                                                        '</div>' +
//                                                                                    '</div>'
//                                                                                ],
//                                                                                [
//                                                                                    new Button(['btn-raised', 'btn-success'], 'apply', 'Apply').render()
//                                                                                ]).render()
//                                                                        });
//                                                                        
//                                                                        //check
//                                                                        $('#item-attribute-descripsion input:text').focus();
//                                                                        
//                                                                        isRunning = true;
//                                                                    }
                                                        }
                                                    }
                                                });

                                                $(document).on("click", "#apply", function() {
                                                    $('#purchase-quote-modal .modal-container').unblock();
                                                });

                                                $('#item-unit-price' + addcounter + ' , #item-quantity' + addcounter).on("change", function() {
                                                    calcLineTotal('#item-unit-price' + addcounter + ' , #item-quantity' + addcounter);
                                                });

                                                function calcLineTotal(elem) {
                                                    let $container = $(elem).parent().parent().parent();
                                                    let price = $container.find('#item-unit-price' + addcounter).val() || 0.00;
                                                    let quantity = $container.find('#item-quantity' + addcounter).val() || 0.00;
                                                    let line_total = parseFloat(price) * parseFloat(quantity);
                                                    $('#line-total' + addcounter).val(line_total.toFixed(4));
                                                }
                                            }
                                        }
                                    ]
                                });

                                $(document).on("click", ".location", function() {
                                    $(this).parents(".form-group").html(
                                        new SelectLabel("Issued Location" + Required).render() + '<br />' +
                                        new Select([ "goods-issued-location" ], "goods-issued-location", { required: true }, { "": "Please Select", "Ground Floor": "Ground Floor", "First Floor": "First Floor", "Second Floor": "Second Floor", "Third Floor": "Third Floor" }, 1).render() +
                                        '<div class="small"><a href="javascript:;"  class="employee" style="margin-left:5px">Issue to Employee</a></div>'
                                    );

                                    $('select').SumoSelect({
                                        search: true
                                    });

                                    $('.select-label').css({
                                        marginLeft: "0px",
                                        paddingTop: "14px"
                                    });
                                });

                                $(document).on("click", ".employee", function() {
                                    $(this).parents(".form-group").html(
                                        new SelectLabel("Issue To" + Required).render() + '<br />' +
                                        new Select([ "goods-issued-to" ], "goods-issued-to", { required: true }, { "0": "Please Select", "431": "Kiren Jayesuria", "430": "Roshan Raj", "350": "Ramesh Indrajth" }, 1).render() +
                                        '<div class="small"><a href="javascript:;"  class="location" style="margin-left:5px">Issue to Location</a></div>'
                                    );

                                    $('select').SumoSelect({
                                        search: true
                                    });

                                    $('.select-label').css({
                                        marginLeft: "0px",
                                        paddingTop: "14px"
                                    });
                                });
                            }
                        }
                    ]
                });

                let goodsreturnedstores_lines = $('#goods-returned-stores-lines').DataTable({
                    paging: false,
                    info: false,
                    scrollY: 225,
                    scrollCollapse: true,
                    processing: true,
                    responsive: true,
                    columns: [
                        { title: "Name" },
                        { title: "Position" },
                        { title: "Location" },
                        { title: "Code" },
                        { title: "Date" },
                        { title: "Salary", className: "text-right" }
                    ]
                });

                goodsreturnedstores.on('click', 'tr', function() {
                    if (!$(this).hasClass("selected")) {
                        goodsreturnedstores.$('tr.selected').removeClass("selected");
                        $(this).addClass("selected");
                        selectedrow.goods_returned_stores = goodsreturnedstores.row(this).data();
                        if (goodsreturnedstores_lines.rows().count()) {
                            delete selectedrow.goods_returned_stores;
                            goodsreturnedstores_lines.clear();
                        }
                        goodsreturnedstores_lines.rows.add(data).draw();
                    }
                });

                goodsreturnedstores.on('dblclick', 'tr', function() {
                    selectedrow.goods_returned_stores = goodsreturnedstores.row(this).data();
                    $.blockUI({
                        message: new ModalFormCustom('vendor-card-modal', 'Vendor Card', { form_method: "POST", form_id: "vendor-card", form_enctype: "application/x-www-form-urlencoded" }, 
                        [
                            '<div class="row">' +
                                '<div class="col">' +
                                    '<div class="form-group">' +
                                        new Label("vendor-code", [], [], "Vendor Code").render() +
                                        new Input("text", [], "vendor-code", { disabled: true }).render() +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col">' +
                                    '<div class="form-group">' +
                                        new Label("vendor-name", [], [], "Name" + Required ).render() +
                                        new Input("text", [], "vendor-name", { required: true, disabled: true }).render() + new InputHelp('Please enter').render() +
                                        new InputHelp("Ex: My Company (Pvt) Ltd").render() +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-md-6">' +
                                    '<div class="form-group">' +
                                        new Label('vendor-po-box', [], [], 'PO BOX' + Required).render() +
                                        new Input('text', [ "col-md-4" ], 'vendor-po-box', { required: true, disabled: true }).render() +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        new Label('vendor-address-line-1', [], [], 'Address Line 1' + Required).render() +
                                        new Input('text', [], 'vendor-address-line-1', { required: true, disabled: true }).render() +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        new Label('vendor-address-line-2', [], [], 'Address Line 2').render() +
                                        new Input('text', [], 'vendor-address-line-2', { disabled: true }).render() +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-md-6">' +
                                    '<div class="form-group">' +
                                        new Label('vendor-city', [], [], 'City' + Required).render() +
                                        new Input('text', [], 'vendor-city', { required: true, disabled: true }).render() +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        new Label('vendor-province-state', [], [], 'Province / State' + Required).render() +
                                        new Input('text', [], 'vendor-province-state', { required: true, disabled: true }).render() +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        new Label('vendor-country', [], [], 'Country' + Required).render() +
                                        new Input('text', [], 'vendor-country', { required: true, disabled: true }).render() +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                        ],
                        [ 
                            new Button(['btn-raised', 'btn-warning'], 'discard', 'Discard').render(), 
                            new Button(['btn-raised', 'btn-secondary'], 'save', 'Save').render()
                        ]).render()
                    });

                });

                $(document).on('click', '#discard', function() {
                    $.unblockUI();
                    $('form')[0].reset();
                    document.body.style.overflowY = "auto";
                });
            });
        });
        return(
            '<div class="row">' +
                '<div class="col-12">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-center"> Goods Returned to Stores </h5>' +
                            new Table("goods-returned-stores", [ "table", "table-bordered", "table-striped", "table-hover"]).render() +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="row">' +
                '<div class="col-12">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-center"> Goods Returned to Stores Lines </h5>' +
                            new Table("goods-returned-stores-lines", [ "table", "table-bordered", "table-striped", "table-hover" ]).render() +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    }

}

export default new GoodsReturnedStores().render();