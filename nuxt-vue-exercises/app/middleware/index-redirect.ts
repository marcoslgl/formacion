export default defineNuxtRouteMiddleware((to, from) => {
  alert("Redirecting to Home");
  return navigateTo("/");
});
