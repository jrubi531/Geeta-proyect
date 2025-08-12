export function bannerLogin() {
  let contenedor = document.createElement("div");
  contenedor.className = "contenedor-banner-login";

  let banner = document.createElement("div");
  banner.className = "banner-login";

  let titulo = document.createElement("h2");
  titulo.textContent = "Geeta.";
  banner.appendChild(titulo);

  let p1 = document.createElement("p");
  p1.innerHTML = "<b>Create your fashion in your own way</b>";
  banner.appendChild(p1);

  let p2 = document.createElement("p");
  p2.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
  banner.appendChild(p2);

  let btnLogin = document.createElement("a");
  btnLogin.className = "btn-login";
  btnLogin.textContent = "LOG IN";
  banner.appendChild(btnLogin);

  let p3 = document.createElement("p");
  p3.textContent = "OR";
  banner.appendChild(p3);

  let btnRegister = document.createElement("button");
  btnRegister.className = "btn-register";
  btnRegister.textContent = "REGISTER";
  banner.appendChild(btnRegister);

  contenedor.appendChild(banner);

  return contenedor;
}
document.body.appendChild(bannerLogin());
