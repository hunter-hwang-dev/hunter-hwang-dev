# withglyph/glyph 공개 코드를 읽고 공부한 내용.

작성일: 2024-08-11
최종 수정일: 2024-08-11

좋아하는 프로젝트나 서비스 코드가 공개되어 있는 것 만큼 기쁜 일도 잘 없다. Glyph 서비스 이용자로서 오픈소스로 관리되는 glyph의 소스 코드를 공부해 보기로 했다.

*가장 얻어가고 싶은 정보: 어떻게 게시글을 저장하고 관리하는가?
내게 필요한 이유: 기술 블로그 작성에 도움이 될 것 같음.

---

`https://github.com/withglyph` 에서 확인한 기술 스택은 다음과 같다.

- 프론트엔드: Vite, TypeScript, Svelte, PandaCSS, GraphQL
- 백엔드: Node.js, TypeScript, Drizzle, GraphQL, Postgres, Redis, RabbitMQ, ElasticSearch
- 인프라: AWS, Kubernetes, Pulumi
- 생산성 & 툴링: <span style="color:lightgray">Google, Slack, Notion,</span> Linear, <span style="color:lightgray">Figma, Adobe, Git, Github,</span> Graphite, <span style="color:lightgray">VS Code</span>
- 데이터 & 모니터링: Plausible, MixPanel, Datadog, Sentry

TypeScript, Node.js는 들어 보았다! AWS는 서버 제공을 하고. 하지만 GraphQL이 뭐지? 아래 아티클을 읽어 보기로 했다.
