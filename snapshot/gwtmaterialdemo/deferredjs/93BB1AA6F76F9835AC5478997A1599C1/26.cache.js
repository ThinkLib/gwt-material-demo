$wnd.gwtmaterialdemo.runAsyncCallback26("function MaterialSlideCaption(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['caption']));\n}\n\ndefineClass(242, 26, $intern_61, MaterialSlideCaption);\nvar Lgwt_material_design_client_ui_MaterialSlideCaption_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSlideCaption', 242);\nfunction MaterialSlideItem(){\n  ListItem.call(this);\n}\n\ndefineClass(238, 53, $intern_97, MaterialSlideItem);\nvar Lgwt_material_design_client_ui_MaterialSlideItem_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSlideItem', 238);\nfunction $add_33(this$static, child){\n  $add_13(this$static.listContainer, child);\n}\n\nfunction $setFullscreen_1(this$static, fullscreen){\n  $setFullscreen((!this$static.fullscreenMixin && (this$static.fullscreenMixin = new FullscreenMixin(this$static)) , this$static.fullscreenMixin), fullscreen);\n}\n\nfunction $setHeight_1(this$static, height){\n  ($clinit_DOM() , this$static.element_0).style['height'] = height;\n  $setHeight(this$static.listContainer, height);\n}\n\nfunction MaterialSlider(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['slider']));\n  this.listContainer = new UnorderedList;\n  this.options_0 = new $wnd.Object;\n}\n\ndefineClass(587, 26, $intern_61, MaterialSlider);\n_.add_0 = function add_40(child){\n  $add_33(this, child);\n}\n;\n_.onLoad = function onLoad_51(){\n  $setStyleName(this.listContainer, 'slides');\n  $add_9(this, this.listContainer);\n  $onLoad(this);\n  $wnd.$(($clinit_DOM() , this.element_0)).slider(this.options_0);\n}\n;\n_.onUnload = function onUnload_21(){\n  !this.handlerRegistry_0 && (this.handlerRegistry_0 = new DefaultHandlerRegistry(this));\n  $clearHandlers(this.handlerRegistry_0);\n}\n;\n_.setHeight_0 = function setHeight_2(height){\n  $setHeight_1(this, height);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialSlider_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSlider', 587);\nfunction MediaPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(847, 61, $intern_54, MediaPresenter);\n_.onReveal = function onReveal_46(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Media', 'Media components include things that have to do with large media objects like Images, Video, Audio, etc.', 'components/media/MediaView', 'https://material.io/guidelines/style/imagery.html'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_media_MediaPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaPresenter', 847);\nfunction $fullscreenBtnClick(this$static){\n  $setFullscreen_2(this$static, $equals_1($getText_1(this$static.fullscreenBtn.span_1), 'Fullscreen Slider'));\n}\n\nfunction $setFullscreen_2(this$static, fullscreen){\n  $setFullscreen_1(this$static.slider_0, fullscreen);\n  if (fullscreen) {\n    $getElement(this$static.slider_0).style['position'] = ($clinit_Style$Position() , 'fixed');\n    $getElement(this$static.slider_0).style['zIndex'] = '9998';\n    $setHeight_1(this$static.slider_0, '100%');\n    $getElement(this$static.fullscreenBtn).style['position'] = 'fixed';\n    $getElement(this$static.fullscreenBtn).style['zIndex'] = '9999';\n    $getElement(this$static.fullscreenBtn).style['bottom'] = ($clinit_Style$Unit() , '0.0px');\n    $getElement(this$static.fullscreenBtn).style['left'] = '0.0px';\n    $setIconType_0(this$static.fullscreenBtn, ($clinit_IconType() , FULLSCREEN_EXIT));\n    $setText_2(this$static.fullscreenBtn, 'Close Fullscreen');\n  }\n   else {\n    $getElement(this$static.slider_0).style['position'] = '';\n    $getElement(this$static.slider_0).style['zIndex'] = '';\n    $getElement(this$static.slider_0).style['height'] = '';\n    $getElement(this$static.fullscreenBtn).style['position'] = '';\n    $getElement(this$static.fullscreenBtn).style['zIndex'] = '';\n    $getElement(this$static.fullscreenBtn).style['bottom'] = '';\n    $getElement(this$static.fullscreenBtn).style['left'] = '';\n    $setIconType_0(this$static.fullscreenBtn, ($clinit_IconType() , FULLSCREEN_0));\n    $setText_2(this$static.fullscreenBtn, 'Fullscreen Slider');\n  }\n}\n\nfunction MediaView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_21(new MediaView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1160, 67, $intern_55, MediaView);\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView', 1160);\nfunction $build_f_HTMLPanel1_21(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow6, f_MaterialRow10, f_MaterialRow14, f_MaterialRow33, f_MaterialRow54, f_MaterialTitle3, f_MaterialImage4, f_PrettyPre5, sb, f_MaterialTitle7, f_MaterialImage8, f_PrettyPre9, sb_0, f_MaterialTitle11, f_MaterialVideo12, f_PrettyPre13, sb_1, f_MaterialTitle15, slider, f_MaterialSlideItem16, f_MaterialImage17, f_MaterialSlideCaption18, f_MaterialTitle19, f_MaterialSlideItem20, f_MaterialImage21, f_MaterialSlideCaption22, f_MaterialTitle23, f_MaterialSlideItem24, f_MaterialImage25, f_MaterialSlideCaption26, f_MaterialTitle27, f_MaterialSlideItem28, f_MaterialImage29, f_MaterialSlideCaption30, f_MaterialTitle31, f_PrettyPre32, sb_2, f_MaterialBadge34, f_MaterialTitle35, optionSlider, f_MaterialSlideItem36, f_MaterialImage37, f_MaterialSlideCaption38, f_MaterialTitle39, f_MaterialSlideItem40, f_MaterialImage41, f_MaterialSlideCaption42, f_MaterialTitle43, f_MaterialSlideItem44, f_MaterialImage45, f_MaterialSlideCaption46, f_MaterialTitle47, f_MaterialSlideItem48, f_MaterialImage49, f_MaterialSlideCaption50, f_MaterialTitle51, start_0, pause, f_PrettyPre52, sb_3, f_PrettyPre53, sb_4, f_MaterialTitle55, fullscreenBtn, f_PrettyPre56, sb_5;\n  f_HTMLPanel1 = new HTMLPanel($html8_1(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Material box is a material design implementation of the Lightbox plugin. When a user clicks on an image that can be enlarged. Material box centers the image and enlarges it in a smooth, non-jarring manner. To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Material Box'))).html_0)) , fire_5(f_MaterialTitle3, 'Material Box') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_MaterialImage4 = new MaterialImage , $setType_8(f_MaterialImage4, ($clinit_ImageType() , MATERIALBOXED)) , $setValue_18(f_MaterialImage4, 'http://assets.materialup.com/uploads/0587e4a8-6a46-4e27-b8bf-836e4350fe82/candycons.gif', true) , f_MaterialImage4)) , $add_9(f_MaterialRow2, (f_PrettyPre5 = new PrettyPre , $setHTML_0(f_PrettyPre5, (sb = new StringBuilder , sb.string += '&lt;m:MaterialImage url=\"http://assets.materialup.com/uploads/0587e4a8-6a46-4e27-b8bf-836e4350fe82/candycons.gif\" type=\"MATERIALBOXED\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre5.element_0, 'lang-xml', true) , f_PrettyPre5)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow6 = new MaterialRow , $add_9(f_MaterialRow6, (f_MaterialTitle7 = new MaterialTitle , $setText_12(f_MaterialTitle7.paragraph, 'It is very easy to add a short caption to your photo. Just add the caption as a caption attribute.') , $setInnerHTML($getElement(f_MaterialTitle7.header), (new SafeHtmlString(htmlEscape('Captions'))).html_0) , fire_5(f_MaterialTitle7, 'Captions') , f_MaterialTitle7)) , $add_9(f_MaterialRow6, (f_MaterialImage8 = new MaterialImage , f_MaterialImage8.element_0.setAttribute('data-caption', 'I love Material Design') , $setType_8(f_MaterialImage8, MATERIALBOXED) , $setValue_18(f_MaterialImage8, 'http://assets.materialup.com/uploads/449089f1-22d5-473f-9de6-59ef04e9de2b/personal-card-material-design-animation.gif', true) , f_MaterialImage8)) , $add_9(f_MaterialRow6, (f_PrettyPre9 = new PrettyPre , $setHTML_0(f_PrettyPre9, (sb_0 = new StringBuilder , sb_0.string += '&lt;m:MaterialImage url=\"http://assets.materialup.com/uploads/449089f1-22d5-473f-9de6-59ef04e9de2b/personal-card-material-design-animation.gif\" type=\"MATERIALBOXED\" caption=\"I love Material Design\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre9.element_0, 'lang-xml', true) , f_PrettyPre9)) , setStyleName(f_MaterialRow6.element_0, 'code', true) , f_MaterialRow6), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow10 = new MaterialRow , $add_9(f_MaterialRow10, (f_MaterialTitle11 = new MaterialTitle , $setText_12(f_MaterialTitle11.paragraph, 'We provide a container for Embedded Videos that resizes them responsively.') , $setInnerHTML($getElement(f_MaterialTitle11.header), (new SafeHtmlString(htmlEscape('Responsive Videos'))).html_0) , fire_5(f_MaterialTitle11, 'Responsive Videos') , f_MaterialTitle11)) , $add_9(f_MaterialRow10, (f_MaterialVideo12 = new MaterialVideo , $setUrl(f_MaterialVideo12.frame_0, 'http://www.youtube.com/embed/Q8TXgCzxEnw?rel=0') , fire_5(f_MaterialVideo12, 'http://www.youtube.com/embed/Q8TXgCzxEnw?rel=0') , f_MaterialVideo12)) , $add_9(f_MaterialRow10, (f_PrettyPre13 = new PrettyPre , $setHTML_0(f_PrettyPre13, (sb_1 = new StringBuilder , sb_1.string += '&lt;m:MaterialVideo url=\"http://www.youtube.com/embed/Q8TXgCzxEnw?rel=0\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre13.element_0, 'lang-xml', true) , f_PrettyPre13)) , setStyleName(f_MaterialRow10.element_0, 'code', true) , f_MaterialRow10), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow14 = new MaterialRow , $add_9(f_MaterialRow14, (f_MaterialTitle15 = new MaterialTitle , $setText_12(f_MaterialTitle15.paragraph, 'Our slider is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider. Note: This is also Hammer.js compatible! Try swiping with your finger to scroll through the slider.') , $setInnerHTML($getElement(f_MaterialTitle15.header), (new SafeHtmlString(htmlEscape('Material Slider'))).html_0) , fire_5(f_MaterialTitle15, 'Material Slider') , f_MaterialTitle15)) , $add_9(f_MaterialRow14, (slider = new MaterialSlider , $add_33(slider, (f_MaterialSlideItem16 = new MaterialSlideItem , $add_9(f_MaterialSlideItem16, (f_MaterialImage17 = new MaterialImage , $setValue_18(f_MaterialImage17, 'http://mayastepien.nl/googlecalendar/google-drinks.jpg', true) , f_MaterialImage17)) , $add_9(f_MaterialSlideItem16, (f_MaterialSlideCaption18 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption18, (f_MaterialTitle19 = new MaterialTitle , $setText_12(f_MaterialTitle19.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle19.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle19, 'This is our big Tagline') , f_MaterialTitle19)) , $setTextAlign(f_MaterialSlideCaption18, ($clinit_TextAlign() , CENTER_4)) , f_MaterialSlideCaption18)) , f_MaterialSlideItem16)) , $add_33(slider, (f_MaterialSlideItem20 = new MaterialSlideItem , $add_9(f_MaterialSlideItem20, (f_MaterialImage21 = new MaterialImage , $setValue_18(f_MaterialImage21, 'http://mayastepien.nl/googlecalendar/google-coffee.jpg', true) , f_MaterialImage21)) , $add_9(f_MaterialSlideItem20, (f_MaterialSlideCaption22 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption22, (f_MaterialTitle23 = new MaterialTitle , $setText_12(f_MaterialTitle23.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle23.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle23, 'This is our big Tagline') , f_MaterialTitle23)) , $setTextAlign(f_MaterialSlideCaption22, LEFT_8) , f_MaterialSlideCaption22)) , f_MaterialSlideItem20)) , $add_33(slider, (f_MaterialSlideItem24 = new MaterialSlideItem , $add_9(f_MaterialSlideItem24, (f_MaterialImage25 = new MaterialImage , $setValue_18(f_MaterialImage25, 'http://mayastepien.nl/googlecalendar/google-skiing.jpg', true) , f_MaterialImage25)) , $add_9(f_MaterialSlideItem24, (f_MaterialSlideCaption26 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption26, (f_MaterialTitle27 = new MaterialTitle , $setText_12(f_MaterialTitle27.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle27.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle27, 'This is our big Tagline') , f_MaterialTitle27)) , $setTextAlign(f_MaterialSlideCaption26, RIGHT_9) , f_MaterialSlideCaption26)) , f_MaterialSlideItem24)) , $add_33(slider, (f_MaterialSlideItem28 = new MaterialSlideItem , $add_9(f_MaterialSlideItem28, (f_MaterialImage29 = new MaterialImage , $setValue_18(f_MaterialImage29, 'http://mayastepien.nl/googlecalendar/google-manicure.jpg', true) , f_MaterialImage29)) , $add_9(f_MaterialSlideItem28, (f_MaterialSlideCaption30 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption30, (f_MaterialTitle31 = new MaterialTitle , $setText_12(f_MaterialTitle31.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle31.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle31, 'This is our big Tagline') , f_MaterialTitle31)) , $setTextAlign(f_MaterialSlideCaption30, CENTER_4) , f_MaterialSlideCaption30)) , f_MaterialSlideItem28)) , $setFullscreen((!slider.fullscreenMixin && (slider.fullscreenMixin = new FullscreenMixin(slider)) , slider.fullscreenMixin), false) , this$static.owner.slider_0 = slider , slider)) , $add_9(f_MaterialRow14, (f_PrettyPre32 = new PrettyPre , $setHTML_0(f_PrettyPre32, (sb_2 = new StringBuilder , sb_2.string += '&lt;m:MaterialSlider ui:field=\"slider\" fullscreen=\"false\"&gt;<br><br> \\u2003&lt;m:MaterialSlideItem&gt;<br> \\u2003\\u2003&lt;m:MaterialImage url=\"http://mayastepien.nl/googlecalendar/google-drinks.jpg\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialSlideCaption textAlign=\"CENTER\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle title=\"This is our big Tagline\" description=\"Here\\'s our small slogan.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialSlideCaption&gt;<br> \\u2003&lt;/m:MaterialSlideItem&gt;<br> \\u2003&lt;--Other Items here --&gt;<br><br> &lt;/m:MaterialSlider&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre32.element_0, 'lang-xml', true) , f_PrettyPre32)) , setStyleName(f_MaterialRow14.element_0, 'code', true) , f_MaterialRow14), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow33 = new MaterialRow , $add_9(f_MaterialRow33, (f_MaterialBadge34 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge34, ($clinit_Color() , AMBER_LIGHTEN_5)) , $setShadow_0((!f_MaterialBadge34.shadowMixin && (f_MaterialBadge34.shadowMixin = new ShadowMixin(f_MaterialBadge34)) , f_MaterialBadge34.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge34, ($clinit_Style$Position() , RELATIVE)) , $setInnerHTML(f_MaterialBadge34.element_0, (new SafeHtmlString(htmlEscape('FEATURE UPDATE'))).html_0) , $setFloat(f_MaterialBadge34, ($clinit_Style$Float() , RIGHT)) , $setTextColor(f_MaterialBadge34, AMBER) , f_MaterialBadge34)) , $add_9(f_MaterialRow33, (f_MaterialTitle35 = new MaterialTitle , $setText_12(f_MaterialTitle35.paragraph, 'You can set the duration / interval in milliseconds of Material Slider easily.') , $setInnerHTML($getElement(f_MaterialTitle35.header), (new SafeHtmlString(htmlEscape('Material Slider : Options'))).html_0) , fire_5(f_MaterialTitle35, 'Material Slider : Options') , f_MaterialTitle35)) , $add_9(f_MaterialRow33, (optionSlider = new MaterialSlider , $add_33(optionSlider, (f_MaterialSlideItem36 = new MaterialSlideItem , $add_9(f_MaterialSlideItem36, (f_MaterialImage37 = new MaterialImage , $setValue_18(f_MaterialImage37, 'http://mayastepien.nl/googlecalendar/google-drinks.jpg', true) , f_MaterialImage37)) , $add_9(f_MaterialSlideItem36, (f_MaterialSlideCaption38 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption38, (f_MaterialTitle39 = new MaterialTitle , $setText_12(f_MaterialTitle39.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle39.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle39, 'This is our big Tagline') , f_MaterialTitle39)) , $setTextAlign(f_MaterialSlideCaption38, CENTER_4) , f_MaterialSlideCaption38)) , f_MaterialSlideItem36)) , $add_33(optionSlider, (f_MaterialSlideItem40 = new MaterialSlideItem , $add_9(f_MaterialSlideItem40, (f_MaterialImage41 = new MaterialImage , $setValue_18(f_MaterialImage41, 'http://mayastepien.nl/googlecalendar/google-coffee.jpg', true) , f_MaterialImage41)) , $add_9(f_MaterialSlideItem40, (f_MaterialSlideCaption42 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption42, (f_MaterialTitle43 = new MaterialTitle , $setText_12(f_MaterialTitle43.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle43.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle43, 'This is our big Tagline') , f_MaterialTitle43)) , $setTextAlign(f_MaterialSlideCaption42, LEFT_8) , f_MaterialSlideCaption42)) , f_MaterialSlideItem40)) , $add_33(optionSlider, (f_MaterialSlideItem44 = new MaterialSlideItem , $add_9(f_MaterialSlideItem44, (f_MaterialImage45 = new MaterialImage , $setValue_18(f_MaterialImage45, 'http://mayastepien.nl/googlecalendar/google-skiing.jpg', true) , f_MaterialImage45)) , $add_9(f_MaterialSlideItem44, (f_MaterialSlideCaption46 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption46, (f_MaterialTitle47 = new MaterialTitle , $setText_12(f_MaterialTitle47.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle47.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle47, 'This is our big Tagline') , f_MaterialTitle47)) , $setTextAlign(f_MaterialSlideCaption46, RIGHT_9) , f_MaterialSlideCaption46)) , f_MaterialSlideItem44)) , $add_33(optionSlider, (f_MaterialSlideItem48 = new MaterialSlideItem , $add_9(f_MaterialSlideItem48, (f_MaterialImage49 = new MaterialImage , $setValue_18(f_MaterialImage49, 'http://mayastepien.nl/googlecalendar/google-manicure.jpg', true) , f_MaterialImage49)) , $add_9(f_MaterialSlideItem48, (f_MaterialSlideCaption50 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption50, (f_MaterialTitle51 = new MaterialTitle , $setText_12(f_MaterialTitle51.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle51.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle51, 'This is our big Tagline') , f_MaterialTitle51)) , $setTextAlign(f_MaterialSlideCaption50, CENTER_4) , f_MaterialSlideCaption50)) , f_MaterialSlideItem48)) , optionSlider.options_0.transition = 300 , optionSlider.options_0.interval = $intern_2 , this$static.owner.optionSlider = optionSlider , optionSlider)) , $add_9(f_MaterialRow33, (start_0 = new MaterialButton , $setText_6(start_0.span_1, 'START') , start_0.span_1.attached || $add_9(start_0, start_0.span_1) , $addClickHandler(start_0, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , start_0)) , $add_9(f_MaterialRow33, (pause = new MaterialButton , $setWaves(pause, ($clinit_WavesType() , DEFAULT_8)) , $setText_6(pause.span_1, 'PAUSE') , pause.span_1.attached || $add_9(pause, pause.span_1) , $setType_0(pause, ($clinit_ButtonType() , FLAT)) , $addClickHandler(pause, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , pause)) , $add_9(f_MaterialRow33, (f_PrettyPre52 = new PrettyPre , $setHTML_0(f_PrettyPre52, (sb_3 = new StringBuilder , sb_3.string += '&lt;m:MaterialSlider ui:field=\"slider\" duration=\"300\" interval=\"1000\"&gt;<br><br> \\u2003&lt;m:MaterialSlideItem&gt;<br> \\u2003\\u2003&lt;m:MaterialImage url=\"http://mayastepien.nl/googlecalendar/google-drinks.jpg\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialSlideCaption textAlign=\"CENTER\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle title=\"This is our big Tagline\" description=\"Here\\'s our small slogan.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialSlideCaption&gt;<br> \\u2003&lt;/m:MaterialSlideItem&gt;<br> \\u2003&lt;--Other Items here --&gt;<br><br> &lt;/m:MaterialSlider&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre52.element_0, 'lang-xml', true) , f_PrettyPre52)) , $add_9(f_MaterialRow33, (f_PrettyPre53 = new PrettyPre , $setHTML_0(f_PrettyPre53, (sb_4 = new StringBuilder , sb_4.string += '// Pause the slider <br> slider.pause(); <br><br> // Start the slider <br> slider.start();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre53.element_0, 'lang-java', true) , f_PrettyPre53)) , setStyleName(f_MaterialRow33.element_0, 'code', true) , f_MaterialRow33), $get_0(this$static.domId4Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow54 = new MaterialRow , $add_9(f_MaterialRow54, (f_MaterialTitle55 = new MaterialTitle , $setText_12(f_MaterialTitle55.paragraph, \"Just add fullscreen='true' on MaterialSlide to make the slider fullscreen\") , $setInnerHTML($getElement(f_MaterialTitle55.header), (new SafeHtmlString(htmlEscape('Material Slider Fullscreen'))).html_0) , fire_5(f_MaterialTitle55, 'Material Slider Fullscreen') , f_MaterialTitle55)) , $add_9(f_MaterialRow54, (fullscreenBtn = new MaterialButton , $setWaves(fullscreenBtn, LIGHT) , $setIconType_0(fullscreenBtn, ($clinit_IconType() , FULLSCREEN_0)) , $setText_6(fullscreenBtn.span_1, 'Fullscreen Slider') , fullscreenBtn.span_1.attached || $add_9(fullscreenBtn, fullscreenBtn.span_1) , $addClickHandler(fullscreenBtn, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , this$static.owner.fullscreenBtn = fullscreenBtn , fullscreenBtn)) , $add_9(f_MaterialRow54, (f_PrettyPre56 = new PrettyPre , $setHTML_0(f_PrettyPre56, (sb_5 = new StringBuilder , sb_5.string += '&lt;m:MaterialSlider ui:field=\"slider\" fullscreen=\"true\"&gt;<br><br> \\u2003&lt;m:MaterialSlideItem&gt;<br> \\u2003\\u2003&lt;m:MaterialImage url=\"http://mayastepien.nl/googlecalendar/google-drinks.jpg\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialSlideCaption textAlign=\"CENTER\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle title=\"This is our big Tagline\" description=\"Here\\'s our small slogan.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialSlideCaption&gt;<br> \\u2003&lt;/m:MaterialSlideItem&gt;<br> \\u2003&lt;--Other Items here --&gt;<br><br> &lt;/m:MaterialSlider&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html_0) , setStyleName(f_PrettyPre56.element_0, 'lang-xml', true) , f_PrettyPre56)) , setStyleName(f_MaterialRow54.element_0, 'code', true) , f_MaterialRow54), $get_0(this$static.domId5Element));\n  return f_HTMLPanel1;\n}\n\nfunction MediaView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new MediaView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new MediaView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new MediaView_BinderImpl$Widgets$3(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n}\n\ndefineClass(1682, 1, {}, MediaView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl/Widgets', 1682);\nfunction MediaView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1683, 1, $intern_64, MediaView_BinderImpl$Widgets$1);\n_.onClick = function onClick_247(event_0){\n  $fullscreenBtnClick(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl/Widgets/1', 1683);\nfunction MediaView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1684, 1, $intern_64, MediaView_BinderImpl$Widgets$2);\n_.onClick = function onClick_248(event_0){\n  $wnd.$($getElement(this.this$11.owner.optionSlider)).slider('start');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl/Widgets/2', 1684);\nfunction MediaView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1685, 1, $intern_64, MediaView_BinderImpl$Widgets$3);\n_.onClick = function onClick_249(event_0){\n  $wnd.$($getElement(this.this$11.owner.optionSlider)).slider('pause');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl/Widgets/3', 1685);\nfunction $html8_1(arg0, arg1, arg2, arg3, arg4, arg5){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_1(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$) {\n    result0 = new MediaPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$) {\n    result = new MediaView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$;\n}\n\ndefineClass(751, 1, $intern_102);\n_.onSuccess_0 = function onSuccess_27(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(26);\n\n//# sourceURL=gwtmaterialdemo-26.js\n")
