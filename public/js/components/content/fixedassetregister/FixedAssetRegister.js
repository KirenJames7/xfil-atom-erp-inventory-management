/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import FixedAssetController from './FixedAssetRegisterController.js';

class FixedAssetRegister {
    
    render() {
        
        return(
            '<div class="row">' +
                '<div class="col-12">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-center"> Fixed Asset Register </h5>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
        
    }
    
}

export default new FixedAssetRegister().render();