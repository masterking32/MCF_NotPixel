import {
  c as I
} from "./@ledgerhq-BW4RAlPi.js";
import {
  B as v
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  s as At
} from "./symbol.inspect-CD8uWkLQ.js";
import {
  s as Ln
} from "./jssha-Dj0pk0Xq.js";
import {
  n as ci
} from "./tweetnacl-DeYMGiLl.js";
import {
  d as ms
} from "./dataloader-7UOpijhF.js";
import {
  r as ui
} from "./axios-BdInfei4.js";
import {
  l as fi
} from "./zod-Dbq4cBMj.js";
var bs = {},
  q = {},
  ae = {},
  Mt = {};
Object.defineProperty(Mt, "__esModule", {
  value: !0
});
Mt.crc16 = void 0;

function ys(e) {
  let r = 0;
  const n = v.alloc(e.length + 2);
  n.set(e);
  for (let o of n) {
    let a = 128;
    for (; a > 0;) r <<= 1, o & a && (r += 1), a >>= 1, r > 65535 && (r &= 65535, r ^= 4129)
  }
  return v.from([Math.floor(r / 256), r % 256])
}
Mt.crc16 = ys;
var ws = I && I.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  },
  hi;
Object.defineProperty(ae, "__esModule", {
  value: !0
});
ae.address = ae.Address = void 0;
const vs = ws(At),
  gi = Mt,
  Bn = 17,
  pi = 81,
  Sn = 128;

function ha(e) {
  if (typeof e == "string" && !se.isFriendly(e)) throw new Error("Unknown address type");
  const t = v.isBuffer(e) ? e : v.from(e, "base64");
  if (t.length !== 36) throw new Error("Unknown address type: byte length is not equal to 36");
  const r = t.subarray(0, 34),
    n = t.subarray(34, 36),
    o = (0, gi.crc16)(r);
  if (!(o[0] === n[0] && o[1] === n[1])) throw new Error("Invalid checksum: " + e);
  let a = r[0],
    i = !1,
    s = !1;
  if (a & Sn && (i = !0, a = a ^ Sn), a !== Bn && a !== pi) throw "Unknown address tag";
  s = a === Bn;
  let l = null;
  r[1] === 255 ? l = -1 : l = r[1];
  const c = r.subarray(2, 34);
  return {
    isTestOnly: i,
    isBounceable: s,
    workchain: l,
    hashPart: c
  }
}
class se {
  static isAddress(t) {
    return t instanceof se
  }
  static isFriendly(t) {
    return !(t.length !== 48 || !/[A-Za-z0-9+/_-]+/.test(t))
  }
  static isRaw(t) {
    if (t.indexOf(":") === -1) return !1;
    let [r, n] = t.split(":");
    return !(!Number.isInteger(parseFloat(r)) || !/[a-f0-9]+/.test(n.toLowerCase()) || n.length !== 64)
  }
  static normalize(t) {
    return typeof t == "string" ? se.parse(t).toString() : t.toString()
  }
  static parse(t) {
    if (se.isFriendly(t)) return this.parseFriendly(t).address;
    if (se.isRaw(t)) return this.parseRaw(t);
    throw new Error("Unknown address type: " + t)
  }
  static parseRaw(t) {
    let r = parseInt(t.split(":")[0]),
      n = v.from(t.split(":")[1], "hex");
    return new se(r, n)
  }
  static parseFriendly(t) {
    if (v.isBuffer(t)) {
      let r = ha(t);
      return {
        isBounceable: r.isBounceable,
        isTestOnly: r.isTestOnly,
        address: new se(r.workchain, r.hashPart)
      }
    } else {
      let r = t.replace(/\-/g, "+").replace(/_/g, "/"),
        n = ha(r);
      return {
        isBounceable: n.isBounceable,
        isTestOnly: n.isTestOnly,
        address: new se(n.workchain, n.hashPart)
      }
    }
  }
  constructor(t, r) {
    if (this.toRawString = () => this.workChain + ":" + this.hash.toString("hex"), this.toRaw = () => {
        const n = v.alloc(36);
        return n.set(this.hash), n.set([this.workChain, this.workChain, this.workChain, this.workChain], 32), n
      }, this.toStringBuffer = n => {
        let o = n && n.testOnly !== void 0 ? n.testOnly : !1,
          i = (n && n.bounceable !== void 0 ? n.bounceable : !0) ? Bn : pi;
        o && (i |= Sn);
        const s = v.alloc(34);
        s[0] = i, s[1] = this.workChain, s.set(this.hash, 2);
        const l = v.alloc(36);
        return l.set(s), l.set((0, gi.crc16)(s), 34), l
      }, this.toString = n => {
        let o = n && n.urlSafe !== void 0 ? n.urlSafe : !0,
          a = this.toStringBuffer(n);
        return o ? a.toString("base64").replace(/\+/g, "-").replace(/\//g, "_") : a.toString("base64")
      }, this[hi] = () => this.toString(), r.length !== 32) throw new Error("Invalid address hash length: " + r.length);
    this.workChain = t, this.hash = r, Object.freeze(this)
  }
  equals(t) {
    return t.workChain !== this.workChain ? !1 : t.hash.equals(this.hash)
  }
}
ae.Address = se;
hi = vs.default;

function ks(e) {
  return se.parse(e)
}
ae.address = ks;
var Ut = {},
  _s = I && I.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  },
  mi;
Object.defineProperty(Ut, "__esModule", {
  value: !0
});
Ut.ExternalAddress = void 0;
const Bs = _s(At);
class qn {
  static isAddress(t) {
    return t instanceof qn
  }
  constructor(t, r) {
    this[mi] = () => this.toString(), this.value = t, this.bits = r
  }
  toString() {
    return `External<${this.bits}:${this.value}>`
  }
}
Ut.ExternalAddress = qn;
mi = Bs.default;
var Cr = {},
  We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.base32Decode = We.base32Encode = void 0;
const Cn = "abcdefghijklmnopqrstuvwxyz234567";

function Ss(e) {
  const t = e.byteLength;
  let r = 0,
    n = 0,
    o = "";
  for (let a = 0; a < t; a++)
    for (n = n << 8 | e[a], r += 8; r >= 5;) o += Cn[n >>> r - 5 & 31], r -= 5;
  return r > 0 && (o += Cn[n << 5 - r & 31]), o
}
We.base32Encode = Ss;

function Cs(e, t) {
  const r = e.indexOf(t);
  if (r === -1) throw new Error("Invalid character found: " + t);
  return r
}

function Ps(e) {
  let t;
  t = e.toLowerCase();
  const {
    length: r
  } = t;
  let n = 0,
    o = 0,
    a = 0;
  const i = v.alloc(r * 5 / 8 | 0);
  for (let s = 0; s < r; s++) o = o << 5 | Cs(Cn, t[s]), n += 5, n >= 8 && (i[a++] = o >>> n - 8 & 255, n -= 8);
  return i
}
We.base32Decode = Ps;
var As = I && I.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  },
  bi;
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
Cr.ADNLAddress = void 0;
const Ms = As(At),
  ga = We,
  pa = Mt;
class wr {
  static parseFriendly(t) {
    if (t.length !== 55) throw Error("Invalid address");
    t = "f" + t;
    let r = (0, ga.base32Decode)(t);
    if (r[0] !== 45) throw Error("Invalid address");
    let n = r.slice(33);
    if (!(0, pa.crc16)(r.slice(0, 33)).equals(n)) throw Error("Invalid address");
    return new wr(r.slice(1, 33))
  }
  static parseRaw(t) {
    const r = v.from(t, "base64");
    return new wr(r)
  }
  constructor(t) {
    if (this.toRaw = () => this.address.toString("hex").toUpperCase(), this.toString = () => {
        let r = v.concat([v.from([45]), this.address]),
          n = (0, pa.crc16)(r);
        return r = v.concat([r, n]), (0, ga.base32Encode)(r).slice(1)
      }, this[bi] = () => this.toString(), t.length !== 32) throw Error("Invalid address");
    this.address = t
  }
  equals(t) {
    return this.address.equals(t.address)
  }
}
Cr.ADNLAddress = wr;
bi = Ms.default;
var Pr = {},
  Re = {},
  jt = {},
  Rt = {},
  Oe = {},
  ma;

function Ar() {
  if (ma) return Oe;
  ma = 1, Object.defineProperty(Oe, "__esModule", {
    value: !0
  }), Oe.paddedBufferToBits = Oe.bitsToPaddedBuffer = void 0;
  const e = Mr(),
    t = Te();

  function r(o) {
    let a = new e.BitBuilder(Math.ceil(o.length / 8) * 8);
    a.writeBits(o);
    let i = Math.ceil(o.length / 8) * 8 - o.length;
    for (let s = 0; s < i; s++) s === 0 ? a.writeBit(1) : a.writeBit(0);
    return a.buffer()
  }
  Oe.bitsToPaddedBuffer = r;

  function n(o) {
    let a = 0;
    for (let i = o.length - 1; i >= 0; i--)
      if (o[i] !== 0) {
        const s = o[i];
        let l = s & -s;
        l & 1 || (l = Math.log2(l) + 1), i > 0 && (a = i << 3), a += 8 - l;
        break
      } return new t.BitString(o, 0, a)
  }
  return Oe.paddedBufferToBits = n, Oe
}
var ba;

function Te() {
  if (ba) return Rt;
  ba = 1;
  var e = I && I.__importDefault || function(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    },
    t;
  Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.BitString = void 0;
  const r = Ar(),
    n = e(At);
  let o = class mr {
    static isBitString(i) {
      return i instanceof mr
    }
    constructor(i, s, l) {
      if (this[t] = () => this.toString(), l < 0) throw new Error(`Length ${l} is out of bounds`);
      this._length = l, this._data = i, this._offset = s
    }
    get length() {
      return this._length
    }
    at(i) {
      if (i >= this._length) throw new Error(`Index ${i} > ${this._length} is out of bounds`);
      if (i < 0) throw new Error(`Index ${i} < 0 is out of bounds`);
      let s = this._offset + i >> 3,
        l = 7 - (this._offset + i) % 8;
      return (this._data[s] & 1 << l) !== 0
    }
    substring(i, s) {
      if (i > this._length) throw new Error(`Offset(${i}) > ${this._length} is out of bounds`);
      if (i < 0) throw new Error(`Offset(${i}) < 0 is out of bounds`);
      if (s === 0) return mr.EMPTY;
      if (i + s > this._length) throw new Error(`Offset ${i} + Length ${s} > ${this._length} is out of bounds`);
      return new mr(this._data, this._offset + i, s)
    }
    subbuffer(i, s) {
      if (i > this._length) throw new Error(`Offset ${i} is out of bounds`);
      if (i < 0) throw new Error(`Offset ${i} is out of bounds`);
      if (i + s > this._length) throw new Error(`Offset + Lenght = ${i+s} is out of bounds`);
      if (s % 8 !== 0 || (this._offset + i) % 8 !== 0) return null;
      let l = this._offset + i >> 3,
        c = l + (s >> 3);
      return this._data.subarray(l, c)
    }
    equals(i) {
      if (this._length !== i._length) return !1;
      for (let s = 0; s < this._length; s++)
        if (this.at(s) !== i.at(s)) return !1;
      return !0
    }
    toString() {
      const i = (0, r.bitsToPaddedBuffer)(this);
      if (this._length % 4 === 0) {
        const s = i.subarray(0, Math.ceil(this._length / 8)).toString("hex").toUpperCase();
        return this._length % 8 === 0 ? s : s.substring(0, s.length - 1)
      } else {
        const s = i.toString("hex").toUpperCase();
        return this._length % 8 <= 4 ? s.substring(0, s.length - 1) + "_" : s + "_"
      }
    }
  };
  return Rt.BitString = o, t = n.default, o.EMPTY = new o(v.alloc(0), 0, 0), Rt
}
var ya;

function Mr() {
  if (ya) return jt;
  ya = 1, Object.defineProperty(jt, "__esModule", {
    value: !0
  }), jt.BitBuilder = void 0;
  const e = ae,
    t = Ut,
    r = Te();
  let n = class {
    constructor(a = 1023) {
      this._buffer = v.alloc(Math.ceil(a / 8)), this._length = 0
    }
    get length() {
      return this._length
    }
    writeBit(a) {
      let i = this._length;
      if (i > this._buffer.length * 8) throw new Error("BitBuilder overflow");
      (typeof a == "boolean" && a === !0 || typeof a == "number" && a > 0) && (this._buffer[i / 8 | 0] |= 1 << 7 - i % 8), this._length++
    }
    writeBits(a) {
      for (let i = 0; i < a.length; i++) this.writeBit(a.at(i))
    }
    writeBuffer(a) {
      if (this._length % 8 === 0) {
        if (this._length + a.length * 8 > this._buffer.length * 8) throw new Error("BitBuilder overflow");
        a.copy(this._buffer, this._length / 8), this._length += a.length * 8
      } else
        for (let i = 0; i < a.length; i++) this.writeUint(a[i], 8)
    }
    writeUint(a, i) {
      if (i < 0 || !Number.isSafeInteger(i)) throw Error(`invalid bit length. Got ${i}`);
      const s = BigInt(a);
      if (i === 0) {
        if (s !== 0n) throw Error(`value is not zero for ${i} bits. Got ${a}`);
        return
      }
      const l = 1n << BigInt(i);
      if (s < 0 || s >= l) throw Error(`bitLength is too small for a value ${a}. Got ${i}`);
      if (this._length + i > this._buffer.length * 8) throw new Error("BitBuilder overflow");
      const c = 8 - this._length % 8;
      if (c > 0) {
        const u = Math.floor(this._length / 8);
        if (i < c) {
          const f = Number(s);
          this._buffer[u] |= f << c - i, this._length += i
        } else {
          const f = Number(s >> BigInt(i - c));
          this._buffer[u] |= f, this._length += c
        }
      }
      for (i -= c; i > 0;) i >= 8 ? (this._buffer[this._length / 8] = Number(s >> BigInt(i - 8) & 0xffn), this._length += 8, i -= 8) : (this._buffer[this._length / 8] = Number(s << BigInt(8 - i) & 0xffn), this._length += i, i = 0)
    }
    writeInt(a, i) {
      let s = BigInt(a);
      if (i < 0 || !Number.isSafeInteger(i)) throw Error(`invalid bit length. Got ${i}`);
      if (i === 0) {
        if (a !== 0n) throw Error(`value is not zero for ${i} bits. Got ${a}`);
        return
      }
      if (i === 1) {
        if (a !== -1n && a !== 0n) throw Error(`value is not zero or -1 for ${i} bits. Got ${a}`);
        this.writeBit(a === -1n);
        return
      }
      let l = 1n << BigInt(i) - 1n;
      if (s < -l || s >= l) throw Error(`value is out of range for ${i} bits. Got ${a}`);
      s < 0 ? (this.writeBit(!0), s = l + s) : this.writeBit(!1), this.writeUint(s, i - 1)
    }
    writeVarUint(a, i) {
      let s = BigInt(a);
      if (i < 0 || !Number.isSafeInteger(i)) throw Error(`invalid bit length. Got ${i}`);
      if (s < 0) throw Error(`value is negative. Got ${a}`);
      if (s === 0n) {
        this.writeUint(0, i);
        return
      }
      const l = Math.ceil(s.toString(2).length / 8),
        c = l * 8;
      this.writeUint(l, i), this.writeUint(s, c)
    }
    writeVarInt(a, i) {
      let s = BigInt(a);
      if (i < 0 || !Number.isSafeInteger(i)) throw Error(`invalid bit length. Got ${i}`);
      if (s === 0n) {
        this.writeUint(0, i);
        return
      }
      let l = s > 0 ? s : -s;
      const c = 1 + Math.ceil(l.toString(2).length / 8),
        u = c * 8;
      this.writeUint(c, i), this.writeInt(s, u)
    }
    writeCoins(a) {
      this.writeVarUint(a, 4)
    }
    writeAddress(a) {
      if (a == null) {
        this.writeUint(0, 2);
        return
      }
      if (e.Address.isAddress(a)) {
        this.writeUint(2, 2), this.writeUint(0, 1), this.writeInt(a.workChain, 8), this.writeBuffer(a.hash);
        return
      }
      if (t.ExternalAddress.isAddress(a)) {
        this.writeUint(1, 2), this.writeUint(a.bits, 9), this.writeUint(a.value, a.bits);
        return
      }
      throw Error(`Invalid address. Got ${a}`)
    }
    build() {
      return new r.BitString(this._buffer, 0, this._length)
    }
    buffer() {
      if (this._length % 8 !== 0) throw new Error("BitBuilder buffer is not byte aligned");
      return this._buffer.subarray(0, this._length / 8)
    }
  };
  return jt.BitBuilder = n, jt
}
var Ot = {},
  je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.CellType = void 0;
var wa;
(function(e) {
  e[e.Ordinary = -1] = "Ordinary", e[e.PrunedBranch = 1] = "PrunedBranch", e[e.Library = 2] = "Library", e[e.MerkleProof = 3] = "MerkleProof", e[e.MerkleUpdate = 4] = "MerkleUpdate"
})(wa || (je.CellType = wa = {}));
var Dt = {},
  Vt = {},
  De = {},
  Ur = {};
Object.defineProperty(Ur, "__esModule", {
  value: !0
});
Ur.readUnaryLength = void 0;

function Us(e) {
  let t = 0;
  for (; e.loadBit();) t++;
  return t
}
Ur.readUnaryLength = Us;
var Ve = {},
  de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.BitReader = void 0;
const zs = ae,
  xs = Ut;
class Nn {
  constructor(t, r = 0) {
    this._checkpoints = [], this._bits = t, this._offset = r
  }
  get offset() {
    return this._offset
  }
  get remaining() {
    return this._bits.length - this._offset
  }
  skip(t) {
    if (t < 0 || this._offset + t > this._bits.length) throw new Error(`Index ${this._offset+t} is out of bounds`);
    this._offset += t
  }
  reset() {
    this._checkpoints.length > 0 ? this._offset = this._checkpoints.pop() : this._offset = 0
  }
  save() {
    this._checkpoints.push(this._offset)
  }
  loadBit() {
    let t = this._bits.at(this._offset);
    return this._offset++, t
  }
  preloadBit() {
    return this._bits.at(this._offset)
  }
  loadBits(t) {
    let r = this._bits.substring(this._offset, t);
    return this._offset += t, r
  }
  preloadBits(t) {
    return this._bits.substring(this._offset, t)
  }
  loadBuffer(t) {
    let r = this._preloadBuffer(t, this._offset);
    return this._offset += t * 8, r
  }
  preloadBuffer(t) {
    return this._preloadBuffer(t, this._offset)
  }
  loadUint(t) {
    return this._toSafeInteger(this.loadUintBig(t), "loadUintBig")
  }
  loadUintBig(t) {
    let r = this.preloadUintBig(t);
    return this._offset += t, r
  }
  preloadUint(t) {
    return this._toSafeInteger(this._preloadUint(t, this._offset), "preloadUintBig")
  }
  preloadUintBig(t) {
    return this._preloadUint(t, this._offset)
  }
  loadInt(t) {
    let r = this._preloadInt(t, this._offset);
    return this._offset += t, this._toSafeInteger(r, "loadUintBig")
  }
  loadIntBig(t) {
    let r = this._preloadInt(t, this._offset);
    return this._offset += t, r
  }
  preloadInt(t) {
    return this._toSafeInteger(this._preloadInt(t, this._offset), "preloadIntBig")
  }
  preloadIntBig(t) {
    return this._preloadInt(t, this._offset)
  }
  loadVarUint(t) {
    let r = Number(this.loadUint(t));
    return this._toSafeInteger(this.loadUintBig(r * 8), "loadVarUintBig")
  }
  loadVarUintBig(t) {
    let r = Number(this.loadUint(t));
    return this.loadUintBig(r * 8)
  }
  preloadVarUint(t) {
    let r = Number(this._preloadUint(t, this._offset));
    return this._toSafeInteger(this._preloadUint(r * 8, this._offset + t), "preloadVarUintBig")
  }
  preloadVarUintBig(t) {
    let r = Number(this._preloadUint(t, this._offset));
    return this._preloadUint(r * 8, this._offset + t)
  }
  loadVarInt(t) {
    let r = Number(this.loadUint(t));
    return this._toSafeInteger(this.loadIntBig(r * 8), "loadVarIntBig")
  }
  loadVarIntBig(t) {
    let r = Number(this.loadUint(t));
    return this.loadIntBig(r * 8)
  }
  preloadVarInt(t) {
    let r = Number(this._preloadUint(t, this._offset));
    return this._toSafeInteger(this._preloadInt(r * 8, this._offset + t), "preloadVarIntBig")
  }
  preloadVarIntBig(t) {
    let r = Number(this._preloadUint(t, this._offset));
    return this._preloadInt(r * 8, this._offset + t)
  }
  loadCoins() {
    return this.loadVarUintBig(4)
  }
  preloadCoins() {
    return this.preloadVarUintBig(4)
  }
  loadAddress() {
    let t = Number(this._preloadUint(2, this._offset));
    if (t === 2) return this._loadInternalAddress();
    throw new Error("Invalid address: " + t)
  }
  loadMaybeAddress() {
    let t = Number(this._preloadUint(2, this._offset));
    if (t === 0) return this._offset += 2, null;
    if (t === 2) return this._loadInternalAddress();
    throw new Error("Invalid address")
  }
  loadExternalAddress() {
    if (Number(this._preloadUint(2, this._offset)) === 1) return this._loadExternalAddress();
    throw new Error("Invalid address")
  }
  loadMaybeExternalAddress() {
    let t = Number(this._preloadUint(2, this._offset));
    if (t === 0) return this._offset += 2, null;
    if (t === 1) return this._loadExternalAddress();
    throw new Error("Invalid address")
  }
  loadAddressAny() {
    let t = Number(this._preloadUint(2, this._offset));
    if (t === 0) return this._offset += 2, null;
    if (t === 2) return this._loadInternalAddress();
    if (t === 1) return this._loadExternalAddress();
    throw Error(t === 3 ? "Unsupported" : "Unreachable")
  }
  loadPaddedBits(t) {
    if (t % 8 !== 0) throw new Error("Invalid number of bits");
    let r = t;
    for (;;)
      if (this._bits.at(this._offset + r - 1)) {
        r--;
        break
      } else r--;
    let n = this._bits.substring(this._offset, r);
    return this._offset += t, n
  }
  clone() {
    return new Nn(this._bits, this._offset)
  }
  _preloadInt(t, r) {
    if (t == 0) return 0n;
    let n = this._bits.at(r),
      o = 0n;
    for (let a = 0; a < t - 1; a++) this._bits.at(r + 1 + a) && (o += 1n << BigInt(t - a - 1 - 1));
    return n && (o = o - (1n << BigInt(t - 1))), o
  }
  _preloadUint(t, r) {
    if (t == 0) return 0n;
    let n = 0n;
    for (let o = 0; o < t; o++) this._bits.at(r + o) && (n += 1n << BigInt(t - o - 1));
    return n
  }
  _preloadBuffer(t, r) {
    let n = this._bits.subbuffer(r, t * 8);
    if (n) return n;
    let o = v.alloc(t);
    for (let a = 0; a < t; a++) o[a] = Number(this._preloadUint(8, r + a * 8));
    return o
  }
  _loadInternalAddress() {
    if (Number(this._preloadUint(2, this._offset)) !== 2 || this._preloadUint(1, this._offset + 2) !== 0n) throw Error("Invalid address");
    let r = Number(this._preloadInt(8, this._offset + 3)),
      n = this._preloadBuffer(32, this._offset + 11);
    return this._offset += 267, new zs.Address(r, n)
  }
  _loadExternalAddress() {
    if (Number(this._preloadUint(2, this._offset)) !== 1) throw Error("Invalid address");
    let r = Number(this._preloadUint(9, this._offset + 2)),
      n = this._preloadUint(r, this._offset + 11);
    return this._offset += 11 + r, new xs.ExternalAddress(n, r)
  }
  _toSafeInteger(t, r) {
    if (BigInt(Number.MAX_SAFE_INTEGER) < t || t < BigInt(Number.MIN_SAFE_INTEGER)) throw new TypeError(`${t} is out of safe integer range. Use ${r} instead`);
    return Number(t)
  }
}
de.BitReader = Nn;
var va;

function zr() {
  if (va) return Ve;
  va = 1, Object.defineProperty(Ve, "__esModule", {
    value: !0
  }), Ve.convertToMerkleProof = Ve.exoticMerkleProof = void 0;
  const e = de,
    t = W();

  function r(o, a) {
    const i = new e.BitReader(o);
    if (o.length !== 280) throw new Error(`Merkle Proof cell must have exactly (8 + 256 + 16) bits, got "${o.length}"`);
    if (a.length !== 1) throw new Error(`Merkle Proof cell must have exactly 1 ref, got "${a.length}"`);
    let l = i.loadUint(8);
    if (l !== 3) throw new Error(`Merkle Proof cell must have type 3, got "${l}"`);
    const c = i.loadBuffer(32),
      u = i.loadUint(16),
      f = a[0].hash(0),
      k = a[0].depth(0);
    if (u !== k) throw new Error(`Merkle Proof cell ref depth must be exactly "${u}", got "${k}"`);
    if (!c.equals(f)) throw new Error(`Merkle Proof cell ref hash must be exactly "${c.toString("hex")}", got "${f.toString("hex")}"`);
    return {
      proofDepth: u,
      proofHash: c
    }
  }
  Ve.exoticMerkleProof = r;

  function n(o) {
    return (0, t.beginCell)().storeUint(3, 8).storeBuffer(o.hash(0)).storeUint(o.depth(0), 16).storeRef(o).endCell({
      exotic: !0
    })
  }
  return Ve.convertToMerkleProof = n, Ve
}
var ka;

function $n() {
  if (ka) return De;
  ka = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.generateMerkleProof = De.generateMerkleProofDirect = void 0;
  const e = W(),
    t = Ur,
    r = zr();

  function n(s) {
    return (0, e.beginCell)().storeUint(1, 8).storeUint(1, 8).storeBuffer(s.hash(0)).storeUint(s.depth(0), 16).endCell({
      exotic: !0
    })
  }

  function o(s, l, c, u) {
    const f = l.asCell();
    if (u.length == 0) return n(f);
    let k = l.loadBit() ? 1 : 0,
      m = 0,
      P = s;
    if (k === 0) {
      m = (0, t.readUnaryLength)(l);
      for (let g = 0; g < m; g++) P += l.loadBit() ? "1" : "0"
    } else if ((l.loadBit() ? 1 : 0) === 0) {
      m = l.loadUint(Math.ceil(Math.log2(c + 1)));
      for (let _ = 0; _ < m; _++) P += l.loadBit() ? "1" : "0"
    } else {
      let _ = l.loadBit() ? "1" : "0";
      m = l.loadUint(Math.ceil(Math.log2(c + 1)));
      for (let B = 0; B < m; B++) P += _
    }
    if (c - m === 0) return f;
    {
      let g = f.beginParse(),
        _ = g.loadRef(),
        B = g.loadRef();
      if (!_.isExotic) {
        const S = u.filter(y => P + "0" === y.slice(0, P.length + 1));
        _ = o(P + "0", _.beginParse(), c - m - 1, S)
      }
      if (!B.isExotic) {
        const S = u.filter(y => P + "1" === y.slice(0, P.length + 1));
        B = o(P + "1", B.beginParse(), c - m - 1, S)
      }
      return (0, e.beginCell)().storeSlice(g).storeRef(_).storeRef(B).endCell()
    }
  }

  function a(s, l, c) {
    l.forEach(f => {
      if (!s.has(f)) throw new Error(`Trying to generate merkle proof for a missing key "${f}"`)
    });
    const u = (0, e.beginCell)().storeDictDirect(s).asSlice();
    return o("", u, c.bits, l.map(f => c.serialize(f).toString(2).padStart(c.bits, "0")))
  }
  De.generateMerkleProofDirect = a;

  function i(s, l, c) {
    return (0, r.convertToMerkleProof)(a(s, l, c))
  }
  return De.generateMerkleProof = i, De
}
var Lt = {},
  _a;

function yi() {
  if (_a) return Lt;
  _a = 1, Object.defineProperty(Lt, "__esModule", {
    value: !0
  }), Lt.generateMerkleUpdate = void 0;
  const e = W(),
    t = $n();

  function r(o, a) {
    return (0, e.beginCell)().storeUint(4, 8).storeBuffer(o.hash(0)).storeBuffer(a.hash(0)).storeUint(o.depth(0), 16).storeUint(a.depth(0), 16).storeRef(o).storeRef(a).endCell({
      exotic: !0
    })
  }

  function n(o, a, i, s) {
    const l = (0, t.generateMerkleProof)(o, [a], i).refs[0];
    o.set(a, s);
    const c = (0, t.generateMerkleProof)(o, [a], i).refs[0];
    return r(l, c)
  }
  return Lt.generateMerkleUpdate = n, Lt
}
var xr = {};
Object.defineProperty(xr, "__esModule", {
  value: !0
});
xr.parseDict = void 0;

function Is(e) {
  let t = 0;
  for (; e.loadBit();) t++;
  return t
}

function Pn(e, t, r, n, o) {
  let a = t.loadBit() ? 1 : 0,
    i = 0,
    s = e;
  if (a === 0) {
    i = Is(t);
    for (let l = 0; l < i; l++) s += t.loadBit() ? "1" : "0"
  } else if ((t.loadBit() ? 1 : 0) === 0) {
    i = t.loadUint(Math.ceil(Math.log2(r + 1)));
    for (let c = 0; c < i; c++) s += t.loadBit() ? "1" : "0"
  } else {
    let c = t.loadBit() ? "1" : "0";
    i = t.loadUint(Math.ceil(Math.log2(r + 1)));
    for (let u = 0; u < i; u++) s += c
  }
  if (r - i === 0) n.set(BigInt("0b" + s), o(t));
  else {
    let l = t.loadRef(),
      c = t.loadRef();
    l.isExotic || Pn(s + "0", l.beginParse(), r - i - 1, n, o), c.isExotic || Pn(s + "1", c.beginParse(), r - i - 1, n, o)
  }
}

function Es(e, t, r) {
  let n = new Map;
  return e && Pn("", e, t, n, r), n
}
xr.parseDict = Es;
var K = {},
  Ir = {};
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
Ir.findCommonPrefix = void 0;

function Ts(e, t = 0) {
  if (e.length === 0) return "";
  let r = e[0].slice(t);
  for (let n = 1; n < e.length; n++) {
    const o = e[n];
    for (; o.indexOf(r, t) !== t;)
      if (r = r.substring(0, r.length - 1), r === "") return r
  }
  return r
}
Ir.findCommonPrefix = Ts;
var Ba;

function js() {
  if (Ba) return K;
  Ba = 1, Object.defineProperty(K, "__esModule", {
    value: !0
  }), K.serializeDict = K.detectLabelType = K.writeLabelSame = K.writeLabelLong = K.writeLabelShort = K.buildTree = void 0;
  const e = W(),
    t = Ir;

  function r(y, w) {
    for (; y.length < w;) y = "0" + y;
    return y
  }

  function n(y, w) {
    if (y.size === 0) throw Error("Internal inconsistency");
    let A = new Map,
      p = new Map;
    for (let [U, j] of y.entries()) U[w] === "0" ? A.set(U, j) : p.set(U, j);
    if (A.size === 0) throw Error("Internal inconsistency. Left emtpy.");
    if (p.size === 0) throw Error("Internal inconsistency. Right emtpy.");
    return {
      left: A,
      right: p
    }
  }

  function o(y, w) {
    if (y.size === 0) throw Error("Internal inconsistency");
    if (y.size === 1) return {
      type: "leaf",
      value: Array.from(y.values())[0]
    };
    let {
      left: A,
      right: p
    } = n(y, w);
    return {
      type: "fork",
      left: a(A, w + 1),
      right: a(p, w + 1)
    }
  }

  function a(y, w = 0) {
    if (y.size === 0) throw Error("Internal inconsistency");
    const A = (0, t.findCommonPrefix)(Array.from(y.keys()), w);
    return {
      label: A,
      node: o(y, A.length + w)
    }
  }

  function i(y, w) {
    let A = new Map;
    for (let p of Array.from(y.keys())) {
      const U = r(p.toString(2), w);
      A.set(U, y.get(p))
    }
    return a(A)
  }
  K.buildTree = i;

  function s(y, w) {
    w.storeBit(0);
    for (let A = 0; A < y.length; A++) w.storeBit(1);
    return w.storeBit(0), y.length > 0 && w.storeUint(BigInt("0b" + y), y.length), w
  }
  K.writeLabelShort = s;

  function l(y) {
    return 1 + y.length + 1 + y.length
  }

  function c(y, w, A) {
    A.storeBit(1), A.storeBit(0);
    let p = Math.ceil(Math.log2(w + 1));
    return A.storeUint(y.length, p), y.length > 0 && A.storeUint(BigInt("0b" + y), y.length), A
  }
  K.writeLabelLong = c;

  function u(y, w) {
    return 2 + Math.ceil(Math.log2(w + 1)) + y.length
  }

  function f(y, w, A, p) {
    p.storeBit(1), p.storeBit(1), p.storeBit(y);
    let U = Math.ceil(Math.log2(A + 1));
    p.storeUint(w, U)
  }
  K.writeLabelSame = f;

  function k(y) {
    return 3 + Math.ceil(Math.log2(y + 1))
  }

  function m(y) {
    if (y.length === 0 || y.length === 1) return !0;
    for (let w = 1; w < y.length; w++)
      if (y[w] !== y[0]) return !1;
    return !0
  }

  function P(y, w) {
    let A = "short",
      p = l(y),
      U = u(y, w);
    if (U < p && (p = U, A = "long"), m(y)) {
      let j = k(w);
      j < p && (p = j, A = "same")
    }
    return A
  }
  K.detectLabelType = P;

  function g(y, w, A) {
    let p = P(y, w);
    p === "short" ? s(y, A) : p === "long" ? c(y, w, A) : p === "same" && f(y[0] === "1", y.length, w, A)
  }

  function _(y, w, A, p) {
    if (y.type === "leaf" && A(y.value, p), y.type === "fork") {
      const U = (0, e.beginCell)(),
        j = (0, e.beginCell)();
      B(y.left, w - 1, A, U), B(y.right, w - 1, A, j), p.storeRef(U), p.storeRef(j)
    }
  }

  function B(y, w, A, p) {
    g(y.label, w, p), _(y.node, w - y.label.length, A, p)
  }

  function S(y, w, A, p) {
    const U = i(y, w);
    B(U, w, A, p)
  }
  return K.serializeDict = S, K
}
var _t = {};
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.deserializeInternalKey = _t.serializeInternalKey = void 0;
const wi = ae,
  An = Te(),
  Rs = Ar();

function Os(e) {
  if (typeof e == "number") {
    if (!Number.isSafeInteger(e)) throw Error("Invalid key type: not a safe integer: " + e);
    return "n:" + e.toString(10)
  } else {
    if (typeof e == "bigint") return "b:" + e.toString(10);
    if (wi.Address.isAddress(e)) return "a:" + e.toString();
    if (v.isBuffer(e)) return "f:" + e.toString("hex");
    if (An.BitString.isBitString(e)) return "B:" + e.toString();
    throw Error("Invalid key type")
  }
}
_t.serializeInternalKey = Os;

function Ds(e) {
  let t = e.slice(0, 2),
    r = e.slice(2);
  if (t === "n:") return parseInt(r, 10);
  if (t === "b:") return BigInt(r);
  if (t === "a:") return wi.Address.parse(r);
  if (t === "f:") return v.from(r, "hex");
  if (t === "B:") {
    const n = r.slice(-1) == "_";
    if (n || r.length % 2 != 0) {
      let a = n ? r.length - 1 : r.length;
      const i = r.substr(0, a) + "0";
      return !n && a & 1 ? new An.BitString(v.from(i, "hex"), 0, a << 2) : (0, Rs.paddedBufferToBits)(v.from(i, "hex"))
    } else return new An.BitString(v.from(r, "hex"), 0, r.length << 2)
  }
  throw Error("Invalid key type: " + t)
}
_t.deserializeInternalKey = Ds;
var Sa;

function mt() {
  if (Sa) return Vt;
  Sa = 1, Object.defineProperty(Vt, "__esModule", {
    value: !0
  }), Vt.Dictionary = void 0;
  const e = ae,
    t = W(),
    r = yt(),
    n = Te(),
    o = $n(),
    a = yi(),
    i = xr,
    s = js(),
    l = _t;
  let c = class Se {
    static empty(h, M) {
      return h && M ? new Se(new Map, h, M) : new Se(new Map, null, null)
    }
    static load(h, M, x) {
      let O;
      if (x instanceof r.Cell) {
        if (x.isExotic) return Se.empty(h, M);
        O = x.beginParse()
      } else O = x;
      let $ = O.loadMaybeRef();
      return $ && !$.isExotic ? Se.loadDirect(h, M, $.beginParse()) : Se.empty(h, M)
    }
    static loadDirect(h, M, x) {
      if (!x) return Se.empty(h, M);
      let O;
      x instanceof r.Cell ? O = x.beginParse() : O = x;
      let $ = (0, i.parseDict)(O, h.bits, M.parse),
        F = new Map;
      for (let [pe, _e] of $) F.set((0, l.serializeInternalKey)(h.parse(pe)), _e);
      return new Se(F, h, M)
    }
    constructor(h, M, x) {
      this._key = M, this._value = x, this._map = h
    }
    get size() {
      return this._map.size
    }
    get(h) {
      return this._map.get((0, l.serializeInternalKey)(h))
    }
    has(h) {
      return this._map.has((0, l.serializeInternalKey)(h))
    }
    set(h, M) {
      return this._map.set((0, l.serializeInternalKey)(h), M), this
    }
    delete(h) {
      const M = (0, l.serializeInternalKey)(h);
      return this._map.delete(M)
    }
    clear() {
      this._map.clear()
    }*[Symbol.iterator]() {
      for (const [h, M] of this._map) yield [(0, l.deserializeInternalKey)(h), M]
    }
    keys() {
      return Array.from(this._map.keys()).map(h => (0, l.deserializeInternalKey)(h))
    }
    values() {
      return Array.from(this._map.values())
    }
    store(h, M, x) {
      if (this._map.size === 0) h.storeBit(0);
      else {
        let O = this._key;
        M != null && (O = M);
        let $ = this._value;
        if (x != null && ($ = x), !O) throw Error("Key serializer is not defined");
        if (!$) throw Error("Value serializer is not defined");
        let F = new Map;
        for (const [_e, ps] of this._map) F.set(O.serialize((0, l.deserializeInternalKey)(_e)), ps);
        h.storeBit(1);
        let pe = (0, t.beginCell)();
        (0, s.serializeDict)(F, O.bits, $.serialize, pe), h.storeRef(pe.endCell())
      }
    }
    storeDirect(h, M, x) {
      if (this._map.size === 0) throw Error("Cannot store empty dictionary directly");
      let O = this._key;
      M != null && (O = M);
      let $ = this._value;
      if (x != null && ($ = x), !O) throw Error("Key serializer is not defined");
      if (!$) throw Error("Value serializer is not defined");
      let F = new Map;
      for (const [pe, _e] of this._map) F.set(O.serialize((0, l.deserializeInternalKey)(pe)), _e);
      (0, s.serializeDict)(F, O.bits, $.serialize, h)
    }
    generateMerkleProof(h) {
      return (0, o.generateMerkleProof)(this, h, this._key)
    }
    generateMerkleProofDirect(h) {
      return (0, o.generateMerkleProofDirect)(this, h, this._key)
    }
    generateMerkleUpdate(h, M) {
      return (0, a.generateMerkleUpdate)(this, h, this._key, M)
    }
  };
  Vt.Dictionary = c, c.Keys = {
    Address: () => u(),
    BigInt: b => f(b),
    Int: b => k(b),
    BigUint: b => m(b),
    Uint: b => P(b),
    Buffer: b => g(b),
    BitString: b => _(b)
  }, c.Values = {
    BigInt: b => S(b),
    Int: b => B(b),
    BigVarInt: b => y(b),
    BigUint: b => p(b),
    Uint: b => A(b),
    BigVarUint: b => w(b),
    Bool: () => U(),
    Address: () => j(),
    Cell: () => E(),
    Buffer: b => V(b),
    BitString: b => D(b),
    Dictionary: (b, h) => R(b, h)
  };

  function u() {
    return {
      bits: 267,
      serialize: b => {
        if (!e.Address.isAddress(b)) throw Error("Key is not an address");
        return (0, t.beginCell)().storeAddress(b).endCell().beginParse().preloadUintBig(267)
      },
      parse: b => (0, t.beginCell)().storeUint(b, 267).endCell().beginParse().loadAddress()
    }
  }

  function f(b) {
    return {
      bits: b,
      serialize: h => {
        if (typeof h != "bigint") throw Error("Key is not a bigint");
        return (0, t.beginCell)().storeInt(h, b).endCell().beginParse().loadUintBig(b)
      },
      parse: h => (0, t.beginCell)().storeUint(h, b).endCell().beginParse().loadIntBig(b)
    }
  }

  function k(b) {
    return {
      bits: b,
      serialize: h => {
        if (typeof h != "number") throw Error("Key is not a number");
        if (!Number.isSafeInteger(h)) throw Error("Key is not a safe integer: " + h);
        return (0, t.beginCell)().storeInt(h, b).endCell().beginParse().loadUintBig(b)
      },
      parse: h => (0, t.beginCell)().storeUint(h, b).endCell().beginParse().loadInt(b)
    }
  }

  function m(b) {
    return {
      bits: b,
      serialize: h => {
        if (typeof h != "bigint") throw Error("Key is not a bigint");
        if (h < 0) throw Error("Key is negative: " + h);
        return (0, t.beginCell)().storeUint(h, b).endCell().beginParse().loadUintBig(b)
      },
      parse: h => (0, t.beginCell)().storeUint(h, b).endCell().beginParse().loadUintBig(b)
    }
  }

  function P(b) {
    return {
      bits: b,
      serialize: h => {
        if (typeof h != "number") throw Error("Key is not a number");
        if (!Number.isSafeInteger(h)) throw Error("Key is not a safe integer: " + h);
        if (h < 0) throw Error("Key is negative: " + h);
        return (0, t.beginCell)().storeUint(h, b).endCell().beginParse().loadUintBig(b)
      },
      parse: h => Number((0, t.beginCell)().storeUint(h, b).endCell().beginParse().loadUint(b))
    }
  }

  function g(b) {
    return {
      bits: b * 8,
      serialize: h => {
        if (!v.isBuffer(h)) throw Error("Key is not a buffer");
        return (0, t.beginCell)().storeBuffer(h).endCell().beginParse().loadUintBig(b * 8)
      },
      parse: h => (0, t.beginCell)().storeUint(h, b * 8).endCell().beginParse().loadBuffer(b)
    }
  }

  function _(b) {
    return {
      bits: b,
      serialize: h => {
        if (!n.BitString.isBitString(h)) throw Error("Key is not a BitString");
        return (0, t.beginCell)().storeBits(h).endCell().beginParse().loadUintBig(b)
      },
      parse: h => (0, t.beginCell)().storeUint(h, b).endCell().beginParse().loadBits(b)
    }
  }

  function B(b) {
    return {
      serialize: (h, M) => {
        M.storeInt(h, b)
      },
      parse: h => h.loadInt(b)
    }
  }

  function S(b) {
    return {
      serialize: (h, M) => {
        M.storeInt(h, b)
      },
      parse: h => h.loadIntBig(b)
    }
  }

  function y(b) {
    return {
      serialize: (h, M) => {
        M.storeVarInt(h, b)
      },
      parse: h => h.loadVarIntBig(b)
    }
  }

  function w(b) {
    return {
      serialize: (h, M) => {
        M.storeVarUint(h, b)
      },
      parse: h => h.loadVarUintBig(b)
    }
  }

  function A(b) {
    return {
      serialize: (h, M) => {
        M.storeUint(h, b)
      },
      parse: h => h.loadUint(b)
    }
  }

  function p(b) {
    return {
      serialize: (h, M) => {
        M.storeUint(h, b)
      },
      parse: h => h.loadUintBig(b)
    }
  }

  function U() {
    return {
      serialize: (b, h) => {
        h.storeBit(b)
      },
      parse: b => b.loadBit()
    }
  }

  function j() {
    return {
      serialize: (b, h) => {
        h.storeAddress(b)
      },
      parse: b => b.loadAddress()
    }
  }

  function E() {
    return {
      serialize: (b, h) => {
        h.storeRef(b)
      },
      parse: b => b.loadRef()
    }
  }

  function R(b, h) {
    return {
      serialize: (M, x) => {
        M.store(x)
      },
      parse: M => c.load(b, h, M)
    }
  }

  function V(b) {
    return {
      serialize: (h, M) => {
        if (h.length !== b) throw Error("Invalid buffer size");
        M.storeBuffer(h)
      },
      parse: h => h.loadBuffer(b)
    }
  }

  function D(b) {
    return {
      serialize: (h, M) => {
        if (h.length !== b) throw Error("Invalid BitString size");
        M.storeBits(h)
      },
      parse: h => h.loadBits(b)
    }
  }
  return Vt
}
var me = {},
  Ca;

function vi() {
  if (Ca) return me;
  Ca = 1, Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.writeString = me.stringToCell = me.readString = void 0;
  const e = W();

  function t(i) {
    if (i.remainingBits % 8 !== 0) throw new Error(`Invalid string length: ${i.remainingBits}`);
    if (i.remainingRefs !== 0 && i.remainingRefs !== 1) throw new Error(`invalid number of refs: ${i.remainingRefs}`);
    let s;
    return i.remainingBits === 0 ? s = v.alloc(0) : s = i.loadBuffer(i.remainingBits / 8), i.remainingRefs === 1 && (s = v.concat([s, t(i.loadRef().beginParse())])), s
  }

  function r(i) {
    return t(i).toString()
  }
  me.readString = r;

  function n(i, s) {
    if (i.length > 0) {
      let l = Math.floor(s.availableBits / 8);
      if (i.length > l) {
        let c = i.subarray(0, l),
          u = i.subarray(l);
        s = s.storeBuffer(c);
        let f = (0, e.beginCell)();
        n(u, f), s = s.storeRef(f.endCell())
      } else s = s.storeBuffer(i)
    }
  }

  function o(i) {
    let s = (0, e.beginCell)();
    return n(v.from(i), s), s.endCell()
  }
  me.stringToCell = o;

  function a(i, s) {
    n(v.from(i), s)
  }
  return me.writeString = a, me
}
var Pa;

function Wn() {
  if (Pa) return Dt;
  Pa = 1;
  var e = I && I.__importDefault || function(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    },
    t;
  Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.Slice = void 0;
  const r = e(At),
    n = mt(),
    o = W(),
    a = vi();
  let i = class Mn {
    constructor(l, c) {
      this[t] = () => this.toString(), this._reader = l.clone(), this._refs = [...c], this._refsOffset = 0
    }
    get remainingBits() {
      return this._reader.remaining
    }
    get offsetBits() {
      return this._reader.offset
    }
    get remainingRefs() {
      return this._refs.length - this._refsOffset
    }
    get offsetRefs() {
      return this._refsOffset
    }
    skip(l) {
      return this._reader.skip(l), this
    }
    loadBit() {
      return this._reader.loadBit()
    }
    preloadBit() {
      return this._reader.preloadBit()
    }
    loadBoolean() {
      return this.loadBit()
    }
    loadMaybeBoolean() {
      return this.loadBit() ? this.loadBoolean() : null
    }
    loadBits(l) {
      return this._reader.loadBits(l)
    }
    preloadBits(l) {
      return this._reader.preloadBits(l)
    }
    loadUint(l) {
      return this._reader.loadUint(l)
    }
    loadUintBig(l) {
      return this._reader.loadUintBig(l)
    }
    preloadUint(l) {
      return this._reader.preloadUint(l)
    }
    preloadUintBig(l) {
      return this._reader.preloadUintBig(l)
    }
    loadMaybeUint(l) {
      return this.loadBit() ? this.loadUint(l) : null
    }
    loadMaybeUintBig(l) {
      return this.loadBit() ? this.loadUintBig(l) : null
    }
    loadInt(l) {
      return this._reader.loadInt(l)
    }
    loadIntBig(l) {
      return this._reader.loadIntBig(l)
    }
    preloadInt(l) {
      return this._reader.preloadInt(l)
    }
    preloadIntBig(l) {
      return this._reader.preloadIntBig(l)
    }
    loadMaybeInt(l) {
      return this.loadBit() ? this.loadInt(l) : null
    }
    loadMaybeIntBig(l) {
      return this.loadBit() ? this.loadIntBig(l) : null
    }
    loadVarUint(l) {
      return this._reader.loadVarUint(l)
    }
    loadVarUintBig(l) {
      return this._reader.loadVarUintBig(l)
    }
    preloadVarUint(l) {
      return this._reader.preloadVarUint(l)
    }
    preloadVarUintBig(l) {
      return this._reader.preloadVarUintBig(l)
    }
    loadVarInt(l) {
      return this._reader.loadVarInt(l)
    }
    loadVarIntBig(l) {
      return this._reader.loadVarIntBig(l)
    }
    preloadVarInt(l) {
      return this._reader.preloadVarInt(l)
    }
    preloadVarIntBig(l) {
      return this._reader.preloadVarIntBig(l)
    }
    loadCoins() {
      return this._reader.loadCoins()
    }
    preloadCoins() {
      return this._reader.preloadCoins()
    }
    loadMaybeCoins() {
      return this._reader.loadBit() ? this._reader.loadCoins() : null
    }
    loadAddress() {
      return this._reader.loadAddress()
    }
    loadMaybeAddress() {
      return this._reader.loadMaybeAddress()
    }
    loadExternalAddress() {
      return this._reader.loadExternalAddress()
    }
    loadMaybeExternalAddress() {
      return this._reader.loadMaybeExternalAddress()
    }
    loadAddressAny() {
      return this._reader.loadAddressAny()
    }
    loadRef() {
      if (this._refsOffset >= this._refs.length) throw new Error("No more references");
      return this._refs[this._refsOffset++]
    }
    preloadRef() {
      if (this._refsOffset >= this._refs.length) throw new Error("No more references");
      return this._refs[this._refsOffset]
    }
    loadMaybeRef() {
      return this.loadBit() ? this.loadRef() : null
    }
    preloadMaybeRef() {
      return this.preloadBit() ? this.preloadRef() : null
    }
    loadBuffer(l) {
      return this._reader.loadBuffer(l)
    }
    preloadBuffer(l) {
      return this._reader.preloadBuffer(l)
    }
    loadStringTail() {
      return (0, a.readString)(this)
    }
    loadMaybeStringTail() {
      return this.loadBit() ? (0, a.readString)(this) : null
    }
    loadStringRefTail() {
      return (0, a.readString)(this.loadRef().beginParse())
    }
    loadMaybeStringRefTail() {
      const l = this.loadMaybeRef();
      return l ? (0, a.readString)(l.beginParse()) : null
    }
    loadDict(l, c) {
      return n.Dictionary.load(l, c, this)
    }
    loadDictDirect(l, c) {
      return n.Dictionary.loadDirect(l, c, this)
    }
    endParse() {
      if (this.remainingBits > 0 || this.remainingRefs > 0) throw new Error("Slice is not empty")
    }
    asCell() {
      return (0, o.beginCell)().storeSlice(this).endCell()
    }
    asBuilder() {
      return (0, o.beginCell)().storeSlice(this)
    }
    clone(l = !1) {
      if (l) {
        let c = this._reader.clone();
        return c.reset(), new Mn(c, this._refs)
      } else {
        let c = new Mn(this._reader, this._refs);
        return c._refsOffset = this._refsOffset, c
      }
    }
    toString() {
      return this.asCell().toString()
    }
  };
  return Dt.Slice = i, t = r.default, Dt
}
var qt = {},
  or = {};
Object.defineProperty(or, "__esModule", {
  value: !0
});
or.exoticLibrary = void 0;
const Vs = de;

function Ls(e, t) {
  const r = new Vs.BitReader(e);
  if (e.length !== 264) throw new Error(`Library cell must have exactly (8 + 256) bits, got "${e.length}"`);
  let o = r.loadUint(8);
  if (o !== 2) throw new Error(`Library cell must have type 2, got "${o}"`);
  return {}
}
or.exoticLibrary = Ls;
var zt = {};
Object.defineProperty(zt, "__esModule", {
  value: !0
});
zt.exoticMerkleUpdate = void 0;
const qs = de;

function Ns(e, t) {
  const r = new qs.BitReader(e),
    n = 8 + 2 * 272;
  if (e.length !== n) throw new Error(`Merkle Update cell must have exactly (8 + (2 * (256 + 16))) bits, got "${e.length}"`);
  if (t.length !== 2) throw new Error(`Merkle Update cell must have exactly 2 refs, got "${t.length}"`);
  let o = r.loadUint(8);
  if (o !== 4) throw new Error(`Merkle Update cell type must be exactly 4, got "${o}"`);
  const a = r.loadBuffer(32),
    i = r.loadBuffer(32),
    s = r.loadUint(16),
    l = r.loadUint(16);
  if (s !== t[0].depth(0)) throw new Error(`Merkle Update cell ref depth must be exactly "${s}", got "${t[0].depth(0)}"`);
  if (!a.equals(t[0].hash(0))) throw new Error(`Merkle Update cell ref hash must be exactly "${a.toString("hex")}", got "${t[0].hash(0).toString("hex")}"`);
  if (l !== t[1].depth(0)) throw new Error(`Merkle Update cell ref depth must be exactly "${l}", got "${t[1].depth(0)}"`);
  if (!i.equals(t[1].hash(0))) throw new Error(`Merkle Update cell ref hash must be exactly "${i.toString("hex")}", got "${t[1].hash(0).toString("hex")}"`);
  return {
    proofDepth1: s,
    proofDepth2: l,
    proofHash1: a,
    proofHash2: i
  }
}
zt.exoticMerkleUpdate = Ns;
var xt = {},
  It = {};
Object.defineProperty(It, "__esModule", {
  value: !0
});
It.LevelMask = void 0;
class Fn {
  constructor(t = 0) {
    this._mask = 0, this._mask = t, this._hashIndex = $s(this._mask), this._hashCount = this._hashIndex + 1
  }
  get value() {
    return this._mask
  }
  get level() {
    return 32 - Math.clz32(this._mask)
  }
  get hashIndex() {
    return this._hashIndex
  }
  get hashCount() {
    return this._hashCount
  }
  apply(t) {
    return new Fn(this._mask & (1 << t) - 1)
  }
  isSignificant(t) {
    return t === 0 || (this._mask >> t - 1) % 2 !== 0
  }
}
It.LevelMask = Fn;

function $s(e) {
  return e = e - (e >> 1 & 1431655765), e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >> 24
}
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.exoticPruned = void 0;
const Ws = de,
  Aa = It;

function Fs(e, t) {
  let r = new Ws.BitReader(e),
    n = r.loadUint(8);
  if (n !== 1) throw new Error(`Pruned branch cell must have type 1, got "${n}"`);
  if (t.length !== 0) throw new Error(`Pruned Branch cell can't has refs, got "${t.length}"`);
  let o;
  if (e.length === 280) o = new Aa.LevelMask(1);
  else {
    if (o = new Aa.LevelMask(r.loadUint(8)), o.level < 1 || o.level > 3) throw new Error(`Pruned Branch cell level must be >= 1 and <= 3, got "${o.level}/${o.value}"`);
    const l = 16 + o.apply(o.level - 1).hashCount * 272;
    if (e.length !== l) throw new Error(`Pruned branch cell must have exactly ${l} bits, got "${e.length}"`)
  }
  let a = [],
    i = [],
    s = [];
  for (let l = 0; l < o.level; l++) i.push(r.loadBuffer(32));
  for (let l = 0; l < o.level; l++) s.push(r.loadUint(16));
  for (let l = 0; l < o.level; l++) a.push({
    depth: s[l],
    hash: i[l]
  });
  return {
    mask: o.value,
    pruned: a
  }
}
xt.exoticPruned = Fs;
var Ma;

function Ks() {
  if (Ma) return qt;
  Ma = 1, Object.defineProperty(qt, "__esModule", {
    value: !0
  }), qt.resolveExotic = void 0;
  const e = de,
    t = je,
    r = or,
    n = zr(),
    o = zt,
    a = xt,
    i = It;

  function s(k, m) {
    let P = (0, a.exoticPruned)(k, m),
      g = [],
      _ = [],
      B = new i.LevelMask(P.mask);
    for (let S = 0; S < P.pruned.length; S++) g.push(P.pruned[S].depth), _.push(P.pruned[S].hash);
    return {
      type: t.CellType.PrunedBranch,
      depths: g,
      hashes: _,
      mask: B
    }
  }

  function l(k, m) {
    (0, r.exoticLibrary)(k, m);
    let P = [],
      g = [],
      _ = new i.LevelMask;
    return {
      type: t.CellType.Library,
      depths: P,
      hashes: g,
      mask: _
    }
  }

  function c(k, m) {
    (0, n.exoticMerkleProof)(k, m);
    let P = [],
      g = [],
      _ = new i.LevelMask(m[0].level() >> 1);
    return {
      type: t.CellType.MerkleProof,
      depths: P,
      hashes: g,
      mask: _
    }
  }

  function u(k, m) {
    (0, o.exoticMerkleUpdate)(k, m);
    let P = [],
      g = [],
      _ = new i.LevelMask((m[0].level() | m[1].level()) >> 1);
    return {
      type: t.CellType.MerkleUpdate,
      depths: P,
      hashes: g,
      mask: _
    }
  }

  function f(k, m) {
    let g = new e.BitReader(k).preloadUint(8);
    if (g === 1) return s(k, m);
    if (g === 2) return l(k, m);
    if (g === 3) return c(k, m);
    if (g === 4) return u(k, m);
    throw Error("Invalid exotic cell type: " + g)
  }
  return qt.resolveExotic = f, qt
}
var Nt = {},
  ye = {};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.getRepr = ye.getBitsDescriptor = ye.getRefsDescriptor = void 0;
const er = je,
  Hs = Ar();

function ki(e, t, r) {
  return e.length + (r !== er.CellType.Ordinary ? 1 : 0) * 8 + t * 32
}
ye.getRefsDescriptor = ki;

function _i(e) {
  let t = e.length;
  return Math.ceil(t / 8) + Math.floor(t / 8)
}
ye.getBitsDescriptor = _i;

function Gs(e, t, r, n, o, a) {
  const i = Math.ceil(t.length / 8),
    s = v.alloc(2 + i + 34 * r.length);
  let l = 0;
  s[l++] = ki(r, o, a), s[l++] = _i(e), (0, Hs.bitsToPaddedBuffer)(t).copy(s, l), l += i;
  for (const c of r) {
    let u;
    a == er.CellType.MerkleProof || a == er.CellType.MerkleUpdate ? u = c.depth(n + 1) : u = c.depth(n), s[l++] = Math.floor(u / 256), s[l++] = u % 256
  }
  for (const c of r) {
    let u;
    a == er.CellType.MerkleProof || a == er.CellType.MerkleUpdate ? u = c.hash(n + 1) : u = c.hash(n), u.copy(s, l), l += 32
  }
  return s
}
ye.getRepr = Gs;
var pn = {},
  Ce = {},
  Et = {},
  Bt = {};
Object.defineProperty(Bt, "__esModule", {
  value: !0
});
Bt.getSecureRandomWords = Bt.getSecureRandomBytes = void 0;

function Qs(e) {
  return v.from(window.crypto.getRandomValues(new Uint8Array(e)))
}
Bt.getSecureRandomBytes = Qs;

function Ys(e) {
  return window.crypto.getRandomValues(new Uint16Array(e))
}
Bt.getSecureRandomWords = Ys;
var Er = {};
Object.defineProperty(Er, "__esModule", {
  value: !0
});
Er.hmac_sha512 = void 0;
async function Xs(e, t) {
  let r = typeof e == "string" ? v.from(e, "utf-8") : e,
    n = typeof t == "string" ? v.from(t, "utf-8") : t;
  const o = {
      name: "HMAC",
      hash: "SHA-512"
    },
    a = await window.crypto.subtle.importKey("raw", r, o, !1, ["sign"]);
  return v.from(await crypto.subtle.sign(o, a, n))
}
Er.hmac_sha512 = Xs;
var Tr = {};
Object.defineProperty(Tr, "__esModule", {
  value: !0
});
Tr.pbkdf2_sha512 = void 0;
async function Js(e, t, r, n) {
  const o = typeof e == "string" ? v.from(e, "utf-8") : e,
    a = typeof t == "string" ? v.from(t, "utf-8") : t,
    i = await window.crypto.subtle.importKey("raw", o, {
      name: "PBKDF2"
    }, !1, ["deriveBits"]),
    s = await window.crypto.subtle.deriveBits({
      name: "PBKDF2",
      hash: "SHA-512",
      salt: a,
      iterations: r
    }, i, n * 8);
  return v.from(s)
}
Tr.pbkdf2_sha512 = Js;
var jr = {};
Object.defineProperty(jr, "__esModule", {
  value: !0
});
jr.sha256 = void 0;
async function Zs(e) {
  return typeof e == "string" ? v.from(await crypto.subtle.digest("SHA-256", v.from(e, "utf-8"))) : v.from(await crypto.subtle.digest("SHA-256", e))
}
jr.sha256 = Zs;
var Rr = {};
Object.defineProperty(Rr, "__esModule", {
  value: !0
});
Rr.sha512 = void 0;
async function el(e) {
  return typeof e == "string" ? v.from(await crypto.subtle.digest("SHA-512", v.from(e, "utf-8"))) : v.from(await crypto.subtle.digest("SHA-512", e))
}
Rr.sha512 = el;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.sha512 = e.sha256 = e.pbkdf2_sha512 = e.hmac_sha512 = e.getSecureRandomWords = e.getSecureRandomBytes = void 0;
  var t = Bt;
  Object.defineProperty(e, "getSecureRandomBytes", {
    enumerable: !0,
    get: function() {
      return t.getSecureRandomBytes
    }
  }), Object.defineProperty(e, "getSecureRandomWords", {
    enumerable: !0,
    get: function() {
      return t.getSecureRandomWords
    }
  });
  var r = Er;
  Object.defineProperty(e, "hmac_sha512", {
    enumerable: !0,
    get: function() {
      return r.hmac_sha512
    }
  });
  var n = Tr;
  Object.defineProperty(e, "pbkdf2_sha512", {
    enumerable: !0,
    get: function() {
      return n.pbkdf2_sha512
    }
  });
  var o = jr;
  Object.defineProperty(e, "sha256", {
    enumerable: !0,
    get: function() {
      return o.sha256
    }
  });
  var a = Rr;
  Object.defineProperty(e, "sha512", {
    enumerable: !0,
    get: function() {
      return a.sha512
    }
  })
})(Et);
var tl = I && I.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  }
};
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.sha256 = Ce.sha256_fallback = Ce.sha256_sync = void 0;
const rl = tl(Ln),
  nl = Et;

function Bi(e) {
  let t;
  typeof e == "string" ? t = v.from(e, "utf-8").toString("hex") : t = e.toString("hex");
  let r = new rl.default("SHA-256", "HEX");
  r.update(t);
  let n = r.getHash("HEX");
  return v.from(n, "hex")
}
Ce.sha256_sync = Bi;
async function al(e) {
  return Bi(e)
}
Ce.sha256_fallback = al;

function il(e) {
  return (0, nl.sha256)(e)
}
Ce.sha256 = il;
var Pe = {},
  ol = I && I.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.sha512 = Pe.sha512_fallback = Pe.sha512_sync = void 0;
const sl = ol(Ln),
  ll = Et;

function Si(e) {
  let t;
  typeof e == "string" ? t = v.from(e, "utf-8").toString("hex") : t = e.toString("hex");
  let r = new sl.default("SHA-512", "HEX");
  r.update(t);
  let n = r.getHash("HEX");
  return v.from(n, "hex")
}
Pe.sha512_sync = Si;
async function dl(e) {
  return Si(e)
}
Pe.sha512_fallback = dl;
async function cl(e) {
  return (0, ll.sha512)(e)
}
Pe.sha512 = cl;
var sr = {};
Object.defineProperty(sr, "__esModule", {
  value: !0
});
sr.pbkdf2_sha512 = void 0;
const ul = Et;

function fl(e, t, r, n) {
  return (0, ul.pbkdf2_sha512)(e, t, r, n)
}
sr.pbkdf2_sha512 = fl;
var fe = {},
  hl = I && I.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.hmac_sha512 = fe.hmac_sha512_fallback = void 0;
const gl = hl(Ln),
  pl = Et;
async function ml(e, t) {
  let r = typeof e == "string" ? v.from(e, "utf-8") : e,
    n = typeof t == "string" ? v.from(t, "utf-8") : t;
  const o = new gl.default("SHA-512", "HEX", {
    hmacKey: {
      value: r.toString("hex"),
      format: "HEX"
    }
  });
  o.update(n.toString("hex"));
  const a = o.getHash("HEX");
  return v.from(a, "hex")
}
fe.hmac_sha512_fallback = ml;

function bl(e, t) {
  return (0, pl.hmac_sha512)(e, t)
}
fe.hmac_sha512 = bl;
var ue = {};
Object.defineProperty(ue, "__esModule", {
  value: !0
});
ue.getSecureRandomNumber = ue.getSecureRandomWords = ue.getSecureRandomBytes = void 0;
const yl = Et;
async function Ci(e) {
  return (0, yl.getSecureRandomBytes)(e)
}
ue.getSecureRandomBytes = Ci;
async function Pi(e) {
  return Pi()
}
ue.getSecureRandomWords = Pi;
async function wl(e, t) {
  let r = t - e;
  var n = Math.ceil(Math.log2(r));
  if (n > 53) throw new Error("Range is too large");
  for (var o = Math.ceil(n / 8), a = Math.pow(2, n) - 1;;) {
    let s = await Ci(n),
      l = (o - 1) * 8,
      c = 0;
    for (var i = 0; i < o; i++) c += s[i] * Math.pow(2, l), l -= 8;
    if (c = c & a, !(c >= r)) return e + c
  }
}
ue.getSecureRandomNumber = wl;
var Or = {},
  Dr = {};
Object.defineProperty(Dr, "__esModule", {
  value: !0
});
Dr.wordlist = void 0;
Dr.wordlist = ["abacus", "abdomen", "abdominal", "abide", "abiding", "ability", "ablaze", "able", "abnormal", "abrasion", "abrasive", "abreast", "abridge", "abroad", "abruptly", "absence", "absentee", "absently", "absinthe", "absolute", "absolve", "abstain", "abstract", "absurd", "accent", "acclaim", "acclimate", "accompany", "account", "accuracy", "accurate", "accustom", "acetone", "achiness", "aching", "acid", "acorn", "acquaint", "acquire", "acre", "acrobat", "acronym", "acting", "action", "activate", "activator", "active", "activism", "activist", "activity", "actress", "acts", "acutely", "acuteness", "aeration", "aerobics", "aerosol", "aerospace", "afar", "affair", "affected", "affecting", "affection", "affidavit", "affiliate", "affirm", "affix", "afflicted", "affluent", "afford", "affront", "aflame", "afloat", "aflutter", "afoot", "afraid", "afterglow", "afterlife", "aftermath", "aftermost", "afternoon", "aged", "ageless", "agency", "agenda", "agent", "aggregate", "aghast", "agile", "agility", "aging", "agnostic", "agonize", "agonizing", "agony", "agreeable", "agreeably", "agreed", "agreeing", "agreement", "aground", "ahead", "ahoy", "aide", "aids", "aim", "ajar", "alabaster", "alarm", "albatross", "album", "alfalfa", "algebra", "algorithm", "alias", "alibi", "alienable", "alienate", "aliens", "alike", "alive", "alkaline", "alkalize", "almanac", "almighty", "almost", "aloe", "aloft", "aloha", "alone", "alongside", "aloof", "alphabet", "alright", "although", "altitude", "alto", "aluminum", "alumni", "always", "amaretto", "amaze", "amazingly", "amber", "ambiance", "ambiguity", "ambiguous", "ambition", "ambitious", "ambulance", "ambush", "amendable", "amendment", "amends", "amenity", "amiable", "amicably", "amid", "amigo", "amino", "amiss", "ammonia", "ammonium", "amnesty", "amniotic", "among", "amount", "amperage", "ample", "amplifier", "amplify", "amply", "amuck", "amulet", "amusable", "amused", "amusement", "amuser", "amusing", "anaconda", "anaerobic", "anagram", "anatomist", "anatomy", "anchor", "anchovy", "ancient", "android", "anemia", "anemic", "aneurism", "anew", "angelfish", "angelic", "anger", "angled", "angler", "angles", "angling", "angrily", "angriness", "anguished", "angular", "animal", "animate", "animating", "animation", "animator", "anime", "animosity", "ankle", "annex", "annotate", "announcer", "annoying", "annually", "annuity", "anointer", "another", "answering", "antacid", "antarctic", "anteater", "antelope", "antennae", "anthem", "anthill", "anthology", "antibody", "antics", "antidote", "antihero", "antiquely", "antiques", "antiquity", "antirust", "antitoxic", "antitrust", "antiviral", "antivirus", "antler", "antonym", "antsy", "anvil", "anybody", "anyhow", "anymore", "anyone", "anyplace", "anything", "anytime", "anyway", "anywhere", "aorta", "apache", "apostle", "appealing", "appear", "appease", "appeasing", "appendage", "appendix", "appetite", "appetizer", "applaud", "applause", "apple", "appliance", "applicant", "applied", "apply", "appointee", "appraisal", "appraiser", "apprehend", "approach", "approval", "approve", "apricot", "april", "apron", "aptitude", "aptly", "aqua", "aqueduct", "arbitrary", "arbitrate", "ardently", "area", "arena", "arguable", "arguably", "argue", "arise", "armadillo", "armband", "armchair", "armed", "armful", "armhole", "arming", "armless", "armoire", "armored", "armory", "armrest", "army", "aroma", "arose", "around", "arousal", "arrange", "array", "arrest", "arrival", "arrive", "arrogance", "arrogant", "arson", "art", "ascend", "ascension", "ascent", "ascertain", "ashamed", "ashen", "ashes", "ashy", "aside", "askew", "asleep", "asparagus", "aspect", "aspirate", "aspire", "aspirin", "astonish", "astound", "astride", "astrology", "astronaut", "astronomy", "astute", "atlantic", "atlas", "atom", "atonable", "atop", "atrium", "atrocious", "atrophy", "attach", "attain", "attempt", "attendant", "attendee", "attention", "attentive", "attest", "attic", "attire", "attitude", "attractor", "attribute", "atypical", "auction", "audacious", "audacity", "audible", "audibly", "audience", "audio", "audition", "augmented", "august", "authentic", "author", "autism", "autistic", "autograph", "automaker", "automated", "automatic", "autopilot", "available", "avalanche", "avatar", "avenge", "avenging", "avenue", "average", "aversion", "avert", "aviation", "aviator", "avid", "avoid", "await", "awaken", "award", "aware", "awhile", "awkward", "awning", "awoke", "awry", "axis", "babble", "babbling", "babied", "baboon", "backache", "backboard", "backboned", "backdrop", "backed", "backer", "backfield", "backfire", "backhand", "backing", "backlands", "backlash", "backless", "backlight", "backlit", "backlog", "backpack", "backpedal", "backrest", "backroom", "backshift", "backside", "backslid", "backspace", "backspin", "backstab", "backstage", "backtalk", "backtrack", "backup", "backward", "backwash", "backwater", "backyard", "bacon", "bacteria", "bacterium", "badass", "badge", "badland", "badly", "badness", "baffle", "baffling", "bagel", "bagful", "baggage", "bagged", "baggie", "bagginess", "bagging", "baggy", "bagpipe", "baguette", "baked", "bakery", "bakeshop", "baking", "balance", "balancing", "balcony", "balmy", "balsamic", "bamboo", "banana", "banish", "banister", "banjo", "bankable", "bankbook", "banked", "banker", "banking", "banknote", "bankroll", "banner", "bannister", "banshee", "banter", "barbecue", "barbed", "barbell", "barber", "barcode", "barge", "bargraph", "barista", "baritone", "barley", "barmaid", "barman", "barn", "barometer", "barrack", "barracuda", "barrel", "barrette", "barricade", "barrier", "barstool", "bartender", "barterer", "bash", "basically", "basics", "basil", "basin", "basis", "basket", "batboy", "batch", "bath", "baton", "bats", "battalion", "battered", "battering", "battery", "batting", "battle", "bauble", "bazooka", "blabber", "bladder", "blade", "blah", "blame", "blaming", "blanching", "blandness", "blank", "blaspheme", "blasphemy", "blast", "blatancy", "blatantly", "blazer", "blazing", "bleach", "bleak", "bleep", "blemish", "blend", "bless", "blighted", "blimp", "bling", "blinked", "blinker", "blinking", "blinks", "blip", "blissful", "blitz", "blizzard", "bloated", "bloating", "blob", "blog", "bloomers", "blooming", "blooper", "blot", "blouse", "blubber", "bluff", "bluish", "blunderer", "blunt", "blurb", "blurred", "blurry", "blurt", "blush", "blustery", "boaster", "boastful", "boasting", "boat", "bobbed", "bobbing", "bobble", "bobcat", "bobsled", "bobtail", "bodacious", "body", "bogged", "boggle", "bogus", "boil", "bok", "bolster", "bolt", "bonanza", "bonded", "bonding", "bondless", "boned", "bonehead", "boneless", "bonelike", "boney", "bonfire", "bonnet", "bonsai", "bonus", "bony", "boogeyman", "boogieman", "book", "boondocks", "booted", "booth", "bootie", "booting", "bootlace", "bootleg", "boots", "boozy", "borax", "boring", "borough", "borrower", "borrowing", "boss", "botanical", "botanist", "botany", "botch", "both", "bottle", "bottling", "bottom", "bounce", "bouncing", "bouncy", "bounding", "boundless", "bountiful", "bovine", "boxcar", "boxer", "boxing", "boxlike", "boxy", "breach", "breath", "breeches", "breeching", "breeder", "breeding", "breeze", "breezy", "brethren", "brewery", "brewing", "briar", "bribe", "brick", "bride", "bridged", "brigade", "bright", "brilliant", "brim", "bring", "brink", "brisket", "briskly", "briskness", "bristle", "brittle", "broadband", "broadcast", "broaden", "broadly", "broadness", "broadside", "broadways", "broiler", "broiling", "broken", "broker", "bronchial", "bronco", "bronze", "bronzing", "brook", "broom", "brought", "browbeat", "brownnose", "browse", "browsing", "bruising", "brunch", "brunette", "brunt", "brush", "brussels", "brute", "brutishly", "bubble", "bubbling", "bubbly", "buccaneer", "bucked", "bucket", "buckle", "buckshot", "buckskin", "bucktooth", "buckwheat", "buddhism", "buddhist", "budding", "buddy", "budget", "buffalo", "buffed", "buffer", "buffing", "buffoon", "buggy", "bulb", "bulge", "bulginess", "bulgur", "bulk", "bulldog", "bulldozer", "bullfight", "bullfrog", "bullhorn", "bullion", "bullish", "bullpen", "bullring", "bullseye", "bullwhip", "bully", "bunch", "bundle", "bungee", "bunion", "bunkbed", "bunkhouse", "bunkmate", "bunny", "bunt", "busboy", "bush", "busily", "busload", "bust", "busybody", "buzz", "cabana", "cabbage", "cabbie", "cabdriver", "cable", "caboose", "cache", "cackle", "cacti", "cactus", "caddie", "caddy", "cadet", "cadillac", "cadmium", "cage", "cahoots", "cake", "calamari", "calamity", "calcium", "calculate", "calculus", "caliber", "calibrate", "calm", "caloric", "calorie", "calzone", "camcorder", "cameo", "camera", "camisole", "camper", "campfire", "camping", "campsite", "campus", "canal", "canary", "cancel", "candied", "candle", "candy", "cane", "canine", "canister", "cannabis", "canned", "canning", "cannon", "cannot", "canola", "canon", "canopener", "canopy", "canteen", "canyon", "capable", "capably", "capacity", "cape", "capillary", "capital", "capitol", "capped", "capricorn", "capsize", "capsule", "caption", "captivate", "captive", "captivity", "capture", "caramel", "carat", "caravan", "carbon", "cardboard", "carded", "cardiac", "cardigan", "cardinal", "cardstock", "carefully", "caregiver", "careless", "caress", "caretaker", "cargo", "caring", "carless", "carload", "carmaker", "carnage", "carnation", "carnival", "carnivore", "carol", "carpenter", "carpentry", "carpool", "carport", "carried", "carrot", "carrousel", "carry", "cartel", "cartload", "carton", "cartoon", "cartridge", "cartwheel", "carve", "carving", "carwash", "cascade", "case", "cash", "casing", "casino", "casket", "cassette", "casually", "casualty", "catacomb", "catalog", "catalyst", "catalyze", "catapult", "cataract", "catatonic", "catcall", "catchable", "catcher", "catching", "catchy", "caterer", "catering", "catfight", "catfish", "cathedral", "cathouse", "catlike", "catnap", "catnip", "catsup", "cattail", "cattishly", "cattle", "catty", "catwalk", "caucasian", "caucus", "causal", "causation", "cause", "causing", "cauterize", "caution", "cautious", "cavalier", "cavalry", "caviar", "cavity", "cedar", "celery", "celestial", "celibacy", "celibate", "celtic", "cement", "census", "ceramics", "ceremony", "certainly", "certainty", "certified", "certify", "cesarean", "cesspool", "chafe", "chaffing", "chain", "chair", "chalice", "challenge", "chamber", "chamomile", "champion", "chance", "change", "channel", "chant", "chaos", "chaperone", "chaplain", "chapped", "chaps", "chapter", "character", "charbroil", "charcoal", "charger", "charging", "chariot", "charity", "charm", "charred", "charter", "charting", "chase", "chasing", "chaste", "chastise", "chastity", "chatroom", "chatter", "chatting", "chatty", "cheating", "cheddar", "cheek", "cheer", "cheese", "cheesy", "chef", "chemicals", "chemist", "chemo", "cherisher", "cherub", "chess", "chest", "chevron", "chevy", "chewable", "chewer", "chewing", "chewy", "chief", "chihuahua", "childcare", "childhood", "childish", "childless", "childlike", "chili", "chill", "chimp", "chip", "chirping", "chirpy", "chitchat", "chivalry", "chive", "chloride", "chlorine", "choice", "chokehold", "choking", "chomp", "chooser", "choosing", "choosy", "chop", "chosen", "chowder", "chowtime", "chrome", "chubby", "chuck", "chug", "chummy", "chump", "chunk", "churn", "chute", "cider", "cilantro", "cinch", "cinema", "cinnamon", "circle", "circling", "circular", "circulate", "circus", "citable", "citadel", "citation", "citizen", "citric", "citrus", "city", "civic", "civil", "clad", "claim", "clambake", "clammy", "clamor", "clamp", "clamshell", "clang", "clanking", "clapped", "clapper", "clapping", "clarify", "clarinet", "clarity", "clash", "clasp", "class", "clatter", "clause", "clavicle", "claw", "clay", "clean", "clear", "cleat", "cleaver", "cleft", "clench", "clergyman", "clerical", "clerk", "clever", "clicker", "client", "climate", "climatic", "cling", "clinic", "clinking", "clip", "clique", "cloak", "clobber", "clock", "clone", "cloning", "closable", "closure", "clothes", "clothing", "cloud", "clover", "clubbed", "clubbing", "clubhouse", "clump", "clumsily", "clumsy", "clunky", "clustered", "clutch", "clutter", "coach", "coagulant", "coastal", "coaster", "coasting", "coastland", "coastline", "coat", "coauthor", "cobalt", "cobbler", "cobweb", "cocoa", "coconut", "cod", "coeditor", "coerce", "coexist", "coffee", "cofounder", "cognition", "cognitive", "cogwheel", "coherence", "coherent", "cohesive", "coil", "coke", "cola", "cold", "coleslaw", "coliseum", "collage", "collapse", "collar", "collected", "collector", "collide", "collie", "collision", "colonial", "colonist", "colonize", "colony", "colossal", "colt", "coma", "come", "comfort", "comfy", "comic", "coming", "comma", "commence", "commend", "comment", "commerce", "commode", "commodity", "commodore", "common", "commotion", "commute", "commuting", "compacted", "compacter", "compactly", "compactor", "companion", "company", "compare", "compel", "compile", "comply", "component", "composed", "composer", "composite", "compost", "composure", "compound", "compress", "comprised", "computer", "computing", "comrade", "concave", "conceal", "conceded", "concept", "concerned", "concert", "conch", "concierge", "concise", "conclude", "concrete", "concur", "condense", "condiment", "condition", "condone", "conducive", "conductor", "conduit", "cone", "confess", "confetti", "confidant", "confident", "confider", "confiding", "configure", "confined", "confining", "confirm", "conflict", "conform", "confound", "confront", "confused", "confusing", "confusion", "congenial", "congested", "congrats", "congress", "conical", "conjoined", "conjure", "conjuror", "connected", "connector", "consensus", "consent", "console", "consoling", "consonant", "constable", "constant", "constrain", "constrict", "construct", "consult", "consumer", "consuming", "contact", "container", "contempt", "contend", "contented", "contently", "contents", "contest", "context", "contort", "contour", "contrite", "control", "contusion", "convene", "convent", "copartner", "cope", "copied", "copier", "copilot", "coping", "copious", "copper", "copy", "coral", "cork", "cornball", "cornbread", "corncob", "cornea", "corned", "corner", "cornfield", "cornflake", "cornhusk", "cornmeal", "cornstalk", "corny", "coronary", "coroner", "corporal", "corporate", "corral", "correct", "corridor", "corrode", "corroding", "corrosive", "corsage", "corset", "cortex", "cosigner", "cosmetics", "cosmic", "cosmos", "cosponsor", "cost", "cottage", "cotton", "couch", "cough", "could", "countable", "countdown", "counting", "countless", "country", "county", "courier", "covenant", "cover", "coveted", "coveting", "coyness", "cozily", "coziness", "cozy", "crabbing", "crabgrass", "crablike", "crabmeat", "cradle", "cradling", "crafter", "craftily", "craftsman", "craftwork", "crafty", "cramp", "cranberry", "crane", "cranial", "cranium", "crank", "crate", "crave", "craving", "crawfish", "crawlers", "crawling", "crayfish", "crayon", "crazed", "crazily", "craziness", "crazy", "creamed", "creamer", "creamlike", "crease", "creasing", "creatable", "create", "creation", "creative", "creature", "credible", "credibly", "credit", "creed", "creme", "creole", "crepe", "crept", "crescent", "crested", "cresting", "crestless", "crevice", "crewless", "crewman", "crewmate", "crib", "cricket", "cried", "crier", "crimp", "crimson", "cringe", "cringing", "crinkle", "crinkly", "crisped", "crisping", "crisply", "crispness", "crispy", "criteria", "critter", "croak", "crock", "crook", "croon", "crop", "cross", "crouch", "crouton", "crowbar", "crowd", "crown", "crucial", "crudely", "crudeness", "cruelly", "cruelness", "cruelty", "crumb", "crummiest", "crummy", "crumpet", "crumpled", "cruncher", "crunching", "crunchy", "crusader", "crushable", "crushed", "crusher", "crushing", "crust", "crux", "crying", "cryptic", "crystal", "cubbyhole", "cube", "cubical", "cubicle", "cucumber", "cuddle", "cuddly", "cufflink", "culinary", "culminate", "culpable", "culprit", "cultivate", "cultural", "culture", "cupbearer", "cupcake", "cupid", "cupped", "cupping", "curable", "curator", "curdle", "cure", "curfew", "curing", "curled", "curler", "curliness", "curling", "curly", "curry", "curse", "cursive", "cursor", "curtain", "curtly", "curtsy", "curvature", "curve", "curvy", "cushy", "cusp", "cussed", "custard", "custodian", "custody", "customary", "customer", "customize", "customs", "cut", "cycle", "cyclic", "cycling", "cyclist", "cylinder", "cymbal", "cytoplasm", "cytoplast", "dab", "dad", "daffodil", "dagger", "daily", "daintily", "dainty", "dairy", "daisy", "dallying", "dance", "dancing", "dandelion", "dander", "dandruff", "dandy", "danger", "dangle", "dangling", "daredevil", "dares", "daringly", "darkened", "darkening", "darkish", "darkness", "darkroom", "darling", "darn", "dart", "darwinism", "dash", "dastardly", "data", "datebook", "dating", "daughter", "daunting", "dawdler", "dawn", "daybed", "daybreak", "daycare", "daydream", "daylight", "daylong", "dayroom", "daytime", "dazzler", "dazzling", "deacon", "deafening", "deafness", "dealer", "dealing", "dealmaker", "dealt", "dean", "debatable", "debate", "debating", "debit", "debrief", "debtless", "debtor", "debug", "debunk", "decade", "decaf", "decal", "decathlon", "decay", "deceased", "deceit", "deceiver", "deceiving", "december", "decency", "decent", "deception", "deceptive", "decibel", "decidable", "decimal", "decimeter", "decipher", "deck", "declared", "decline", "decode", "decompose", "decorated", "decorator", "decoy", "decrease", "decree", "dedicate", "dedicator", "deduce", "deduct", "deed", "deem", "deepen", "deeply", "deepness", "deface", "defacing", "defame", "default", "defeat", "defection", "defective", "defendant", "defender", "defense", "defensive", "deferral", "deferred", "defiance", "defiant", "defile", "defiling", "define", "definite", "deflate", "deflation", "deflator", "deflected", "deflector", "defog", "deforest", "defraud", "defrost", "deftly", "defuse", "defy", "degraded", "degrading", "degrease", "degree", "dehydrate", "deity", "dejected", "delay", "delegate", "delegator", "delete", "deletion", "delicacy", "delicate", "delicious", "delighted", "delirious", "delirium", "deliverer", "delivery", "delouse", "delta", "deluge", "delusion", "deluxe", "demanding", "demeaning", "demeanor", "demise", "democracy", "democrat", "demote", "demotion", "demystify", "denatured", "deniable", "denial", "denim", "denote", "dense", "density", "dental", "dentist", "denture", "deny", "deodorant", "deodorize", "departed", "departure", "depict", "deplete", "depletion", "deplored", "deploy", "deport", "depose", "depraved", "depravity", "deprecate", "depress", "deprive", "depth", "deputize", "deputy", "derail", "deranged", "derby", "derived", "desecrate", "deserve", "deserving", "designate", "designed", "designer", "designing", "deskbound", "desktop", "deskwork", "desolate", "despair", "despise", "despite", "destiny", "destitute", "destruct", "detached", "detail", "detection", "detective", "detector", "detention", "detergent", "detest", "detonate", "detonator", "detoxify", "detract", "deuce", "devalue", "deviancy", "deviant", "deviate", "deviation", "deviator", "device", "devious", "devotedly", "devotee", "devotion", "devourer", "devouring", "devoutly", "dexterity", "dexterous", "diabetes", "diabetic", "diabolic", "diagnoses", "diagnosis", "diagram", "dial", "diameter", "diaper", "diaphragm", "diary", "dice", "dicing", "dictate", "dictation", "dictator", "difficult", "diffused", "diffuser", "diffusion", "diffusive", "dig", "dilation", "diligence", "diligent", "dill", "dilute", "dime", "diminish", "dimly", "dimmed", "dimmer", "dimness", "dimple", "diner", "dingbat", "dinghy", "dinginess", "dingo", "dingy", "dining", "dinner", "diocese", "dioxide", "diploma", "dipped", "dipper", "dipping", "directed", "direction", "directive", "directly", "directory", "direness", "dirtiness", "disabled", "disagree", "disallow", "disarm", "disarray", "disaster", "disband", "disbelief", "disburse", "discard", "discern", "discharge", "disclose", "discolor", "discount", "discourse", "discover", "discuss", "disdain", "disengage", "disfigure", "disgrace", "dish", "disinfect", "disjoin", "disk", "dislike", "disliking", "dislocate", "dislodge", "disloyal", "dismantle", "dismay", "dismiss", "dismount", "disobey", "disorder", "disown", "disparate", "disparity", "dispatch", "dispense", "dispersal", "dispersed", "disperser", "displace", "display", "displease", "disposal", "dispose", "disprove", "dispute", "disregard", "disrupt", "dissuade", "distance", "distant", "distaste", "distill", "distinct", "distort", "distract", "distress", "district", "distrust", "ditch", "ditto", "ditzy", "dividable", "divided", "dividend", "dividers", "dividing", "divinely", "diving", "divinity", "divisible", "divisibly", "division", "divisive", "divorcee", "dizziness", "dizzy", "doable", "docile", "dock", "doctrine", "document", "dodge", "dodgy", "doily", "doing", "dole", "dollar", "dollhouse", "dollop", "dolly", "dolphin", "domain", "domelike", "domestic", "dominion", "dominoes", "donated", "donation", "donator", "donor", "donut", "doodle", "doorbell", "doorframe", "doorknob", "doorman", "doormat", "doornail", "doorpost", "doorstep", "doorstop", "doorway", "doozy", "dork", "dormitory", "dorsal", "dosage", "dose", "dotted", "doubling", "douche", "dove", "down", "dowry", "doze", "drab", "dragging", "dragonfly", "dragonish", "dragster", "drainable", "drainage", "drained", "drainer", "drainpipe", "dramatic", "dramatize", "drank", "drapery", "drastic", "draw", "dreaded", "dreadful", "dreadlock", "dreamboat", "dreamily", "dreamland", "dreamless", "dreamlike", "dreamt", "dreamy", "drearily", "dreary", "drench", "dress", "drew", "dribble", "dried", "drier", "drift", "driller", "drilling", "drinkable", "drinking", "dripping", "drippy", "drivable", "driven", "driver", "driveway", "driving", "drizzle", "drizzly", "drone", "drool", "droop", "drop-down", "dropbox", "dropkick", "droplet", "dropout", "dropper", "drove", "drown", "drowsily", "drudge", "drum", "dry", "dubbed", "dubiously", "duchess", "duckbill", "ducking", "duckling", "ducktail", "ducky", "duct", "dude", "duffel", "dugout", "duh", "duke", "duller", "dullness", "duly", "dumping", "dumpling", "dumpster", "duo", "dupe", "duplex", "duplicate", "duplicity", "durable", "durably", "duration", "duress", "during", "dusk", "dust", "dutiful", "duty", "duvet", "dwarf", "dweeb", "dwelled", "dweller", "dwelling", "dwindle", "dwindling", "dynamic", "dynamite", "dynasty", "dyslexia", "dyslexic", "each", "eagle", "earache", "eardrum", "earflap", "earful", "earlobe", "early", "earmark", "earmuff", "earphone", "earpiece", "earplugs", "earring", "earshot", "earthen", "earthlike", "earthling", "earthly", "earthworm", "earthy", "earwig", "easeful", "easel", "easiest", "easily", "easiness", "easing", "eastbound", "eastcoast", "easter", "eastward", "eatable", "eaten", "eatery", "eating", "eats", "ebay", "ebony", "ebook", "ecard", "eccentric", "echo", "eclair", "eclipse", "ecologist", "ecology", "economic", "economist", "economy", "ecosphere", "ecosystem", "edge", "edginess", "edging", "edgy", "edition", "editor", "educated", "education", "educator", "eel", "effective", "effects", "efficient", "effort", "eggbeater", "egging", "eggnog", "eggplant", "eggshell", "egomaniac", "egotism", "egotistic", "either", "eject", "elaborate", "elastic", "elated", "elbow", "eldercare", "elderly", "eldest", "electable", "election", "elective", "elephant", "elevate", "elevating", "elevation", "elevator", "eleven", "elf", "eligible", "eligibly", "eliminate", "elite", "elitism", "elixir", "elk", "ellipse", "elliptic", "elm", "elongated", "elope", "eloquence", "eloquent", "elsewhere", "elude", "elusive", "elves", "email", "embargo", "embark", "embassy", "embattled", "embellish", "ember", "embezzle", "emblaze", "emblem", "embody", "embolism", "emboss", "embroider", "emcee", "emerald", "emergency", "emission", "emit", "emote", "emoticon", "emotion", "empathic", "empathy", "emperor", "emphases", "emphasis", "emphasize", "emphatic", "empirical", "employed", "employee", "employer", "emporium", "empower", "emptier", "emptiness", "empty", "emu", "enable", "enactment", "enamel", "enchanted", "enchilada", "encircle", "enclose", "enclosure", "encode", "encore", "encounter", "encourage", "encroach", "encrust", "encrypt", "endanger", "endeared", "endearing", "ended", "ending", "endless", "endnote", "endocrine", "endorphin", "endorse", "endowment", "endpoint", "endurable", "endurance", "enduring", "energetic", "energize", "energy", "enforced", "enforcer", "engaged", "engaging", "engine", "engorge", "engraved", "engraver", "engraving", "engross", "engulf", "enhance", "enigmatic", "enjoyable", "enjoyably", "enjoyer", "enjoying", "enjoyment", "enlarged", "enlarging", "enlighten", "enlisted", "enquirer", "enrage", "enrich", "enroll", "enslave", "ensnare", "ensure", "entail", "entangled", "entering", "entertain", "enticing", "entire", "entitle", "entity", "entomb", "entourage", "entrap", "entree", "entrench", "entrust", "entryway", "entwine", "enunciate", "envelope", "enviable", "enviably", "envious", "envision", "envoy", "envy", "enzyme", "epic", "epidemic", "epidermal", "epidermis", "epidural", "epilepsy", "epileptic", "epilogue", "epiphany", "episode", "equal", "equate", "equation", "equator", "equinox", "equipment", "equity", "equivocal", "eradicate", "erasable", "erased", "eraser", "erasure", "ergonomic", "errand", "errant", "erratic", "error", "erupt", "escalate", "escalator", "escapable", "escapade", "escapist", "escargot", "eskimo", "esophagus", "espionage", "espresso", "esquire", "essay", "essence", "essential", "establish", "estate", "esteemed", "estimate", "estimator", "estranged", "estrogen", "etching", "eternal", "eternity", "ethanol", "ether", "ethically", "ethics", "euphemism", "evacuate", "evacuee", "evade", "evaluate", "evaluator", "evaporate", "evasion", "evasive", "even", "everglade", "evergreen", "everybody", "everyday", "everyone", "evict", "evidence", "evident", "evil", "evoke", "evolution", "evolve", "exact", "exalted", "example", "excavate", "excavator", "exceeding", "exception", "excess", "exchange", "excitable", "exciting", "exclaim", "exclude", "excluding", "exclusion", "exclusive", "excretion", "excretory", "excursion", "excusable", "excusably", "excuse", "exemplary", "exemplify", "exemption", "exerciser", "exert", "exes", "exfoliate", "exhale", "exhaust", "exhume", "exile", "existing", "exit", "exodus", "exonerate", "exorcism", "exorcist", "expand", "expanse", "expansion", "expansive", "expectant", "expedited", "expediter", "expel", "expend", "expenses", "expensive", "expert", "expire", "expiring", "explain", "expletive", "explicit", "explode", "exploit", "explore", "exploring", "exponent", "exporter", "exposable", "expose", "exposure", "express", "expulsion", "exquisite", "extended", "extending", "extent", "extenuate", "exterior", "external", "extinct", "extortion", "extradite", "extras", "extrovert", "extrude", "extruding", "exuberant", "fable", "fabric", "fabulous", "facebook", "facecloth", "facedown", "faceless", "facelift", "faceplate", "faceted", "facial", "facility", "facing", "facsimile", "faction", "factoid", "factor", "factsheet", "factual", "faculty", "fade", "fading", "failing", "falcon", "fall", "false", "falsify", "fame", "familiar", "family", "famine", "famished", "fanatic", "fancied", "fanciness", "fancy", "fanfare", "fang", "fanning", "fantasize", "fantastic", "fantasy", "fascism", "fastball", "faster", "fasting", "fastness", "faucet", "favorable", "favorably", "favored", "favoring", "favorite", "fax", "feast", "federal", "fedora", "feeble", "feed", "feel", "feisty", "feline", "felt-tip", "feminine", "feminism", "feminist", "feminize", "femur", "fence", "fencing", "fender", "ferment", "fernlike", "ferocious", "ferocity", "ferret", "ferris", "ferry", "fervor", "fester", "festival", "festive", "festivity", "fetal", "fetch", "fever", "fiber", "fiction", "fiddle", "fiddling", "fidelity", "fidgeting", "fidgety", "fifteen", "fifth", "fiftieth", "fifty", "figment", "figure", "figurine", "filing", "filled", "filler", "filling", "film", "filter", "filth", "filtrate", "finale", "finalist", "finalize", "finally", "finance", "financial", "finch", "fineness", "finer", "finicky", "finished", "finisher", "finishing", "finite", "finless", "finlike", "fiscally", "fit", "five", "flaccid", "flagman", "flagpole", "flagship", "flagstick", "flagstone", "flail", "flakily", "flaky", "flame", "flammable", "flanked", "flanking", "flannels", "flap", "flaring", "flashback", "flashbulb", "flashcard", "flashily", "flashing", "flashy", "flask", "flatbed", "flatfoot", "flatly", "flatness", "flatten", "flattered", "flatterer", "flattery", "flattop", "flatware", "flatworm", "flavored", "flavorful", "flavoring", "flaxseed", "fled", "fleshed", "fleshy", "flick", "flier", "flight", "flinch", "fling", "flint", "flip", "flirt", "float", "flock", "flogging", "flop", "floral", "florist", "floss", "flounder", "flyable", "flyaway", "flyer", "flying", "flyover", "flypaper", "foam", "foe", "fog", "foil", "folic", "folk", "follicle", "follow", "fondling", "fondly", "fondness", "fondue", "font", "food", "fool", "footage", "football", "footbath", "footboard", "footer", "footgear", "foothill", "foothold", "footing", "footless", "footman", "footnote", "footpad", "footpath", "footprint", "footrest", "footsie", "footsore", "footwear", "footwork", "fossil", "foster", "founder", "founding", "fountain", "fox", "foyer", "fraction", "fracture", "fragile", "fragility", "fragment", "fragrance", "fragrant", "frail", "frame", "framing", "frantic", "fraternal", "frayed", "fraying", "frays", "freckled", "freckles", "freebase", "freebee", "freebie", "freedom", "freefall", "freehand", "freeing", "freeload", "freely", "freemason", "freeness", "freestyle", "freeware", "freeway", "freewill", "freezable", "freezing", "freight", "french", "frenzied", "frenzy", "frequency", "frequent", "fresh", "fretful", "fretted", "friction", "friday", "fridge", "fried", "friend", "frighten", "frightful", "frigidity", "frigidly", "frill", "fringe", "frisbee", "frisk", "fritter", "frivolous", "frolic", "from", "front", "frostbite", "frosted", "frostily", "frosting", "frostlike", "frosty", "froth", "frown", "frozen", "fructose", "frugality", "frugally", "fruit", "frustrate", "frying", "gab", "gaffe", "gag", "gainfully", "gaining", "gains", "gala", "gallantly", "galleria", "gallery", "galley", "gallon", "gallows", "gallstone", "galore", "galvanize", "gambling", "game", "gaming", "gamma", "gander", "gangly", "gangrene", "gangway", "gap", "garage", "garbage", "garden", "gargle", "garland", "garlic", "garment", "garnet", "garnish", "garter", "gas", "gatherer", "gathering", "gating", "gauging", "gauntlet", "gauze", "gave", "gawk", "gazing", "gear", "gecko", "geek", "geiger", "gem", "gender", "generic", "generous", "genetics", "genre", "gentile", "gentleman", "gently", "gents", "geography", "geologic", "geologist", "geology", "geometric", "geometry", "geranium", "gerbil", "geriatric", "germicide", "germinate", "germless", "germproof", "gestate", "gestation", "gesture", "getaway", "getting", "getup", "giant", "gibberish", "giblet", "giddily", "giddiness", "giddy", "gift", "gigabyte", "gigahertz", "gigantic", "giggle", "giggling", "giggly", "gigolo", "gilled", "gills", "gimmick", "girdle", "giveaway", "given", "giver", "giving", "gizmo", "gizzard", "glacial", "glacier", "glade", "gladiator", "gladly", "glamorous", "glamour", "glance", "glancing", "glandular", "glare", "glaring", "glass", "glaucoma", "glazing", "gleaming", "gleeful", "glider", "gliding", "glimmer", "glimpse", "glisten", "glitch", "glitter", "glitzy", "gloater", "gloating", "gloomily", "gloomy", "glorified", "glorifier", "glorify", "glorious", "glory", "gloss", "glove", "glowing", "glowworm", "glucose", "glue", "gluten", "glutinous", "glutton", "gnarly", "gnat", "goal", "goatskin", "goes", "goggles", "going", "goldfish", "goldmine", "goldsmith", "golf", "goliath", "gonad", "gondola", "gone", "gong", "good", "gooey", "goofball", "goofiness", "goofy", "google", "goon", "gopher", "gore", "gorged", "gorgeous", "gory", "gosling", "gossip", "gothic", "gotten", "gout", "gown", "grab", "graceful", "graceless", "gracious", "gradation", "graded", "grader", "gradient", "grading", "gradually", "graduate", "graffiti", "grafted", "grafting", "grain", "granddad", "grandkid", "grandly", "grandma", "grandpa", "grandson", "granite", "granny", "granola", "grant", "granular", "grape", "graph", "grapple", "grappling", "grasp", "grass", "gratified", "gratify", "grating", "gratitude", "gratuity", "gravel", "graveness", "graves", "graveyard", "gravitate", "gravity", "gravy", "gray", "grazing", "greasily", "greedily", "greedless", "greedy", "green", "greeter", "greeting", "grew", "greyhound", "grid", "grief", "grievance", "grieving", "grievous", "grill", "grimace", "grimacing", "grime", "griminess", "grimy", "grinch", "grinning", "grip", "gristle", "grit", "groggily", "groggy", "groin", "groom", "groove", "grooving", "groovy", "grope", "ground", "grouped", "grout", "grove", "grower", "growing", "growl", "grub", "grudge", "grudging", "grueling", "gruffly", "grumble", "grumbling", "grumbly", "grumpily", "grunge", "grunt", "guacamole", "guidable", "guidance", "guide", "guiding", "guileless", "guise", "gulf", "gullible", "gully", "gulp", "gumball", "gumdrop", "gumminess", "gumming", "gummy", "gurgle", "gurgling", "guru", "gush", "gusto", "gusty", "gutless", "guts", "gutter", "guy", "guzzler", "gyration", "habitable", "habitant", "habitat", "habitual", "hacked", "hacker", "hacking", "hacksaw", "had", "haggler", "haiku", "half", "halogen", "halt", "halved", "halves", "hamburger", "hamlet", "hammock", "hamper", "hamster", "hamstring", "handbag", "handball", "handbook", "handbrake", "handcart", "handclap", "handclasp", "handcraft", "handcuff", "handed", "handful", "handgrip", "handgun", "handheld", "handiness", "handiwork", "handlebar", "handled", "handler", "handling", "handmade", "handoff", "handpick", "handprint", "handrail", "handsaw", "handset", "handsfree", "handshake", "handstand", "handwash", "handwork", "handwoven", "handwrite", "handyman", "hangnail", "hangout", "hangover", "hangup", "hankering", "hankie", "hanky", "haphazard", "happening", "happier", "happiest", "happily", "happiness", "happy", "harbor", "hardcopy", "hardcore", "hardcover", "harddisk", "hardened", "hardener", "hardening", "hardhat", "hardhead", "hardiness", "hardly", "hardness", "hardship", "hardware", "hardwired", "hardwood", "hardy", "harmful", "harmless", "harmonica", "harmonics", "harmonize", "harmony", "harness", "harpist", "harsh", "harvest", "hash", "hassle", "haste", "hastily", "hastiness", "hasty", "hatbox", "hatchback", "hatchery", "hatchet", "hatching", "hatchling", "hate", "hatless", "hatred", "haunt", "haven", "hazard", "hazelnut", "hazily", "haziness", "hazing", "hazy", "headache", "headband", "headboard", "headcount", "headdress", "headed", "header", "headfirst", "headgear", "heading", "headlamp", "headless", "headlock", "headphone", "headpiece", "headrest", "headroom", "headscarf", "headset", "headsman", "headstand", "headstone", "headway", "headwear", "heap", "heat", "heave", "heavily", "heaviness", "heaving", "hedge", "hedging", "heftiness", "hefty", "helium", "helmet", "helper", "helpful", "helping", "helpless", "helpline", "hemlock", "hemstitch", "hence", "henchman", "henna", "herald", "herbal", "herbicide", "herbs", "heritage", "hermit", "heroics", "heroism", "herring", "herself", "hertz", "hesitancy", "hesitant", "hesitate", "hexagon", "hexagram", "hubcap", "huddle", "huddling", "huff", "hug", "hula", "hulk", "hull", "human", "humble", "humbling", "humbly", "humid", "humiliate", "humility", "humming", "hummus", "humongous", "humorist", "humorless", "humorous", "humpback", "humped", "humvee", "hunchback", "hundredth", "hunger", "hungrily", "hungry", "hunk", "hunter", "hunting", "huntress", "huntsman", "hurdle", "hurled", "hurler", "hurling", "hurray", "hurricane", "hurried", "hurry", "hurt", "husband", "hush", "husked", "huskiness", "hut", "hybrid", "hydrant", "hydrated", "hydration", "hydrogen", "hydroxide", "hyperlink", "hypertext", "hyphen", "hypnoses", "hypnosis", "hypnotic", "hypnotism", "hypnotist", "hypnotize", "hypocrisy", "hypocrite", "ibuprofen", "ice", "iciness", "icing", "icky", "icon", "icy", "idealism", "idealist", "idealize", "ideally", "idealness", "identical", "identify", "identity", "ideology", "idiocy", "idiom", "idly", "igloo", "ignition", "ignore", "iguana", "illicitly", "illusion", "illusive", "image", "imaginary", "imagines", "imaging", "imbecile", "imitate", "imitation", "immature", "immerse", "immersion", "imminent", "immobile", "immodest", "immorally", "immortal", "immovable", "immovably", "immunity", "immunize", "impaired", "impale", "impart", "impatient", "impeach", "impeding", "impending", "imperfect", "imperial", "impish", "implant", "implement", "implicate", "implicit", "implode", "implosion", "implosive", "imply", "impolite", "important", "importer", "impose", "imposing", "impotence", "impotency", "impotent", "impound", "imprecise", "imprint", "imprison", "impromptu", "improper", "improve", "improving", "improvise", "imprudent", "impulse", "impulsive", "impure", "impurity", "iodine", "iodize", "ion", "ipad", "iphone", "ipod", "irate", "irk", "iron", "irregular", "irrigate", "irritable", "irritably", "irritant", "irritate", "islamic", "islamist", "isolated", "isolating", "isolation", "isotope", "issue", "issuing", "italicize", "italics", "item", "itinerary", "itunes", "ivory", "ivy", "jab", "jackal", "jacket", "jackknife", "jackpot", "jailbird", "jailbreak", "jailer", "jailhouse", "jalapeno", "jam", "janitor", "january", "jargon", "jarring", "jasmine", "jaundice", "jaunt", "java", "jawed", "jawless", "jawline", "jaws", "jaybird", "jaywalker", "jazz", "jeep", "jeeringly", "jellied", "jelly", "jersey", "jester", "jet", "jiffy", "jigsaw", "jimmy", "jingle", "jingling", "jinx", "jitters", "jittery", "job", "jockey", "jockstrap", "jogger", "jogging", "john", "joining", "jokester", "jokingly", "jolliness", "jolly", "jolt", "jot", "jovial", "joyfully", "joylessly", "joyous", "joyride", "joystick", "jubilance", "jubilant", "judge", "judgingly", "judicial", "judiciary", "judo", "juggle", "juggling", "jugular", "juice", "juiciness", "juicy", "jujitsu", "jukebox", "july", "jumble", "jumbo", "jump", "junction", "juncture", "june", "junior", "juniper", "junkie", "junkman", "junkyard", "jurist", "juror", "jury", "justice", "justifier", "justify", "justly", "justness", "juvenile", "kabob", "kangaroo", "karaoke", "karate", "karma", "kebab", "keenly", "keenness", "keep", "keg", "kelp", "kennel", "kept", "kerchief", "kerosene", "kettle", "kick", "kiln", "kilobyte", "kilogram", "kilometer", "kilowatt", "kilt", "kimono", "kindle", "kindling", "kindly", "kindness", "kindred", "kinetic", "kinfolk", "king", "kinship", "kinsman", "kinswoman", "kissable", "kisser", "kissing", "kitchen", "kite", "kitten", "kitty", "kiwi", "kleenex", "knapsack", "knee", "knelt", "knickers", "knoll", "koala", "kooky", "kosher", "krypton", "kudos", "kung", "labored", "laborer", "laboring", "laborious", "labrador", "ladder", "ladies", "ladle", "ladybug", "ladylike", "lagged", "lagging", "lagoon", "lair", "lake", "lance", "landed", "landfall", "landfill", "landing", "landlady", "landless", "landline", "landlord", "landmark", "landmass", "landmine", "landowner", "landscape", "landside", "landslide", "language", "lankiness", "lanky", "lantern", "lapdog", "lapel", "lapped", "lapping", "laptop", "lard", "large", "lark", "lash", "lasso", "last", "latch", "late", "lather", "latitude", "latrine", "latter", "latticed", "launch", "launder", "laundry", "laurel", "lavender", "lavish", "laxative", "lazily", "laziness", "lazy", "lecturer", "left", "legacy", "legal", "legend", "legged", "leggings", "legible", "legibly", "legislate", "lego", "legroom", "legume", "legwarmer", "legwork", "lemon", "lend", "length", "lens", "lent", "leotard", "lesser", "letdown", "lethargic", "lethargy", "letter", "lettuce", "level", "leverage", "levers", "levitate", "levitator", "liability", "liable", "liberty", "librarian", "library", "licking", "licorice", "lid", "life", "lifter", "lifting", "liftoff", "ligament", "likely", "likeness", "likewise", "liking", "lilac", "lilly", "lily", "limb", "limeade", "limelight", "limes", "limit", "limping", "limpness", "line", "lingo", "linguini", "linguist", "lining", "linked", "linoleum", "linseed", "lint", "lion", "lip", "liquefy", "liqueur", "liquid", "lisp", "list", "litigate", "litigator", "litmus", "litter", "little", "livable", "lived", "lively", "liver", "livestock", "lividly", "living", "lizard", "lubricant", "lubricate", "lucid", "luckily", "luckiness", "luckless", "lucrative", "ludicrous", "lugged", "lukewarm", "lullaby", "lumber", "luminance", "luminous", "lumpiness", "lumping", "lumpish", "lunacy", "lunar", "lunchbox", "luncheon", "lunchroom", "lunchtime", "lung", "lurch", "lure", "luridness", "lurk", "lushly", "lushness", "luster", "lustfully", "lustily", "lustiness", "lustrous", "lusty", "luxurious", "luxury", "lying", "lyrically", "lyricism", "lyricist", "lyrics", "macarena", "macaroni", "macaw", "mace", "machine", "machinist", "magazine", "magenta", "maggot", "magical", "magician", "magma", "magnesium", "magnetic", "magnetism", "magnetize", "magnifier", "magnify", "magnitude", "magnolia", "mahogany", "maimed", "majestic", "majesty", "majorette", "majority", "makeover", "maker", "makeshift", "making", "malformed", "malt", "mama", "mammal", "mammary", "mammogram", "manager", "managing", "manatee", "mandarin", "mandate", "mandatory", "mandolin", "manger", "mangle", "mango", "mangy", "manhandle", "manhole", "manhood", "manhunt", "manicotti", "manicure", "manifesto", "manila", "mankind", "manlike", "manliness", "manly", "manmade", "manned", "mannish", "manor", "manpower", "mantis", "mantra", "manual", "many", "map", "marathon", "marauding", "marbled", "marbles", "marbling", "march", "mardi", "margarine", "margarita", "margin", "marigold", "marina", "marine", "marital", "maritime", "marlin", "marmalade", "maroon", "married", "marrow", "marry", "marshland", "marshy", "marsupial", "marvelous", "marxism", "mascot", "masculine", "mashed", "mashing", "massager", "masses", "massive", "mastiff", "matador", "matchbook", "matchbox", "matcher", "matching", "matchless", "material", "maternal", "maternity", "math", "mating", "matriarch", "matrimony", "matrix", "matron", "matted", "matter", "maturely", "maturing", "maturity", "mauve", "maverick", "maximize", "maximum", "maybe", "mayday", "mayflower", "moaner", "moaning", "mobile", "mobility", "mobilize", "mobster", "mocha", "mocker", "mockup", "modified", "modify", "modular", "modulator", "module", "moisten", "moistness", "moisture", "molar", "molasses", "mold", "molecular", "molecule", "molehill", "mollusk", "mom", "monastery", "monday", "monetary", "monetize", "moneybags", "moneyless", "moneywise", "mongoose", "mongrel", "monitor", "monkhood", "monogamy", "monogram", "monologue", "monopoly", "monorail", "monotone", "monotype", "monoxide", "monsieur", "monsoon", "monstrous", "monthly", "monument", "moocher", "moodiness", "moody", "mooing", "moonbeam", "mooned", "moonlight", "moonlike", "moonlit", "moonrise", "moonscape", "moonshine", "moonstone", "moonwalk", "mop", "morale", "morality", "morally", "morbidity", "morbidly", "morphine", "morphing", "morse", "mortality", "mortally", "mortician", "mortified", "mortify", "mortuary", "mosaic", "mossy", "most", "mothball", "mothproof", "motion", "motivate", "motivator", "motive", "motocross", "motor", "motto", "mountable", "mountain", "mounted", "mounting", "mourner", "mournful", "mouse", "mousiness", "moustache", "mousy", "mouth", "movable", "move", "movie", "moving", "mower", "mowing", "much", "muck", "mud", "mug", "mulberry", "mulch", "mule", "mulled", "mullets", "multiple", "multiply", "multitask", "multitude", "mumble", "mumbling", "mumbo", "mummified", "mummify", "mummy", "mumps", "munchkin", "mundane", "municipal", "muppet", "mural", "murkiness", "murky", "murmuring", "muscular", "museum", "mushily", "mushiness", "mushroom", "mushy", "music", "musket", "muskiness", "musky", "mustang", "mustard", "muster", "mustiness", "musty", "mutable", "mutate", "mutation", "mute", "mutilated", "mutilator", "mutiny", "mutt", "mutual", "muzzle", "myself", "myspace", "mystified", "mystify", "myth", "nacho", "nag", "nail", "name", "naming", "nanny", "nanometer", "nape", "napkin", "napped", "napping", "nappy", "narrow", "nastily", "nastiness", "national", "native", "nativity", "natural", "nature", "naturist", "nautical", "navigate", "navigator", "navy", "nearby", "nearest", "nearly", "nearness", "neatly", "neatness", "nebula", "nebulizer", "nectar", "negate", "negation", "negative", "neglector", "negligee", "negligent", "negotiate", "nemeses", "nemesis", "neon", "nephew", "nerd", "nervous", "nervy", "nest", "net", "neurology", "neuron", "neurosis", "neurotic", "neuter", "neutron", "never", "next", "nibble", "nickname", "nicotine", "niece", "nifty", "nimble", "nimbly", "nineteen", "ninetieth", "ninja", "nintendo", "ninth", "nuclear", "nuclei", "nucleus", "nugget", "nullify", "number", "numbing", "numbly", "numbness", "numeral", "numerate", "numerator", "numeric", "numerous", "nuptials", "nursery", "nursing", "nurture", "nutcase", "nutlike", "nutmeg", "nutrient", "nutshell", "nuttiness", "nutty", "nuzzle", "nylon", "oaf", "oak", "oasis", "oat", "obedience", "obedient", "obituary", "object", "obligate", "obliged", "oblivion", "oblivious", "oblong", "obnoxious", "oboe", "obscure", "obscurity", "observant", "observer", "observing", "obsessed", "obsession", "obsessive", "obsolete", "obstacle", "obstinate", "obstruct", "obtain", "obtrusive", "obtuse", "obvious", "occultist", "occupancy", "occupant", "occupier", "occupy", "ocean", "ocelot", "octagon", "octane", "october", "octopus", "ogle", "oil", "oink", "ointment", "okay", "old", "olive", "olympics", "omega", "omen", "ominous", "omission", "omit", "omnivore", "onboard", "oncoming", "ongoing", "onion", "online", "onlooker", "only", "onscreen", "onset", "onshore", "onslaught", "onstage", "onto", "onward", "onyx", "oops", "ooze", "oozy", "opacity", "opal", "open", "operable", "operate", "operating", "operation", "operative", "operator", "opium", "opossum", "opponent", "oppose", "opposing", "opposite", "oppressed", "oppressor", "opt", "opulently", "osmosis", "other", "otter", "ouch", "ought", "ounce", "outage", "outback", "outbid", "outboard", "outbound", "outbreak", "outburst", "outcast", "outclass", "outcome", "outdated", "outdoors", "outer", "outfield", "outfit", "outflank", "outgoing", "outgrow", "outhouse", "outing", "outlast", "outlet", "outline", "outlook", "outlying", "outmatch", "outmost", "outnumber", "outplayed", "outpost", "outpour", "output", "outrage", "outrank", "outreach", "outright", "outscore", "outsell", "outshine", "outshoot", "outsider", "outskirts", "outsmart", "outsource", "outspoken", "outtakes", "outthink", "outward", "outweigh", "outwit", "oval", "ovary", "oven", "overact", "overall", "overarch", "overbid", "overbill", "overbite", "overblown", "overboard", "overbook", "overbuilt", "overcast", "overcoat", "overcome", "overcook", "overcrowd", "overdraft", "overdrawn", "overdress", "overdrive", "overdue", "overeager", "overeater", "overexert", "overfed", "overfeed", "overfill", "overflow", "overfull", "overgrown", "overhand", "overhang", "overhaul", "overhead", "overhear", "overheat", "overhung", "overjoyed", "overkill", "overlabor", "overlaid", "overlap", "overlay", "overload", "overlook", "overlord", "overlying", "overnight", "overpass", "overpay", "overplant", "overplay", "overpower", "overprice", "overrate", "overreach", "overreact", "override", "overripe", "overrule", "overrun", "overshoot", "overshot", "oversight", "oversized", "oversleep", "oversold", "overspend", "overstate", "overstay", "overstep", "overstock", "overstuff", "oversweet", "overtake", "overthrow", "overtime", "overtly", "overtone", "overture", "overturn", "overuse", "overvalue", "overview", "overwrite", "owl", "oxford", "oxidant", "oxidation", "oxidize", "oxidizing", "oxygen", "oxymoron", "oyster", "ozone", "paced", "pacemaker", "pacific", "pacifier", "pacifism", "pacifist", "pacify", "padded", "padding", "paddle", "paddling", "padlock", "pagan", "pager", "paging", "pajamas", "palace", "palatable", "palm", "palpable", "palpitate", "paltry", "pampered", "pamperer", "pampers", "pamphlet", "panama", "pancake", "pancreas", "panda", "pandemic", "pang", "panhandle", "panic", "panning", "panorama", "panoramic", "panther", "pantomime", "pantry", "pants", "pantyhose", "paparazzi", "papaya", "paper", "paprika", "papyrus", "parabola", "parachute", "parade", "paradox", "paragraph", "parakeet", "paralegal", "paralyses", "paralysis", "paralyze", "paramedic", "parameter", "paramount", "parasail", "parasite", "parasitic", "parcel", "parched", "parchment", "pardon", "parish", "parka", "parking", "parkway", "parlor", "parmesan", "parole", "parrot", "parsley", "parsnip", "partake", "parted", "parting", "partition", "partly", "partner", "partridge", "party", "passable", "passably", "passage", "passcode", "passenger", "passerby", "passing", "passion", "passive", "passivism", "passover", "passport", "password", "pasta", "pasted", "pastel", "pastime", "pastor", "pastrami", "pasture", "pasty", "patchwork", "patchy", "paternal", "paternity", "path", "patience", "patient", "patio", "patriarch", "patriot", "patrol", "patronage", "patronize", "pauper", "pavement", "paver", "pavestone", "pavilion", "paving", "pawing", "payable", "payback", "paycheck", "payday", "payee", "payer", "paying", "payment", "payphone", "payroll", "pebble", "pebbly", "pecan", "pectin", "peculiar", "peddling", "pediatric", "pedicure", "pedigree", "pedometer", "pegboard", "pelican", "pellet", "pelt", "pelvis", "penalize", "penalty", "pencil", "pendant", "pending", "penholder", "penknife", "pennant", "penniless", "penny", "penpal", "pension", "pentagon", "pentagram", "pep", "perceive", "percent", "perch", "percolate", "perennial", "perfected", "perfectly", "perfume", "periscope", "perish", "perjurer", "perjury", "perkiness", "perky", "perm", "peroxide", "perpetual", "perplexed", "persecute", "persevere", "persuaded", "persuader", "pesky", "peso", "pessimism", "pessimist", "pester", "pesticide", "petal", "petite", "petition", "petri", "petroleum", "petted", "petticoat", "pettiness", "petty", "petunia", "phantom", "phobia", "phoenix", "phonebook", "phoney", "phonics", "phoniness", "phony", "phosphate", "photo", "phrase", "phrasing", "placard", "placate", "placidly", "plank", "planner", "plant", "plasma", "plaster", "plastic", "plated", "platform", "plating", "platinum", "platonic", "platter", "platypus", "plausible", "plausibly", "playable", "playback", "player", "playful", "playgroup", "playhouse", "playing", "playlist", "playmaker", "playmate", "playoff", "playpen", "playroom", "playset", "plaything", "playtime", "plaza", "pleading", "pleat", "pledge", "plentiful", "plenty", "plethora", "plexiglas", "pliable", "plod", "plop", "plot", "plow", "ploy", "pluck", "plug", "plunder", "plunging", "plural", "plus", "plutonium", "plywood", "poach", "pod", "poem", "poet", "pogo", "pointed", "pointer", "pointing", "pointless", "pointy", "poise", "poison", "poker", "poking", "polar", "police", "policy", "polio", "polish", "politely", "polka", "polo", "polyester", "polygon", "polygraph", "polymer", "poncho", "pond", "pony", "popcorn", "pope", "poplar", "popper", "poppy", "popsicle", "populace", "popular", "populate", "porcupine", "pork", "porous", "porridge", "portable", "portal", "portfolio", "porthole", "portion", "portly", "portside", "poser", "posh", "posing", "possible", "possibly", "possum", "postage", "postal", "postbox", "postcard", "posted", "poster", "posting", "postnasal", "posture", "postwar", "pouch", "pounce", "pouncing", "pound", "pouring", "pout", "powdered", "powdering", "powdery", "power", "powwow", "pox", "praising", "prance", "prancing", "pranker", "prankish", "prankster", "prayer", "praying", "preacher", "preaching", "preachy", "preamble", "precinct", "precise", "precision", "precook", "precut", "predator", "predefine", "predict", "preface", "prefix", "preflight", "preformed", "pregame", "pregnancy", "pregnant", "preheated", "prelaunch", "prelaw", "prelude", "premiere", "premises", "premium", "prenatal", "preoccupy", "preorder", "prepaid", "prepay", "preplan", "preppy", "preschool", "prescribe", "preseason", "preset", "preshow", "president", "presoak", "press", "presume", "presuming", "preteen", "pretended", "pretender", "pretense", "pretext", "pretty", "pretzel", "prevail", "prevalent", "prevent", "preview", "previous", "prewar", "prewashed", "prideful", "pried", "primal", "primarily", "primary", "primate", "primer", "primp", "princess", "print", "prior", "prism", "prison", "prissy", "pristine", "privacy", "private", "privatize", "prize", "proactive", "probable", "probably", "probation", "probe", "probing", "probiotic", "problem", "procedure", "process", "proclaim", "procreate", "procurer", "prodigal", "prodigy", "produce", "product", "profane", "profanity", "professed", "professor", "profile", "profound", "profusely", "progeny", "prognosis", "program", "progress", "projector", "prologue", "prolonged", "promenade", "prominent", "promoter", "promotion", "prompter", "promptly", "prone", "prong", "pronounce", "pronto", "proofing", "proofread", "proofs", "propeller", "properly", "property", "proponent", "proposal", "propose", "props", "prorate", "protector", "protegee", "proton", "prototype", "protozoan", "protract", "protrude", "proud", "provable", "proved", "proven", "provided", "provider", "providing", "province", "proving", "provoke", "provoking", "provolone", "prowess", "prowler", "prowling", "proximity", "proxy", "prozac", "prude", "prudishly", "prune", "pruning", "pry", "psychic", "public", "publisher", "pucker", "pueblo", "pug", "pull", "pulmonary", "pulp", "pulsate", "pulse", "pulverize", "puma", "pumice", "pummel", "punch", "punctual", "punctuate", "punctured", "pungent", "punisher", "punk", "pupil", "puppet", "puppy", "purchase", "pureblood", "purebred", "purely", "pureness", "purgatory", "purge", "purging", "purifier", "purify", "purist", "puritan", "purity", "purple", "purplish", "purposely", "purr", "purse", "pursuable", "pursuant", "pursuit", "purveyor", "pushcart", "pushchair", "pusher", "pushiness", "pushing", "pushover", "pushpin", "pushup", "pushy", "putdown", "putt", "puzzle", "puzzling", "pyramid", "pyromania", "python", "quack", "quadrant", "quail", "quaintly", "quake", "quaking", "qualified", "qualifier", "qualify", "quality", "qualm", "quantum", "quarrel", "quarry", "quartered", "quarterly", "quarters", "quartet", "quench", "query", "quicken", "quickly", "quickness", "quicksand", "quickstep", "quiet", "quill", "quilt", "quintet", "quintuple", "quirk", "quit", "quiver", "quizzical", "quotable", "quotation", "quote", "rabid", "race", "racing", "racism", "rack", "racoon", "radar", "radial", "radiance", "radiantly", "radiated", "radiation", "radiator", "radio", "radish", "raffle", "raft", "rage", "ragged", "raging", "ragweed", "raider", "railcar", "railing", "railroad", "railway", "raisin", "rake", "raking", "rally", "ramble", "rambling", "ramp", "ramrod", "ranch", "rancidity", "random", "ranged", "ranger", "ranging", "ranked", "ranking", "ransack", "ranting", "rants", "rare", "rarity", "rascal", "rash", "rasping", "ravage", "raven", "ravine", "raving", "ravioli", "ravishing", "reabsorb", "reach", "reacquire", "reaction", "reactive", "reactor", "reaffirm", "ream", "reanalyze", "reappear", "reapply", "reappoint", "reapprove", "rearrange", "rearview", "reason", "reassign", "reassure", "reattach", "reawake", "rebalance", "rebate", "rebel", "rebirth", "reboot", "reborn", "rebound", "rebuff", "rebuild", "rebuilt", "reburial", "rebuttal", "recall", "recant", "recapture", "recast", "recede", "recent", "recess", "recharger", "recipient", "recital", "recite", "reckless", "reclaim", "recliner", "reclining", "recluse", "reclusive", "recognize", "recoil", "recollect", "recolor", "reconcile", "reconfirm", "reconvene", "recopy", "record", "recount", "recoup", "recovery", "recreate", "rectal", "rectangle", "rectified", "rectify", "recycled", "recycler", "recycling", "reemerge", "reenact", "reenter", "reentry", "reexamine", "referable", "referee", "reference", "refill", "refinance", "refined", "refinery", "refining", "refinish", "reflected", "reflector", "reflex", "reflux", "refocus", "refold", "reforest", "reformat", "reformed", "reformer", "reformist", "refract", "refrain", "refreeze", "refresh", "refried", "refueling", "refund", "refurbish", "refurnish", "refusal", "refuse", "refusing", "refutable", "refute", "regain", "regalia", "regally", "reggae", "regime", "region", "register", "registrar", "registry", "regress", "regretful", "regroup", "regular", "regulate", "regulator", "rehab", "reheat", "rehire", "rehydrate", "reimburse", "reissue", "reiterate", "rejoice", "rejoicing", "rejoin", "rekindle", "relapse", "relapsing", "relatable", "related", "relation", "relative", "relax", "relay", "relearn", "release", "relenting", "reliable", "reliably", "reliance", "reliant", "relic", "relieve", "relieving", "relight", "relish", "relive", "reload", "relocate", "relock", "reluctant", "rely", "remake", "remark", "remarry", "rematch", "remedial", "remedy", "remember", "reminder", "remindful", "remission", "remix", "remnant", "remodeler", "remold", "remorse", "remote", "removable", "removal", "removed", "remover", "removing", "rename", "renderer", "rendering", "rendition", "renegade", "renewable", "renewably", "renewal", "renewed", "renounce", "renovate", "renovator", "rentable", "rental", "rented", "renter", "reoccupy", "reoccur", "reopen", "reorder", "repackage", "repacking", "repaint", "repair", "repave", "repaying", "repayment", "repeal", "repeated", "repeater", "repent", "rephrase", "replace", "replay", "replica", "reply", "reporter", "repose", "repossess", "repost", "repressed", "reprimand", "reprint", "reprise", "reproach", "reprocess", "reproduce", "reprogram", "reps", "reptile", "reptilian", "repugnant", "repulsion", "repulsive", "repurpose", "reputable", "reputably", "request", "require", "requisite", "reroute", "rerun", "resale", "resample", "rescuer", "reseal", "research", "reselect", "reseller", "resemble", "resend", "resent", "reset", "reshape", "reshoot", "reshuffle", "residence", "residency", "resident", "residual", "residue", "resigned", "resilient", "resistant", "resisting", "resize", "resolute", "resolved", "resonant", "resonate", "resort", "resource", "respect", "resubmit", "result", "resume", "resupply", "resurface", "resurrect", "retail", "retainer", "retaining", "retake", "retaliate", "retention", "rethink", "retinal", "retired", "retiree", "retiring", "retold", "retool", "retorted", "retouch", "retrace", "retract", "retrain", "retread", "retreat", "retrial", "retrieval", "retriever", "retry", "return", "retying", "retype", "reunion", "reunite", "reusable", "reuse", "reveal", "reveler", "revenge", "revenue", "reverb", "revered", "reverence", "reverend", "reversal", "reverse", "reversing", "reversion", "revert", "revisable", "revise", "revision", "revisit", "revivable", "revival", "reviver", "reviving", "revocable", "revoke", "revolt", "revolver", "revolving", "reward", "rewash", "rewind", "rewire", "reword", "rework", "rewrap", "rewrite", "rhyme", "ribbon", "ribcage", "rice", "riches", "richly", "richness", "rickety", "ricotta", "riddance", "ridden", "ride", "riding", "rifling", "rift", "rigging", "rigid", "rigor", "rimless", "rimmed", "rind", "rink", "rinse", "rinsing", "riot", "ripcord", "ripeness", "ripening", "ripping", "ripple", "rippling", "riptide", "rise", "rising", "risk", "risotto", "ritalin", "ritzy", "rival", "riverbank", "riverbed", "riverboat", "riverside", "riveter", "riveting", "roamer", "roaming", "roast", "robbing", "robe", "robin", "robotics", "robust", "rockband", "rocker", "rocket", "rockfish", "rockiness", "rocking", "rocklike", "rockslide", "rockstar", "rocky", "rogue", "roman", "romp", "rope", "roping", "roster", "rosy", "rotten", "rotting", "rotunda", "roulette", "rounding", "roundish", "roundness", "roundup", "roundworm", "routine", "routing", "rover", "roving", "royal", "rubbed", "rubber", "rubbing", "rubble", "rubdown", "ruby", "ruckus", "rudder", "rug", "ruined", "rule", "rumble", "rumbling", "rummage", "rumor", "runaround", "rundown", "runner", "running", "runny", "runt", "runway", "rupture", "rural", "ruse", "rush", "rust", "rut", "sabbath", "sabotage", "sacrament", "sacred", "sacrifice", "sadden", "saddlebag", "saddled", "saddling", "sadly", "sadness", "safari", "safeguard", "safehouse", "safely", "safeness", "saffron", "saga", "sage", "sagging", "saggy", "said", "saint", "sake", "salad", "salami", "salaried", "salary", "saline", "salon", "saloon", "salsa", "salt", "salutary", "salute", "salvage", "salvaging", "salvation", "same", "sample", "sampling", "sanction", "sanctity", "sanctuary", "sandal", "sandbag", "sandbank", "sandbar", "sandblast", "sandbox", "sanded", "sandfish", "sanding", "sandlot", "sandpaper", "sandpit", "sandstone", "sandstorm", "sandworm", "sandy", "sanitary", "sanitizer", "sank", "santa", "sapling", "sappiness", "sappy", "sarcasm", "sarcastic", "sardine", "sash", "sasquatch", "sassy", "satchel", "satiable", "satin", "satirical", "satisfied", "satisfy", "saturate", "saturday", "sauciness", "saucy", "sauna", "savage", "savanna", "saved", "savings", "savior", "savor", "saxophone", "say", "scabbed", "scabby", "scalded", "scalding", "scale", "scaling", "scallion", "scallop", "scalping", "scam", "scandal", "scanner", "scanning", "scant", "scapegoat", "scarce", "scarcity", "scarecrow", "scared", "scarf", "scarily", "scariness", "scarring", "scary", "scavenger", "scenic", "schedule", "schematic", "scheme", "scheming", "schilling", "schnapps", "scholar", "science", "scientist", "scion", "scoff", "scolding", "scone", "scoop", "scooter", "scope", "scorch", "scorebook", "scorecard", "scored", "scoreless", "scorer", "scoring", "scorn", "scorpion", "scotch", "scoundrel", "scoured", "scouring", "scouting", "scouts", "scowling", "scrabble", "scraggly", "scrambled", "scrambler", "scrap", "scratch", "scrawny", "screen", "scribble", "scribe", "scribing", "scrimmage", "script", "scroll", "scrooge", "scrounger", "scrubbed", "scrubber", "scruffy", "scrunch", "scrutiny", "scuba", "scuff", "sculptor", "sculpture", "scurvy", "scuttle", "secluded", "secluding", "seclusion", "second", "secrecy", "secret", "sectional", "sector", "secular", "securely", "security", "sedan", "sedate", "sedation", "sedative", "sediment", "seduce", "seducing", "segment", "seismic", "seizing", "seldom", "selected", "selection", "selective", "selector", "self", "seltzer", "semantic", "semester", "semicolon", "semifinal", "seminar", "semisoft", "semisweet", "senate", "senator", "send", "senior", "senorita", "sensation", "sensitive", "sensitize", "sensually", "sensuous", "sepia", "september", "septic", "septum", "sequel", "sequence", "sequester", "series", "sermon", "serotonin", "serpent", "serrated", "serve", "service", "serving", "sesame", "sessions", "setback", "setting", "settle", "settling", "setup", "sevenfold", "seventeen", "seventh", "seventy", "severity", "shabby", "shack", "shaded", "shadily", "shadiness", "shading", "shadow", "shady", "shaft", "shakable", "shakily", "shakiness", "shaking", "shaky", "shale", "shallot", "shallow", "shame", "shampoo", "shamrock", "shank", "shanty", "shape", "shaping", "share", "sharpener", "sharper", "sharpie", "sharply", "sharpness", "shawl", "sheath", "shed", "sheep", "sheet", "shelf", "shell", "shelter", "shelve", "shelving", "sherry", "shield", "shifter", "shifting", "shiftless", "shifty", "shimmer", "shimmy", "shindig", "shine", "shingle", "shininess", "shining", "shiny", "ship", "shirt", "shivering", "shock", "shone", "shoplift", "shopper", "shopping", "shoptalk", "shore", "shortage", "shortcake", "shortcut", "shorten", "shorter", "shorthand", "shortlist", "shortly", "shortness", "shorts", "shortwave", "shorty", "shout", "shove", "showbiz", "showcase", "showdown", "shower", "showgirl", "showing", "showman", "shown", "showoff", "showpiece", "showplace", "showroom", "showy", "shrank", "shrapnel", "shredder", "shredding", "shrewdly", "shriek", "shrill", "shrimp", "shrine", "shrink", "shrivel", "shrouded", "shrubbery", "shrubs", "shrug", "shrunk", "shucking", "shudder", "shuffle", "shuffling", "shun", "shush", "shut", "shy", "siamese", "siberian", "sibling", "siding", "sierra", "siesta", "sift", "sighing", "silenced", "silencer", "silent", "silica", "silicon", "silk", "silliness", "silly", "silo", "silt", "silver", "similarly", "simile", "simmering", "simple", "simplify", "simply", "sincere", "sincerity", "singer", "singing", "single", "singular", "sinister", "sinless", "sinner", "sinuous", "sip", "siren", "sister", "sitcom", "sitter", "sitting", "situated", "situation", "sixfold", "sixteen", "sixth", "sixties", "sixtieth", "sixtyfold", "sizable", "sizably", "size", "sizing", "sizzle", "sizzling", "skater", "skating", "skedaddle", "skeletal", "skeleton", "skeptic", "sketch", "skewed", "skewer", "skid", "skied", "skier", "skies", "skiing", "skilled", "skillet", "skillful", "skimmed", "skimmer", "skimming", "skimpily", "skincare", "skinhead", "skinless", "skinning", "skinny", "skintight", "skipper", "skipping", "skirmish", "skirt", "skittle", "skydiver", "skylight", "skyline", "skype", "skyrocket", "skyward", "slab", "slacked", "slacker", "slacking", "slackness", "slacks", "slain", "slam", "slander", "slang", "slapping", "slapstick", "slashed", "slashing", "slate", "slather", "slaw", "sled", "sleek", "sleep", "sleet", "sleeve", "slept", "sliceable", "sliced", "slicer", "slicing", "slick", "slider", "slideshow", "sliding", "slighted", "slighting", "slightly", "slimness", "slimy", "slinging", "slingshot", "slinky", "slip", "slit", "sliver", "slobbery", "slogan", "sloped", "sloping", "sloppily", "sloppy", "slot", "slouching", "slouchy", "sludge", "slug", "slum", "slurp", "slush", "sly", "small", "smartly", "smartness", "smasher", "smashing", "smashup", "smell", "smelting", "smile", "smilingly", "smirk", "smite", "smith", "smitten", "smock", "smog", "smoked", "smokeless", "smokiness", "smoking", "smoky", "smolder", "smooth", "smother", "smudge", "smudgy", "smuggler", "smuggling", "smugly", "smugness", "snack", "snagged", "snaking", "snap", "snare", "snarl", "snazzy", "sneak", "sneer", "sneeze", "sneezing", "snide", "sniff", "snippet", "snipping", "snitch", "snooper", "snooze", "snore", "snoring", "snorkel", "snort", "snout", "snowbird", "snowboard", "snowbound", "snowcap", "snowdrift", "snowdrop", "snowfall", "snowfield", "snowflake", "snowiness", "snowless", "snowman", "snowplow", "snowshoe", "snowstorm", "snowsuit", "snowy", "snub", "snuff", "snuggle", "snugly", "snugness", "speak", "spearfish", "spearhead", "spearman", "spearmint", "species", "specimen", "specked", "speckled", "specks", "spectacle", "spectator", "spectrum", "speculate", "speech", "speed", "spellbind", "speller", "spelling", "spendable", "spender", "spending", "spent", "spew", "sphere", "spherical", "sphinx", "spider", "spied", "spiffy", "spill", "spilt", "spinach", "spinal", "spindle", "spinner", "spinning", "spinout", "spinster", "spiny", "spiral", "spirited", "spiritism", "spirits", "spiritual", "splashed", "splashing", "splashy", "splatter", "spleen", "splendid", "splendor", "splice", "splicing", "splinter", "splotchy", "splurge", "spoilage", "spoiled", "spoiler", "spoiling", "spoils", "spoken", "spokesman", "sponge", "spongy", "sponsor", "spoof", "spookily", "spooky", "spool", "spoon", "spore", "sporting", "sports", "sporty", "spotless", "spotlight", "spotted", "spotter", "spotting", "spotty", "spousal", "spouse", "spout", "sprain", "sprang", "sprawl", "spray", "spree", "sprig", "spring", "sprinkled", "sprinkler", "sprint", "sprite", "sprout", "spruce", "sprung", "spry", "spud", "spur", "sputter", "spyglass", "squabble", "squad", "squall", "squander", "squash", "squatted", "squatter", "squatting", "squeak", "squealer", "squealing", "squeamish", "squeegee", "squeeze", "squeezing", "squid", "squiggle", "squiggly", "squint", "squire", "squirt", "squishier", "squishy", "stability", "stabilize", "stable", "stack", "stadium", "staff", "stage", "staging", "stagnant", "stagnate", "stainable", "stained", "staining", "stainless", "stalemate", "staleness", "stalling", "stallion", "stamina", "stammer", "stamp", "stand", "stank", "staple", "stapling", "starboard", "starch", "stardom", "stardust", "starfish", "stargazer", "staring", "stark", "starless", "starlet", "starlight", "starlit", "starring", "starry", "starship", "starter", "starting", "startle", "startling", "startup", "starved", "starving", "stash", "state", "static", "statistic", "statue", "stature", "status", "statute", "statutory", "staunch", "stays", "steadfast", "steadier", "steadily", "steadying", "steam", "steed", "steep", "steerable", "steering", "steersman", "stegosaur", "stellar", "stem", "stench", "stencil", "step", "stereo", "sterile", "sterility", "sterilize", "sterling", "sternness", "sternum", "stew", "stick", "stiffen", "stiffly", "stiffness", "stifle", "stifling", "stillness", "stilt", "stimulant", "stimulate", "stimuli", "stimulus", "stinger", "stingily", "stinging", "stingray", "stingy", "stinking", "stinky", "stipend", "stipulate", "stir", "stitch", "stock", "stoic", "stoke", "stole", "stomp", "stonewall", "stoneware", "stonework", "stoning", "stony", "stood", "stooge", "stool", "stoop", "stoplight", "stoppable", "stoppage", "stopped", "stopper", "stopping", "stopwatch", "storable", "storage", "storeroom", "storewide", "storm", "stout", "stove", "stowaway", "stowing", "straddle", "straggler", "strained", "strainer", "straining", "strangely", "stranger", "strangle", "strategic", "strategy", "stratus", "straw", "stray", "streak", "stream", "street", "strength", "strenuous", "strep", "stress", "stretch", "strewn", "stricken", "strict", "stride", "strife", "strike", "striking", "strive", "striving", "strobe", "strode", "stroller", "strongbox", "strongly", "strongman", "struck", "structure", "strudel", "struggle", "strum", "strung", "strut", "stubbed", "stubble", "stubbly", "stubborn", "stucco", "stuck", "student", "studied", "studio", "study", "stuffed", "stuffing", "stuffy", "stumble", "stumbling", "stump", "stung", "stunned", "stunner", "stunning", "stunt", "stupor", "sturdily", "sturdy", "styling", "stylishly", "stylist", "stylized", "stylus", "suave", "subarctic", "subatomic", "subdivide", "subdued", "subduing", "subfloor", "subgroup", "subheader", "subject", "sublease", "sublet", "sublevel", "sublime", "submarine", "submerge", "submersed", "submitter", "subpanel", "subpar", "subplot", "subprime", "subscribe", "subscript", "subsector", "subside", "subsiding", "subsidize", "subsidy", "subsoil", "subsonic", "substance", "subsystem", "subtext", "subtitle", "subtly", "subtotal", "subtract", "subtype", "suburb", "subway", "subwoofer", "subzero", "succulent", "such", "suction", "sudden", "sudoku", "suds", "sufferer", "suffering", "suffice", "suffix", "suffocate", "suffrage", "sugar", "suggest", "suing", "suitable", "suitably", "suitcase", "suitor", "sulfate", "sulfide", "sulfite", "sulfur", "sulk", "sullen", "sulphate", "sulphuric", "sultry", "superbowl", "superglue", "superhero", "superior", "superjet", "superman", "supermom", "supernova", "supervise", "supper", "supplier", "supply", "support", "supremacy", "supreme", "surcharge", "surely", "sureness", "surface", "surfacing", "surfboard", "surfer", "surgery", "surgical", "surging", "surname", "surpass", "surplus", "surprise", "surreal", "surrender", "surrogate", "surround", "survey", "survival", "survive", "surviving", "survivor", "sushi", "suspect", "suspend", "suspense", "sustained", "sustainer", "swab", "swaddling", "swagger", "swampland", "swan", "swapping", "swarm", "sway", "swear", "sweat", "sweep", "swell", "swept", "swerve", "swifter", "swiftly", "swiftness", "swimmable", "swimmer", "swimming", "swimsuit", "swimwear", "swinger", "swinging", "swipe", "swirl", "switch", "swivel", "swizzle", "swooned", "swoop", "swoosh", "swore", "sworn", "swung", "sycamore", "sympathy", "symphonic", "symphony", "symptom", "synapse", "syndrome", "synergy", "synopses", "synopsis", "synthesis", "synthetic", "syrup", "system", "t-shirt", "tabasco", "tabby", "tableful", "tables", "tablet", "tableware", "tabloid", "tackiness", "tacking", "tackle", "tackling", "tacky", "taco", "tactful", "tactical", "tactics", "tactile", "tactless", "tadpole", "taekwondo", "tag", "tainted", "take", "taking", "talcum", "talisman", "tall", "talon", "tamale", "tameness", "tamer", "tamper", "tank", "tanned", "tannery", "tanning", "tantrum", "tapeless", "tapered", "tapering", "tapestry", "tapioca", "tapping", "taps", "tarantula", "target", "tarmac", "tarnish", "tarot", "tartar", "tartly", "tartness", "task", "tassel", "taste", "tastiness", "tasting", "tasty", "tattered", "tattle", "tattling", "tattoo", "taunt", "tavern", "thank", "that", "thaw", "theater", "theatrics", "thee", "theft", "theme", "theology", "theorize", "thermal", "thermos", "thesaurus", "these", "thesis", "thespian", "thicken", "thicket", "thickness", "thieving", "thievish", "thigh", "thimble", "thing", "think", "thinly", "thinner", "thinness", "thinning", "thirstily", "thirsting", "thirsty", "thirteen", "thirty", "thong", "thorn", "those", "thousand", "thrash", "thread", "threaten", "threefold", "thrift", "thrill", "thrive", "thriving", "throat", "throbbing", "throng", "throttle", "throwaway", "throwback", "thrower", "throwing", "thud", "thumb", "thumping", "thursday", "thus", "thwarting", "thyself", "tiara", "tibia", "tidal", "tidbit", "tidiness", "tidings", "tidy", "tiger", "tighten", "tightly", "tightness", "tightrope", "tightwad", "tigress", "tile", "tiling", "till", "tilt", "timid", "timing", "timothy", "tinderbox", "tinfoil", "tingle", "tingling", "tingly", "tinker", "tinkling", "tinsel", "tinsmith", "tint", "tinwork", "tiny", "tipoff", "tipped", "tipper", "tipping", "tiptoeing", "tiptop", "tiring", "tissue", "trace", "tracing", "track", "traction", "tractor", "trade", "trading", "tradition", "traffic", "tragedy", "trailing", "trailside", "train", "traitor", "trance", "tranquil", "transfer", "transform", "translate", "transpire", "transport", "transpose", "trapdoor", "trapeze", "trapezoid", "trapped", "trapper", "trapping", "traps", "trash", "travel", "traverse", "travesty", "tray", "treachery", "treading", "treadmill", "treason", "treat", "treble", "tree", "trekker", "tremble", "trembling", "tremor", "trench", "trend", "trespass", "triage", "trial", "triangle", "tribesman", "tribunal", "tribune", "tributary", "tribute", "triceps", "trickery", "trickily", "tricking", "trickle", "trickster", "tricky", "tricolor", "tricycle", "trident", "tried", "trifle", "trifocals", "trillion", "trilogy", "trimester", "trimmer", "trimming", "trimness", "trinity", "trio", "tripod", "tripping", "triumph", "trivial", "trodden", "trolling", "trombone", "trophy", "tropical", "tropics", "trouble", "troubling", "trough", "trousers", "trout", "trowel", "truce", "truck", "truffle", "trump", "trunks", "trustable", "trustee", "trustful", "trusting", "trustless", "truth", "try", "tubby", "tubeless", "tubular", "tucking", "tuesday", "tug", "tuition", "tulip", "tumble", "tumbling", "tummy", "turban", "turbine", "turbofan", "turbojet", "turbulent", "turf", "turkey", "turmoil", "turret", "turtle", "tusk", "tutor", "tutu", "tux", "tweak", "tweed", "tweet", "tweezers", "twelve", "twentieth", "twenty", "twerp", "twice", "twiddle", "twiddling", "twig", "twilight", "twine", "twins", "twirl", "twistable", "twisted", "twister", "twisting", "twisty", "twitch", "twitter", "tycoon", "tying", "tyke", "udder", "ultimate", "ultimatum", "ultra", "umbilical", "umbrella", "umpire", "unabashed", "unable", "unadorned", "unadvised", "unafraid", "unaired", "unaligned", "unaltered", "unarmored", "unashamed", "unaudited", "unawake", "unaware", "unbaked", "unbalance", "unbeaten", "unbend", "unbent", "unbiased", "unbitten", "unblended", "unblessed", "unblock", "unbolted", "unbounded", "unboxed", "unbraided", "unbridle", "unbroken", "unbuckled", "unbundle", "unburned", "unbutton", "uncanny", "uncapped", "uncaring", "uncertain", "unchain", "unchanged", "uncharted", "uncheck", "uncivil", "unclad", "unclaimed", "unclamped", "unclasp", "uncle", "unclip", "uncloak", "unclog", "unclothed", "uncoated", "uncoiled", "uncolored", "uncombed", "uncommon", "uncooked", "uncork", "uncorrupt", "uncounted", "uncouple", "uncouth", "uncover", "uncross", "uncrown", "uncrushed", "uncured", "uncurious", "uncurled", "uncut", "undamaged", "undated", "undaunted", "undead", "undecided", "undefined", "underage", "underarm", "undercoat", "undercook", "undercut", "underdog", "underdone", "underfed", "underfeed", "underfoot", "undergo", "undergrad", "underhand", "underline", "underling", "undermine", "undermost", "underpaid", "underpass", "underpay", "underrate", "undertake", "undertone", "undertook", "undertow", "underuse", "underwear", "underwent", "underwire", "undesired", "undiluted", "undivided", "undocked", "undoing", "undone", "undrafted", "undress", "undrilled", "undusted", "undying", "unearned", "unearth", "unease", "uneasily", "uneasy", "uneatable", "uneaten", "unedited", "unelected", "unending", "unengaged", "unenvied", "unequal", "unethical", "uneven", "unexpired", "unexposed", "unfailing", "unfair", "unfasten", "unfazed", "unfeeling", "unfiled", "unfilled", "unfitted", "unfitting", "unfixable", "unfixed", "unflawed", "unfocused", "unfold", "unfounded", "unframed", "unfreeze", "unfrosted", "unfrozen", "unfunded", "unglazed", "ungloved", "unglue", "ungodly", "ungraded", "ungreased", "unguarded", "unguided", "unhappily", "unhappy", "unharmed", "unhealthy", "unheard", "unhearing", "unheated", "unhelpful", "unhidden", "unhinge", "unhitched", "unholy", "unhook", "unicorn", "unicycle", "unified", "unifier", "uniformed", "uniformly", "unify", "unimpeded", "uninjured", "uninstall", "uninsured", "uninvited", "union", "uniquely", "unisexual", "unison", "unissued", "unit", "universal", "universe", "unjustly", "unkempt", "unkind", "unknotted", "unknowing", "unknown", "unlaced", "unlatch", "unlawful", "unleaded", "unlearned", "unleash", "unless", "unleveled", "unlighted", "unlikable", "unlimited", "unlined", "unlinked", "unlisted", "unlit", "unlivable", "unloaded", "unloader", "unlocked", "unlocking", "unlovable", "unloved", "unlovely", "unloving", "unluckily", "unlucky", "unmade", "unmanaged", "unmanned", "unmapped", "unmarked", "unmasked", "unmasking", "unmatched", "unmindful", "unmixable", "unmixed", "unmolded", "unmoral", "unmovable", "unmoved", "unmoving", "unnamable", "unnamed", "unnatural", "unneeded", "unnerve", "unnerving", "unnoticed", "unopened", "unopposed", "unpack", "unpadded", "unpaid", "unpainted", "unpaired", "unpaved", "unpeeled", "unpicked", "unpiloted", "unpinned", "unplanned", "unplanted", "unpleased", "unpledged", "unplowed", "unplug", "unpopular", "unproven", "unquote", "unranked", "unrated", "unraveled", "unreached", "unread", "unreal", "unreeling", "unrefined", "unrelated", "unrented", "unrest", "unretired", "unrevised", "unrigged", "unripe", "unrivaled", "unroasted", "unrobed", "unroll", "unruffled", "unruly", "unrushed", "unsaddle", "unsafe", "unsaid", "unsalted", "unsaved", "unsavory", "unscathed", "unscented", "unscrew", "unsealed", "unseated", "unsecured", "unseeing", "unseemly", "unseen", "unselect", "unselfish", "unsent", "unsettled", "unshackle", "unshaken", "unshaved", "unshaven", "unsheathe", "unshipped", "unsightly", "unsigned", "unskilled", "unsliced", "unsmooth", "unsnap", "unsocial", "unsoiled", "unsold", "unsolved", "unsorted", "unspoiled", "unspoken", "unstable", "unstaffed", "unstamped", "unsteady", "unsterile", "unstirred", "unstitch", "unstopped", "unstuck", "unstuffed", "unstylish", "unsubtle", "unsubtly", "unsuited", "unsure", "unsworn", "untagged", "untainted", "untaken", "untamed", "untangled", "untapped", "untaxed", "unthawed", "unthread", "untidy", "untie", "until", "untimed", "untimely", "untitled", "untoasted", "untold", "untouched", "untracked", "untrained", "untreated", "untried", "untrimmed", "untrue", "untruth", "unturned", "untwist", "untying", "unusable", "unused", "unusual", "unvalued", "unvaried", "unvarying", "unveiled", "unveiling", "unvented", "unviable", "unvisited", "unvocal", "unwanted", "unwarlike", "unwary", "unwashed", "unwatched", "unweave", "unwed", "unwelcome", "unwell", "unwieldy", "unwilling", "unwind", "unwired", "unwitting", "unwomanly", "unworldly", "unworn", "unworried", "unworthy", "unwound", "unwoven", "unwrapped", "unwritten", "unzip", "upbeat", "upchuck", "upcoming", "upcountry", "update", "upfront", "upgrade", "upheaval", "upheld", "uphill", "uphold", "uplifted", "uplifting", "upload", "upon", "upper", "upright", "uprising", "upriver", "uproar", "uproot", "upscale", "upside", "upstage", "upstairs", "upstart", "upstate", "upstream", "upstroke", "upswing", "uptake", "uptight", "uptown", "upturned", "upward", "upwind", "uranium", "urban", "urchin", "urethane", "urgency", "urgent", "urging", "urologist", "urology", "usable", "usage", "useable", "used", "uselessly", "user", "usher", "usual", "utensil", "utility", "utilize", "utmost", "utopia", "utter", "vacancy", "vacant", "vacate", "vacation", "vagabond", "vagrancy", "vagrantly", "vaguely", "vagueness", "valiant", "valid", "valium", "valley", "valuables", "value", "vanilla", "vanish", "vanity", "vanquish", "vantage", "vaporizer", "variable", "variably", "varied", "variety", "various", "varmint", "varnish", "varsity", "varying", "vascular", "vaseline", "vastly", "vastness", "veal", "vegan", "veggie", "vehicular", "velcro", "velocity", "velvet", "vendetta", "vending", "vendor", "veneering", "vengeful", "venomous", "ventricle", "venture", "venue", "venus", "verbalize", "verbally", "verbose", "verdict", "verify", "verse", "version", "versus", "vertebrae", "vertical", "vertigo", "very", "vessel", "vest", "veteran", "veto", "vexingly", "viability", "viable", "vibes", "vice", "vicinity", "victory", "video", "viewable", "viewer", "viewing", "viewless", "viewpoint", "vigorous", "village", "villain", "vindicate", "vineyard", "vintage", "violate", "violation", "violator", "violet", "violin", "viper", "viral", "virtual", "virtuous", "virus", "visa", "viscosity", "viscous", "viselike", "visible", "visibly", "vision", "visiting", "visitor", "visor", "vista", "vitality", "vitalize", "vitally", "vitamins", "vivacious", "vividly", "vividness", "vixen", "vocalist", "vocalize", "vocally", "vocation", "voice", "voicing", "void", "volatile", "volley", "voltage", "volumes", "voter", "voting", "voucher", "vowed", "vowel", "voyage", "wackiness", "wad", "wafer", "waffle", "waged", "wager", "wages", "waggle", "wagon", "wake", "waking", "walk", "walmart", "walnut", "walrus", "waltz", "wand", "wannabe", "wanted", "wanting", "wasabi", "washable", "washbasin", "washboard", "washbowl", "washcloth", "washday", "washed", "washer", "washhouse", "washing", "washout", "washroom", "washstand", "washtub", "wasp", "wasting", "watch", "water", "waviness", "waving", "wavy", "whacking", "whacky", "wham", "wharf", "wheat", "whenever", "whiff", "whimsical", "whinny", "whiny", "whisking", "whoever", "whole", "whomever", "whoopee", "whooping", "whoops", "why", "wick", "widely", "widen", "widget", "widow", "width", "wieldable", "wielder", "wife", "wifi", "wikipedia", "wildcard", "wildcat", "wilder", "wildfire", "wildfowl", "wildland", "wildlife", "wildly", "wildness", "willed", "willfully", "willing", "willow", "willpower", "wilt", "wimp", "wince", "wincing", "wind", "wing", "winking", "winner", "winnings", "winter", "wipe", "wired", "wireless", "wiring", "wiry", "wisdom", "wise", "wish", "wisplike", "wispy", "wistful", "wizard", "wobble", "wobbling", "wobbly", "wok", "wolf", "wolverine", "womanhood", "womankind", "womanless", "womanlike", "womanly", "womb", "woof", "wooing", "wool", "woozy", "word", "work", "worried", "worrier", "worrisome", "worry", "worsening", "worshiper", "worst", "wound", "woven", "wow", "wrangle", "wrath", "wreath", "wreckage", "wrecker", "wrecking", "wrench", "wriggle", "wriggly", "wrinkle", "wrinkly", "wrist", "writing", "written", "wrongdoer", "wronged", "wrongful", "wrongly", "wrongness", "wrought", "xbox", "xerox", "yahoo", "yam", "yanking", "yapping", "yard", "yarn", "yeah", "yearbook", "yearling", "yearly", "yearning", "yeast", "yelling", "yelp", "yen", "yesterday", "yiddish", "yield", "yin", "yippee", "yo-yo", "yodel", "yoga", "yogurt", "yonder", "yoyo", "yummy", "zap", "zealous", "zebra", "zen", "zeppelin", "zero", "zestfully", "zesty", "zigzagged", "zipfile", "zipping", "zippy", "zips", "zit", "zodiac", "zombie", "zone", "zoning", "zookeeper", "zoologist", "zoology", "zoom"];
Object.defineProperty(Or, "__esModule", {
  value: !0
});
Or.newSecureWords = void 0;
const vl = ue,
  Ua = Dr;
async function kl(e = 6) {
  let t = [];
  for (let r = 0; r < e; r++) t.push(Ua.wordlist[await (0, vl.getSecureRandomNumber)(0, Ua.wordlist.length)]);
  return t
}
Or.newSecureWords = kl;
var $t = {},
  za;

function _l() {
  if (za) return $t;
  za = 1, Object.defineProperty($t, "__esModule", {
    value: !0
  }), $t.newSecurePassphrase = void 0;
  const e = bt();
  async function t(r = 6) {
    return (await (0, e.newSecureWords)(r)).join("-")
  }
  return $t.newSecurePassphrase = t, $t
}
var N = {},
  Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.bitsToBytes = Ae.bytesToBits = Ae.lpad = void 0;

function Ai(e, t, r) {
  for (; e.length < r;) e = t + e;
  return e
}
Ae.lpad = Ai;

function Bl(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let n = e.at(r);
    t += Ai(n.toString(2), "0", 8)
  }
  return t
}
Ae.bytesToBits = Bl;

function Sl(e) {
  if (e.length % 8 !== 0) throw Error("Uneven bits");
  let t = [];
  for (; e.length > 0;) t.push(parseInt(e.slice(0, 8), 2)), e = e.slice(8);
  return v.from(t)
}
Ae.bitsToBytes = Sl;
var lr = {};
Object.defineProperty(lr, "__esModule", {
  value: !0
});
lr.wordlist = void 0;
const Cl = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];
lr.wordlist = Cl;
var Pl = I && I.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  }
};
Object.defineProperty(N, "__esModule", {
  value: !0
});
N.mnemonicFromRandomSeed = N.mnemonicIndexesToBytes = N.bytesToMnemonics = N.bytesToMnemonicIndexes = N.mnemonicNew = N.mnemonicValidate = N.mnemonicToHDSeed = N.mnemonicToWalletKey = N.mnemonicToPrivateKey = N.mnemonicToSeed = N.mnemonicToEntropy = void 0;
const Mi = Pl(ci),
  Al = ue,
  Ml = fe,
  Vr = sr,
  Un = Ae,
  vr = lr,
  Kn = 1e5;
async function Ui(e) {
  const t = await dr(e);
  return await Ul(t) && !await Gn(t)
}

function Hn(e) {
  return e.map(t => t.toLowerCase().trim())
}
async function Gn(e) {
  return (await (0, Vr.pbkdf2_sha512)(e, "TON seed version", Math.max(1, Math.floor(Kn / 256)), 64))[0] == 0
}
async function Ul(e) {
  return (await (0, Vr.pbkdf2_sha512)(e, "TON fast seed version", 1, 64))[0] == 1
}
async function dr(e, t) {
  return await (0, Ml.hmac_sha512)(e.join(" "), t && t.length > 0 ? t : "")
}
N.mnemonicToEntropy = dr;
async function Qn(e, t, r) {
  const n = await dr(e, r);
  return await (0, Vr.pbkdf2_sha512)(n, t, Kn, 64)
}
N.mnemonicToSeed = Qn;
async function zi(e, t) {
  e = Hn(e);
  const r = await Qn(e, "TON default seed", t);
  let n = Mi.default.sign.keyPair.fromSeed(r.slice(0, 32));
  return {
    publicKey: v.from(n.publicKey),
    secretKey: v.from(n.secretKey)
  }
}
N.mnemonicToPrivateKey = zi;
async function zl(e, t) {
  let n = (await zi(e, t)).secretKey.slice(0, 32);
  const o = Mi.default.sign.keyPair.fromSeed(n);
  return {
    publicKey: v.from(o.publicKey),
    secretKey: v.from(o.secretKey)
  }
}
N.mnemonicToWalletKey = zl;
async function xl(e, t) {
  return e = Hn(e), await Qn(e, "TON HD Keys seed", t)
}
N.mnemonicToHDSeed = xl;
async function xi(e, t) {
  e = Hn(e);
  for (let r of e)
    if (vr.wordlist.indexOf(r) < 0) return !1;
  return t && t.length > 0 && !await Ui(e) ? !1 : await Gn(await dr(e, t))
}
N.mnemonicValidate = xi;
async function Il(e = 24, t) {
  let r = [];
  for (;;) {
    r = [];
    for (let n = 0; n < e; n++) {
      let o = await (0, Al.getSecureRandomNumber)(0, vr.wordlist.length);
      r.push(vr.wordlist[o])
    }
    if (!(t && t.length > 0 && !await Ui(r)) && await Gn(await dr(r, t))) break
  }
  return r
}
N.mnemonicNew = Il;

function Ii(e, t) {
  let r = (0, Un.bytesToBits)(e),
    n = [];
  for (let o = 0; o < t; o++) {
    let a = r.slice(o * 11, o * 11 + 11);
    n.push(parseInt(a, 2))
  }
  return n
}
N.bytesToMnemonicIndexes = Ii;

function Ei(e, t) {
  let r = Ii(e, t),
    n = [];
  for (let o of r) n.push(vr.wordlist[o]);
  return n
}
N.bytesToMnemonics = Ei;

function El(e) {
  let t = "";
  for (let r of e) {
    if (!Number.isSafeInteger(r) || r < 0 || r >= 2028) throw Error("Invalid input");
    t += (0, Un.lpad)(r.toString(2), "0", 11)
  }
  for (; t.length % 8 !== 0;) t = t + "0";
  return (0, Un.bitsToBytes)(t)
}
N.mnemonicIndexesToBytes = El;
async function Tl(e, t = 24, r) {
  const n = Math.ceil(t * 11 / 8);
  let o = e;
  for (;;) {
    let a = await (0, Vr.pbkdf2_sha512)(o, "TON mnemonic seed", Math.max(1, Math.floor(Kn / 256)), n),
      i = Ei(a, t);
    if (await xi(i, r)) return i;
    o = a
  }
}
N.mnemonicFromRandomSeed = Tl;
var X = {},
  jl = I && I.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(X, "__esModule", {
  value: !0
});
X.openBox = X.sealBox = X.signVerify = X.sign = X.keyPairFromSeed = X.keyPairFromSecretKey = void 0;
const Tt = jl(ci);

function Rl(e) {
  let t = Tt.default.sign.keyPair.fromSecretKey(new Uint8Array(e));
  return {
    publicKey: v.from(t.publicKey),
    secretKey: v.from(t.secretKey)
  }
}
X.keyPairFromSecretKey = Rl;

function Ol(e) {
  let t = Tt.default.sign.keyPair.fromSeed(new Uint8Array(e));
  return {
    publicKey: v.from(t.publicKey),
    secretKey: v.from(t.secretKey)
  }
}
X.keyPairFromSeed = Ol;

function Dl(e, t) {
  return v.from(Tt.default.sign.detached(new Uint8Array(e), new Uint8Array(t)))
}
X.sign = Dl;

function Vl(e, t, r) {
  return Tt.default.sign.detached.verify(new Uint8Array(e), new Uint8Array(t), new Uint8Array(r))
}
X.signVerify = Vl;

function Ll(e, t, r) {
  return v.from(Tt.default.secretbox(e, t, r))
}
X.sealBox = Ll;

function ql(e, t, r) {
  let n = Tt.default.secretbox.open(e, t, r);
  return n ? v.from(n) : null
}
X.openBox = ql;
var Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.deriveEd25519Path = Me.deriveED25519HardenedKey = Me.getED25519MasterKeyFromSeed = void 0;
const Ti = fe,
  Nl = "ed25519 seed",
  xa = 2147483648;
async function ji(e) {
  const t = await (0, Ti.hmac_sha512)(Nl, e),
    r = t.slice(0, 32),
    n = t.slice(32);
  return {
    key: r,
    chainCode: n
  }
}
Me.getED25519MasterKeyFromSeed = ji;
async function Ri(e, t) {
  if (t >= xa) throw Error("Key index must be less than offset");
  const r = v.alloc(4);
  r.writeUInt32BE(t + xa, 0);
  const n = v.concat([v.alloc(1, 0), e.key, r]),
    o = await (0, Ti.hmac_sha512)(e.chainCode, n),
    a = o.slice(0, 32),
    i = o.slice(32);
  return {
    key: a,
    chainCode: i
  }
}
Me.deriveED25519HardenedKey = Ri;
async function $l(e, t) {
  let r = await ji(e),
    n = [...t];
  for (; n.length > 0;) {
    let o = n[0];
    n = n.slice(1), r = await Ri(r, o)
  }
  return r.key
}
Me.deriveEd25519Path = $l;
var Ue = {};
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.deriveSymmetricPath = Ue.deriveSymmetricHardenedKey = Ue.getSymmetricMasterKeyFromSeed = void 0;
const Oi = fe,
  Wl = "Symmetric key seed";
async function Di(e) {
  const t = await (0, Oi.hmac_sha512)(Wl, e),
    r = t.slice(32),
    n = t.slice(0, 32);
  return {
    key: r,
    chainCode: n
  }
}
Ue.getSymmetricMasterKeyFromSeed = Di;
async function Vi(e, t) {
  const r = v.concat([v.alloc(1, 0), v.from(t)]),
    n = await (0, Oi.hmac_sha512)(e.chainCode, r),
    o = n.slice(32),
    a = n.slice(0, 32);
  return {
    key: o,
    chainCode: a
  }
}
Ue.deriveSymmetricHardenedKey = Vi;
async function Fl(e, t) {
  let r = await Di(e),
    n = [...t];
  for (; n.length > 0;) {
    let o = n[0];
    n = n.slice(1), r = await Vi(r, o)
  }
  return r.key
}
Ue.deriveSymmetricPath = Fl;
var ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.deriveMnemonicsPath = ze.deriveMnemonicHardenedKey = ze.getMnemonicsMasterKeyFromSeed = void 0;
const Kl = N,
  Li = fe,
  Ia = 2147483648,
  Hl = "TON Mnemonics HD seed";
async function qi(e) {
  const t = await (0, Li.hmac_sha512)(Hl, e),
    r = t.slice(0, 32),
    n = t.slice(32);
  return {
    key: r,
    chainCode: n
  }
}
ze.getMnemonicsMasterKeyFromSeed = qi;
async function Ni(e, t) {
  if (t >= Ia) throw Error("Key index must be less than offset");
  const r = v.alloc(4);
  r.writeUInt32BE(t + Ia, 0);
  const n = v.concat([v.alloc(1, 0), e.key, r]),
    o = await (0, Li.hmac_sha512)(e.chainCode, n),
    a = o.slice(0, 32),
    i = o.slice(32);
  return {
    key: a,
    chainCode: i
  }
}
ze.deriveMnemonicHardenedKey = Ni;
async function Gl(e, t, r = 24, n) {
  let o = await qi(e),
    a = [...t];
  for (; a.length > 0;) {
    let i = a[0];
    a = a.slice(1), o = await Ni(o, i)
  }
  return await (0, Kl.mnemonicFromRandomSeed)(o.key, r, n)
}
ze.deriveMnemonicsPath = Gl;
var Ea;

function bt() {
  return Ea || (Ea = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getMnemonicsMasterKeyFromSeed = e.deriveMnemonicHardenedKey = e.deriveMnemonicsPath = e.deriveSymmetricPath = e.deriveSymmetricHardenedKey = e.getSymmetricMasterKeyFromSeed = e.deriveEd25519Path = e.deriveED25519HardenedKey = e.getED25519MasterKeyFromSeed = e.signVerify = e.sign = e.keyPairFromSecretKey = e.keyPairFromSeed = e.openBox = e.sealBox = e.mnemonicWordList = e.mnemonicToHDSeed = e.mnemonicToSeed = e.mnemonicToWalletKey = e.mnemonicToPrivateKey = e.mnemonicValidate = e.mnemonicNew = e.newSecurePassphrase = e.newSecureWords = e.getSecureRandomNumber = e.getSecureRandomWords = e.getSecureRandomBytes = e.hmac_sha512 = e.pbkdf2_sha512 = e.sha512_sync = e.sha512 = e.sha256_sync = e.sha256 = void 0;
    var t = Ce;
    Object.defineProperty(e, "sha256", {
      enumerable: !0,
      get: function() {
        return t.sha256
      }
    }), Object.defineProperty(e, "sha256_sync", {
      enumerable: !0,
      get: function() {
        return t.sha256_sync
      }
    });
    var r = Pe;
    Object.defineProperty(e, "sha512", {
      enumerable: !0,
      get: function() {
        return r.sha512
      }
    }), Object.defineProperty(e, "sha512_sync", {
      enumerable: !0,
      get: function() {
        return r.sha512_sync
      }
    });
    var n = sr;
    Object.defineProperty(e, "pbkdf2_sha512", {
      enumerable: !0,
      get: function() {
        return n.pbkdf2_sha512
      }
    });
    var o = fe;
    Object.defineProperty(e, "hmac_sha512", {
      enumerable: !0,
      get: function() {
        return o.hmac_sha512
      }
    });
    var a = ue;
    Object.defineProperty(e, "getSecureRandomBytes", {
      enumerable: !0,
      get: function() {
        return a.getSecureRandomBytes
      }
    }), Object.defineProperty(e, "getSecureRandomWords", {
      enumerable: !0,
      get: function() {
        return a.getSecureRandomWords
      }
    }), Object.defineProperty(e, "getSecureRandomNumber", {
      enumerable: !0,
      get: function() {
        return a.getSecureRandomNumber
      }
    });
    var i = Or;
    Object.defineProperty(e, "newSecureWords", {
      enumerable: !0,
      get: function() {
        return i.newSecureWords
      }
    });
    var s = _l();
    Object.defineProperty(e, "newSecurePassphrase", {
      enumerable: !0,
      get: function() {
        return s.newSecurePassphrase
      }
    });
    var l = N;
    Object.defineProperty(e, "mnemonicNew", {
      enumerable: !0,
      get: function() {
        return l.mnemonicNew
      }
    }), Object.defineProperty(e, "mnemonicValidate", {
      enumerable: !0,
      get: function() {
        return l.mnemonicValidate
      }
    }), Object.defineProperty(e, "mnemonicToPrivateKey", {
      enumerable: !0,
      get: function() {
        return l.mnemonicToPrivateKey
      }
    }), Object.defineProperty(e, "mnemonicToWalletKey", {
      enumerable: !0,
      get: function() {
        return l.mnemonicToWalletKey
      }
    }), Object.defineProperty(e, "mnemonicToSeed", {
      enumerable: !0,
      get: function() {
        return l.mnemonicToSeed
      }
    }), Object.defineProperty(e, "mnemonicToHDSeed", {
      enumerable: !0,
      get: function() {
        return l.mnemonicToHDSeed
      }
    });
    var c = lr;
    Object.defineProperty(e, "mnemonicWordList", {
      enumerable: !0,
      get: function() {
        return c.wordlist
      }
    });
    var u = X;
    Object.defineProperty(e, "sealBox", {
      enumerable: !0,
      get: function() {
        return u.sealBox
      }
    }), Object.defineProperty(e, "openBox", {
      enumerable: !0,
      get: function() {
        return u.openBox
      }
    });
    var f = X;
    Object.defineProperty(e, "keyPairFromSeed", {
      enumerable: !0,
      get: function() {
        return f.keyPairFromSeed
      }
    }), Object.defineProperty(e, "keyPairFromSecretKey", {
      enumerable: !0,
      get: function() {
        return f.keyPairFromSecretKey
      }
    }), Object.defineProperty(e, "sign", {
      enumerable: !0,
      get: function() {
        return f.sign
      }
    }), Object.defineProperty(e, "signVerify", {
      enumerable: !0,
      get: function() {
        return f.signVerify
      }
    });
    var k = Me;
    Object.defineProperty(e, "getED25519MasterKeyFromSeed", {
      enumerable: !0,
      get: function() {
        return k.getED25519MasterKeyFromSeed
      }
    }), Object.defineProperty(e, "deriveED25519HardenedKey", {
      enumerable: !0,
      get: function() {
        return k.deriveED25519HardenedKey
      }
    }), Object.defineProperty(e, "deriveEd25519Path", {
      enumerable: !0,
      get: function() {
        return k.deriveEd25519Path
      }
    });
    var m = Ue;
    Object.defineProperty(e, "getSymmetricMasterKeyFromSeed", {
      enumerable: !0,
      get: function() {
        return m.getSymmetricMasterKeyFromSeed
      }
    }), Object.defineProperty(e, "deriveSymmetricHardenedKey", {
      enumerable: !0,
      get: function() {
        return m.deriveSymmetricHardenedKey
      }
    }), Object.defineProperty(e, "deriveSymmetricPath", {
      enumerable: !0,
      get: function() {
        return m.deriveSymmetricPath
      }
    });
    var P = ze;
    Object.defineProperty(e, "deriveMnemonicsPath", {
      enumerable: !0,
      get: function() {
        return P.deriveMnemonicsPath
      }
    }), Object.defineProperty(e, "deriveMnemonicHardenedKey", {
      enumerable: !0,
      get: function() {
        return P.deriveMnemonicHardenedKey
      }
    }), Object.defineProperty(e, "getMnemonicsMasterKeyFromSeed", {
      enumerable: !0,
      get: function() {
        return P.getMnemonicsMasterKeyFromSeed
      }
    })
  }(pn)), pn
}
var Ta;

function Ql() {
  if (Ta) return Nt;
  Ta = 1, Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.wonderCalculator = void 0;
  const e = Te(),
    t = je,
    r = It,
    n = xt,
    o = zr(),
    a = ye,
    i = bt(),
    s = zt,
    l = or;

  function c(u, f, k) {
    let m, P = null;
    if (u === t.CellType.Ordinary) {
      let p = 0;
      for (let U of k) p = p | U.mask.value;
      m = new r.LevelMask(p)
    } else if (u === t.CellType.PrunedBranch) P = (0, n.exoticPruned)(f, k), m = new r.LevelMask(P.mask);
    else if (u === t.CellType.MerkleProof)(0, o.exoticMerkleProof)(f, k), m = new r.LevelMask(k[0].mask.value >> 1);
    else if (u === t.CellType.MerkleUpdate)(0, s.exoticMerkleUpdate)(f, k), m = new r.LevelMask((k[0].mask.value | k[1].mask.value) >> 1);
    else if (u === t.CellType.Library)(0, l.exoticLibrary)(f, k), m = new r.LevelMask;
    else throw new Error("Unsupported exotic type");
    let g = [],
      _ = [],
      B = u === t.CellType.PrunedBranch ? 1 : m.hashCount,
      y = m.hashCount - B;
    for (let p = 0, U = 0; p <= m.level; p++) {
      if (!m.isSignificant(p)) continue;
      if (U < y) {
        U++;
        continue
      }
      let j;
      if (U === y) {
        if (!(p === 0 || u === t.CellType.PrunedBranch)) throw Error("Invalid");
        j = f
      } else {
        if (!(p !== 0 && u !== t.CellType.PrunedBranch)) throw Error("Invalid: " + p + ", " + u);
        j = new e.BitString(_[U - y - 1], 0, 256)
      }
      let E = 0;
      for (let b of k) {
        let h;
        u == t.CellType.MerkleProof || u == t.CellType.MerkleUpdate ? h = b.depth(p + 1) : h = b.depth(p), E = Math.max(E, h)
      }
      k.length > 0 && E++;
      let R = (0, a.getRepr)(f, j, k, p, m.apply(p).value, u),
        V = (0, i.sha256_sync)(R),
        D = U - y;
      g[D] = E, _[D] = V, U++
    }
    let w = [],
      A = [];
    if (P)
      for (let p = 0; p < 4; p++) {
        const {
          hashIndex: U
        } = m.apply(p), {
          hashIndex: j
        } = m;
        U !== j ? (w.push(P.pruned[U].hash), A.push(P.pruned[U].depth)) : (w.push(_[0]), A.push(g[0]))
      } else
        for (let p = 0; p < 4; p++) w.push(_[m.apply(p).hashIndex]), A.push(g[m.apply(p).hashIndex]);
    return {
      mask: m,
      hashes: w,
      depths: A
    }
  }
  return Nt.wonderCalculator = c, Nt
}
var be = {},
  Lr = {};
Object.defineProperty(Lr, "__esModule", {
  value: !0
});
Lr.topologicalSort = void 0;

function Yl(e) {
  let t = [e],
    r = new Map,
    n = new Set,
    o = [];
  for (; t.length > 0;) {
    const c = [...t];
    t = [];
    for (let u of c) {
      const f = u.hash().toString("hex");
      if (!r.has(f)) {
        n.add(f), r.set(f, {
          cell: u,
          refs: u.refs.map(k => k.hash().toString("hex"))
        });
        for (let k of u.refs) t.push(k)
      }
    }
  }
  let a = new Set;

  function i(c) {
    if (!n.has(c)) return;
    if (a.has(c)) throw Error("Not a DAG");
    a.add(c);
    let u = r.get(c).refs;
    for (let f = u.length - 1; f >= 0; f--) i(u[f]);
    o.push(c), a.delete(c), n.delete(c)
  }
  for (; n.size > 0;) {
    const c = Array.from(n)[0];
    i(c)
  }
  let s = new Map;
  for (let c = 0; c < o.length; c++) s.set(o[o.length - c - 1], c);
  let l = [];
  for (let c = o.length - 1; c >= 0; c--) {
    let u = o[c];
    const f = r.get(u);
    l.push({
      cell: f.cell,
      refs: f.refs.map(k => s.get(k))
    })
  }
  return l
}
Lr.topologicalSort = Yl;
var qr = {};
Object.defineProperty(qr, "__esModule", {
  value: !0
});
qr.bitsForNumber = void 0;

function Xl(e, t) {
  let r = BigInt(e);
  if (t === "int") return r === 0n || r === -1n ? 1 : (r > 0 ? r : -r).toString(2).length + 1;
  if (t === "uint") {
    if (r < 0) throw Error(`value is negative. Got ${e}`);
    return r.toString(2).length
  } else throw Error(`invalid mode. Got ${t}`)
}
qr.bitsForNumber = Xl;
var cr = {};
Object.defineProperty(cr, "__esModule", {
  value: !0
});
cr.crc32c = void 0;
const Be = 2197175160;

function Jl(e) {
  let t = -1;
  for (let n = 0; n < e.length; n++) t ^= e[n], t = t & 1 ? t >>> 1 ^ Be : t >>> 1, t = t & 1 ? t >>> 1 ^ Be : t >>> 1, t = t & 1 ? t >>> 1 ^ Be : t >>> 1, t = t & 1 ? t >>> 1 ^ Be : t >>> 1, t = t & 1 ? t >>> 1 ^ Be : t >>> 1, t = t & 1 ? t >>> 1 ^ Be : t >>> 1, t = t & 1 ? t >>> 1 ^ Be : t >>> 1, t = t & 1 ? t >>> 1 ^ Be : t >>> 1;
  t = t ^ 4294967295;
  let r = v.alloc(4);
  return r.writeInt32LE(t), r
}
cr.crc32c = Jl;
var ja;

function Zl() {
  if (ja) return be;
  ja = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  }), be.serializeBoc = be.deserializeBoc = be.parseBoc = void 0;
  const e = de,
    t = Te(),
    r = yt(),
    n = Lr,
    o = qr,
    a = Mr(),
    i = ye,
    s = Ar(),
    l = cr;

  function c(B) {
    return u(B & 7)
  }

  function u(B) {
    let S = 0;
    for (let y = 0; y < 3; y++) S += B & 1, B = B >> 1;
    return S + 1
  }

  function f(B, S) {
    const y = B.loadUint(8),
      w = y % 8,
      A = !!(y & 8),
      p = B.loadUint(8),
      U = Math.ceil(p / 2),
      j = !!(p % 2),
      E = y >> 5,
      R = (y & 16) != 0,
      D = R ? c(E) * 32 : 0,
      b = R ? c(E) * 2 : 0;
    B.skip(D * 8), B.skip(b * 8);
    let h = t.BitString.EMPTY;
    U > 0 && (j ? h = B.loadPaddedBits(U * 8) : h = B.loadBits(U * 8));
    let M = [];
    for (let x = 0; x < w; x++) M.push(B.loadUint(S * 8));
    return {
      bits: h,
      refs: M,
      exotic: A
    }
  }

  function k(B, S) {
    return 2 + Math.ceil(B.bits.length / 8) + B.refs.length * S
  }

  function m(B) {
    let S = new e.BitReader(new t.BitString(B, 0, B.length * 8)),
      y = S.loadUint(32);
    if (y === 1761568243) {
      let w = S.loadUint(8),
        A = S.loadUint(8),
        p = S.loadUint(w * 8),
        U = S.loadUint(w * 8),
        j = S.loadUint(w * 8),
        E = S.loadUint(A * 8),
        R = S.loadBuffer(p * A),
        V = S.loadBuffer(E);
      return {
        size: w,
        offBytes: A,
        cells: p,
        roots: U,
        absent: j,
        totalCellSize: E,
        index: R,
        cellData: V,
        root: [0]
      }
    } else if (y === 2898503464) {
      let w = S.loadUint(8),
        A = S.loadUint(8),
        p = S.loadUint(w * 8),
        U = S.loadUint(w * 8),
        j = S.loadUint(w * 8),
        E = S.loadUint(A * 8),
        R = S.loadBuffer(p * A),
        V = S.loadBuffer(E),
        D = S.loadBuffer(4);
      if (!(0, l.crc32c)(B.subarray(0, B.length - 4)).equals(D)) throw Error("Invalid CRC32C");
      return {
        size: w,
        offBytes: A,
        cells: p,
        roots: U,
        absent: j,
        totalCellSize: E,
        index: R,
        cellData: V,
        root: [0]
      }
    } else if (y === 3052313714) {
      let w = S.loadUint(1),
        A = S.loadUint(1);
      S.loadUint(1), S.loadUint(2);
      let p = S.loadUint(3),
        U = S.loadUint(8),
        j = S.loadUint(p * 8),
        E = S.loadUint(p * 8),
        R = S.loadUint(p * 8),
        V = S.loadUint(U * 8),
        D = [];
      for (let M = 0; M < E; M++) D.push(S.loadUint(p * 8));
      let b = null;
      w && (b = S.loadBuffer(j * U));
      let h = S.loadBuffer(V);
      if (A) {
        let M = S.loadBuffer(4);
        if (!(0, l.crc32c)(B.subarray(0, B.length - 4)).equals(M)) throw Error("Invalid CRC32C")
      }
      return {
        size: p,
        offBytes: U,
        cells: j,
        roots: E,
        absent: R,
        totalCellSize: V,
        index: b,
        cellData: h,
        root: D
      }
    } else throw Error("Invalid magic")
  }
  be.parseBoc = m;

  function P(B) {
    let S = m(B),
      y = new e.BitReader(new t.BitString(S.cellData, 0, S.cellData.length * 8)),
      w = [];
    for (let p = 0; p < S.cells; p++) {
      let U = f(y, S.size);
      w.push({
        ...U,
        result: null
      })
    }
    for (let p = w.length - 1; p >= 0; p--) {
      if (w[p].result) throw Error("Impossible");
      let U = [];
      for (let j of w[p].refs) {
        if (!w[j].result) throw Error("Invalid BOC file");
        U.push(w[j].result)
      }
      w[p].result = new r.Cell({
        bits: w[p].bits,
        refs: U,
        exotic: w[p].exotic
      })
    }
    let A = [];
    for (let p = 0; p < S.root.length; p++) A.push(w[S.root[p]].result);
    return A
  }
  be.deserializeBoc = P;

  function g(B, S, y, w) {
    let A = (0, i.getRefsDescriptor)(B.refs, B.mask.value, B.type),
      p = (0, i.getBitsDescriptor)(B.bits);
    w.writeUint(A, 8), w.writeUint(p, 8), w.writeBuffer((0, s.bitsToPaddedBuffer)(B.bits));
    for (let U of S) w.writeUint(U, y * 8)
  }

  function _(B, S) {
    let y = (0, n.topologicalSort)(B),
      w = y.length,
      A = S.idx,
      p = S.crc32,
      U = !1,
      j = 0,
      E = Math.max(Math.ceil((0, o.bitsForNumber)(w, "uint") / 8), 1),
      R = 0,
      V = [];
    for (let x of y) {
      let O = k(x.cell, E);
      R += O, V.push(R)
    }
    let D = Math.max(Math.ceil((0, o.bitsForNumber)(R, "uint") / 8), 1),
      b = (6 + 3 * E + D + 1 * E + (A ? w * D : 0) + R + (p ? 4 : 0)) * 8,
      h = new a.BitBuilder(b);
    if (h.writeUint(3052313714, 32), h.writeBit(A), h.writeBit(p), h.writeBit(U), h.writeUint(j, 2), h.writeUint(E, 3), h.writeUint(D, 8), h.writeUint(w, E * 8), h.writeUint(1, E * 8), h.writeUint(0, E * 8), h.writeUint(R, D * 8), h.writeUint(0, E * 8), A)
      for (let x = 0; x < w; x++) h.writeUint(V[x], D * 8);
    for (let x = 0; x < w; x++) g(y[x].cell, y[x].refs, E, h);
    if (p) {
      let x = (0, l.crc32c)(h.buffer());
      h.writeBuffer(x)
    }
    let M = h.buffer();
    if (M.length !== b / 8) throw Error("Internal error");
    return M
  }
  return be.serializeBoc = _, be
}
var Ra;

function yt() {
  if (Ra) return Ot;
  Ra = 1;
  var e = I && I.__importDefault || function(k) {
      return k && k.__esModule ? k : {
        default: k
      }
    },
    t;
  Object.defineProperty(Ot, "__esModule", {
    value: !0
  }), Ot.Cell = void 0;
  const r = e(At),
    n = Te(),
    o = je,
    a = Wn(),
    i = Ks(),
    s = Ql(),
    l = Zl(),
    c = de,
    u = W();
  let f = class $i {
    static fromBoc(m) {
      return (0, l.deserializeBoc)(m)
    }
    static fromBase64(m) {
      let P = $i.fromBoc(v.from(m, "base64"));
      if (P.length !== 1) throw new Error("Deserialized more than one cell");
      return P[0]
    }
    constructor(m) {
      this._hashes = [], this._depths = [], this.beginParse = (w = !1) => {
        if (this.isExotic && !w) throw new Error("Exotic cells cannot be parsed");
        return new a.Slice(new c.BitReader(this.bits), this.refs)
      }, this.hash = (w = 3) => this._hashes[Math.min(this._hashes.length - 1, w)], this.depth = (w = 3) => this._depths[Math.min(this._depths.length - 1, w)], this.level = () => this.mask.level, this.equals = w => this.hash().equals(w.hash()), this[t] = () => this.toString();
      let P = n.BitString.EMPTY;
      m && m.bits && (P = m.bits);
      let g = [];
      m && m.refs && (g = [...m.refs]);
      let _, B, S, y = o.CellType.Ordinary;
      if (m && m.exotic) {
        let w = (0, i.resolveExotic)(P, g),
          A = (0, s.wonderCalculator)(w.type, P, g);
        S = A.mask, B = A.depths, _ = A.hashes, y = w.type
      } else {
        if (g.length > 4) throw new Error("Invalid number of references");
        if (P.length > 1023) throw new Error(`Bits overflow: ${P.length} > 1023`);
        let w = (0, s.wonderCalculator)(o.CellType.Ordinary, P, g);
        S = w.mask, B = w.depths, _ = w.hashes, y = o.CellType.Ordinary
      }
      this.type = y, this.bits = P, this.refs = g, this.mask = S, this._depths = B, this._hashes = _, Object.freeze(this), Object.freeze(this.refs), Object.freeze(this.bits), Object.freeze(this.mask), Object.freeze(this._depths), Object.freeze(this._hashes)
    }
    get isExotic() {
      return this.type !== o.CellType.Ordinary
    }
    toBoc(m) {
      let P = m && m.idx !== null && m.idx !== void 0 ? m.idx : !1,
        g = m && m.crc32 !== null && m.crc32 !== void 0 ? m.crc32 : !0;
      return (0, l.serializeBoc)(this, {
        idx: P,
        crc32: g
      })
    }
    toString(m) {
      let P = m || "",
        g = "x";
      this.isExotic && (this.type === o.CellType.MerkleProof ? g = "p" : this.type === o.CellType.MerkleUpdate ? g = "u" : this.type === o.CellType.PrunedBranch && (g = "p"));
      let _ = P + (this.isExotic ? g : "x") + "{" + this.bits.toString() + "}";
      for (let B in this.refs) {
        const S = this.refs[B];
        _ += `
` + S.toString(P + " ")
      }
      return _
    }
    asSlice() {
      return this.beginParse()
    }
    asBuilder() {
      return (0, u.beginCell)().storeSlice(this.asSlice())
    }
  };
  return Ot.Cell = f, t = r.default, f.EMPTY = new f, Ot
}
var Oa;

function W() {
  if (Oa) return Re;
  Oa = 1, Object.defineProperty(Re, "__esModule", {
    value: !0
  }), Re.Builder = Re.beginCell = void 0;
  const e = Mr(),
    t = yt(),
    r = vi();

  function n() {
    return new o
  }
  Re.beginCell = n;
  let o = class Wi {
    constructor() {
      this._bits = new e.BitBuilder, this._refs = []
    }
    get bits() {
      return this._bits.length
    }
    get refs() {
      return this._refs.length
    }
    get availableBits() {
      return 1023 - this.bits
    }
    get availableRefs() {
      return 4 - this.refs
    }
    storeBit(i) {
      return this._bits.writeBit(i), this
    }
    storeBits(i) {
      return this._bits.writeBits(i), this
    }
    storeBuffer(i, s) {
      if (s != null && i.length !== s) throw Error(`Buffer length ${i.length} is not equal to ${s}`);
      return this._bits.writeBuffer(i), this
    }
    storeMaybeBuffer(i, s) {
      return i !== null ? (this.storeBit(1), this.storeBuffer(i, s)) : this.storeBit(0), this
    }
    storeUint(i, s) {
      return this._bits.writeUint(i, s), this
    }
    storeMaybeUint(i, s) {
      return i != null ? (this.storeBit(1), this.storeUint(i, s)) : this.storeBit(0), this
    }
    storeInt(i, s) {
      return this._bits.writeInt(i, s), this
    }
    storeMaybeInt(i, s) {
      return i != null ? (this.storeBit(1), this.storeInt(i, s)) : this.storeBit(0), this
    }
    storeVarUint(i, s) {
      return this._bits.writeVarUint(i, s), this
    }
    storeMaybeVarUint(i, s) {
      return i != null ? (this.storeBit(1), this.storeVarUint(i, s)) : this.storeBit(0), this
    }
    storeVarInt(i, s) {
      return this._bits.writeVarInt(i, s), this
    }
    storeMaybeVarInt(i, s) {
      return i != null ? (this.storeBit(1), this.storeVarInt(i, s)) : this.storeBit(0), this
    }
    storeCoins(i) {
      return this._bits.writeCoins(i), this
    }
    storeMaybeCoins(i) {
      return i != null ? (this.storeBit(1), this.storeCoins(i)) : this.storeBit(0), this
    }
    storeAddress(i) {
      return this._bits.writeAddress(i), this
    }
    storeRef(i) {
      if (this._refs.length >= 4) throw new Error("Too many references");
      if (i instanceof t.Cell) this._refs.push(i);
      else if (i instanceof Wi) this._refs.push(i.endCell());
      else throw new Error("Invalid argument");
      return this
    }
    storeMaybeRef(i) {
      return i ? (this.storeBit(1), this.storeRef(i)) : this.storeBit(0), this
    }
    storeSlice(i) {
      let s = i.clone();
      for (s.remainingBits > 0 && this.storeBits(s.loadBits(s.remainingBits)); s.remainingRefs > 0;) this.storeRef(s.loadRef());
      return this
    }
    storeMaybeSlice(i) {
      return i ? (this.storeBit(1), this.storeSlice(i)) : this.storeBit(0), this
    }
    storeBuilder(i) {
      return this.storeSlice(i.endCell().beginParse())
    }
    storeMaybeBuilder(i) {
      return i ? (this.storeBit(1), this.storeBuilder(i)) : this.storeBit(0), this
    }
    storeWritable(i) {
      return typeof i == "object" ? i.writeTo(this) : i(this), this
    }
    storeMaybeWritable(i) {
      return i ? (this.storeBit(1), this.storeWritable(i)) : this.storeBit(0), this
    }
    store(i) {
      return this.storeWritable(i), this
    }
    storeStringTail(i) {
      return (0, r.writeString)(i, this), this
    }
    storeMaybeStringTail(i) {
      return i != null ? (this.storeBit(1), (0, r.writeString)(i, this)) : this.storeBit(0), this
    }
    storeStringRefTail(i) {
      return this.storeRef(n().storeStringTail(i)), this
    }
    storeMaybeStringRefTail(i) {
      return i != null ? (this.storeBit(1), this.storeStringRefTail(i)) : this.storeBit(0), this
    }
    storeDict(i, s, l) {
      return i ? i.store(this, s, l) : this.storeBit(0), this
    }
    storeDictDirect(i, s, l) {
      return i.storeDirect(this, s, l), this
    }
    endCell(i) {
      return new t.Cell({
        bits: this._bits.build(),
        refs: this._refs,
        exotic: i == null ? void 0 : i.exotic
      })
    }
    asCell() {
      return this.endCell()
    }
    asSlice() {
      return this.endCell().beginParse()
    }
  };
  return Re.Builder = o, Re
}
var he = {},
  we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.SimpleLibraryValue = we.storeSimpleLibrary = we.loadSimpleLibrary = void 0;

function Fi(e) {
  return {
    public: e.loadBit(),
    root: e.loadRef()
  }
}
we.loadSimpleLibrary = Fi;

function Ki(e) {
  return t => {
    t.storeBit(e.public), t.storeRef(e.root)
  }
}
we.storeSimpleLibrary = Ki;
we.SimpleLibraryValue = {
  serialize(e, t) {
    Ki(e)(t)
  },
  parse(e) {
    return Fi(e)
  }
};
var Fe = {};
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.storeTickTock = Fe.loadTickTock = void 0;

function ed(e) {
  return {
    tick: e.loadBit(),
    tock: e.loadBit()
  }
}
Fe.loadTickTock = ed;

function td(e) {
  return t => {
    t.storeBit(e.tick), t.storeBit(e.tock)
  }
}
Fe.storeTickTock = td;
Object.defineProperty(he, "__esModule", {
  value: !0
});
he.storeStateInit = he.loadStateInit = void 0;
const rd = mt(),
  nd = we,
  Hi = Fe;

function ad(e) {
  let t;
  e.loadBit() && (t = e.loadUint(5));
  let r;
  e.loadBit() && (r = (0, Hi.loadTickTock)(e));
  let n = e.loadMaybeRef(),
    o = e.loadMaybeRef(),
    a = e.loadDict(rd.Dictionary.Keys.BigUint(256), nd.SimpleLibraryValue);
  return a.size === 0 && (a = void 0), {
    splitDepth: t,
    special: r,
    code: n,
    data: o,
    libraries: a
  }
}
he.loadStateInit = ad;

function id(e) {
  return t => {
    e.splitDepth !== null && e.splitDepth !== void 0 ? (t.storeBit(!0), t.storeUint(e.splitDepth, 5)) : t.storeBit(!1), e.special !== null && e.special !== void 0 ? (t.storeBit(!0), t.store((0, Hi.storeTickTock)(e.special))) : t.storeBit(!1), t.storeMaybeRef(e.code), t.storeMaybeRef(e.data), t.storeDict(e.libraries)
  }
}
he.storeStateInit = id;
Object.defineProperty(Pr, "__esModule", {
  value: !0
});
Pr.contractAddress = void 0;
const od = W(),
  sd = he,
  ld = ae;

function dd(e, t) {
  let r = (0, od.beginCell)().store((0, sd.storeStateInit)(t)).endCell().hash();
  return new ld.Address(e, r)
}
Pr.contractAddress = dd;
var St = {};
Object.defineProperty(St, "__esModule", {
  value: !0
});
St.parseTuple = St.serializeTuple = void 0;
const ar = W(),
  cd = BigInt("-9223372036854775808"),
  ud = BigInt("9223372036854775807");

function Gi(e, t) {
  if (e.type === "null") t.storeUint(0, 8);
  else if (e.type === "int") e.value <= ud && e.value >= cd ? (t.storeUint(1, 8), t.storeInt(e.value, 64)) : (t.storeUint(256, 15), t.storeInt(e.value, 257));
  else if (e.type === "nan") t.storeInt(767, 16);
  else if (e.type === "cell") t.storeUint(3, 8), t.storeRef(e.cell);
  else if (e.type === "slice") t.storeUint(4, 8), t.storeUint(0, 10), t.storeUint(e.cell.bits.length, 10), t.storeUint(0, 3), t.storeUint(e.cell.refs.length, 3), t.storeRef(e.cell);
  else if (e.type === "builder") t.storeUint(5, 8), t.storeRef(e.cell);
  else if (e.type === "tuple") {
    let r = null,
      n = null;
    for (let o = 0; o < e.items.length; o++) {
      let a = r;
      r = n, n = a, o > 1 && (r = (0, ar.beginCell)().storeRef(n).storeRef(r).endCell());
      let i = (0, ar.beginCell)();
      Gi(e.items[o], i), n = i.endCell()
    }
    t.storeUint(7, 8), t.storeUint(e.items.length, 16), r && t.storeRef(r), n && t.storeRef(n)
  } else throw Error("Invalid value")
}

function tr(e) {
  let t = e.loadUint(8);
  if (t === 0) return {
    type: "null"
  };
  if (t === 1) return {
    type: "int",
    value: e.loadIntBig(64)
  };
  if (t === 2) return e.loadUint(7) === 0 ? {
    type: "int",
    value: e.loadIntBig(257)
  } : (e.loadBit(), {
    type: "nan"
  });
  if (t === 3) return {
    type: "cell",
    cell: e.loadRef()
  };
  if (t === 4) {
    let r = e.loadUint(10),
      n = e.loadUint(10),
      o = e.loadUint(3),
      a = e.loadUint(3),
      i = e.loadRef().beginParse();
    i.skip(r);
    let s = i.loadBits(n - r),
      l = (0, ar.beginCell)().storeBits(s);
    if (o < a) {
      for (let c = 0; c < o; c++) i.loadRef();
      for (let c = 0; c < a - o; c++) l.storeRef(i.loadRef())
    }
    return {
      type: "slice",
      cell: l.endCell()
    }
  } else {
    if (t === 5) return {
      type: "builder",
      cell: e.loadRef()
    };
    if (t === 7) {
      let r = e.loadUint(16),
        n = [];
      if (r > 1) {
        let o = e.loadRef().beginParse(),
          a = e.loadRef().beginParse();
        n.unshift(tr(a));
        for (let i = 0; i < r - 2; i++) {
          let s = o;
          o = s.loadRef().beginParse(), a = s.loadRef().beginParse(), n.unshift(tr(a))
        }
        n.unshift(tr(o))
      } else r === 1 && n.push(tr(e.loadRef().beginParse()));
      return {
        type: "tuple",
        items: n
      }
    } else throw Error("Unsupported stack item")
  }
}

function Qi(e, t) {
  if (e.length > 0) {
    let r = (0, ar.beginCell)();
    Qi(e.slice(0, e.length - 1), r), t.storeRef(r.endCell()), Gi(e[e.length - 1], t)
  }
}

function fd(e) {
  let t = (0, ar.beginCell)();
  t.storeUint(e.length, 24);
  let r = [...e];
  return Qi(r, t), t.endCell()
}
St.serializeTuple = fd;

function hd(e) {
  let t = [],
    r = e.beginParse(),
    n = r.loadUint(24);
  for (let o = 0; o < n; o++) {
    let a = r.loadRef();
    t.unshift(tr(r)), r = a.beginParse()
  }
  return t
}
St.parseTuple = hd;
var Nr = {};
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
Nr.TupleReader = void 0;
class vt {
  constructor(t) {
    this.items = [...t]
  }
  get remaining() {
    return this.items.length
  }
  peek() {
    if (this.items.length === 0) throw Error("EOF");
    return this.items[0]
  }
  pop() {
    if (this.items.length === 0) throw Error("EOF");
    let t = this.items[0];
    return this.items.splice(0, 1), t
  }
  skip(t = 1) {
    for (let r = 0; r < t; r++) this.pop();
    return this
  }
  readBigNumber() {
    let t = this.pop();
    if (t.type !== "int") throw Error("Not a number");
    return t.value
  }
  readBigNumberOpt() {
    let t = this.pop();
    if (t.type === "null") return null;
    if (t.type !== "int") throw Error("Not a number");
    return t.value
  }
  readNumber() {
    return Number(this.readBigNumber())
  }
  readNumberOpt() {
    let t = this.readBigNumberOpt();
    return t !== null ? Number(t) : null
  }
  readBoolean() {
    return this.readNumber() !== 0
  }
  readBooleanOpt() {
    let t = this.readNumberOpt();
    return t !== null ? t !== 0 : null
  }
  readAddress() {
    let t = this.readCell().beginParse().loadAddress();
    if (t !== null) return t;
    throw Error("Not an address")
  }
  readAddressOpt() {
    let t = this.readCellOpt();
    return t !== null ? t.beginParse().loadMaybeAddress() : null
  }
  readCell() {
    let t = this.pop();
    if (t.type !== "cell" && t.type !== "slice" && t.type !== "builder") throw Error("Not a cell: " + t.type);
    return t.cell
  }
  readCellOpt() {
    let t = this.pop();
    if (t.type === "null") return null;
    if (t.type !== "cell" && t.type !== "slice" && t.type !== "builder") throw Error("Not a cell");
    return t.cell
  }
  readTuple() {
    let t = this.pop();
    if (t.type !== "tuple") throw Error("Not a tuple");
    return new vt(t.items)
  }
  readTupleOpt() {
    let t = this.pop();
    if (t.type === "null") return null;
    if (t.type !== "tuple") throw Error("Not a tuple");
    return new vt(t.items)
  }
  static readLispList(t) {
    const r = [];
    let n = t;
    for (; n !== null;) {
      var o = n.pop();
      if (n.items.length === 0 || n.items[0].type !== "tuple" && n.items[0].type !== "null") throw Error("Lisp list consists only from (any, tuple) elements and ends with null");
      n = n.readTupleOpt(), r.push(o)
    }
    return r
  }
  readLispListDirect() {
    return this.items.length === 1 && this.items[0].type === "null" ? [] : vt.readLispList(this)
  }
  readLispList() {
    return vt.readLispList(this.readTupleOpt())
  }
  readBuffer() {
    let t = this.readCell().beginParse();
    if (t.remainingRefs !== 0 || t.remainingBits % 8 !== 0) throw Error("Not a buffer");
    return t.loadBuffer(t.remainingBits / 8)
  }
  readBufferOpt() {
    if (this.peek().type === "null") return null;
    let r = this.readCell().beginParse();
    if (r.remainingRefs !== 0 || r.remainingBits % 8 !== 0) throw Error("Not a buffer");
    return r.loadBuffer(r.remainingBits / 8)
  }
  readString() {
    return this.readCell().beginParse().loadStringTail()
  }
  readStringOpt() {
    return this.peek().type === "null" ? null : this.readCell().beginParse().loadStringTail()
  }
}
Nr.TupleReader = vt;
var $r = {};
Object.defineProperty($r, "__esModule", {
  value: !0
});
$r.TupleBuilder = void 0;
const mn = W(),
  bn = yt(),
  yn = Wn();
class gd {
  constructor() {
    this._tuple = []
  }
  writeNumber(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "int",
      value: BigInt(t)
    })
  }
  writeBoolean(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "int",
      value: t ? -1n : 0n
    })
  }
  writeBuffer(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "slice",
      cell: (0, mn.beginCell)().storeBuffer(t).endCell()
    })
  }
  writeString(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "slice",
      cell: (0, mn.beginCell)().storeStringTail(t).endCell()
    })
  }
  writeCell(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : t instanceof bn.Cell ? this._tuple.push({
      type: "cell",
      cell: t
    }) : t instanceof yn.Slice && this._tuple.push({
      type: "cell",
      cell: t.asCell()
    })
  }
  writeSlice(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : t instanceof bn.Cell ? this._tuple.push({
      type: "slice",
      cell: t
    }) : t instanceof yn.Slice && this._tuple.push({
      type: "slice",
      cell: t.asCell()
    })
  }
  writeBuilder(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : t instanceof bn.Cell ? this._tuple.push({
      type: "builder",
      cell: t
    }) : t instanceof yn.Slice && this._tuple.push({
      type: "builder",
      cell: t.asCell()
    })
  }
  writeTuple(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "tuple",
      items: t
    })
  }
  writeAddress(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "slice",
      cell: (0, mn.beginCell)().storeAddress(t).endCell()
    })
  }
  build() {
    return [...this._tuple]
  }
}
$r.TupleBuilder = gd;
var Yi = {},
  xe = {},
  Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.fromNano = Ke.toNano = void 0;

function pd(e) {
  if (typeof e == "bigint") return e * 1000000000n;
  {
    if (typeof e == "number") {
      if (!Number.isFinite(e)) throw Error("Invalid number");
      if (Math.log10(e) <= 6) e = e.toLocaleString("en", {
        minimumFractionDigits: 9,
        useGrouping: !1
      });
      else if (e - Math.trunc(e) === 0) e = e.toLocaleString("en", {
        maximumFractionDigits: 0,
        useGrouping: !1
      });
      else throw Error("Not enough precision for a number value. Use string value instead")
    }
    let t = !1;
    for (; e.startsWith("-");) t = !t, e = e.slice(1);
    if (e === ".") throw Error("Invalid number");
    let r = e.split(".");
    if (r.length > 2) throw Error("Invalid number");
    let n = r[0],
      o = r[1];
    if (n || (n = "0"), o || (o = "0"), o.length > 9) throw Error("Invalid number");
    for (; o.length < 9;) o += "0";
    let a = BigInt(n) * 1000000000n + BigInt(o);
    return t && (a = -a), a
  }
}
Ke.toNano = pd;

function md(e) {
  let t = BigInt(e),
    r = !1;
  t < 0 && (r = !0, t = -t);
  let o = (t % 1000000000n).toString();
  for (; o.length < 9;) o = "0" + o;
  o = o.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  let s = `${(t/1000000000n).toString()}${o==="0"?"":`.${o}`}`;
  return r && (s = "-" + s), s
}
Ke.fromNano = md;
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.comment = xe.external = xe.internal = void 0;
const kr = ae,
  Xi = yt(),
  Ji = W(),
  bd = Ke;

function yd(e) {
  let t = !0;
  e.bounce !== null && e.bounce !== void 0 && (t = e.bounce);
  let r;
  if (typeof e.to == "string") r = kr.Address.parse(e.to);
  else if (kr.Address.isAddress(e.to)) r = e.to;
  else throw new Error(`Invalid address ${e.to}`);
  let n;
  typeof e.value == "string" ? n = (0, bd.toNano)(e.value) : n = e.value;
  let o = Xi.Cell.EMPTY;
  return typeof e.body == "string" ? o = (0, Ji.beginCell)().storeUint(0, 32).storeStringTail(e.body).endCell() : e.body && (o = e.body), {
    info: {
      type: "internal",
      dest: r,
      value: {
        coins: n
      },
      bounce: t,
      ihrDisabled: !0,
      bounced: !1,
      ihrFee: 0n,
      forwardFee: 0n,
      createdAt: 0,
      createdLt: 0n
    },
    init: e.init ?? void 0,
    body: o
  }
}
xe.internal = yd;

function wd(e) {
  let t;
  if (typeof e.to == "string") t = kr.Address.parse(e.to);
  else if (kr.Address.isAddress(e.to)) t = e.to;
  else throw new Error(`Invalid address ${e.to}`);
  return {
    info: {
      type: "external-in",
      dest: t,
      importFee: 0n
    },
    init: e.init ?? void 0,
    body: e.body || Xi.Cell.EMPTY
  }
}
xe.external = wd;

function vd(e) {
  return (0, Ji.beginCell)().storeUint(0, 32).storeStringTail(e).endCell()
}
xe.comment = vd;
var He = {},
  Ge = {},
  Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.storeAccountState = Qe.loadAccountState = void 0;
const Zi = he;

function kd(e) {
  return e.loadBit() ? {
    type: "active",
    state: (0, Zi.loadStateInit)(e)
  } : e.loadBit() ? {
    type: "frozen",
    stateHash: e.loadUintBig(256)
  } : {
    type: "uninit"
  }
}
Qe.loadAccountState = kd;

function _d(e) {
  return t => {
    e.type === "active" ? (t.storeBit(!0), t.store((0, Zi.storeStateInit)(e.state))) : e.type === "frozen" ? (t.storeBit(!1), t.storeBit(!0), t.storeUint(e.stateHash, 256)) : e.type === "uninit" && (t.storeBit(!1), t.storeBit(!1))
  }
}
Qe.storeAccountState = _d;
var ne = {};
Object.defineProperty(ne, "__esModule", {
  value: !0
});
ne.storeCurrencyCollection = ne.loadCurrencyCollection = void 0;
const Da = mt();

function Bd(e) {
  const t = e.loadCoins(),
    r = e.loadDict(Da.Dictionary.Keys.Uint(32), Da.Dictionary.Values.BigVarUint(5));
  return r.size === 0 ? {
    coins: t
  } : {
    other: r,
    coins: t
  }
}
ne.loadCurrencyCollection = Bd;

function Sd(e) {
  return t => {
    t.storeCoins(e.coins), e.other ? t.storeDict(e.other) : t.storeBit(0)
  }
}
ne.storeCurrencyCollection = Sd;
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.storeAccountStorage = Ge.loadAccountStorage = void 0;
const eo = Qe,
  to = ne;

function Cd(e) {
  return {
    lastTransLt: e.loadUintBig(64),
    balance: (0, to.loadCurrencyCollection)(e),
    state: (0, eo.loadAccountState)(e)
  }
}
Ge.loadAccountStorage = Cd;

function Pd(e) {
  return t => {
    t.storeUint(e.lastTransLt, 64), t.store((0, to.storeCurrencyCollection)(e.balance)), t.store((0, eo.storeAccountState)(e.state))
  }
}
Ge.storeAccountStorage = Pd;
var Ye = {},
  Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.storeStorageUsed = Xe.loadStorageUsed = void 0;

function Ad(e) {
  return {
    cells: e.loadVarUintBig(3),
    bits: e.loadVarUintBig(3),
    publicCells: e.loadVarUintBig(3)
  }
}
Xe.loadStorageUsed = Ad;

function Md(e) {
  return t => {
    t.storeVarUint(e.cells, 3), t.storeVarUint(e.bits, 3), t.storeVarUint(e.publicCells, 3)
  }
}
Xe.storeStorageUsed = Md;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.storeStorageInfo = Ye.loadStorageInfo = void 0;
const ro = Xe;

function Ud(e) {
  return {
    used: (0, ro.loadStorageUsed)(e),
    lastPaid: e.loadUint(32),
    duePayment: e.loadMaybeCoins()
  }
}
Ye.loadStorageInfo = Ud;

function zd(e) {
  return t => {
    t.store((0, ro.storeStorageUsed)(e.used)), t.storeUint(e.lastPaid, 32), t.storeMaybeCoins(e.duePayment)
  }
}
Ye.storeStorageInfo = zd;
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.storeAccount = He.loadAccount = void 0;
const no = Ge,
  ao = Ye;

function xd(e) {
  return {
    addr: e.loadAddress(),
    storageStats: (0, ao.loadStorageInfo)(e),
    storage: (0, no.loadAccountStorage)(e)
  }
}
He.loadAccount = xd;

function Id(e) {
  return t => {
    t.storeAddress(e.addr), t.store((0, ao.storeStorageInfo)(e.storageStats)), t.store((0, no.storeAccountStorage)(e.storage))
  }
}
He.storeAccount = Id;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.storeAccountStatus = Je.loadAccountStatus = void 0;

function Ed(e) {
  const t = e.loadUint(2);
  if (t === 0) return "uninitialized";
  if (t === 1) return "frozen";
  if (t === 2) return "active";
  if (t === 3) return "non-existing";
  throw Error("Invalid data")
}
Je.loadAccountStatus = Ed;

function Td(e) {
  return t => {
    if (e === "uninitialized") t.storeUint(0, 2);
    else if (e === "frozen") t.storeUint(1, 2);
    else if (e === "active") t.storeUint(2, 2);
    else if (e === "non-existing") t.storeUint(3, 2);
    else throw Error("Invalid data");
    return t
  }
}
Je.storeAccountStatus = Td;
var Ie = {};
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.storeAccountStatusChange = Ie.loadAccountStatusChange = void 0;

function jd(e) {
  return e.loadBit() ? e.loadBit() ? "deleted" : "frozen" : "unchanged"
}
Ie.loadAccountStatusChange = jd;

function Rd(e) {
  return t => {
    if (e == "unchanged") t.storeBit(0);
    else if (e === "frozen") t.storeBit(1), t.storeBit(0);
    else if (e === "deleted") t.storeBit(1), t.storeBit(1);
    else throw Error("Invalid account status change")
  }
}
Ie.storeAccountStatusChange = Rd;
var ce = {},
  Ze = {},
  et = {};
Object.defineProperty(et, "__esModule", {
  value: !0
});
et.storeCommonMessageInfoRelaxed = et.loadCommonMessageInfoRelaxed = void 0;
const io = ne;

function Od(e) {
  if (!e.loadBit()) {
    const a = e.loadBit(),
      i = e.loadBit(),
      s = e.loadBit(),
      l = e.loadMaybeAddress(),
      c = e.loadAddress(),
      u = (0, io.loadCurrencyCollection)(e),
      f = e.loadCoins(),
      k = e.loadCoins(),
      m = e.loadUintBig(64),
      P = e.loadUint(32);
    return {
      type: "internal",
      ihrDisabled: a,
      bounce: i,
      bounced: s,
      src: l,
      dest: c,
      value: u,
      ihrFee: f,
      forwardFee: k,
      createdLt: m,
      createdAt: P
    }
  }
  if (!e.loadBit()) throw Error("External In message is not possible for CommonMessageInfoRelaxed");
  const t = e.loadMaybeAddress(),
    r = e.loadMaybeExternalAddress(),
    n = e.loadUintBig(64),
    o = e.loadUint(32);
  return {
    type: "external-out",
    src: t,
    dest: r,
    createdLt: n,
    createdAt: o
  }
}
et.loadCommonMessageInfoRelaxed = Od;

function Dd(e) {
  return t => {
    if (e.type === "internal") t.storeBit(0), t.storeBit(e.ihrDisabled), t.storeBit(e.bounce), t.storeBit(e.bounced), t.storeAddress(e.src), t.storeAddress(e.dest), t.store((0, io.storeCurrencyCollection)(e.value)), t.storeCoins(e.ihrFee), t.storeCoins(e.forwardFee), t.storeUint(e.createdLt, 64), t.storeUint(e.createdAt, 32);
    else if (e.type === "external-out") t.storeBit(1), t.storeBit(1), t.storeAddress(e.src), t.storeAddress(e.dest), t.storeUint(e.createdLt, 64), t.storeUint(e.createdAt, 32);
    else throw new Error("Unknown CommonMessageInfo type")
  }
}
et.storeCommonMessageInfoRelaxed = Dd;
Object.defineProperty(Ze, "__esModule", {
  value: !0
});
Ze.storeMessageRelaxed = Ze.loadMessageRelaxed = void 0;
const Vd = W(),
  oo = et,
  zn = he;

function Ld(e) {
  const t = (0, oo.loadCommonMessageInfoRelaxed)(e);
  let r = null;
  e.loadBit() && (e.loadBit() ? r = (0, zn.loadStateInit)(e.loadRef().beginParse()) : r = (0, zn.loadStateInit)(e));
  const n = e.loadBit() ? e.loadRef() : e.asCell();
  return {
    info: t,
    init: r,
    body: n
  }
}
Ze.loadMessageRelaxed = Ld;

function qd(e, t) {
  return r => {
    if (r.store((0, oo.storeCommonMessageInfoRelaxed)(e.info)), e.init) {
      r.storeBit(!0);
      let o = (0, Vd.beginCell)().store((0, zn.storeStateInit)(e.init)),
        a = !1;
      t && t.forceRef ? a = !0 : r.availableBits - 2 >= o.bits ? a = !1 : a = !0, a ? (r.storeBit(!0), r.storeRef(o)) : (r.storeBit(!1), r.storeBuilder(o))
    } else r.storeBit(!1);
    let n = !1;
    t && t.forceRef ? n = !0 : r.availableBits - 1 >= e.body.bits.length && r.refs + e.body.refs.length <= 4 && !e.body.isExotic ? n = !1 : n = !0, n ? (r.storeBit(!0), r.storeRef(e.body)) : (r.storeBit(!1), r.storeBuilder(e.body.asBuilder()))
  }
}
Ze.storeMessageRelaxed = qd;
var tt = {};
Object.defineProperty(tt, "__esModule", {
  value: !0
});
tt.storeLibRef = tt.loadLibRef = void 0;

function Nd(e) {
  return e.loadUint(1) === 0 ? {
    type: "hash",
    libHash: e.loadBuffer(32)
  } : {
    type: "ref",
    library: e.loadRef()
  }
}
tt.loadLibRef = Nd;

function $d(e) {
  return t => {
    e.type === "hash" ? (t.storeUint(0, 1), t.storeBuffer(e.libHash)) : (t.storeUint(1, 1), t.storeRef(e.library))
  }
}
tt.storeLibRef = $d;
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.loadOutList = ce.storeOutList = ce.loadOutAction = ce.storeOutAction = void 0;
const so = Ze,
  xn = W(),
  lo = ne,
  co = tt;

function uo(e) {
  switch (e.type) {
    case "sendMsg":
      return Wd(e);
    case "setCode":
      return Fd(e);
    case "reserve":
      return Kd(e);
    case "changeLibrary":
      return Hd(e);
    default:
      throw new Error(`Unknown action type ${e.type}`)
  }
}
ce.storeOutAction = uo;
const fo = 247711853;

function Wd(e) {
  return t => {
    t.storeUint(fo, 32).storeUint(e.mode, 8).storeRef((0, xn.beginCell)().store((0, so.storeMessageRelaxed)(e.outMsg)).endCell())
  }
}
const ho = 2907562126;

function Fd(e) {
  return t => {
    t.storeUint(ho, 32).storeRef(e.newCode)
  }
}
const go = 921090057;

function Kd(e) {
  return t => {
    t.storeUint(go, 32).storeUint(e.mode, 8).store((0, lo.storeCurrencyCollection)(e.currency))
  }
}
const po = 653925844;

function Hd(e) {
  return t => {
    t.storeUint(po, 32).storeUint(e.mode, 7).store((0, co.storeLibRef)(e.libRef))
  }
}

function mo(e) {
  const t = e.loadUint(32);
  if (t === fo) {
    const r = e.loadUint(8),
      n = (0, so.loadMessageRelaxed)(e.loadRef().beginParse());
    return {
      type: "sendMsg",
      mode: r,
      outMsg: n
    }
  }
  if (t === ho) return {
    type: "setCode",
    newCode: e.loadRef()
  };
  if (t === go) {
    const r = e.loadUint(8),
      n = (0, lo.loadCurrencyCollection)(e);
    return {
      type: "reserve",
      mode: r,
      currency: n
    }
  }
  if (t === po) {
    const r = e.loadUint(7),
      n = (0, co.loadLibRef)(e);
    return {
      type: "changeLibrary",
      mode: r,
      libRef: n
    }
  }
  throw new Error(`Unknown out action tag 0x${t.toString(16)}`)
}
ce.loadOutAction = mo;

function Gd(e) {
  const t = e.reduce((r, n) => (0, xn.beginCell)().storeRef(r).store(uo(n)).endCell(), (0, xn.beginCell)().endCell());
  return r => {
    r.storeSlice(t.beginParse())
  }
}
ce.storeOutList = Gd;

function Qd(e) {
  const t = [];
  for (; e.remainingRefs;) {
    const r = e.loadRef();
    t.push(mo(e)), e = r.beginParse()
  }
  return t.reverse()
}
ce.loadOutList = Qd;
var rt = {};
Object.defineProperty(rt, "__esModule", {
  value: !0
});
rt.storeCommonMessageInfo = rt.loadCommonMessageInfo = void 0;
const bo = ne;

function Yd(e) {
  if (!e.loadBit()) {
    const a = e.loadBit(),
      i = e.loadBit(),
      s = e.loadBit(),
      l = e.loadAddress(),
      c = e.loadAddress(),
      u = (0, bo.loadCurrencyCollection)(e),
      f = e.loadCoins(),
      k = e.loadCoins(),
      m = e.loadUintBig(64),
      P = e.loadUint(32);
    return {
      type: "internal",
      ihrDisabled: a,
      bounce: i,
      bounced: s,
      src: l,
      dest: c,
      value: u,
      ihrFee: f,
      forwardFee: k,
      createdLt: m,
      createdAt: P
    }
  }
  if (!e.loadBit()) {
    const a = e.loadMaybeExternalAddress(),
      i = e.loadAddress(),
      s = e.loadCoins();
    return {
      type: "external-in",
      src: a,
      dest: i,
      importFee: s
    }
  }
  const t = e.loadAddress(),
    r = e.loadMaybeExternalAddress(),
    n = e.loadUintBig(64),
    o = e.loadUint(32);
  return {
    type: "external-out",
    src: t,
    dest: r,
    createdLt: n,
    createdAt: o
  }
}
rt.loadCommonMessageInfo = Yd;

function Xd(e) {
  return t => {
    if (e.type === "internal") t.storeBit(0), t.storeBit(e.ihrDisabled), t.storeBit(e.bounce), t.storeBit(e.bounced), t.storeAddress(e.src), t.storeAddress(e.dest), t.store((0, bo.storeCurrencyCollection)(e.value)), t.storeCoins(e.ihrFee), t.storeCoins(e.forwardFee), t.storeUint(e.createdLt, 64), t.storeUint(e.createdAt, 32);
    else if (e.type === "external-in") t.storeBit(1), t.storeBit(0), t.storeAddress(e.src), t.storeAddress(e.dest), t.storeCoins(e.importFee);
    else if (e.type === "external-out") t.storeBit(1), t.storeBit(1), t.storeAddress(e.src), t.storeAddress(e.dest), t.storeUint(e.createdLt, 64), t.storeUint(e.createdAt, 32);
    else throw new Error("Unknown CommonMessageInfo type")
  }
}
rt.storeCommonMessageInfo = Xd;
var nt = {};
Object.defineProperty(nt, "__esModule", {
  value: !0
});
nt.storeComputeSkipReason = nt.loadComputeSkipReason = void 0;

function Jd(e) {
  let t = e.loadUint(2);
  if (t === 0) return "no-state";
  if (t === 1) return "bad-state";
  if (t === 2) return "no-gas";
  throw new Error(`Unknown ComputeSkipReason: ${t}`)
}
nt.loadComputeSkipReason = Jd;

function Zd(e) {
  return t => {
    if (e === "no-state") t.storeUint(0, 2);
    else if (e === "bad-state") t.storeUint(1, 2);
    else if (e === "no-gas") t.storeUint(2, 2);
    else throw new Error(`Unknown ComputeSkipReason: ${e}`)
  }
}
nt.storeComputeSkipReason = Zd;
var at = {};
Object.defineProperty(at, "__esModule", {
  value: !0
});
at.storeDepthBalanceInfo = at.loadDepthBalanceInfo = void 0;
const yo = ne;

function ec(e) {
  return {
    splitDepth: e.loadUint(5),
    balance: (0, yo.loadCurrencyCollection)(e)
  }
}
at.loadDepthBalanceInfo = ec;

function tc(e) {
  return t => {
    t.storeUint(e.splitDepth, 5), t.store((0, yo.storeCurrencyCollection)(e.balance))
  }
}
at.storeDepthBalanceInfo = tc;
var it = {};
Object.defineProperty(it, "__esModule", {
  value: !0
});
it.storeHashUpdate = it.loadHashUpdate = void 0;

function rc(e) {
  if (e.loadUint(8) !== 114) throw Error("Invalid data");
  const t = e.loadBuffer(32),
    r = e.loadBuffer(32);
  return {
    oldHash: t,
    newHash: r
  }
}
it.loadHashUpdate = rc;

function nc(e) {
  return t => {
    t.storeUint(114, 8), t.storeBuffer(e.oldHash), t.storeBuffer(e.newHash)
  }
}
it.storeHashUpdate = nc;
var ur = {};
Object.defineProperty(ur, "__esModule", {
  value: !0
});
ur.loadMasterchainStateExtra = void 0;
const wn = mt(),
  ac = ne;

function ic(e) {
  if (e.loadUint(16) !== 52262) throw Error("Invalid data");
  e.loadBit() && e.loadRef();
  let t = e.loadUintBig(256),
    r = wn.Dictionary.load(wn.Dictionary.Keys.Int(32), wn.Dictionary.Values.Cell(), e);
  const n = (0, ac.loadCurrencyCollection)(e);
  return {
    config: r,
    configAddress: t,
    globalBalance: n
  }
}
ur.loadMasterchainStateExtra = ic;
var ve = {};
Object.defineProperty(ve, "__esModule", {
  value: !0
});
ve.MessageValue = ve.storeMessage = ve.loadMessage = void 0;
const wo = W(),
  vo = rt,
  In = he;

function ko(e) {
  const t = (0, vo.loadCommonMessageInfo)(e);
  let r = null;
  e.loadBit() && (e.loadBit() ? r = (0, In.loadStateInit)(e.loadRef().beginParse()) : r = (0, In.loadStateInit)(e));
  const n = e.loadBit() ? e.loadRef() : e.asCell();
  return {
    info: t,
    init: r,
    body: n
  }
}
ve.loadMessage = ko;

function _o(e, t) {
  return r => {
    if (r.store((0, vo.storeCommonMessageInfo)(e.info)), e.init) {
      r.storeBit(!0);
      let o = (0, wo.beginCell)().store((0, In.storeStateInit)(e.init)),
        a = !1;
      t && t.forceRef ? a = !0 : a = r.availableBits - 2 < o.bits + e.body.bits.length, a ? (r.storeBit(!0), r.storeRef(o)) : (r.storeBit(!1), r.storeBuilder(o))
    } else r.storeBit(!1);
    let n = !1;
    t && t.forceRef ? n = !0 : n = r.availableBits - 1 < e.body.bits.length || r.refs + e.body.refs.length > 4, n ? (r.storeBit(!0), r.storeRef(e.body)) : (r.storeBit(!1), r.storeBuilder(e.body.asBuilder()))
  }
}
ve.storeMessage = _o;
ve.MessageValue = {
  serialize(e, t) {
    t.storeRef((0, wo.beginCell)().store(_o(e)))
  },
  parse(e) {
    return ko(e.loadRef().beginParse())
  }
};
var Wr = {};
Object.defineProperty(Wr, "__esModule", {
  value: !0
});
Wr.SendMode = void 0;
var Va;
(function(e) {
  e[e.CARRY_ALL_REMAINING_BALANCE = 128] = "CARRY_ALL_REMAINING_BALANCE", e[e.CARRY_ALL_REMAINING_INCOMING_VALUE = 64] = "CARRY_ALL_REMAINING_INCOMING_VALUE", e[e.DESTROY_ACCOUNT_IF_ZERO = 32] = "DESTROY_ACCOUNT_IF_ZERO", e[e.PAY_GAS_SEPARATELY = 1] = "PAY_GAS_SEPARATELY", e[e.IGNORE_ERRORS = 2] = "IGNORE_ERRORS", e[e.NONE = 0] = "NONE"
})(Va || (Wr.SendMode = Va = {}));
var Fr = {};
Object.defineProperty(Fr, "__esModule", {
  value: !0
});
Fr.ReserveMode = void 0;
var La;
(function(e) {
  e[e.THIS_AMOUNT = 0] = "THIS_AMOUNT", e[e.LEAVE_THIS_AMOUNT = 1] = "LEAVE_THIS_AMOUNT", e[e.AT_MOST_THIS_AMOUNT = 2] = "AT_MOST_THIS_AMOUNT", e[e.LEAVE_MAX_THIS_AMOUNT = 3] = "LEAVE_MAX_THIS_AMOUNT", e[e.BEFORE_BALANCE_PLUS_THIS_AMOUNT = 4] = "BEFORE_BALANCE_PLUS_THIS_AMOUNT", e[e.LEAVE_BBALANCE_PLUS_THIS_AMOUNT = 5] = "LEAVE_BBALANCE_PLUS_THIS_AMOUNT", e[e.BEFORE_BALANCE_MINUS_THIS_AMOUNT = 12] = "BEFORE_BALANCE_MINUS_THIS_AMOUNT", e[e.LEAVE_BEFORE_BALANCE_MINUS_THIS_AMOUNT = 13] = "LEAVE_BEFORE_BALANCE_MINUS_THIS_AMOUNT"
})(La || (Fr.ReserveMode = La = {}));
var ot = {};
Object.defineProperty(ot, "__esModule", {
  value: !0
});
ot.storeShardAccount = ot.loadShardAccount = void 0;
const qa = W(),
  Bo = He;

function oc(e) {
  let t = e.loadRef(),
    r;
  if (!t.isExotic) {
    let n = t.beginParse();
    n.loadBit() && (r = (0, Bo.loadAccount)(n))
  }
  return {
    account: r,
    lastTransactionHash: e.loadUintBig(256),
    lastTransactionLt: e.loadUintBig(64)
  }
}
ot.loadShardAccount = oc;

function sc(e) {
  return t => {
    e.account ? t.storeRef((0, qa.beginCell)().storeBit(!0).store((0, Bo.storeAccount)(e.account))) : t.storeRef((0, qa.beginCell)().storeBit(!1)), t.storeUint(e.lastTransactionHash, 256), t.storeUint(e.lastTransactionLt, 64)
  }
}
ot.storeShardAccount = sc;
var Yn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.storeShardAccounts = e.loadShardAccounts = e.ShardAccountRefValue = void 0;
  const t = mt(),
    r = at,
    n = ot;
  e.ShardAccountRefValue = {
    parse: i => {
      let s = (0, r.loadDepthBalanceInfo)(i),
        l = (0, n.loadShardAccount)(i);
      return {
        depthBalanceInfo: s,
        shardAccount: l
      }
    },
    serialize(i, s) {
      s.store((0, r.storeDepthBalanceInfo)(i.depthBalanceInfo)), s.store((0, n.storeShardAccount)(i.shardAccount))
    }
  };

  function o(i) {
    return t.Dictionary.load(t.Dictionary.Keys.BigUint(256), e.ShardAccountRefValue, i)
  }
  e.loadShardAccounts = o;

  function a(i) {
    return s => {
      s.storeDict(i)
    }
  }
  e.storeShardAccounts = a
})(Yn);
var st = {};
Object.defineProperty(st, "__esModule", {
  value: !0
});
st.storeShardIdent = st.loadShardIdent = void 0;

function lc(e) {
  if (e.loadUint(2) !== 0) throw Error("Invalid data");
  return {
    shardPrefixBits: e.loadUint(6),
    workchainId: e.loadInt(32),
    shardPrefix: e.loadUintBig(64)
  }
}
st.loadShardIdent = lc;

function dc(e) {
  return t => {
    t.storeUint(0, 2), t.storeUint(e.shardPrefixBits, 6), t.storeInt(e.workchainId, 32), t.storeUint(e.shardPrefix, 64)
  }
}
st.storeShardIdent = dc;
var Kr = {};
Object.defineProperty(Kr, "__esModule", {
  value: !0
});
Kr.loadShardStateUnsplit = void 0;
const cc = ur,
  uc = Yn,
  fc = st;

function hc(e) {
  if (e.loadUint(32) !== 2418257890) throw Error("Invalid data");
  let t = e.loadInt(32),
    r = (0, fc.loadShardIdent)(e),
    n = e.loadUint(32),
    o = e.loadUint(32),
    a = e.loadUint(32),
    i = e.loadUintBig(64),
    s = e.loadUint(32);
  e.loadRef();
  let l = e.loadBit(),
    c = e.loadRef(),
    u;
  c.isExotic || (u = (0, uc.loadShardAccounts)(c.beginParse())), e.loadRef();
  let f = e.loadBit(),
    k = null;
  if (f) {
    let m = e.loadRef();
    m.isExotic || (k = (0, cc.loadMasterchainStateExtra)(m.beginParse()))
  }
  return {
    globalId: t,
    shardId: r,
    seqno: n,
    vertSeqNo: o,
    genUtime: a,
    genLt: i,
    minRefMcSeqno: s,
    beforeSplit: l,
    accounts: u,
    extras: k
  }
}
Kr.loadShardStateUnsplit = hc;
var lt = {};
Object.defineProperty(lt, "__esModule", {
  value: !0
});
lt.storeSplitMergeInfo = lt.loadSplitMergeInfo = void 0;

function gc(e) {
  let t = e.loadUint(6),
    r = e.loadUint(6),
    n = e.loadUintBig(256),
    o = e.loadUintBig(256);
  return {
    currentShardPrefixLength: t,
    accountSplitDepth: r,
    thisAddress: n,
    siblingAddress: o
  }
}
lt.loadSplitMergeInfo = gc;

function pc(e) {
  return t => {
    t.storeUint(e.currentShardPrefixLength, 6), t.storeUint(e.accountSplitDepth, 6), t.storeUint(e.thisAddress, 256), t.storeUint(e.siblingAddress, 256)
  }
}
lt.storeSplitMergeInfo = pc;
var Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
Ee.storeStorageUsedShort = Ee.loadStorageUsedShort = void 0;

function mc(e) {
  let t = e.loadVarUintBig(3),
    r = e.loadVarUintBig(3);
  return {
    cells: t,
    bits: r
  }
}
Ee.loadStorageUsedShort = mc;

function bc(e) {
  return t => {
    t.storeVarUint(e.cells, 3), t.storeVarUint(e.bits, 3)
  }
}
Ee.storeStorageUsedShort = bc;
var Le = {},
  qe = {},
  dt = {};
Object.defineProperty(dt, "__esModule", {
  value: !0
});
dt.storeTransactionActionPhase = dt.loadTransactionActionPhase = void 0;
const So = Ie,
  Co = Ee;

function yc(e) {
  let t = e.loadBit(),
    r = e.loadBit(),
    n = e.loadBit(),
    o = (0, So.loadAccountStatusChange)(e),
    a = e.loadBit() ? e.loadCoins() : void 0,
    i = e.loadBit() ? e.loadCoins() : void 0,
    s = e.loadInt(32),
    l = e.loadBit() ? e.loadInt(32) : void 0,
    c = e.loadUint(16),
    u = e.loadUint(16),
    f = e.loadUint(16),
    k = e.loadUint(16),
    m = e.loadUintBig(256),
    P = (0, Co.loadStorageUsedShort)(e);
  return {
    success: t,
    valid: r,
    noFunds: n,
    statusChange: o,
    totalFwdFees: a,
    totalActionFees: i,
    resultCode: s,
    resultArg: l,
    totalActions: c,
    specActions: u,
    skippedActions: f,
    messagesCreated: k,
    actionListHash: m,
    totalMessageSize: P
  }
}
dt.loadTransactionActionPhase = yc;

function wc(e) {
  return t => {
    t.storeBit(e.success), t.storeBit(e.valid), t.storeBit(e.noFunds), t.store((0, So.storeAccountStatusChange)(e.statusChange)), t.storeMaybeCoins(e.totalFwdFees), t.storeMaybeCoins(e.totalActionFees), t.storeInt(e.resultCode, 32), t.storeMaybeInt(e.resultArg, 32), t.storeUint(e.totalActions, 16), t.storeUint(e.specActions, 16), t.storeUint(e.skippedActions, 16), t.storeUint(e.messagesCreated, 16), t.storeUint(e.actionListHash, 256), t.store((0, Co.storeStorageUsedShort)(e.totalMessageSize))
  }
}
dt.storeTransactionActionPhase = wc;
var ct = {};
Object.defineProperty(ct, "__esModule", {
  value: !0
});
ct.storeTransactionBouncePhase = ct.loadTransactionBouncePhase = void 0;
const _r = Ee;

function vc(e) {
  if (e.loadBit()) {
    let t = (0, _r.loadStorageUsedShort)(e),
      r = e.loadCoins(),
      n = e.loadCoins();
    return {
      type: "ok",
      messageSize: t,
      messageFees: r,
      forwardFees: n
    }
  }
  if (e.loadBit()) {
    let t = (0, _r.loadStorageUsedShort)(e),
      r = e.loadCoins();
    return {
      type: "no-funds",
      messageSize: t,
      requiredForwardFees: r
    }
  }
  return {
    type: "negative-funds"
  }
}
ct.loadTransactionBouncePhase = vc;

function kc(e) {
  return t => {
    if (e.type === "ok") t.storeBit(!0), t.store((0, _r.storeStorageUsedShort)(e.messageSize)), t.storeCoins(e.messageFees), t.storeCoins(e.forwardFees);
    else if (e.type === "negative-funds") t.storeBit(!1), t.storeBit(!1);
    else if (e.type === "no-funds") t.storeBit(!1), t.storeBit(!0), t.store((0, _r.storeStorageUsedShort)(e.messageSize)), t.storeCoins(e.requiredForwardFees);
    else throw new Error("Invalid TransactionBouncePhase type")
  }
}
ct.storeTransactionBouncePhase = kc;
var ut = {};
Object.defineProperty(ut, "__esModule", {
  value: !0
});
ut.storeTransactionComputePhase = ut.loadTransactionComputePhase = void 0;
const _c = W(),
  Po = nt;

function Bc(e) {
  if (!e.loadBit()) return {
    type: "skipped",
    reason: (0, Po.loadComputeSkipReason)(e)
  };
  let t = e.loadBit(),
    r = e.loadBit(),
    n = e.loadBit(),
    o = e.loadCoins();
  const a = e.loadRef().beginParse();
  let i = a.loadVarUintBig(3),
    s = a.loadVarUintBig(3),
    l = a.loadBit() ? a.loadVarUintBig(2) : void 0,
    c = a.loadUint(8),
    u = a.loadInt(32),
    f = a.loadBit() ? a.loadInt(32) : void 0,
    k = a.loadUint(32),
    m = a.loadUintBig(256),
    P = a.loadUintBig(256);
  return {
    type: "vm",
    success: t,
    messageStateUsed: r,
    accountActivated: n,
    gasFees: o,
    gasUsed: i,
    gasLimit: s,
    gasCredit: l,
    mode: c,
    exitCode: u,
    exitArg: f,
    vmSteps: k,
    vmInitStateHash: m,
    vmFinalStateHash: P
  }
}
ut.loadTransactionComputePhase = Bc;

function Sc(e) {
  return t => {
    if (e.type === "skipped") {
      t.storeBit(0), t.store((0, Po.storeComputeSkipReason)(e.reason));
      return
    }
    t.storeBit(1), t.storeBit(e.success), t.storeBit(e.messageStateUsed), t.storeBit(e.accountActivated), t.storeCoins(e.gasFees), t.storeRef((0, _c.beginCell)().storeVarUint(e.gasUsed, 3).storeVarUint(e.gasLimit, 3).store(r => e.gasCredit !== void 0 && e.gasCredit !== null ? r.storeBit(1).storeVarUint(e.gasCredit, 2) : r.storeBit(0)).storeUint(e.mode, 8).storeInt(e.exitCode, 32).store(r => e.exitArg !== void 0 && e.exitArg !== null ? r.storeBit(1).storeInt(e.exitArg, 32) : r.storeBit(0)).storeUint(e.vmSteps, 32).storeUint(e.vmInitStateHash, 256).storeUint(e.vmFinalStateHash, 256).endCell())
  }
}
ut.storeTransactionComputePhase = Sc;
var ft = {};
Object.defineProperty(ft, "__esModule", {
  value: !0
});
ft.storeTransactionCreditPhase = ft.loadTransactionCreditPhase = void 0;
const Ao = ne;

function Cc(e) {
  const t = e.loadBit() ? e.loadCoins() : void 0,
    r = (0, Ao.loadCurrencyCollection)(e);
  return {
    dueFeesColelcted: t,
    credit: r
  }
}
ft.loadTransactionCreditPhase = Cc;

function Pc(e) {
  return t => {
    e.dueFeesColelcted === null || e.dueFeesColelcted === void 0 ? t.storeBit(!1) : (t.storeBit(!0), t.storeCoins(e.dueFeesColelcted)), t.store((0, Ao.storeCurrencyCollection)(e.credit))
  }
}
ft.storeTransactionCreditPhase = Pc;
var ht = {};
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.storeTransactionsStoragePhase = ht.loadTransactionStoragePhase = void 0;
const Mo = Ie;

function Ac(e) {
  const t = e.loadCoins();
  let r;
  e.loadBit() && (r = e.loadCoins());
  const n = (0, Mo.loadAccountStatusChange)(e);
  return {
    storageFeesCollected: t,
    storageFeesDue: r,
    statusChange: n
  }
}
ht.loadTransactionStoragePhase = Ac;

function Mc(e) {
  return t => {
    t.storeCoins(e.storageFeesCollected), e.storageFeesDue === null || e.storageFeesDue === void 0 ? t.storeBit(!1) : (t.storeBit(!0), t.storeCoins(e.storageFeesDue)), t.store((0, Mo.storeAccountStatusChange)(e.statusChange))
  }
}
ht.storeTransactionsStoragePhase = Mc;
var Na;

function Uo() {
  if (Na) return qe;
  Na = 1, Object.defineProperty(qe, "__esModule", {
    value: !0
  }), qe.storeTransactionDescription = qe.loadTransactionDescription = void 0;
  const e = W(),
    t = lt,
    r = zo(),
    n = dt,
    o = ct,
    a = ut,
    i = ft,
    s = ht;

  function l(u) {
    let f = u.loadUint(4);
    if (f === 0) {
      const k = u.loadBit();
      let m;
      u.loadBit() && (m = (0, s.loadTransactionStoragePhase)(u));
      let P;
      u.loadBit() && (P = (0, i.loadTransactionCreditPhase)(u));
      let g = (0, a.loadTransactionComputePhase)(u),
        _;
      u.loadBit() && (_ = (0, n.loadTransactionActionPhase)(u.loadRef().beginParse()));
      let B = u.loadBit(),
        S;
      u.loadBit() && (S = (0, o.loadTransactionBouncePhase)(u));
      const y = u.loadBit();
      return {
        type: "generic",
        creditFirst: k,
        storagePhase: m,
        creditPhase: P,
        computePhase: g,
        actionPhase: _,
        bouncePhase: S,
        aborted: B,
        destroyed: y
      }
    }
    if (f === 1) return {
      type: "storage",
      storagePhase: (0, s.loadTransactionStoragePhase)(u)
    };
    if (f === 2 || f === 3) {
      const k = f === 3;
      let m = (0, s.loadTransactionStoragePhase)(u),
        P = (0, a.loadTransactionComputePhase)(u),
        g;
      u.loadBit() && (g = (0, n.loadTransactionActionPhase)(u.loadRef().beginParse()));
      const _ = u.loadBit(),
        B = u.loadBit();
      return {
        type: "tick-tock",
        isTock: k,
        storagePhase: m,
        computePhase: P,
        actionPhase: g,
        aborted: _,
        destroyed: B
      }
    }
    if (f === 4) {
      let k = (0, t.loadSplitMergeInfo)(u),
        m;
      u.loadBit() && (m = (0, s.loadTransactionStoragePhase)(u));
      let P = (0, a.loadTransactionComputePhase)(u),
        g;
      u.loadBit() && (g = (0, n.loadTransactionActionPhase)(u.loadRef().beginParse()));
      const _ = u.loadBit(),
        B = u.loadBit();
      return {
        type: "split-prepare",
        splitInfo: k,
        storagePhase: m,
        computePhase: P,
        actionPhase: g,
        aborted: _,
        destroyed: B
      }
    }
    if (f === 5) {
      let k = (0, t.loadSplitMergeInfo)(u),
        m = (0, r.loadTransaction)(u.loadRef().beginParse());
      const P = u.loadBit();
      return {
        type: "split-install",
        splitInfo: k,
        prepareTransaction: m,
        installed: P
      }
    }
    throw Error(`Unsupported transaction description type ${f}`)
  }
  qe.loadTransactionDescription = l;

  function c(u) {
    return f => {
      if (u.type === "generic") f.storeUint(0, 4), f.storeBit(u.creditFirst), u.storagePhase ? (f.storeBit(!0), f.store((0, s.storeTransactionsStoragePhase)(u.storagePhase))) : f.storeBit(!1), u.creditPhase ? (f.storeBit(!0), f.store((0, i.storeTransactionCreditPhase)(u.creditPhase))) : f.storeBit(!1), f.store((0, a.storeTransactionComputePhase)(u.computePhase)), u.actionPhase ? (f.storeBit(!0), f.storeRef((0, e.beginCell)().store((0, n.storeTransactionActionPhase)(u.actionPhase)))) : f.storeBit(!1), f.storeBit(u.aborted), u.bouncePhase ? (f.storeBit(!0), f.store((0, o.storeTransactionBouncePhase)(u.bouncePhase))) : f.storeBit(!1), f.storeBit(u.destroyed);
      else if (u.type === "storage") f.storeUint(1, 4), f.store((0, s.storeTransactionsStoragePhase)(u.storagePhase));
      else if (u.type === "tick-tock") f.storeUint(u.isTock ? 3 : 2, 4), f.store((0, s.storeTransactionsStoragePhase)(u.storagePhase)), f.store((0, a.storeTransactionComputePhase)(u.computePhase)), u.actionPhase ? (f.storeBit(!0), f.storeRef((0, e.beginCell)().store((0, n.storeTransactionActionPhase)(u.actionPhase)))) : f.storeBit(!1), f.storeBit(u.aborted), f.storeBit(u.destroyed);
      else if (u.type === "split-prepare") f.storeUint(4, 4), f.store((0, t.storeSplitMergeInfo)(u.splitInfo)), u.storagePhase ? (f.storeBit(!0), f.store((0, s.storeTransactionsStoragePhase)(u.storagePhase))) : f.storeBit(!1), f.store((0, a.storeTransactionComputePhase)(u.computePhase)), u.actionPhase ? (f.storeBit(!0), f.store((0, n.storeTransactionActionPhase)(u.actionPhase))) : f.storeBit(!1), f.storeBit(u.aborted), f.storeBit(u.destroyed);
      else if (u.type === "split-install") f.storeUint(5, 4), f.store((0, t.storeSplitMergeInfo)(u.splitInfo)), f.storeRef((0, e.beginCell)().store((0, r.storeTransaction)(u.prepareTransaction))), f.storeBit(u.installed);
      else throw Error(`Unsupported transaction description type ${u.type}`)
    }
  }
  return qe.storeTransactionDescription = c, qe
}
var $a;

function zo() {
  if ($a) return Le;
  $a = 1, Object.defineProperty(Le, "__esModule", {
    value: !0
  }), Le.storeTransaction = Le.loadTransaction = void 0;
  const e = W(),
    t = mt(),
    r = Je,
    n = ne,
    o = it,
    a = ve,
    i = Uo();

  function s(c) {
    let u = c.asCell();
    if (c.loadUint(4) !== 7) throw Error("Invalid data");
    let f = c.loadUintBig(256),
      k = c.loadUintBig(64),
      m = c.loadUintBig(256),
      P = c.loadUintBig(64),
      g = c.loadUint(32),
      _ = c.loadUint(15),
      B = (0, r.loadAccountStatus)(c),
      S = (0, r.loadAccountStatus)(c),
      w = c.loadRef().beginParse(),
      A = w.loadBit() ? (0, a.loadMessage)(w.loadRef().beginParse()) : void 0,
      p = w.loadDict(t.Dictionary.Keys.Uint(15), a.MessageValue);
    w.endParse();
    let U = (0, n.loadCurrencyCollection)(c),
      j = (0, o.loadHashUpdate)(c.loadRef().beginParse()),
      E = (0, i.loadTransactionDescription)(c.loadRef().beginParse());
    return {
      address: f,
      lt: k,
      prevTransactionHash: m,
      prevTransactionLt: P,
      now: g,
      outMessagesCount: _,
      oldStatus: B,
      endStatus: S,
      inMessage: A,
      outMessages: p,
      totalFees: U,
      stateUpdate: j,
      description: E,
      raw: u,
      hash: () => u.hash()
    }
  }
  Le.loadTransaction = s;

  function l(c) {
    return u => {
      u.storeUint(7, 4), u.storeUint(c.address, 256), u.storeUint(c.lt, 64), u.storeUint(c.prevTransactionHash, 256), u.storeUint(c.prevTransactionLt, 64), u.storeUint(c.now, 32), u.storeUint(c.outMessagesCount, 15), u.store((0, r.storeAccountStatus)(c.oldStatus)), u.store((0, r.storeAccountStatus)(c.endStatus));
      let f = (0, e.beginCell)();
      c.inMessage ? (f.storeBit(!0), f.storeRef((0, e.beginCell)().store((0, a.storeMessage)(c.inMessage)))) : f.storeBit(!1), f.storeDict(c.outMessages), u.storeRef(f), u.store((0, n.storeCurrencyCollection)(c.totalFees)), u.storeRef((0, e.beginCell)().store((0, o.storeHashUpdate)(c.stateUpdate))), u.storeRef((0, e.beginCell)().store((0, i.storeTransactionDescription)(c.description)))
    }
  }
  return Le.storeTransaction = l, Le
}(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.storeSplitMergeInfo = e.loadSplitMergeInfo = e.storeLibRef = e.loadLibRef = e.storeSimpleLibrary = e.loadSimpleLibrary = e.loadShardStateUnsplit = e.storeShardIdent = e.loadShardIdent = e.storeShardAccounts = e.loadShardAccounts = e.ShardAccountRefValue = e.storeShardAccount = e.loadShardAccount = e.ReserveMode = e.SendMode = e.storeMessageRelaxed = e.loadMessageRelaxed = e.storeMessage = e.loadMessage = e.loadMasterchainStateExtra = e.storeHashUpdate = e.loadHashUpdate = e.storeDepthBalanceInfo = e.loadDepthBalanceInfo = e.storeCurrencyCollection = e.loadCurrencyCollection = e.storeComputeSkipReason = e.loadComputeSkipReason = e.storeCommonMessageInfoRelaxed = e.loadCommonMessageInfoRelaxed = e.storeCommonMessageInfo = e.loadCommonMessageInfo = e.storeOutList = e.loadOutList = e.storeOutAction = e.loadOutAction = e.storeAccountStorage = e.loadAccountStorage = e.storeAccountStatusChange = e.loadAccountStatusChange = e.storeAccountStatus = e.loadAccountStatus = e.storeAccountState = e.loadAccountState = e.storeAccount = e.loadAccount = e.comment = e.external = e.internal = void 0, e.storeTransactionsStoragePhase = e.loadTransactionStoragePhase = e.storeTransactionDescription = e.loadTransactionDescription = e.storeTransactionCreditPhase = e.loadTransactionCreditPhase = e.storeTransactionComputePhase = e.loadTransactionComputePhase = e.storeTransactionBouncePhase = e.loadTransactionBouncePhase = e.storeTransactionActionPhase = e.loadTransactionActionPhase = e.storeTransaction = e.loadTransaction = e.storeTickTock = e.loadTickTock = e.storeStorageUsedShort = e.loadStorageUsedShort = e.storeStorageUsed = e.loadStorageUsed = e.storeStorageInfo = e.loadStorageInfo = e.storeStateInit = e.loadStateInit = void 0;
  var t = xe;
  Object.defineProperty(e, "internal", {
    enumerable: !0,
    get: function() {
      return t.internal
    }
  }), Object.defineProperty(e, "external", {
    enumerable: !0,
    get: function() {
      return t.external
    }
  }), Object.defineProperty(e, "comment", {
    enumerable: !0,
    get: function() {
      return t.comment
    }
  });
  var r = He;
  Object.defineProperty(e, "loadAccount", {
    enumerable: !0,
    get: function() {
      return r.loadAccount
    }
  }), Object.defineProperty(e, "storeAccount", {
    enumerable: !0,
    get: function() {
      return r.storeAccount
    }
  });
  var n = Qe;
  Object.defineProperty(e, "loadAccountState", {
    enumerable: !0,
    get: function() {
      return n.loadAccountState
    }
  }), Object.defineProperty(e, "storeAccountState", {
    enumerable: !0,
    get: function() {
      return n.storeAccountState
    }
  });
  var o = Je;
  Object.defineProperty(e, "loadAccountStatus", {
    enumerable: !0,
    get: function() {
      return o.loadAccountStatus
    }
  }), Object.defineProperty(e, "storeAccountStatus", {
    enumerable: !0,
    get: function() {
      return o.storeAccountStatus
    }
  });
  var a = Ie;
  Object.defineProperty(e, "loadAccountStatusChange", {
    enumerable: !0,
    get: function() {
      return a.loadAccountStatusChange
    }
  }), Object.defineProperty(e, "storeAccountStatusChange", {
    enumerable: !0,
    get: function() {
      return a.storeAccountStatusChange
    }
  });
  var i = Ge;
  Object.defineProperty(e, "loadAccountStorage", {
    enumerable: !0,
    get: function() {
      return i.loadAccountStorage
    }
  }), Object.defineProperty(e, "storeAccountStorage", {
    enumerable: !0,
    get: function() {
      return i.storeAccountStorage
    }
  });
  var s = ce;
  Object.defineProperty(e, "loadOutAction", {
    enumerable: !0,
    get: function() {
      return s.loadOutAction
    }
  }), Object.defineProperty(e, "storeOutAction", {
    enumerable: !0,
    get: function() {
      return s.storeOutAction
    }
  }), Object.defineProperty(e, "loadOutList", {
    enumerable: !0,
    get: function() {
      return s.loadOutList
    }
  }), Object.defineProperty(e, "storeOutList", {
    enumerable: !0,
    get: function() {
      return s.storeOutList
    }
  });
  var l = rt;
  Object.defineProperty(e, "loadCommonMessageInfo", {
    enumerable: !0,
    get: function() {
      return l.loadCommonMessageInfo
    }
  }), Object.defineProperty(e, "storeCommonMessageInfo", {
    enumerable: !0,
    get: function() {
      return l.storeCommonMessageInfo
    }
  });
  var c = et;
  Object.defineProperty(e, "loadCommonMessageInfoRelaxed", {
    enumerable: !0,
    get: function() {
      return c.loadCommonMessageInfoRelaxed
    }
  }), Object.defineProperty(e, "storeCommonMessageInfoRelaxed", {
    enumerable: !0,
    get: function() {
      return c.storeCommonMessageInfoRelaxed
    }
  });
  var u = nt;
  Object.defineProperty(e, "loadComputeSkipReason", {
    enumerable: !0,
    get: function() {
      return u.loadComputeSkipReason
    }
  }), Object.defineProperty(e, "storeComputeSkipReason", {
    enumerable: !0,
    get: function() {
      return u.storeComputeSkipReason
    }
  });
  var f = ne;
  Object.defineProperty(e, "loadCurrencyCollection", {
    enumerable: !0,
    get: function() {
      return f.loadCurrencyCollection
    }
  }), Object.defineProperty(e, "storeCurrencyCollection", {
    enumerable: !0,
    get: function() {
      return f.storeCurrencyCollection
    }
  });
  var k = at;
  Object.defineProperty(e, "loadDepthBalanceInfo", {
    enumerable: !0,
    get: function() {
      return k.loadDepthBalanceInfo
    }
  }), Object.defineProperty(e, "storeDepthBalanceInfo", {
    enumerable: !0,
    get: function() {
      return k.storeDepthBalanceInfo
    }
  });
  var m = it;
  Object.defineProperty(e, "loadHashUpdate", {
    enumerable: !0,
    get: function() {
      return m.loadHashUpdate
    }
  }), Object.defineProperty(e, "storeHashUpdate", {
    enumerable: !0,
    get: function() {
      return m.storeHashUpdate
    }
  });
  var P = ur;
  Object.defineProperty(e, "loadMasterchainStateExtra", {
    enumerable: !0,
    get: function() {
      return P.loadMasterchainStateExtra
    }
  });
  var g = ve;
  Object.defineProperty(e, "loadMessage", {
    enumerable: !0,
    get: function() {
      return g.loadMessage
    }
  }), Object.defineProperty(e, "storeMessage", {
    enumerable: !0,
    get: function() {
      return g.storeMessage
    }
  });
  var _ = Ze;
  Object.defineProperty(e, "loadMessageRelaxed", {
    enumerable: !0,
    get: function() {
      return _.loadMessageRelaxed
    }
  }), Object.defineProperty(e, "storeMessageRelaxed", {
    enumerable: !0,
    get: function() {
      return _.storeMessageRelaxed
    }
  });
  var B = Wr;
  Object.defineProperty(e, "SendMode", {
    enumerable: !0,
    get: function() {
      return B.SendMode
    }
  });
  var S = Fr;
  Object.defineProperty(e, "ReserveMode", {
    enumerable: !0,
    get: function() {
      return S.ReserveMode
    }
  });
  var y = ot;
  Object.defineProperty(e, "loadShardAccount", {
    enumerable: !0,
    get: function() {
      return y.loadShardAccount
    }
  }), Object.defineProperty(e, "storeShardAccount", {
    enumerable: !0,
    get: function() {
      return y.storeShardAccount
    }
  });
  var w = Yn;
  Object.defineProperty(e, "ShardAccountRefValue", {
    enumerable: !0,
    get: function() {
      return w.ShardAccountRefValue
    }
  }), Object.defineProperty(e, "loadShardAccounts", {
    enumerable: !0,
    get: function() {
      return w.loadShardAccounts
    }
  }), Object.defineProperty(e, "storeShardAccounts", {
    enumerable: !0,
    get: function() {
      return w.storeShardAccounts
    }
  });
  var A = st;
  Object.defineProperty(e, "loadShardIdent", {
    enumerable: !0,
    get: function() {
      return A.loadShardIdent
    }
  }), Object.defineProperty(e, "storeShardIdent", {
    enumerable: !0,
    get: function() {
      return A.storeShardIdent
    }
  });
  var p = Kr;
  Object.defineProperty(e, "loadShardStateUnsplit", {
    enumerable: !0,
    get: function() {
      return p.loadShardStateUnsplit
    }
  });
  var U = we;
  Object.defineProperty(e, "loadSimpleLibrary", {
    enumerable: !0,
    get: function() {
      return U.loadSimpleLibrary
    }
  }), Object.defineProperty(e, "storeSimpleLibrary", {
    enumerable: !0,
    get: function() {
      return U.storeSimpleLibrary
    }
  });
  var j = tt;
  Object.defineProperty(e, "loadLibRef", {
    enumerable: !0,
    get: function() {
      return j.loadLibRef
    }
  }), Object.defineProperty(e, "storeLibRef", {
    enumerable: !0,
    get: function() {
      return j.storeLibRef
    }
  });
  var E = lt;
  Object.defineProperty(e, "loadSplitMergeInfo", {
    enumerable: !0,
    get: function() {
      return E.loadSplitMergeInfo
    }
  }), Object.defineProperty(e, "storeSplitMergeInfo", {
    enumerable: !0,
    get: function() {
      return E.storeSplitMergeInfo
    }
  });
  var R = he;
  Object.defineProperty(e, "loadStateInit", {
    enumerable: !0,
    get: function() {
      return R.loadStateInit
    }
  }), Object.defineProperty(e, "storeStateInit", {
    enumerable: !0,
    get: function() {
      return R.storeStateInit
    }
  });
  var V = Ye;
  Object.defineProperty(e, "loadStorageInfo", {
    enumerable: !0,
    get: function() {
      return V.loadStorageInfo
    }
  }), Object.defineProperty(e, "storeStorageInfo", {
    enumerable: !0,
    get: function() {
      return V.storeStorageInfo
    }
  });
  var D = Xe;
  Object.defineProperty(e, "loadStorageUsed", {
    enumerable: !0,
    get: function() {
      return D.loadStorageUsed
    }
  }), Object.defineProperty(e, "storeStorageUsed", {
    enumerable: !0,
    get: function() {
      return D.storeStorageUsed
    }
  });
  var b = Ee;
  Object.defineProperty(e, "loadStorageUsedShort", {
    enumerable: !0,
    get: function() {
      return b.loadStorageUsedShort
    }
  }), Object.defineProperty(e, "storeStorageUsedShort", {
    enumerable: !0,
    get: function() {
      return b.storeStorageUsedShort
    }
  });
  var h = Fe;
  Object.defineProperty(e, "loadTickTock", {
    enumerable: !0,
    get: function() {
      return h.loadTickTock
    }
  }), Object.defineProperty(e, "storeTickTock", {
    enumerable: !0,
    get: function() {
      return h.storeTickTock
    }
  });
  var M = zo();
  Object.defineProperty(e, "loadTransaction", {
    enumerable: !0,
    get: function() {
      return M.loadTransaction
    }
  }), Object.defineProperty(e, "storeTransaction", {
    enumerable: !0,
    get: function() {
      return M.storeTransaction
    }
  });
  var x = dt;
  Object.defineProperty(e, "loadTransactionActionPhase", {
    enumerable: !0,
    get: function() {
      return x.loadTransactionActionPhase
    }
  }), Object.defineProperty(e, "storeTransactionActionPhase", {
    enumerable: !0,
    get: function() {
      return x.storeTransactionActionPhase
    }
  });
  var O = ct;
  Object.defineProperty(e, "loadTransactionBouncePhase", {
    enumerable: !0,
    get: function() {
      return O.loadTransactionBouncePhase
    }
  }), Object.defineProperty(e, "storeTransactionBouncePhase", {
    enumerable: !0,
    get: function() {
      return O.storeTransactionBouncePhase
    }
  });
  var $ = ut;
  Object.defineProperty(e, "loadTransactionComputePhase", {
    enumerable: !0,
    get: function() {
      return $.loadTransactionComputePhase
    }
  }), Object.defineProperty(e, "storeTransactionComputePhase", {
    enumerable: !0,
    get: function() {
      return $.storeTransactionComputePhase
    }
  });
  var F = ft;
  Object.defineProperty(e, "loadTransactionCreditPhase", {
    enumerable: !0,
    get: function() {
      return F.loadTransactionCreditPhase
    }
  }), Object.defineProperty(e, "storeTransactionCreditPhase", {
    enumerable: !0,
    get: function() {
      return F.storeTransactionCreditPhase
    }
  });
  var pe = Uo();
  Object.defineProperty(e, "loadTransactionDescription", {
    enumerable: !0,
    get: function() {
      return pe.loadTransactionDescription
    }
  }), Object.defineProperty(e, "storeTransactionDescription", {
    enumerable: !0,
    get: function() {
      return pe.storeTransactionDescription
    }
  });
  var _e = ht;
  Object.defineProperty(e, "loadTransactionStoragePhase", {
    enumerable: !0,
    get: function() {
      return _e.loadTransactionStoragePhase
    }
  }), Object.defineProperty(e, "storeTransactionsStoragePhase", {
    enumerable: !0,
    get: function() {
      return _e.storeTransactionsStoragePhase
    }
  })
})(Yi);
var Hr = {};
Object.defineProperty(Hr, "__esModule", {
  value: !0
});
Hr.openContract = void 0;
const Uc = ae,
  Wa = yt();

function zc(e, t) {
  let r, n = null;
  if (!Uc.Address.isAddress(e.address)) throw Error("Invalid address");
  if (r = e.address, e.init) {
    if (!(e.init.code instanceof Wa.Cell)) throw Error("Invalid init.code");
    if (!(e.init.data instanceof Wa.Cell)) throw Error("Invalid init.data");
    n = e.init
  }
  let o = t({
    address: r,
    init: n
  });
  return new Proxy(e, {
    get(a, i) {
      const s = a[i];
      return typeof i == "string" && (i.startsWith("get") || i.startsWith("send") || i.startsWith("is")) && typeof s == "function" ? (...l) => s.apply(a, [o, ...l]) : s
    }
  })
}
Hr.openContract = zc;
var Gr = {};
Object.defineProperty(Gr, "__esModule", {
  value: !0
});
Gr.ComputeError = void 0;
class Xn extends Error {
  constructor(t, r, n) {
    super(t), this.exitCode = r, this.debugLogs = n && n.debugLogs ? n.debugLogs : null, this.logs = n && n.logs ? n.logs : null, Object.setPrototypeOf(this, Xn.prototype)
  }
}
Gr.ComputeError = Xn;
var Qr = {};
Object.defineProperty(Qr, "__esModule", {
  value: !0
});
Qr.getMethodId = void 0;
const xc = new Int16Array([0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920]);

function Ic(e) {
  e instanceof v || (e = v.from(e));
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    t = (xc[(t >> 8 ^ n) & 255] ^ t << 8) & 65535
  }
  return t
}

function Ec(e) {
  return Ic(e) & 65535 | 65536
}
Qr.getMethodId = Ec;
var Ct = {};
Object.defineProperty(Ct, "__esModule", {
  value: !0
});
Ct.safeSignVerify = Ct.safeSign = void 0;
const Jn = bt(),
  Tc = 8,
  jc = 64;

function xo(e, t) {
  let r = v.from(t);
  if (r.length > jc) throw Error("Seed can	 be longer than 64 bytes");
  if (r.length < Tc) throw Error("Seed must be at least 8 bytes");
  return (0, Jn.sha256_sync)(v.concat([v.from([255, 255]), r, e.hash()]))
}

function Rc(e, t, r = "ton-safe-sign-magic") {
  return (0, Jn.sign)(xo(e, r), t)
}
Ct.safeSign = Rc;

function Oc(e, t, r, n = "ton-safe-sign-magic") {
  return (0, Jn.signVerify)(xo(e, n), t, r)
}
Ct.safeSignVerify = Oc;
(function(e) {
  var t = I && I.__createBinding || (Object.create ? function(M, x, O, $) {
      $ === void 0 && ($ = O);
      var F = Object.getOwnPropertyDescriptor(x, O);
      (!F || ("get" in F ? !x.__esModule : F.writable || F.configurable)) && (F = {
        enumerable: !0,
        get: function() {
          return x[O]
        }
      }), Object.defineProperty(M, $, F)
    } : function(M, x, O, $) {
      $ === void 0 && ($ = O), M[$] = x[O]
    }),
    r = I && I.__exportStar || function(M, x) {
      for (var O in M) O !== "default" && !Object.prototype.hasOwnProperty.call(x, O) && t(x, M, O)
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.safeSignVerify = e.safeSign = e.getMethodId = e.base32Encode = e.base32Decode = e.crc32c = e.crc16 = e.fromNano = e.toNano = e.ComputeError = e.openContract = e.TupleBuilder = e.TupleReader = e.serializeTuple = e.parseTuple = e.generateMerkleUpdate = e.generateMerkleProofDirect = e.generateMerkleProof = e.exoticPruned = e.exoticMerkleUpdate = e.convertToMerkleProof = e.exoticMerkleProof = e.Dictionary = e.Cell = e.CellType = e.Slice = e.beginCell = e.Builder = e.BitBuilder = e.BitReader = e.BitString = e.contractAddress = e.ADNLAddress = e.ExternalAddress = e.address = e.Address = void 0;
  var n = ae;
  Object.defineProperty(e, "Address", {
    enumerable: !0,
    get: function() {
      return n.Address
    }
  }), Object.defineProperty(e, "address", {
    enumerable: !0,
    get: function() {
      return n.address
    }
  });
  var o = Ut;
  Object.defineProperty(e, "ExternalAddress", {
    enumerable: !0,
    get: function() {
      return o.ExternalAddress
    }
  });
  var a = Cr;
  Object.defineProperty(e, "ADNLAddress", {
    enumerable: !0,
    get: function() {
      return a.ADNLAddress
    }
  });
  var i = Pr;
  Object.defineProperty(e, "contractAddress", {
    enumerable: !0,
    get: function() {
      return i.contractAddress
    }
  });
  var s = Te();
  Object.defineProperty(e, "BitString", {
    enumerable: !0,
    get: function() {
      return s.BitString
    }
  });
  var l = de;
  Object.defineProperty(e, "BitReader", {
    enumerable: !0,
    get: function() {
      return l.BitReader
    }
  });
  var c = Mr();
  Object.defineProperty(e, "BitBuilder", {
    enumerable: !0,
    get: function() {
      return c.BitBuilder
    }
  });
  var u = W();
  Object.defineProperty(e, "Builder", {
    enumerable: !0,
    get: function() {
      return u.Builder
    }
  }), Object.defineProperty(e, "beginCell", {
    enumerable: !0,
    get: function() {
      return u.beginCell
    }
  });
  var f = Wn();
  Object.defineProperty(e, "Slice", {
    enumerable: !0,
    get: function() {
      return f.Slice
    }
  });
  var k = je;
  Object.defineProperty(e, "CellType", {
    enumerable: !0,
    get: function() {
      return k.CellType
    }
  });
  var m = yt();
  Object.defineProperty(e, "Cell", {
    enumerable: !0,
    get: function() {
      return m.Cell
    }
  });
  var P = mt();
  Object.defineProperty(e, "Dictionary", {
    enumerable: !0,
    get: function() {
      return P.Dictionary
    }
  });
  var g = zr();
  Object.defineProperty(e, "exoticMerkleProof", {
    enumerable: !0,
    get: function() {
      return g.exoticMerkleProof
    }
  }), Object.defineProperty(e, "convertToMerkleProof", {
    enumerable: !0,
    get: function() {
      return g.convertToMerkleProof
    }
  });
  var _ = zt;
  Object.defineProperty(e, "exoticMerkleUpdate", {
    enumerable: !0,
    get: function() {
      return _.exoticMerkleUpdate
    }
  });
  var B = xt;
  Object.defineProperty(e, "exoticPruned", {
    enumerable: !0,
    get: function() {
      return B.exoticPruned
    }
  });
  var S = $n();
  Object.defineProperty(e, "generateMerkleProof", {
    enumerable: !0,
    get: function() {
      return S.generateMerkleProof
    }
  }), Object.defineProperty(e, "generateMerkleProofDirect", {
    enumerable: !0,
    get: function() {
      return S.generateMerkleProofDirect
    }
  });
  var y = yi();
  Object.defineProperty(e, "generateMerkleUpdate", {
    enumerable: !0,
    get: function() {
      return y.generateMerkleUpdate
    }
  });
  var w = St;
  Object.defineProperty(e, "parseTuple", {
    enumerable: !0,
    get: function() {
      return w.parseTuple
    }
  }), Object.defineProperty(e, "serializeTuple", {
    enumerable: !0,
    get: function() {
      return w.serializeTuple
    }
  });
  var A = Nr;
  Object.defineProperty(e, "TupleReader", {
    enumerable: !0,
    get: function() {
      return A.TupleReader
    }
  });
  var p = $r;
  Object.defineProperty(e, "TupleBuilder", {
    enumerable: !0,
    get: function() {
      return p.TupleBuilder
    }
  }), r(Yi, e);
  var U = Hr;
  Object.defineProperty(e, "openContract", {
    enumerable: !0,
    get: function() {
      return U.openContract
    }
  });
  var j = Gr;
  Object.defineProperty(e, "ComputeError", {
    enumerable: !0,
    get: function() {
      return j.ComputeError
    }
  });
  var E = Ke;
  Object.defineProperty(e, "toNano", {
    enumerable: !0,
    get: function() {
      return E.toNano
    }
  }), Object.defineProperty(e, "fromNano", {
    enumerable: !0,
    get: function() {
      return E.fromNano
    }
  });
  var R = Mt;
  Object.defineProperty(e, "crc16", {
    enumerable: !0,
    get: function() {
      return R.crc16
    }
  });
  var V = cr;
  Object.defineProperty(e, "crc32c", {
    enumerable: !0,
    get: function() {
      return V.crc32c
    }
  });
  var D = We;
  Object.defineProperty(e, "base32Decode", {
    enumerable: !0,
    get: function() {
      return D.base32Decode
    }
  }), Object.defineProperty(e, "base32Encode", {
    enumerable: !0,
    get: function() {
      return D.base32Encode
    }
  });
  var b = Qr;
  Object.defineProperty(e, "getMethodId", {
    enumerable: !0,
    get: function() {
      return b.getMethodId
    }
  });
  var h = Ct;
  Object.defineProperty(e, "safeSign", {
    enumerable: !0,
    get: function() {
      return h.safeSign
    }
  }), Object.defineProperty(e, "safeSignVerify", {
    enumerable: !0,
    get: function() {
      return h.safeSignVerify
    }
  })
})(q);
var fr = {},
  Yr = {};
Object.defineProperty(Yr, "__esModule", {
  value: !0
});
Yr.InMemoryCache = void 0;
class Dc {
  constructor() {
    this.cache = new Map, this.set = async (t, r, n) => {
      n !== null ? this.cache.set(t + "$$" + r, n) : this.cache.delete(t + "$$" + r)
    }, this.get = async (t, r) => {
      let n = this.cache.get(t + "$$" + r);
      return n !== void 0 ? n : null
    }
  }
}
Yr.InMemoryCache = Dc;
const Vc = "@ton/ton",
  Lc = "15.0.0",
  qc = "https://github.com/ton-org/ton.git",
  Nc = "Whales Corp. <developers@whalescorp.com>",
  $c = "MIT",
  Wc = "dist/index.js",
  Fc = ["dist"],
  Kc = {
    docs: "rm -fr docs && typedoc src/index.ts",
    build: "rm -fr dist && tsc --declaration",
    test: "jest --verbose --runInBand",
    release: "yarn build && yarn release-it --npm.yarn1"
  },
  Hc = {
    "@release-it/keep-a-changelog": "^5.0.0",
    "@ton/core": "^0.56.0",
    "@ton/crypto": "3.2.0",
    "@ton/emulator": "^2.1.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.10",
    buffer: "^6.0.3",
    expect: "^27.1.0",
    jest: "^27.1.0",
    "jest-mock": "^27.1.0",
    karma: "^6.3.4",
    "karma-chrome-launcher": "^3.1.0",
    "karma-jasmine": "^4.0.1",
    "karma-typescript": "^5.5.2",
    "karma-webpack": "^5.0.0",
    prando: "^6.0.1",
    "release-it": "^17.1.1",
    "ts-jest": "^27.0.5",
    "ts-loader": "^9.2.5",
    "ts-node": "^10.7.0",
    typedoc: "^0.23.24",
    typescript: "^4.4.2",
    webpack: "^5.51.2"
  },
  Gc = {
    axios: "^1.6.7",
    dataloader: "^2.0.0",
    "symbol.inspect": "1.0.1",
    teslabot: "^1.3.0",
    zod: "^3.21.4"
  },
  Qc = {
    "@ton/core": ">=0.56.0",
    "@ton/crypto": ">=3.2.0"
  },
  Yc = {
    access: "public",
    registry: "https://registry.npmjs.org/"
  },
  Xc = "yarn@3.4.1",
  Jc = {
    name: Vc,
    version: Lc,
    repository: qc,
    author: Nc,
    license: $c,
    main: Wc,
    files: Fc,
    scripts: Kc,
    devDependencies: Hc,
    dependencies: Gc,
    peerDependencies: Qc,
    publishConfig: Yc,
    "release-it": {
      github: {
        release: !0
      },
      plugins: {
        "@release-it/keep-a-changelog": {
          filename: "CHANGELOG.md"
        }
      }
    },
    packageManager: Xc
  };
var Io = I && I.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  }
};
Object.defineProperty(fr, "__esModule", {
  value: !0
});
fr.HttpApi = void 0;
const Zc = Yr,
  Fa = Io(ms),
  eu = Io(ui),
  C = fi,
  tu = Jc.version,
  Pt = C.z.object({
    "@type": C.z.literal("ton.blockIdExt"),
    workchain: C.z.number(),
    shard: C.z.string(),
    seqno: C.z.number(),
    root_hash: C.z.string(),
    file_hash: C.z.string()
  }),
  ru = C.z.object({
    balance: C.z.union([C.z.number(), C.z.string()]),
    state: C.z.union([C.z.literal("active"), C.z.literal("uninitialized"), C.z.literal("frozen")]),
    data: C.z.string(),
    code: C.z.string(),
    last_transaction_id: C.z.object({
      "@type": C.z.literal("internal.transactionId"),
      lt: C.z.string(),
      hash: C.z.string()
    }),
    block_id: Pt,
    sync_utime: C.z.number()
  }),
  nu = C.z.object({
    "@type": C.z.literal("ok")
  }),
  au = C.z.object({
    "@type": C.z.literal("query.fees"),
    source_fees: C.z.object({
      "@type": C.z.literal("fees"),
      in_fwd_fee: C.z.number(),
      storage_fee: C.z.number(),
      gas_fee: C.z.number(),
      fwd_fee: C.z.number()
    })
  }),
  iu = C.z.object({
    gas_used: C.z.number(),
    exit_code: C.z.number(),
    stack: C.z.array(C.z.unknown())
  }),
  ou = C.z.union([C.z.object({
    "@type": C.z.literal("msg.dataRaw"),
    body: C.z.string()
  }), C.z.object({
    "@type": C.z.literal("msg.dataText"),
    text: C.z.string()
  }), C.z.object({
    "@type": C.z.literal("msg.dataDecryptedText"),
    text: C.z.string()
  }), C.z.object({
    "@type": C.z.literal("msg.dataEncryptedText"),
    text: C.z.string()
  })]),
  Ka = C.z.object({
    source: C.z.string(),
    destination: C.z.string(),
    value: C.z.string(),
    fwd_fee: C.z.string(),
    ihr_fee: C.z.string(),
    created_lt: C.z.string(),
    body_hash: C.z.string(),
    msg_data: ou,
    message: C.z.string().optional()
  }),
  En = C.z.object({
    data: C.z.string(),
    utime: C.z.number(),
    transaction_id: C.z.object({
      lt: C.z.string(),
      hash: C.z.string()
    }),
    fee: C.z.string(),
    storage_fee: C.z.string(),
    other_fee: C.z.string(),
    in_msg: C.z.union([C.z.undefined(), Ka]),
    out_msgs: C.z.array(Ka)
  }),
  Ha = C.z.array(En),
  su = C.z.object({
    state_root_hash: C.z.string(),
    last: Pt,
    init: Pt
  }),
  lu = C.z.object({
    shards: C.z.array(Pt)
  }),
  du = C.z.object({
    "@type": C.z.literal("blocks.shortTxId"),
    mode: C.z.number(),
    account: C.z.string(),
    lt: C.z.string(),
    hash: C.z.string()
  }),
  Ga = C.z.object({
    id: Pt,
    req_count: C.z.number(),
    incomplete: C.z.boolean(),
    transactions: C.z.array(du)
  });
class Qa {
  constructor(t, r, n, o) {
    this.namespace = t, this.cache = r, this.codec = n, this.keyEncoder = o
  }
  async get(t) {
    let r = await this.cache.get(this.namespace, this.keyEncoder(t));
    if (r) {
      let n = this.codec.safeParse(JSON.parse(r));
      if (n.success) return n.data
    }
    return null
  }
  async set(t, r) {
    r !== null ? await this.cache.set(this.namespace, this.keyEncoder(t), JSON.stringify(r)) : await this.cache.set(this.namespace, this.keyEncoder(t), null)
  }
}
class cu {
  constructor(t, r) {
    this.endpoint = t, this.cache = new Zc.InMemoryCache, this.parameters = {
      timeout: (r == null ? void 0 : r.timeout) || 3e4,
      apiKey: r == null ? void 0 : r.apiKey,
      adapter: r == null ? void 0 : r.adapter
    }, this.shardCache = new Qa("ton-shard", this.cache, C.z.array(Pt), n => n + ""), this.shardLoader = new Fa.default(async n => await Promise.all(n.map(async o => {
      const a = await this.shardCache.get(o);
      if (a) return a;
      let i = (await this.doCall("shards", {
        seqno: o
      }, lu)).shards;
      return await this.shardCache.set(o, i), i
    }))), this.shardTransactionsCache = new Qa("ton-shard-tx", this.cache, Ga, n => n.workchain + ":" + n.shard + ":" + n.seqno), this.shardTransactionsLoader = new Fa.default(async n => await Promise.all(n.map(async o => {
      const a = await this.shardTransactionsCache.get(o);
      if (a) return a;
      let i = await this.doCall("getBlockTransactions", {
        workchain: o.workchain,
        seqno: o.seqno,
        shard: o.shard
      }, Ga);
      return await this.shardTransactionsCache.set(o, i), i
    })), {
      cacheKeyFn: n => n.workchain + ":" + n.shard + ":" + n.seqno
    })
  }
  getAddressInformation(t) {
    return this.doCall("getAddressInformation", {
      address: t.toString()
    }, ru)
  }
  async getTransactions(t, r) {
    const n = r.inclusive;
    delete r.inclusive;
    let o;
    r.hash && (o = v.from(r.hash, "base64").toString("hex"));
    let a = r.limit;
    r.hash && r.lt && n !== !0 && a++;
    let i = await this.doCall("getTransactions", {
      address: t.toString(),
      ...r,
      limit: a,
      hash: o
    }, Ha);
    return i.length > a && (i = i.slice(0, a)), r.hash && r.lt && n !== !0 && i.shift(), i
  }
  async getMasterchainInfo() {
    return await this.doCall("getMasterchainInfo", {}, su)
  }
  async getShards(t) {
    return await this.shardLoader.load(t)
  }
  async getBlockTransactions(t, r, n) {
    return await this.shardTransactionsLoader.load({
      workchain: t,
      seqno: r,
      shard: n
    })
  }
  async getTransaction(t, r, n) {
    let o = v.from(n, "base64").toString("hex"),
      i = (await this.doCall("getTransactions", {
        address: t.toString(),
        lt: r,
        hash: o,
        limit: 1
      }, Ha)).find(s => s.transaction_id.lt === r && s.transaction_id.hash === n);
    return i || null
  }
  async callGetMethod(t, r, n) {
    return await this.doCall("runGetMethod", {
      address: t.toString(),
      method: r,
      stack: uu(n)
    }, iu)
  }
  async sendBoc(t) {
    await this.doCall("sendBoc", {
      boc: t.toString("base64")
    }, nu)
  }
  async estimateFee(t, r) {
    return await this.doCall("estimateFee", {
      address: t.toString(),
      body: r.body.toBoc().toString("base64"),
      init_data: r.initData ? r.initData.toBoc().toString("base64") : "",
      init_code: r.initCode ? r.initCode.toBoc().toString("base64") : "",
      ignore_chksig: r.ignoreSignature
    }, au)
  }
  async tryLocateResultTx(t, r, n) {
    return await this.doCall("tryLocateResultTx", {
      source: t.toString(),
      destination: r.toString(),
      created_lt: n
    }, En)
  }
  async tryLocateSourceTx(t, r, n) {
    return await this.doCall("tryLocateSourceTx", {
      source: t.toString(),
      destination: r.toString(),
      created_lt: n
    }, En)
  }
  async doCall(t, r, n) {
    let o = {
      "Content-Type": "application/json",
      "X-Ton-Client-Version": tu
    };
    this.parameters.apiKey && (o["X-API-Key"] = this.parameters.apiKey);
    let a = await eu.default.post(this.endpoint, JSON.stringify({
      id: "1",
      jsonrpc: "2.0",
      method: t,
      params: r
    }), {
      headers: o,
      timeout: this.parameters.timeout,
      adapter: this.parameters.adapter
    });
    if (a.status !== 200 || !a.data.ok) throw Error("Received error: " + JSON.stringify(a.data));
    let i = n.safeParse(a.data.result);
    if (i.success) return i.data;
    throw Error("Malformed response: " + i.error.format()._errors.join(", "))
  }
}
fr.HttpApi = cu;

function uu(e) {
  let t = [];
  for (let r of e)
    if (r.type === "int") t.push(["num", r.value.toString()]);
    else if (r.type === "cell") t.push(["tvm.Cell", r.cell.toBoc().toString("base64")]);
  else if (r.type === "slice") t.push(["tvm.Slice", r.cell.toBoc().toString("base64")]);
  else if (r.type === "builder") t.push(["tvm.Builder", r.cell.toBoc().toString("base64")]);
  else throw Error("Unsupported stack item type: " + r.type);
  return t
}
var Xr = {};
Object.defineProperty(Xr, "__esModule", {
  value: !0
});
Xr.TonClient = void 0;
const fu = fr,
  L = q;
class hu {
  constructor(t) {
    this.parameters = {
      endpoint: t.endpoint
    }, this.api = new fu.HttpApi(this.parameters.endpoint, {
      timeout: t.timeout,
      apiKey: t.apiKey,
      adapter: t.httpAdapter
    })
  }
  async getBalance(t) {
    return (await this.getContractState(t)).balance
  }
  async runMethod(t, r, n = []) {
    let o = await this.api.callGetMethod(t, r, n);
    if (o.exit_code !== 0) throw Error("Unable to execute get method. Got exit_code: " + o.exit_code);
    return {
      gas_used: o.gas_used,
      stack: Ya(o.stack)
    }
  }
  async callGetMethod(t, r, n = []) {
    return this.runMethod(t, r, n)
  }
  async runMethodWithError(t, r, n = []) {
    let o = await this.api.callGetMethod(t, r, n);
    return {
      gas_used: o.gas_used,
      stack: Ya(o.stack),
      exit_code: o.exit_code
    }
  }
  async callGetMethodWithError(t, r, n = []) {
    return this.runMethodWithError(t, r, n)
  }
  async getTransactions(t, r) {
    let n = await this.api.getTransactions(t, r),
      o = [];
    for (let a of n) o.push((0, L.loadTransaction)(L.Cell.fromBoc(v.from(a.data, "base64"))[0].beginParse()));
    return o
  }
  async getTransaction(t, r, n) {
    let o = await this.api.getTransaction(t, r, n);
    return o ? (0, L.loadTransaction)(L.Cell.fromBoc(v.from(o.data, "base64"))[0].beginParse()) : null
  }
  async tryLocateResultTx(t, r, n) {
    let o = await this.api.tryLocateResultTx(t, r, n);
    return (0, L.loadTransaction)(L.Cell.fromBase64(o.data).beginParse())
  }
  async tryLocateSourceTx(t, r, n) {
    let o = await this.api.tryLocateSourceTx(t, r, n);
    return (0, L.loadTransaction)(L.Cell.fromBase64(o.data).beginParse())
  }
  async getMasterchainInfo() {
    let t = await this.api.getMasterchainInfo();
    return {
      workchain: t.init.workchain,
      shard: t.last.shard,
      initSeqno: t.init.seqno,
      latestSeqno: t.last.seqno
    }
  }
  async getWorkchainShards(t) {
    return (await this.api.getShards(t)).map(n => ({
      workchain: n.workchain,
      shard: n.shard,
      seqno: n.seqno
    }))
  }
  async getShardTransactions(t, r, n) {
    let o = await this.api.getBlockTransactions(t, r, n);
    if (o.incomplete) throw Error("Unsupported");
    return o.transactions.map(a => ({
      account: L.Address.parseRaw(a.account),
      lt: a.lt,
      hash: a.hash
    }))
  }
  async sendMessage(t) {
    const r = (0, L.beginCell)().store((0, L.storeMessage)(t)).endCell().toBoc();
    await this.api.sendBoc(r)
  }
  async sendFile(t) {
    await this.api.sendBoc(t)
  }
  async estimateExternalMessageFee(t, r) {
    return await this.api.estimateFee(t, {
      body: r.body,
      initCode: r.initCode,
      initData: r.initData,
      ignoreSignature: r.ignoreSignature
    })
  }
  async sendExternalMessage(t, r) {
    if (await this.isContractDeployed(t.address) || !t.init) {
      const n = (0, L.external)({
        to: t.address,
        body: r
      });
      await this.sendMessage(n)
    } else {
      const n = (0, L.external)({
        to: t.address,
        init: t.init,
        body: r
      });
      await this.sendMessage(n)
    }
  }
  async isContractDeployed(t) {
    return (await this.getContractState(t)).state === "active"
  }
  async getContractState(t) {
    let r = await this.api.getAddressInformation(t),
      n = BigInt(r.balance),
      o = r.state;
    return {
      balance: n,
      state: o,
      code: r.code !== "" ? v.from(r.code, "base64") : null,
      data: r.data !== "" ? v.from(r.data, "base64") : null,
      lastTransaction: r.last_transaction_id.lt !== "0" ? {
        lt: r.last_transaction_id.lt,
        hash: r.last_transaction_id.hash
      } : null,
      blockId: {
        workchain: r.block_id.workchain,
        shard: r.block_id.shard,
        seqno: r.block_id.seqno
      },
      timestampt: r.sync_utime
    }
  }
  open(t) {
    return (0, L.openContract)(t, r => Tn(this, r.address, r.init))
  }
  provider(t, r) {
    return Tn(this, t, r ?? null)
  }
}
Xr.TonClient = hu;

function Ne(e) {
  const t = e["@type"];
  switch (t) {
    case "tvm.list":
    case "tvm.tuple":
      return e.elements.map(Ne);
    case "tvm.cell":
      return L.Cell.fromBoc(v.from(e.bytes, "base64"))[0];
    case "tvm.slice":
      return L.Cell.fromBoc(v.from(e.bytes, "base64"))[0];
    case "tvm.stackEntryCell":
      return Ne(e.cell);
    case "tvm.stackEntrySlice":
      return Ne(e.slice);
    case "tvm.stackEntryTuple":
      return Ne(e.tuple);
    case "tvm.stackEntryList":
      return Ne(e.list);
    case "tvm.stackEntryNumber":
      return Ne(e.number);
    case "tvm.numberDecimal":
      return BigInt(e.number);
    default:
      throw Error("Unsupported item type: " + t)
  }
}

function gu(e) {
  if (e[0] === "num") {
    let t = e[1];
    return t.startsWith("-") ? {
      type: "int",
      value: -BigInt(t.slice(1))
    } : {
      type: "int",
      value: BigInt(t)
    }
  } else {
    if (e[0] === "null") return {
      type: "null"
    };
    if (e[0] === "cell") return {
      type: "cell",
      cell: L.Cell.fromBoc(v.from(e[1].bytes, "base64"))[0]
    };
    if (e[0] === "slice") return {
      type: "slice",
      cell: L.Cell.fromBoc(v.from(e[1].bytes, "base64"))[0]
    };
    if (e[0] === "builder") return {
      type: "builder",
      cell: L.Cell.fromBoc(v.from(e[1].bytes, "base64"))[0]
    };
    if (e[0] === "tuple" || e[0] === "list") return e[1].elements.length === 0 ? {
      type: "null"
    } : {
      type: "tuple",
      items: e[1].elements.map(Ne)
    };
    throw Error("Unsupported stack item type: " + e[0])
  }
}

function Ya(e) {
  let t = [];
  for (let r of e) t.push(gu(r));
  return new L.TupleReader(t)
}

function Tn(e, t, r) {
  return {
    async getState() {
      let n = await e.getContractState(t),
        o = n.balance,
        a = n.lastTransaction ? {
          lt: BigInt(n.lastTransaction.lt),
          hash: v.from(n.lastTransaction.hash, "base64")
        } : null,
        i;
      if (n.state === "active") i = {
        type: "active",
        code: n.code ? n.code : null,
        data: n.data ? n.data : null
      };
      else if (n.state === "uninitialized") i = {
        type: "uninit"
      };
      else if (n.state === "frozen") i = {
        type: "frozen",
        stateHash: v.alloc(0)
      };
      else throw Error("Unsupported state");
      return {
        balance: o,
        last: a,
        state: i
      }
    },
    async get(n, o) {
      return {
        stack: (await e.callGetMethod(t, n, o)).stack
      }
    },
    async external(n) {
      let o = null;
      r && !await e.isContractDeployed(t) && (o = r);
      const a = (0, L.external)({
        to: t,
        init: o,
        body: n
      });
      let i = (0, L.beginCell)().store((0, L.storeMessage)(a)).endCell().toBoc();
      await e.sendFile(i)
    },
    async internal(n, o) {
      let a = null;
      r && !await e.isContractDeployed(t) && (a = r);
      let i = !0;
      o.bounce !== null && o.bounce !== void 0 && (i = o.bounce);
      let s;
      typeof o.value == "string" ? s = (0, L.toNano)(o.value) : s = o.value;
      let l = null;
      typeof o.body == "string" ? l = (0, L.comment)(o.body) : o.body && (l = o.body), await n.send({
        to: t,
        value: s,
        bounce: i,
        sendMode: o.sendMode,
        init: a,
        body: l
      })
    },
    open(n) {
      return (0, L.openContract)(n, o => Tn(e, o.address, o.init ?? null))
    },
    getTransactions(n, o, a, i) {
      return e.getTransactions(n, {
        limit: i ?? 100,
        lt: o.toString(),
        hash: a.toString("base64"),
        inclusive: !0
      })
    }
  }
}
var Jr = {},
  Zr = {};
Object.defineProperty(Zr, "__esModule", {
  value: !0
});
Zr.toUrlSafe = void 0;

function pu(e) {
  for (; e.indexOf("/") >= 0;) e = e.replace("/", "_");
  for (; e.indexOf("+") >= 0;) e = e.replace("+", "-");
  for (; e.indexOf("=") >= 0;) e = e.replace("=", "");
  return e
}
Zr.toUrlSafe = pu;
var gr = I && I.__classPrivateFieldSet || function(e, t, r, n, o) {
    if (n === "m") throw new TypeError("Private method is not writable");
    if (n === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
  },
  T = I && I.__classPrivateFieldGet || function(e, t, r, n) {
    if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e)
  },
  mu = I && I.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  },
  Z, ee, te, G;
Object.defineProperty(Jr, "__esModule", {
  value: !0
});
Jr.TonClient4 = void 0;
const bu = mu(ui),
  Y = q,
  vn = Zr,
  d = fi;
class yu {
  constructor(t) {
    Z.set(this, void 0), ee.set(this, void 0), te.set(this, void 0), G.set(this, void 0), gr(this, G, bu.default.create(), "f"), gr(this, Z, t.endpoint, "f"), gr(this, ee, t.timeout || 5e3, "f"), gr(this, te, t.httpAdapter, "f"), t.requestInterceptor && T(this, G, "f").interceptors.request.use(t.requestInterceptor)
  }
  async getLastBlock() {
    let t = await T(this, G, "f").get(T(this, Z, "f") + "/block/latest", {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      r = wu.safeParse(t.data);
    if (!r.success) throw Error("Mailformed response: " + r.error.format()._errors.join(", "));
    return r.data
  }
  async getBlock(t) {
    let r = await T(this, G, "f").get(T(this, Z, "f") + "/block/" + t, {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      n = Xa.safeParse(r.data);
    if (!n.success) throw Error("Mailformed response");
    if (!n.data.exist) throw Error("Block is out of scope");
    return n.data.block
  }
  async getBlockByUtime(t) {
    let r = await T(this, G, "f").get(T(this, Z, "f") + "/block/utime/" + t, {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      n = Xa.safeParse(r.data);
    if (!n.success) throw Error("Mailformed response");
    if (!n.data.exist) throw Error("Block is out of scope");
    return n.data.block
  }
  async getAccount(t, r) {
    let n = await T(this, G, "f").get(T(this, Z, "f") + "/block/" + t + "/" + r.toString({
        urlSafe: !0
      }), {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      o = vu.safeParse(n.data);
    if (!o.success) throw Error("Mailformed response");
    return o.data
  }
  async getAccountLite(t, r) {
    let n = await T(this, G, "f").get(T(this, Z, "f") + "/block/" + t + "/" + r.toString({
        urlSafe: !0
      }) + "/lite", {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      o = ku.safeParse(n.data);
    if (!o.success) throw Error("Mailformed response");
    return o.data
  }
  async isContractDeployed(t, r) {
    return (await this.getAccountLite(t, r)).account.state.type === "active"
  }
  async isAccountChanged(t, r, n) {
    let o = await T(this, G, "f").get(T(this, Z, "f") + "/block/" + t + "/" + r.toString({
        urlSafe: !0
      }) + "/changed/" + n.toString(10), {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      a = _u.safeParse(o.data);
    if (!a.success) throw Error("Mailformed response");
    return a.data
  }
  async getAccountTransactions(t, r, n) {
    let o = await T(this, G, "f").get(T(this, Z, "f") + "/account/" + t.toString({
        urlSafe: !0
      }) + "/tx/" + r.toString(10) + "/" + (0, vn.toUrlSafe)(n.toString("base64")), {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      a = Pu.safeParse(o.data);
    if (!a.success) throw Error("Mailformed response");
    let i = a.data,
      s = [],
      l = Y.Cell.fromBoc(v.from(i.boc, "base64"));
    for (let c = 0; c < i.blocks.length; c++) s.push({
      block: i.blocks[c],
      tx: (0, Y.loadTransaction)(l[c].beginParse())
    });
    return s
  }
  async getAccountTransactionsParsed(t, r, n, o = 20) {
    let a = await T(this, G, "f").get(T(this, Z, "f") + "/account/" + t.toString({
        urlSafe: !0
      }) + "/tx/parsed/" + r.toString(10) + "/" + (0, vn.toUrlSafe)(n.toString("base64")), {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f"),
        params: {
          count: o
        }
      }),
      i = ju.safeParse(a.data);
    if (!i.success) throw Error("Mailformed response");
    return i.data
  }
  async getConfig(t, r) {
    let n = "";
    r && r.length > 0 && (n = "/" + [...r].sort().join(","));
    let o = await T(this, G, "f").get(T(this, Z, "f") + "/block/" + t + "/config" + n, {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      a = Su.safeParse(o.data);
    if (!a.success) throw Error("Mailformed response");
    return a.data
  }
  async runMethod(t, r, n, o) {
    let a = o && o.length > 0 ? "/" + (0, vn.toUrlSafe)((0, Y.serializeTuple)(o).toBoc({
        idx: !1,
        crc32: !1
      }).toString("base64")) : "",
      i = T(this, Z, "f") + "/block/" + t + "/" + r.toString({
        urlSafe: !0
      }) + "/run/" + encodeURIComponent(n) + a,
      s = await T(this, G, "f").get(i, {
        adapter: T(this, te, "f"),
        timeout: T(this, ee, "f")
      }),
      l = Bu.safeParse(s.data);
    if (!l.success) throw Error("Mailformed response");
    let c = l.data.resultRaw ? (0, Y.parseTuple)(Y.Cell.fromBoc(v.from(l.data.resultRaw, "base64"))[0]) : [];
    return {
      exitCode: l.data.exitCode,
      result: c,
      resultRaw: l.data.resultRaw,
      block: l.data.block,
      shardBlock: l.data.shardBlock,
      reader: new Y.TupleReader(c)
    }
  }
  async sendMessage(t) {
    let r = await T(this, G, "f").post(T(this, Z, "f") + "/send", {
      boc: t.toString("base64")
    }, {
      adapter: T(this, te, "f"),
      timeout: T(this, ee, "f")
    });
    if (!Cu.safeParse(r.data).success) throw Error("Mailformed response");
    return {
      status: r.data.status
    }
  }
  open(t) {
    return (0, Y.openContract)(t, r => rr(this, null, r.address, r.init))
  }
  openAt(t, r) {
    return (0, Y.openContract)(r, n => rr(this, t, n.address, n.init))
  }
  provider(t, r) {
    return rr(this, null, t, r ?? null)
  }
  providerAt(t, r, n) {
    return rr(this, t, r, n ?? null)
  }
}
Jr.TonClient4 = yu;
Z = new WeakMap, ee = new WeakMap, te = new WeakMap, G = new WeakMap;

function rr(e, t, r, n) {
  return {
    async getState() {
      let o = t;
      o === null && (o = (await e.getLastBlock()).last.seqno);
      let a = await e.getAccount(o, r),
        i = a.account.last ? {
          lt: BigInt(a.account.last.lt),
          hash: v.from(a.account.last.hash, "base64")
        } : null,
        s;
      if (a.account.state.type === "active") s = {
        type: "active",
        code: a.account.state.code ? v.from(a.account.state.code, "base64") : null,
        data: a.account.state.data ? v.from(a.account.state.data, "base64") : null
      };
      else if (a.account.state.type === "uninit") s = {
        type: "uninit"
      };
      else if (a.account.state.type === "frozen") s = {
        type: "frozen",
        stateHash: v.from(a.account.state.stateHash, "base64")
      };
      else throw Error("Unsupported state");
      return {
        balance: BigInt(a.account.balance.coins),
        last: i,
        state: s
      }
    },
    async get(o, a) {
      let i = t;
      i === null && (i = (await e.getLastBlock()).last.seqno);
      let s = await e.runMethod(i, r, o, a);
      if (s.exitCode !== 0 && s.exitCode !== 1) throw Error("Exit code: " + s.exitCode);
      return {
        stack: new Y.TupleReader(s.result)
      }
    },
    async external(o) {
      let a = await e.getLastBlock(),
        i = null;
      n && (await e.getAccountLite(a.last.seqno, r)).account.state.type !== "active" && (i = n);
      const s = (0, Y.external)({
        to: r,
        init: i,
        body: o
      });
      let l = (0, Y.beginCell)().store((0, Y.storeMessage)(s)).endCell().toBoc();
      await e.sendMessage(l)
    },
    async internal(o, a) {
      let i = await e.getLastBlock(),
        s = null;
      n && (await e.getAccountLite(i.last.seqno, r)).account.state.type !== "active" && (s = n);
      let l = !0;
      a.bounce !== null && a.bounce !== void 0 && (l = a.bounce);
      let c;
      typeof a.value == "string" ? c = (0, Y.toNano)(a.value) : c = a.value;
      let u = null;
      typeof a.body == "string" ? u = (0, Y.comment)(a.body) : a.body && (u = a.body), await o.send({
        to: r,
        value: c,
        bounce: l,
        sendMode: a.sendMode,
        init: s,
        body: u
      })
    },
    open(o) {
      return (0, Y.openContract)(o, a => rr(e, t, a.address, a.init ?? null))
    },
    async getTransactions(o, a, i, s) {
      const l = typeof s == "number";
      if (l && s <= 0) return [];
      let c = [];
      do {
        const u = await e.getAccountTransactions(o, a, i),
          f = u[0].tx,
          [k, m] = [f.lt, f.hash()];
        if (c.length > 0 && k === a && m.equals(i) && u.shift(), u.length === 0) break;
        const g = u[u.length - 1].tx,
          [_, B] = [g.lt, g.hash()];
        if (_ === a && B.equals(i)) break;
        c.push(...u.map(S => S.tx)), a = _, i = B
      } while (l && c.length < s);
      return l && (c = c.slice(0, s)), c
    }
  }
}
const wu = d.z.object({
    last: d.z.object({
      seqno: d.z.number(),
      shard: d.z.string(),
      workchain: d.z.number(),
      fileHash: d.z.string(),
      rootHash: d.z.string()
    }),
    init: d.z.object({
      fileHash: d.z.string(),
      rootHash: d.z.string()
    }),
    stateRootHash: d.z.string(),
    now: d.z.number()
  }),
  Xa = d.z.union([d.z.object({
    exist: d.z.literal(!1)
  }), d.z.object({
    exist: d.z.literal(!0),
    block: d.z.object({
      shards: d.z.array(d.z.object({
        workchain: d.z.number(),
        seqno: d.z.number(),
        shard: d.z.string(),
        rootHash: d.z.string(),
        fileHash: d.z.string(),
        transactions: d.z.array(d.z.object({
          account: d.z.string(),
          hash: d.z.string(),
          lt: d.z.string()
        }))
      }))
    })
  })]),
  Eo = d.z.object({
    lastPaid: d.z.number(),
    duePayment: d.z.union([d.z.null(), d.z.string()]),
    used: d.z.object({
      bits: d.z.number(),
      cells: d.z.number(),
      publicCells: d.z.number()
    })
  }),
  vu = d.z.object({
    account: d.z.object({
      state: d.z.union([d.z.object({
        type: d.z.literal("uninit")
      }), d.z.object({
        type: d.z.literal("active"),
        code: d.z.union([d.z.string(), d.z.null()]),
        data: d.z.union([d.z.string(), d.z.null()])
      }), d.z.object({
        type: d.z.literal("frozen"),
        stateHash: d.z.string()
      })]),
      balance: d.z.object({
        coins: d.z.string()
      }),
      last: d.z.union([d.z.null(), d.z.object({
        lt: d.z.string(),
        hash: d.z.string()
      })]),
      storageStat: d.z.union([d.z.null(), Eo])
    }),
    block: d.z.object({
      workchain: d.z.number(),
      seqno: d.z.number(),
      shard: d.z.string(),
      rootHash: d.z.string(),
      fileHash: d.z.string()
    })
  }),
  ku = d.z.object({
    account: d.z.object({
      state: d.z.union([d.z.object({
        type: d.z.literal("uninit")
      }), d.z.object({
        type: d.z.literal("active"),
        codeHash: d.z.string(),
        dataHash: d.z.string()
      }), d.z.object({
        type: d.z.literal("frozen"),
        stateHash: d.z.string()
      })]),
      balance: d.z.object({
        coins: d.z.string()
      }),
      last: d.z.union([d.z.null(), d.z.object({
        lt: d.z.string(),
        hash: d.z.string()
      })]),
      storageStat: d.z.union([d.z.null(), Eo])
    })
  }),
  _u = d.z.object({
    changed: d.z.boolean(),
    block: d.z.object({
      workchain: d.z.number(),
      seqno: d.z.number(),
      shard: d.z.string(),
      rootHash: d.z.string(),
      fileHash: d.z.string()
    })
  }),
  Bu = d.z.object({
    exitCode: d.z.number(),
    resultRaw: d.z.union([d.z.string(), d.z.null()]),
    block: d.z.object({
      workchain: d.z.number(),
      seqno: d.z.number(),
      shard: d.z.string(),
      rootHash: d.z.string(),
      fileHash: d.z.string()
    }),
    shardBlock: d.z.object({
      workchain: d.z.number(),
      seqno: d.z.number(),
      shard: d.z.string(),
      rootHash: d.z.string(),
      fileHash: d.z.string()
    })
  }),
  Su = d.z.object({
    config: d.z.object({
      cell: d.z.string(),
      address: d.z.string(),
      globalBalance: d.z.object({
        coins: d.z.string()
      })
    })
  }),
  Cu = d.z.object({
    status: d.z.number()
  }),
  To = d.z.array(d.z.object({
    workchain: d.z.number(),
    seqno: d.z.number(),
    shard: d.z.string(),
    rootHash: d.z.string(),
    fileHash: d.z.string()
  })),
  Pu = d.z.object({
    blocks: To,
    boc: d.z.string()
  }),
  Ja = d.z.object({
    bits: d.z.number(),
    data: d.z.string()
  }),
  Au = d.z.union([d.z.object({
    type: d.z.literal("internal"),
    value: d.z.string(),
    dest: d.z.string(),
    src: d.z.string(),
    bounced: d.z.boolean(),
    bounce: d.z.boolean(),
    ihrDisabled: d.z.boolean(),
    createdAt: d.z.number(),
    createdLt: d.z.string(),
    fwdFee: d.z.string(),
    ihrFee: d.z.string()
  }), d.z.object({
    type: d.z.literal("external-in"),
    dest: d.z.string(),
    src: d.z.union([Ja, d.z.null()]),
    importFee: d.z.string()
  }), d.z.object({
    type: d.z.literal("external-out"),
    dest: d.z.union([Ja, d.z.null()])
  })]),
  Mu = d.z.object({
    splitDepth: d.z.union([d.z.number(), d.z.null()]),
    code: d.z.union([d.z.string(), d.z.null()]),
    data: d.z.union([d.z.string(), d.z.null()]),
    special: d.z.union([d.z.object({
      tick: d.z.boolean(),
      tock: d.z.boolean()
    }), d.z.null()])
  }),
  Za = d.z.object({
    body: d.z.string(),
    info: Au,
    init: d.z.union([Mu, d.z.null()])
  }),
  ei = d.z.union([d.z.literal("uninitialized"), d.z.literal("frozen"), d.z.literal("active"), d.z.literal("non-existing")]),
  Uu = d.z.union([d.z.object({
    type: d.z.literal("comment"),
    comment: d.z.string()
  }), d.z.object({
    type: d.z.literal("payload"),
    cell: d.z.string()
  })]),
  zu = d.z.union([d.z.object({
    kind: d.z.literal("ton"),
    amount: d.z.string()
  }), d.z.object({
    kind: d.z.literal("token"),
    amount: d.z.string()
  })]),
  xu = d.z.union([d.z.literal("jetton::excesses"), d.z.literal("jetton::transfer"), d.z.literal("jetton::transfer_notification"), d.z.literal("deposit"), d.z.literal("deposit::ok"), d.z.literal("withdraw"), d.z.literal("withdraw::all"), d.z.literal("withdraw::delayed"), d.z.literal("withdraw::ok"), d.z.literal("airdrop")]),
  Iu = d.z.object({
    type: xu,
    options: d.z.optional(d.z.record(d.z.string()))
  }),
  Eu = d.z.object({
    address: d.z.string(),
    comment: d.z.optional(d.z.string()),
    items: d.z.array(zu),
    op: d.z.optional(Iu)
  }),
  Tu = d.z.object({
    address: d.z.string(),
    lt: d.z.string(),
    hash: d.z.string(),
    prevTransaction: d.z.object({
      lt: d.z.string(),
      hash: d.z.string()
    }),
    time: d.z.number(),
    outMessagesCount: d.z.number(),
    oldStatus: ei,
    newStatus: ei,
    fees: d.z.string(),
    update: d.z.object({
      oldHash: d.z.string(),
      newHash: d.z.string()
    }),
    inMessage: d.z.union([Za, d.z.null()]),
    outMessages: d.z.array(Za),
    parsed: d.z.object({
      seqno: d.z.union([d.z.number(), d.z.null()]),
      body: d.z.union([Uu, d.z.null()]),
      status: d.z.union([d.z.literal("success"), d.z.literal("failed"), d.z.literal("pending")]),
      dest: d.z.union([d.z.string(), d.z.null()]),
      kind: d.z.union([d.z.literal("out"), d.z.literal("in")]),
      amount: d.z.string(),
      resolvedAddress: d.z.string(),
      bounced: d.z.boolean(),
      mentioned: d.z.array(d.z.string())
    }),
    operation: Eu
  }),
  ju = d.z.object({
    blocks: To,
    transactions: d.z.array(Tu)
  });
var en = {},
  H = {},
  Wt = {},
  gt = {};
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.storeWalletIdV5Beta = gt.loadWalletIdV5Beta = void 0;
const kn = q,
  jo = {
    v5: 0
  };

function Ru(e) {
  var s;
  const t = new kn.BitReader(new kn.BitString(typeof e == "bigint" ? v.from(e.toString(16), "hex") : e instanceof kn.Slice ? e.loadBuffer(10) : e, 0, 80)),
    r = t.loadInt(32),
    n = t.loadInt(8),
    o = t.loadUint(8),
    a = t.loadUint(32),
    i = (s = Object.entries(jo).find(([l, c]) => c === o)) == null ? void 0 : s[0];
  if (i === void 0) throw new Error(`Can't deserialize walletId: unknown wallet version ${o}`);
  return {
    networkGlobalId: r,
    workchain: n,
    walletVersion: i,
    subwalletNumber: a
  }
}
gt.loadWalletIdV5Beta = Ru;

function Ou(e) {
  return t => {
    t.storeInt(e.networkGlobalId, 32), t.storeInt(e.workchain, 8), t.storeUint(jo[e.walletVersion], 8), t.storeUint(e.subwalletNumber, 32)
  }
}
gt.storeWalletIdV5Beta = Ou;
var ti;

function Ro() {
  if (ti) return Wt;
  ti = 1, Object.defineProperty(Wt, "__esModule", {
    value: !0
  }), Wt.WalletContractV5Beta = void 0;
  const e = q,
    t = ge(),
    r = gt;
  class n {
    static create(a) {
      var s, l, c, u;
      const i = {
        networkGlobalId: ((s = a.walletId) == null ? void 0 : s.networkGlobalId) ?? -239,
        workchain: ((l = a == null ? void 0 : a.walletId) == null ? void 0 : l.workchain) ?? 0,
        subwalletNumber: ((c = a == null ? void 0 : a.walletId) == null ? void 0 : c.subwalletNumber) ?? 0,
        walletVersion: ((u = a == null ? void 0 : a.walletId) == null ? void 0 : u.walletVersion) ?? "v5"
      };
      return new n(i, a.publicKey)
    }
    constructor(a, i) {
      this.walletId = a, this.publicKey = i, this.walletId = a;
      let s = e.Cell.fromBoc(v.from("te6cckEBAQEAIwAIQgLkzzsvTG1qYeoPK1RH0mZ4WyavNjfbLe7mvNGqgm80Eg3NjhE=", "base64"))[0],
        l = (0, e.beginCell)().storeInt(0, 33).store((0, r.storeWalletIdV5Beta)(this.walletId)).storeBuffer(this.publicKey, 32).storeBit(0).endCell();
      this.init = {
        code: s,
        data: l
      }, this.address = (0, e.contractAddress)(this.walletId.workchain, {
        code: s,
        data: l
      })
    }
    async getBalance(a) {
      return (await a.getState()).balance
    }
    async getSeqno(a) {
      return (await a.getState()).state.type === "active" ? (await a.get("seqno", [])).stack.readNumber() : 0
    }
    async getExtensions(a) {
      return (await a.getState()).state.type === "active" ? (await a.get("get_extensions", [])).stack.readCellOpt() : null
    }
    async getExtensionsArray(a) {
      const i = await this.getExtensions(a);
      if (!i) return [];
      const s = e.Dictionary.loadDirect(e.Dictionary.Keys.BigUint(256), e.Dictionary.Values.BigInt(8), i);
      return s.keys().map(l => {
        const c = s.get(l),
          u = l ^ c + 1n;
        return e.Address.parseRaw(`${c}:${u.toString(16).padStart(64,"0")}`)
      })
    }
    async getIsSecretKeyAuthEnabled(a) {
      return (await a.get("get_is_signature_auth_allowed", [])).stack.readNumber() !== 0
    }
    async send(a, i) {
      await a.external(i)
    }
    async sendTransfer(a, i) {
      const s = await this.createTransfer(i);
      await this.send(a, s)
    }
    async sendAddExtension(a, i) {
      const s = await this.createAddExtension(i);
      await this.send(a, s)
    }
    async sendRemoveExtension(a, i) {
      const s = await this.createRemoveExtension(i);
      await this.send(a, s)
    }
    async sendActionsBatch(a, i) {
      const s = await this.createRequest(i);
      await this.send(a, s)
    }
    createActions(a) {
      return a.messages.map(s => ({
        type: "sendMsg",
        mode: a.sendMode,
        outMsg: s
      }))
    }
    createTransfer(a) {
      return this.createRequest({
        ...a,
        actions: this.createActions({
          messages: a.messages,
          sendMode: a.sendMode
        })
      })
    }
    createAddExtension(a) {
      return this.createRequest({
        ...a,
        actions: [{
          type: "addExtension",
          address: a.extensionAddress
        }]
      })
    }
    createRemoveExtension(a) {
      return this.createRequest({
        ...a,
        actions: [{
          type: "removeExtension",
          address: a.extensionAddress
        }]
      })
    }
    createRequest(a) {
      return a.authType === "extension" ? (0, t.createWalletTransferV5Beta)(a) : (0, t.createWalletTransferV5Beta)({
        ...a,
        walletId: (0, r.storeWalletIdV5Beta)(this.walletId)
      })
    }
    sender(a, i) {
      return {
        send: async s => {
          let l = await this.getSeqno(a),
            c = this.createTransfer({
              seqno: l,
              secretKey: i,
              sendMode: s.sendMode ?? e.SendMode.PAY_GAS_SEPARATELY + e.SendMode.IGNORE_ERRORS,
              messages: [(0, e.internal)({
                to: s.to,
                value: s.value,
                init: s.init,
                body: s.body,
                bounce: s.bounce
              })]
            });
          await this.send(a, c)
        }
      }
    }
  }
  return Wt.WalletContractV5Beta = n, n.OpCodes = {
    auth_extension: 1702392942,
    auth_signed_external: 1936287598,
    auth_signed_internal: 1936289396
  }, Wt
}
var le = {},
  pt = {};
Object.defineProperty(pt, "__esModule", {
  value: !0
});
pt.isOutActionBasic = pt.isOutActionExtended = void 0;

function Oo(e) {
  return e.type === "setIsPublicKeyEnabled" || e.type === "addExtension" || e.type === "removeExtension"
}
pt.isOutActionExtended = Oo;

function Du(e) {
  return !Oo(e)
}
pt.isOutActionBasic = Du;
Object.defineProperty(le, "__esModule", {
  value: !0
});
le.loadOutListExtendedV5Beta = le.storeOutListExtendedV5Beta = le.loadOutActionV5BetaExtended = le.storeOutActionExtendedV5Beta = void 0;
const br = q,
  ri = pt,
  Do = 550222170;

function Vu(e) {
  return t => {
    t.storeUint(Do, 32).storeUint(e.isEnabled ? 1 : 0, 1)
  }
}
const Vo = 474012575;

function Lu(e) {
  return t => {
    t.storeUint(Vo, 32).storeAddress(e.address)
  }
}
const Lo = 1588524196;

function qu(e) {
  return t => {
    t.storeUint(Lo, 32).storeAddress(e.address)
  }
}

function qo(e) {
  switch (e.type) {
    case "setIsPublicKeyEnabled":
      return Vu(e);
    case "addExtension":
      return Lu(e);
    case "removeExtension":
      return qu(e);
    default:
      throw new Error("Unknown action type" + (e == null ? void 0 : e.type))
  }
}
le.storeOutActionExtendedV5Beta = qo;

function No(e) {
  const t = e.loadUint(32);
  switch (t) {
    case Do:
      return {
        type: "setIsPublicKeyEnabled", isEnabled: !!e.loadUint(1)
      };
    case Vo:
      return {
        type: "addExtension", address: e.loadAddress()
      };
    case Lo:
      return {
        type: "removeExtension", address: e.loadAddress()
      };
    default:
      throw new Error(`Unknown extended out action tag 0x${t.toString(16)}`)
  }
}
le.loadOutActionV5BetaExtended = No;

function $o(e) {
  const [t, ...r] = e;
  if (!t || !(0, ri.isOutActionExtended)(t)) {
    if (e.some(ri.isOutActionExtended)) throw new Error("Can't serialize actions list: all extended actions must be placed before out actions");
    return n => {
      n.storeUint(0, 1).storeRef((0, br.beginCell)().store((0, br.storeOutList)(e)).endCell())
    }
  }
  return n => {
    n.storeUint(1, 1).store(qo(t)).storeRef((0, br.beginCell)().store($o(r)).endCell())
  }
}
le.storeOutListExtendedV5Beta = $o;

function Nu(e) {
  const t = [];
  for (; e.loadUint(1);) {
    const n = No(e);
    t.push(n), e = e.loadRef().beginParse()
  }
  const r = (0, br.loadOutList)(e.loadRef().beginParse());
  if (r.some(n => n.type === "setCode")) throw new Error("Can't deserialize actions list: only sendMsg actions are allowed for wallet v5");
  return t.concat(r)
}
le.loadOutListExtendedV5Beta = Nu;
var tn = {};
Object.defineProperty(tn, "__esModule", {
  value: !0
});
tn.signPayload = void 0;
const $u = bt();

function Wu(e, t, r) {
  return "secretKey" in e ? r((0, $u.sign)(t.endCell().hash(), e.secretKey), t) : e.signer(t.endCell()).then(n => r(n, t))
}
tn.signPayload = Wu;
var Ft = {},
  ke = {};
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.storeWalletIdV5R1 = ke.loadWalletIdV5R1 = ke.isWalletIdV5R1ClientContext = void 0;
const kt = q;

function Wo(e) {
  return typeof e != "number"
}
ke.isWalletIdV5R1ClientContext = Wo;
const Fo = {
  v5r1: 0
};

function Fu(e, t) {
  var i;
  const r = new kt.BitReader(new kt.BitString(typeof e == "bigint" ? v.from(e.toString(16), "hex") : e instanceof kt.Slice ? e.loadBuffer(4) : e, 0, 32)).loadInt(32),
    n = BigInt(r) ^ BigInt(t),
    o = (0, kt.beginCell)().storeInt(n, 32).endCell().beginParse();
  if (o.loadUint(1)) {
    const s = o.loadInt(8),
      l = o.loadUint(8),
      c = o.loadUint(15),
      u = (i = Object.entries(Fo).find(([f, k]) => k === l)) == null ? void 0 : i[0];
    if (u === void 0) throw new Error(`Can't deserialize walletId: unknown wallet version ${l}`);
    return {
      networkGlobalId: t,
      context: {
        walletVersion: u,
        workchain: s,
        subwalletNumber: c
      }
    }
  } else {
    const s = o.loadUint(31);
    return {
      networkGlobalId: t,
      context: s
    }
  }
}
ke.loadWalletIdV5R1 = Fu;

function Ku(e) {
  return t => {
    let r;
    return Wo(e.context) ? r = (0, kt.beginCell)().storeUint(1, 1).storeInt(e.context.workchain, 8).storeUint(Fo[e.context.walletVersion], 8).storeUint(e.context.subwalletNumber, 15).endCell().beginParse().loadInt(32) : r = (0, kt.beginCell)().storeUint(0, 1).storeUint(e.context, 31).endCell().beginParse().loadInt(32), t.storeInt(BigInt(e.networkGlobalId) ^ BigInt(r), 32)
  }
}
ke.storeWalletIdV5R1 = Ku;
var ni;

function Ko() {
  if (ni) return Ft;
  ni = 1, Object.defineProperty(Ft, "__esModule", {
    value: !0
  }), Ft.WalletContractV5R1 = void 0;
  const e = q,
    t = ge(),
    r = ke;
  class n {
    static create(a) {
      var s, l, c;
      let i = 0;
      return "workchain" in a && a.workchain != null && (i = a.workchain), (s = a.walletId) != null && s.context && (0, r.isWalletIdV5R1ClientContext)(a.walletId.context) && a.walletId.context.workchain != null && (i = a.walletId.context.workchain), new n(i, a.publicKey, {
        networkGlobalId: ((l = a.walletId) == null ? void 0 : l.networkGlobalId) ?? -239,
        context: ((c = a.walletId) == null ? void 0 : c.context) ?? {
          workchain: 0,
          walletVersion: "v5r1",
          subwalletNumber: 0
        }
      })
    }
    constructor(a, i, s) {
      this.publicKey = i, this.walletId = s, this.walletId = s;
      let l = e.Cell.fromBoc(v.from("b5ee9c7241021401000281000114ff00f4a413f4bcf2c80b01020120020d020148030402dcd020d749c120915b8f6320d70b1f2082106578746ebd21821073696e74bdb0925f03e082106578746eba8eb48020d72101d074d721fa4030fa44f828fa443058bd915be0ed44d0810141d721f4058307f40e6fa1319130e18040d721707fdb3ce03120d749810280b99130e070e2100f020120050c020120060902016e07080019adce76a2684020eb90eb85ffc00019af1df6a2684010eb90eb858fc00201480a0b0017b325fb51341c75c875c2c7e00011b262fb513435c280200019be5f0f6a2684080a0eb90fa02c0102f20e011e20d70b1f82107369676ebaf2e08a7f0f01e68ef0eda2edfb218308d722028308d723208020d721d31fd31fd31fed44d0d200d31f20d31fd3ffd70a000af90140ccf9109a28945f0adb31e1f2c087df02b35007b0f2d0845125baf2e0855036baf2e086f823bbf2d0882292f800de01a47fc8ca00cb1f01cf16c9ed542092f80fde70db3cd81003f6eda2edfb02f404216e926c218e4c0221d73930709421c700b38e2d01d72820761e436c20d749c008f2e09320d74ac002f2e09320d71d06c712c2005230b0f2d089d74cd7393001a4e86c128407bbf2e093d74ac000f2e093ed55e2d20001c000915be0ebd72c08142091709601d72c081c12e25210b1e30f20d74a111213009601fa4001fa44f828fa443058baf2e091ed44d0810141d718f405049d7fc8ca0040048307f453f2e08b8e14038307f45bf2e08c22d70a00216e01b3b0f2d090e2c85003cf1612f400c9ed54007230d72c08248e2d21f2e092d200ed44d0d2005113baf2d08f54503091319c01810140d721d70a00f2e08ee2c8ca0058cf16c9ed5493f2c08de20010935bdb31e1d74cd0b4d6c35e", "hex"))[0],
        c = (0, e.beginCell)().storeUint(1, 1).storeUint(0, 32).store((0, r.storeWalletIdV5R1)(this.walletId)).storeBuffer(this.publicKey, 32).storeBit(0).endCell();
      this.init = {
        code: l,
        data: c
      }, this.address = (0, e.contractAddress)(a, {
        code: l,
        data: c
      })
    }
    async getBalance(a) {
      return (await a.getState()).balance
    }
    async getSeqno(a) {
      return (await a.getState()).state.type === "active" ? (await a.get("seqno", [])).stack.readNumber() : 0
    }
    async getExtensions(a) {
      return (await a.getState()).state.type === "active" ? (await a.get("get_extensions", [])).stack.readCellOpt() : null
    }
    async getExtensionsArray(a) {
      const i = await this.getExtensions(a);
      return i ? e.Dictionary.loadDirect(e.Dictionary.Keys.BigUint(256), e.Dictionary.Values.BigInt(1), i).keys().map(l => {
        const c = this.address.workChain;
        return e.Address.parseRaw(`${c}:${l.toString(16).padStart(64,"0")}`)
      }) : []
    }
    async getIsSecretKeyAuthEnabled(a) {
      return (await a.get("is_signature_allowed", [])).stack.readBoolean()
    }
    async send(a, i) {
      await a.external(i)
    }
    async sendTransfer(a, i) {
      const s = await this.createTransfer(i);
      await this.send(a, s)
    }
    async sendAddExtension(a, i) {
      const s = await this.createAddExtension(i);
      await this.send(a, s)
    }
    async sendRemoveExtension(a, i) {
      const s = await this.createRemoveExtension(i);
      await this.send(a, s)
    }
    createActions(a) {
      return a.messages.map(s => ({
        type: "sendMsg",
        mode: a.sendMode,
        outMsg: s
      }))
    }
    createTransfer(a) {
      return this.createRequest({
        actions: this.createActions({
          messages: a.messages,
          sendMode: a.sendMode
        }),
        ...a
      })
    }
    createAddExtension(a) {
      return this.createRequest({
        actions: [{
          type: "addExtension",
          address: a.extensionAddress
        }],
        ...a
      })
    }
    createRemoveExtension(a) {
      return this.createRequest({
        actions: [{
          type: "removeExtension",
          address: a.extensionAddress
        }],
        ...a
      })
    }
    createRequest(a) {
      return a.authType === "extension" ? (0, t.createWalletTransferV5R1)(a) : (0, t.createWalletTransferV5R1)({
        ...a,
        walletId: (0, r.storeWalletIdV5R1)(this.walletId)
      })
    }
    sender(a, i) {
      return {
        send: async s => {
          let l = await this.getSeqno(a),
            c = this.createTransfer({
              seqno: l,
              secretKey: i,
              sendMode: s.sendMode ?? e.SendMode.PAY_GAS_SEPARATELY + e.SendMode.IGNORE_ERRORS,
              messages: [(0, e.internal)({
                to: s.to,
                value: s.value,
                init: s.init,
                body: s.body,
                bounce: s.bounce
              })]
            });
          await this.send(a, c)
        }
      }
    }
  }
  return Ft.WalletContractV5R1 = n, n.OpCodes = {
    auth_extension: 1702392942,
    auth_signed_external: 1936287598,
    auth_signed_internal: 1936289396
  }, Ft
}
var J = {};
Object.defineProperty(J, "__esModule", {
  value: !0
});
J.patchV5R1ActionsSendMode = J.toSafeV5R1SendMode = J.loadOutListExtendedV5R1 = J.storeOutListExtendedV5R1 = J.loadOutActionExtendedV5R1 = J.storeOutActionExtendedV5R1 = void 0;
const ir = q,
  ai = pt,
  Ho = 4;

function Hu(e) {
  return t => {
    t.storeUint(Ho, 8).storeUint(e.isEnabled ? 1 : 0, 1)
  }
}
const Go = 2;

function Gu(e) {
  return t => {
    t.storeUint(Go, 8).storeAddress(e.address)
  }
}
const Qo = 3;

function Qu(e) {
  return t => {
    t.storeUint(Qo, 8).storeAddress(e.address)
  }
}

function Zn(e) {
  switch (e.type) {
    case "setIsPublicKeyEnabled":
      return Hu(e);
    case "addExtension":
      return Gu(e);
    case "removeExtension":
      return Qu(e);
    default:
      throw new Error("Unknown action type" + (e == null ? void 0 : e.type))
  }
}
J.storeOutActionExtendedV5R1 = Zn;

function jn(e) {
  const t = e.loadUint(8);
  switch (t) {
    case Ho:
      return {
        type: "setIsPublicKeyEnabled", isEnabled: !!e.loadUint(1)
      };
    case Go:
      return {
        type: "addExtension", address: e.loadAddress()
      };
    case Qo:
      return {
        type: "removeExtension", address: e.loadAddress()
      };
    default:
      throw new Error(`Unknown extended out action tag 0x${t.toString(16)}`)
  }
}
J.loadOutActionExtendedV5R1 = jn;

function Yu(e) {
  const t = e.filter(ai.isOutActionExtended),
    r = e.filter(ai.isOutActionBasic);
  return n => {
    const o = r.length ? (0, ir.beginCell)().store((0, ir.storeOutList)(r.slice().reverse())) : null;
    if (n.storeMaybeRef(o), t.length === 0) n.storeUint(0, 1);
    else {
      const [a, ...i] = t;
      n.storeUint(1, 1).store(Zn(a)), i.length > 0 && n.storeRef(Yo(i))
    }
  }
}
J.storeOutListExtendedV5R1 = Yu;

function Yo(e) {
  const [t, ...r] = e;
  let n = (0, ir.beginCell)().store(Zn(t));
  return r.length > 0 && (n = n.storeRef(Yo(r))), n.endCell()
}

function Xu(e) {
  const t = [],
    r = e.loadMaybeRef();
  if (r) {
    const n = (0, ir.loadOutList)(r.beginParse());
    if (n.some(o => o.type !== "sendMsg")) throw new Error("Can't deserialize actions list: only sendMsg actions are allowed for wallet v5r1");
    t.push(...n)
  }
  if (e.loadBoolean()) {
    const n = jn(e);
    t.push(n)
  }
  for (; e.remainingRefs > 0;) {
    e = e.loadRef().beginParse();
    const n = jn(e);
    t.push(n)
  }
  return t
}
J.loadOutListExtendedV5R1 = Xu;

function Xo(e, t) {
  return t === "internal" || t === "extension" ? e : e | ir.SendMode.IGNORE_ERRORS
}
J.toSafeV5R1SendMode = Xo;

function Ju(e, t) {
  return e.map(r => r.type === "sendMsg" ? {
    ...r,
    mode: Xo(r.mode, t)
  } : r)
}
J.patchV5R1ActionsSendMode = Ju;
var ii;

function ge() {
  if (ii) return H;
  ii = 1, Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.createWalletTransferV5R1 = H.createWalletTransferV5Beta = H.createWalletTransferV4 = H.createWalletTransferV3 = H.createWalletTransferV2 = H.createWalletTransferV1 = void 0;
  const e = q,
    t = bt(),
    r = Ro(),
    n = le,
    o = tn,
    a = Ko(),
    i = J;

  function s(g, _) {
    return (0, e.beginCell)().storeBuffer(g).storeBuilder(_).endCell()
  }

  function l(g, _) {
    return (0, e.beginCell)().storeBuilder(_).storeBuffer(g).endCell()
  }

  function c(g) {
    let _ = (0, e.beginCell)().storeUint(g.seqno, 32);
    g.message && (_.storeUint(g.sendMode, 8), _.storeRef((0, e.beginCell)().store((0, e.storeMessageRelaxed)(g.message))));
    let B = (0, t.sign)(_.endCell().hash(), g.secretKey);
    return (0, e.beginCell)().storeBuffer(B).storeBuilder(_).endCell()
  }
  H.createWalletTransferV1 = c;

  function u(g) {
    if (g.messages.length > 4) throw Error("Maximum number of messages in a single transfer is 4");
    let _ = (0, e.beginCell)().storeUint(g.seqno, 32);
    if (g.seqno === 0)
      for (let y = 0; y < 32; y++) _.storeBit(1);
    else _.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    for (let y of g.messages) _.storeUint(g.sendMode, 8), _.storeRef((0, e.beginCell)().store((0, e.storeMessageRelaxed)(y)));
    let B = (0, t.sign)(_.endCell().hash(), g.secretKey);
    return (0, e.beginCell)().storeBuffer(B).storeBuilder(_).endCell()
  }
  H.createWalletTransferV2 = u;

  function f(g) {
    if (g.messages.length > 4) throw Error("Maximum number of messages in a single transfer is 4");
    let _ = (0, e.beginCell)().storeUint(g.walletId, 32);
    if (g.seqno === 0)
      for (let B = 0; B < 32; B++) _.storeBit(1);
    else _.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    _.storeUint(g.seqno, 32);
    for (let B of g.messages) _.storeUint(g.sendMode, 8), _.storeRef((0, e.beginCell)().store((0, e.storeMessageRelaxed)(B)));
    return (0, o.signPayload)(g, _, s)
  }
  H.createWalletTransferV3 = f;

  function k(g) {
    if (g.messages.length > 4) throw Error("Maximum number of messages in a single transfer is 4");
    let _ = (0, e.beginCell)().storeUint(g.walletId, 32);
    if (g.seqno === 0)
      for (let B = 0; B < 32; B++) _.storeBit(1);
    else _.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    _.storeUint(g.seqno, 32), _.storeUint(0, 8);
    for (let B of g.messages) _.storeUint(g.sendMode, 8), _.storeRef((0, e.beginCell)().store((0, e.storeMessageRelaxed)(B)));
    return (0, o.signPayload)(g, _, s)
  }
  H.createWalletTransferV4 = k;

  function m(g) {
    if (g.actions.length > 255) throw Error("Maximum number of OutActions in a single request is 255");
    if (g.authType === "extension") return (0, e.beginCell)().storeUint(r.WalletContractV5Beta.OpCodes.auth_extension, 32).store((0, n.storeOutListExtendedV5Beta)(g.actions)).endCell();
    const _ = (0, e.beginCell)().storeUint(g.authType === "internal" ? r.WalletContractV5Beta.OpCodes.auth_signed_internal : r.WalletContractV5Beta.OpCodes.auth_signed_external, 32).store(g.walletId);
    if (g.seqno === 0)
      for (let B = 0; B < 32; B++) _.storeBit(1);
    else _.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    return _.storeUint(g.seqno, 32).store((0, n.storeOutListExtendedV5Beta)(g.actions)), (0, o.signPayload)(g, _, l)
  }
  H.createWalletTransferV5Beta = m;

  function P(g) {
    if (g.actions.length > 255) throw Error("Maximum number of OutActions in a single request is 255");
    if (g = {
        ...g
      }, g.authType === "extension") return (0, e.beginCell)().storeUint(a.WalletContractV5R1.OpCodes.auth_extension, 32).storeUint(g.queryId ?? 0, 64).store((0, i.storeOutListExtendedV5R1)(g.actions)).endCell();
    g.actions = (0, i.patchV5R1ActionsSendMode)(g.actions, g.authType);
    const _ = (0, e.beginCell)().storeUint(g.authType === "internal" ? a.WalletContractV5R1.OpCodes.auth_signed_internal : a.WalletContractV5R1.OpCodes.auth_signed_external, 32).store(g.walletId);
    if (g.seqno === 0)
      for (let B = 0; B < 32; B++) _.storeBit(1);
    else _.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    return _.storeUint(g.seqno, 32).store((0, i.storeOutListExtendedV5R1)(g.actions)), (0, o.signPayload)(g, _, l)
  }
  return H.createWalletTransferV5R1 = P, H
}
Object.defineProperty(en, "__esModule", {
  value: !0
});
en.WalletContractV1R1 = void 0;
const wt = q,
  Zu = ge();
class ea {
  static create(t) {
    return new ea(t.workchain, t.publicKey)
  }
  constructor(t, r) {
    this.workchain = t, this.publicKey = r;
    let n = wt.Cell.fromBoc(v.from("te6cckEBAQEARAAAhP8AIN2k8mCBAgDXGCDXCx/tRNDTH9P/0VESuvKhIvkBVBBE+RDyovgAAdMfMSDXSpbTB9QC+wDe0aTIyx/L/8ntVEH98Ik=", "base64"))[0],
      o = (0, wt.beginCell)().storeUint(0, 32).storeBuffer(r).endCell();
    this.init = {
      code: n,
      data: o
    }, this.address = (0, wt.contractAddress)(t, {
      code: n,
      data: o
    })
  }
  async getBalance(t) {
    return (await t.getState()).balance
  }
  async getSeqno(t) {
    let r = await t.getState();
    return r.state.type === "active" ? wt.Cell.fromBoc(r.state.data)[0].beginParse().loadUint(32) : 0
  }
  async send(t, r) {
    await t.external(r)
  }
  async sendTransfer(t, r) {
    let n = this.createTransfer(r);
    await this.send(t, n)
  }
  createTransfer(t) {
    let r = wt.SendMode.PAY_GAS_SEPARATELY;
    return t.sendMode !== null && t.sendMode !== void 0 && (r = t.sendMode), (0, Zu.createWalletTransferV1)({
      seqno: t.seqno,
      sendMode: r,
      secretKey: t.secretKey,
      message: t.message
    })
  }
  sender(t, r) {
    return {
      send: async n => {
        let o = await this.getSeqno(t),
          a = this.createTransfer({
            seqno: o,
            secretKey: r,
            sendMode: n.sendMode,
            message: (0, wt.internal)({
              to: n.to,
              value: n.value,
              init: n.init,
              body: n.body,
              bounce: n.bounce
            })
          });
        await this.send(t, a)
      }
    }
  }
}
en.WalletContractV1R1 = ea;
var rn = {};
Object.defineProperty(rn, "__esModule", {
  value: !0
});
rn.WalletContractV1R2 = void 0;
const Kt = q,
  ef = ge();
class ta {
  static create(t) {
    return new ta(t.workchain, t.publicKey)
  }
  constructor(t, r) {
    this.workchain = t, this.publicKey = r;
    let n = Kt.Cell.fromBoc(v.from("te6cckEBAQEAUwAAov8AIN0gggFMl7qXMO1E0NcLH+Ck8mCBAgDXGCDXCx/tRNDTH9P/0VESuvKhIvkBVBBE+RDyovgAAdMfMSDXSpbTB9QC+wDe0aTIyx/L/8ntVNDieG8=", "base64"))[0],
      o = (0, Kt.beginCell)().storeUint(0, 32).storeBuffer(r).endCell();
    this.init = {
      code: n,
      data: o
    }, this.address = (0, Kt.contractAddress)(t, {
      code: n,
      data: o
    })
  }
  async getBalance(t) {
    return (await t.getState()).balance
  }
  async getSeqno(t) {
    return (await t.getState()).state.type === "active" ? (await t.get("seqno", [])).stack.readNumber() : 0
  }
  async send(t, r) {
    await t.external(r)
  }
  async sendTransfer(t, r) {
    let n = this.createTransfer(r);
    await this.send(t, n)
  }
  createTransfer(t) {
    let r = Kt.SendMode.PAY_GAS_SEPARATELY;
    return t.sendMode !== null && t.sendMode !== void 0 && (r = t.sendMode), (0, ef.createWalletTransferV1)({
      seqno: t.seqno,
      sendMode: r,
      secretKey: t.secretKey,
      message: t.message
    })
  }
  sender(t, r) {
    return {
      send: async n => {
        let o = await this.getSeqno(t),
          a = this.createTransfer({
            seqno: o,
            secretKey: r,
            sendMode: n.sendMode,
            message: (0, Kt.internal)({
              to: n.to,
              value: n.value,
              init: n.init,
              body: n.body,
              bounce: n.bounce
            })
          });
        await this.send(t, a)
      }
    }
  }
}
rn.WalletContractV1R2 = ta;
var nn = {};
Object.defineProperty(nn, "__esModule", {
  value: !0
});
nn.WalletContractV1R3 = void 0;
const Ht = q,
  tf = ge();
class ra {
  static create(t) {
    return new ra(t.workchain, t.publicKey)
  }
  constructor(t, r) {
    this.workchain = t, this.publicKey = r;
    let n = Ht.Cell.fromBoc(v.from("te6cckEBAQEAXwAAuv8AIN0gggFMl7ohggEznLqxnHGw7UTQ0x/XC//jBOCk8mCBAgDXGCDXCx/tRNDTH9P/0VESuvKhIvkBVBBE+RDyovgAAdMfMSDXSpbTB9QC+wDe0aTIyx/L/8ntVLW4bkI=", "base64"))[0],
      o = (0, Ht.beginCell)().storeUint(0, 32).storeBuffer(r).endCell();
    this.init = {
      code: n,
      data: o
    }, this.address = (0, Ht.contractAddress)(t, {
      code: n,
      data: o
    })
  }
  async getBalance(t) {
    return (await t.getState()).balance
  }
  async getSeqno(t) {
    return (await t.getState()).state.type === "active" ? (await t.get("seqno", [])).stack.readNumber() : 0
  }
  async send(t, r) {
    await t.external(r)
  }
  async sendTransfer(t, r) {
    let n = this.createTransfer(r);
    await this.send(t, n)
  }
  createTransfer(t) {
    let r = Ht.SendMode.PAY_GAS_SEPARATELY;
    return t.sendMode !== null && t.sendMode !== void 0 && (r = t.sendMode), (0, tf.createWalletTransferV1)({
      seqno: t.seqno,
      sendMode: r,
      secretKey: t.secretKey,
      message: t.message
    })
  }
  sender(t, r) {
    return {
      send: async n => {
        let o = await this.getSeqno(t),
          a = this.createTransfer({
            seqno: o,
            secretKey: r,
            sendMode: n.sendMode,
            message: (0, Ht.internal)({
              to: n.to,
              value: n.value,
              init: n.init,
              body: n.body,
              bounce: n.bounce
            })
          });
        await this.send(t, a)
      }
    }
  }
}
nn.WalletContractV1R3 = ra;
var an = {};
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.WalletContractV2R1 = void 0;
const Gt = q,
  rf = ge();
class na {
  static create(t) {
    return new na(t.workchain, t.publicKey)
  }
  constructor(t, r) {
    this.workchain = t, this.publicKey = r;
    let n = Gt.Cell.fromBoc(v.from("te6cckEBAQEAVwAAqv8AIN0gggFMl7qXMO1E0NcLH+Ck8mCDCNcYINMf0x8B+CO78mPtRNDTH9P/0VExuvKhA/kBVBBC+RDyovgAApMg10qW0wfUAvsA6NGkyMsfy//J7VShNwu2", "base64"))[0],
      o = (0, Gt.beginCell)().storeUint(0, 32).storeBuffer(r).endCell();
    this.init = {
      code: n,
      data: o
    }, this.address = (0, Gt.contractAddress)(t, {
      code: n,
      data: o
    })
  }
  async getBalance(t) {
    return (await t.getState()).balance
  }
  async getSeqno(t) {
    return (await t.getState()).state.type === "active" ? (await t.get("seqno", [])).stack.readNumber() : 0
  }
  async send(t, r) {
    await t.external(r)
  }
  async sendTransfer(t, r) {
    let n = this.createTransfer(r);
    await this.send(t, n)
  }
  createTransfer(t) {
    let r = Gt.SendMode.PAY_GAS_SEPARATELY;
    return t.sendMode !== null && t.sendMode !== void 0 && (r = t.sendMode), (0, rf.createWalletTransferV2)({
      seqno: t.seqno,
      sendMode: r,
      secretKey: t.secretKey,
      messages: t.messages,
      timeout: t.timeout
    })
  }
  sender(t, r) {
    return {
      send: async n => {
        let o = await this.getSeqno(t),
          a = this.createTransfer({
            seqno: o,
            secretKey: r,
            sendMode: n.sendMode,
            messages: [(0, Gt.internal)({
              to: n.to,
              value: n.value,
              init: n.init,
              body: n.body,
              bounce: n.bounce
            })]
          });
        await this.send(t, a)
      }
    }
  }
}
an.WalletContractV2R1 = na;
var on = {};
Object.defineProperty(on, "__esModule", {
  value: !0
});
on.WalletContractV2R2 = void 0;
const Qt = q,
  nf = ge();
class aa {
  static create(t) {
    return new aa(t.workchain, t.publicKey)
  }
  constructor(t, r) {
    this.workchain = t, this.publicKey = r;
    let n = Qt.Cell.fromBoc(v.from("te6cckEBAQEAYwAAwv8AIN0gggFMl7ohggEznLqxnHGw7UTQ0x/XC//jBOCk8mCDCNcYINMf0x8B+CO78mPtRNDTH9P/0VExuvKhA/kBVBBC+RDyovgAApMg10qW0wfUAvsA6NGkyMsfy//J7VQETNeh", "base64"))[0],
      o = (0, Qt.beginCell)().storeUint(0, 32).storeBuffer(r).endCell();
    this.init = {
      code: n,
      data: o
    }, this.address = (0, Qt.contractAddress)(t, {
      code: n,
      data: o
    })
  }
  async getBalance(t) {
    return (await t.getState()).balance
  }
  async getSeqno(t) {
    return (await t.getState()).state.type === "active" ? (await t.get("seqno", [])).stack.readNumber() : 0
  }
  async send(t, r) {
    await t.external(r)
  }
  async sendTransfer(t, r) {
    let n = this.createTransfer(r);
    await this.send(t, n)
  }
  createTransfer(t) {
    let r = Qt.SendMode.PAY_GAS_SEPARATELY;
    return t.sendMode !== null && t.sendMode !== void 0 && (r = t.sendMode), (0, nf.createWalletTransferV2)({
      seqno: t.seqno,
      sendMode: r,
      secretKey: t.secretKey,
      messages: t.messages,
      timeout: t.timeout
    })
  }
  sender(t, r) {
    return {
      send: async n => {
        let o = await this.getSeqno(t),
          a = this.createTransfer({
            seqno: o,
            secretKey: r,
            sendMode: n.sendMode,
            messages: [(0, Qt.internal)({
              to: n.to,
              value: n.value,
              init: n.init,
              body: n.body,
              bounce: n.bounce
            })]
          });
        await this.send(t, a)
      }
    }
  }
}
on.WalletContractV2R2 = aa;
var sn = {};
Object.defineProperty(sn, "__esModule", {
  value: !0
});
sn.WalletContractV3R1 = void 0;
const Yt = q,
  af = ge();
class ia {
  static create(t) {
    return new ia(t.workchain, t.publicKey, t.walletId)
  }
  constructor(t, r, n) {
    this.workchain = t, this.publicKey = r, n != null ? this.walletId = n : this.walletId = 698983191 + t;
    let o = Yt.Cell.fromBoc(v.from("te6cckEBAQEAYgAAwP8AIN0gggFMl7qXMO1E0NcLH+Ck8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVD++buA=", "base64"))[0],
      a = (0, Yt.beginCell)().storeUint(0, 32).storeUint(this.walletId, 32).storeBuffer(r).endCell();
    this.init = {
      code: o,
      data: a
    }, this.address = (0, Yt.contractAddress)(t, {
      code: o,
      data: a
    })
  }
  async getBalance(t) {
    return (await t.getState()).balance
  }
  async getSeqno(t) {
    return (await t.getState()).state.type === "active" ? (await t.get("seqno", [])).stack.readNumber() : 0
  }
  async send(t, r) {
    await t.external(r)
  }
  async sendTransfer(t, r) {
    let n = this.createTransfer(r);
    await this.send(t, n)
  }
  createTransfer(t) {
    return (0, af.createWalletTransferV3)({
      ...t,
      sendMode: t.sendMode ?? Yt.SendMode.PAY_GAS_SEPARATELY,
      walletId: this.walletId
    })
  }
  sender(t, r) {
    return {
      send: async n => {
        let o = await this.getSeqno(t),
          a = this.createTransfer({
            seqno: o,
            secretKey: r,
            sendMode: n.sendMode,
            messages: [(0, Yt.internal)({
              to: n.to,
              value: n.value,
              init: n.init,
              body: n.body,
              bounce: n.bounce
            })]
          });
        await this.send(t, a)
      }
    }
  }
}
sn.WalletContractV3R1 = ia;
var ln = {};
Object.defineProperty(ln, "__esModule", {
  value: !0
});
ln.WalletContractV3R2 = void 0;
const Xt = q,
  of = ge();
class oa {
  static create(t) {
    return new oa(t.workchain, t.publicKey, t.walletId)
  }
  constructor(t, r, n) {
    this.workchain = t, this.publicKey = r, n != null ? this.walletId = n : this.walletId = 698983191 + t;
    let o = Xt.Cell.fromBoc(v.from("te6cckEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVBC9ba0=", "base64"))[0],
      a = (0, Xt.beginCell)().storeUint(0, 32).storeUint(this.walletId, 32).storeBuffer(r).endCell();
    this.init = {
      code: o,
      data: a
    }, this.address = (0, Xt.contractAddress)(t, {
      code: o,
      data: a
    })
  }
  async getBalance(t) {
    return (await t.getState()).balance
  }
  async getSeqno(t) {
    return (await t.getState()).state.type === "active" ? (await t.get("seqno", [])).stack.readNumber() : 0
  }
  async send(t, r) {
    await t.external(r)
  }
  async sendTransfer(t, r) {
    let n = this.createTransfer(r);
    await this.send(t, n)
  }
  createTransfer(t) {
    return (0, of.createWalletTransferV3)({
      ...t,
      sendMode: t.sendMode ?? Xt.SendMode.PAY_GAS_SEPARATELY,
      walletId: this.walletId
    })
  }
  sender(t, r) {
    return {
      send: async n => {
        let o = await this.getSeqno(t),
          a = this.createTransfer({
            seqno: o,
            secretKey: r,
            sendMode: n.sendMode,
            messages: [(0, Xt.internal)({
              to: n.to,
              value: n.value,
              init: n.init,
              body: n.body,
              bounce: n.bounce
            })]
          });
        await this.send(t, a)
      }
    }
  }
}
ln.WalletContractV3R2 = oa;
var dn = {};
Object.defineProperty(dn, "__esModule", {
  value: !0
});
dn.WalletContractV4 = void 0;
const Jt = q,
  sf = ge();
class sa {
  static create(t) {
    return new sa(t.workchain, t.publicKey, t.walletId)
  }
  constructor(t, r, n) {
    this.workchain = t, this.publicKey = r, n != null ? this.walletId = n : this.walletId = 698983191 + t;
    let o = Jt.Cell.fromBoc(v.from("te6ccgECFAEAAtQAART/APSkE/S88sgLAQIBIAIDAgFIBAUE+PKDCNcYINMf0x/THwL4I7vyZO1E0NMf0x/T//QE0VFDuvKhUVG68qIF+QFUEGT5EPKj+AAkpMjLH1JAyx9SMMv/UhD0AMntVPgPAdMHIcAAn2xRkyDXSpbTB9QC+wDoMOAhwAHjACHAAuMAAcADkTDjDQOkyMsfEssfy/8QERITAubQAdDTAyFxsJJfBOAi10nBIJJfBOAC0x8hghBwbHVnvSKCEGRzdHK9sJJfBeAD+kAwIPpEAcjKB8v/ydDtRNCBAUDXIfQEMFyBAQj0Cm+hMbOSXwfgBdM/yCWCEHBsdWe6kjgw4w0DghBkc3RyupJfBuMNBgcCASAICQB4AfoA9AQw+CdvIjBQCqEhvvLgUIIQcGx1Z4MesXCAGFAEywUmzxZY+gIZ9ADLaRfLH1Jgyz8gyYBA+wAGAIpQBIEBCPRZMO1E0IEBQNcgyAHPFvQAye1UAXKwjiOCEGRzdHKDHrFwgBhQBcsFUAPPFiP6AhPLassfyz/JgED7AJJfA+ICASAKCwBZvSQrb2omhAgKBrkPoCGEcNQICEekk30pkQzmkD6f+YN4EoAbeBAUiYcVnzGEAgFYDA0AEbjJftRNDXCx+AA9sp37UTQgQFA1yH0BDACyMoHy//J0AGBAQj0Cm+hMYAIBIA4PABmtznaiaEAga5Drhf/AABmvHfaiaEAQa5DrhY/AAG7SB/oA1NQi+QAFyMoHFcv/ydB3dIAYyMsFywIizxZQBfoCFMtrEszMyXP7AMhAFIEBCPRR8qcCAHCBAQjXGPoA0z/IVCBHgQEI9FHyp4IQbm90ZXB0gBjIywXLAlAGzxZQBPoCFMtqEssfyz/Jc/sAAgBsgQEI1xj6ANM/MFIkgQEI9Fnyp4IQZHN0cnB0gBjIywXLAlAFzxZQA/oCE8tqyx8Syz/Jc/sAAAr0AMntVA==", "base64"))[0],
      a = (0, Jt.beginCell)().storeUint(0, 32).storeUint(this.walletId, 32).storeBuffer(this.publicKey).storeBit(0).endCell();
    this.init = {
      code: o,
      data: a
    }, this.address = (0, Jt.contractAddress)(t, {
      code: o,
      data: a
    })
  }
  async getBalance(t) {
    return (await t.getState()).balance
  }
  async getSeqno(t) {
    return (await t.getState()).state.type === "active" ? (await t.get("seqno", [])).stack.readNumber() : 0
  }
  async send(t, r) {
    await t.external(r)
  }
  async sendTransfer(t, r) {
    let n = this.createTransfer(r);
    await this.send(t, n)
  }
  createTransfer(t) {
    return (0, sf.createWalletTransferV4)({
      ...t,
      sendMode: t.sendMode ?? Jt.SendMode.PAY_GAS_SEPARATELY,
      walletId: this.walletId
    })
  }
  sender(t, r) {
    return {
      send: async n => {
        let o = await this.getSeqno(t),
          a = this.createTransfer({
            seqno: o,
            secretKey: r,
            sendMode: n.sendMode,
            messages: [(0, Jt.internal)({
              to: n.to,
              value: n.value,
              init: n.init,
              body: n.body,
              bounce: n.bounce
            })]
          });
        await this.send(t, a)
      }
    }
  }
}
dn.WalletContractV4 = sa;
var Jo = {};
(function(e) {
  var t = I && I.__createBinding || (Object.create ? function(n, o, a, i) {
      i === void 0 && (i = a);
      var s = Object.getOwnPropertyDescriptor(o, a);
      (!s || ("get" in s ? !o.__esModule : s.writable || s.configurable)) && (s = {
        enumerable: !0,
        get: function() {
          return o[a]
        }
      }), Object.defineProperty(n, i, s)
    } : function(n, o, a, i) {
      i === void 0 && (i = a), n[i] = o[a]
    }),
    r = I && I.__exportStar || function(n, o) {
      for (var a in n) a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, n, a)
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), r(Ro(), e), r(le, e), r(gt, e)
})(Jo);
var Zo = {};
(function(e) {
  var t = I && I.__createBinding || (Object.create ? function(n, o, a, i) {
      i === void 0 && (i = a);
      var s = Object.getOwnPropertyDescriptor(o, a);
      (!s || ("get" in s ? !o.__esModule : s.writable || s.configurable)) && (s = {
        enumerable: !0,
        get: function() {
          return o[a]
        }
      }), Object.defineProperty(n, i, s)
    } : function(n, o, a, i) {
      i === void 0 && (i = a), n[i] = o[a]
    }),
    r = I && I.__exportStar || function(n, o) {
      for (var a in n) a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, n, a)
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), r(Ko(), e), r(J, e), r(ke, e)
})(Zo);
var cn = {};
Object.defineProperty(cn, "__esModule", {
  value: !0
});
cn.JettonMaster = void 0;
const lf = q;
class la {
  static create(t) {
    return new la(t)
  }
  constructor(t) {
    this.address = t
  }
  async getWalletAddress(t, r) {
    return (await t.get("get_wallet_address", [{
      type: "slice",
      cell: (0, lf.beginCell)().storeAddress(r).endCell()
    }])).stack.readAddress()
  }
  async getJettonData(t) {
    let r = await t.get("get_jetton_data", []),
      n = r.stack.readBigNumber(),
      o = r.stack.readBoolean(),
      a = r.stack.readAddress(),
      i = r.stack.readCell(),
      s = r.stack.readCell();
    return {
      totalSupply: n,
      mintable: o,
      adminAddress: a,
      content: i,
      walletCode: s
    }
  }
}
cn.JettonMaster = la;
var un = {};
Object.defineProperty(un, "__esModule", {
  value: !0
});
un.JettonWallet = void 0;
class da {
  static create(t) {
    return new da(t)
  }
  constructor(t) {
    this.address = t
  }
  async getBalance(t) {
    return (await t.getState()).state.type !== "active" ? 0n : (await t.get("get_wallet_data", [])).stack.readBigNumber()
  }
}
un.JettonWallet = da;
var hr = {};
Object.defineProperty(hr, "__esModule", {
  value: !0
});
hr.MultisigOrder = void 0;
const oi = bt(),
  pr = q;
class Br {
  constructor(t) {
    this.signatures = {}, this.payload = t
  }
  static fromCell(t) {
    var i;
    let r = t.beginParse(),
      n = (i = r.loadMaybeRef()) == null ? void 0 : i.beginParse();
    const o = r.asCell();
    let a = new Br(o);
    if (n) {
      for (; n.remainingBits > 0;) {
        const s = n.loadBuffer(64),
          l = n.loadUint(8);
        a.signatures[l] = s, n.remainingRefs > 0 ? n = n.loadRef().asSlice() : n.skip(1)
      }
      n.endParse()
    }
    return a
  }
  static fromPayload(t) {
    return new Br(t)
  }
  addSignature(t, r, n) {
    const o = this.payload.hash();
    if (!(0, oi.signVerify)(o, r, n.owners.get(t).slice(0, -1))) throw Error("invalid signature");
    this.signatures[t] = r
  }
  sign(t, r) {
    const n = this.payload.hash();
    return this.signatures[t] = (0, oi.sign)(n, r), n
  }
  unionSignatures(t) {
    this.signatures = Object.assign({}, this.signatures, t.signatures)
  }
  clearSignatures() {
    this.signatures = {}
  }
  toCell(t) {
    let r = (0, pr.beginCell)().storeBit(0);
    for (const n in this.signatures) {
      const o = this.signatures[n];
      r = (0, pr.beginCell)().storeBit(1).storeRef((0, pr.beginCell)().storeBuffer(o).storeUint(parseInt(n), 8).storeBuilder(r).endCell())
    }
    return (0, pr.beginCell)().storeUint(t, 8).storeBuilder(r).storeBuilder(this.payload.asBuilder()).endCell()
  }
}
hr.MultisigOrder = Br;
var fn = {};
Object.defineProperty(fn, "__esModule", {
  value: !0
});
fn.MultisigOrderBuilder = void 0;
const Zt = q,
  df = hr;
class cf {
  constructor(t, r) {
    this.messages = (0, Zt.beginCell)(), this.queryId = 0n, this.walletId = t, this.queryOffset = r || 7200
  }
  addMessage(t, r) {
    if (this.messages.refs >= 4) throw Error("only 4 refs are allowed");
    this.updateQueryId(), this.messages.storeUint(r, 8), this.messages.storeRef((0, Zt.beginCell)().store((0, Zt.storeMessageRelaxed)(t)).endCell())
  }
  clearMessages() {
    this.messages = (0, Zt.beginCell)()
  }
  build() {
    return df.MultisigOrder.fromPayload((0, Zt.beginCell)().storeUint(this.walletId, 32).storeUint(this.queryId, 64).storeBuilder(this.messages).endCell())
  }
  updateQueryId() {
    const t = BigInt(Math.floor(Date.now() / 1e3 + this.queryOffset));
    this.queryId = t << 32n
  }
}
fn.MultisigOrderBuilder = cf;
var hn = {};
Object.defineProperty(hn, "__esModule", {
  value: !0
});
hn.MultisigWallet = void 0;
const si = bt(),
  Q = q,
  uf = Q.Cell.fromBase64("te6ccgECKwEABBgAART/APSkE/S88sgLAQIBIAIDAgFIBAUE2vIgxwCOgzDbPOCDCNcYIPkBAdMH2zwiwAAToVNxePQOb6Hyn9s8VBq6+RDyoAb0BCD5AQHTH1EYuvKq0z9wUwHwCgHCCAGDCryx8mhTFYBA9A5voSCYDqQgwgryZw7f+COqH1NAufJhVCOjU04gIyEiAgLMBgcCASAMDQIBIAgJAgFmCgsAA9GEAiPymAvHoHN9CYbZ5S7Z4BPHohwhJQAtAKkItdJEqCTItdKlwLUAdAT8ArobBKAATwhbpEx4CBukTDgAdAg10rDAJrUAvALyFjPFszJ4HHXI8gBzxb0AMmACASAODwIBIBQVARW77ZbVA0cFUg2zyCoCAUgQEQIBIBITAXOxHXQgwjXGCD5AQHTB4IB1MTtQ9hTIHj0Dm+h8p/XC/9eMfkQ8qCuAfQEIW6TW3Ey4PkBWNs8AaQBgJwA9rtqA6ADoAPoCAXoCEfyAgPyA3XlP+AXkegAA54tkwAAXrhlXP8EA1WZ2oexAAgEgFhcCASAYGQFRtyVbZ4YmRmpGEAgegc30McJNhFpAADMaYeYuAFrgJhwLb+4cC3d0bhAjAYm1WZtnhqvgb+2xxsoicAgej430pBHEoFpAADHDhBACGuQkuuBk9kUWE5kAOeLKhACQCB6IYFImHFImHFImXEA2YlzNijAjAgEgGhsAF7UGtc4QQDVZnah7EAIBIBwdAgOZOB4fARGsGm2eL4G2CUAjABWt+UEAzJV2oewYQAENqTbPBVfBYCMAFa3f3CCAarM7UPYgAiDbPALyZfgAUENxQxPbPO1UIyoACtP/0wcwBKDbPC+uUyCw8mISsQKkJbNTHLmwJYEA4aojoCi8sPJpggGGoPgBBZcCERACPj4wjo0REB/bPEDXePRDEL0F4lQWW1Rz51YQU9zbPFRxClR6vCQlKCYAIO1E0NMf0wfTB9M/9AT0BNEAXgGOGjDSAAHyo9MH0wdQA9cBIPkBBfkBFbrypFAD4GwhIddKqgIi10m68qtwVCATAAwByMv/ywcE1ts87VT4D3AlblOJvrGYEG4QLVDHXwePGzBUJANQTds8UFWgRlAQSRA6SwlTuds8UFQWf+L4AAeDJaGOLCaAQPSWb6UglDBTA7neII4WODk5CNIAAZfTBzAW8AcFkTDifwgHBZJsMeKz5jAGKicoKQBgcI4pA9CDCNcY0wf0BDBTFnj0Dm+h8qXXC/9URUT5EPKmrlIgsVIDvRShI27mbCIyAH5SML6OIF8D+ACTItdKmALTB9QC+wAC6DJwyMoAQBSAQPRDAvAHjhdxyMsAFMsHEssHWM8BWM8WQBOAQPRDAeIBII6KEEUQNEMA2zztVJJfBuIqABzIyx/LB8sHyz/0APQAyQ==");
class ca {
  constructor(t, r, n, o, a) {
    this.provider = null, this.owners = Q.Dictionary.empty(), this.workchain = r, this.walletId = n, this.k = o;
    for (let i = 0; i < t.length; i += 1) this.owners.set(i, v.concat([t[i], v.alloc(1)]));
    this.init = {
      code: uf,
      data: (0, Q.beginCell)().storeUint(this.walletId, 32).storeUint(this.owners.size, 8).storeUint(this.k, 8).storeUint(0, 64).storeDict(this.owners, Q.Dictionary.Keys.Uint(8), Q.Dictionary.Values.Buffer(33)).storeBit(0).endCell()
    }, this.address = (a == null ? void 0 : a.address) || (0, Q.contractAddress)(r, this.init), a != null && a.provider ? this.provider = a.provider : a != null && a.client && (this.provider = a.client.provider(this.address, {
      code: this.init.code,
      data: this.init.data
    }))
  }
  static async fromAddress(t, r) {
    let n;
    if (r.provider) n = r.provider;
    else {
      if (!r.client) throw Error("Either provider or client must be specified");
      n = r.client.provider(t, {
        code: null,
        data: null
      })
    }
    const o = (await n.getState()).state;
    if (o.type !== "active") throw Error("Contract must be active");
    const a = Q.Cell.fromBoc(o.data)[0].beginParse(),
      i = a.loadUint(32);
    a.skip(8);
    const s = a.loadUint(8);
    a.skip(64);
    const l = a.loadDict(Q.Dictionary.Keys.Uint(8), Q.Dictionary.Values.Buffer(33));
    let c = [];
    for (const [u, f] of l) {
      const k = f.subarray(0, 32);
      c.push(k)
    }
    return new ca(c, t.workChain, i, s, {
      address: t,
      provider: n,
      client: r.client
    })
  }
  async deployExternal(t) {
    if (!t && !this.provider) throw Error("you must specify provider if there is no such property in MultisigWallet instance");
    t || (t = this.provider), await t.external(Q.Cell.EMPTY)
  }
  async deployInternal(t, r = 1000000000n) {
    await t.send({
      sendMode: Q.SendMode.PAY_GAS_SEPARATELY + Q.SendMode.IGNORE_ERRORS,
      to: this.address,
      value: r,
      init: this.init,
      body: Q.Cell.EMPTY,
      bounce: !0
    })
  }
  async sendOrder(t, r, n) {
    if (!n && !this.provider) throw Error("you must specify provider if there is no such property in MultisigWallet instance");
    n || (n = this.provider);
    let o = (0, si.keyPairFromSecretKey)(r).publicKey,
      a = this.getOwnerIdByPubkey(o),
      i = t.toCell(a),
      s = (0, si.sign)(i.hash(), r);
    i = (0, Q.beginCell)().storeBuffer(s).storeSlice(i.asSlice()).endCell(), await n.external(i)
  }
  async sendOrderWithoutSecretKey(t, r, n, o) {
    if (!o && !this.provider) throw Error("you must specify provider if there is no such property in MultisigWallet instance");
    o || (o = this.provider);
    let a = t.toCell(n);
    a = (0, Q.beginCell)().storeBuffer(r).storeSlice(a.asSlice()).endCell(), await o.external(a)
  }
  getOwnerIdByPubkey(t) {
    for (const [r, n] of this.owners)
      if (n.subarray(0, 32).equals(t)) return r;
    throw Error("public key is not an owner")
  }
}
hn.MultisigWallet = ca;
var gn = {};
Object.defineProperty(gn, "__esModule", {
  value: !0
});
gn.ElectorContract = void 0;
const ie = q,
  ff = {
    serialize(e, t) {
      throw Error("not implemented")
    },
    parse(e) {
      const t = new ie.Address(-1, e.loadBuffer(32)),
        r = e.loadUintBig(64),
        n = e.loadCoins();
      return {
        address: t,
        weight: r,
        stake: n
      }
    }
  },
  hf = {
    serialize(e, t) {
      throw Error("not implemented")
    },
    parse(e) {
      const t = e.loadCoins();
      e.skip(64);
      const r = new ie.Address(-1, e.loadBuffer(32)),
        n = e.loadBuffer(32);
      return {
        stake: t,
        address: r,
        adnl: n
      }
    }
  };
class ua {
  static create() {
    return new ua
  }
  constructor() {
    this.address = ie.Address.parseRaw("-1:3333333333333333333333333333333333333333333333333333333333333333")
  }
  async getReturnedStake(t, r) {
    if (r.workChain !== -1) throw Error("Only masterchain addresses could have stake");
    return (await t.get("compute_returned_stake", [{
      type: "int",
      value: BigInt("0x" + r.hash.toString("hex"))
    }])).stack.readBigNumber()
  }
  async getPastElectionsList(t) {
    const r = await t.get("past_elections_list", []),
      n = new ie.TupleReader(r.stack.readLispList()),
      o = [];
    for (; n.remaining > 0;) {
      const a = n.readTuple(),
        i = a.readNumber(),
        s = a.readNumber();
      a.pop();
      const l = a.readNumber();
      o.push({
        id: i,
        unfreezeAt: s,
        stakeHeld: l
      })
    }
    return o
  }
  async getPastElections(t) {
    const r = await t.get("past_elections", []),
      n = new ie.TupleReader(r.stack.readLispList()),
      o = [];
    for (; n.remaining > 0;) {
      const a = n.readTuple(),
        i = a.readNumber(),
        s = a.readNumber(),
        l = a.readNumber();
      a.pop();
      const c = a.readCell(),
        u = a.readBigNumber(),
        f = a.readBigNumber();
      let k = new Map;
      const m = c.beginParse().loadDictDirect(ie.Dictionary.Keys.Buffer(32), ff);
      for (const [P, g] of m) k.set(BigInt("0x" + P.toString("hex")).toString(10), {
        address: g.address,
        weight: g.weight,
        stake: g.stake
      });
      o.push({
        id: i,
        unfreezeAt: s,
        stakeHeld: l,
        totalStake: u,
        bonuses: f,
        frozen: k
      })
    }
    return o
  }
  async getElectionEntities(t) {
    const r = await t.getState();
    if (r.state.type !== "active") throw Error("Unexpected error");
    const o = ie.Cell.fromBoc(r.state.data)[0].beginParse();
    if (!o.loadBit()) return null;
    const a = o.loadRef().beginParse(),
      i = a.loadUint(32),
      s = a.loadUint(32),
      l = a.loadCoins(),
      c = a.loadCoins(),
      u = a.loadDict(ie.Dictionary.Keys.Buffer(32), hf);
    let f = [];
    if (u)
      for (const [k, m] of u) f.push({
        pubkey: k,
        stake: m.stake,
        address: m.address,
        adnl: m.adnl
      });
    return {
      minStake: l,
      allStakes: c,
      endElectionsTime: s,
      startWorkTime: i,
      entities: f
    }
  }
  async getActiveElectionId(t) {
    const n = (await t.get("active_election_id", [])).stack.readNumber();
    return n > 0 ? n : null
  }
  async getComplaints(t, r) {
    const n = new ie.TupleBuilder;
    n.writeNumber(r);
    const o = await t.get("list_complaints", n.build());
    if (o.stack.peek().type === "null") return [];
    const a = new ie.TupleReader(o.stack.readLispList()),
      i = [];
    for (; a.remaining > 0;) {
      const s = a.readTuple(),
        l = s.readBigNumber(),
        c = s.readTuple(),
        u = c.readTuple(),
        f = v.from(u.readBigNumber().toString(16), "hex");
      u.readCell();
      const k = u.readNumber(),
        m = u.readNumber(),
        P = new ie.Address(-1, v.from(u.readBigNumber().toString(16), "hex")),
        g = u.readBigNumber(),
        _ = u.readBigNumber(),
        B = u.readBigNumber(),
        S = [],
        y = new ie.TupleReader(c.readLispList());
      for (; y.remaining > 0;) S.push(y.readNumber());
      const w = c.readBigNumber(),
        A = c.readBigNumber();
      i.push({
        id: l,
        publicKey: f,
        createdAt: k,
        severity: m,
        paid: g,
        suggestedFine: _,
        suggestedFinePart: B,
        rewardAddress: P,
        votes: S,
        remainingWeight: A,
        vsetId: w
      })
    }
    return i
  }
}
gn.ElectorContract = ua;
var z = {};
Object.defineProperty(z, "__esModule", {
  value: !0
});
z.parseFullConfig = z.loadConfigParamsAsSlice = z.loadConfigParamById = z.parseVotingSetup = z.parseProposalSetup = z.configParse29 = z.configParse28 = z.configParseMsgPrices = z.configParseGasLimitsPrices = z.configParseBridge = z.configParseValidatorSet = z.configParse12 = z.configParseWorkchainDescriptor = z.configParse40 = z.configParse8 = z.configParse18 = z.configParse17 = z.configParse16 = z.configParse15 = z.configParse13 = z.configParse5 = z.configParseMasterAddressRequired = z.parseBridge = z.parseValidatorSet = z.configParseMasterAddress = void 0;
const re = q;

function nr(e) {
  return e ? new re.Address(-1, e.loadBuffer(32)) : null
}
z.configParseMasterAddress = nr;

function li(e) {
  if (e.loadUint(32) !== 2390828938) throw Error("Invalid config");
  return e.loadBuffer(32)
}
const di = {
  serialize(e, t) {
    throw Error("not implemented")
  },
  parse(e) {
    const t = e.loadUint(8);
    if (t === 83) return {
      publicKey: li(e),
      weight: e.loadUintBig(64),
      adnlAddress: null
    };
    if (t === 115) return {
      publicKey: li(e),
      weight: e.loadUintBig(64),
      adnlAddress: e.loadBuffer(32)
    };
    throw Error("Invalid config")
  }
};

function es(e) {
  const t = e.loadUint(8);
  if (t === 17) {
    const r = e.loadUint(32),
      n = e.loadUint(32),
      o = e.loadUint(16),
      a = e.loadUint(16),
      i = e.loadDictDirect(re.Dictionary.Keys.Uint(16), di);
    return {
      timeSince: r,
      timeUntil: n,
      total: o,
      main: a,
      totalWeight: null,
      list: i
    }
  } else if (t === 18) {
    const r = e.loadUint(32),
      n = e.loadUint(32),
      o = e.loadUint(16),
      a = e.loadUint(16),
      i = e.loadUintBig(64),
      s = e.loadDict(re.Dictionary.Keys.Uint(16), di);
    return {
      timeSince: r,
      timeUntil: n,
      total: o,
      main: a,
      totalWeight: i,
      list: s
    }
  }
}
z.parseValidatorSet = es;

function ts(e) {
  const t = new re.Address(-1, e.loadBuffer(32)),
    r = new re.Address(-1, e.loadBuffer(32)),
    n = e.loadDict(re.Dictionary.Keys.Buffer(32), re.Dictionary.Values.Buffer(32)),
    o = new Map;
  for (const [i, s] of n) o.set(new re.Address(-1, i).toString(), s);
  const a = e.loadBuffer(32);
  return {
    bridgeAddress: t,
    oracleMultisigAddress: r,
    oracles: o,
    externalChainAddress: a
  }
}
z.parseBridge = ts;

function Rn(e) {
  if (!e) throw Error("Invalid config");
  return nr(e)
}
z.configParseMasterAddressRequired = Rn;

function rs(e) {
  if (!e) throw Error("Invalid config");
  if (e.loadUint(8) === 1) {
    const r = e.loadBit() ? new re.Address(-1, e.loadBuffer(32)) : null,
      n = e.loadUint(32),
      o = e.loadUint(32);
    return {
      blackholeAddr: r,
      feeBurnNominator: n,
      feeBurnDenominator: o
    }
  }
  throw new Error("Invalid config")
}
z.configParse5 = rs;

function gf(e) {
  if (!e) throw Error("Invalid config");
  if (e.loadUint(8) === 26) {
    const r = e.loadCoins(),
      n = e.loadCoins(),
      o = e.loadCoins();
    return {
      deposit: r,
      bitPrice: n,
      cellPrice: o
    }
  }
  throw new Error("Invalid config")
}
z.configParse13 = gf;

function ns(e) {
  if (!e) throw Error("Invalid config");
  const t = e.loadUint(32),
    r = e.loadUint(32),
    n = e.loadUint(32),
    o = e.loadUint(32);
  return {
    validatorsElectedFor: t,
    electorsStartBefore: r,
    electorsEndBefore: n,
    stakeHeldFor: o
  }
}
z.configParse15 = ns;

function as(e) {
  if (!e) throw Error("Invalid config");
  const t = e.loadUint(16),
    r = e.loadUint(16),
    n = e.loadUint(16);
  return {
    maxValidators: t,
    maxMainValidators: r,
    minValidators: n
  }
}
z.configParse16 = as;

function is(e) {
  if (!e) throw Error("Invalid config");
  const t = e.loadCoins(),
    r = e.loadCoins(),
    n = e.loadCoins(),
    o = e.loadUint(32);
  return {
    minStake: t,
    maxStake: r,
    minTotalStake: n,
    maxStakeFactor: o
  }
}
z.configParse17 = is;
const pf = {
  serialize(e, t) {
    throw Error("not implemented")
  },
  parse(e) {
    if (e.loadUint(8) !== 204) throw Error("Invalid config");
    const r = e.loadUint(32),
      n = e.loadUintBig(64),
      o = e.loadUintBig(64),
      a = e.loadUintBig(64),
      i = e.loadUintBig(64);
    return {
      utime_since: r,
      bit_price_ps: n,
      cell_price_ps: o,
      mc_bit_price_ps: a,
      mc_cell_price_ps: i
    }
  }
};

function os(e) {
  if (!e) throw Error("Invalid config");
  return e.loadDictDirect(re.Dictionary.Keys.Buffer(4), pf).values()
}
z.configParse18 = os;

function ss(e) {
  if (!e) return {
    version: 0,
    capabilities: 0n
  };
  const t = e.loadUint(32),
    r = e.loadUintBig(64);
  return {
    version: t,
    capabilities: r
  }
}
z.configParse8 = ss;

function ls(e) {
  if (!e) return null;
  if (e.loadUint(8) !== 1) throw Error("Invalid config");
  const r = e.loadCoins(),
    n = e.loadCoins(),
    o = e.loadUint(16),
    a = e.loadUint(16),
    i = e.loadUint(16),
    s = e.loadUint(16),
    l = e.loadUint(16),
    c = e.loadUint(16),
    u = e.loadUint(16),
    f = e.loadUint(16),
    k = e.loadUint(16);
  return {
    defaultFlatFine: r,
    defaultProportionaFine: n,
    severityFlatMult: o,
    severityProportionalMult: a,
    unfunishableInterval: i,
    longInterval: s,
    longFlatMult: l,
    longProportionalMult: c,
    mediumInterval: u,
    mediumFlatMult: f,
    mediumProportionalMult: k
  }
}
z.configParse40 = ls;

function mf(e) {
  if (e.loadUint(8) !== 166) throw Error("Invalid config");
  const t = e.loadUint(32),
    r = e.loadUint(8),
    n = e.loadUint(8),
    o = e.loadUint(8),
    a = e.loadBit(),
    i = e.loadBit(),
    s = e.loadBit(),
    l = e.loadUint(13),
    c = e.loadBuffer(32),
    u = e.loadBuffer(32),
    f = e.loadUint(32);
  if (e.loadBit()) throw Error("Invalid config");
  const k = e.loadUint(32),
    m = e.loadUintBig(64);
  return {
    enabledSince: t,
    actialMinSplit: r,
    min_split: n,
    max_split: o,
    basic: a,
    active: i,
    accept_msgs: s,
    flags: l,
    zerostateRootHash: c,
    zerostateFileHash: u,
    version: f,
    format: {
      vmVersion: k,
      vmMode: m
    }
  }
}
z.configParseWorkchainDescriptor = mf;
const bf = {
  serialize(e, t) {
    throw Error("not implemented")
  },
  parse(e) {
    if (e.loadUint(8) !== 166) throw Error("Invalid config");
    const t = e.loadUint(32),
      r = e.loadUint(8),
      n = e.loadUint(8),
      o = e.loadUint(8),
      a = e.loadBit(),
      i = e.loadBit(),
      s = e.loadBit(),
      l = e.loadUint(13),
      c = e.loadBuffer(32),
      u = e.loadBuffer(32),
      f = e.loadUint(32);
    if (e.loadBit()) throw Error("Invalid config");
    const k = e.loadUint(32),
      m = e.loadUintBig(64);
    return {
      enabledSince: t,
      actialMinSplit: r,
      min_split: n,
      max_split: o,
      basic: a,
      active: i,
      accept_msgs: s,
      flags: l,
      zerostateRootHash: c,
      zerostateFileHash: u,
      version: f,
      format: {
        vmVersion: k,
        vmMode: m
      }
    }
  }
};

function ds(e) {
  if (!e) throw Error("Invalid config");
  const t = e.loadDict(re.Dictionary.Keys.Uint(32), bf);
  if (t) return t;
  throw Error("No workchains exist")
}
z.configParse12 = ds;

function $e(e) {
  return e ? es(e) : null
}
z.configParseValidatorSet = $e;

function yr(e) {
  return e ? ts(e) : null
}
z.configParseBridge = yr;

function yf(e) {
  const t = e.loadUint(8);
  if (t === 222) {
    const r = e.loadUintBig(64),
      n = e.loadUintBig(64),
      o = e.loadUintBig(64),
      a = e.loadUintBig(64),
      i = e.loadUintBig(64),
      s = e.loadUintBig(64),
      l = e.loadUintBig(64);
    return {
      gasPrice: r,
      gasLimit: n,
      specialGasLimit: o,
      gasCredit: a,
      blockGasLimit: i,
      freezeDueLimit: s,
      deleteDueLimit: l
    }
  } else if (t === 221) {
    const r = e.loadUintBig(64),
      n = e.loadUintBig(64),
      o = e.loadUintBig(64),
      a = e.loadUintBig(64),
      i = e.loadUintBig(64),
      s = e.loadUintBig(64);
    return {
      gasPrice: r,
      gasLimit: n,
      gasCredit: o,
      blockGasLimit: a,
      freezeDueLimit: i,
      deleteDueLimit: s
    }
  } else throw Error("Invalid config")
}

function On(e) {
  if (!e) throw Error("Invalid config");
  if (e.loadUint(8) === 209) {
    const r = e.loadUintBig(64),
      n = e.loadUintBig(64),
      o = yf(e);
    return {
      flatLimit: r,
      flatGasPrice: n,
      other: o
    }
  } else throw Error("Invalid config")
}
z.configParseGasLimitsPrices = On;

function Dn(e) {
  if (!e) throw new Error("Invalid config");
  if (e.loadUint(8) !== 234) throw new Error("Invalid msg prices param");
  return {
    lumpPrice: e.loadUintBig(64),
    bitPrice: e.loadUintBig(64),
    cellPrice: e.loadUintBig(64),
    ihrPriceFactor: e.loadUint(32),
    firstFrac: e.loadUint(16),
    nextFrac: e.loadUint(16)
  }
}
z.configParseMsgPrices = Dn;

function cs(e) {
  if (!e) throw new Error("Invalid config");
  const t = e.loadUint(8);
  if (t === 193) {
    const r = e.loadUint(32),
      n = e.loadUint(32),
      o = e.loadUint(32),
      a = e.loadUint(32);
    return {
      masterCatchainLifetime: r,
      shardCatchainLifetime: n,
      shardValidatorsLifetime: o,
      shardValidatorsCount: a
    }
  }
  if (t === 194) {
    const r = e.loadUint(7),
      n = e.loadBit(),
      o = e.loadUint(32),
      a = e.loadUint(32),
      i = e.loadUint(32),
      s = e.loadUint(32);
    return {
      flags: r,
      suffleMasterValidators: n,
      masterCatchainLifetime: o,
      shardCatchainLifetime: a,
      shardValidatorsLifetime: i,
      shardValidatorsCount: s
    }
  }
  throw new Error("Invalid config")
}
z.configParse28 = cs;

function us(e) {
  if (!e) throw new Error("Invalid config");
  const t = e.loadUint(8);
  if (t === 214) {
    const r = e.loadUint(32),
      n = e.loadUint(32),
      o = e.loadUint(32),
      a = e.loadUint(32),
      i = e.loadUint(32),
      s = e.loadUint(32),
      l = e.loadUint(32),
      c = e.loadUint(32);
    return {
      roundCandidates: r,
      nextCandidateDelay: n,
      consensusTimeout: o,
      fastAttempts: a,
      attemptDuration: i,
      catchainMaxDeps: s,
      maxBlockBytes: l,
      maxColaltedBytes: c
    }
  } else if (t === 215) {
    const r = e.loadUint(7),
      n = e.loadBit(),
      o = e.loadUint(8),
      a = e.loadUint(32),
      i = e.loadUint(32),
      s = e.loadUint(32),
      l = e.loadUint(32),
      c = e.loadUint(32),
      u = e.loadUint(32),
      f = e.loadUint(32);
    return {
      flags: r,
      newCatchainIds: n,
      roundCandidates: o,
      nextCandidateDelay: a,
      consensusTimeout: i,
      fastAttempts: s,
      attemptDuration: l,
      catchainMaxDeps: c,
      maxBlockBytes: u,
      maxColaltedBytes: f
    }
  } else if (t === 216) {
    const r = e.loadUint(7),
      n = e.loadBit(),
      o = e.loadUint(8),
      a = e.loadUint(32),
      i = e.loadUint(32),
      s = e.loadUint(32),
      l = e.loadUint(32),
      c = e.loadUint(32),
      u = e.loadUint(32),
      f = e.loadUint(32),
      k = e.loadUint(16);
    return {
      flags: r,
      newCatchainIds: n,
      roundCandidates: o,
      nextCandidateDelay: a,
      consensusTimeout: i,
      fastAttempts: s,
      attemptDuration: l,
      catchainMaxDeps: c,
      maxBlockBytes: u,
      maxColaltedBytes: f,
      protoVersion: k
    }
  } else if (t === 217) {
    const r = e.loadUint(7),
      n = e.loadBit(),
      o = e.loadUint(8),
      a = e.loadUint(32),
      i = e.loadUint(32),
      s = e.loadUint(32),
      l = e.loadUint(32),
      c = e.loadUint(32),
      u = e.loadUint(32),
      f = e.loadUint(32),
      k = e.loadUint(16),
      m = e.loadUint(32);
    return {
      flags: r,
      newCatchainIds: n,
      roundCandidates: o,
      nextCandidateDelay: a,
      consensusTimeout: i,
      fastAttempts: s,
      attemptDuration: l,
      catchainMaxDeps: c,
      maxBlockBytes: u,
      maxColaltedBytes: f,
      protoVersion: k,
      catchainMaxBlocksCoeff: m
    }
  }
  throw new Error("Invalid config")
}
z.configParse29 = us;

function Vn(e) {
  if (e.loadUint(8) !== 54) throw new Error("Invalid config");
  const r = e.loadUint(8),
    n = e.loadUint(8),
    o = e.loadUint(8),
    a = e.loadUint(8),
    i = e.loadUint(32),
    s = e.loadUint(32),
    l = e.loadUint(32),
    c = e.loadUint(32);
  return {
    minTotalRounds: r,
    maxTotalRounds: n,
    minWins: o,
    maxLoses: a,
    minStoreSec: i,
    maxStoreSec: s,
    bitPrice: l,
    cellPrice: c
  }
}
z.parseProposalSetup = Vn;

function fs(e) {
  if (!e) throw new Error("Invalid config");
  if (e.loadUint(8) !== 145) throw new Error("Invalid config");
  const r = Vn(e.loadRef().beginParse()),
    n = Vn(e.loadRef().beginParse());
  return {
    normalParams: r,
    criticalParams: n
  }
}
z.parseVotingSetup = fs;

function hs(e) {
  return re.Cell.fromBase64(e).beginParse().loadDictDirect(re.Dictionary.Keys.Int(32), re.Dictionary.Values.Cell())
}

function wf(e, t) {
  return hs(e).get(t)
}
z.loadConfigParamById = wf;

function vf(e) {
  const t = hs(e),
    r = new Map;
  for (const [n, o] of t) r.set(n, o.beginParse());
  return r
}
z.loadConfigParamsAsSlice = vf;

function kf(e) {
  return {
    configAddress: Rn(e.get(0)),
    electorAddress: Rn(e.get(1)),
    minterAddress: nr(e.get(2)),
    feeCollectorAddress: nr(e.get(3)),
    dnsRootAddress: nr(e.get(4)),
    burningConfig: rs(e.get(5)),
    globalVersion: ss(e.get(8)),
    workchains: ds(e.get(12)),
    voting: fs(e.get(11)),
    validators: {
      ...ns(e.get(15)),
      ...as(e.get(16)),
      ...is(e.get(17))
    },
    storagePrices: os(e.get(18)),
    gasPrices: {
      masterchain: On(e.get(20)),
      workchain: On(e.get(21))
    },
    msgPrices: {
      masterchain: Dn(e.get(24)),
      workchain: Dn(e.get(25))
    },
    validatorSets: {
      prevValidators: $e(e.get(32)),
      prevTempValidators: $e(e.get(33)),
      currentValidators: $e(e.get(34)),
      currentTempValidators: $e(e.get(35)),
      nextValidators: $e(e.get(36)),
      nextTempValidators: $e(e.get(37))
    },
    validatorsPunish: ls(e.get(40)),
    bridges: {
      ethereum: yr(e.get(71)),
      binance: yr(e.get(72)),
      polygon: yr(e.get(73))
    },
    catchain: cs(e.get(28)),
    consensus: us(e.get(29))
  }
}
z.parseFullConfig = kf;
var oe = {};
Object.defineProperty(oe, "__esModule", {
  value: !0
});
oe.computeMessageForwardFees = oe.computeExternalMessageFees = oe.computeGasPrices = oe.computeFwdFees = oe.computeStorageFees = void 0;
const _n = q;

function _f(e) {
  const {
    lastPaid: t,
    now: r,
    storagePrices: n,
    storageStat: o,
    special: a,
    masterchain: i
  } = e;
  if (r <= t || n.length === 0 || r < n[0].utime_since || a) return BigInt(0);
  let s = Math.max(t, n[0].utime_since),
    l = BigInt(0);
  for (let c = 0; c < n.length && s < r; c++) {
    let u = c < n.length - 1 ? Math.min(r, n[c + 1].utime_since) : r,
      f = BigInt(0);
    if (s < u) {
      let k = u - s;
      f += BigInt(o.cells) * (i ? n[c].mc_cell_price_ps : n[c].cell_price_ps), f += BigInt(o.bits) * (i ? n[c].mc_bit_price_ps : n[c].bit_price_ps), f = f * BigInt(k)
    }
    s = u, l += f
  }
  return gs(l)
}
oe.computeStorageFees = _f;

function fa(e, t, r) {
  return e.lumpPrice + gs(e.bitPrice * r + e.cellPrice * t)
}
oe.computeFwdFees = fa;

function Bf(e, t) {
  return e <= t.flatLimit ? t.flatPrice : t.flatPrice + (t.price * (e - t.flatLimit) >> 16n)
}
oe.computeGasPrices = Bf;

function Sf(e, t) {
  let r = Sr(t);
  return r.bits -= t.bits.length, r.cells -= 1, fa(e, BigInt(r.cells), BigInt(r.bits))
}
oe.computeExternalMessageFees = Sf;

function Cf(e, t) {
  let r = (0, _n.loadMessageRelaxed)(t.beginParse()),
    n = {
      bits: 0,
      cells: 0
    };
  if (r.init) {
    const l = new _n.Cell().asBuilder();
    (0, _n.storeStateInit)(r.init)(l);
    const c = l.endCell();
    let u = Sr(c);
    u.bits -= c.bits.length, u.cells -= 1, n.bits += u.bits, n.cells += u.cells
  }
  let o = Sr(r.body);
  o.bits -= r.body.bits.length, o.cells -= 1, n.bits += o.bits, n.cells += o.cells;
  let a = fa(e, BigInt(n.cells), BigInt(n.bits)),
    i = a * BigInt(e.firstFrac) >> 16n,
    s = a - i;
  return {
    fees: i,
    remaining: s
  }
}
oe.computeMessageForwardFees = Cf;

function Sr(e) {
  let t = e.bits.length,
    r = 1;
  for (let n of e.refs) {
    let o = Sr(n);
    r += o.cells, t += o.bits
  }
  return {
    bits: t,
    cells: r
  }
}

function gs(e) {
  let t = e % 65536n,
    r = e >> 16n;
  return t !== 0n && (r += 1n), r
}(function(e) {
  var t = I && I.__createBinding || (Object.create ? function(j, E, R, V) {
      V === void 0 && (V = R);
      var D = Object.getOwnPropertyDescriptor(E, R);
      (!D || ("get" in D ? !E.__esModule : D.writable || D.configurable)) && (D = {
        enumerable: !0,
        get: function() {
          return E[R]
        }
      }), Object.defineProperty(j, V, D)
    } : function(j, E, R, V) {
      V === void 0 && (V = R), j[V] = E[R]
    }),
    r = I && I.__exportStar || function(j, E) {
      for (var R in j) R !== "default" && !Object.prototype.hasOwnProperty.call(E, R) && t(E, j, R)
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.computeStorageFees = e.computeMessageForwardFees = e.computeGasPrices = e.computeFwdFees = e.computeExternalMessageFees = e.loadConfigParamsAsSlice = e.loadConfigParamById = e.parseFullConfig = e.parseVotingSetup = e.parseValidatorSet = e.parseProposalSetup = e.parseBridge = e.configParseWorkchainDescriptor = e.configParseValidatorSet = e.configParseMsgPrices = e.configParseMasterAddressRequired = e.configParseMasterAddress = e.configParseGasLimitsPrices = e.configParseBridge = e.configParse40 = e.configParse29 = e.configParse28 = e.configParse18 = e.configParse17 = e.configParse16 = e.configParse15 = e.configParse13 = e.configParse12 = e.configParse8 = e.configParse5 = e.ElectorContract = e.MultisigWallet = e.MultisigOrderBuilder = e.MultisigOrder = e.JettonWallet = e.JettonMaster = e.WalletContractV5R1 = e.WalletContractV5Beta = e.WalletContractV4 = e.WalletContractV3R2 = e.WalletContractV3R1 = e.WalletContractV2R2 = e.WalletContractV2R1 = e.WalletContractV1R3 = e.WalletContractV1R2 = e.WalletContractV1R1 = e.TonClient4 = e.TonClient = e.HttpApi = void 0, r(q, e);
  var n = fr;
  Object.defineProperty(e, "HttpApi", {
    enumerable: !0,
    get: function() {
      return n.HttpApi
    }
  });
  var o = Xr;
  Object.defineProperty(e, "TonClient", {
    enumerable: !0,
    get: function() {
      return o.TonClient
    }
  });
  var a = Jr;
  Object.defineProperty(e, "TonClient4", {
    enumerable: !0,
    get: function() {
      return a.TonClient4
    }
  });
  var i = en;
  Object.defineProperty(e, "WalletContractV1R1", {
    enumerable: !0,
    get: function() {
      return i.WalletContractV1R1
    }
  });
  var s = rn;
  Object.defineProperty(e, "WalletContractV1R2", {
    enumerable: !0,
    get: function() {
      return s.WalletContractV1R2
    }
  });
  var l = nn;
  Object.defineProperty(e, "WalletContractV1R3", {
    enumerable: !0,
    get: function() {
      return l.WalletContractV1R3
    }
  });
  var c = an;
  Object.defineProperty(e, "WalletContractV2R1", {
    enumerable: !0,
    get: function() {
      return c.WalletContractV2R1
    }
  });
  var u = on;
  Object.defineProperty(e, "WalletContractV2R2", {
    enumerable: !0,
    get: function() {
      return u.WalletContractV2R2
    }
  });
  var f = sn;
  Object.defineProperty(e, "WalletContractV3R1", {
    enumerable: !0,
    get: function() {
      return f.WalletContractV3R1
    }
  });
  var k = ln;
  Object.defineProperty(e, "WalletContractV3R2", {
    enumerable: !0,
    get: function() {
      return k.WalletContractV3R2
    }
  });
  var m = dn;
  Object.defineProperty(e, "WalletContractV4", {
    enumerable: !0,
    get: function() {
      return m.WalletContractV4
    }
  });
  var P = Jo;
  Object.defineProperty(e, "WalletContractV5Beta", {
    enumerable: !0,
    get: function() {
      return P.WalletContractV5Beta
    }
  });
  var g = Zo;
  Object.defineProperty(e, "WalletContractV5R1", {
    enumerable: !0,
    get: function() {
      return g.WalletContractV5R1
    }
  });
  var _ = cn;
  Object.defineProperty(e, "JettonMaster", {
    enumerable: !0,
    get: function() {
      return _.JettonMaster
    }
  });
  var B = un;
  Object.defineProperty(e, "JettonWallet", {
    enumerable: !0,
    get: function() {
      return B.JettonWallet
    }
  });
  var S = hr;
  Object.defineProperty(e, "MultisigOrder", {
    enumerable: !0,
    get: function() {
      return S.MultisigOrder
    }
  });
  var y = fn;
  Object.defineProperty(e, "MultisigOrderBuilder", {
    enumerable: !0,
    get: function() {
      return y.MultisigOrderBuilder
    }
  });
  var w = hn;
  Object.defineProperty(e, "MultisigWallet", {
    enumerable: !0,
    get: function() {
      return w.MultisigWallet
    }
  });
  var A = gn;
  Object.defineProperty(e, "ElectorContract", {
    enumerable: !0,
    get: function() {
      return A.ElectorContract
    }
  });
  var p = z;
  Object.defineProperty(e, "configParse5", {
    enumerable: !0,
    get: function() {
      return p.configParse5
    }
  }), Object.defineProperty(e, "configParse8", {
    enumerable: !0,
    get: function() {
      return p.configParse8
    }
  }), Object.defineProperty(e, "configParse12", {
    enumerable: !0,
    get: function() {
      return p.configParse12
    }
  }), Object.defineProperty(e, "configParse13", {
    enumerable: !0,
    get: function() {
      return p.configParse13
    }
  }), Object.defineProperty(e, "configParse15", {
    enumerable: !0,
    get: function() {
      return p.configParse15
    }
  }), Object.defineProperty(e, "configParse16", {
    enumerable: !0,
    get: function() {
      return p.configParse16
    }
  }), Object.defineProperty(e, "configParse17", {
    enumerable: !0,
    get: function() {
      return p.configParse17
    }
  }), Object.defineProperty(e, "configParse18", {
    enumerable: !0,
    get: function() {
      return p.configParse18
    }
  }), Object.defineProperty(e, "configParse28", {
    enumerable: !0,
    get: function() {
      return p.configParse28
    }
  }), Object.defineProperty(e, "configParse29", {
    enumerable: !0,
    get: function() {
      return p.configParse29
    }
  }), Object.defineProperty(e, "configParse40", {
    enumerable: !0,
    get: function() {
      return p.configParse40
    }
  }), Object.defineProperty(e, "configParseBridge", {
    enumerable: !0,
    get: function() {
      return p.configParseBridge
    }
  }), Object.defineProperty(e, "configParseGasLimitsPrices", {
    enumerable: !0,
    get: function() {
      return p.configParseGasLimitsPrices
    }
  }), Object.defineProperty(e, "configParseMasterAddress", {
    enumerable: !0,
    get: function() {
      return p.configParseMasterAddress
    }
  }), Object.defineProperty(e, "configParseMasterAddressRequired", {
    enumerable: !0,
    get: function() {
      return p.configParseMasterAddressRequired
    }
  }), Object.defineProperty(e, "configParseMsgPrices", {
    enumerable: !0,
    get: function() {
      return p.configParseMsgPrices
    }
  }), Object.defineProperty(e, "configParseValidatorSet", {
    enumerable: !0,
    get: function() {
      return p.configParseValidatorSet
    }
  }), Object.defineProperty(e, "configParseWorkchainDescriptor", {
    enumerable: !0,
    get: function() {
      return p.configParseWorkchainDescriptor
    }
  }), Object.defineProperty(e, "parseBridge", {
    enumerable: !0,
    get: function() {
      return p.parseBridge
    }
  }), Object.defineProperty(e, "parseProposalSetup", {
    enumerable: !0,
    get: function() {
      return p.parseProposalSetup
    }
  }), Object.defineProperty(e, "parseValidatorSet", {
    enumerable: !0,
    get: function() {
      return p.parseValidatorSet
    }
  }), Object.defineProperty(e, "parseVotingSetup", {
    enumerable: !0,
    get: function() {
      return p.parseVotingSetup
    }
  }), Object.defineProperty(e, "parseFullConfig", {
    enumerable: !0,
    get: function() {
      return p.parseFullConfig
    }
  }), Object.defineProperty(e, "loadConfigParamById", {
    enumerable: !0,
    get: function() {
      return p.loadConfigParamById
    }
  }), Object.defineProperty(e, "loadConfigParamsAsSlice", {
    enumerable: !0,
    get: function() {
      return p.loadConfigParamsAsSlice
    }
  });
  var U = oe;
  Object.defineProperty(e, "computeExternalMessageFees", {
    enumerable: !0,
    get: function() {
      return U.computeExternalMessageFees
    }
  }), Object.defineProperty(e, "computeFwdFees", {
    enumerable: !0,
    get: function() {
      return U.computeFwdFees
    }
  }), Object.defineProperty(e, "computeGasPrices", {
    enumerable: !0,
    get: function() {
      return U.computeGasPrices
    }
  }), Object.defineProperty(e, "computeMessageForwardFees", {
    enumerable: !0,
    get: function() {
      return U.computeMessageForwardFees
    }
  }), Object.defineProperty(e, "computeStorageFees", {
    enumerable: !0,
    get: function() {
      return U.computeStorageFees
    }
  })
})(bs);
export {
  bs as d
};