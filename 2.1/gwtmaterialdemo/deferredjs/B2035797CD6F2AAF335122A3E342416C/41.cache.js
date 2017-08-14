$wnd.gwtmaterialdemo.runAsyncCallback41("function InstallablePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(932, 57, $intern_57, InstallablePresenter);\n_.onReveal = function onReveal_63(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Installable', \"Installable Feature consists of web app manifest - is a JSON file that gives you the ability to control how your web app or site appears to the user in areas where they would expect to see native apps  (for example, a mobile device's home screen), direct what the user can launch, and define its appearance at launch.\", 'pwa/installable/InstallableView', null));\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_installable_InstallablePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.installable', 'InstallablePresenter', 932);\nfunction InstallableView(){\n  var f_MaterialPanel1, f_MaterialRow2, f_MaterialTitle3, f_MaterialLink4, f_MaterialColumn5, f_PrettyPre6, f_MaterialColumn7, f_MaterialImage8, f_MaterialRow9, f_MaterialTitle10, f_PrettyPre11, f_MaterialRow12, f_MaterialTitle13, f_MaterialImage14, f_MaterialRow15, f_MaterialTitle16, f_MaterialAnchorButton17, sb, sb_0;\n  ViewImpl.call(this);\n  $initWidget_0(this, (f_MaterialPanel1 = new MaterialPanel , $add_14(f_MaterialPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, 'Into your webapp directory create a manifest.json and provide your app information. Also add the designated icon resources with corresponding sizes.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Create the manifest.json'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_MaterialLink4 = new MaterialLink , $setIconType_1(f_MaterialLink4, ($clinit_IconType() , LINK_2)) , $setDisplay_1(f_MaterialLink4, ($clinit_Display() , BLOCK_0)) , $setText_9(f_MaterialLink4.span_1, 'More Details') , f_MaterialLink4.span_1.attached || $add_14(f_MaterialLink4, f_MaterialLink4.span_1) , ($clinit_DOM() , f_MaterialLink4.element_0).setAttribute('href', 'https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/') , $setTextColor(f_MaterialLink4, ($clinit_Color() , BLUE)) , f_MaterialLink4.element_0.setAttribute('target', '_blank') , f_MaterialLink4)) , $add_14(f_MaterialRow2, (f_MaterialColumn5 = new MaterialColumn , $add_14(f_MaterialColumn5, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '{<br> \\u2003\"short_name\": \"AirHorner\",<br> \\u2003\"name\": \"Kinlan\\'s AirHorner of Infamy\",<br> \\u2003\"icons\": [<br> \\u2003\\u2003{<br> \\u2003\\u2003\\u2003\"src\": \"launcher-icon-1x.png\",<br> \\u2003\\u2003\\u2003\"type\": \"image/png\",<br> \\u2003\\u2003 \\u2003\"sizes\": \"48x48\"<br> \\u2003\\u2003},<br> \\u2003\\u2003{<br> \\u2003\\u2003\\u2003\"src\": \"launcher-icon-2x.png\",<br> \\u2003\\u2003\\u2003\"type\": \"image/png\",<br> \\u2003\\u2003\\u2003\"sizes\": \"96x96\"<br> \\u2003\\u2003},<br> \\u2003\\u2003{<br> \\u2003\\u2003\\u2003\"src\": \"launcher-icon-4x.png\",<br> \\u2003\\u2003\\u2003\"type\": \"image/png\",<br> \\u2003\\u2003\\u2003\"sizes\": \"192x192\"<br> \\u2003\\u2003}<br> ],<br> \\u2003\"start_url\": \"index.html?launcher=true\"<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-javascript', true) , f_PrettyPre6)) , $setGrid_0((!f_MaterialColumn5.gridMixin && (f_MaterialColumn5.gridMixin = new GridMixin(f_MaterialColumn5)) , f_MaterialColumn5.gridMixin), 's12 m6 l6') , f_MaterialColumn5)) , $add_14(f_MaterialRow2, (f_MaterialColumn7 = new MaterialColumn , $add_14(f_MaterialColumn7, (f_MaterialImage8 = new MaterialImage , $setValue_15(f_MaterialImage8, 'https://i.imgur.com/DjMPdNE.png', true) , f_MaterialImage8)) , $setGrid_0((!f_MaterialColumn7.gridMixin && (f_MaterialColumn7.gridMixin = new GridMixin(f_MaterialColumn7)) , f_MaterialColumn7.gridMixin), 's12 m6 l6') , f_MaterialColumn7)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2)) , $add_14(f_MaterialPanel1, (f_MaterialRow9 = new MaterialRow , $add_14(f_MaterialRow9, (f_MaterialTitle10 = new MaterialTitle , $setText_13(f_MaterialTitle10.paragraph, 'Last Step is to link your manifest.json into your GWT *App.xml file.') , $setInnerHTML($getElement(f_MaterialTitle10.header), (new SafeHtmlString(htmlEscape('Link to GWT'))).html_0) , f_MaterialTitle10)) , $add_14(f_MaterialRow9, (f_PrettyPre11 = new PrettyPre , $setHTML_0(f_PrettyPre11, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;set-configuration-property name=\"manifest\" value=\"manifest.json\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre11.element_0, 'lang-xml', true) , f_PrettyPre11)) , setStyleName(f_MaterialRow9.element_0, 'code', true) , f_MaterialRow9)) , $add_14(f_MaterialPanel1, (f_MaterialRow12 = new MaterialRow , $add_14(f_MaterialRow12, (f_MaterialTitle13 = new MaterialTitle , $setText_13(f_MaterialTitle13.paragraph, \"Here's a sample screenshot how to enable Add to Homescreen into your mobile device\") , $setInnerHTML($getElement(f_MaterialTitle13.header), (new SafeHtmlString(htmlEscape('Demo'))).html_0) , f_MaterialTitle13)) , $add_14(f_MaterialRow12, (f_MaterialImage14 = new MaterialImage , $setValue_15(f_MaterialImage14, 'https://cloud.githubusercontent.com/assets/3138071/23882061/3f830d0a-0899-11e7-8702-1f75275c6524.gif', true) , f_MaterialImage14)) , setStyleName(f_MaterialRow12.element_0, 'code', true) , f_MaterialRow12)) , $add_14(f_MaterialPanel1, (f_MaterialRow15 = new MaterialRow , $add_14(f_MaterialRow15, (f_MaterialTitle16 = new MaterialTitle , $setText_13(f_MaterialTitle16.paragraph, 'Click the link below to generate manifest easily.') , $setInnerHTML($getElement(f_MaterialTitle16.header), (new SafeHtmlString(htmlEscape('Tool : Manifest Generator'))).html_0) , f_MaterialTitle16)) , $add_14(f_MaterialRow15, (f_MaterialAnchorButton17 = new MaterialAnchorButton , $setText_9(f_MaterialAnchorButton17.span_1, 'Link to Generator Tool') , f_MaterialAnchorButton17.span_1.attached || $add_14(f_MaterialAnchorButton17, f_MaterialAnchorButton17.span_1) , f_MaterialAnchorButton17.element_0.setAttribute('href', 'https://tomitm.github.io/appmanifest/') , f_MaterialAnchorButton17.element_0.setAttribute('target', '_blank') , f_MaterialAnchorButton17)) , setStyleName(f_MaterialRow15.element_0, 'code', true) , f_MaterialRow15)) , f_MaterialPanel1));\n}\n\ndefineClass(1311, 60, $intern_58, InstallableView);\nvar Lgwt_material_design_demo_client_application_pwa_installable_InstallableView_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.installable', 'InstallableView', 1311);\nfunction $get_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallablePresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallablePresenter$_annotation$$none$$) {\n    result0 = new InstallablePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallableView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallablePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallablePresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallablePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallableView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallableView$_annotation$$none$$) {\n    result = new InstallableView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallableView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallableView$_annotation$$none$$;\n}\n\ndefineClass(839, 1, $intern_112);\n_.onSuccess_0 = function onSuccess_44(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$pwa$installable$InstallablePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(41);\n\n//# sourceURL=gwtmaterialdemo-41.js\n")
