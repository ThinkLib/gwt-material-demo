$wnd.gwtmaterialdemo.runAsyncCallback20("function DropdownPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(841, 61, $intern_54, DropdownPresenter);\n_.onReveal = function onReveal_40(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Dropdown', \"You can add dropdown easily by specifying it's item content and add a UiHandler on it to implement any event.\", 'components/dropdown/DropdownView', 'https://material.io/guidelines/components/menus.html#'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_dropdown_DropdownPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.dropdown', 'DropdownPresenter', 841);\nfunction DropdownView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_13(new DropdownView_BinderImpl$Widgets));\n}\n\ndefineClass(1145, 67, $intern_55, DropdownView);\nvar Lgwt_material_design_demo_client_application_components_dropdown_DropdownView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.dropdown', 'DropdownView', 1145);\nfunction $build_f_MaterialPanel1_13(this$static){\n  var f_MaterialPanel1, f_HTMLPanel2, __attachRecord__, f_HTMLPanel3, __attachRecord___0, f_MaterialRow5, f_MaterialRow13, f_MaterialPanel21, f_MaterialRow26, f_MaterialRow37, f_MaterialTitle4, f_MaterialTitle6, f_MaterialButton7, f_MaterialDropDown8, f_MaterialLink9, f_MaterialLink10, f_MaterialLink11, f_PrettyPre12, sb, f_MaterialTitle14, f_MaterialButton15, f_MaterialDropDown16, f_MaterialLink17, f_MaterialLink18, f_MaterialLink19, f_PrettyPre20, sb_0, f_MaterialTitle22, f_MaterialIcon23, f_MaterialDropDown24, linkDialPad, linkVoicemail, linkNotification, f_PrettyPre25, sb_1, f_MaterialTitle27, f_MaterialNavBar28, f_MaterialNavBrand29, f_MaterialNavSection30, f_MaterialLink31, f_MaterialDropDown32, f_MaterialLink33, f_MaterialLink34, f_MaterialLink35, f_PrettyPre36, sb_2, f_MaterialTitle38, f_MaterialButton39, dropdown, f_MaterialLink40, f_MaterialLink41, f_MaterialLink42, f_PrettyPre43, sb_3;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_9(f_MaterialPanel1, (f_HTMLPanel2 = new HTMLPanel($html7_1(this$static.domId0, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6).html_0) , __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel2.element_0)) , $get_0(this$static.domId0Element) , $get_0(this$static.domId2Element) , $get_0(this$static.domId3Element) , $get_0(this$static.domId4Element) , $get_0(this$static.domId5Element) , $get_0(this$static.domId6Element) , __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element) , $addAndReplaceElement(f_HTMLPanel2, (f_HTMLPanel3 = new HTMLPanel($html1_0(this$static.domId1).html_0) , setStyleName(f_HTMLPanel3.element_0, 'code', true) , __attachRecord___0 = attachToDom(f_HTMLPanel3.element_0) , $get_0(this$static.domId1Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel3, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Dropdown Properties'))).html_0)) , fire_5(f_MaterialTitle4, 'Dropdown Properties') , f_MaterialTitle4), $get_0(this$static.domId1Element)) , f_HTMLPanel3), $get_0(this$static.domId0Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow5 = new MaterialRow , $add_9(f_MaterialRow5, (f_MaterialTitle6 = new MaterialTitle , $setText_12(f_MaterialTitle6.paragraph, 'Add a dropdown list to any button. Make sure to add the property activates to be able to initialize the dropdown plugin, it will use that as your id on your dropdown menu.') , $setInnerHTML($getElement(f_MaterialTitle6.header), (new SafeHtmlString(htmlEscape('Introduction'))).html_0) , fire_5(f_MaterialTitle6, 'Introduction') , f_MaterialTitle6)) , $add_9(f_MaterialRow5, (f_MaterialButton7 = new MaterialButton , $setIconType_0(f_MaterialButton7, ($clinit_IconType() , ARROW_DROP_DOWN)) , $setIconPosition(f_MaterialButton7, ($clinit_IconPosition() , RIGHT_7)) , $setText_6(f_MaterialButton7.span_1, 'Dropdown') , f_MaterialButton7.span_1.attached || $add_9(f_MaterialButton7, f_MaterialButton7.span_1) , $setTextColor(f_MaterialButton7, ($clinit_Color() , WHITE)) , $setActivates(f_MaterialButton7, 'dp-2') , f_MaterialButton7)) , $add_9(f_MaterialRow5, (f_MaterialDropDown8 = new MaterialDropDown_2('dp-2') , $add_26(f_MaterialDropDown8, (f_MaterialLink9 = new MaterialLink , $setText_6(f_MaterialLink9.span_1, 'First') , f_MaterialLink9.span_1.attached || $add_9(f_MaterialLink9, f_MaterialLink9.span_1) , f_MaterialLink9)) , $add_26(f_MaterialDropDown8, (f_MaterialLink10 = new MaterialLink , $setText_6(f_MaterialLink10.span_1, 'Second') , f_MaterialLink10.span_1.attached || $add_9(f_MaterialLink10, f_MaterialLink10.span_1) , f_MaterialLink10)) , $add_26(f_MaterialDropDown8, (f_MaterialLink11 = new MaterialLink , $setText_6(f_MaterialLink11.span_1, 'Third') , f_MaterialLink11.span_1.attached || $add_9(f_MaterialLink11, f_MaterialLink11.span_1) , f_MaterialLink11)) , f_MaterialDropDown8.options_0.constrain_width = true , f_MaterialDropDown8)) , $add_9(f_MaterialRow5, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialTitle title=\"Introduction\" description=\"Add a dropdown list to any button. Make sure to add the property activates to be able to initialize the dropdown plugin, it will use that as your id on your dropdown menu.\"/&gt;<br> &lt;!-- Activator --&gt;<br> &lt;m:MaterialButton text=\"Dropdown\" iconType=\"ARROW_DROP_DOWN\" iconPosition=\"RIGHT\" textColor=\"WHITE\" activates=\"dp-2\"/&gt;<br> &lt;!-- My Drop Down --&gt;<br> &lt;m:MaterialDropDown activator=\"dp-2\" constrainWidth=\"true\"&gt;<br> \\u2003&lt;m:MaterialLink text=\"First\" /&gt;<br> \\u2003&lt;m:MaterialLink text=\"Second\" /&gt;<br> \\u2003&lt;m:MaterialLink text=\"Third\" /&gt;<br> &lt;/m:MaterialDropDown&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-xml', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow5.element_0, 'code', true) , f_MaterialRow5), $get_0(this$static.domId2Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow13 = new MaterialRow , $add_9(f_MaterialRow13, (f_MaterialTitle14 = new MaterialTitle , $setText_12(f_MaterialTitle14.paragraph, 'You can add divider, waves and color attributes to your dropdown. On items you can use any Material Widgets like MaterialLink, MaterialButton etc. to add it inside the dropdown.') , $setInnerHTML($getElement(f_MaterialTitle14.header), (new SafeHtmlString(htmlEscape('Designing'))).html_0) , fire_5(f_MaterialTitle14, 'Designing') , f_MaterialTitle14)) , $add_9(f_MaterialRow13, (f_MaterialButton15 = new MaterialButton , $setIconType_0(f_MaterialButton15, ARROW_DROP_DOWN) , $setIconPosition(f_MaterialButton15, RIGHT_7) , $setText_6(f_MaterialButton15.span_1, 'Dropdown') , f_MaterialButton15.span_1.attached || $add_9(f_MaterialButton15, f_MaterialButton15.span_1) , $setTextColor(f_MaterialButton15, WHITE) , $setActivates(f_MaterialButton15, 'dp-3') , f_MaterialButton15)) , $add_9(f_MaterialRow13, (f_MaterialDropDown16 = new MaterialDropDown_2('dp-3') , $add_26(f_MaterialDropDown16, (f_MaterialLink17 = new MaterialLink , $setIconType_0(f_MaterialLink17, POLYMER) , $setIconPosition(f_MaterialLink17, RIGHT_7) , $setText_6(f_MaterialLink17.span_1, 'First') , f_MaterialLink17.span_1.attached || $add_9(f_MaterialLink17, f_MaterialLink17.span_1) , $getElement((!f_MaterialLink17.separatorMixin && (f_MaterialLink17.separatorMixin = new SeparatorMixin(f_MaterialLink17)) , f_MaterialLink17.separatorMixin).uiObject).style['borderBottom'] = '1px solid #e9e9e9' , f_MaterialLink17)) , $add_26(f_MaterialDropDown16, (f_MaterialLink18 = new MaterialLink , $setIconType_0(f_MaterialLink18, POLYMER) , $setIconPosition(f_MaterialLink18, RIGHT_7) , $setText_6(f_MaterialLink18.span_1, 'Second') , f_MaterialLink18.span_1.attached || $add_9(f_MaterialLink18, f_MaterialLink18.span_1) , $getElement((!f_MaterialLink18.separatorMixin && (f_MaterialLink18.separatorMixin = new SeparatorMixin(f_MaterialLink18)) , f_MaterialLink18.separatorMixin).uiObject).style['borderBottom'] = '1px solid #e9e9e9' , f_MaterialLink18)) , $add_26(f_MaterialDropDown16, (f_MaterialLink19 = new MaterialLink , $setIconType_0(f_MaterialLink19, POLYMER) , $setIconPosition(f_MaterialLink19, RIGHT_7) , $setText_6(f_MaterialLink19.span_1, 'Third') , f_MaterialLink19.span_1.attached || $add_9(f_MaterialLink19, f_MaterialLink19.span_1) , $getElement((!f_MaterialLink19.separatorMixin && (f_MaterialLink19.separatorMixin = new SeparatorMixin(f_MaterialLink19)) , f_MaterialLink19.separatorMixin).uiObject).style['borderBottom'] = '1px solid #e9e9e9' , f_MaterialLink19)) , f_MaterialDropDown16.options_0.constrain_width = true , f_MaterialDropDown16)) , $add_9(f_MaterialRow13, (f_PrettyPre20 = new PrettyPre , $setHTML_0(f_PrettyPre20, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialTitle title=\"Designing\" description=\"You can add divider, waves and color attributes to your dropdown. On items you can use any Material Widgets like MaterialLink, MaterialButton etc. to add it inside the dropdown.\"/&gt;<br> &lt;!-- Activator --&gt;<br> &lt;m:MaterialButton text=\"Dropdown\" iconType=\"ARROW_DROP_DOWN\" iconPosition=\"RIGHT\" textColor=\"WHITE\" activates=\"dp-3\"/&gt;<br> &lt;!-- My Drop Down --&gt;<br> &lt;m:MaterialDropDown activator=\"dp-3\" constrainWidth=\"true\"&gt;<br> \\u2003&lt;m:MaterialLink text=\"First\" iconType=\"POLYMER\" iconPosition=\"RIGHT\" separator=\"true\"/&gt;<br> \\u2003&lt;m:MaterialLink text=\"Second\" iconType=\"POLYMER\" iconPosition=\"RIGHT\" separator=\"true\"/&gt;<br> \\u2003&lt;m:MaterialLink text=\"Third\" iconType=\"POLYMER\" iconPosition=\"RIGHT\" separator=\"true\"/&gt;<br> &lt;/m:MaterialDropDown&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre20.element_0, 'lang-xml', true) , f_PrettyPre20)) , setStyleName(f_MaterialRow13.element_0, 'code', true) , f_MaterialRow13), $get_0(this$static.domId3Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialPanel21 = new MaterialPanel , $add_9(f_MaterialPanel21, (f_MaterialTitle22 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle22.header), (new SafeHtmlString(htmlEscape('Icon Dropdown'))).html_0) , fire_5(f_MaterialTitle22, 'Icon Dropdown') , f_MaterialTitle22)) , $add_9(f_MaterialPanel21, (f_MaterialIcon23 = new MaterialIcon , $setWaves(f_MaterialIcon23, ($clinit_WavesType() , DEFAULT_8)) , $setGrid_0((!f_MaterialIcon23.gridMixin && (f_MaterialIcon23.gridMixin = new GridMixin(f_MaterialIcon23)) , f_MaterialIcon23.gridMixin), 'l2') , $setIconType_4(f_MaterialIcon23, PHONE) , $setIconColor_3(f_MaterialIcon23, BLACK) , $setActivates(f_MaterialIcon23, 'dp-4') , f_MaterialIcon23)) , $add_9(f_MaterialPanel21, (f_MaterialDropDown24 = new MaterialDropDown_2('dp-4') , $add_26(f_MaterialDropDown24, (linkDialPad = new MaterialLink , $setWaves(linkDialPad, DEFAULT_8) , $setIconType_0(linkDialPad, DIALPAD) , linkDialPad.element_0.style['width'] = '200px' , $setIconPosition(linkDialPad, LEFT_6) , $setFontSize_1((!linkDialPad.fontSizeMixin && (linkDialPad.fontSizeMixin = new FontSizeMixin(linkDialPad)) , linkDialPad.fontSizeMixin), '0.9em') , $setText_6(linkDialPad.span_1, 'Redial') , linkDialPad.span_1.attached || $add_9(linkDialPad, linkDialPad.span_1) , $setTextColor(linkDialPad, BLACK) , linkDialPad)) , $add_26(f_MaterialDropDown24, (linkVoicemail = new MaterialLink , $setWaves(linkVoicemail, DEFAULT_8) , $setIconType_0(linkVoicemail, VOICEMAIL) , linkVoicemail.element_0.style['width'] = '200px' , $setIconPosition(linkVoicemail, LEFT_6) , $setFontSize_1((!linkVoicemail.fontSizeMixin && (linkVoicemail.fontSizeMixin = new FontSizeMixin(linkVoicemail)) , linkVoicemail.fontSizeMixin), '0.9em') , $setText_6(linkVoicemail.span_1, 'Check voicemail') , linkVoicemail.span_1.attached || $add_9(linkVoicemail, linkVoicemail.span_1) , $setTextColor(linkVoicemail, BLACK) , $getElement((!linkVoicemail.separatorMixin && (linkVoicemail.separatorMixin = new SeparatorMixin(linkVoicemail)) , linkVoicemail.separatorMixin).uiObject).style['borderBottom'] = '1px solid #e9e9e9' , $setEnabled_4((!linkVoicemail.enabledMixin && (linkVoicemail.enabledMixin = new EnabledMixin(linkVoicemail)) , linkVoicemail.enabledMixin), false) , linkVoicemail)) , $add_26(f_MaterialDropDown24, (linkNotification = new MaterialLink , $setWaves(linkNotification, DEFAULT_8) , $setIconType_0(linkNotification, NOTIFICATIONS_OFF) , linkNotification.element_0.style['width'] = '200px' , $setIconPosition(linkNotification, LEFT_6) , $setFontSize_1((!linkNotification.fontSizeMixin && (linkNotification.fontSizeMixin = new FontSizeMixin(linkNotification)) , linkNotification.fontSizeMixin), '0.9em') , $setText_6(linkNotification.span_1, 'Disable Notification') , linkNotification.span_1.attached || $add_9(linkNotification, linkNotification.span_1) , $setTextColor(linkNotification, BLACK) , linkNotification)) , f_MaterialDropDown24.options_0.constrain_width = false , f_MaterialDropDown24)) , $add_9(f_MaterialPanel21, (f_PrettyPre25 = new PrettyPre , $setHTML_0(f_PrettyPre25, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;!-- Activator --&gt;<br> &lt;m:MaterialIcon iconType=\"PHONE\" iconColor=\"BLACK\" activates=\"dp-4\" waves=\"DEFAULT\" grid=\"l2\"/&gt;<br>  &lt;!-- My Drop Down --&gt;<br> &lt;m:MaterialDropDown activator=\"dp-4\" constrainWidth=\"false\"&gt;<br> \\u2003&lt;m:MaterialLink ui:field=\"linkDialPad\" fontSize=\"0.9em\" waves=\"DEFAULT\" textColor=\"BLACK\" iconType=\"DIALPAD\" iconPosition=\"LEFT\" text=\"Redial\" /&gt;<br> \\u2003&lt;m:MaterialLink ui:field=\"linkVoicemail\" fontSize=\"0.9em\" waves=\"DEFAULT\" enabled=\"false\" textColor=\"BLACK\" iconType=\"VOICEMAIL\" iconPosition=\"LEFT\" text=\"Check voicemail\" separator=\"true\"/&gt;<br> \\u2003&lt;m:MaterialLink ui:field=\"linkNotification\" fontSize=\"0.9em\" waves=\"DEFAULT\" textColor=\"BLACK\" iconType=\"NOTIFICATIONS_OFF\" iconPosition=\"LEFT\" text=\"Disable Notification\" /&gt;<br> &lt;/m:MaterialDropDown&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre25.element_0, 'lang-xml', true) , f_PrettyPre25)) , setStyleName(f_MaterialPanel21.element_0, 'code', true) , f_MaterialPanel21), $get_0(this$static.domId4Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow26 = new MaterialRow , $add_9(f_MaterialRow26, (f_MaterialTitle27 = new MaterialTitle , $setText_12(f_MaterialTitle27.paragraph, 'You can now easily integrate an icon or link type dropdown inside navbar.') , $setInnerHTML($getElement(f_MaterialTitle27.header), (new SafeHtmlString(htmlEscape('Dropdown inside NavBar'))).html_0) , fire_5(f_MaterialTitle27, 'Dropdown inside NavBar') , f_MaterialTitle27)) , $add_9(f_MaterialRow26, (f_MaterialNavBar28 = new MaterialNavBar , $add_30(f_MaterialNavBar28, (f_MaterialNavBrand29 = new MaterialNavBrand , $add_9(f_MaterialNavBrand29, f_MaterialNavBrand29.container) , $getElement(f_MaterialNavBrand29.container).textContent = 'App Name' , f_MaterialNavBrand29)) , $add_30(f_MaterialNavBar28, (f_MaterialNavSection30 = new MaterialNavSection , $add_13(f_MaterialNavSection30, new ListItem_0((f_MaterialLink31 = new MaterialLink , $setIconType_0(f_MaterialLink31, ARROW_DROP_DOWN) , $setIconPosition(f_MaterialLink31, RIGHT_7) , $setText_6(f_MaterialLink31.span_1, 'Dropdown') , f_MaterialLink31.span_1.attached || $add_9(f_MaterialLink31, f_MaterialLink31.span_1) , $setTextColor(f_MaterialLink31, WHITE) , $setActivates(f_MaterialLink31, 'dp-5') , f_MaterialLink31))) , $setPosition_2(f_MaterialNavSection30, ($clinit_Position() , RIGHT_8)) , f_MaterialNavSection30)) , f_MaterialNavBar28.element_0.style['width'] = '100%' , f_MaterialNavBar28)) , $add_9(f_MaterialRow26, (f_MaterialDropDown32 = new MaterialDropDown_2('dp-5') , $add_26(f_MaterialDropDown32, (f_MaterialLink33 = new MaterialLink , $setWaves(f_MaterialLink33, DEFAULT_8) , $setText_6(f_MaterialLink33.span_1, 'Drop 1') , f_MaterialLink33.span_1.attached || $add_9(f_MaterialLink33, f_MaterialLink33.span_1) , $setTextColor(f_MaterialLink33, BLACK) , f_MaterialLink33)) , $add_26(f_MaterialDropDown32, (f_MaterialLink34 = new MaterialLink , $setWaves(f_MaterialLink34, DEFAULT_8) , $setText_6(f_MaterialLink34.span_1, 'Drop 2') , f_MaterialLink34.span_1.attached || $add_9(f_MaterialLink34, f_MaterialLink34.span_1) , $setTextColor(f_MaterialLink34, BLACK) , $getElement((!f_MaterialLink34.separatorMixin && (f_MaterialLink34.separatorMixin = new SeparatorMixin(f_MaterialLink34)) , f_MaterialLink34.separatorMixin).uiObject).style['borderBottom'] = '1px solid #e9e9e9' , $setEnabled_4((!f_MaterialLink34.enabledMixin && (f_MaterialLink34.enabledMixin = new EnabledMixin(f_MaterialLink34)) , f_MaterialLink34.enabledMixin), false) , f_MaterialLink34)) , $add_26(f_MaterialDropDown32, (f_MaterialLink35 = new MaterialLink , $setWaves(f_MaterialLink35, DEFAULT_8) , $setText_6(f_MaterialLink35.span_1, 'Drop 3') , f_MaterialLink35.span_1.attached || $add_9(f_MaterialLink35, f_MaterialLink35.span_1) , $setTextColor(f_MaterialLink35, BLACK) , f_MaterialLink35)) , f_MaterialDropDown32.options_0.constrain_width = true , f_MaterialDropDown32)) , $add_9(f_MaterialRow26, (f_PrettyPre36 = new PrettyPre , $setHTML_0(f_PrettyPre36, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialNavBar width=\"100%\"&gt;<br> \\u2003&lt;m:MaterialNavBrand text=\"App Name\"/&gt;<br> \\u2003&lt;m:MaterialNavSection position=\"RIGHT\"&gt;<br> \\u2003\\u2003&lt;!--Activator --&gt;<br> \\u2003\\u2003&lt;m:MaterialLink text=\"Dropdown\" activates=\"dp-5\" textColor=\"WHITE\" iconType=\"ARROW_DROP_DOWN\" iconPosition=\"RIGHT\"/&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br> &lt;/m:MaterialNavBar&gt;<br><br>  &lt;!-- My Dropdown --&gt;<br> &lt;m:MaterialDropDown activator=\"dp-5\" constrainWidth=\"true\"&gt;<br> \\u2003&lt;m:MaterialLink waves=\"DEFAULT\" textColor=\"BLACK\" text=\"Drop 1\" /&gt;<br> \\u2003&lt;m:MaterialLink waves=\"DEFAULT\" enabled=\"false\" textColor=\"BLACK\" text=\"Drop 2\" separator=\"true\"/&gt;<br> \\u2003&lt;m:MaterialLink waves=\"DEFAULT\" textColor=\"BLACK\" text=\"Drop 3\" /&gt;<br> &lt;/m:MaterialDropDown&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre36.element_0, 'lang-xml', true) , f_PrettyPre36)) , setStyleName(f_MaterialRow26.element_0, 'code', true) , f_MaterialRow26), $get_0(this$static.domId5Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow37 = new MaterialRow , $add_9(f_MaterialRow37, (f_MaterialTitle38 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle38.header), (new SafeHtmlString(htmlEscape('Selection Event'))).html_0) , fire_5(f_MaterialTitle38, 'Selection Event') , f_MaterialTitle38)) , $add_9(f_MaterialRow37, (f_MaterialButton39 = new MaterialButton , $setIconType_0(f_MaterialButton39, ARROW_DROP_DOWN) , $setIconPosition(f_MaterialButton39, RIGHT_7) , $setText_6(f_MaterialButton39.span_1, 'Dropdown') , f_MaterialButton39.span_1.attached || $add_9(f_MaterialButton39, f_MaterialButton39.span_1) , $setTextColor(f_MaterialButton39, WHITE) , $setActivates(f_MaterialButton39, 'dp-selection') , f_MaterialButton39)) , $add_9(f_MaterialRow37, (dropdown = new MaterialDropDown_2('dp-selection') , $add_26(dropdown, (f_MaterialLink40 = new MaterialLink , $setText_6(f_MaterialLink40.span_1, 'First') , f_MaterialLink40.span_1.attached || $add_9(f_MaterialLink40, f_MaterialLink40.span_1) , f_MaterialLink40)) , $add_26(dropdown, (f_MaterialLink41 = new MaterialLink , $setText_6(f_MaterialLink41.span_1, 'Second') , f_MaterialLink41.span_1.attached || $add_9(f_MaterialLink41, f_MaterialLink41.span_1) , f_MaterialLink41)) , $add_26(dropdown, (f_MaterialLink42 = new MaterialLink , $setText_6(f_MaterialLink42.span_1, 'Third') , f_MaterialLink42.span_1.attached || $add_9(f_MaterialLink42, f_MaterialLink42.span_1) , f_MaterialLink42)) , dropdown.options_0.constrain_width = true , $addSelectionHandler_1(dropdown, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , dropdown)) , $add_9(f_MaterialRow37, (f_PrettyPre43 = new PrettyPre , $setHTML_0(f_PrettyPre43, (sb_3 = new StringBuilder , sb_3.string += '@UiHandler(\"dropdown\")<br> void onDropdown(SelectionEvent\\u2003Widget&gt; callback){<br> \\u2003MaterialToast.fireToast(\"Selected : \" + ((MaterialLink)callback.getSelectedItem()).getText());<br> }<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre43.element_0, 'lang-java', true) , f_PrettyPre43)) , setStyleName(f_MaterialRow37.element_0, 'code', true) , f_MaterialRow37), $get_0(this$static.domId6Element)) , f_HTMLPanel2));\n  return f_MaterialPanel1;\n}\n\nfunction DropdownView_BinderImpl$Widgets(){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new DropdownView_BinderImpl$Widgets$1;\n  this.domId1 = $createUniqueId($doc);\n  this.domId0 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n}\n\ndefineClass(1582, 1, {}, DropdownView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_dropdown_DropdownView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.dropdown', 'DropdownView_BinderImpl/Widgets', 1582);\nfunction DropdownView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1583, 1, $intern_63, DropdownView_BinderImpl$Widgets$1);\n_.onSelection = function onSelection_10(event_0){\n  fireToast('Selected : ' + $getText_1(castTo(event_0.selectedItem, 19).span_1));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_dropdown_DropdownView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.dropdown', 'DropdownView_BinderImpl/Widgets/1', 1583);\nfunction $html1_0(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <blockquote> <p><b>activator<\\/b> - name of your dropdown, a unique name needs for the activator to set it e.g activates='dropdown_name'<\\/p> <p><b>constraintWidth<\\/b> - Does not change width of dropdown to that of the activator<\\/p> <p><b>belowOrigin<\\/b> - displays dropdown below the button<\\/p> <p><b>hover<\\/b> - If sets to true, when you hover to your activator, dropdown component will be shown.<\\/p> <\\/blockquote>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html7_1(arg0, arg1, arg2, arg3, arg4, arg5){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$) {\n    result0 = new DropdownPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$) {\n    result = new DropdownView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownView$_annotation$$none$$;\n}\n\ndefineClass(739, 1, $intern_102);\n_.onSuccess_0 = function onSuccess_21(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$dropdown$DropdownPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(20);\n\n//# sourceURL=gwtmaterialdemo-20.js\n")
