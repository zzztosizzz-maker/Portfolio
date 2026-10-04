(function () {
  var root = document.currentScript.getAttribute("data-root") || "";
  var page = document.body.getAttribute("data-page") || "";
  var D = window.SITE;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function link(href, text, cls, cur) {
    return '<a class="' + cls + '" href="' + root + href + '"' + (cur ? ' aria-current="page"' : '') + '>' + esc(text) + '</a>';
  }
  var swPath = function (x) { return "software/" + x.id + "/index.html"; };
  var arPath = function (x) { return "articles/" + x.id + ".html"; };

  var nav = document.getElementById("nav");
  if (nav) {
    var h = '<a class="logo" href="' + root + 'index.html">' + esc(D.name) + '</a>';
    h += '<p class="tag">' + esc(D.tagline) + '</p><div class="menu">';
    h += link("index.html", "ホーム", "m", page === "home");
    h += link("software/index.html", "ソフト", "m", page === "software");
    D.software.forEach(function (x) { h += link(swPath(x), x.name, "m sub", page === "software/" + x.id); });
    h += link("articles/index.html", "記事", "m", page === "articles");
    D.articles.forEach(function (x) { h += link(arPath(x), x.name, "m sub", page === "articles/" + x.id); });
    nav.innerHTML = h + "</div>";
  }

  function cards(list, pathFn) {
    return list.map(function (x) {
      var empty = !x.date;
      var meta = empty ? "準備中" : "作成日 " + esc(x.date) + " ／ 作成ツール " + esc(x.tool);
      return '<a class="card' + (empty ? ' empty' : '') + '" href="' + root + pathFn(x) + '"><h3>' + esc(x.name) +
        '</h3><p>' + esc(x.desc) + '</p><p class="m2">' + meta + '</p></a>';
    }).join("");
  }
  var els = document.querySelectorAll("[data-list]");
  for (var i = 0; i < els.length; i++) {
    var k = els[i].getAttribute("data-list");
    els[i].innerHTML = k === "software" ? cards(D.software, swPath) : cards(D.articles, arPath);
  }
  var f = document.getElementById("sitefoot");
  if (f) f.textContent = "このサイトのソフトや記事は、AI等を使って個人が作ったものです。動作や内容は保証しません。";
})();
