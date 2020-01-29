/* 
 * Copyright (C) 2019 kirenj
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
import Label from '../../elements/Label.js';
import Input from '../../elements/Input.js';
import InputHelp from '../../elements/InputHelp.js';
import TextArea from '../../elements/TextArea.js';
import Required from '../../elements/Required.js';
import Button from '../../elements/Button.js';
import Table from '../../elements/Table.js';
import ModalFormCustom from '../../elements/ModalFormCustom.js';
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

class GoodsIssuedNote {
    
    render() {
        $(document).ready(function() {
            $(document).on("click", "#goodsissuednote", function(){
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

                let goodsissuednote = $('#goods-issued-note').DataTable({
                    paging: false,
                    info: false,
                    data: data,
                    scrollY: 225,
                    scrollCollapse:true,
                    responsive: true,
                    processing: true,
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
                            text: "Generate GIN",
                            className: "btn btn-raised btn-primary waves-effect waves-light",
                            action: function() {                                       
                                $.blockUI({
                                    message: new ModalFormCustom('goods-issued-note-modal', 'Issue Note', { form_method: "POST", form_id: "issue-note", form_enctype: "application/x-www-form-urlencoded" },
                                        [
                                            '<div class="row justify-content-between">' +
                                                '<div class="col-md-2" style="padding-top:1.5rem">' +
                                                    '<div class="form-group">' +
                                                        new Label("goods-issued-note-site", [], [], "Site" + Required).render() +
                                                        new Input("text", [], "goods-issued-note-site", { required: true }).render() +
                                                    '</div>' +
                                                '</div>' +
                                                '<div class="col-md-2" style="padding-top:1.5rem">' +
                                                    '<div class="form-group">' +
                                                        new Label("goods-issued-note-warehouse", [], [], "Warehouse" + Required).render() +
                                                        new Input("text", [], "goods-issued-note-warehouse", { required: true }).render() +
                                                    '</div>' +
                                                '</div>' +
                                                '<div class="col-md-2">' +
                                                    '<div class="form-group">' +
                                                        new SelectLabel("Issue To" + Required).render() + '<br />' +
                                                        new Select([ "goods-issued-to" ], "goods-issued-to", { required: true }, { "0": "Please Select", "431": "Kiren Jayesuria", "430": "Roshan Raj", "350": "Ramesh Indrajth" }, 1).render() +
                                                        '<div class="small"><a href="javascript:;"  class="location" style="margin-left:5px">Issue to Location</a></div>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +
                                            '<div class="row">' +
                                            '</div>' +
                                            '<div class="row">' +
                                                '<div class="col">' +
                                                    new Table("new-issue-note", [ "table", "table-bordered", "table-striped", "table-hover" ]).render() +
                                                '</div>' +
                                            '</div>'
                                        ],
                                        [ 
                                            new Button(['btn-raised', 'btn-warning'], 'discard', 'Discard').render(), 
                                            new Button(['btn-raised', 'btn-success'], 'issue', 'Issue').render()
                                        ]).render()
                                });

                                $('#goods-issued-note-modal .modal-dialog').css({
                                    maxWidth: "90%"
                                });

                                $('select').SumoSelect({
                                    search: true
                                });

                                $('.select-label').css({
                                    marginLeft: "0px",
                                    paddingTop: "14px"
                                });

                                $('#goods-issued-note-site').inputpicker({
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

                                $('#goods-issued-note-warehouse').inputpicker({
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
                                let newissuenote = $('#new-issue-note').DataTable({
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

                let goodsissuednote_lines = $('#goods-issued-note-lines').DataTable({
                    paging: false,
                    info: false,
                    scrollY: 225,
                    scrollCollapse:true,
                    responsive: true,
                    processing: true,
                    columns: [
                        { title: "Name" },
                        { title: "Position" },
                        { title: "Location" },
                        { title: "Code" },
                        { title: "Date" },
                        { title: "Salary", className: "text-right" }
                    ]
                });

                //inspired by https://stackoverflow.com/questions/31586354/jquery-datatables-scroll-to-bottom-when-a-row-is-added
                let $scrollBody = $(goodsissuednote.table().node()).parent();
                $scrollBody.scrollTop($scrollBody.get(0).scrollHeight);


                goodsissuednote.on('click', 'tr', function() {
                    if (!$(this).hasClass("selected")) {
                        goodsissuednote.$('tr.selected').removeClass("selected");
                        $(this).addClass("selected");
                        selectedrow.goods_issed_note = goodsissuednote.row(this).data();
                        if (goodsissuednote_lines.rows().count()) {
                            delete selectedrow.goods_issed_note;
                            goodsissuednote_lines.clear();
                        }
                        goodsissuednote_lines.rows.add(data).draw();

                    }
                });

//                        goodsissuednote.on('dblclick', 'tr', function() {
//                            selectedrow.goods_issed_note = goodsissuednote.row(this).data();
//                            $.blockUI({
//                                message: new ModalForm('purchase-request-modal', 'View Purchase Request', { form_method: "POST", form_id: "purchase-request", form_enctype: "application/x-www-form-urlencoded" },
//                                    [ 
//                                        new Label('purchase-request-requirement', [], [], 'Purchase Requirement' + Required ).render() + new TextArea([], 'purchase-request-requirement', { required: true, rows:10 }).render(),
//                                        new Label('purchase-request-by', [], [], 'Purchase Requested By').render() + new Input('text', [ "col-md-4" ], 'purchase-request-by', {}).render()
//                                    ],
//                                    [ 
//                                        new Button(['btn-raised', 'btn-warning'], 'discard', 'Discard').render(), 
//                                        new Button(['btn-raised', 'btn-secondary'], 'save', 'Save').render(), 
//                                        new Button(['btn-raised', 'btn-success'], 'send-for-approval', 'Send for Approval').render()
//                                    ]).render()
//                            });
//                            //inspired by https://jsfiddle.net/u2cdfsmq/2/
//                            $('textarea').on('input', function() {
//                                //write a limit
//                                $(this).height('auto');
//                                $(this).height($(this)[0].scrollHeight + 'px');
//                            });
//                            $('#purchase-request-requirement').val(selectedrow.goods_issed_note[1] + ' ' + selectedrow.goods_issed_note[1]);
//                            $('#purchase-request-by').val(selectedrow.goods_issed_note[0]);
//                        });
//                        
//                        purchaseprocurement_quote.on('click', 'tr', function(){
//                            if (!$(this).hasClass("selected")) {
//                                purchaseprocurement_quote.$('tr.selected').removeClass("selected");
//                                $(this).addClass("selected");
//                                selectedrow.goods_issed_note = purchaseprocurement_quote.row(this).data();
//                                if (purchaseprocurement_quote_lines.rows().data()) {
//                                    purchaseprocurement_quote_lines.clear();
//                                }
//                                purchaseprocurement_quote_lines.rows.add(data).draw();
//                            }
//                        });

                $(document).on('click', '#discard', function() {
                    $.unblockUI();
                    $('form')[0].reset();
                    document.body.style.overflowY = "auto";
                });

            });
        });
        return (
            '<div class="row">' +
                '<div class="col-12">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-center"> Goods Issued Note </h5>' +
                            new Table('goods-issued-note', ['table', 'table-bordered', 'table-striped', 'table-hover']).render() +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="row">' +
                '<div class="col-12">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-center"> Goods Issued Note Lines </h5>' +
                            new Table('goods-issued-note-lines', ['table', 'table-bordered', 'table-striped', 'table-hover']).render() +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    }
}

export default new GoodsIssuedNote().render();