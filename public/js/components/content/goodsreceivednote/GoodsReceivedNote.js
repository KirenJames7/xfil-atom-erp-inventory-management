/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Table from '../../elements/Table.js';
import Button from '../../elements/Button.js';
import Select from '../../elements/Select.js';
import SelectLabel from '../../elements/SelectLabel.js';
import ModalFormCustom from '../../elements/ModalFormCustom.js';
import Label from '../../elements/Label.js';
import Required from '../../elements/Required.js';
import Input from '../../elements/Input.js';

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

class GoodsReceivedNote {
    
    constructor() {
        
    }
    
    render() {
        $(document).ready(function() {
            $(document).on("click", "#goodsreceivednote", function(){
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

                let goodsreceivednote = $('#goods-received-note').DataTable({
                    paging: false,
                    info: false,
                    data: data,
                    scrollY: 225,
                    scrollCollapse:true,
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
                            text: "Generate GRN",
                            className: "btn btn-raised btn-primary waves-effect waves-light",
                            action: function() {                            
                                $.blockUI({
                                    message: new ModalFormCustom('goods-received-note-modal', 'Packing Slip', { form_method: "POST", form_id: "packing-slip", form_enctype: "application/x-www-form-urlencoded" },
                                        [ 
                                            '<div class="row justify-content-between">' +
                                                '<div class="col-md-2">' +
                                                    '<div class="form-group">' +
                                                        new SelectLabel("Purchase Order" + Required).render() + '<br />' +
                                                        new Select([ "purchase-order" ], "purchase-order", { required: true }, { "": "Please Select", "PO/2019/000001": "PO/2019/000001", "PO/2019/000002": "PO/2019/000002", "PO/2019/000003": "PO/2019/000003", "PO/2019/000004": "PO/2019/000004" }, 1).render() +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>'
                                        ],
                                        [ 
                                            new Button(['btn-raised', 'btn-warning'], 'discard', 'Discard').render(), 
                                            new Button(['btn-raised', 'btn-success'], 'receive', 'Receive').render()
                                        ]).render()
                                });
                                $('#goods-received-note-modal .modal-dialog').css({
                                    maxWidth: "90%"
                                });
                                $('select').SumoSelect({
                                    search: true
                                });
                                $('.select-label').css({
                                    marginLeft: "0px",
                                    paddingTop: "14px"
                                });

                                let po_vendor = {
                                    "PO/2019/000001": "SOFTLOGIC (PVT) LTD",
                                    "PO/2019/000002": "DMS ELECTRONICS (PVT) LTD",
                                    "PO/2019/000003": "THE COMPUTER COMPANY (PVT) LTD",
                                    "PO/2019/000004": "A VERY LONG TEST COMPANY NAME (PVT) LTD"
                                };

                                $('select.purchase-order').change(function() {
                                    if ($(this).val()) {
                                        $(this)[0].sumo.disable();
                                        $(this).parents('.form-group').append('<div class="small"><a href="javascript:;"  class="change" style="margin-left:5px">Change</a></div>');
                                        $(this).parents('.row').append(
                                            '<div class="col-md-4" style="padding-top:1.5rem">' +
                                                '<div class="form-group">' +
                                                    new Label("goods-received-note-vendor", [], [], "Vendor" + Required).render() +
                                                    new Input("text", [], "goods-received-note-vendor", { required: true }).render() +
                                                '</div>' +
                                            '</div>' +
                                            '<div class="col-md-2">' +
                                                '<div class="form-group">' +
                                                    new SelectLabel("Packing Slip Type" + Required).render() + '<br />' +
                                                    new Select([ "packing-slip-type" ], "packing-slip-type", { required: true }, { 0: "Please Select", 1: "Full Receipt", 2: "Partial Receipt" }, 0).render() +
                                                '</div>' +
                                            '</div>');
                                        $('#goods-received-note-vendor').val(po_vendor[$(this).val()]).attr("disabled", true);
                                        $('select').SumoSelect();
                                        $('.select-label').css({
                                            marginLeft: "0px",
                                            paddingTop: "14px"
                                        });
                                        $('select.packing-slip-type').change(function() {
                                            if ($(this).val() !== "Please Select") {
                                                $(this)[0].sumo.disable();

                                                let testdata = [
                                                    [ "LAPTOP", "LAPTOP DELL LATITUDE 5590 I7", "PCS", "10" ],
                                                    [ "LAPTOP", "LAPTOP DELL LATITUDE 5590 I5", "PCS", "10" ]
                                                ];
                                                let pardata = [
                                                    [ "LAPTOP", "LAPTOP DELL LATITUDE 5590 I7", "PCS", "10" ],
                                                    [ "LAPTOP", "LAPTOP DELL LATITUDE 5590 I3", "PCS", "10" ]
                                                ];
                                                let purchase_order_lines = $.Deferred();
                                                switch ($(this).val()) {
                                                    case "Full Receipt" :
                                                        purchase_order_lines.resolve(testdata);
                                                        break;
                                                    case "Partial Receipt":
                                                        $('#goods-received-note-modal .modal-container').block({
                                                            //try normal modal
                                                            message: new ModalFormCustom("partial-packing-slip-modal", "Please Select", { form_method: "POST", form_id: "partial-packing-slip-form", form_enctype: "application/x-www-form-urlencoded" },
                                                                [
                                                                    '<div class="row">' +
                                                                        '<div class="col">' +
                                                                            new Table('partial-packing-slip', ['table', 'table-bordered', 'table-striped', 'table-hover']).render() +
                                                                        '</div>' +
                                                                    '</div>'
                                                                ],
                                                                [
                                                                    new Button(['btn-raised', 'btn-success'], 'apply', 'Apply').render()
                                                                ]).render()
                                                        });

                                                        let partial_packing_slip = $('#partial-packing-slip').DataTable({
                                                            paging: false,
                                                            info: false,
                                                            searching: false,
                                                            scrollY: 200,
                                                            data: pardata,
                                                            scrollCollapse:true,
                                                            responsive: true,
                                                            processing: true,
                                                            columns: [
                                                                { title: "Item Code" },
                                                                { title: "Item Description" },
                                                                { title: "UoM" },
                                                                { title: "Qty" }
                                                            ]
                                                        });

                                                        $(document).on("click", "#apply", function() {
                                                            $('#goods-received-note-modal .modal-container').unblock();
                                                            purchase_order_lines.resolve(partial_packing_slip.rows().data().toArray());
                                                        });
                                                        break;
                                                }

                                                $.when( purchase_order_lines ).then(function( data ) {
                                                    $(  '<div class="row">' +
                                                        '</div>' +
                                                        '<div class="row">' +
                                                            '<div class="col">' +
                                                                new Table('new-packing-slip', ['table', 'table-bordered', 'table-striped', 'table-hover']).render() +
                                                            '</div>' +
                                                        '</div>'
                                                    ).insertAfter($('form#packing-slip .modal-body .row:last'));

                                                    let newpackingslip = $('#new-packing-slip').DataTable({
                                                        paging: false,
                                                        info: false,
                                                        searching: false,
                                                        scrollY: 200,
                                                        data: data,
                                                        scrollCollapse:true,
                                                        responsive: true,
                                                        processing: true,
                                                        columns: [
                                                            { title: "Item Code" },
                                                            { title: "Item Description" },
                                                            { title: "UoM" },
                                                            { title: "Qty" }
                                                        ]
                                                    });
                                                });
                                            }
                                        });
                                    }
                                });
                                $(document).on("click", ".change",function() {
                                    if ($(this).parents('.row').children().length > 1) {
                                        $(this).parents('.row').children().not(':first').remove();
                                    }
                                    if ($('.modal-body .row').length > 1) {
                                        $('.modal-body .row:not(:first)').remove();
                                    }
                                    $('select.purchase-order')[0].sumo.enable();
                                    $('select.purchase-order')[0].sumo.selectItem("");
                                    $('div.small').remove();
                                });
                            }
                        }
                    ]
                });

                //inspired by https://stackoverflow.com/questions/31586354/jquery-datatables-scroll-to-bottom-when-a-row-is-added
                let $scrollBody = $(goodsreceivednote.table().node()).parent();
                $scrollBody.scrollTop($scrollBody.get(0).scrollHeight);

                let goodsreceivednote_lines = $('#goods-received-note-lines').DataTable({
                    paging: false,
                    info: false,
                    scrollY: 225,
                    scrollCollapse:true,
                    columns: [
                        { title: "Name" },
                        { title: "Position" },
                        { title: "Location" },
                        { title: "Code" },
                        { title: "Date" },
                        { title: "Salary", className: "text-right" }
                    ]
                });

                goodsreceivednote.on('click', 'tr', function() {
                    if (!$(this).hasClass("selected")) {
                        goodsreceivednote.$('tr.selected').removeClass("selected");
                        $(this).addClass("selected");
                        selectedrow.goodsreceivednote = goodsreceivednote.row(this).data();
                        if (goodsreceivednote_lines.rows().data()) {
                            goodsreceivednote_lines.clear();
                        }
                        goodsreceivednote_lines.rows.add(data).draw();
                    }
                });

//                        goodsreceivednote.on('dblclick', 'tr', function() {
//                            selectedrow.goodsreceivednote = goodsreceivednote.row(this).data();
//                            $.blockUI({
//                                message: new ModalForm('purchase-request-modal', 'View Purchase Order', { form_method: "POST", form_id: "purchase-order", form_enctype: "application/x-www-form-urlencoded" }, [ Label('purchase-request-requirement', [], [], 'Purchase Requirement' + Required ) + TextArea([], 'purchase-request-requirement', { required: true, rows:10 }), Label('purchase-request-by', [], [], 'Purchase Requested By') + Input('text', [], 'purchase-request-by') ], [ Button(['btn-raised', 'btn-warning'], 'discard', 'Discard'), Button(['btn-raised', 'btn-secondary'], 'save', 'Save'), Button(['btn-raised', 'btn-success'], 'send-for-approval', 'Send for Approval') ] ).render()
//                            });
//                            //adjusting the view
//                            $('#purchase-request-by').parent().parent().removeClass("col").addClass("col-md-4");
//                            //inspired by https://jsfiddle.net/u2cdfsmq/2/
//                            $('textarea').on('input', function() {
//                                //write a limit
//                                $(this).height('auto');
//                                $(this).height($(this)[0].scrollHeight + 'px');
//                            });
//                            $('#purchase-request-requirement').val(selectedrow.goodsreceivednote[1] + ' ' + selectedrow.goodsreceivednote[1]);
//                            $('#purchase-request-by').val(selectedrow.goodsreceivednote[0]);
//                        });

                $(document).on('click', '#discard', function() {
                    $.unblockUI();
                    document.body.style.overflowY = "auto";
                });
            });
        });
        return(
            '<div class="row">' +
                '<div class="col-12">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-center"> Goods Received Note </h5>' +
                            new Table('goods-received-note', ['table', 'table-bordered', 'table-striped', 'table-hover']).render() +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="row">' +
                '<div class="col-12">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-center"> Goods Received Note Lines </h5>' +
                            new Table('goods-received-note-lines', ['table', 'table-bordered', 'table-striped', 'table-hover']).render() +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    }
    
}

export default new GoodsReceivedNote().render();