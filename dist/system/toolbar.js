System.register(["aurelia-templating", "./notify"], function (_export) {
  "use strict";

  var Behavior, Notify, _prototypeProperties, _classCallCheck, defaults, Toolbar;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_notify) {
      Notify = _notify.Notify;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: true,
        bgColor: "white",
        textColor: "purple",
        brand: "brand"
      };
      Toolbar = _export("Toolbar", (function () {
        function Toolbar(notify) {
          _classCallCheck(this, Toolbar);

          this.notify = notify;
          this.defaults = defaults;
          _.assign(this, this.defaults);
        }

        _prototypeProperties(Toolbar, {
          inject: {
            value: function inject() {
              return [Notify];
            },
            writable: true,
            configurable: true
          }
        }, {
          configure: {
            value: function configure(options, reset) {
              reset && this.reset();
              _.assign(this, options);
            },
            writable: true,
            configurable: true
          },
          reset: {
            value: function reset(options) {
              var newDefaults = options || this.defaults;
              this.configure(newDefaults);
              _.assign(this.defaults, newDefaults);
            },
            writable: true,
            configurable: true
          }
        });

        return Toolbar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLE1BQU0seUNBRVYsUUFBUSxFQVFDLE9BQU87OztBQVhaLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixZQUFNLFdBQU4sTUFBTTs7Ozs7OztBQUVWLGNBQVEsR0FBSSxFQUFFLElBQUksRUFBRyxJQUFJO0FBQ1gsYUFBSyxFQUFNLElBQUk7QUFDZixlQUFPLEVBQUksT0FBTztBQUNsQixpQkFBUyxFQUFFLFFBQVE7QUFDbkIsYUFBSyxFQUFNLE9BQU87T0FDbkI7QUFHSixhQUFPO0FBTUwsaUJBTkYsT0FBTyxDQU1KLE1BQU07Z0NBTlQsT0FBTzs7QUFPWixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUNwQixjQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixXQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDaEM7OzZCQVZRLE9BQU87QUFFVCxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDbEI7Ozs7O0FBUUQsbUJBQVM7bUJBQUEsbUJBQUMsT0FBTyxFQUFFLEtBQUssRUFBQztBQUVyQixtQkFBSyxJQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQUFBRSxDQUFBO0FBQ3hCLGVBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2FBRTFCOzs7O0FBRUQsZUFBSzttQkFBQSxlQUFDLE9BQU8sRUFBQztBQUNWLGtCQUFJLFdBQVcsR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQTtBQUMxQyxrQkFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUMzQixlQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUE7YUFDdkM7Ozs7OztlQXZCUSxPQUFPIiwiZmlsZSI6InRvb2xiYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9