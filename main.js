(() => {
    "use strict";
    var e = {
        n: t => {
            var a = t && t.__esModule ? () => t.default : () => t;
            return e.d(a, {
                a
            }), a
        },
        d: (t, a) => {
            for (var o in a) e.o(a, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: a[o]
            })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    const t = window.wp.domReady;
    var a = e.n(t);
    const o = window.wp.url,
        s = () => window.location !== window.parent.location,
        n = e => {
            const t = e.href;
            return !("" === t || !t.includes(window.location.origin) || t.includes("wp-admin") || t.includes(".php") || t.includes("customize"))
        };
    let r = "",
        l = "";
    s() ? (r = "starterTemplatePreviewDispatch", l = "starter-templates-iframe-preview-data") : (r = "showcaseCTAPreviewDispatch", l = "showcase-cta-preview-data");
    const i = () => {
        let e = "";
        const t = document.querySelector(".site-logo-img img");
        return t && (e = t.src), e
    };
    let c = i();
    const d = (e, t) => {
            if (!e) return "";
            if (e) {
                const a = e.match(/'([^']+)'/);
                return a ? a[1] : "inherit" === e ? t : e
            }
            return t || void 0
        },
        m = e => {
            switch (e.value.param) {
                case "siteLogo":
                    const t = document.querySelectorAll(".site-logo-img img");
                    "" === c && (c = i());
                    let a = e.value.data.url || c;
                    if (a = e.value.data.dataUri || a, 0 === t.length && "" !== a) {
                        const t = document.createElement("span");
                        t.classList.add("site-logo-img");
                        const o = document.createElement("img");
                        o.classList.add("custom-logo"), o.setAttribute("src", a), t.appendChild(o);
                        const s = document.getElementById("ast-desktop-header").querySelectorAll(".ast-site-identity")[0],
                            n = s.querySelectorAll(".ast-site-title-wrap")[0];
                        s.insertBefore(t, n), n && (n.style.display = "none");
                        const r = e.value.data.width || "";
                        "" !== r && (o.style.width = r + "px", o.style.maxWidth = r + "px")
                    } else if ("" !== a) {
                        for (const [o, s] of Object.entries(t)) {
                            s.removeAttribute("srcset"), s.setAttribute("src", a);
                            const t = e.value.data.width;
                            "" !== t && a !== c ? (s.style.width = t + "px", s.style.maxWidth = t + "px") : (s.style.width = "", s.style.maxWidth = "")
                        }(() => {
                            const e = document.getElementById("ast-desktop-header"),
                                t = e && e.querySelectorAll(".ast-site-identity")[0],
                                a = t && t.querySelectorAll(".ast-site-title-wrap")[0];
                            a && (a.style.display = "none")
                        })()
                    }
                    break;
                case "colorPalette":
                    const o = e.value.data.colors || [],
                        s = starterTemplatesPreview.AstColorPaletteVarPrefix,
                        n = starterTemplatesPreview.AstEleColorPaletteVarPrefix,
                        r = starterTemplatesPreview.templateTheme;
                    if (0 === o.length) {
                        document.querySelector("body").classList.remove("starter-templates-preview-palette");
                        const e = document.getElementsByClassName("starter-templates-preview-palette");
                        return void(e.length > 0 && e[0].remove())
                    }
                    document.querySelector("body").classList.add("starter-templates-preview-palette");
                    const l = Object.entries(o).map(((e, t) => [`--e-global-color-${n[t].replace(/-/g,"")}: ${e[1]};`, "spectra-one" === r ? `--${n[t]}: ${e[1]};` : `${s}${t}: ${e[1]};`])).map((e => e.join(""))).join("");
                    let m = document.getElementById("starter-templates-preview-palette-css");
                    m || (m = document.createElement("style"), m.id = "starter-templates-preview-palette-css", m.setAttribute("rel", "stylesheet"), document.head.appendChild(m)), m.innerHTML = `.starter-templates-preview-palette{ ${l} }`;
                    break;
                case "siteTypography":
                    if (!Object.keys(e.value.data).length) {
                        const e = document.getElementById("starter-templates-typography");
                        return void(e && e.remove())
                    }(e => {
                        if (!e) return;
                        if (!document.getElementById("google-fonts-domain")) {
                            const e = document.createElement("link");
                            e.id = "google-fonts-domain", e.setAttribute("rel", "preconnect"), e.setAttribute("href", "https://fonts.gstatic.com"), document.head.appendChild(e)
                        }
                        let t = document.getElementById("st-previw-google-fonts-url");
                        t || (t = document.createElement("link"), t.id = "st-previw-google-fonts-url", t.setAttribute("rel", "stylesheet"), document.head.appendChild(t));
                        const a = [];
                        let o = e["body-font-family"] || "",
                            s = parseInt(e["body-font-weight"]) || "";
                        s && (s = `:wght@${s}`), o && (o = d(o), o = o.replace(" ", "+"), a.push(`family=${o}${s}`));
                        let n = e["headings-font-family"] || "",
                            r = parseInt(e["headings-font-weight"]) || "";
                        r && (r = `:wght@${r}`), n && (n = d(n, o), n = n.replace(" ", "+"), a.push(`family=${n}${r}`));
                        const l = `https://fonts.googleapis.com/css2?${a.join("&")}&display=swap`;
                        t.setAttribute("href", l)
                    })(e.value.data), (e => {
                        if (!e) return;
                        let t = document.getElementById("starter-templates-typography");
                        t || (t = document.createElement("style"), t.id = "starter-templates-typography", t.setAttribute("rel", "stylesheet"), document.head.appendChild(t));
                        let a = "";
                        a += "body, button, input, select, textarea, .ast-button, .ast-custom-button {", a += "\tfont-family: " + e["body-font-family"] + ";", a += "\tfont-weight: " + e["body-font-weight"] + ";", a += "\tfont-size: " + e["font-size-body"].desktop + e["font-size-body"]["desktop-unit"] + ";", a += "\tline-height: " + e["body-line-height"] + ";", a += "}", a += "h1, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6, .site-title, .site-title a {", a += "\tfont-family: " + e["headings-font-family"] + ";", a += "\tline-height: " + e["headings-line-height"] + ";", a += "\tfont-weight: " + e["headings-font-weight"] + ";", a += "}", ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((t => {
                            const o = "inherit" === e["font-family-" + t] ? e["headings-font-family"] : e["font-family-" + t],
                                s = "inherit" === e["font-weight-" + t] ? e["headings-font-weight"] : e["font-weight-" + t];
                            let n = "";
                            void 0 !== o && "" !== o && (n += `${t}, .entry-content ${t} {`, n += "\tfont-family: " + o + ";"), void 0 !== e["line-height-" + t] && "" !== e["line-height-" + t] && (n += "\tline-height: " + e["line-height-" + t] + ";"), void 0 !== s && "" !== s && (n += "\tfont-weight: " + s + ";"), a += "" !== n ? n + "}" : ""
                        })), t.innerHTML = a
                    })(e.value.data);
                    break;
                case "clearPreviewAssets":
                    const p = document.getElementById("starter-templates-typography");
                    p && p.remove(), document.querySelector("body").classList.remove("starter-templates-preview-palette");
                    const h = document.getElementsByClassName("starter-templates-preview-palette");
                    h.length > 0 && h[0].remove();
                    break;
                case "completeOnboarding":
                    localStorage.removeItem("starter-templates-iframe-preview-data")
            }
        };
    window.addEventListener("message", (function(e) {
        if ("object" == typeof e.data && r === e.data.call) {
            const t = e.data;
            let a = JSON.parse(localStorage.getItem(l));
            if (null === a && (a = {}, a.data = {}), a.data[t.value.param] = t.value.data, s()) delete a.data.clearPreviewAssets, t.url = window.location.origin, a.url = window.location.origin;
            else {
                t.url = window.location.pathname, a.url = showcaseCTA.path;
                const e = (new Date).getTime();
                a.timestamp = e
            }
            "cleanStorage" === t.value.param ? (delete a.data.cleanStorage, a.data.siteLogo = t.value.data, a.data.colorPalette = {}, a.data.siteTypography = {}, Object.keys(a.data).map((e => m({
                value: {
                    param: e,
                    data: a.data[e]
                }
            })))) : m(t), localStorage.setItem(l, JSON.stringify(a))
        }
    }), !1), a()((() => {
        if (s()) {
            const e = document.createElement("style");
            e.id = "starter-templates-logo-css", document.getElementsByTagName("head")[0].appendChild(e), e.innerHTML = ".site-logo-img img { transition: unset; }"
        }
        if (!s()) {
            const e = (0, o.getQueryArgs)(window.location.search).customize || "";
            if ("" === e) return;
            const t = Array.from(document.querySelectorAll("a"));
            for (let a = 0; a < t.length; a++) {
                const s = t[a];
                if (n(s)) {
                    const t = (0, o.addQueryArgs)(s.href, {
                        customize: e
                    });
                    s.href = t
                }
            }
        }
        const e = (t = l, JSON.parse(localStorage.getItem(t)));
        var t;
        if (e) {
            let t = "";
            if (!s()) {
                const a = ((new Date).getTime() - e.timestamp) / 1e3;
                t = Math.abs(a)
            }
            const a = 1800;
            if (!s() && (e.url !== showcaseCTA.path || t > a)) {
                document.querySelector("body").classList.remove("showcase-cta-preview-palette");
                const e = document.getElementsByClassName("showcase-cta-preview-palette");
                e.length > 0 && e[0].remove();
                const t = document.getElementById("showcase-cta-typography");
                return t && t.remove(), void localStorage.removeItem(l)
            }
            Object.keys(e.data).map((t => m({
                value: {
                    param: t,
                    data: e.data[t]
                }
            })))
        }
    }))
})();