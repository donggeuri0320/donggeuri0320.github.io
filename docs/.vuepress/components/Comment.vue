<template>
  <div id="giscus-container"></div>
</template>

<script>
export default {
  name: 'Comment',
  mounted() {
    // script 태그 생성
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.setAttribute('data-repo', 'donggeuri0320/comment');
    script.setAttribute('data-repo-id', 'R_kgDOLaGQfA');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOLaGQfM4CdovZ');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('crossorigin', 'anonymous');

    // 스크립트를 페이지에 추가
    document.getElementById('giscus-container').appendChild(script);
  }
};
</script>
