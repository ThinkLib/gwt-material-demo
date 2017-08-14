$wnd.gwtmaterialdemo.runAsyncCallback48("function $clinit_ViewPortHelper$ViewPort(){\n  $clinit_ViewPortHelper$ViewPort = emptyMethod;\n  MOBILE_SMALL = new ViewPortHelper$ViewPort('MOBILE_SMALL', 0, '(max-width: 320px)');\n  MOBILE_MEDIUM = new ViewPortHelper$ViewPort('MOBILE_MEDIUM', 1, '(min-width: 321px) and (max-width: 375px)');\n  MOBILE_LARGE = new ViewPortHelper$ViewPort('MOBILE_LARGE', 2, '(min-width: 376px) and (max-width: 425px)');\n  TABLET = new ViewPortHelper$ViewPort('TABLET', 3, '(min-width: 426px) and (max-width: 768px)');\n  LAPTOP = new ViewPortHelper$ViewPort('LAPTOP', 4, '(min-width: 769px) and (max-width: 1024px)');\n  LAPTOP_LARGE = new ViewPortHelper$ViewPort('LAPTOP_LARGE', 5, '(min-width: 1025px) and (max-width: 1440px)');\n  LAPTOP_4K = new ViewPortHelper$ViewPort('LAPTOP_4K', 6, '(min-width: 1441px) and (max-width: 2560px)');\n}\n\nfunction ViewPortHelper$ViewPort(enum$name, enum$ordinal, mediaQuery){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.mediaQuery = mediaQuery;\n}\n\nfunction values_32(){\n  $clinit_ViewPortHelper$ViewPort();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_base_helper_ViewPortHelper$ViewPort_2_classLit, 1), $intern_9, 229, 0, [MOBILE_SMALL, MOBILE_MEDIUM, MOBILE_LARGE, TABLET, LAPTOP, LAPTOP_LARGE, LAPTOP_4K]);\n}\n\ndefineClass(229, 27, {229:1, 4:1, 35:1, 27:1}, ViewPortHelper$ViewPort);\nvar LAPTOP, LAPTOP_4K, LAPTOP_LARGE, MOBILE_LARGE, MOBILE_MEDIUM, MOBILE_SMALL, TABLET;\nvar Lgwt_material_design_client_base_helper_ViewPortHelper$ViewPort_2_classLit = createForEnum('gwt.material.design.client.base.helper', 'ViewPortHelper/ViewPort', 229, values_32);\nfunction HelperPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(940, 57, $intern_57, HelperPresenter);\n_.onReveal = function onReveal_71(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Helper', '', '', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_helper_HelperPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperPresenter', 940);\nfunction $detectViewPort(this$static){\n  if (matchMedia_0(($clinit_ViewPortHelper$ViewPort() , MOBILE_SMALL).mediaQuery)) {\n    $setText_5(this$static.lblViewPort, 'ViewPort : Mobile Small');\n    $setIconType_1(this$static.lblViewPort, ($clinit_IconType() , PHONE_ANDROID));\n  }\n  if (matchMedia_0(MOBILE_MEDIUM.mediaQuery)) {\n    $setText_5(this$static.lblViewPort, 'ViewPort : Mobile Medium');\n    $setIconType_1(this$static.lblViewPort, ($clinit_IconType() , PHONE_ANDROID));\n  }\n  if (matchMedia_0(MOBILE_LARGE.mediaQuery)) {\n    $setText_5(this$static.lblViewPort, 'ViewPort : Mobile Large');\n    $setIconType_1(this$static.lblViewPort, ($clinit_IconType() , PHONE_ANDROID));\n  }\n  if (matchMedia_0(TABLET.mediaQuery)) {\n    $setText_5(this$static.lblViewPort, 'ViewPort : Tablet');\n    $setIconType_1(this$static.lblViewPort, ($clinit_IconType() , TABLET_ANDROID));\n  }\n  if (matchMedia_0(LAPTOP.mediaQuery)) {\n    $setText_5(this$static.lblViewPort, 'ViewPort : Laptop');\n    $setIconType_1(this$static.lblViewPort, ($clinit_IconType() , LAPTOP_0));\n  }\n  if (matchMedia_0(LAPTOP_LARGE.mediaQuery)) {\n    $setText_5(this$static.lblViewPort, 'ViewPort : Laptop Large');\n    $setIconType_1(this$static.lblViewPort, ($clinit_IconType() , LAPTOP_0));\n  }\n  if (matchMedia_0(LAPTOP_4K.mediaQuery)) {\n    $setText_5(this$static.lblViewPort, 'ViewPort : Laptop 4K');\n    $setIconType_1(this$static.lblViewPort, ($clinit_IconType() , LAPTOP_0));\n  }\n}\n\nfunction HelperView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_37(new HelperView_BinderImpl$Widgets(this)));\n  $detectViewPort(this);\n  addResizeHandler(new HelperView$lambda$0$Type(this));\n}\n\ndefineClass(1323, 60, $intern_58, HelperView);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView', 1323);\nfunction HelperView$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1324, 1, $intern_46, HelperView$lambda$0$Type);\n_.onResize = function onResize_16(arg0){\n  $detectViewPort(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView/lambda$0$Type', 1324);\nfunction $build_f_HTMLPanel1_37(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow7, f_MaterialRow16, f_HTMLPanel19, __attachRecord___0, f_HTMLPanel22, __attachRecord___1, f_MaterialRow25, f_MaterialRow28, f_MaterialRow34, f_MaterialRow68, f_MaterialTitle3, f_MaterialPanel4, f_MaterialLabel5, f_PrettyPre6, sb, f_MaterialTitle8, f_MaterialPanel9, f_MaterialLabel10, f_MaterialPanel11, f_MaterialLabel12, f_MaterialPanel13, f_MaterialLabel14, f_PrettyPre15, sb_0, f_MaterialTitle17, f_PrettyPre18, sb_1, f_MaterialTitle20, f_PrettyPre21, sb_2, f_MaterialTitle23, f_PrettyPre24, sb_3, f_MaterialTitle26, lblViewPort, f_PrettyPre27, sb_4, f_MaterialTitle29, f_MaterialTitle30, f_MaterialPanel31, f_MaterialLabel32, f_PrettyPre33, sb_5, f_MaterialTitle35, f_MaterialRow36, f_MaterialColumn37, f_MaterialCard38, f_MaterialCardImage39, f_MaterialCardContent42, f_MaterialCardAction44, f_MaterialColumn47, f_MaterialCard48, f_MaterialCardImage49, f_MaterialCardContent52, f_MaterialCardAction54, f_MaterialColumn57, f_MaterialCard58, f_MaterialCardImage59, f_MaterialCardContent62, f_MaterialCardAction64, f_PrettyPre67, sb_6, f_MaterialTitle69, f_MaterialLabel70, f_MaterialImage40, f_MaterialCardTitle41, f_MaterialLabel43, f_MaterialLink45, f_MaterialLink46, f_MaterialImage50, f_MaterialCardTitle51, f_MaterialLabel53, f_MaterialLink55, f_MaterialLink56, f_MaterialImage60, f_MaterialCardTitle61, f_MaterialLabel63, f_MaterialLink65, f_MaterialLink66;\n  f_HTMLPanel1 = new HTMLPanel($html11_1(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId6, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, 'Vertical Align - You can easily vertically center things by adding the class valign-wrapper to the container holding the items you want to vertically align.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Alignment'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_MaterialPanel4 = new MaterialPanel , $add_14(f_MaterialPanel4, (f_MaterialLabel5 = new MaterialLabel , setStyleName(f_MaterialLabel5.element_0, 'valign', true) , setStyleName(f_MaterialLabel5.element_0, 'center', true) , $setFontSize_2(f_MaterialLabel5.fontSizeMixin, '2em') , $setText_8(f_MaterialLabel5.textMixin, 'This should be vertically aligned') , f_MaterialLabel5)) , setStyleName(f_MaterialPanel4.element_0, 'valign-wrapper', true) , setStyleName(f_MaterialPanel4.element_0, 'BY3IKFC-y-b', true) , f_MaterialPanel4)) , $add_14(f_MaterialRow2, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialPanel addStyleNames=\"valign-wrapper {style.panel}\"&gt;<br> \\u2003&lt;m:MaterialLabel fontSize=\"2em\" addStyleNames=\"valign center {style.title}\" text=\"This should be vertically aligned\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-xml', true) , f_PrettyPre6)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow7 = new MaterialRow , $add_14(f_MaterialRow7, (f_MaterialTitle8 = new MaterialTitle , $setText_13(f_MaterialTitle8.paragraph, \"Text Align - These classes are for horizontally aligning content. Just add textAlign='CENTER, LEFT OR RIGHT' to any material widget\") , f_MaterialTitle8)) , $add_14(f_MaterialRow7, (f_MaterialPanel9 = new MaterialPanel , $add_14(f_MaterialPanel9, (f_MaterialLabel10 = new MaterialLabel , $setFontSize_2(f_MaterialLabel10.fontSizeMixin, '1.5em') , $setText_8(f_MaterialLabel10.textMixin, 'This should be left aligned') , f_MaterialLabel10)) , setStyleName(f_MaterialPanel9.element_0, 'BY3IKFC-y-a', true) , $setTextAlign(f_MaterialPanel9, ($clinit_TextAlign() , LEFT_9)) , f_MaterialPanel9)) , $add_14(f_MaterialRow7, (f_MaterialPanel11 = new MaterialPanel , $add_14(f_MaterialPanel11, (f_MaterialLabel12 = new MaterialLabel , $setFontSize_2(f_MaterialLabel12.fontSizeMixin, '1.5em') , $setText_8(f_MaterialLabel12.textMixin, 'This should be center aligned') , f_MaterialLabel12)) , setStyleName(f_MaterialPanel11.element_0, 'BY3IKFC-y-a', true) , $setTextAlign(f_MaterialPanel11, CENTER_5) , f_MaterialPanel11)) , $add_14(f_MaterialRow7, (f_MaterialPanel13 = new MaterialPanel , $add_14(f_MaterialPanel13, (f_MaterialLabel14 = new MaterialLabel , $setFontSize_2(f_MaterialLabel14.fontSizeMixin, '1.5em') , $setText_8(f_MaterialLabel14.textMixin, 'This should be right aligned') , f_MaterialLabel14)) , setStyleName(f_MaterialPanel13.element_0, 'BY3IKFC-y-a', true) , $setTextAlign(f_MaterialPanel13, RIGHT_10) , f_MaterialPanel13)) , $add_14(f_MaterialRow7, (f_PrettyPre15 = new PrettyPre , $setHTML_0(f_PrettyPre15, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialTitle description=\"Text Align - These classes are for horizontally aligning content. We have .left-align, .right-align and .center-align\"/&gt;<br> &lt;m:MaterialPanel textAlign=\"LEFT\" addStyleNames=\"{style.item}\"&gt;<br> \\u2003&lt;m:MaterialLabel fontSize=\"1.5em\" text=\"This should be left aligned\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br><br>  &lt;m:MaterialPanel textAlign=\"CENTER\" addStyleNames=\"{style.item}\"&gt;<br> \\u2003&lt;m:MaterialLabel fontSize=\"1.5em\" text=\"This should be center aligned\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br><br>  &lt;m:MaterialPanel textAlign=\"RIGHT\" addStyleNames=\"{style.item}\"&gt;<br> \\u2003&lt;m:MaterialLabel fontSize=\"1.5em\" text=\"This should be right aligned\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre15.element_0, 'lang-xml', true) , f_PrettyPre15)) , setStyleName(f_MaterialRow7.element_0, 'code', true) , f_MaterialRow7), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow16 = new MaterialRow , $add_14(f_MaterialRow16, (f_MaterialTitle17 = new MaterialTitle , $setText_13(f_MaterialTitle17.paragraph, \"Quick Floats - Quickly float things by adding float='RIGHT , LEFT, or NONE' to any material components.\") , $setInnerHTML($getElement(f_MaterialTitle17.header), (new SafeHtmlString(htmlEscape('Float'))).html_0) , f_MaterialTitle17)) , $add_14(f_MaterialRow16, (f_PrettyPre18 = new PrettyPre , $setHTML_0(f_PrettyPre18, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialPanel float=\"LEFT\"/&gt; &lt;m:MaterialPanel float=\"RIGHT\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre18.element_0, 'lang-xml', true) , f_PrettyPre18)) , setStyleName(f_MaterialRow16.element_0, 'code', true) , f_MaterialRow16), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_HTMLPanel19 = new HTMLPanel($html5_7(this$static.domId4, this$static.domId5).html_0) , setStyleName(f_HTMLPanel19.element_0, 'code', true) , __attachRecord___0 = attachToDom(f_HTMLPanel19.element_0) , $get_0(this$static.domId4Element) , $get_0(this$static.domId5Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel19, (f_MaterialTitle20 = new MaterialTitle , $setText_13(f_MaterialTitle20.paragraph, \"We provide easy to use classes to hide content on specific screen sizes. Just add hideOn='HIDE_ON_SMALL...' to any material components;\") , $setInnerHTML($getElement(f_MaterialTitle20.header), (new SafeHtmlString(htmlEscape('hideOn'))).html_0) , f_MaterialTitle20), $get_0(this$static.domId4Element)) , $addAndReplaceElement(f_HTMLPanel19, (f_PrettyPre21 = new PrettyPre , $setHTML_0(f_PrettyPre21, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialPanel hideOn=\"HIDE_ON_LARGE\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre21.element_0, 'lang-xml', true) , f_PrettyPre21), $get_0(this$static.domId5Element)) , f_HTMLPanel19), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_HTMLPanel22 = new HTMLPanel($html7_7(this$static.domId7, this$static.domId8).html_0) , setStyleName(f_HTMLPanel22.element_0, 'code', true) , __attachRecord___1 = attachToDom(f_HTMLPanel22.element_0) , $get_0(this$static.domId7Element) , $get_0(this$static.domId8Element) , __attachRecord___1.origParent?$insertBefore(__attachRecord___1.origParent, __attachRecord___1.element, __attachRecord___1.origSibling):orphan(__attachRecord___1.element) , $addAndReplaceElement(f_HTMLPanel22, (f_MaterialTitle23 = new MaterialTitle , $setShowOn(f_MaterialTitle23, ($clinit_ShowOn() , SHOW_ON_LARGE)) , $setText_13(f_MaterialTitle23.paragraph, \"We provide easy to use classes to show content on specific screen sizes. Just add showOn='SHOW_ON_LARGE...' to any material components;\") , $setInnerHTML($getElement(f_MaterialTitle23.header), (new SafeHtmlString(htmlEscape('showOn'))).html_0) , f_MaterialTitle23), $get_0(this$static.domId7Element)) , $addAndReplaceElement(f_HTMLPanel22, (f_PrettyPre24 = new PrettyPre , $setHTML_0(f_PrettyPre24, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialPanel showOn=\"SHOW_ON_MED_DOWN\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre24.element_0, 'lang-xml', true) , f_PrettyPre24), $get_0(this$static.domId8Element)) , f_HTMLPanel22), $get_0(this$static.domId6Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow25 = new MaterialRow , $add_14(f_MaterialRow25, (f_MaterialTitle26 = new MaterialTitle , $setText_13(f_MaterialTitle26.paragraph, \"A helper class that detects the browser size viewport on Resize Event. Try it yourself, resize the browser to see it's use.\") , $setInnerHTML($getElement(f_MaterialTitle26.header), (new SafeHtmlString(htmlEscape('ViewPort Helper'))).html_0) , f_MaterialTitle26)) , $add_14(f_MaterialRow25, (lblViewPort = new MaterialLink , this$static.owner.lblViewPort = lblViewPort , lblViewPort)) , $add_14(f_MaterialRow25, (f_PrettyPre27 = new PrettyPre , $setHTML_0(f_PrettyPre27, (sb_4 = new StringBuilder , sb_4.string += 'if (ViewPortHelper.matchMedia(ViewPortHelper.ViewPort.MOBILE_SMALL)) { <br> \\u2003lblViewPort.setText(\"ViewPort : Mobile Small\"); <br> \\u2003lblViewPort.setIconType(IconType.PHONE_ANDROID); <br> } <br><br> if (ViewPortHelper.matchMedia(ViewPortHelper.ViewPort.MOBILE_MEDIUM)) { <br> \\u2003lblViewPort.setText(\"ViewPort : Mobile Medium\"); <br> \\u2003lblViewPort.setIconType(IconType.PHONE_ANDROID); <br> } <br><br> if (ViewPortHelper.matchMedia(ViewPortHelper.ViewPort.MOBILE_LARGE)) { <br> \\u2003lblViewPort.setText(\"ViewPort : Mobile Large\"); <br> \\u2003lblViewPort.setIconType(IconType.PHONE_ANDROID); <br> } <br><br> if (ViewPortHelper.matchMedia(ViewPortHelper.ViewPort.TABLET)) { <br> \\u2003lblViewPort.setText(\"ViewPort : Tablet\"); <br> \\u2003lblViewPort.setIconType(IconType.TABLET_ANDROID); <br> } <br><br> if (ViewPortHelper.matchMedia(ViewPortHelper.ViewPort.LAPTOP)) { <br> \\u2003lblViewPort.setText(\"ViewPort : Laptop\"); <br> \\u2003lblViewPort.setIconType(IconType.LAPTOP); <br> } <br><br> if (ViewPortHelper.matchMedia(ViewPortHelper.ViewPort.LAPTOP_LARGE)) { <br> \\u2003lblViewPort.setText(\"ViewPort : Laptop Large\"); <br> \\u2003lblViewPort.setIconType(IconType.LAPTOP); <br> } <br><br> if (ViewPortHelper.matchMedia(ViewPortHelper.ViewPort.LAPTOP_4K)) { <br> \\u2003lblViewPort.setText(\"ViewPort : Laptop 4K\"); <br> \\u2003lblViewPort.setIconType(IconType.LAPTOP); <br> } <br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre27.element_0, 'lang-java', true) , f_PrettyPre27.element_0.style['marginTop'] = ($clinit_Style$Unit() , '40.0px') , f_PrettyPre27)) , setStyleName(f_MaterialRow25.element_0, 'code', true) , f_MaterialRow25), $get_0(this$static.domId9Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow28 = new MaterialRow , $add_14(f_MaterialRow28, (f_MaterialTitle29 = new MaterialTitle , $setText_13(f_MaterialTitle29.paragraph, 'These classes help format various content on your site.') , $setInnerHTML($getElement(f_MaterialTitle29.header), (new SafeHtmlString(htmlEscape('Formatting'))).html_0) , f_MaterialTitle29)) , $add_14(f_MaterialRow28, (f_MaterialTitle30 = new MaterialTitle , $setText_13(f_MaterialTitle30.paragraph, 'Truncation - To truncate long lines of text in an ellipsis, add the class truncate to the tag which contains the text. See an exaple below of a header being truncated inside a card.') , f_MaterialTitle30)) , $add_14(f_MaterialRow28, (f_MaterialPanel31 = new MaterialPanel , $add_14(f_MaterialPanel31, (f_MaterialLabel32 = new MaterialLabel , setStyleName(f_MaterialLabel32.element_0, 'truncate', true) , $setFontSize_2(f_MaterialLabel32.fontSizeMixin, '2.5em') , $setText_8(f_MaterialLabel32.textMixin, 'This is an extremely long title that will be truncated') , f_MaterialLabel32)) , setStyleName(f_MaterialPanel31.element_0, 'BY3IKFC-y-d', true) , $setShadow_0((!f_MaterialPanel31.shadowMixin && (f_MaterialPanel31.shadowMixin = new ShadowMixin(f_MaterialPanel31)) , f_MaterialPanel31.shadowMixin), 1) , f_MaterialPanel31)) , $add_14(f_MaterialRow28, (f_PrettyPre33 = new PrettyPre , $setHTML_0(f_PrettyPre33, (sb_5 = new StringBuilder , sb_5.string += '\\u2003&lt;m:MaterialPanel shadow=\"1\"&gt; &lt;m:MaterialLabel text=\"This is an extremely long title that will be truncated\" addStyleNames=\"truncate\" fontSize=\"2.5em\"/&gt; &lt;/m:MaterialPanel&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html_0) , setStyleName(f_PrettyPre33.element_0, 'lang-xml', true) , f_PrettyPre33)) , setStyleName(f_MaterialRow28.element_0, 'code', true) , f_MaterialRow28), $get_0(this$static.domId10Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow34 = new MaterialRow , $add_14(f_MaterialRow34, (f_MaterialTitle35 = new MaterialTitle , $setText_13(f_MaterialTitle35.paragraph, 'The hoverable is a hover class that adds an animation for box shadow as seen below. It can be used on most elements, but meant for use on cards.') , $setInnerHTML($getElement(f_MaterialTitle35.header), (new SafeHtmlString(htmlEscape('Hoverable'))).html_0) , f_MaterialTitle35)) , $add_14(f_MaterialRow34, (f_MaterialRow36 = new MaterialRow , $add_14(f_MaterialRow36, (f_MaterialColumn37 = new MaterialColumn , $add_14(f_MaterialColumn37, (f_MaterialCard38 = new MaterialCard , $add_14(f_MaterialCard38, (f_MaterialCardImage39 = new MaterialCardImage , $add_27(f_MaterialCardImage39, (f_MaterialImage40 = new MaterialImage , $setValue_15(f_MaterialImage40, 'https//assets.materialup.com/uploads/ac9bf2ac-bf1c-4dc0-b655-0e13bf523bc8/20150710-__.png', true) , f_MaterialImage40)) , $add_27(f_MaterialCardImage39, (f_MaterialCardTitle41 = new MaterialCardTitle , $setText_9(f_MaterialCardTitle41.titleLabel, 'Sample') , f_MaterialCardTitle41.titleLabel.attached || $add_14(f_MaterialCardTitle41, f_MaterialCardTitle41.titleLabel) , f_MaterialCardTitle41)) , $setWaves(f_MaterialCardImage39, ($clinit_WavesType() , LIGHT)) , f_MaterialCardImage39)) , $add_14(f_MaterialCard38, (f_MaterialCardContent42 = new MaterialCardContent , $add_14(f_MaterialCardContent42, (f_MaterialLabel43 = new MaterialLabel , $setText_8(f_MaterialLabel43.textMixin, 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.') , f_MaterialLabel43)) , $setTextColor(f_MaterialCardContent42, ($clinit_Color() , BLACK)) , f_MaterialCardContent42)) , $add_14(f_MaterialCard38, (f_MaterialCardAction44 = new MaterialCardAction , $add_14(f_MaterialCardAction44, (f_MaterialLink45 = new MaterialLink , $setText_9(f_MaterialLink45.span_1, 'Link 1') , f_MaterialLink45.span_1.attached || $add_14(f_MaterialLink45, f_MaterialLink45.span_1) , f_MaterialLink45)) , $add_14(f_MaterialCardAction44, (f_MaterialLink46 = new MaterialLink , $setText_9(f_MaterialLink46.span_1, 'Link 1') , f_MaterialLink46.span_1.attached || $add_14(f_MaterialLink46, f_MaterialLink46.span_1) , f_MaterialLink46)) , f_MaterialCardAction44)) , $setBackgroundColor(f_MaterialCard38, WHITE) , $setOn((!f_MaterialCard38.hoverableMixin && (f_MaterialCard38.hoverableMixin = new ToggleStyleMixin(f_MaterialCard38, 'hoverable')) , f_MaterialCard38.hoverableMixin), true) , f_MaterialCard38)) , $setGrid_0((!f_MaterialColumn37.gridMixin && (f_MaterialColumn37.gridMixin = new GridMixin(f_MaterialColumn37)) , f_MaterialColumn37.gridMixin), 'l4 s12') , f_MaterialColumn37)) , $add_14(f_MaterialRow36, (f_MaterialColumn47 = new MaterialColumn , $add_14(f_MaterialColumn47, (f_MaterialCard48 = new MaterialCard , $add_14(f_MaterialCard48, (f_MaterialCardImage49 = new MaterialCardImage , $add_27(f_MaterialCardImage49, (f_MaterialImage50 = new MaterialImage , $setValue_15(f_MaterialImage50, 'https//assets.materialup.com/uploads/ac9bf2ac-bf1c-4dc0-b655-0e13bf523bc8/20150710-__.png', true) , f_MaterialImage50)) , $add_27(f_MaterialCardImage49, (f_MaterialCardTitle51 = new MaterialCardTitle , $setText_9(f_MaterialCardTitle51.titleLabel, 'Sample') , f_MaterialCardTitle51.titleLabel.attached || $add_14(f_MaterialCardTitle51, f_MaterialCardTitle51.titleLabel) , f_MaterialCardTitle51)) , $setWaves(f_MaterialCardImage49, LIGHT) , f_MaterialCardImage49)) , $add_14(f_MaterialCard48, (f_MaterialCardContent52 = new MaterialCardContent , $add_14(f_MaterialCardContent52, (f_MaterialLabel53 = new MaterialLabel , $setText_8(f_MaterialLabel53.textMixin, 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.') , f_MaterialLabel53)) , $setTextColor(f_MaterialCardContent52, BLACK) , f_MaterialCardContent52)) , $add_14(f_MaterialCard48, (f_MaterialCardAction54 = new MaterialCardAction , $add_14(f_MaterialCardAction54, (f_MaterialLink55 = new MaterialLink , $setText_9(f_MaterialLink55.span_1, 'Link 1') , f_MaterialLink55.span_1.attached || $add_14(f_MaterialLink55, f_MaterialLink55.span_1) , f_MaterialLink55)) , $add_14(f_MaterialCardAction54, (f_MaterialLink56 = new MaterialLink , $setText_9(f_MaterialLink56.span_1, 'Link 1') , f_MaterialLink56.span_1.attached || $add_14(f_MaterialLink56, f_MaterialLink56.span_1) , f_MaterialLink56)) , f_MaterialCardAction54)) , $setBackgroundColor(f_MaterialCard48, WHITE) , $setOn((!f_MaterialCard48.hoverableMixin && (f_MaterialCard48.hoverableMixin = new ToggleStyleMixin(f_MaterialCard48, 'hoverable')) , f_MaterialCard48.hoverableMixin), true) , f_MaterialCard48)) , $setGrid_0((!f_MaterialColumn47.gridMixin && (f_MaterialColumn47.gridMixin = new GridMixin(f_MaterialColumn47)) , f_MaterialColumn47.gridMixin), 'l4 s12') , f_MaterialColumn47)) , $add_14(f_MaterialRow36, (f_MaterialColumn57 = new MaterialColumn , $add_14(f_MaterialColumn57, (f_MaterialCard58 = new MaterialCard , $add_14(f_MaterialCard58, (f_MaterialCardImage59 = new MaterialCardImage , $add_27(f_MaterialCardImage59, (f_MaterialImage60 = new MaterialImage , $setValue_15(f_MaterialImage60, 'https//assets.materialup.com/uploads/ac9bf2ac-bf1c-4dc0-b655-0e13bf523bc8/20150710-__.png', true) , f_MaterialImage60)) , $add_27(f_MaterialCardImage59, (f_MaterialCardTitle61 = new MaterialCardTitle , $setText_9(f_MaterialCardTitle61.titleLabel, 'Sample') , f_MaterialCardTitle61.titleLabel.attached || $add_14(f_MaterialCardTitle61, f_MaterialCardTitle61.titleLabel) , f_MaterialCardTitle61)) , $setWaves(f_MaterialCardImage59, LIGHT) , f_MaterialCardImage59)) , $add_14(f_MaterialCard58, (f_MaterialCardContent62 = new MaterialCardContent , $add_14(f_MaterialCardContent62, (f_MaterialLabel63 = new MaterialLabel , $setText_8(f_MaterialLabel63.textMixin, 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.') , f_MaterialLabel63)) , $setTextColor(f_MaterialCardContent62, BLACK) , f_MaterialCardContent62)) , $add_14(f_MaterialCard58, (f_MaterialCardAction64 = new MaterialCardAction , $add_14(f_MaterialCardAction64, (f_MaterialLink65 = new MaterialLink , $setText_9(f_MaterialLink65.span_1, 'Link 1') , f_MaterialLink65.span_1.attached || $add_14(f_MaterialLink65, f_MaterialLink65.span_1) , f_MaterialLink65)) , $add_14(f_MaterialCardAction64, (f_MaterialLink66 = new MaterialLink , $setText_9(f_MaterialLink66.span_1, 'Link 1') , f_MaterialLink66.span_1.attached || $add_14(f_MaterialLink66, f_MaterialLink66.span_1) , f_MaterialLink66)) , f_MaterialCardAction64)) , $setBackgroundColor(f_MaterialCard58, WHITE) , $setOn((!f_MaterialCard58.hoverableMixin && (f_MaterialCard58.hoverableMixin = new ToggleStyleMixin(f_MaterialCard58, 'hoverable')) , f_MaterialCard58.hoverableMixin), true) , f_MaterialCard58)) , $setGrid_0((!f_MaterialColumn57.gridMixin && (f_MaterialColumn57.gridMixin = new GridMixin(f_MaterialColumn57)) , f_MaterialColumn57.gridMixin), 'l4 s12') , f_MaterialColumn57)) , f_MaterialRow36)) , $add_14(f_MaterialRow34, (f_PrettyPre67 = new PrettyPre , $setHTML_0(f_PrettyPre67, (sb_6 = new StringBuilder , sb_6.string += '\\u2003&lt;m:MaterialCard hoverable=\"true\"&gt;<br> \\u2003&lt;!-- Card content goes here --&gt;<br> &lt;/m:MaterialCard&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_6.string)).html_0) , setStyleName(f_PrettyPre67.element_0, 'lang-xml', true) , f_PrettyPre67)) , setStyleName(f_MaterialRow34.element_0, 'code', true) , f_MaterialRow34), $get_0(this$static.domId11Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow68 = new MaterialRow , $add_14(f_MaterialRow68, (f_MaterialTitle69 = new MaterialTitle , $setText_13(f_MaterialTitle69.paragraph, \"If you have very long texts you can truncate it by adding truncate='true'\") , $setInnerHTML($getElement(f_MaterialTitle69.header), (new SafeHtmlString(htmlEscape('Truncate'))).html_0) , f_MaterialTitle69)) , $add_14(f_MaterialRow68, (f_MaterialLabel70 = new MaterialLabel , $setOn((!f_MaterialLabel70.truncateMixin && (f_MaterialLabel70.truncateMixin = new ToggleStyleMixin(f_MaterialLabel70, 'truncate')) , f_MaterialLabel70.truncateMixin), true) , f_MaterialLabel70.element_0.style['width'] = '300px' , $setFontSize_2(f_MaterialLabel70.fontSizeMixin, '3em') , $setText_8(f_MaterialLabel70.textMixin, 'This is a very very very long long text.') , f_MaterialLabel70)) , setStyleName(f_MaterialRow68.element_0, 'code', true) , f_MaterialRow68), $get_0(this$static.domId12Element));\n  return f_HTMLPanel1;\n}\n\nfunction HelperView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.style_0 = ($clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_27);\n  $ensureInjected_33(this.style_0);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n}\n\ndefineClass(1776, 1, {}, HelperView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl/Widgets', 1776);\nvar style_27;\nfunction $ensureInjected_33(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_0(toInject, '.BY3IKFC-y-b{height:200px;background:#e9e9e9}.BY3IKFC-y-c{width:100%}.BY3IKFC-y-a{height:auto;margin-top:10px;background:#e9e9e9}.BY3IKFC-y-d{width:50%;padding:10px}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2378, 1, {}, HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_173(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_helper_HelperView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.helper', 'HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2378);\nfunction $clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_27 = new HelperView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html11_1(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html5_7(arg0, arg1){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <table class='striped'> <thead> <tr> <th><\\/th> <th>Screen Range<\\/th> <\\/tr> <\\/thead> <tbody> <tr> <td><code class='language-markup'>HIDE_ON_SMALL<\\/code><\\/td> <td>Hidden for Mobile Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_SMALL_DOWN<\\/code><\\/td> <td>Hidden for Mobile Only and Below<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_MED<\\/code><\\/td> <td>Hidden for Tablet Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_MED_DOWN<\\/code><\\/td> <td>Hidden for Tablet and Below<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_MED_UP<\\/code><\\/td> <td>Hidden for Tablet and Above<\\/td> <\\/tr> <tr> <td><code class='language-markup'>HIDE_ON_LARGE<\\/code><\\/td> <td>Hidden for Desktop Only<\\/td> <\\/tr> <\\/tbody> <\\/table> <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $html7_7(arg0, arg1){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <table class='striped'> <thead> <tr> <th><\\/th> <th>Screen Range<\\/th> <\\/tr> <\\/thead> <tbody> <tr> <td><code class='language-markup'>SHOW_ON_SMALL<\\/code><\\/td> <td>Shown for Mobile Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>SHOW_ON_LARGE<\\/code><\\/td> <td>Shown for Large Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>SHOW_ON_MED<\\/code><\\/td> <td>Shown for Tablet Only<\\/td> <\\/tr> <tr> <td><code class='language-markup'>SHOW_ON_MED_UP<\\/code><\\/td> <td>Shown for Tablet and Above<\\/td> <\\/tr> <tr> <td><code class='language-markup'>SHOW_ON_MED_DOWN<\\/code><\\/td> <td>Shown for Tablet and Below<\\/td> <\\/tr> <\\/tbody> <\\/table>  <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$) {\n    result0 = new HelperPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$) {\n    result = new HelperView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$helper$HelperView$_annotation$$none$$;\n}\n\ndefineClass(854, 1, $intern_112);\n_.onSuccess_0 = function onSuccess_51(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$helper$HelperPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(48);\n\n//# sourceURL=gwtmaterialdemo-48.js\n")
