/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import ItemDetailController from './ItemDetailsController.js';
import Table from '../../elements/Table.js';

class ItemDetails {
    
    render() {
        
        return(
            '<div class="row">' +
                '<div class="col-12">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-center"> Item Details </h5>' +
                            new Table("item-details", [ "table", "table-striped", "table-bordered", "table-hover" ]).render() +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );

    }
    
}

export default new ItemDetails().render();