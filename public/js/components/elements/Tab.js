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
class Tab {
    
    constructor(tabs) {
        this.tabs = tabs;
    }
    
    render() {
        return(
            this.tabs.map((value) => { return '<li><a href="#' + (function() { switch ( typeof value ) { case "string": { return value.replace(/\s/g, '').toLowerCase(); } break; case "object": { return value[1]; }; break; } })() + '">' + (function() { switch ( typeof value ) { case "string": { return value; }; break; case "object": { return value[1] }; break; } })() + '</a></li>'; }).join('')
        );
    }
    
}

export default Tab;