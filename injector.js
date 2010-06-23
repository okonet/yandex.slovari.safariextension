// 
//  injector.js
//  slovari.yandex.ru.safariextension
//  
//  Created by Andrew Okonetchnikov on 2010-06-23.
//  Copyright 2010 okonet.ru. All rights reserved.
// 

document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event) {
  var selection = window.document.getSelection();
  if(selection != "undefined") {
    safari.self.tab.setContextMenuEventUserInfo(event, selection.toString());
  } else {
    event.preventDefault();
  }
}