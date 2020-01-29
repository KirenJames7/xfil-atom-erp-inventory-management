/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class FixedAssetRegisterService {
    
    getFixedAssetCategories(company) {
        
        return $.get({
            url: `fixedassetcategories?company=${ company }`
        });
        
    }
    
    getFixedAssetCategoryAttributes(company, category) {
        
        return $.get({
            url: `fixedassetattributes?company=${ company }&category${ category}`
        });
        
    }
    
}

export default FixedAssetRegisterService;