import { useSSRContext, defineComponent, resolveComponent, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useHomeStore } from './home-CN5XGzCm.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const homeStore = useHomeStore();
    function formatDate(inputDate) {
      const dateObj = new Date(inputDate);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const day = dateObj.getDate();
      const month = monthNames[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      const formattedDate = `${day} ${month}, ${year}`;
      return formattedDate;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><section class="w-full mt-[-70px] h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[calc(100vh-71px)] flex flex-col justify-end text-white font-[&#39;Poppins&#39;] font-semibold relative overflow-hidden" data-v-35b68bc3><article class="absolute blog-bg w-[100vw] h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] scale-[1] hover:scale-[1.2] transition-all duration-[1000ms] ease-in-out z-[10] bg-no-repeat bg-center bg-cover delay-100" data-v-35b68bc3></article><article class="relative z-[11]" data-v-35b68bc3><div class="absolute z-10 w-full h-full bg-white opacity-25" data-v-35b68bc3></div><p class="mx-auto text-center max-w-[80%] md:max-w-[655px] text-[24px] !font-secular xs:text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[50px] py-6" data-v-35b68bc3> TRAVEL WITH TRIPTURBO, YOUR ADVENTURE AWAITS </p></article></section><section class="font-[&#39;Poppins&#39;] uppercase mb-[20px] md:mb-[40px] mt-[30px] md:mt-[60px]" data-v-35b68bc3><h3 class="font-[300] text-base xs:text-[18px] lg:text-[20px] xl:text-[24px] text-center mb-[10px]" data-v-35b68bc3> Trip Inspiration </h3><p class="font-medium text-[18px] xs:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px] text-center w-[75%] md:w-[625px] mx-auto" data-v-35b68bc3> FIND THE PERFECT PLACE TO DO ACTIVTIES, STAY AT HOTELS AND MORE </p></section>`);
      if (unref(homeStore).blogsArr.length > 0) {
        _push(`<section class="w-[95%] lg:w-[80%] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 font-[&#39;Poppins&#39;] mb-12" data-v-35b68bc3><!--[-->`);
        ssrRenderList(unref(homeStore).getBlogLists, (blog) => {
          _push(ssrRenderComponent(_component_RouterLink, {
            to: `/blog/${blog.slug}`,
            class: "relative h-[300px] sm:h-[360px] md:h-[400px] bg-no-repeat bg-cover rounded-lg overflow-hidden cursor-pointer flex flex-col justify-end group",
            key: blog.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<article style="${ssrRenderStyle(`background-image: url('${blog.thumbnail}')`)}" class="absolute w-[100%] h-[100%] group-hover:scale-[1.2] delay-150 transition-all duration-[1000ms] ease-in-out z-[10] bg-no-repeat bg-cover bg-center" data-v-35b68bc3${_scopeId}></article><aside class="relative z-[11] w-ful text-white" data-v-35b68bc3${_scopeId}><div class="w-full bg-black opacity-[0.475] absolute h-full z-[12]" data-v-35b68bc3${_scopeId}></div><article class="px-5 py-4" data-v-35b68bc3${_scopeId}><div class="flex justify-between" data-v-35b68bc3${_scopeId}><aside class="max-w-[72.5%]" data-v-35b68bc3${_scopeId}><h3 class="relative z-[13] text-base sm:text-lg font-semibold mb-[2px] no-underline group-hover:underline" data-v-35b68bc3${_scopeId}>${ssrInterpolate(blog.title)}</h3></aside><aside class="min-w-[20%] flex justify-end" data-v-35b68bc3${_scopeId}><p class="text-xs sm:text-sm font-semibold z-[13] relative" data-v-35b68bc3${_scopeId}>${ssrInterpolate(formatDate(blog.date_created))}</p></aside></div><div class="" data-v-35b68bc3${_scopeId}><p class="relative z-[13] text-xs sm:text-sm font-medium" data-v-35b68bc3${_scopeId}>${ssrInterpolate(blog.short_intro)}</p></div></article></aside>`);
              } else {
                return [
                  createVNode("article", {
                    style: `background-image: url('${blog.thumbnail}')`,
                    class: "absolute w-[100%] h-[100%] group-hover:scale-[1.2] delay-150 transition-all duration-[1000ms] ease-in-out z-[10] bg-no-repeat bg-cover bg-center"
                  }, null, 4),
                  createVNode("aside", { class: "relative z-[11] w-ful text-white" }, [
                    createVNode("div", { class: "w-full bg-black opacity-[0.475] absolute h-full z-[12]" }),
                    createVNode("article", { class: "px-5 py-4" }, [
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("aside", { class: "max-w-[72.5%]" }, [
                          createVNode("h3", { class: "relative z-[13] text-base sm:text-lg font-semibold mb-[2px] no-underline group-hover:underline" }, toDisplayString(blog.title), 1)
                        ]),
                        createVNode("aside", { class: "min-w-[20%] flex justify-end" }, [
                          createVNode("p", { class: "text-xs sm:text-sm font-semibold z-[13] relative" }, toDisplayString(formatDate(blog.date_created)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "" }, [
                        createVNode("p", { class: "relative z-[13] text-xs sm:text-sm font-medium" }, toDisplayString(blog.short_intro), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35b68bc3"]]);

export { index as default };
//# sourceMappingURL=index-CiSRQfRn.mjs.map
