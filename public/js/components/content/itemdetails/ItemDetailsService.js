/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class ItemDetailsService {
    
    getItemTypes() {
        
        return $.get({
            url: "itemtypes"
        });
        
    }
    
    getUnitsOfMeassure() {
        
        return $.get({
            url: "unitsofmeasure"
        });
        
    }
    
    getFixedAssetCategories(company) {
        
        return $.get({
            url: `fixedassetcategories?company=${ company }`
        });
        
    }
    
    getItemCodeValidity(data) {
        
        return $.get({
            url: "itemcodevalidity",
            data: data
        });
        
    }
    
    itemCreation(formData) {
        
        return $.post({
            url: "itemcreation",
            data: formData
        });
        
    }
    
    getItemTransactionStatus() {
        
        
        
    }
       
}

export default ItemDetailsService;