System.register(["./ai-btn-toggle", "./ai-btn-radio", "./ai-class", "./ai-tabs", "./nav-me"], function (_export) {
  "use strict";

  var AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior, NavMe;


  function install(aurelia) {
    aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior, NavMe]);
  }

  return {
    setters: [function (_aiBtnToggle) {
      AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
    }, function (_aiBtnRadio) {
      AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
    }, function (_aiClass) {
      AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
    }, function (_aiTabs) {
      AiTabsAttachedBehavior = _aiTabs.AiTabsAttachedBehavior;
    }, function (_navMe) {
      NavMe = _navMe.NavMe;
    }],
    execute: function () {
      _export("AiBtnToggleAttachedBehavior", AiBtnToggleAttachedBehavior);

      _export("AiBtnRadioAttachedBehavior", AiBtnRadioAttachedBehavior);

      _export("AiClassAttachedBehavior", AiClassAttachedBehavior);

      _export("AiTabsAttachedBehavior", AiTabsAttachedBehavior);

      _export("NavMe", NavMe);

      _export("install", install);
    }
  };
});