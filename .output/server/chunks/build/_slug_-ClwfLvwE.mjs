import { useSSRContext, defineComponent, ref, unref } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const blogStore = useHomeStore();
    const param = ref("");
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
      _push(`<!--[-->`);
      ssrRenderList(unref(blogStore).getBlogData(unref(param)), (blogItem) => {
        _push(`<section class="mx-[10px] xs:mx-[16px] sm:mx-[30px] md:lg-[50px] lg:mx-[80px] xl:mx-[110px] font-[&#39;Poppins&#39;]" data-v-773cf37c><header class="mt-[105px] xs:mt-[130px]" data-v-773cf37c><h1 class="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold" data-v-773cf37c>${ssrInterpolate(blogItem.title)}</h1><h3 class="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium mt-2 pb-3 xs:pb-5" data-v-773cf37c>${ssrInterpolate(blogItem.short_intro)}</h3><aside class="flex justify-between text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-3 xs:mb-5 pt-2 xs:pt-5 border-t-2 border-t-black" data-v-773cf37c><h3 class="" data-v-773cf37c>${ssrInterpolate(blogItem.author_username)}</h3><p class="" data-v-773cf37c>${ssrInterpolate(formatDate(blogItem.date_created))}</p></aside></header><main data-v-773cf37c><article class="w-full h-[280px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-no-repeat bg-contain bg-center" style="${ssrRenderStyle(`background-image: url('${blogItem.image}')`)}" data-v-773cf37c></article></main><article class="font-normal text-[22px] my-[20px] md:my-[40px]" data-v-773cf37c><div id="htmlContainer" class="flex flex-col gap-2 md:gap-4" data-v-773cf37c>${blogItem.body}</div></article></section>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-773cf37c"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-ClwfLvwE.mjs.map
