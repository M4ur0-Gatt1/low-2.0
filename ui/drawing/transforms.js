(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  LOW.drawing = LOW.drawing || {};

  function data(m) {
    if (!m) return { a:1, b:0, c:0, d:1, e:0, f:0 };
    return { a:+m.a, b:+m.b, c:+m.c, d:+m.d, e:+m.e, f:+m.f };
  }
  function identity() { return data(null); }
  // A * B: primero actúa B y después A. Así la rotación nueva envuelve
  // rígidamente a todas las transformaciones que la forma ya tenía.
  function multiply(A, B) {
    A = data(A); B = data(B);
    return {
      a:A.a*B.a + A.c*B.b, b:A.b*B.a + A.d*B.b,
      c:A.a*B.c + A.c*B.d, d:A.b*B.c + A.d*B.d,
      e:A.a*B.e + A.c*B.f + A.e, f:A.b*B.e + A.d*B.f + A.f
    };
  }
  function point(m, p) {
    m = data(m);
    return { x:m.a*p.x + m.c*p.y + m.e, y:m.b*p.x + m.d*p.y + m.f };
  }
  function rotationAround(degrees, center) {
    const r=degrees*Math.PI/180, co=Math.cos(r), si=Math.sin(r);
    return { a:co, b:si, c:-si, d:co,
      e:center.x-co*center.x+si*center.y,
      f:center.y-si*center.x-co*center.y };
  }
  function rigidRotate(base, degrees, centerInParent) {
    return multiply(rotationAround(degrees, centerInParent), base || identity());
  }
  function attr(m) {
    const n=v=>Math.abs(v)<1e-10?0:Math.round(v*1e6)/1e6;
    return `matrix(${n(m.a)} ${n(m.b)} ${n(m.c)} ${n(m.d)} ${n(m.e)} ${n(m.f)})`;
  }
  LOW.drawing.transforms = { identity, multiply, point, rotationAround, rigidRotate, attr };
})(typeof window !== "undefined" ? window : globalThis);
