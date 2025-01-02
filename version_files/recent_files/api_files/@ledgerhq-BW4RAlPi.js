import {
  B as v,
  g as V
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  E as ye
} from "./events-bk97flgb.js";
import {
  s as K
} from "./semver-Og4YvWUh.js";
import {
  r as te,
  O as re,
  m as Y,
  f as Ie,
  a as Se,
  d as Te,
  b as Ae,
  i as Ne,
  t as xe,
  s as Ue
} from "./rxjs-D-QMI6lw.js";
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Vr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function S(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
    };
    r.prototype = e.prototype
  } else r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n]
      }
    })
  }), r
}
var ne = {},
  ie = {},
  k = function(t, e) {
    ie[t] = e
  },
  o = function(t) {
    var e = function(n, i) {
      Object.assign(this, i), this.name = t, this.message = n || t, this.stack = new Error().stack
    };
    return e.prototype = new Error, ne[t] = e, e
  },
  oe = function(t) {
    if (typeof t == "object" && t) {
      try {
        var e = JSON.parse(t.message);
        e.message && e.name && (t = e)
      } catch {}
      var r = void 0;
      if (typeof t.name == "string") {
        var n = t.name,
          i = ie[n];
        if (i) r = i(t);
        else {
          var s = n === "Error" ? Error : ne[n];
          s || (console.warn("deserializing an unknown class '" + n + "'"), s = o(n)), r = Object.create(s.prototype);
          try {
            for (var a in t) t.hasOwnProperty(a) && (r[a] = t[a])
          } catch {}
        }
      } else r = new Error(t.message);
      return !r.stack && Error.captureStackTrace && Error.captureStackTrace(r, oe), r
    }
    return new Error(String(t))
  },
  _e = function(t) {
    return t && (typeof t == "object" ? se(t, []) : typeof t == "function" ? "[Function: " + (t.name || "anonymous") + "]" : t)
  };

function se(t, e) {
  var r = {};
  e.push(t);
  for (var n = 0, i = Object.keys(t); n < i.length; n++) {
    var s = i[n],
      a = t[s];
    if (typeof a != "function") {
      if (!a || typeof a != "object") {
        r[s] = a;
        continue
      }
      if (e.indexOf(t[s]) === -1) {
        r[s] = se(t[s], e.slice(0));
        continue
      }
      r[s] = "[Circular]"
    }
  }
  return typeof t.name == "string" && (r.name = t.name), typeof t.message == "string" && (r.message = t.message), typeof t.stack == "string" && (r.stack = t.stack), r
}
var Ce = o("AccountNameRequired"),
  Oe = o("AccountNotSupported"),
  Pe = o("AmountRequired"),
  Me = o("BluetoothRequired"),
  Re = o("BtcUnmatchedApp"),
  Le = o("CantOpenDevice"),
  Be = o("CashAddrNotSupported"),
  ke = o("CurrencyNotSupported"),
  Fe = o("DeviceAppVerifyNotSupported"),
  qe = o("DeviceGenuineSocketEarlyClose"),
  ze = o("DeviceNotGenuine"),
  $e = o("DeviceOnDashboardExpected"),
  Ge = o("DeviceOnDashboardUnexpected"),
  He = o("DeviceInOSUExpected"),
  je = o("DeviceHalted"),
  We = o("DeviceNameInvalid"),
  Ve = o("DeviceSocketFail"),
  Ke = o("DeviceSocketNoBulkStatus"),
  x = o("DisconnectedDevice"),
  F = o("DisconnectedDeviceDuringOperation"),
  Ye = o("EnpointConfig"),
  Xe = o("EthAppPleaseEnableContractData"),
  Qe = o("FeeEstimationFailed"),
  Je = o("FirmwareNotRecognized"),
  Ze = o("HardResetFail"),
  et = o("InvalidXRPTag"),
  tt = o("InvalidAddress"),
  rt = o("InvalidAddressBecauseDestinationIsAlsoSource"),
  nt = o("LatestMCUInstalledError"),
  it = o("UnknownMCU"),
  ot = o("LedgerAPIError"),
  st = o("LedgerAPIErrorWithMessage"),
  at = o("LedgerAPINotAvailable"),
  ct = o("ManagerAppAlreadyInstalled"),
  dt = o("ManagerAppRelyOnBTC"),
  ut = o("ManagerAppDepInstallRequired"),
  lt = o("ManagerAppDepUninstallRequired"),
  vt = o("ManagerDeviceLocked"),
  ht = o("ManagerFirmwareNotEnoughSpace"),
  pt = o("ManagerNotEnoughSpace"),
  ft = o("ManagerUninstallBTCDep"),
  gt = o("NetworkDown"),
  mt = o("NoAddressesFound"),
  bt = o("NotEnoughBalance"),
  Et = o("NotEnoughBalanceToDelegate"),
  wt = o("NotEnoughBalanceInParentAccount"),
  Dt = o("NotEnoughSpendableBalance"),
  yt = o("NotEnoughBalanceBecauseDestinationNotCreated"),
  It = o("NoAccessToCamera"),
  St = o("NotEnoughGas"),
  Tt = o("NotSupportedLegacyAddress"),
  At = o("GasLessThanEstimate"),
  Nt = o("PasswordsDontMatch"),
  xt = o("PasswordIncorrect"),
  Ut = o("RecommendSubAccountsToEmpty"),
  _t = o("RecommendUndelegation"),
  Ct = o("TimeoutTagged"),
  Ot = o("UnexpectedBootloader"),
  Pt = o("MCUNotGenuineToDashboard"),
  Mt = o("RecipientRequired"),
  Rt = o("UnavailableTezosOriginatedAccountReceive"),
  Lt = o("UnavailableTezosOriginatedAccountSend"),
  Bt = o("UpdateFetchFileFail"),
  kt = o("UpdateIncorrectHash"),
  Ft = o("UpdateIncorrectSig"),
  qt = o("UpdateYourApp"),
  zt = o("UserRefusedDeviceNameChange"),
  $t = o("UserRefusedAddress"),
  Gt = o("UserRefusedFirmwareUpdate"),
  Ht = o("UserRefusedAllowManager"),
  jt = o("UserRefusedOnDevice"),
  I = o("TransportOpenUserCancelled"),
  R = o("TransportInterfaceNotAvailable"),
  ae = o("TransportRaceCondition"),
  ce = o("TransportWebUSBGestureRequired"),
  Wt = o("DeviceShouldStayInApp"),
  Vt = o("WebsocketConnectionError"),
  Kt = o("WebsocketConnectionFailed"),
  Yt = o("WrongDeviceForAccount"),
  Xt = o("WrongAppForCurrency"),
  Qt = o("ETHAddressNonEIP"),
  Jt = o("CantScanQRCode"),
  Zt = o("FeeNotLoaded"),
  er = o("FeeRequired"),
  tr = o("FeeTooHigh"),
  rr = o("SyncError"),
  nr = o("PairingFailed"),
  ir = o("GenuineCheckFailed"),
  or = o("LedgerAPI4xx"),
  sr = o("LedgerAPI5xx"),
  ar = o("FirmwareOrAppUpdateRequired"),
  cr = o("NoDBPathGiven"),
  dr = o("DBWrongPassword"),
  ur = o("DBNotReset");

function m(t, e) {
  this.name = "TransportError", this.message = t, this.stack = new Error().stack, this.id = e
}
m.prototype = new Error;
k("TransportError", function(t) {
  return new m(t.message, t.id)
});
var A = {
  PIN_REMAINING_ATTEMPTS: 25536,
  INCORRECT_LENGTH: 26368,
  MISSING_CRITICAL_PARAMETER: 26624,
  COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
  SECURITY_STATUS_NOT_SATISFIED: 27010,
  CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
  INCORRECT_DATA: 27264,
  NOT_ENOUGH_MEMORY_SPACE: 27268,
  REFERENCED_DATA_NOT_FOUND: 27272,
  FILE_ALREADY_EXISTS: 27273,
  INCORRECT_P1_P2: 27392,
  INS_NOT_SUPPORTED: 27904,
  CLA_NOT_SUPPORTED: 28160,
  TECHNICAL_PROBLEM: 28416,
  OK: 36864,
  MEMORY_PROBLEM: 37440,
  NO_EF_SELECTED: 37888,
  INVALID_OFFSET: 37890,
  FILE_NOT_FOUND: 37892,
  INCONSISTENT_FILE: 37896,
  ALGORITHM_NOT_SUPPORTED: 38020,
  INVALID_KCV: 38021,
  CODE_NOT_INITIALIZED: 38914,
  ACCESS_CONDITION_NOT_FULFILLED: 38916,
  CONTRADICTION_SECRET_CODE_STATUS: 38920,
  CONTRADICTION_INVALIDATION: 38928,
  CODE_BLOCKED: 38976,
  MAX_VALUE_REACHED: 38992,
  GP_AUTH_FAILED: 25344,
  LICENSING: 28482,
  HALTED: 28586
};

function de(t) {
  switch (t) {
    case 26368:
      return "Incorrect length";
    case 26624:
      return "Missing critical parameter";
    case 27010:
      return "Security not satisfied (dongle locked or have invalid access rights)";
    case 27013:
      return "Condition of use not satisfied (denied by the user?)";
    case 27264:
      return "Invalid data received";
    case 27392:
      return "Invalid parameter received"
  }
  if (28416 <= t && t <= 28671) return "Internal error, please report"
}

function U(t) {
  this.name = "TransportStatusError";
  var e = Object.keys(A).find(function(i) {
      return A[i] === t
    }) || "UNKNOWN_ERROR",
    r = de(t) || e,
    n = t.toString(16);
  this.message = "Ledger device: " + r + " (0x" + n + ")", this.stack = new Error().stack, this.statusCode = t, this.statusText = e
}
U.prototype = new Error;
k("TransportStatusError", function(t) {
  return new U(t.statusCode)
});
const lr = Object.freeze(Object.defineProperty({
  __proto__: null,
  AccountNameRequiredError: Ce,
  AccountNotSupported: Oe,
  AmountRequired: Pe,
  BluetoothRequired: Me,
  BtcUnmatchedApp: Re,
  CantOpenDevice: Le,
  CantScanQRCode: Jt,
  CashAddrNotSupported: Be,
  CurrencyNotSupported: ke,
  DBNotReset: ur,
  DBWrongPassword: dr,
  DeviceAppVerifyNotSupported: Fe,
  DeviceGenuineSocketEarlyClose: qe,
  DeviceHalted: je,
  DeviceInOSUExpected: He,
  DeviceNameInvalid: We,
  DeviceNotGenuineError: ze,
  DeviceOnDashboardExpected: $e,
  DeviceOnDashboardUnexpected: Ge,
  DeviceShouldStayInApp: Wt,
  DeviceSocketFail: Ve,
  DeviceSocketNoBulkStatus: Ke,
  DisconnectedDevice: x,
  DisconnectedDeviceDuringOperation: F,
  ETHAddressNonEIP: Qt,
  EnpointConfigError: Ye,
  EthAppPleaseEnableContractData: Xe,
  FeeEstimationFailed: Qe,
  FeeNotLoaded: Zt,
  FeeRequired: er,
  FeeTooHigh: tr,
  FirmwareNotRecognized: Je,
  FirmwareOrAppUpdateRequired: ar,
  GasLessThanEstimate: At,
  GenuineCheckFailed: ir,
  HardResetFail: Ze,
  InvalidAddress: tt,
  InvalidAddressBecauseDestinationIsAlsoSource: rt,
  InvalidXRPTag: et,
  LatestMCUInstalledError: nt,
  LedgerAPI4xx: or,
  LedgerAPI5xx: sr,
  LedgerAPIError: ot,
  LedgerAPIErrorWithMessage: st,
  LedgerAPINotAvailable: at,
  MCUNotGenuineToDashboard: Pt,
  ManagerAppAlreadyInstalledError: ct,
  ManagerAppDepInstallRequired: ut,
  ManagerAppDepUninstallRequired: lt,
  ManagerAppRelyOnBTCError: dt,
  ManagerDeviceLockedError: vt,
  ManagerFirmwareNotEnoughSpaceError: ht,
  ManagerNotEnoughSpaceError: pt,
  ManagerUninstallBTCDep: ft,
  NetworkDown: gt,
  NoAccessToCamera: It,
  NoAddressesFound: mt,
  NoDBPathGiven: cr,
  NotEnoughBalance: bt,
  NotEnoughBalanceBecauseDestinationNotCreated: yt,
  NotEnoughBalanceInParentAccount: wt,
  NotEnoughBalanceToDelegate: Et,
  NotEnoughGas: St,
  NotEnoughSpendableBalance: Dt,
  NotSupportedLegacyAddress: Tt,
  PairingFailed: nr,
  PasswordIncorrectError: xt,
  PasswordsDontMatchError: Nt,
  RecipientRequired: Mt,
  RecommendSubAccountsToEmpty: Ut,
  RecommendUndelegation: _t,
  StatusCodes: A,
  SyncError: rr,
  TimeoutTagged: Ct,
  TransportError: m,
  TransportInterfaceNotAvailable: R,
  TransportOpenUserCancelled: I,
  TransportRaceCondition: ae,
  TransportStatusError: U,
  TransportWebUSBGestureRequired: ce,
  UnavailableTezosOriginatedAccountReceive: Rt,
  UnavailableTezosOriginatedAccountSend: Lt,
  UnexpectedBootloader: Ot,
  UnknownMCU: it,
  UpdateFetchFileFail: Bt,
  UpdateIncorrectHash: kt,
  UpdateIncorrectSig: Ft,
  UpdateYourApp: qt,
  UserRefusedAddress: $t,
  UserRefusedAllowManager: Ht,
  UserRefusedDeviceNameChange: zt,
  UserRefusedFirmwareUpdate: Gt,
  UserRefusedOnDevice: jt,
  WebsocketConnectionError: Vt,
  WebsocketConnectionFailed: Kt,
  WrongAppForCurrency: Xt,
  WrongDeviceForAccount: Yt,
  addCustomErrorDeserializer: k,
  createCustomErrorClass: o,
  deserializeError: oe,
  getAltStatusMessage: de,
  serializeError: _e
}, Symbol.toStringTag, {
  value: "Module"
}));
class h {
  constructor() {
    this.exchangeTimeout = 3e4, this.unresponsiveTimeout = 15e3, this.deviceModel = null, this._events = new ye, this.send = async (e, r, n, i, s = v.alloc(0), a = [A.OK]) => {
      if (s.length >= 256) throw new m("data.length exceed 256 bytes limit. Got: " + s.length, "DataLengthTooBig");
      const c = await this.exchange(v.concat([v.from([e, r, n, i]), v.from([s.length]), s])),
        d = c.readUInt16BE(c.length - 2);
      if (!a.some(u => u === d)) throw new U(d);
      return c
    }, this.exchangeBusyPromise = void 0, this.exchangeAtomicImpl = async e => {
      if (this.exchangeBusyPromise) throw new ae("An action was already pending on the Ledger device. Please deny or reconnect.");
      let r;
      const n = new Promise(a => {
        r = a
      });
      this.exchangeBusyPromise = n;
      let i = !1;
      const s = setTimeout(() => {
        i = !0, this.emit("unresponsive")
      }, this.unresponsiveTimeout);
      try {
        const a = await e();
        return i && this.emit("responsive"), a
      } finally {
        clearTimeout(s), r && r(), this.exchangeBusyPromise = null
      }
    }, this._appAPIlock = null
  }
  exchange(e) {
    throw new Error("exchange not implemented")
  }
  setScrambleKey(e) {}
  close() {
    return Promise.resolve()
  }
  on(e, r) {
    this._events.on(e, r)
  }
  off(e, r) {
    this._events.removeListener(e, r)
  }
  emit(e, ...r) {
    this._events.emit(e, ...r)
  }
  setDebugMode() {
    console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")
  }
  setExchangeTimeout(e) {
    this.exchangeTimeout = e
  }
  setExchangeUnresponsiveTimeout(e) {
    this.unresponsiveTimeout = e
  }
  static create(e = 3e3, r) {
    return new Promise((n, i) => {
      let s = !1;
      const a = this.listen({
          next: d => {
            s = !0, a && a.unsubscribe(), c && clearTimeout(c), this.open(d.descriptor, e).then(n, i)
          },
          error: d => {
            c && clearTimeout(c), i(d)
          },
          complete: () => {
            c && clearTimeout(c), s || i(new m(this.ErrorMessage_NoDeviceFound, "NoDeviceFound"))
          }
        }),
        c = r ? setTimeout(() => {
          a.unsubscribe(), i(new m(this.ErrorMessage_ListenTimeout, "ListenTimeout"))
        }, r) : null
    })
  }
  decorateAppAPIMethods(e, r, n) {
    for (let i of r) e[i] = this.decorateAppAPIMethod(i, e[i], e, n)
  }
  decorateAppAPIMethod(e, r, n, i) {
    return async (...s) => {
      const {
        _appAPIlock: a
      } = this;
      if (a) return Promise.reject(new m("Ledger Device is busy (lock " + a + ")", "TransportLocked"));
      try {
        return this._appAPIlock = e, this.setScrambleKey(i), await r.apply(n, s)
      } finally {
        this._appAPIlock = null
      }
    }
  }
}
h.isSupported = void 0;
h.list = void 0;
h.listen = void 0;
h.open = void 0;
h.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
h.ErrorMessage_NoDeviceFound = "No Ledger device found";
var q = {};
const ue = S(lr);
Object.defineProperty(q, "__esModule", {
  value: !0
});
var z = q.default = void 0,
  M = ue;
const X = 5;

function vr(t) {
  const e = v.alloc(2);
  return e.writeUInt16BE(t, 0), e
}
const hr = {
    data: v.alloc(0),
    dataLength: 0,
    sequence: 0
  },
  pr = (t, e) => ({
    makeBlocks(r) {
      let n = v.concat([vr(r.length), r]);
      const i = e - 5,
        s = Math.ceil(n.length / i);
      n = v.concat([n, v.alloc(s * i - n.length + 1).fill(0)]);
      const a = [];
      for (let c = 0; c < s; c++) {
        const d = v.alloc(5);
        d.writeUInt16BE(t, 0), d.writeUInt8(X, 2), d.writeUInt16BE(c, 3);
        const u = n.slice(c * i, (c + 1) * i);
        a.push(v.concat([d, u]))
      }
      return a
    },
    reduceResponse(r, n) {
      let {
        data: i,
        dataLength: s,
        sequence: a
      } = r || hr;
      if (n.readUInt16BE(0) !== t) throw new M.TransportError("Invalid channel", "InvalidChannel");
      if (n.readUInt8(2) !== X) throw new M.TransportError("Invalid tag", "InvalidTag");
      if (n.readUInt16BE(3) !== a) throw new M.TransportError("Invalid sequence", "InvalidSequence");
      r || (s = n.readUInt16BE(5)), a++;
      const c = n.slice(r ? 5 : 7);
      return i = v.concat([i, c]), i.length > s && (i = i.slice(0, s)), {
        data: i,
        dataLength: s,
        sequence: a
      }
    },
    getReducedResult(r) {
      if (r && r.dataLength === r.data.length) return r.data
    }
  });
var fr = pr;
z = q.default = fr;
const L = {
    blue: {
      id: "blue",
      productName: "Ledger Blue",
      productIdMM: 0,
      legacyUsbProductId: 0,
      usbOnly: !0,
      memorySize: 480 * 1024,
      blockSize: 4 * 1024,
      getBlockSize: t => 4 * 1024
    },
    nanoS: {
      id: "nanoS",
      productName: "Ledger Nano S",
      productIdMM: 16,
      legacyUsbProductId: 1,
      usbOnly: !0,
      memorySize: 320 * 1024,
      blockSize: 4 * 1024,
      getBlockSize: t => K.lt(K.coerce(t), "2.0.0") ? 4 * 1024 : 2 * 1024
    },
    nanoX: {
      id: "nanoX",
      productName: "Ledger Nano X",
      productIdMM: 64,
      legacyUsbProductId: 4,
      usbOnly: !1,
      memorySize: 2 * 1024 * 1024,
      blockSize: 4 * 1024,
      getBlockSize: t => 4 * 1024,
      bluetoothSpec: [{
        serviceUuid: "d973f2e0-b19e-11e2-9e96-0800200c9a66",
        notifyUuid: "d973f2e1-b19e-11e2-9e96-0800200c9a66",
        writeUuid: "d973f2e2-b19e-11e2-9e96-0800200c9a66"
      }, {
        serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
        notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
        writeUuid: "13d63400-2c97-0004-0002-4c6564676572"
      }]
    }
  },
  Q = Object.values(L),
  _ = 11415,
  C = t => {
    const e = Q.find(i => i.legacyUsbProductId === t);
    if (e) return e;
    const r = t >> 8;
    return Q.find(i => i.productIdMM === r)
  },
  le = [],
  B = {};
for (let t in L) {
  const e = L[t],
    {
      bluetoothSpec: r
    } = e;
  if (r)
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      le.push(i.serviceUuid), B[i.serviceUuid] = B[i.serviceUuid.replace(/-/g, "")] = {
        deviceModel: e,
        ...i
      }
    }
}
const gr = () => le,
  mr = t => B[t.toLowerCase()];
let br = 0;
const g = [],
  l = (t, e, r) => {
    const n = {
      type: t,
      id: String(++br),
      date: new Date
    };
    e && (n.message = e), r && (n.data = r), Er(n)
  },
  ve = t => (g.push(t), () => {
    const e = g.indexOf(t);
    e !== -1 && (g[e] = g[g.length - 1], g.pop())
  });

function Er(t) {
  for (let e = 0; e < g.length; e++) try {
    g[e](t)
  } catch (r) {
    console.error(r)
  }
}
typeof window < "u" && (window.__ledgerLogsListen = ve);
const wr = Object.freeze(Object.defineProperty({
    __proto__: null,
    listen: ve,
    log: l
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Dr = [{
    vendorId: _
  }];
async function he() {
  return await navigator.usb.requestDevice({
    filters: Dr
  })
}
async function $() {
  return (await navigator.usb.getDevices()).filter(e => e.vendorId === _)
}
async function yr() {
  const t = await $();
  return t.length > 0 ? t[0] : he()
}
const Ir = () => Promise.resolve(!!navigator && !!navigator.usb && typeof navigator.usb.getDevices == "function"),
  Sr = 1,
  J = 3;
class b extends h {
  constructor(e, r) {
    super(), this.device = void 0, this.deviceModel = void 0, this.channel = Math.floor(Math.random() * 65535), this.packetSize = 64, this.interfaceNumber = void 0, this._disconnectEmitted = !1, this._emitDisconnect = n => {
      this._disconnectEmitted || (this._disconnectEmitted = !0, this.emit("disconnect", n))
    }, this.exchange = n => this.exchangeAtomicImpl(async () => {
      const {
        channel: i,
        packetSize: s
      } = this;
      l("apdu", "=> " + n.toString("hex"));
      const a = z(i, s),
        c = a.makeBlocks(n);
      for (let p = 0; p < c.length; p++) await this.device.transferOut(J, c[p]);
      let d, u;
      for (; !(d = a.getReducedResult(u));) {
        const p = await this.device.transferIn(J, s),
          P = v.from(p.data.buffer);
        u = a.reduceResponse(u, P)
      }
      return l("apdu", "<= " + d.toString("hex")), d
    }).catch(i => {
      throw i && i.message && i.message.includes("disconnected") ? (this._emitDisconnect(i), new F(i.message)) : i
    }), this.device = e, this.interfaceNumber = r, this.deviceModel = C(e.productId)
  }
  static async request() {
    const e = await he();
    return b.open(e)
  }
  static async openConnected() {
    const e = await $();
    return e.length === 0 ? null : b.open(e[0])
  }
  static async open(e) {
    await e.open(), e.configuration === null && await e.selectConfiguration(Sr), await Z(e);
    const r = e.configurations[0].interfaces.find(({
      alternates: a
    }) => a.some(c => c.interfaceClass === 255));
    if (!r) throw new R("No WebUSB interface found for your Ledger device. Please upgrade firmware or contact techsupport.");
    const n = r.interfaceNumber;
    try {
      await e.claimInterface(n)
    } catch (a) {
      throw await e.close(), new R(a.message)
    }
    const i = new b(e, n),
      s = a => {
        e === a.device && (navigator.usb.removeEventListener("disconnect", s), i._emitDisconnect(new x))
      };
    return navigator.usb.addEventListener("disconnect", s), i
  }
  async close() {
    await this.exchangeBusyPromise, await this.device.releaseInterface(this.interfaceNumber), await Z(this.device), await this.device.close()
  }
  setScrambleKey() {}
}
b.isSupported = Ir;
b.list = $;
b.listen = t => {
  let e = !1;
  yr().then(n => {
    if (!e) {
      const i = C(n.productId);
      t.next({
        type: "add",
        descriptor: n,
        deviceModel: i
      }), t.complete()
    }
  }, n => {
    window.DOMException && n instanceof window.DOMException && n.code === 18 ? t.error(new ce(n.message)) : t.error(new I(n.message))
  });

  function r() {
    e = !0
  }
  return {
    unsubscribe: r
  }
};
async function Z(t) {
  try {
    await t.reset()
  } catch (e) {
    console.warn(e)
  }
}
const Tr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: b
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Kr = S(Tr),
  Ar = [{
    vendorId: _
  }],
  Nr = () => Promise.resolve(!!(V.navigator && V.navigator.hid)),
  N = () => {
    const {
      hid: t
    } = navigator;
    if (!t) throw new m("navigator.hid is not supported", "HIDNotSupported");
    return t
  };
async function pe() {
  const t = await N().requestDevice({
    filters: Ar
  });
  return Array.isArray(t) ? t : [t]
}
async function G() {
  return (await N().getDevices()).filter(e => e.vendorId === _)
}
async function xr() {
  const t = await G();
  return t.length > 0 ? t[0] : (await pe())[0]
}
class E extends h {
  constructor(e) {
    super(), this.device = void 0, this.deviceModel = void 0, this.channel = Math.floor(Math.random() * 65535), this.packetSize = 64, this.inputs = [], this.inputCallback = void 0, this.read = () => this.inputs.length ? Promise.resolve(this.inputs.shift()) : new Promise(r => {
      this.inputCallback = r
    }), this.onInputReport = r => {
      const n = v.from(r.data.buffer);
      this.inputCallback ? (this.inputCallback(n), this.inputCallback = null) : this.inputs.push(n)
    }, this._disconnectEmitted = !1, this._emitDisconnect = r => {
      this._disconnectEmitted || (this._disconnectEmitted = !0, this.emit("disconnect", r))
    }, this.exchange = r => this.exchangeAtomicImpl(async () => {
      const {
        channel: n,
        packetSize: i
      } = this;
      l("apdu", "=> " + r.toString("hex"));
      const s = z(n, i),
        a = s.makeBlocks(r);
      for (let u = 0; u < a.length; u++) await this.device.sendReport(0, a[u]);
      let c, d;
      for (; !(c = s.getReducedResult(d));) {
        const u = await this.read();
        d = s.reduceResponse(d, u)
      }
      return l("apdu", "<= " + c.toString("hex")), c
    }).catch(n => {
      throw n && n.message && n.message.includes("write") ? (this._emitDisconnect(n), new F(n.message)) : n
    }), this.device = e, this.deviceModel = C(e.productId), e.addEventListener("inputreport", this.onInputReport)
  }
  static async request() {
    const [e] = await pe();
    return E.open(e)
  }
  static async openConnected() {
    const e = await G();
    return e.length === 0 ? null : E.open(e[0])
  }
  static async open(e) {
    await e.open();
    const r = new E(e),
      n = i => {
        e === i.device && (N().removeEventListener("disconnect", n), r._emitDisconnect(new x))
      };
    return N().addEventListener("disconnect", n), r
  }
  async close() {
    await this.exchangeBusyPromise, this.device.removeEventListener("inputreport", this.onInputReport), await this.device.close()
  }
  setScrambleKey() {}
}
E.isSupported = Nr;
E.list = G;
E.listen = t => {
  let e = !1;
  xr().then(n => {
    if (!n) t.error(new I("Access denied to use Ledger device"));
    else if (!e) {
      const i = C(n.productId);
      t.next({
        type: "add",
        descriptor: n,
        deviceModel: i
      }), t.complete()
    }
  }, n => {
    t.error(new I(n.message))
  });

  function r() {
    e = !0
  }
  return {
    unsubscribe: r
  }
};
const Ur = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: E
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Yr = S(Ur);
var H = {};
const fe = S(wr);
Object.defineProperty(H, "__esModule", {
  value: !0
});
var ge = H.sendAPDU = void 0,
  _r = te,
  ee = fe;
const Cr = 5;

function Or(t, e) {
  const r = [];
  for (let n = 0, i = e(0); n < t.length; n += i, i = e(n)) r.push(t.slice(n, n + i));
  return r
}
const Pr = (t, e, r) => {
  const n = Or(e, i => r - (i === 0 ? 5 : 3)).map((i, s) => {
    const a = v.alloc(s === 0 ? 5 : 3);
    return a.writeUInt8(Cr, 0), a.writeUInt16BE(s, 1), s === 0 && a.writeUInt16BE(e.length, 3), v.concat([a, i])
  });
  return _r.Observable.create(i => {
    let s = !1;
    async function a() {
      for (const d of n) {
        if (s) return;
        await t(d)
      }
    }
    return a().then(() => {
      s = !0, i.complete()
    }, d => {
      s = !0, (0, ee.log)("ble-error", "sendAPDU failure " + String(d)), i.error(d)
    }), () => {
      s || ((0, ee.log)("ble-verbose", "sendAPDU interruption"), s = !0)
    }
  })
};
ge = H.sendAPDU = Pr;
var j = {};
Object.defineProperty(j, "__esModule", {
  value: !0
});
var me = j.receiveAPDU = void 0,
  T = ue,
  Mr = te,
  Rr = fe;
const Lr = 5,
  Br = t => Mr.Observable.create(e => {
    let r = 0,
      n = 0,
      i = v.alloc(0);
    const s = t.subscribe({
      complete: () => {
        e.error(new T.DisconnectedDevice), s.unsubscribe()
      },
      error: a => {
        (0, Rr.log)("ble-error", "in receiveAPDU " + String(a)), e.error(a), s.unsubscribe()
      },
      next: a => {
        const c = a.readUInt8(0),
          d = a.readUInt16BE(1);
        let u = a.slice(3);
        if (c !== Lr) {
          e.error(new T.TransportError("Invalid tag " + c.toString(16), "InvalidTag"));
          return
        }
        if (r !== d) {
          e.error(new T.TransportError("BLE: Invalid sequence number. discontinued chunk. Received " + d + " but expected " + r, "InvalidSequence"));
          return
        }
        if (d === 0 && (n = u.readUInt16BE(0), u = u.slice(2)), r++, i = v.concat([i, u]), i.length > n) {
          e.error(new T.TransportError("BLE: received too much data. discontinued chunk. Received " + i.length + " but expected " + n, "BLETooMuchData"));
          return
        }
        i.length === n && (e.next(i), e.complete(), s.unsubscribe())
      }
    });
    return () => {
      s.unsubscribe()
    }
  });
me = j.receiveAPDU = Br;
const kr = t => re.create(e => {
    l("ble-verbose", "start monitor " + t.uuid);

    function r(n) {
      const i = n.target;
      i.value && e.next(v.from(i.value.buffer))
    }
    return t.startNotifications().then(() => {
      t.addEventListener("characteristicvaluechanged", r)
    }), () => {
      l("ble-verbose", "end monitor " + t.uuid), t.stopNotifications()
    }
  }),
  O = () => {
    const {
      bluetooth: t
    } = navigator;
    if (typeof t > "u") throw new Error("web bluetooth not supported");
    return t
  },
  Fr = () => re.create(t => {
    const e = O(),
      r = i => {
        t.next(i.value)
      };
    e.addEventListener("availabilitychanged", r);
    let n = !1;
    return e.getAvailability().then(i => {
      n || t.next(i)
    }), () => {
      n = !0, e.removeEventListener("availabilitychanged", r)
    }
  }),
  y = {},
  be = () => ({
    filters: gr().map(t => ({
      services: [t]
    }))
  }),
  qr = async t => {
    if (!t.gatt) throw new Error("bluetooth gatt not found");
    const [e] = await t.gatt.getPrimaryServices();
    if (!e) throw new Error("bluetooth service not found");
    const r = mr(e.uuid);
    if (!r) throw new Error("bluetooth service infos not found");
    return [e, r]
  };
async function Ee(t, e) {
  let r;
  if (typeof t == "string") {
    if (y[t]) return l("ble-verbose", "Transport in cache, using that."), y[t];
    r = await O().requestDevice(be())
  } else r = t;
  r.gatt.connected || (l("ble-verbose", "not connected. connecting..."), await r.gatt.connect());
  const [n, i] = await qr(r), {
    deviceModel: s,
    writeUuid: a,
    notifyUuid: c
  } = i, [d, u] = await Promise.all([n.getCharacteristic(a), n.getCharacteristic(c)]), p = kr(u).pipe(xe(w => {
    l("ble-frame", "<= " + w.toString("hex"))
  }), Ue()), P = p.subscribe(), f = new D(r, d, p, s);
  if (!r.gatt.connected) throw new x;
  y[f.id] = f;
  const W = w => {
    console.log("onDisconnect!", w), delete y[f.id], f.notYetDisconnected = !1, P.unsubscribe(), r.removeEventListener("gattserverdisconnected", W), l("ble-verbose", `BleTransport(${f.id}) disconnected`), f.emit("disconnect", w)
  };
  r.addEventListener("gattserverdisconnected", W);
  let we = Date.now();
  try {
    await f.inferMTU()
  } finally {
    Date.now() - we < 1e3 && (e = !1), e && (await r.gatt.disconnect(), await new Promise(De => setTimeout(De, 4e3)))
  }
  return e ? Ee(r, !1) : f
}
class D extends h {
  static listen(e) {
    l("ble-verbose", "listen...");
    let r;
    O().requestDevice(be()).then(async s => {
      r || (e.next({
        type: "add",
        descriptor: s
      }), e.complete())
    }, s => {
      e.error(new I(s.message))
    });

    function i() {
      r = !0
    }
    return {
      unsubscribe: i
    }
  }
  static async open(e) {
    return Ee(e, !0)
  }
  constructor(e, r, n, i) {
    super(), this.id = void 0, this.device = void 0, this.mtuSize = 20, this.writeCharacteristic = void 0, this.notifyObservable = void 0, this.notYetDisconnected = !0, this.deviceModel = void 0, this.exchange = s => this.exchangeAtomicImpl(async () => {
      try {
        const a = s.toString("hex");
        l("apdu", `=> ${a}`);
        const c = await Y(this.notifyObservable.pipe(me), ge(this.write, s, this.mtuSize)).toPromise(),
          d = c.toString("hex");
        return l("apdu", `<= ${d}`), c
      } catch (a) {
        throw l("ble-error", "exchange got " + String(a)), this.notYetDisconnected && this.device.gatt.disconnect(), a
      }
    }), this.write = async s => {
      l("ble-frame", "=> " + s.toString("hex")), await this.writeCharacteristic.writeValue(s)
    }, this.id = e.id, this.device = e, this.writeCharacteristic = r, this.notifyObservable = n, this.deviceModel = i, l("ble-verbose", `BleTransport(${String(this.id)}) new instance`)
  }
  async inferMTU() {
    let e = 23;
    if (await this.exchangeAtomicImpl(async () => {
        try {
          e = await Y(this.notifyObservable.pipe(Ie(r => r.readUInt8(0) === 8), Se(r => r.readUInt8(5))), Te(() => Ae(this.write(v.from([8, 0, 0, 0, 0])))).pipe(Ne())).toPromise() + 3
        } catch (r) {
          throw l("ble-error", "inferMTU got " + String(r)), this.device.gatt.disconnect(), r
        }
      }), e > 23) {
      const r = e - 3;
      l("ble-verbose", `BleTransport(${String(this.id)}) mtu set to ${String(r)}`), this.mtuSize = r
    }
    return this.mtuSize
  }
  setScrambleKey() {}
  async close() {
    this.exchangeBusyPromise && await this.exchangeBusyPromise
  }
}
D.isSupported = () => Promise.resolve().then(O).then(() => !0, () => !1);
D.observeAvailability = t => Fr.subscribe(t);
D.list = () => Promise.resolve([]);
D.disconnect = async t => {
  l("ble-verbose", `user disconnect(${t})`);
  const e = y[t];
  e && e.device.gatt.disconnect()
};
const zr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: D
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Xr = S(zr);
export {
  Vr as a, Yr as b, Wr as c, Xr as d, S as g, Kr as r
};