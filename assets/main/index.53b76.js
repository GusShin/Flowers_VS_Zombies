window.__require = function e(t, o, n) {
  function r(a, c) {
    if (!o[a]) {
      if (!t[a]) {
        var s = a.split('/');
        if (s = s[s.length - 1], !t[s]) {
          var l = 'function' == typeof __require && __require;
          if (!c && l) return l(s, !0);
          if (i) return i(s, !0);
          throw new Error('Cannot find module \'' + a + '\'')
        }
        a = s
      }
      var p = o[a] = {
        exports: {
        }
      };
      t[a][0].call(p.exports, function (e) {
        return r(t[a][1][e] || e)
      }, p, p.exports, e, t, o, n)
    }
    return o[a].exports
  }
  for (var i = 'function' == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
  return r
}({
  ActionTools: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'b2c25CPD7ZMCZD/CIj7ZzqP', 'ActionTools'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.ActionTools = void 0;
      var n = function () {
        function e() {
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e.prototype.doLabStrAni = function (e, t, o) {
          e.node.stopAllActions(),
          e.string = '';
          var n = t.split(''),
          r = 0,
          i = o / n.length;
          e.node.runAction(cc.sequence(cc.callFunc(function () {
            e.string = e.string + n[r],
            r++
          }), cc.delayTime(i)).repeat(n.length))
        },
        e.prototype.openUIAni = function (e, t, o, n) {
          void 0 === o && (o = 0.3),
          void 0 === n && (n = function () {
          }),
          e.opacity = 0,
          t.scale = 0,
          e.runAction(cc.fadeTo(o, 100)),
          t.runAction(cc.sequence(cc.scaleTo(o, 1).easing(cc.easeBackOut()), cc.callFunc(n)))
        },
        e.prototype.closeUIAni = function (e, t, o, n) {
          void 0 === o && (o = 0.2),
          void 0 === n && (n = function () {
          }),
          e.runAction(cc.fadeOut(o)),
          t.runAction(cc.sequence(cc.scaleTo(o, 0).easing(cc.easeBackIn()), cc.callFunc(n), cc.removeSelf(!0)))
        },
        e.prototype.sortFadeToArr = function (e, t, o, n) {
          void 0 === t && (t = 0.3),
          void 0 === o && (o = 0.02),
          void 0 === n && (n = !1);
          for (var r = n ? 0 : 255, i = 0; i < e.length; i++) {
            var a = e[i];
            a.opacity = 0,
            a.runAction(cc.sequence(cc.delayTime(o * i), cc.fadeTo(t, r)))
          }
        },
        e.prototype.jumpByDegressAni = function (e, t, o, n, r, i) {
          void 0 === o && (o = 0),
          void 0 === i && (i = 0);
          var a = cc.misc.degreesToRadians(t),
          c = cc.v2(Math.cos(a) * n, Math.sin(a) * n),
          s = n / r;
          e.runAction(cc.sequence(cc.delayTime(i), cc.jumpBy(s, cc.v2(1.5 * c.x, o), n, 1), cc.removeSelf(!0)))
        },
        e.prototype.moveDegressAni = function (e, t, o, n, r, i) {
          void 0 === o && (o = 200),
          void 0 === r && (r = !1),
          void 0 === i && (i = !1),
          t = t || this.returnRanNum( - 180, 180);
          var a = cc.misc.degreesToRadians(t),
          c = cc.v2(Math.cos(a) * o, Math.sin(a) * o),
          s = o / n,
          l = r ? 0 : e.scale,
          p = i ? 0 : e.opacity;
          e.runAction(cc.sequence(cc.spawn(cc.scaleTo(s + 0.1, l), cc.moveBy(s, c).easing(cc.easeQuadraticActionOut()), cc.fadeTo(s + 0.1, p)), cc.fadeOut(0.1), cc.removeSelf(!0)))
        },
        e.prototype.moveByOutInit = function (e, t, o, n) {
          void 0 === t && (t = 0.5),
          void 0 === o && (o = 0),
          void 0 === n && (n = 0),
          e.x += o,
          e.y += n,
          e.runAction(cc.moveBy(t, cc.v2( - o, - n)).easing(cc.easeBackOut()))
        },
        e.prototype.sprRedAni = function (e, t, o, n) {
          var r = 0;
          e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function (e) {
            e.color = cc.Color.RED
          }), cc.delayTime(t), cc.callFunc(function (e) {
            e.color = cc.Color.WHITE,
            ++r >= o && null != n && n()
          })).repeat(o))
        },
        e.prototype.shakeAni = function (e, t, o, n, r) {
          void 0 === t && (t = !1),
          void 0 === o && (o = 10),
          void 0 === n && (n = 0.1),
          void 0 === r && (r = 2);
          var i = cc.sequence(cc.rotateBy(n, o), cc.rotateBy(n, - o), cc.rotateBy(n, - o), cc.rotateBy(n, o), cc.rotateBy(n, o), cc.rotateBy(n, - o), cc.delayTime(r));
          t ? e.runAction(i.repeatForever()) : e.runAction(i)
        },
        e.prototype.returnRanNum = function (e, t) {
          return e + Math.floor(Math.random() * (t - e + 1))
        },
        e._instance = new e,
        e
      }();
      o.ActionTools = n,
      cc._RF.pop()
    },
    {
    }
  ],
  AdManager_H5: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'a2d4apyHgxPzpAgAaWifHNK', 'AdManager_H5'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.AdManager_H5 = void 0;
      var n = function () {
        function e() {
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e.prototype.showIntersAd = function () {
          adBreak({
            type: 'next',
            name: 'restart-game'
          })
        },
        e.prototype.showVideoAd = function (e, t) {
          var o = this;
          this.videoBack = null,
          this.errorBack = null,
          e && (this.videoBack = e),
          t && (this.errorBack = t),
          adBreak({
            type: 'reward',
            name: 'dasdf',
            beforeReward: function (e) {
              e()
            },
            adDismissed: function () {
              o.errorVideo()
            },
            adViewed: function () {
              o.finishVideo()
            },
            adBreakDone: function () {
              o.finishVideo()
            }
          })
        },
        e.prototype.finishVideo = function () {
          this.videoBack && this.videoBack(),
          this.videoBack = null,
          this.errorBack = null
        },
        e.prototype.errorVideo = function () {
          this.errorBack && this.errorBack(),
          this.videoBack = null,
          this.errorBack = null
        },
        e._instance = new e,
        e
      }();
      o.AdManager_H5 = n,
      cc._RF.pop()
    },
    {
    }
  ],
  AdManager: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '2a99aiMR2pMnpcfHJUcJzI4', 'AdManager'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.AdManager = void 0;
      var n = e('../manager/PlatformManager'),
      r = e('./AdManager_H5'),
      i = function () {
        function e() {
        }
        return e.initAds = function () {
        },
        e.loadAds = function () {
        },
        e.showIntersAd = function () {
          var e = n.PlatformManager.releaseType;
          e != n.releaseType.test_TEST && (e != n.releaseType.h5_weiSan && e != n.releaseType.h5_common || r.AdManager_H5._ins.showIntersAd())
        },
        e.showVideoAd = function (e, t) {
          var o = n.PlatformManager.releaseType;
          o != n.releaseType.test_TEST ? o != n.releaseType.h5_weiSan && o != n.releaseType.h5_common || r.AdManager_H5._ins.showVideoAd(e, t) : e && e()
        },
        e
      }();
      o.AdManager = i,
      cc._RF.pop()
    },
    {
      '../manager/PlatformManager': 'PlatformManager',
      './AdManager_H5': 'AdManager_H5'
    }
  ],
  Corpse: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '476a3lubsBHZ7SsY5YunIxm', 'Corpse');
      var n,
      r = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: [
          ]
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        }
        || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }) (e, t)
      }, function (e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      i = this && this.__decorate || function (e, t, o, n) {
        var r,
        i = arguments.length,
        a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
         else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
        return i > 3 && a && Object.defineProperty(t, o, a),
        a
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      });
      var a = e('../common/Tools'),
      c = e('../model/GameModel'),
      s = cc._decorator,
      l = s.ccclass,
      p = s.property,
      d = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.label_corpseBlood = null,
          t.corpse_row = null,
          t.corpse_col = null,
          t.skinIndex = null,
          t.skinArr = [
            'j',
            'j2',
            'j3'
          ],
          t.skinDeathArr = [
            'j1xx',
            'j2xx',
            'j3xx'
          ],
          t.blood = 5,
          t.flash = !1,
          t.fuckingDeath = !1,
          t.canBloodLoss = !1,
          t
        }
        return r(t, e),
        t.prototype.onCollisionEnter = function (e) {
          var t = this,
          o = c.GameModel._ins.mainGame;
          if (this.canBloodLoss && 1 == e.tag) {
            var n = this.node.getChildByName('corpse');
            if (a.Tools.playAudio('biu', 1), this.flash || (this.flash = !0, cc.tween(n).call(function () {
              n.getComponent(sp.Skeleton).setSkin(t.skinDeathArr[t.skinIndex])
            }).to(0.1, {
              color: new cc.Color(255, 0, 0, 255)
            }).to(0.1, {
              color: new cc.Color(255, 255, 255, 255)
            }).to(0.1, {
              color: new cc.Color(255, 0, 0, 255)
            }).to(0.1, {
              color: new cc.Color(255, 255, 255, 255)
            }).call(function () {
              t.flash = !1,
              n.getComponent(sp.Skeleton).setSkin(t.skinArr[t.skinIndex])
            }).start()), e.node.destroy(), this.boomShow(e.node.name), this.blood -= e.node.attack, this.blood = Math.round(10000 * this.blood) / 10000, this.blood <= 0) {
              if (this.fuckingDeath) return;
              this.fuckingDeath = !0,
              o.gameScore++,
              this.blood = 0,
              o.label_gameScore.string = o.gameScore.toString();
              var r = o.corpseArr.indexOf(this.node);
              o.corpseArr.splice(r, 1),
              this.node.getComponent(cc.BoxCollider).enabled = !1;
              var i = a.Tools.newPrefab('corpseD', this.node, cc.v2(0), 0, function () {
              }).getComponent(sp.Skeleton);
              i.setSkin(this.skinDeathArr[this.skinIndex]),
              2 == this.skinIndex && (i.animation = 'boss si'),
              n.active = !1,
              i.setCompleteListener(function () {
                cc.tween(t.node).to(0.5, {
                  opacity: 0
                }).call(function () {
                  t.node.destroy()
                }).start()
              })
            }
            this.label_corpseBlood.string = Math.ceil(this.blood).toString()
          }
        },
        t.prototype.onLoad = function () {
        },
        t.prototype.start = function () {
        },
        t.prototype.manualInitialization = function () {
          var e = c.GameModel._ins.mainGame;
          this.node.getChildByName('corpse').getComponent(sp.Skeleton).setSkin(this.skinArr[this.skinIndex]);
          var t = 20;
          e.count_setCorpse > 500 ? t = 1 : e.count_setCorpse > 400 ? t = 2 : e.count_setCorpse > 350 ? t = 3 : e.count_setCorpse > 300 ? t = 4 : e.count_setCorpse > 270 ? t = 5 : e.count_setCorpse > 240 ? t = 6 : e.count_setCorpse > 210 ? t = 7 : e.count_setCorpse > 165 ? t = 8 : e.count_setCorpse > 130 ? t = 10 : e.count_setCorpse > 90 ? t = 13 : e.count_setCorpse > 75 ? t = 15 : e.count_setCorpse > 40 && (t = 18);
          var o = c.GameModel._ins.mainGame.count_setCorpse;
          this.blood = 1 == o ? 1 : o <= 5 ? 2 + Math.floor(o / 3) : o <= 10 ? 2 + Math.floor(o / 2) : o <= 30 ? 5 + Math.floor(o / 2) : 10 * Math.floor(o / t) + Math.floor(9.99 * Math.random()),
          2 == this.skinIndex && (this.blood = Math.floor(1.5 * this.blood), this.node.getChildByName('shadom').setScale(2)),
          this.label_corpseBlood.string = this.blood.toString(),
          2 == this.skinIndex && this.label_corpseBlood.node.setPosition(cc.v2(0, 100))
        },
        t.prototype.move = function () {
          var e = this,
          t = c.GameModel._ins.mainGame;
          cc.tween(this.node).by(c.GameModel._ins.corpseMovingTime, {
            position: cc.v3(0, - t.lattice_height, 0)
          }).call(function () {
            e.canBloodLoss || (e.canBloodLoss = !0)
          }).start(),
          this.corpse_row--
        },
        t.prototype.getRandomNum = function (e, t, o) {
          return o ? Math.floor(Math.random() * (t - e + 1) + e) : Math.random() * (t - e) + e
        },
        t.prototype.degreesToVectors = function (e) {
          var t = e * Math.PI / 180;
          return cc.v2(1, 0).rotate( - t)
        },
        t.prototype.boomShow = function (e) {
          var t = c.GameModel._ins.mainGame,
          o = null,
          n = null,
          r = 1;
          'bullet_one' == e ? (o = 'boom_one1', n = 'pop_one', r = 2) : 'bullet_two' == e ? (o = 'boom_two1', n = 'pop_two', r = 2) : 'bullet_four' == e ? (o = 'boom_four' + Math.ceil(1.99 * Math.random()), n = 'pop_four') : 'bullet_eight' == e ? (o = 'boom_eight' + Math.ceil(1.99 * Math.random()), n = 'pop_eight') : 'bullet_sixteen' == e ? (o = 'boom_sixteen' + Math.ceil(1.99 * Math.random()), n = 'pop_sixteen') : 'bullet_more1' == e ? (o = 'boom_more1', n = 'pop_four', r = 2) : 'bullet_more2' == e ? (o = 'boom_more2', n = 'pop_sixteen', r = 2) : 'bullet_more3' == e ? (o = 'boom_more3', n = 'pop_one', r = 2) : 'bullet_more4' == e ? (o = 'boom_more4', n = 'pop_more', r = 2) : 'bullet_more5' == e ? (o = 'boom_more5', n = 'pop_two', r = 2) : 'bullet_more6' == e && (o = 'boom_more6', n = 'pop_eight', r = 2);
          for (var i = 0; i < 8; i++) {
            'bullet_more1' != e && 'bullet_more2' != e && 'bullet_more3' != e && 'bullet_more4' != e && 'bullet_more5' != e && 'bullet_more6' != e || (o = 'boom_more' + Math.ceil(5.99 * Math.random()));
            var s = a.Tools.newPrefab('boom', t.effectNode, cc.v2(this.node), 1, function () {
            });
            a.Tools.setSpriteFrame(s, o);
            var l = this.getRandomNum(0, 360, !0),
            p = this.degreesToVectors(l),
            d = this.getRandomNum(0, 200, !0);
            s.setScale(r),
            s.angle = l,
            s.setPosition(cc.v2(this.node.position)),
            cc.tween(s).by(d / 150 / 10, {
              position: cc.v2(p.x * d, p.y * d),
              angle: 100
            }).parallel(cc.tween().by(d / 150 / 2, {
              position: cc.v3(p.x * d, p.y * d),
              angle: 100 * Math.random() + 100
            }), cc.tween().to(Math.random() * d / 150 / 2, {
              scale: 0
            })).removeSelf().start()
          }
          var u = a.Tools.newPrefab('pop', t.effectNode, cc.v2(this.node), 1, function () {
          });
          a.Tools.setSpriteFrame(u, n),
          u.setScale(0),
          cc.tween(u).parallel(cc.tween().to(0.3, {
            scale: 2
          }), cc.tween().to(0.3, {
            opacity: 0
          })).start()
        },
        t.prototype.skeChange_stay = function () {
          var e = this.node.getChildByName('corpse').getComponent(sp.Skeleton);
          e.animation = '2 jingtai',
          e.timeScale = 1
        },
        t.prototype.skeChange_run = function () {
          var e = this.node.getChildByName('corpse').getComponent(sp.Skeleton);
          e.animation = 'zoulu',
          e.timeScale = 2
        },
        t.prototype.skeChange_sttacked = function () {
          this.node.getChildByName('corpse').getComponent(sp.Skeleton).animation = 'beida'
        },
        t.prototype.skeChange_fail = function () {
          this.node.getChildByName('corpse').getComponent(sp.Skeleton).animation = 'shibai'
        },
        i([p({
          displayName: '僵尸血量数字',
          tooltip: '文字',
          type: cc.Label
        })], t.prototype, 'label_corpseBlood', void 0),
        i([l], t)
      }(cc.Component);
      o.default = d,
      cc._RF.pop()
    },
    {
      '../common/Tools': 'Tools',
      '../model/GameModel': 'GameModel'
    }
  ],
  EventManager: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '133eazTY8lPDrziDak8SK9u', 'EventManager'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.EventData = o.EventManager = void 0;
      var n = function () {
        function e() {
        }
        return e.addListener = function (e, t, o) {
          cc.director.on(e, t, o)
        },
        e.removeListener = function (e, t, o) {
          cc.director.off(e, t, o)
        },
        e.dispachEvent = function (e, t, o, n, r, i) {
          cc.director.emit(e, t, o, n, r, i)
        },
        e.removeListenerForTarget = function (e) {
          cc.director.targetOff(e)
        },
        e
      }();
      o.EventManager = n,
      function (e) {
        e.START_GAME = 'START_GAME',
        e.SHOW_GLOD = 'SHOW_GLOD',
        e.REIVE_GAME = 'REIVE_GAME'
      }(o.EventData || (o.EventData = {
      })),
      cc._RF.pop()
    },
    {
    }
  ],
  Flower: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'c9f90iB28lG0LTgAKBi4O1p', 'Flower');
      var n,
      r = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: [
          ]
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        }
        || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }) (e, t)
      }, function (e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      i = this && this.__decorate || function (e, t, o, n) {
        var r,
        i = arguments.length,
        a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
         else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
        return i > 3 && a && Object.defineProperty(t, o, a),
        a
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      });
      var a = e('../common/Tools'),
      c = e('../ctrl/GameCtrl'),
      s = e('../model/GameModel'),
      l = cc._decorator,
      p = l.ccclass,
      d = l.property,
      u = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.label = null,
          t.text = 'hello',
          t.lattice_tempFlags = !1,
          t.level = 1,
          t.label_bulletCount = null,
          t.lattice_temp = null,
          t.lattice_last = null,
          t.ctrlMEFlags = !1,
          t.guideMFOnce = !1,
          t.bullet_moreNum = 1,
          t.temp_time = 0,
          t
        }
        return r(t, e),
        t.prototype.onLoad = function () {
          this.addTouchEvents(),
          this.ready()
        },
        t.prototype.ready = function () {
          this.lattice_last = cc.v2(s.GameModel._ins.mainGame.basket)
        },
        t.prototype.start = function () {
        },
        t.prototype.addTouchEvents = function () {
          cc.macro.ENABLE_MULTI_TOUCH = !1,
          this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartBack, this),
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveBack, this),
          this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndBack, this),
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndBack, this)
        },
        t.prototype.touchStartBack = function (e) {
          c.GameCtrl._ins.boolTouch && (this.lattice_tempFlags || s.GameModel._ins.mainGame.canTouch && (this.toushStartPos = a.Tools.getToNodePosForWorld(e.getLocation(), this.node), this.ctrlMEFlags = !0))
        },
        t.prototype.touchMoveBack = function (e) {
          if (c.GameCtrl._ins.boolTouch && !this.lattice_tempFlags && s.GameModel._ins.mainGame.canTouch && this.ctrlMEFlags) {
            var t = s.GameModel._ins.mainGame,
            o = this.node.parent.childrenCount;
            this.node.setSiblingIndex(o);
            var n = e.getLocation();
            this.node.x = n.x - t.gameWidth / 2,
            this.node.y = n.y - t.gameHeight / 2 + t.lattice_height / 4;
            var r = this.findLattice(e);
            if (!(r.row + 1)) return this.lattice_temp && t.latticeArr[this.lattice_temp.row][this.lattice_temp.col].flower && (t.latticeArr[this.lattice_temp.row][this.lattice_temp.col].flower.opacity = 255),
            void this.handleFlower_temp();
            if (!this.lattice_temp) {
              this.lattice_temp = r;
              var i = t.latticeArr[r.row][r.col],
              a = this.level;
              i.flower && i.flower != this.node && (i.flower.opacity = 0, i.flower.getComponent('Flower').level == this.level && (a = this.level + 1)),
              t.flower_temp.getComponent('Flower').levelChange(a),
              this.latticeShow_showTempLattice(r)
            }
            if (r.row != this.lattice_temp.row || r.col != this.lattice_temp.col) {
              t.latticeArr[this.lattice_temp.row][this.lattice_temp.col].flower && (t.latticeArr[this.lattice_temp.row][this.lattice_temp.col].flower.opacity = 255),
              this.lattice_temp = r;
              var l = t.latticeArr[r.row][r.col],
              p = this.level;
              l.flower && l.flower != this.node && (l.flower.opacity = 0, l.flower.getComponent('Flower').level == this.level && (p = this.level + 1)),
              t.flower_temp.getComponent('Flower').levelChange(p),
              this.latticeShow_showTempLattice(r)
            }
          }
        },
        t.prototype.touchEndBack = function (e) {
          if (c.GameCtrl._ins.boolTouch && !this.lattice_tempFlags && s.GameModel._ins.mainGame.canTouch && this.ctrlMEFlags) {
            this.ctrlMEFlags = !1;
            var t = s.GameModel._ins.mainGame,
            o = this.findLattice(e);
            if (this.handleFlower_temp(), o.row + 1 && !(o.row > 1)) {
              a.Tools.playAudio('kua', 1);
              var n = t.latticeArr[o.row][o.col];
              if (n.flower) {
                if (n.flower == this.node) return void this.node.setPosition(cc.v2(this.lattice_last));
                n.flower.opacity = 255;
                var r = n.flower.getComponent('Flower').level;
                if (r != this.level) return n.flower.getComponent('Flower').level = this.level,
                n.flower.getComponent('Flower').levelChange(this.level),
                n.flower,
                this.level = r,
                this.levelChange(r),
                this.node.setPosition(cc.v2(this.lattice_last)),
                void this.attackShow(n);
                var i = t.latticeArr[o.row][o.col].lattice,
                l = cc.v2(i.x, i.y - t.lattice_height / t.lattice_offsety);
                this.node.setPosition(l),
                this.node == t.basket_flower && (t.basket_flower = null);
                var p = a.Tools.newPrefab('star', t.effectNode, cc.v2(this.node), 1, function () {
                });
                cc.tween(p).to(0.3, {
                  opacity: 255
                }).to(0.3, {
                  opacity: 0
                }).removeSelf().start(),
                n.flower.destroy(),
                this.level++,
                this.levelChange(this.level)
              }
              var d = t.latticeArr[o.row][o.col].lattice,
              u = cc.v2(d.x, d.y - t.lattice_height / t.lattice_offsety);
              this.node.setPosition(u),
              this.node == t.basket_flower && (t.basket_flower = null),
              this.lattice_last.row + 1 && (t.latticeArr[this.lattice_last.row][this.lattice_last.col].flower = null),
              this.lattice_last = this.node.position,
              this.lattice_last.row = o.row,
              this.lattice_last.col = o.col,
              t.latticeArr[o.row][o.col].flower = this.node,
              this.attackShow(n)
            } else this.node.setPosition(cc.v2(this.lattice_last))
          }
        },
        t.prototype.attackShow = function (e) {
          var t = this,
          o = s.GameModel._ins.mainGame;
          if (o.canTouch = !1, o.basket_flower) {
            var n = this.node.parent.childrenCount;
            o.basket_flower.setSiblingIndex(n)
          }
          var r = this.recordSeedNum();
          if (o.guideFlags) o.guideFlags = !1;
           else {
            if (this.guideMFOnce) return;
            o.guideMoveFlags = !1
          }
          this.effect_leaf(e);
          for (var i = [
          ], a = 0; a < o.corpseArr.length; a++) {
            var c = o.corpseArr[a].getComponent('Corpse').corpse_col;
            2 == o.corpseArr[a].getComponent('Corpse').skinIndex && - 1 == i.indexOf(c - 1) && i.push(c - 1),
            - 1 == i.indexOf(c) && i.push(c)
          }
          if (1 == s.GameModel._ins.gameMode) for (a = 0; a < o.seedArr.length; a++) {
            var l = o.seedArr[a].getComponent('Seed').seed_col;
            - 1 == i.indexOf(l) && i.push(l)
          }
          var p = [
          ];
          for (a = 0; a < 2; a++) for (var d = 0; d < i.length; d++) o.latticeArr[a][i[d]].flower && p.push(o.latticeArr[a][i[d]].flower);
          for (a = 0; a < p.length; a++) p[a].getComponent('Flower').skeChange_sttack();
          var u = 0 == p.length ? r : 2;
          cc.tween(this.node).delay(u).call(function () {
            t.corpseFeedback()
          }).start()
        },
        t.prototype.recordSeedNum = function () {
          var e = s.GameModel._ins.mainGame;
          return e.setSeedNum++,
          e.setSeedNum == s.GameModel._ins.setSeed_standardTime ? (e.setSeedNum = Math.random() < 0.5 ? 1 : 0, 1 == e.count_setCorpse ? (e.setSeed(cc.v2(0)), s.GameModel._ins.corpseMovingTime) : e.count_setCorpse % 10 == 0 || (e.count_setCorpse + 1) % 10 == 0 || (e.count_setCorpse - 1) % 10 == 0 ? 0 : (e.setSeed(cc.v2(0)), s.GameModel._ins.corpseMovingTime)) : 0
        },
        t.prototype.effect_leaf = function (e) {
          for (var t = s.GameModel._ins.mainGame, o = e.lattice, n = cc.v2(o.x, o.y - t.lattice_height / 4), r = 0; r < 12; r++) {
            var i = a.Tools.newPrefab('leaf', t.effectNode, cc.v2(this.node), 1, function () {
            });
            i.setScale(1.2);
            var c = Math.ceil(3.99 * Math.random());
            a.Tools.setSpriteFrame(i, 'leaf' + c);
            var l = this.getRandomNum( - 30, 240, !0),
            p = this.degreesToVectors(l),
            d = this.getRandomNum(75, 100, !0);
            i.angle = l,
            i.setPosition(cc.v2(n)),
            cc.tween(i).by(d / 25 / 10, {
              position: cc.v2(p.x * d, p.y * d),
              angle: 150
            }).parallel(cc.tween().by(d / 25 / 5, {
              position: cc.v3(p.x * d, p.y * d),
              angle: 150
            }), cc.tween().to(Math.random() * d / 25 / 5, {
              scale: 0
            })).removeSelf().start()
          }
        },
        t.prototype.getRandomNum = function (e, t, o) {
          return o ? Math.floor(Math.random() * (t - e + 1) + e) : Math.random() * (t - e) + e
        },
        t.prototype.degreesToVectors = function (e) {
          var t = e * Math.PI / 180;
          return cc.v2(1, 0).rotate( - t)
        },
        t.prototype.skeChange_sttack = function () {
          var e = this.node.getChildByName('flower'),
          t = this.node.getChildByName('flowerT'),
          o = e.getComponent(sp.Skeleton),
          n = t.getComponent(sp.Skeleton);
          1 == this.level ? (o.animation = 'biu', o.setCompleteListener(function () {
            o.animation = 'yaobai'
          })) : 2 == this.level ? (n.animation = 'fashe', n.timeScale = 2, n.setCompleteListener(function () {
            n.animation = 'kaibai',
            n.timeScale = 1
          })) : this.level > 2 && (o.animation = 'biu5', o.timeScale = 2, o.setCompleteListener(function () {
            o.animation = 'yaobai',
            o.timeScale = 1
          })),
          this.bullet_moreNum = 1;
          var r = null,
          i = null;
          this.level <= 2 ? (r = this.level, i = 0.1) : this.level > 2 && this.level <= 5 ? (r = this.level + 1, i = 0.05) : (r = 6, i = 0.05),
          this.schedule(this.setBullet, i, r - 1)
        },
        t.prototype.setBullet = function () {
          var e = s.GameModel._ins.mainGame,
          t = a.Tools.newPrefab('bullet', e.bulletNode, cc.v2(this.node.x, this.node.y + this.node.height / 2), 1, function () {
          });
          1 == this.level ? (t.attack = 1, t.name = 'bullet_one', a.Tools.setSpriteFrame(t, 'bullet_one')) : 2 == this.level ? (t.attack = 1, t.name = 'bullet_two', a.Tools.setSpriteFrame(t, 'bullet_two')) : 3 == this.level ? (t.attack = 1, t.name = 'bullet_four', a.Tools.setSpriteFrame(t, 'bullet_four')) : 4 == this.level ? (t.attack = Math.ceil(16000) / 10000, t.name = 'bullet_eight', a.Tools.setSpriteFrame(t, 'bullet_eight')) : 5 == this.level ? (t.attack = Math.ceil(16 / 6 * 10000) / 10000, t.name = 'bullet_sixteen', a.Tools.setSpriteFrame(t, 'bullet_sixteen')) : this.level > 5 && (t.attack = Math.ceil(Math.pow(2, this.level - 1) / 6 * 10000) / 10000, t.name = 'bullet_more' + this.bullet_moreNum, a.Tools.setSpriteFrame(t, 'bullet_more' + this.bullet_moreNum), t.setScale(1.2), this.bullet_moreNum++),
          cc.tween(t).by(2, {
            position: cc.v2(0, e.gameHeight)
          }).removeSelf().start()
        },
        t.prototype.corpseFeedback = function () {
          var e = s.GameModel._ins.mainGame;
          e.canTouch = !0,
          e.guideMoveAct(),
          2 == s.GameModel._ins.gameMode ? e.setCorpse() : 1 == s.GameModel._ins.gameMode && (e.count_setCorpse < 8 ? 0 == e.corpseArr.length && e.setCorpse() : e.count_setCorpse < 15 ? e.corpseArr.length < 2 && e.setCorpse() : e.count_setCorpse > 30 ? e.setCorpse() : 0 == e.corpseArr.length ? e.setCorpse() : Math.random() > 0.2 && e.setCorpse()),
          e.ctrlMoving();
          for (var t = 0; t < e.corpseArr.length; t++) e.corpseArr[t].getComponent('Corpse').skeChange_run();
          this.scheduleOnce(function () {
            for (var t = 0; t < e.corpseArr.length; t++) e.corpseArr[t].getComponent('Corpse').skeChange_stay()
          }, s.GameModel._ins.corpseMovingTime)
        },
        t.prototype.findLattice = function (e) {
          var t = s.GameModel._ins.mainGame,
          o = e.getLocation();
          o = cc.v2(o.x, o.y + t.lattice_height / 4),
          o = this.node.parent.convertToNodeSpaceAR(o);
          for (var n = 0; n < s.GameModel._ins.rowCount; n++) for (var r = 0; r < s.GameModel._ins.colCount; r++) if (o.x > t.latticeArr[n][r].lattice.x - t.lattice_width / 2 && o.x <= t.latticeArr[n][r].lattice.x + t.lattice_width / 2 && o.y > t.latticeArr[n][r].lattice.y - t.lattice_height / 2 && o.y <= t.latticeArr[n][r].lattice.y + t.lattice_height / 2) var i = n,
          a = r;
          return {
            row: i,
            col: a
          }
        },
        t.prototype.latticeShow_showTempLattice = function (e) {
          var t = s.GameModel._ins.mainGame;
          if (e.row > 1) return s.GameModel._ins.mainGame.flower_temp.opacity = 0,
          void s.GameModel._ins.mainGame.flower_temp.setPosition(cc.v2(0, 0));
          t.flower_temp.opacity = 150;
          var o = t.latticeArr[e.row][e.col].lattice,
          n = cc.v2(o.x, o.y - t.lattice_height / t.lattice_offsety);
          t.flower_temp.setPosition(n)
        },
        t.prototype.handleFlower_temp = function () {
          s.GameModel._ins.mainGame.flower_temp.opacity = 0,
          this.lattice_temp = null,
          s.GameModel._ins.mainGame.flower_temp.setPosition(cc.v2(0, 0))
        },
        t.prototype.levelChange = function (e) {
          var t = this.node.getChildByName('flower'),
          o = this.node.getChildByName('flowerT'),
          n = t.getComponent(sp.Skeleton);
          if (1 == e ? (t.active = !0, o.active = !1, n.setSkin('one')) : 2 == e ? (t.active = !1, o.active = !0) : 3 == e ? (t.active = !0, o.active = !1, n.setSkin('four')) : 4 == e ? (t.active = !0, o.active = !1, n.setSkin('eight')) : 5 == e ? (t.active = !0, o.active = !1, n.setSkin('sixteen')) : e > 5 && (t.active = !0, o.active = !1, n.setSkin('more')), !this.lattice_tempFlags) {
            1 == e ? this.label_bulletCount.opacity = 0 : 2 == e ? this.label_bulletCount.opacity = 0 : 3 == e ? this.label_bulletCount.opacity = 0 : 4 == e ? this.label_bulletCount.opacity = 0 : 5 == e ? this.label_bulletCount.opacity = 255 : e > 5 && (this.label_bulletCount.opacity = 255);
            var r = Math.pow(2, this.level - 1);
            r < 100 ? (this.label_bulletCount.setPosition(cc.v2(114.928, - 2.4)), this.label_bulletCount.getComponent(cc.Label).fontSize = 80) : r >= 100 && r < 1000 ? (this.label_bulletCount.setPosition(cc.v2(106.224, - 2.4)), this.label_bulletCount.getComponent(cc.Label).fontSize = 70) : r >= 1000 && r < 10000 ? (this.label_bulletCount.setPosition(cc.v2(97.478, - 2.4)), this.label_bulletCount.getComponent(cc.Label).fontSize = 45) : r >= 10000 && r < 100000 && (this.label_bulletCount.setPosition(cc.v2(95.512, - 2.4)), this.label_bulletCount.getComponent(cc.Label).fontSize = 55),
            this.label_bulletCount.getComponent(cc.Label).string = r.toString()
          }
        },
        i([d(cc.Label)], t.prototype, 'label', void 0),
        i([d], t.prototype, 'text', void 0),
        i([d({
          displayName: '游戏分数',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'label_bulletCount', void 0),
        i([p], t)
      }(cc.Component);
      o.default = u,
      cc._RF.pop()
    },
    {
      '../common/Tools': 'Tools',
      '../ctrl/GameCtrl': 'GameCtrl',
      '../model/GameModel': 'GameModel'
    }
  ],
  GameCtrl: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'a1d7eXYRpRDM7lzYxYf5Tki', 'GameCtrl'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.GameState = o.GameCtrl = void 0;
      var n,
      r = e('../manager/PoolManager'),
      i = e('../model/GameModel'),
      a = function () {
        function e() {
          this.boolTouch = !1
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e.prototype.initGame = function () {
          this.gameState = n.Defualt,
          i.GameModel._ins.gameScore = 0,
          this.boolTouch = !1
        },
        e.prototype.overGame = function () {
          this.gameState = n.Over,
          this.boolTouch = !1,
          r.PoolManager.clearAllPool()
        },
        e._instance = new e,
        e
      }();
      o.GameCtrl = a,
      function (e) {
        e[e.Defualt = 0] = 'Defualt',
        e[e.Start = 1] = 'Start',
        e[e.Pause = 2] = 'Pause',
        e[e.Over = 3] = 'Over'
      }(n = o.GameState || (o.GameState = {
      })),
      cc._RF.pop()
    },
    {
      '../manager/PoolManager': 'PoolManager',
      '../model/GameModel': 'GameModel'
    }
  ],
  GameModel: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'a8f362i/MJKRKQHQCpCjKll', 'GameModel'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.GameModel = void 0;
      var n = function () {
        function e() {
          this.mianScene = 'MainGame',
          this.mainGame = null,
          this.gameScore = 1,
          this.standScore = 80,
          this.gameMaxScore = 200,
          this.rowCount = 8,
          this.colCount = 5,
          this.corpseMovingTime = 0.5,
          this.setSeed_standardTime = 2,
          this.gameMode = 1
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e._instance = new e,
        e
      }();
      o.GameModel = n,
      cc._RF.pop()
    },
    {
    }
  ],
  InitGame: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '11d57xkx8xC/bpnzMOQ9DT5', 'InitGame');
      var n,
      r = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: [
          ]
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        }
        || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }) (e, t)
      }, function (e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      i = this && this.__decorate || function (e, t, o, n) {
        var r,
        i = arguments.length,
        a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
         else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
        return i > 3 && a && Object.defineProperty(t, o, a),
        a
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      });
      var a = e('../common/weiSanTools'),
      c = e('../manager/PlatformManager'),
      s = cc._decorator,
      l = s.ccclass,
      p = s.property,
      d = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.resNodeArr = [
          ],
          t.rType = c.releaseType.test_TEST,
          t
        }
        return r(t, e),
        t.prototype.onLoad = function () {
          c.PlatformManager.releaseType = this.rType,
          c.PlatformManager.initPlatform(),
          this.initResNode(),
          this.initScreen(),
          a.weiSan.initLog()
        },
        t.prototype.initResNode = function () {
          for (var e = 0; e < this.resNodeArr.length; e++) {
            var t = cc.instantiate(this.resNodeArr[e]);
            this.node.addChild(t)
          }
        },
        t.prototype.initScreen = function () {
          a.weiSan.log('系统OS: ' + cc.sys.os);
          var e = cc.find('Canvas').getComponent(cc.Canvas);
          cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS ? (e.fitWidth = !0, e.fitHeight = !1) : (e.fitWidth = !0, e.fitHeight = !0)
        },
        i([p([cc.Prefab])], t.prototype, 'resNodeArr', void 0),
        i([p({
          type: cc.Enum(c.releaseType)
        })], t.prototype, 'rType', void 0),
        i([l], t)
      }(cc.Component);
      o.default = d,
      cc._RF.pop()
    },
    {
      '../common/weiSanTools': 'weiSanTools',
      '../manager/PlatformManager': 'PlatformManager'
    }
  ],
  LoadTools: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'b96adtj6ztJp5Q4tD5LbQij', 'LoadTools'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.LoadTools = void 0;
      var n = e('./Tools'),
      r = e('./weiSanTools'),
      i = function () {
        function e() {
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e.prototype.loadScene = function (e, t, o) {
          void 0 === o && (o = !0),
          o && n.Tools.clearResDic(),
          cc.director.preloadScene(e, function () {
            cc.director.loadScene(e, t)
          })
        },
        e.prototype.loadResPrefab = function (e, t, o, n, r) {
          void 0 === r && (r = 0),
          this.loadResAny(e, cc.Prefab, function (e) {
            var i = cc.instantiate(e);
            o && o.addChild(i, r),
            n && (i.position = cc.v3(n.x, n.y, 0)),
            null != t && t(i)
          })
        },
        e.prototype.loadResSpriteFrame = function (e, t, o, n, i, a) {
          void 0 === i && (i = 0),
          cc.loader.loadRes(e, cc.SpriteFrame, function (e, c) {
            e ? r.weiSan.error(e) : (t.getComponent(cc.Sprite).spriteFrame = c, o && o.addChild(t, i), n && (t.position = cc.v3(n.x, n.y, 0)), null != a && a(t))
          })
        },
        e.prototype.loadResAny = function (e, t, o) {
          cc.loader.loadRes(e, t, function (e, t) {
            e ? r.weiSan.error(e) : null != o && o(t)
          })
        },
        e._instance = new e,
        e
      }();
      o.LoadTools = i,
      cc._RF.pop()
    },
    {
      './Tools': 'Tools',
      './weiSanTools': 'weiSanTools'
    }
  ],
  MainGame: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'ef932zNAq1A1IMD8IZjy4f7', 'MainGame');
      var n,
      r = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: [
          ]
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        }
        || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }) (e, t)
      }, function (e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      i = this && this.__decorate || function (e, t, o, n) {
        var r,
        i = arguments.length,
        a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
         else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
        return i > 3 && a && Object.defineProperty(t, o, a),
        a
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      });
      var a = e('../common/Tools'),
      c = e('../common/weiSanTools'),
      s = e('../ctrl/GameCtrl'),
      l = e('../manager/EventManager'),
      p = e('../manager/UIManager'),
      d = e('../model/GameModel'),
      u = e('../manager/PlatformManager'),
      h = cc._decorator,
      m = h.ccclass,
      f = h.property,
      g = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.latticeNode = null,
          t.laceNode = null,
          t.laceFlowerNode = null,
          t.topBorder = null,
          t.leftBorder = null,
          t.rightBorder = null,
          t.basket = null,
          t.corpseNode = null,
          t.flowerNode = null,
          t.seedNode = null,
          t.effectNode = null,
          t.bulletNode = null,
          t.guideNode = null,
          t.circleNode = null,
          t.label_gameScore = null,
          t.flower_temp = null,
          t.canTouch = !1,
          t.gameScore = 0,
          t.count_setCorpse = 0,
          t.setSeedNum = 1,
          t.getSeedFlowerNum = 0,
          t.comeOnNum = 0,
          t.basket_flower = null,
          t.swingTime = 2666,
          t.guideFlags = !1,
          t.guideMoveFlags = !1,
          t.lattice_offsety = 3,
          t.latticeArr = [
          ],
          t.lattice_width = null,
          t.lattice_height = null,
          t.setOpacity_i = 0,
          t.seedArr = [
          ],
          t.newSeedCol = null,
          t.corpseArr = [
          ],
          t.zIndex_corpse = 999,
          t.newCorpseCol = null,
          t.corpse_lastIndex = 0,
          t.corpse_lastCol = 0,
          t
        }
        return r(t, e),
        t.prototype.onLoad = function () {
          this.gameWidth = cc.view.getVisibleSize().width,
          this.gameHeight = cc.view.getVisibleSize().height,
          d.GameModel._ins.mainGame = this,
          this.addTouchEvents(),
          this.addInitListener(),
          this.ready()
        },
        t.prototype.ready = function () {
          if (u.PlatformManager.getStorage('playNum')) {
            var e = u.PlatformManager.getStorage('playNum');
            e < 2 && (this.guideFlags = !0, this.guideMoveFlags = !0),
            u.PlatformManager.setStorage('playNum', e + 1)
          } else u.PlatformManager.setStorage('playNum', 1),
          this.guideFlags = !0,
          this.guideMoveFlags = !0;
          var t = cc.director.getCollisionManager();
          t.enabled = !0,
          t.enabledDrawBoundingBox = !0,
          this.flower_temp = a.Tools.newPrefab('flower', this.flowerNode, cc.v2(0, 0), - 1, function () {
          }),
          this.flower_temp.getComponent('Flower').label_bulletCount.destroy(),
          this.flower_temp.getComponent('Flower').lattice_tempFlags = !0,
          this.flower_temp.opacity = 0,
          this.setMap(),
          this.setFlower(1),
          this.setCorpse(),
          this.ctrlMoving(),
          this.scheduleOnce(function () {
            this.canTouch = !0
          }, d.GameModel._ins.corpseMovingTime),
          this.label_gameScore.node.setPosition(cc.v2(this.gameWidth / 2, - this.gameHeight / 2 * 0.9)),
          this.label_gameScore.string = this.gameScore.toString(),
          this.guideAct()
        },
        t.prototype.guideAct = function () {
          var e = this;
          if (this.guideFlags) {
            var t = this.guideNode.getChildByName('up'),
            o = this.guideNode.getChildByName('under');
            this.guideNode.setPosition(cc.v2(this.basket.x, this.basket.y + this.lattice_height / 2));
            var n = this.latticeArr[0][2].lattice.position;
            this.circleNode.setPosition(n);
            var r = cc.v2(n);
            cc.tween(this.circleNode).to(0.01, {
              scale: 0
            }).to(0.01, {
              opacity: 255
            }).to(1, {
              opacity: 0,
              scale: 2
            }).delay(0.1).to(0.01, {
              scale: 0
            }).to(0.01, {
              opacity: 255
            }).to(1, {
              opacity: 0,
              scale: 2
            }).delay(0.1).start(),
            cc.tween(this.guideNode).to(0.01, {
              opacity: 255
            }).delay(0.3).call(function () {
              t.opacity = 0,
              o.opacity = 255
            }).delay(0.2).to(1, {
              position: r
            }).delay(0.3).call(function () {
              t.opacity = 255,
              o.opacity = 0
            }).delay(0.2).to(0.01, {
              opacity: 0
            }).delay(1).call(function () {
              e.guideAct()
            }).start()
          }
        },
        t.prototype.guideMoveAct = function () {
          var e = this;
          if (this.guideMoveFlags) {
            var t = this.guideNode.getChildByName('up'),
            o = this.guideNode.getChildByName('under');
            console.log(this.flowerNode.childrenCount),
            this.guideNode.setPosition(cc.v2(this.flowerNode.children[1].position));
            var n = this.latticeArr[0][3].lattice.position;
            this.circleNode.setPosition(n);
            var r = cc.v2(n);
            cc.tween(this.circleNode).to(0.01, {
              scale: 0
            }).to(0.01, {
              opacity: 255
            }).to(1, {
              opacity: 0,
              scale: 2
            }).delay(0.1).to(0.01, {
              scale: 0
            }).to(0.01, {
              opacity: 255
            }).to(1, {
              opacity: 0,
              scale: 2
            }).delay(0.1).start(),
            cc.tween(this.guideNode).to(0.01, {
              opacity: 255
            }).delay(0.3).call(function () {
              t.opacity = 0,
              o.opacity = 255
            }).delay(0.2).to(1, {
              position: r
            }).delay(0.3).call(function () {
              t.opacity = 255,
              o.opacity = 0
            }).delay(0.2).to(0.01, {
              opacity: 0
            }).delay(1).call(function () {
              e.guideMoveAct()
            }).start()
          }
        },
        t.prototype.setMap = function () {
          var e = cc.v2(0, - this.gameHeight / 2 + this.basket.height / 2);
          this.basket.setPosition(e),
          this.lattice_width = 0.9 * this.gameWidth / d.GameModel._ins.colCount,
          this.lattice_height = this.gameHeight / (d.GameModel._ins.rowCount + 1);
          for (var t = cc.v2(2 * - this.lattice_width, this.basket.y + this.lattice_height), o = 0; o < d.GameModel._ins.rowCount; o++) {
            for (var n = [
            ], r = 0; r < d.GameModel._ins.colCount; r++) {
              var i = cc.v2(t.x + r * this.lattice_width, t.y + o * this.lattice_height),
              c = a.Tools.newPrefab('lattice', this.latticeNode, i, 1, function () {
              });
              if (o < 2) {
                var s = a.Tools.random(1, 3);
                a.Tools.setSpriteFrame(c, 'latticeGrassSpr' + s)
              } else s = a.Tools.random(1, 4),
              a.Tools.setSpriteFrame(c, 'latticeSpr' + s);
              c.width = this.lattice_width,
              c.height = this.lattice_height;
              var l = {
                lattice: c,
                flower: void 0
              };
              n.push(l)
            }
            this.latticeArr.push(n)
          }
          var p = this.latticeArr[1][2].lattice.x,
          u = this.latticeArr[1][2].lattice.y + this.lattice_height / 2,
          h = cc.v2(p, u),
          m = this.latticeArr[0][2].lattice.y + this.lattice_height / 2,
          f = cc.v2(p, m);
          this.laceNode.setPosition(h),
          this.laceFlowerNode.setPosition(f),
          this.leftBorder.width = 0.1 * this.gameWidth,
          this.leftBorder.height = this.gameHeight,
          this.rightBorder.width = 0.17 * this.gameWidth,
          this.rightBorder.height = this.gameHeight,
          this.topBorder.width = 0.15 * this.gameWidth,
          this.topBorder.height = this.gameWidth,
          this.leftBorder.setPosition(cc.v2( - this.gameWidth / 2, this.gameHeight / 2)),
          this.rightBorder.setPosition(cc.v2(this.gameWidth / 2, this.gameHeight / 2)),
          this.topBorder.setPosition(cc.v2(this.gameWidth / 2, this.gameHeight / 2))
        },
        t.prototype.setFlower = function (e) {
          var t = a.Tools.newPrefab('flower', this.flowerNode, cc.v2(this.basket), 1, function () {
          });
          t.getComponent('Flower').level = e,
          t.getComponent('Flower').levelChange(e),
          this.basket_flower = t,
          t.setScale(0),
          t.runAction(cc.scaleTo(0.3, 1, 1).easing(cc.easeCubicActionInOut()))
        },
        t.prototype.setLatticeOpacity = function (e, t) {
          if (this.setOpacity_i != d.GameModel._ins.rowCount) {
            for (var o = 0; o < d.GameModel._ins.colCount; o++) o != e && o != t || (this.latticeArr[this.setOpacity_i][o].lattice.opacity = 255);
            this.setOpacity_i++,
            this.scheduleOnce(function () {
              this.setLatticeOpacity(e, t)
            }, 0.2)
          } else this.setOpacity_i = 0
        },
        t.prototype.setSeed = function (e) {
          var t = Math.floor(Math.random() * (d.GameModel._ins.colCount - 0.01));
          t == this.newCorpseCol && (0 == t ? t += 1 : t -= 1),
          this.guideFlags && (t = 3);
          var o = this.latticeArr[d.GameModel._ins.rowCount - 1][t].lattice;
          e = cc.v2(o.x, o.y + this.lattice_height);
          var n = a.Tools.newPrefab('seed', this.seedNode, e, - 1, function () {
          });
          n.getComponent('Seed').seed_col = t,
          n.getComponent('Seed').seed_row = d.GameModel._ins.rowCount,
          this.seedArr.push(n),
          n.getComponent('Seed').move()
        },
        t.prototype.setCorpse = function () {
          var e = this;
          this.count_setCorpse++;
          var t = Math.floor(Math.random() * (d.GameModel._ins.colCount - 0.01));
          if (2 == this.corpse_lastIndex) {
            var o = [
              0,
              1,
              2,
              3,
              4
            ];
            o.splice(this.corpse_lastCol, 1),
            o.splice(this.corpse_lastCol - 1, 1),
            t = o[Math.floor(2.99 * Math.random())]
          }
          this.guideFlags && (t = 2),
          this.newCorpseCol = t;
          var n = this.latticeArr[d.GameModel._ins.rowCount - 1][t].lattice,
          r = cc.v2(n.x, n.y + this.lattice_height - this.lattice_height / this.lattice_offsety),
          i = a.Tools.newPrefab('corpse', this.corpseNode, r, this.zIndex_corpse, function (o) {
            var i = Math.floor(1.99 * Math.random());
            e.count_setCorpse % 10 == 0 && (i = 2),
            o.getComponent('Corpse').skinIndex = i,
            2 == i && (0 == t && (t = 1), n = e.latticeArr[d.GameModel._ins.rowCount - 1][t].lattice, r = cc.v2(n.x - e.lattice_width / 2, n.y + e.lattice_height - e.lattice_height / 4), o.setPosition(r)),
            e.corpse_lastIndex = i,
            e.corpse_lastCol = t,
            o.getComponent('Corpse').manualInitialization()
          });
          this.zIndex_corpse--,
          i.getComponent('Corpse').corpse_col = t,
          i.getComponent('Corpse').corpse_row = d.GameModel._ins.rowCount,
          this.corpseArr.push(i)
        },
        t.prototype.ctrlMoving = function () {
          for (var e = this, t = 0; t < this.corpseArr.length; t++) if (2 == this.corpseArr[t].getComponent('Corpse').corpse_row) return void cc.tween(this.corpseArr[t].getChildByName('corpse')).to(0.1, {
            color: new cc.Color(255, 0, 0, 255)
          }).to(0.1, {
            color: new cc.Color(255, 255, 255, 255)
          }).to(0.1, {
            color: new cc.Color(255, 0, 0, 255)
          }).to(0.1, {
            color: new cc.Color(255, 255, 255, 255)
          }).to(0.1, {
            color: new cc.Color(255, 0, 0, 255)
          }).call(function () {
            d.GameModel._ins.gameScore = e.gameScore,
            e.gameOver()
          }).start();
          for (t = 0; t < this.corpseArr.length; t++) this.corpseArr[t].getComponent('Corpse').move();
          for (var o = 0; o < this.seedArr.length; o++) this.seedArr[o].getComponent('Seed').move()
        },
        t.prototype.gameOver = function () {
          for (var e = [
            this.basket,
            this.corpseNode,
            this.flowerNode,
            this.seedNode,
            this.effectNode,
            this.label_gameScore.node
          ], t = 0; t < e.length; t++) cc.tween(e[t]).to(0.8, {
            opacity: 0
          }).start();
          this.gameEnd(),
          a.Tools.playAudio('gameOver', 1)
        },
        t.prototype.start = function () {
          this.initGame()
        },
        t.prototype.update = function () {
          s.GameCtrl._ins.gameState,
          s.GameState.Start
        },
        t.prototype.addTouchEvents = function () {
          cc.macro.ENABLE_MULTI_TOUCH = !1,
          this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartBack, this),
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveBack, this),
          this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndBack, this),
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndBack, this)
        },
        t.prototype.touchStartBack = function (e) {
          s.GameCtrl._ins.boolTouch && (this.toushStartPos = a.Tools.getToNodePosForWorld(e.getLocation(), this.node))
        },
        t.prototype.touchMoveBack = function (e) {
          s.GameCtrl._ins.boolTouch && e.getLocationX()
        },
        t.prototype.touchEndBack = function () {
          s.GameCtrl._ins.boolTouch
        },
        t.prototype.initGame = function () {
          s.GameCtrl._ins.initGame(),
          s.GameCtrl._ins.boolTouch = !0
        },
        t.prototype.startGame = function () {
        },
        t.prototype.gameEnd = function () {
          s.GameCtrl._ins.gameState != s.GameState.Over && (s.GameCtrl._ins.overGame(), c.weiSan.log('游戏结束'), this.scheduleOnce(function () {
            p.UIManager.OpenUI('OverUI')
          }, 0.5))
        },
        t.prototype.addInitListener = function () {
          l.EventManager.addListener(l.EventData.START_GAME, this.startGame.bind(this), this.node)
        },
        t.prototype.onDestroy = function () {
          l.EventManager.removeListenerForTarget(this.node)
        },
        i([f({
          displayName: '棋盘父节点',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'latticeNode', void 0),
        i([f({
          displayName: '花边边',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'laceNode', void 0),
        i([f({
          displayName: '黄花',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'laceFlowerNode', void 0),
        i([f({
          displayName: '上边',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'topBorder', void 0),
        i([f({
          displayName: '左边',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'leftBorder', void 0),
        i([f({
          displayName: '右边',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'rightBorder', void 0),
        i([f({
          displayName: '花盆',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'basket', void 0),
        i([f({
          displayName: '僵尸父节点',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'corpseNode', void 0),
        i([f({
          displayName: '花朵父节点',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'flowerNode', void 0),
        i([f({
          displayName: '种子父节点',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'seedNode', void 0),
        i([f({
          displayName: '效果父节点',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'effectNode', void 0),
        i([f({
          displayName: '子弹节点',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'bulletNode', void 0),
        i([f({
          displayName: '引导节点',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'guideNode', void 0),
        i([f({
          displayName: '圈节点',
          tooltip: '节点',
          type: cc.Node
        })], t.prototype, 'circleNode', void 0),
        i([f({
          displayName: '游戏分数',
          tooltip: '文字',
          type: cc.Label
        })], t.prototype, 'label_gameScore', void 0),
        i([m], t)
      }(cc.Component);
      o.default = g,
      cc._RF.pop()
    },
    {
      '../common/Tools': 'Tools',
      '../common/weiSanTools': 'weiSanTools',
      '../ctrl/GameCtrl': 'GameCtrl',
      '../manager/EventManager': 'EventManager',
      '../manager/PlatformManager': 'PlatformManager',
      '../manager/UIManager': 'UIManager',
      '../model/GameModel': 'GameModel'
    }
  ],
  NetworkManager: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '7368bvx8K9EabyOcKON6XK5', 'NetworkManager'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.msgHttpUrl = o.NetworkManager = void 0;
      var n = e('../common/weiSanTools'),
      r = e('./PlatformManager'),
      i = function () {
        function e() {
        }
        return e.initNetwork = function () {
          r.PlatformManager.releaseType == r.releaseType.h5_common || r.PlatformManager.releaseType == r.releaseType.h5_weiSan ? this.initNet_H5() : r.PlatformManager.releaseType == r.releaseType.test_TEST && (this.moreGameUrl = 'http://m.wesane.com/', n.weiSan.log('发送:---游戏加载成功!'))
        },
        e.initNet_H5 = function () {
          this.getHttpGameId(),
          this.sendLoadGame()
        },
        e.getHttpGameId = function () {
          var e = document.URL,
          t = 0;
          if (r.PlatformManager.releaseType == r.releaseType.h5_common) {
            var i = window.location.href,
            a = i.substring(0, i.lastIndexOf('//') + 2),
            c = window.location.host;
            o.msgHttpUrl.gamePv_commonH5 = a + c + '/Service/GamePv/index',
            o.msgHttpUrl.score_commonH5 = a + c + '/Service/Score/index';
            var s = e.lastIndexOf('/'),
            l = e.substring(0, s);
            s = l.lastIndexOf('/'),
            t = parseInt(l.substring(s + 1, l.length));
            var p = i.substring(i.lastIndexOf('//') + 4, i.lastIndexOf('com') + 3);
            - 1 == i.search('/game/') ? this.moreGameUrl = a + c : this.moreGameUrl = a + p
          } else {
            var d = e.substring(e.lastIndexOf('/game/') + 1, e.length).split('/');
            d.length >= 2 && (t = parseInt(d[1])),
            this.moreGameUrl = 'http://m.wesane.com/'
          }
          this.gameHttpId = t,
          n.weiSan.log('gameId:', t)
        },
        e.sendLoadGame = function () {
          r.PlatformManager.releaseType == r.releaseType.h5_weiSan ? this.sendMsg(o.msgHttpUrl.gamePv_weiSanH5, 'gameID=' + this.gameHttpId.toString(), this.loadGameBack) : r.PlatformManager.releaseType == r.releaseType.h5_common && this.sendMsg(o.msgHttpUrl.gamePv_commonH5, 'gameId=' + this.gameHttpId.toString(), this.loadGameBack)
        },
        e.loadGameBack = function () {
          n.weiSan.log('gamePv加载成功')
        },
        e.sendGameScore = function (e, t) {
          r.PlatformManager.releaseType == r.releaseType.h5_weiSan ? this.sendMsg(o.msgHttpUrl.score_weiSanH5, 'gameScore=' + e + '&gameId=' + this.gameHttpId + '&gameType=' + t, this.sendScoreBack) : r.PlatformManager.releaseType == r.releaseType.h5_common && this.sendMsg(o.msgHttpUrl.score_commonH5, 'gameScore=' + e + '&gameId=' + this.gameHttpId + '&gameType=' + t, this.sendScoreBack)
        },
        e.sendScoreBack = function (e) {
          n.weiSan.log('---提交分数成功!' + e),
          null != e.currentTarget.response && '' != e.currentTarget.response && JSON.parse(e.currentTarget.response)
        },
        e.sendMsg = function (e, t, o) {
          var n = cc.loader.getXMLHttpRequest();
          n.onreadystatechange = o,
          n.open('POST', e),
          n.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
          n.send(t)
        },
        e.gameHttpId = 0,
        e
      }();
      o.NetworkManager = i,
      window.NetworkManager = i,
      o.msgHttpUrl = {
        gamePv_weiSanH5: 'http://www.wesane.com/admin.php/Activityshow/gamelogo',
        score_weiSanH5: 'http://www.wesane.com/admin.php/Gamescore/saveGamescore',
        gamePv_commonH5: '',
        score_commonH5: ''
      },
      cc._RF.pop()
    },
    {
      '../common/weiSanTools': 'weiSanTools',
      './PlatformManager': 'PlatformManager'
    }
  ],
  OtherModel: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'a7d991QTY1Bt7JTY7l9t4I2', 'OtherModel'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.interTag = o.groupAll = o.zIndexAll = void 0,
      function (e) {
        e[e.player_Z = 10] = 'player_Z',
        e[e.bg_Z = 1] = 'bg_Z'
      }(o.zIndexAll || (o.zIndexAll = {
      })),
      function (e) {
        e[e.default = 0] = 'default',
        e[e.UI = 2] = 'UI'
      }(o.groupAll || (o.groupAll = {
      })),
      function (e) {
        e[e.enemy_Tag = 1] = 'enemy_Tag',
        e[e.player_Tag = 3] = 'player_Tag'
      }(o.interTag || (o.interTag = {
      })),
      cc._RF.pop()
    },
    {
    }
  ],
  OverUI: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'eef84sRpGtEYKFhq3Zv4xGF', 'OverUI');
      var n,
      r = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: [
          ]
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        }
        || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }) (e, t)
      }, function (e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      i = this && this.__decorate || function (e, t, o, n) {
        var r,
        i = arguments.length,
        a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
         else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
        return i > 3 && a && Object.defineProperty(t, o, a),
        a
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      });
      var a = e('../ads/AdManager'),
      c = e('../common/Tools'),
      s = e('../common/weiSanTools'),
      l = e('../manager/NetworkManager'),
      p = e('../manager/PlatformManager'),
      d = e('../manager/UIManager'),
      u = e('../model/GameModel'),
      h = e('../model/WordsModel'),
      m = cc._decorator,
      f = m.ccclass,
      g = m.property,
      _ = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.bgSpr = null,
          t.viewNode = null,
          t.scoreLab = null,
          t.maxScoreLab = null,
          t.infoText = null,
          t.moreBtn = null,
          t.aginBtn = null,
          t.isClick = !1,
          t
        }
        return r(t, e),
        t.prototype.onLoad = function () {
          this.bgSpr.opacity = 0,
          this.viewNode.y += 1000,
          this.aginBtn.scale = 0,
          this.moreBtn.x -= 200,
          this.initShowInfo(),
          this.addBtnEvent(),
          l.NetworkManager.sendGameScore(u.GameModel._ins.gameScore, 1),
          a.AdManager.showIntersAd()
        },
        t.prototype.initShowInfo = function () {
          this.scoreLab.string = u.GameModel._ins.gameScore.toString();
          var e = this.getBeatItScore(u.GameModel._ins.gameScore, u.GameModel._ins.standScore, u.GameModel._ins.gameMaxScore);
          this.infoText.string = this.getBeatItStr(u.GameModel._ins.gameScore, e, !0);
          var t = c.Tools.getStorage('dajinagshi');
          (!t || t <= u.GameModel._ins.gameScore) && (t = u.GameModel._ins.gameScore, c.Tools.setStorage('dajinagshi', u.GameModel._ins.gameScore)),
          this.maxScoreLab.string = t.toString(),
          p.PlatformManager.osType == p.osType.h5 && ('CN' == c.Tools.getLanguageType() || 'CHT' == c.Tools.getLanguageType() ? (console.log(this.getBeatItStr(u.GameModel._ins.gameScore, e, !1)), document.title = h.WordsModel.getStrForLanguage('overTitle_1', 'CN') + '<' + h.WordsModel.getStrForLanguage('gameName', 'CN') + '>' + h.WordsModel.getStrForLanguage('overTitle_2', 'CN') + this.getBeatItStr(u.GameModel._ins.gameScore, e, !1)) : document.title = h.WordsModel.getStrForLanguage('overTitle_1', 'EN') + '<' + h.WordsModel.getStrForLanguage('gameName', 'EN') + '>' + h.WordsModel.getStrForLanguage('overTitle_2', 'EN') + this.getBeatItStr(u.GameModel._ins.gameScore, e, !1))
        },
        t.prototype.addBtnEvent = function () {
          var e = this;
          this.aginBtn.on('click', function () {
            e.isClick && e.aginGame()
          }),
          this.moreBtn.on('click', function () {
            e.isClick && (p.PlatformManager.releaseType != p.releaseType.test_TEST ? window.location.href = l.NetworkManager.moreGameUrl : s.weiSan.log('测试模式 更多游戏Url: ' + l.NetworkManager.moreGameUrl))
          })
        },
        t.prototype.aginGame = function () {
          this.isClick = !1,
          d.UIManager.CloseUI('OverUI'),
          this.scheduleOnce(function () {
            cc.director.preloadScene(u.GameModel._ins.mianScene, function () {
              cc.director.loadScene(u.GameModel._ins.mianScene)
            })
          }, 0.2)
        },
        t.prototype.getBeatItStr = function (e, t, o) {
          void 0 === o && (o = !0);
          var n = h.WordsModel.getStrForLanguage('overScoreInfo_0');
          return e > 0 && (n = o ? h.WordsModel.getStrForLanguage('overScoreInfo_1') + ' <color=#00ff00><size=60>' + t + '%</c></size> ' + h.WordsModel.getStrForLanguage('overScoreInfo_2') : h.WordsModel.getStrForLanguage('overScoreInfo_1') + t + '%' + h.WordsModel.getStrForLanguage('overScoreInfo_2')),
          n
        },
        t.prototype.getBeatItScore = function (e, t, o) {
          if (e >= o) return 100;
          if (e <= t) {
            var n = e / t * 80 + c.Tools.random( - 3, 3);
            return Math.max(Math.floor(n), 5)
          }
          return n = 80 + (e - t) / (o - t) * 20 + c.Tools.random( - 3, 3),
          Math.min(Math.floor(n), 99)
        },
        t.prototype.openUI = function () {
          var e = this;
          this.bgSpr.runAction(cc.fadeTo(0.3, 100)),
          this.viewNode.runAction(cc.sequence(cc.moveBy(0.3, cc.v2(0, - 1000)).easing(cc.easeBackOut()), cc.callFunc(function () {
            e.isClick = !0,
            e.aginBtn.runAction(cc.scaleTo(0.3, 1).easing(cc.easeBackOut())),
            e.moreBtn.runAction(cc.moveBy(0.3, cc.v2(200, 0)).easing(cc.easeBackOut()))
          })))
        },
        t.prototype.closeUI = function () {
          this.bgSpr.runAction(cc.fadeOut(0.3)),
          this.viewNode.runAction(cc.moveBy(0.3, cc.v2(0, 1000)).easing(cc.easeBackIn())),
          this.moreBtn.runAction(cc.moveBy(0.3, cc.v2( - 200, 0)).easing(cc.easeBackIn()))
        },
        i([g(cc.Node)], t.prototype, 'bgSpr', void 0),
        i([g(cc.Node)], t.prototype, 'viewNode', void 0),
        i([g(cc.Label)], t.prototype, 'scoreLab', void 0),
        i([g(cc.Label)], t.prototype, 'maxScoreLab', void 0),
        i([g(cc.RichText)], t.prototype, 'infoText', void 0),
        i([g(cc.Node)], t.prototype, 'moreBtn', void 0),
        i([g(cc.Node)], t.prototype, 'aginBtn', void 0),
        i([f], t)
      }(d.UIManager);
      o.default = _,
      cc._RF.pop()
    },
    {
      '../ads/AdManager': 'AdManager',
      '../common/Tools': 'Tools',
      '../common/weiSanTools': 'weiSanTools',
      '../manager/NetworkManager': 'NetworkManager',
      '../manager/PlatformManager': 'PlatformManager',
      '../manager/UIManager': 'UIManager',
      '../model/GameModel': 'GameModel',
      '../model/WordsModel': 'WordsModel'
    }
  ],
  PlatformManager: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '526f4NSDmdHDqwXmWoL2A3b', 'PlatformManager'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.osType = o.releaseType = o.PlatformManager = void 0;
      var n,
      r = e('../ads/AdManager'),
      i = e('./NetworkManager'),
      a = function () {
        function e() {
        }
        return e.initPlatform = function () {
          this.loadGameBool || (this.initOsType(), i.NetworkManager.initNetwork(), e.releaseType != o.releaseType.h5_weiSan && e.releaseType != o.releaseType.h5_common || ('NaN' == i.NetworkManager.gameHttpId.toString() && (e.releaseType == o.releaseType.h5_weiSan ? window.location.href = i.NetworkManager.moreGameUrl : window.location.href = 'http://www.vsane.com/'), loadInScene(), cc.view.enableAutoFullScreen(!1)), e.releaseType != o.releaseType.applet_ziJie && (window.AdManager = r.AdManager), this.loadGameBool = !0)
        },
        e.initOsType = function () {
          this.releaseType == o.releaseType.APP_google ? this.osType = n.android : this.releaseType == o.releaseType.APP_ios ? this.osType = n.ios : this.releaseType == o.releaseType.applet_ziJie ? this.osType = n.applet : this.osType = n.h5
        },
        e.setStorage = function (t, n, r) {
          if (void 0 === r && (r = !1), t = this.storageKey + t, e.releaseType === o.releaseType.applet_ziJie) return tt.setStorageSync(t, n);
          r && (n = JSON.stringify(n)),
          cc.sys.localStorage.setItem(t, n)
        },
        e.getStorage = function (t, n) {
          void 0 === n && (n = !1),
          t = this.storageKey + t;
          var r = null;
          return e.releaseType === o.releaseType.applet_ziJie ? r = tt.getStorageSync(t) : (r = cc.sys.localStorage.getItem(t)) && 'NaN' != r.toString() && 'null' != r.toString() ? n ? r = JSON.parse(r) : isNaN(r) || (r = parseInt(r)) : r = null,
          r
        },
        e.storageKey = 'demo_Game_',
        e.loadGameBool = !1,
        e
      }();
      o.PlatformManager = a,
      window.PlatformManager = a,
      o.releaseType = cc.Enum({
        test_TEST: 1,
        h5_weiSan: 2,
        h5_common: 3,
        applet_ziJie: 4,
        APP_google: 5,
        APP_ios: 6
      }),
      function (e) {
        e[e.h5 = 1] = 'h5',
        e[e.android = 2] = 'android',
        e[e.ios = 3] = 'ios',
        e[e.applet = 4] = 'applet'
      }(n = o.osType || (o.osType = {
      })),
      cc._RF.pop()
    },
    {
      '../ads/AdManager': 'AdManager',
      './NetworkManager': 'NetworkManager'
    }
  ],
  PoolManager: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '6d71a4IRmhHHqQ3Zkrz3M5U', 'PoolManager'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.PoolManager = void 0;
      var n = e('../common/Tools'),
      r = e('../common/weiSanTools'),
      i = function () {
        function e() {
        }
        return e.addPoolObj = function (e) {
          null == this.PoolDic[e.name] && (this.PoolDic[e.name] = new cc.NodePool(e.name)),
          this.PoolDic[e.name].put(e)
        },
        e.getPoolObj = function (e) {
          return null == this.PoolDic[e] ? (r.weiSan.warn('没有添加对象池：', e), this.PoolDic[e] = new cc.NodePool(e), n.Tools.newPrefab(e)) : this.PoolDic[e].size() > 1 ? this.PoolDic[e].get() : n.Tools.newPrefab(e)
        },
        e.clearPool = function (e) {
          if (null != this.PoolDic[e]) return this.PoolDic[e].clear();
          r.weiSan.warn('没有添加对象池：', e)
        },
        e.clearAllPool = function () {
          for (var e in this.PoolDic) Object.prototype.hasOwnProperty.call(this.PoolDic, e) && this.clearPool(e)
        },
        e.PoolDic = new Map,
        e
      }();
      o.PoolManager = i,
      cc._RF.pop()
    },
    {
      '../common/Tools': 'Tools',
      '../common/weiSanTools': 'weiSanTools'
    }
  ],
  ResArr: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '56af2D00XFDX6lyw8ZO/zKX', 'ResArr');
      var n,
      r = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: [
          ]
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        }
        || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }) (e, t)
      }, function (e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      i = this && this.__decorate || function (e, t, o, n) {
        var r,
        i = arguments.length,
        a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
         else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
        return i > 3 && a && Object.defineProperty(t, o, a),
        a
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      });
      var a = e('../common/Tools'),
      c = cc._decorator,
      s = c.ccclass,
      l = c.property,
      p = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.SpriteFrameArr = [
          ],
          t.PrefabArr = [
          ],
          t.audiosArr = [
          ],
          t
        }
        return r(t, e),
        t.prototype.onLoad = function () {
          this.addAudio(),
          this.addPrefabs(),
          this.addSpriteFrame()
        },
        t.prototype.addAudio = function () {
          for (var e = 0; e < this.audiosArr.length; e++) if (this.audiosArr[e]) {
            var t = this.audiosArr[e];
            a.Tools.AudioClipDic.set(t.name, t)
          }
        },
        t.prototype.addSpriteFrame = function () {
          for (var e = 0; e < this.SpriteFrameArr.length; e++) if (this.SpriteFrameArr[e]) {
            var t = this.SpriteFrameArr[e];
            a.Tools.SpriteFrameDic.set(t.name, t)
          }
        },
        t.prototype.addPrefabs = function () {
          for (var e = 0; e < this.PrefabArr.length; e++) if (this.PrefabArr[e]) {
            var t = this.PrefabArr[e];
            a.Tools.PrefabDic.set(t.data.name, t)
          }
        },
        i([l([cc.SpriteFrame])], t.prototype, 'SpriteFrameArr', void 0),
        i([l([cc.Prefab])], t.prototype, 'PrefabArr', void 0),
        i([l([cc.AudioClip])], t.prototype, 'audiosArr', void 0),
        i([s], t)
      }(cc.Component);
      o.default = p,
      cc._RF.pop()
    },
    {
      '../common/Tools': 'Tools'
    }
  ],
  Seed: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'd5532AnA4ZLkbjdOLLM90rT', 'Seed');
      var n,
      r = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: [
          ]
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        }
        || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }) (e, t)
      }, function (e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      i = this && this.__decorate || function (e, t, o, n) {
        var r,
        i = arguments.length,
        a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
         else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
        return i > 3 && a && Object.defineProperty(t, o, a),
        a
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      });
      var a = e('../common/Tools'),
      c = e('../ctrl/GameCtrl'),
      s = e('../model/GameModel'),
      l = cc._decorator,
      p = l.ccclass,
      d = l.property,
      u = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.label = null,
          t.text = 'hello',
          t.level = 1,
          t.seed_row = null,
          t.seed_col = null,
          t.onceFlags = !1,
          t
        }
        return r(t, e),
        t.prototype.onCollisionEnter = function (e) {
          if (2 != s.GameModel._ins.gameMode) {
            var t = s.GameModel._ins.mainGame,
            o = this.level;
            if (1 == e.tag) {
              if (this.onceFlags) return;
              this.onceFlags = !0;
              var n = s.GameModel._ins.mainGame.seedArr.indexOf(this.node);
              s.GameModel._ins.mainGame.seedArr.splice(n, 1),
              a.Tools.playAudio('biu', 1),
              e.node.destroy(),
              this.boomShow(e.node.name),
              this.node.runAction(cc.sequence(cc.spawn(cc.jumpTo(0.3, cc.v2(s.GameModel._ins.mainGame.basket), 500, 1), cc.scaleTo(0.3, 0.5, 0.5)), cc.callFunc(function () {
                var e = s.GameModel._ins.mainGame.basket_flower;
                if (e) {
                  if (o > e.getComponent('Flower').level) {
                    var n = e;
                    n.opacity = 0,
                    n.setPosition(cc.v2(1000, 1000)),
                    s.GameModel._ins.mainGame.setFlower(o),
                    console.log('高级替换低级花', s.GameModel._ins.mainGame.basket_flower)
                  }
                } else s.GameModel._ins.mainGame.setFlower(o);
                t.getSeedFlowerNum++
              }), cc.delayTime(0.01), cc.removeSelf(!0)))
            }
          }
        },
        t.prototype.onLoad = function () {
          1 != s.GameModel._ins.gameMode && this.addTouchEvents()
        },
        t.prototype.start = function () {
          s.GameModel._ins.mainGame.getSeedFlowerNum < 20 ? this.level = 1 : s.GameModel._ins.mainGame.getSeedFlowerNum < 40 ? this.level = Math.random() > 0.9 ? 3 : 2 : s.GameModel._ins.mainGame.getSeedFlowerNum < 60 ? this.level = Math.random() > 0.9 ? 4 : 3 : s.GameModel._ins.mainGame.getSeedFlowerNum < 80 ? this.level = 4 : this.level = Math.random() > 0.5 ? Math.random() > 0.5 ? 1 : 2 : Math.random() > 0.5 ? 3 : 4,
          a.Tools.setSpriteFrame(this.node, 'seed' + this.level)
        },
        t.prototype.move = function () {
          var e = this,
          t = s.GameModel._ins.mainGame;
          2 != this.seed_row ? (cc.tween(this.node).by(s.GameModel._ins.corpseMovingTime, {
            position: cc.v3(0, - t.lattice_height, 0)
          }).start(), this.seed_row--) : cc.tween(this.node).to(0.15, {
            opacity: 0
          }).to(0.15, {
            opacity: 255
          }).to(0.15, {
            opacity: 0
          }).to(0.15, {
            opacity: 255
          }).call(function () {
            var t = s.GameModel._ins.mainGame.seedArr.indexOf(e.node);
            s.GameModel._ins.mainGame.seedArr.splice(t, 1)
          }).removeSelf().start()
        },
        t.prototype.getRandomNum = function (e, t, o) {
          return o ? Math.floor(Math.random() * (t - e + 1) + e) : Math.random() * (t - e) + e
        },
        t.prototype.degreesToVectors = function (e) {
          var t = e * Math.PI / 180;
          return cc.v2(1, 0).rotate( - t)
        },
        t.prototype.boomShow = function (e) {
          var t = s.GameModel._ins.mainGame,
          o = null,
          n = null,
          r = 1;
          'bullet_one' == e ? (o = 'boom_one1', n = 'pop_one', r = 2) : 'bullet_two' == e ? (o = 'boom_two1', n = 'pop_two', r = 2) : 'bullet_four' == e ? (o = 'boom_four' + Math.ceil(1.99 * Math.random()), n = 'pop_four') : 'bullet_eight' == e ? (o = 'boom_eight' + Math.ceil(1.99 * Math.random()), n = 'pop_eight') : 'bullet_sixteen' == e ? (o = 'boom_sixteen' + Math.ceil(1.99 * Math.random()), n = 'pop_sixteen') : 'bullet_more1' == e ? (o = 'boom_more1', n = 'pop_four', r = 2) : 'bullet_more2' == e ? (o = 'boom_more2', n = 'pop_sixteen', r = 2) : 'bullet_more3' == e ? (o = 'boom_more3', n = 'pop_one', r = 2) : 'bullet_more4' == e ? (o = 'boom_more4', n = 'pop_more', r = 2) : 'bullet_more5' == e ? (o = 'boom_more5', n = 'pop_two', r = 2) : 'bullet_more6' == e && (o = 'boom_more6', n = 'pop_eight', r = 2);
          for (var i = 0; i < 8; i++) {
            'bullet_more1' != e && 'bullet_more2' != e && 'bullet_more3' != e && 'bullet_more4' != e && 'bullet_more5' != e && 'bullet_more6' != e || (o = 'boom_more' + Math.ceil(5.99 * Math.random()));
            var c = a.Tools.newPrefab('boom', t.effectNode, cc.v2(this.node), 1, function () {
            });
            a.Tools.setSpriteFrame(c, o);
            var l = this.getRandomNum(0, 360, !0),
            p = this.degreesToVectors(l),
            d = this.getRandomNum(0, 200, !0);
            c.setScale(r),
            c.angle = l,
            c.setPosition(cc.v2(this.node.position)),
            cc.tween(c).by(d / 150 / 10, {
              position: cc.v2(p.x * d, p.y * d),
              angle: 100
            }).parallel(cc.tween().by(d / 150 / 2, {
              position: cc.v3(p.x * d, p.y * d),
              angle: 100 * Math.random() + 100
            }), cc.tween().to(Math.random() * d / 150 / 2, {
              scale: 0
            })).removeSelf().start()
          }
          var u = a.Tools.newPrefab('pop', t.effectNode, cc.v2(this.node), 1, function () {
          });
          a.Tools.setSpriteFrame(u, n),
          u.setScale(0),
          cc.tween(u).parallel(cc.tween().to(0.3, {
            scale: 2
          }), cc.tween().to(0.3, {
            opacity: 0
          })).start()
        },
        t.prototype.addTouchEvents = function () {
          cc.macro.ENABLE_MULTI_TOUCH = !1,
          this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartBack, this),
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveBack, this),
          this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndBack, this)
        },
        t.prototype.touchStartBack = function () {
          if (c.GameCtrl._ins.boolTouch) {
            var e = s.GameModel._ins.mainGame.basket_flower;
            if (e) for (var t = 0; t < e.childrenCount; t++) cc.tween(e.children[t]).to(0.1, {
              color: new cc.Color(255, 0, 0, 255)
            }).to(0.1, {
              color: new cc.Color(255, 255, 255, 255)
            }).to(0.1, {
              color: new cc.Color(255, 0, 0, 255)
            }).to(0.1, {
              color: new cc.Color(255, 255, 255, 255)
            }).start();
             else {
              var o = s.GameModel._ins.mainGame.seedArr.indexOf(this.node);
              this.node.runAction(cc.sequence(cc.spawn(cc.jumpTo(0.3, cc.v2(s.GameModel._ins.mainGame.basket), 500, 1), cc.scaleTo(0.3, 0.5, 0.5)), cc.callFunc(function () {
                var e = s.GameModel._ins.mainGame.basket_flower;
                s.GameModel._ins.mainGame.seedArr.splice(o, 1),
                e || s.GameModel._ins.mainGame.setFlower(this.level)
              }), cc.delayTime(0.01), cc.removeSelf(!0)))
            }
          }
        },
        t.prototype.touchMoveBack = function (e) {
          c.GameCtrl._ins.boolTouch && e.getLocationX()
        },
        t.prototype.touchEndBack = function () {
          c.GameCtrl._ins.boolTouch
        },
        i([d(cc.Label)], t.prototype, 'label', void 0),
        i([d], t.prototype, 'text', void 0),
        i([p], t)
      }(cc.Component);
      o.default = u,
      cc._RF.pop()
    },
    {
      '../common/Tools': 'Tools',
      '../ctrl/GameCtrl': 'GameCtrl',
      '../model/GameModel': 'GameModel'
    }
  ],
  Tools: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '1cabc0YRwVLlaPoVAuI9R3d', 'Tools'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.Tools = void 0;
      var n = e('../manager/PlatformManager'),
      r = e('./LoadTools'),
      i = function () {
        function e() {
        }
        return e.clearResDic = function () {
          this.AudioClipDic.clear(),
          this.SpriteFrameDic.clear(),
          this.PrefabDic.clear()
        },
        e.setStorage = function (e, t, o) {
          void 0 === o && (o = !1),
          n.PlatformManager.setStorage(e, t, o)
        },
        e.getStorage = function (e, t) {
          return void 0 === t && (t = !1),
          n.PlatformManager.getStorage(e, t)
        },
        e.newPrefab = function (e, t, o, n, r) {
          return void 0 === n && (n = 0),
          a._ins.newPrefab(e, r, t, o, n)
        },
        e.newSprite = function (e, t, o, n, r) {
          return void 0 === n && (n = 0),
          a._ins.newSprite(e, r, t, o, n)
        },
        e.setSpriteFrame = function (e, t) {
          a._ins.setSpriteFrame(e, t)
        },
        e.setNodeGroupIndex = function (e, t) {
          a._ins.setNodeGroupIndex(e, t)
        },
        e.setBtnClickSpr = function (e, t, o) {
          a._ins.setBtnClickSpr(e, t, o)
        },
        e.setSpriteState = function (e, t) {
          a._ins.setSpriteState(e, t)
        },
        e.setNodeParent = function (e, t) {
          a._ins.setNodeParent(e, t)
        },
        e.random = function (e, t, o) {
          return void 0 === o && (o = !0),
          c._ins.random(e, t, o)
        },
        e.chooseRandom = function (e) {
          return c._ins.chooseRandom(e)
        },
        e.refractionY = function (e) {
          return c._ins.refractionY(e)
        },
        e.refractionX = function (e) {
          return c._ins.refractionX(e)
        },
        e.aginSortArr = function (e) {
          c._ins.aginSortArr(e)
        },
        e.sortArrForObject = function (e, t, o) {
          void 0 === o && (o = !1),
          c._ins.sortArrForObject(e, t, o)
        },
        e.getDiffNumRandom = function (e, t, o) {
          return c._ins.getDiffNumRandom(e, t, o)
        },
        e.getAngleForPos = function (e, t, o) {
          return void 0 === o && (o = !1),
          s._ins.getAngleForPos(e, t, o)
        },
        e.getDistance = function (e, t) {
          return s._ins.getDistance(e, t)
        },
        e.getPosForAngleLen = function (e, t, o) {
          return void 0 === o && (o = cc.v2(0, 0)),
          s._ins.getPosForAngleLen(e, t, o)
        },
        e.getToNodePosForNode = function (e, t) {
          return s._ins.getToNodePosForNode(e, t)
        },
        e.getToWorldPosAR = function (e) {
          return s._ins.getToWorldPosAR(e)
        },
        e.getToNodePosForWorld = function (e, t) {
          return s._ins.getToNodePosForWorld(e, t)
        },
        e.playBG = function (e, t) {
          void 0 === t && (t = 0.5),
          l._ins.playBG(e, t)
        },
        e.stopBG = function () {
          l._ins.stopBG()
        },
        e.playAudio = function (e, t, o) {
          return void 0 === t && (t = 0.5),
          void 0 === o && (o = !1),
          l._ins.playAudio(e, t, o)
        },
        e.stopAudio = function (e) {
          l._ins.stopAudio(e)
        },
        e.playAudioSource = function (e, t, o) {
          void 0 === t && (t = 0.5),
          void 0 === o && (o = !1),
          l._ins.playAudioSource(e, t, o)
        },
        e.removeArrForValue = function (e, t) {
          return e.splice(e.indexOf(t), 1)
        },
        e.addArrNoValue = function (e, t) {
          return e.indexOf(t) < 0 && (e.push(t), !0)
        },
        e.addArrIndex = function (e, t, o) {
          return e.splice(t, 0, o)
        },
        e.insertStrForIndex = function (e, t, o) {
          return e.slice(0, t) + o + e.slice(t)
        },
        e.prefixInteger = function (e, t) {
          return void 0 === t && (t = 2),
          (Array(t).join('0') + e).slice( - t)
        },
        e.getLanguageType = function () {
          var e = 'EN';
          return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? e = - 1 != cc.sys.languageCode.toLowerCase().indexOf('zh-cn') || - 1 != cc.sys.languageCode.toLowerCase().indexOf('zh_cn') ? 'CN' : 'CHT' : cc.sys.language == cc.sys.LANGUAGE_KOREAN ? e = 'KOR' : cc.sys.language == cc.sys.LANGUAGE_JAPANESE ? e = 'JP' : 'th-TH' == window.navigator.language && (e = 'TH'),
          e
        },
        e.SpriteFrameDic = new Map,
        e.PrefabDic = new Map,
        e.AudioClipDic = new Map,
        e
      }();
      o.Tools = i;
      var a = function () {
        function e() {
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e.prototype.newPrefab = function (e, t, o, n, a) {
          void 0 === a && (a = 0);
          var c = i.PrefabDic.get(e),
          s = null;
          return null != c ? (s = cc.instantiate(c), o && o.addChild(s, a), n && (s.position = cc.v3(n.x, n.y, 0)), null != t && t(s)) : r.LoadTools._ins.loadResPrefab(e, t, o, n, a),
          s
        },
        e.prototype.newSprite = function (e, t, o, n, a) {
          void 0 === a && (a = 0);
          var c = new cc.Node;
          return c.name = e,
          null != i.SpriteFrameDic.get(e) ? (c.addComponent(cc.Sprite).spriteFrame = i.SpriteFrameDic.get(e), o && o.addChild(c, a), n && (c.position = cc.v3(n.x, n.y, 0)), null != t && t(c)) : (c.addComponent(cc.Sprite), r.LoadTools._ins.loadResSpriteFrame(e, c, o, n, a, t)),
          c
        },
        e.prototype.setSpriteFrame = function (e, t) {
          i.SpriteFrameDic.get(t) ? e.getComponent(cc.Sprite).spriteFrame = i.SpriteFrameDic.get(t) : r.LoadTools._ins.loadResAny(t, cc.SpriteFrame, function (t) {
            e.getComponent(cc.Sprite).spriteFrame = t
          })
        },
        e.prototype.setNodeGroupIndex = function (e, t) {
          e.groupIndex = t;
          for (var o = 0; o < e.children.length; o++) e.children[o].groupIndex = t
        },
        e.prototype.setBtnClickSpr = function (e, t, o) {
          i.SpriteFrameDic.get(t) ? (e.getComponent(cc.Button).normalSprite = i.SpriteFrameDic.get(t), e.getComponent(cc.Button).hoverSprite = i.SpriteFrameDic.get(t), e.getComponent(cc.Button).pressedSprite = i.SpriteFrameDic.get(o)) : (r.LoadTools._ins.loadResAny(t, cc.SpriteFrame, function (t) {
            e.getComponent(cc.Button).normalSprite = t,
            e.getComponent(cc.Button).hoverSprite = t
          }), r.LoadTools._ins.loadResAny(o, cc.SpriteFrame, function (t) {
            e.getComponent(cc.Button).pressedSprite = t
          }))
        },
        e.prototype.setSpriteState = function (e, t) {
          var o = 0 == t ? 'builtin-2d-sprite' : 'builtin-2d-gray-sprite';
          cc.loader.loadRes('materials/' + o, cc.Material, function (t, o) {
            t ? cc.error(t) : e.getComponent(cc.Sprite).setMaterial(0, o)
          })
        },
        e.prototype.setNodeParent = function (e, t) {
          var o = s._ins.getToNodePosForNode(e, t);
          e.parent = t,
          e.position = cc.v3(o.x, o.y)
        },
        e._instance = new e,
        e
      }(),
      c = function () {
        function e() {
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e.prototype.random = function (e, t, o) {
          return void 0 === o && (o = !0),
          o ? e + Math.floor(Math.random() * (t - e + 1)) : Math.random() * (t - e) + e
        },
        e.prototype.chooseRandom = function (e) {
          for (var t = 0, o = 0; o < e.length; o++) t += e[o];
          var n = this.random(0, t, !1);
          for (o = 0; o < e.length; o++) {
            if (n < e[o]) return o;
            n -= e[o]
          }
          return e.length - 1
        },
        e.prototype.refractionY = function (e) {
          return Math.atan2(Math.sin(e), - Math.cos(e))
        },
        e.prototype.refractionX = function (e) {
          return Math.atan2( - Math.sin(e), Math.cos(e))
        },
        e.prototype.aginSortArr = function (e) {
          for (var t = 0; t < e.length; t++) {
            var o = i.random(0, e.length - 1);
            if (o != t) {
              var n = e[t];
              e[t] = e[o],
              e[o] = n
            }
          }
        },
        e.prototype.sortArrForObject = function (e, t, o) {
          void 0 === o && (o = !1),
          o ? e.sort(function (e, o) {
            return o[t] - e[t]
          }) : e.sort(function (e, o) {
            return e[t] - o[t]
          })
        },
        e.prototype.getDiffNumRandom = function (e, t, o) {
          for (var n = [
          ], r = e; r <= t; r++) n.push(r);
          var a = n.length - o;
          for (r = 0; r < a; r++) {
            var c = i.random(0, n.length - 1);
            n.splice(c, 1)
          }
          return n
        },
        e._instance = new e,
        e
      }(),
      s = function () {
        function e() {
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e.prototype.getAngleForPos = function (e, t, o) {
          void 0 === o && (o = !1);
          var n;
          return n = o ? - Math.atan2(t.x - e.x, t.y - e.y) : Math.atan2(t.y - e.y, t.x - e.x),
          cc.misc.radiansToDegrees(n)
        },
        e.prototype.getDistance = function (e, t) {
          return e.sub(t).mag()
        },
        e.prototype.getPosForAngleLen = function (e, t, o) {
          void 0 === o && (o = cc.v2(0, 0));
          var n = cc.misc.degreesToRadians(e);
          return cc.v3(o.x + Math.cos(n) * t, o.y + Math.sin(n) * t)
        },
        e.prototype.getToNodePosForNode = function (e, t) {
          var o = e.parent.convertToWorldSpaceAR(e.position),
          n = t.convertToNodeSpaceAR(o);
          return cc.v2(n.x, n.y)
        },
        e.prototype.getToWorldPosAR = function (e) {
          return e.parent.convertToWorldSpaceAR(e.position)
        },
        e.prototype.getToNodePosForWorld = function (e, t) {
          return t.convertToNodeSpaceAR(e)
        },
        e._instance = new e,
        e
      }(),
      l = function () {
        function e() {
          this.isPlayAudio = !0,
          this.isPlayBG = !0
        }
        return Object.defineProperty(e, '_ins', {
          get: function () {
            return this._instance
          },
          enumerable: !1,
          configurable: !0
        }),
        e.prototype.playBG = function (e, t) {
          var o = this;
          void 0 === t && (t = 0.5),
          this.isPlayBG && (this.stopBG(), null != i.AudioClipDic.get(e) ? this.bgAudio = cc.audioEngine.play(i.AudioClipDic.get(e), !0, t) : r.LoadTools._ins.loadResAny(cc.url.raw('resources/music/' + e + '.mp3'), cc.AudioClip, function (e) {
            o.bgAudio = cc.audioEngine.play(e, !0, t)
          }))
        },
        e.prototype.stopBG = function () {
          this.stopAudio(this.bgAudio)
        },
        e.prototype.playAudio = function (e, t, o) {
          if (void 0 === t && (t = 0.5), void 0 === o && (o = !1), this.isPlayAudio) return null != i.AudioClipDic.get(e) ? cc.audioEngine.play(i.AudioClipDic.get(e), o, t) : void r.LoadTools._ins.loadResAny(cc.url.raw('resources/music/' + e + '.mp3'), cc.AudioClip, function (e) {
            cc.audioEngine.play(e, !0, t)
          })
        },
        e.prototype.stopAudio = function (e) {
          null != e && (cc.audioEngine.stop(e), e = null)
        },
        e.prototype.playAudioSource = function (e, t, o) {
          var n = this;
          if (void 0 === t && (t = 0.5), void 0 === o && (o = !1), this.isPlayAudio) return null != i.AudioClipDic.get(e) ? this.newAduioSource(i.AudioClipDic.get(e), t, o) : void r.LoadTools._ins.loadResAny(e, cc.AudioClip, function (e) {
            n.newAduioSource(e, t, o)
          })
        },
        e.prototype.newAduioSource = function (e, t, o) {
          void 0 === t && (t = 0.5),
          void 0 === o && (o = !1);
          var n = new cc.Node,
          r = n.addComponent(cc.AudioSource);
          return r.clip = e,
          r.loop = o,
          r.volume = t,
          r.play(),
          0 == o && cc.tween(n).delay(r.getDuration() + 0.1).removeSelf().union().start(),
          r
        },
        e._instance = new e,
        e
      }();
      cc._RF.pop()
    },
    {
      '../manager/PlatformManager': 'PlatformManager',
      './LoadTools': 'LoadTools'
    }
  ],
  UIManager: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '2db57i1B6xAH6TGmydefCWN', 'UIManager');
      var n,
      r = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
          __proto__: [
          ]
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        }
        || function (e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }) (e, t)
      }, function (e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      i = this && this.__spreadArrays || function () {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        var n = Array(e),
        r = 0;
        for (t = 0; t < o; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, r++) n[r] = i[a];
        return n
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.UIManager = void 0;
      var a = e('../common/Tools'),
      c = e('../common/weiSanTools'),
      s = function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return r(t, e),
        t.OpenUI = function (e, t) {
          void 0 === t && (t = !1);
          for (var o, n = [
          ], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
          if (l[e] && (o = l[e]), null == o) return c.weiSan.error('未找到该UI的配置信息:' + e),
          null;
          this.UIDic.has(e) ? c.weiSan.warn('已经打开过UI:' + e) : (1 == t && this.removeAllUI(), this.CreateUI.apply(this, i([o], n)))
        },
        t.CloseUI = function (e) {
          for (var t, o = [
          ], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
          if (t = this.UIDic.get(e)) {
            this.UIDic.delete(e);
            var r = t.getComponent(t.config.com);
            r && r.closeUI && r.closeUI.apply(r, o)
          } else c.weiSan.warn('已经关闭过UI:' + e)
        },
        t.GetUI = function (e) {
          var t = this.UIDic.get(e);
          return null != t ? t : (c.weiSan.log('没有打开UI:' + e), null)
        },
        t.GetUIForComponent = function (e) {
          var t = this.UIDic.get(e);
          return null != t ? t.getComponent(t.config.com) : (c.weiSan.warn('没有打开UI:' + e), null)
        },
        t.CreateUI = function (e) {
          for (var t = this, o = [
          ], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
          if (null == this.UIDic.get(e.name)) {
            var r = cc.director.getScene().getChildByName('Canvas');
            a.Tools.newPrefab(e.resUrl, r, null, e.zIndex, function (n) {
              n.config = e;
              var r = n.getComponent(e.com);
              r && r.openUI && (r.openUI.apply(r, o), r.uiName = e.name),
              t.UIDic.set(e.name, n)
            })
          }
        },
        t.removeAllUI = function () {
          for (var e in this.UIDic) this.CloseUI(e)
        },
        t.removeUIDic = function () {
          this.UIDic.clear()
        },
        t.prototype.onDestroy = function () {
          t.UIDic.delete(this.uiName)
        },
        t.UIDic = new Map,
        t
      }(cc.Component);
      o.UIManager = s;
      var l = {
        OverUI: {
          name: 'OverUI',
          resUrl: 'OverUI',
          com: 'OverUI',
          zIndex: 99
        }
      };
      cc._RF.pop()
    },
    {
      '../common/Tools': 'Tools',
      '../common/weiSanTools': 'weiSanTools'
    }
  ],
  WordsModel: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, '2ece89cEWRIPr2lAofwJh4H', 'WordsModel'),
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.WordsModel = void 0;
      var n = e('../common/Tools'),
      r = e('../common/weiSanTools');
      o.WordsModel = {
        gameName: {
          CN: '花花僵尸',
          CHT: '花花僵屍',
          EN: 'Flowers vs Zombies',
          KOR: '얼룩덜룩한 좀비',
          JP: 'ゾンビ',
          TH: 'ซอมบี้ดอกไม้'
        },
        overScoreInfo_0: {
          CN: '只得0分，全球独一个！',
          CHT: '只得0分，全球獨一個！',
          EN: 'Only 0, the only one in the world!',
          KOR: '0점밖에 안 돼, 전 세계에서 하나야!',
          JP: '0点しか取れません。世界で唯一です',
          TH: 'มีเพียง <NU>0 จุดหนึ่งในโลก'
        },
        overScoreInfo_1: {
          CN: '击败了全球',
          CHT: '擊敗了全球',
          EN: 'Handy: beat the world ',
          KOR: '격파',
          JP: '打ち負かす',
          TH: 'ทำให้พ่ายแพ้'
        },
        overScoreInfo_2: {
          CN: '的玩家！',
          CHT: '的玩家！',
          EN: ' of the players!',
          KOR: '유저!',
          JP: 'のプレイヤー！',
          TH: 'ผู้เล่นของ'
        },
        overTitle_1: {
          CN: '我真是太厉害了，我在',
          CHT: '我真是太厲害了，我在',
          EN: 'I\'m really great.  I\'m in '
        },
        overTitle_2: {
          CN: '中,',
          CHT: '中,',
          EN: '. '
        },
        getStrForLanguage: function (e, t) {
          if (t = t || n.Tools.getLanguageType(), this[e]) return this[e][t] ? this[e][t] : this[e].EN;
          r.weiSan.log('没有翻译:' + e)
        }
      },
      cc._RF.pop()
    },
    {
      '../common/Tools': 'Tools',
      '../common/weiSanTools': 'weiSanTools'
    }
  ],
  weiSanTools: [
    function (e, t, o) {
      'use strict';
      cc._RF.push(t, 'ff39aoXMlBNuoJpIycuGqrL', 'weiSanTools');
      var n = this && this.__spreadArrays || function () {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        var n = Array(e),
        r = 0;
        for (t = 0; t < o; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, r++) n[r] = i[a];
        return n
      };
      Object.defineProperty(o, '__esModule', {
        value: !0
      }),
      o.weiSan = void 0;
      var r = function () {
        function e() {
        }
        return e.log = function () {
          for (var e = [
          ], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this.isLog && console.log.apply(console, n([this.logName], e))
        },
        e.logTrace = function () {
          for (var e = [
          ], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this.isLog && console.trace.apply(console, n([this.logName], e))
        },
        e.error = function () {
          for (var e = [
          ], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this.isLog && console.error.apply(console, n([this.logName], e))
        },
        e.warn = function () {
          for (var e = [
          ], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          this.isLog && console.warn.apply(console, n([this.logName], e))
        },
        e.initLog = function () {
          console.log(this.logInfo)
        },
        e.isLog = !0,
        e.logName = '微伞游戏Log:',
        e.logInfo = '本游戏包含的所有内容（包括但不限于：代码、图片、视像及声音内容、名称）的所有权归北京米兜科技有限公司所有。任何单位或个人将本游戏提供的内容与服务用于商业、盈利、广告性等目的时，需征得北京米兜科技有限公司相关权利人的书面许可；将本网站提供的内容与服务用于非商业用途时，应遵守著作权法以及其他相关法律的规定，不得侵犯游戏所有者及相关权利人的权益。',
        e
      }();
      o.weiSan = r,
      cc._RF.pop()
    },
    {
    }
  ]
}, {
}, [
  'AdManager',
  'AdManager_H5',
  'ActionTools',
  'LoadTools',
  'Tools',
  'weiSanTools',
  'GameCtrl',
  'InitGame',
  'MainGame',
  'Corpse',
  'Flower',
  'ResArr',
  'Seed',
  'EventManager',
  'NetworkManager',
  'PlatformManager',
  'PoolManager',
  'UIManager',
  'GameModel',
  'OtherModel',
  'WordsModel',
  'OverUI'
]);
