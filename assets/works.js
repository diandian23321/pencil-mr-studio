/* 作品清单 —— 由网页里的「素材库」导出时覆盖写入。
   结构：{ id, t 标题, cat 分类, type 类型行, kind image|video, src, poster? }
   用 <script> 加载而不是 fetch：file:// 下 fetch 会被 CORS 拦，脚本标签两种环境都能读。 */
window.PENCIL_WORKS = [];
