import { State } from '~/types/store/userEvents'

export function createUserEvents(): any {
  return {
    results_returned: 10,
    events: [
      {
        event_url: 'https://breaktimes.connpass.com/event/135840/',
        event_type: 'participation',
        owner_nickname: 'kazyamada',
        series: {
          url: 'https://breaktimes.connpass.com/',
          id: 965,
          title: 'BREAK TIMES'
        },
        updated_at: '2019-08-02T18:07:21+09:00',
        lat: '35.669393500000',
        started_at: '2019-08-02T19:00:00+09:00',
        hash_tag: 'prtimes',
        title:
          'BREAK TIMES Meetup vol.1　〜ライトニングトーク『フロントエンド』編〜',
        event_id: 135840,
        lon: '139.716721500000',
        waiting: 0,
        limit: 33,
        owner_id: 26090,
        owner_display_name: 'kazyamada',
        description:
          '<h1>概要</h1>\n\n<p><span style="font-size: 14px;">PR TIMESのデザイン&amp;エンジニア チームBREAK TIMESのミートアップを開催します！<br>\n初回となる今回はまず『フロントエンド』をテーマにライトニングトーク。<br>\nフロントエンド・エンジニアの方だけでなく、フロントエンドやUIに興味がある方も是非ご参加ください。<br>\n今後もさまざまなテーマで、エンジニア・デザイナー向けのイベントを開催していきます。<br>\n<br>\n懇親会ではケータリングとドリンクもご用意しています。<br>\n技術のことやサービスのことはもちろん、会社のこと働き方など気軽にお話しながら交流しましょう！\n</span><br><br>\n<img src="https://cdn-ak.f.st-hatena.com/images/fotolife/b/breaktimes/20190708/20190708202815.jpg"></p>\n<h1>日時</h1>\n\n<p><span style="font-size: 14px;">\n2019年8月2日（金）19:00〜21:30\n</span></p>\n<h1>場所</h1>\n\n<p><span style="font-size: 14px;">\n株式会社PR TIMES オフィス内GArDEN<br>\n東京都港区南青山2-27-25 ヒューリック南青山ビル3F<br>\n最寄り駅：銀座線 外苑前駅\n</span><br><br>\n<img src="https://cdn-ak.f.st-hatena.com/images/fotolife/b/breaktimes/20190708/20190708214548.jpg"></p>\n<h1>タイムスケジュール</h1>\n\n<table>\n  <thead>\n    <tr><th style="font-size: 14px; padding: 10px;">時間</th><th style="font-size: 14px; padding: 10px;">内容</th></tr>\n  </thead>\n  <tbody>\n    <tr><td style="font-size: 14px; padding: 10px;">18:40</td><td style="font-size: 14px; padding: 10px;">受付開始</td></tr>\n    <tr><td style="font-size: 14px; padding: 10px;">19:00</td><td style="font-size: 14px; padding: 10px;">オープニング挨拶</td></tr>\n    <tr><td style="font-size: 14px; padding: 10px;">19:10</td><td style="font-size: 14px; padding: 10px;">\n    <p style="font-size: 14px; margin: 5px 0;">ライトニングトーク 10分×5</p>\n    <p style="font-size: 14px; margin: 5px 0; font-weight: bold; text-decoration: underline;">LT1：UIと心理学/山田和広（PR TIMES）</p>\n    <p style="font-size: 14px; margin: 5px 0; font-weight: bold; text-decoration: underline;">LT2： テーマ未定/西野修史（PR TIMES）</p>\n    <p style="font-size: 14px; margin: 5px 0; font-weight: bold; text-decoration: underline;">LT3： 参加者枠</p>\n    <p style="font-size: 14px; margin: 5px 0; font-weight: bold; text-decoration: underline;">LT4： 参加者枠</p>\n    <p style="font-size: 14px; margin: 5px 0; font-weight: bold; text-decoration: underline;">LT5： 参加者枠</p>\n    </td></tr>\n    <tr><td style="font-size: 14px; padding: 10px;">20:30</td><td style="font-size: 14px; padding: 10px;">懇親会</td></tr>\n    <tr><td style="font-size: 14px; padding: 10px;">21:15</td><td style="font-size: 14px; padding: 10px;">じゃんけん大会（ミニ）</td></tr>\n    <tr><td style="font-size: 14px; padding: 10px;">21:30</td><td style="font-size: 14px; padding: 10px;">終了です</td></tr>\n  </tbody>\n</table>\n\n<h1>ライトニングトーク</h1>\n\n<p><b style="font-size: 14px;">ライトニングトークに参加して頂ける方を募集します。</b><br>\n<span style="font-size: 14px;">持ち時間はひとり最大10分。<br>フロントエンド関連で発表したい方は是非ご応募ください。</span></p>\n<h1>じゃんけん大会（ミニ）</h1>\n\n<p><span style="font-size: 14px;">ちょっとした景品をご用意しています。<br>\n内容は当日のお楽しみ！</span></p>\n<h1>懇親会</h1>\n\n<p><span style="font-size: 14px;">\nケータリングとドリンクもご用意しています。<br>\n参加費は無料ですので、是非ご参加ください！</span></p>\n<h1>ハッシュタグ</h1>\n\n<p><a href="https://twitter.com/hashtag/prtimes" rel="nofollow"><b style="font-size: 14px;">#prtimes</b></a><br>\n<span style="font-size: 14px;">こちらのハッシュタグをつけて是非tweetしてください！</span></p>\n<h1>PR TIMESって？</h1>\n\n<h2>どんなことをやっているの？</h2>\n\n<p><b style="font-size: 14px;">企業・メディア・生活者をニュースでつなぐPRプラットフォーム「PR TIMES」をはじめとして、様々なプロダクトやメディアを運営しています。</b><br><br>\n<span style="font-size: 14px;">\n-プレスリリース配信サービス「PR TIMES」（ <a href="https://prtimes.jp/" rel="nofollow">https://prtimes.jp/</a> ）の運営<br>\n-広報・PRの効果測定サービス「Webクリッピング」（ <a href="https://webclipping.jp/" rel="nofollow">https://webclipping.jp/</a> ）の運営<br>\n-オンライン上で話題化を図るデジタルPRの戦略立案・実施<br>\n-動画PRサービス「PR TIMES LIVE」（ <a href="https://prtimes.jp/live" rel="nofollow">https://prtimes.jp/live</a> ）「PR TIMES TV」（ <a href="https://prtimes.jp/tv" rel="nofollow">https://prtimes.jp/tv</a> ）の運営<br>\n-カスタマーサポートツール「Tayori」（ <a href="https://tayori.com/" rel="nofollow">https://tayori.com/</a> ）の運営<br>\n-タスク管理ツール「Jooto」（ <a href="https://www.jooto.com/" rel="nofollow">https://www.jooto.com/</a> ）の運営<br>\n-スタートアップニュースメディア「THE BRIDGE」（ <a href="https://thebridge.jp/" rel="nofollow">https://thebridge.jp/</a> ）の運営、等<br>\nURL：<a href="https://prtimes.co.jp/" rel="nofollow">https://prtimes.co.jp/</a>\n</span><br>\n</p><h2>どんな技術を使っているの？</h2>\n<p><span style="font-size: 14px;">Ruby on Rails, PHP, Python, ElasticSearch, node.js, Sass, Gulp, webpack, AWS など。<br>新しい技術の導入にも積極的です。</span></p>\n<h2>PR TIMESでの仕事に興味がある方</h2>\n<p><span style="font-size: 14px;">こちらからご連絡ください。<br>\n<a href="https://prtimes.co.jp/recruit/<br><br>" rel="nofollow">https://prtimes.co.jp/recruit/<br><br></a>\nまずは話してみたい方、気軽に見学したい方も歓迎です！<br>\n<a href="https://www.wantedly.com/companies/prtimes</span></p>" rel="nofollow">https://www.wantedly.com/companies/prtimes</a></span></p><p></p>',
        address: '東京都港区南青山2-27-25 (ヒューリック南青山ビル 3F)',
        catch:
          '『フロントエンド』をテーマにLT会を開催！ ケータリング＋ドリンクで交流会もご用意しています。',
        accepted: 30,
        ended_at: '2019-08-02T21:30:00+09:00',
        place: 'PR TIMES'
      },
      {
        event_url: 'https://folio.connpass.com/event/138324/',
        event_type: 'participation',
        owner_nickname: 'FOLIOscramble',
        series: {
          url: 'https://folio.connpass.com/',
          id: 5356,
          title: 'FOLIO'
        },
        updated_at: '2019-08-02T01:03:08+09:00',
        lat: '35.688295200000',
        started_at: '2019-08-14T19:00:00+09:00',
        hash_tag: 'folioScramble',
        title: 'Scramble! #3 FOLIO流 複雑なドメインとの戦い方',
        event_id: 138324,
        lon: '139.741532100000',
        waiting: 33,
        limit: 50,
        owner_id: 211682,
        owner_display_name: 'FOLIO',
        description:
          '<h1>Scramble! #3 Backend ~FOLIO流 複雑なドメインとの戦い方~</h1>\n<p>「入り混じる」という意味を持つScramble。\n職種やバックグラウンドの垣根なく、多くの人たちが学び、交流する場をつくりたいという思いを込めています。</p>\n<p>第3弾は、Backend編です。</p>\n<p>FOLIOの開発者は Scramble と名状するように、システム開発だけでなく金融商品開発・証券業務に「入り混じりながら」そのドメインに向き合っています。\n特に私たちBackend software engineerは、関係する人々の思いを引き出しながらも、同時にITシステムに携わる実務者として現実的な証券システムを形作ることに尽力しています。<br>\n今回はそんな私たちの開発への取り組み方を大公開します！</p>\n<p>証券システムのつくりかた、気になる方は是非ご参加ください。</p>\n<h1>タイムテーブル</h1>\n<p>会場は4Fです。</p>\n<table>\n<thead>\n<tr>\n<th align="left">時間</th>\n<th align="left">内容</th>\n<th align="left">発表者</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">19:00～</td>\n<td align="left">開場</td>\n<td align="left">−</td>\n</tr>\n<tr>\n<td align="left">19:30～</td>\n<td align="left">会場説明</td>\n<td align="left">−</td>\n</tr>\n<tr>\n<td align="left">19:40～</td>\n<td align="left">session① FOLIO のプロダクト作りとソフトウェアエンジニア</td>\n<td align="left">@Mura-Mi</td>\n</tr>\n<tr>\n<td align="left">20:00～</td>\n<td align="left">session② 明日からはじめられるEventStorming</td>\n<td align="left">@yoskhdia</td>\n</tr>\n<tr>\n<td align="left">20:20～</td>\n<td align="left">休憩</td>\n<td align="left">－</td>\n</tr>\n<tr>\n<td align="left">20:25～</td>\n<td align="left">session③ 本当にはじめられたEventStorming -実践してみて見えたこと-</td>\n<td align="left">@ihcomega</td>\n</tr>\n<tr>\n<td align="left">20:45～</td>\n<td align="left">懇親会</td>\n<td align="left">－</td>\n</tr>\n<tr>\n<td align="left">22:00</td>\n<td align="left">終了</td>\n<td align="left">－</td>\n</tr>\n</tbody>\n</table>\n<h1>session紹介</h1>\n<h2>FOLIO のプロダクト作りとソフトウェアエンジニア /  <a href="https://twitter.com/Mura_Mi" rel="nofollow">@Mura-Mi</a></h2>\n<p>FOLIO は、単体ではコモディティである金融商品を用いてこれまで日本になかった投資サービスを構築し、投資に馴染みのなかった人々へアプローチしようとしています。</p>\n<p>このセッションでは FOLIO ローンチ当時よりサービスを開始した「テーマ投資」プロダクトチームの現在を例に取り、プロダクトを取り巻く人々が職能を越えてどのようにコラボレーションしているか、その中でソフトウェアエンジニアがどのような考え方やテクニックを持ち込んでプロダクトの発展に寄与しているかを紹介します。</p>\n<h2>明日からはじめられるEventStorming　/  <a href="https://twitter.com/yoskhdia" rel="nofollow">@yoskhdia</a></h2>\n<p>EventStormingというモデリング手法があります。\nDDDで著名なEric Evansが言及するなど既に海外では広く認知されつつありますが、まだまだ日本語情報は少ないのが現状です。\nFOLIOでも少しずつ草の根的に活用が広がっているEventStormingについて、その核心と取り組むコツについてご紹介します。</p>\n<p><strong>こんな人におすすめ</strong>  </p>\n<ul>\n<li>EventStormingに興味がある人</li>\n<li>ドメイン実務者との共創を大事にしたい人</li>\n<li>一番小さな！はじめ方を知りたい人</li>\n</ul>\n<h2>本当にはじめられたEventStorming -実践してみて見えたこと- /  <a href="https://twitter.com/ihcomega" rel="nofollow">@ihcomega</a></h2>\n<p>「BtoCのwebサービス」。そのことばから連想される以上に、FOLIOのメンバーが日々向き合っているドメインは複雑なものです。<br>\n守るべき要件、価値をとどけたい相手が多く存在する中、それをいかに実現するか、どのように開発を進めるか。創業以来、ずっと試行錯誤してきました。<br>\nEventStormingもそのひとつです。とあるプロジェクトでやってみたところ、良くなったこと、課題や疑問などが見えてきました。書籍やワークショップでの学びとはまた違う、実践にともなう気付きをFOLIOの取り組みとともにお伝えします。</p>\n<h1>その他</h1>\n<ul>\n<li>Free Wifiを用意しています。</li>\n<li>懇親会終了後速やかに撤収となりますため、後片付けにご協力ください。</li>\n<li>ご都合が悪くなった方は、お早めにキャンセル手続きをお願いします。</li>\n<li>技術交流が目的ですので、採用、営業、政治、選挙、宗教又はこれらに類似する活動はご遠慮下さい。</li>\n<li>参加目的が不適切だと判断される場合には、運営側で参加をキャンセルさせていただく場合がございます。</li>\n<li>イベントの様子を撮影する場合があります。撮影した写真はイベントのPR等の目的でネットに掲載することもありますのであらかじめご了承ください。</li>\n</ul>\n<h1>アンチハラスメントポリシー</h1>\n<ul>\n<li>性別、性的指向、外見、身体的特徴、人種、宗教等に関連した攻撃的又は差別的な発言</li>\n<li>脅迫、ストーキング、つきまとい、不適切な接触、いやがらせ行為</li>\n<li>トークやイベントに対する意図的な妨害行為</li>\n<li>性的な画像の掲示等を含む不適切な情報の開示</li>\n<li>いやがらせを目的とした写真撮影や録画・録音行為</li>\n</ul>',
        address: '〒102-0082　東京都千代田区一番町16-1 共同ビル一番町4F',
        catch: '',
        accepted: 50,
        ended_at: '2019-08-14T22:00:00+09:00',
        place: '株式会社FOLIO'
      },
      {
        event_url: 'https://nuxt-meetup.connpass.com/event/135514/',
        event_type: 'participation',
        owner_nickname: 'KotaMatsumoto',
        series: {
          url: 'https://nuxt-meetup.connpass.com/',
          id: 5338,
          title: 'NuxtMeetup'
        },
        updated_at: '2019-08-01T10:03:09+09:00',
        lat: '35.660448000000',
        started_at: '2019-08-26T19:30:00+09:00',
        hash_tag: 'nuxtmeetup',
        title: 'NuxtMeetUp#9 オールスターズ',
        event_id: 135514,
        lon: '139.729233400000',
        waiting: 0,
        limit: 202,
        owner_id: 50100,
        owner_display_name: 'kotamat',
        description:
          '<h1>概要</h1>\n<p>Nuxt.jsに関する勉強会です。(非公式)</p>\n<p>Nuxt.jsに関して、お酒飲みながらわいわいLTしていきます！</p>\n<p>当日は19:00より受付開始19:30スタートを予定しております。</p>\n<p>LT終了後に懇親会もありますのでぜひご参加ください！</p>\n<p>今回は過去に会場提供等協賛頂いた企業様にLTをしていただく形のものとなっています。</p>\n<h1>参加企業情報（順不同）</h1>\n<h2>株式会社ROXX(旧SCOUTER)</h2>\n<p>人材紹介業むけプラットフォーム「SARDINE」、リファレンスチェックサービス「back check」を運営。　「人の介在価値を最大化させる」ようなプロダクトを作っている。\nすべてのサービスにおいてLaravel + Vue.js + Nuxt.jsの構成でアプリケーションを構築している。\nLaravelやVue.jsに関しての情報発信やイベント主催も行っており、主体的なアウトプットを会社の文化としている。</p>\n<h2>株式会社サイバーエージェント　アドテク本部</h2>\n<p>サイバーエジェントの中でも「エンジニアによる、エンジニアのため」の組織。広告プロダクトや、AI関連事業、その他BtoBプロダクトの開発を行なっている組織。\n少数精鋭で高速開発をしているためフルスタックエンジニアも多数所属しており、最近は新規開発も盛んでサーバーサイドはGolang、フロントはNuxt.js(Vue.js)+TypeScriptの採用が増えてきている。\nフルスタックエンジニアの視点からNuxt.jsについてのあれこれを語ります。</p>\n<h2>株式会社エス・エム・エス</h2>\n<p>2003年創業、2011年東証一部上場。「高齢社会に適した情報インフラを構築することで価値を創造し社会に貢献し続ける」ことをミッションに掲げ、高齢社会を介護・医療・キャリア・ヘルスケア・シニアライフ・海外と捉え、「高齢社会×情報」を切り口にした40以上のサービスを開発・運営しています。</p>\n<h2>株式会社ピースオブケイク</h2>\n<p>ピースオブケイクは "だれもが創作をはじめ、続けられるようにする。"をミッションに、表現と創作の仕組みづくりのため、メディアプラットフォーム・note、コンテンツ配信サイト・cakesを運営しています。サーバーサイドは Ruby on Rails を主体とし、最近では Golang 、フロントエンドは Nuxt.js+TypeScript を採用しています。</p>\n<h2>株式会社メルペイ</h2>\n<p>フリマアプリ「メルカリ」は2次流通市場を中心にモノの流動性のイノベーションを起こし、人々の消費行動の変革につながっていきました。メルペイでは、お金の流動性のイノベーションを起こすことで、新たな価値を、お客さまだけでなく加盟店のみなさまにも提供していきます。Vue.js + Nuxt + TypeScript を用いて、それぞれのWeb開発に フロントエンドチームで取り組んでいます。</p>\n<h2>株式会社ガイアックス</h2>\n<p>「人と人をつなげる」を実現するべく、シェアリングエコノミーやCtoCの領域でのスタートアップを0から創出することに注力しているスタートアップスタジオ「Gaiax STARTUP STUDIO」を組織し活動しています。出資とともに、事業開発・エンジニアリング・バックオフィスの支援も提供しており、そこでスタートアップを取り組むファウンダーから語らせて頂きます！</p>\n<h2>LINE株式会社</h2>\n<p>LINE株式会社は、コミュニケーションアプリ「LINE」を機軸として、コミュニケーション・コンテンツ・エンターテイメントなどモバイルに特化した各種サービスの開発・運営・広告事業に加え、Fintech事業、AI事業を展開しています。\nミッションに「CLOSING THE DISTANCE」を掲げ、世界中の人と人、人と情報・サービスとの距離を縮めることを目指しています。</p>\n<h1>スケジュール</h1>\n<table>\n<thead>\n<tr>\n<th>開始</th>\n<th>終了</th>\n<th>内容</th>\n<th>発表者</th>\n<th>時間</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>19:00</td>\n<td>19:30</td>\n<td>受付</td>\n<td></td>\n<td>0:30</td>\n</tr>\n<tr>\n<td>19:30</td>\n<td>19:35</td>\n<td>はじめの挨拶</td>\n<td>スタッフ</td>\n<td>0:05</td>\n</tr>\n<tr>\n<td>19:35</td>\n<td>19:40</td>\n<td>会場提供者より</td>\n<td>株式会社メルペイ</td>\n<td>0:05</td>\n</tr>\n<tr>\n<td>19:40</td>\n<td>19:45</td>\n<td>飲食提供者より</td>\n<td>株式会社ROXX</td>\n<td>0:05</td>\n</tr>\n<tr>\n<td>19:45</td>\n<td>19:55</td>\n<td>LT枠</td>\n<td>株式会社ROXX</td>\n<td>0:10</td>\n</tr>\n<tr>\n<td>19:55</td>\n<td>20:05</td>\n<td>LT枠</td>\n<td>株式会社サイバーエージェント</td>\n<td>0:10</td>\n</tr>\n<tr>\n<td>20:05</td>\n<td>20:15</td>\n<td>LT枠</td>\n<td>株式会社エス・エム・エス</td>\n<td>0:10</td>\n</tr>\n<tr>\n<td>20:15</td>\n<td>20:25</td>\n<td>LT枠</td>\n<td>株式会社ピースオブケイク</td>\n<td>0:10</td>\n</tr>\n<tr>\n<td>20:25</td>\n<td>20:30</td>\n<td>休憩</td>\n<td></td>\n<td>0:05</td>\n</tr>\n<tr>\n<td>20:30</td>\n<td>20:40</td>\n<td>LT枠</td>\n<td>株式会社メルペイ</td>\n<td>0:10</td>\n</tr>\n<tr>\n<td>20:40</td>\n<td>20:50</td>\n<td>LT枠</td>\n<td>株式会社ガイアックス</td>\n<td>0:10</td>\n</tr>\n<tr>\n<td>20:50</td>\n<td>21:00</td>\n<td>LT枠</td>\n<td>LINE株式会社</td>\n<td>0:10</td>\n</tr>\n<tr>\n<td>21:00</td>\n<td>22:00</td>\n<td>懇親会</td>\n<td></td>\n<td>1:00</td>\n</tr>\n</tbody>\n</table>\n<h1>会場</h1>\n<h2>アクセス</h2>\n<p>株式会社メルカリ 東京支社オフィス\n<a href="https://about.mercari.com/about/" rel="nofollow">東京都港区六本木6-10-1 六本木ヒルズ森タワー18F</a></p>\n<h2>入館方法</h2>\n<p>六本木ヒルズ森タワーのLL階(森ビル受付カウンター付近)に受付カウンターが設置されています。</p>\n<p>その後エスカレーターで1つ上のUL階に移動し、入場ゲート内のエレベーターホールより18Fにお越しください。</p>\n<p>※ 19:00開場、19:30開始の予定です。19:40には受け付けカウンターを撤収します。カウンター撤収後はUL階の六本木ヒルズ総合受付より入館手続きを行うことができます。</p>\n<h1>諸注意</h1>',
        address: '東京都港区六本木6-10-1(六本木ヒルズ森タワー18F)',
        catch: '',
        accepted: 2,
        ended_at: '2019-08-26T22:00:00+09:00',
        place: '株式会社メルカリ'
      },
      {
        event_url: 'https://ginzajs.connpass.com/event/136794/',
        event_type: 'participation',
        owner_nickname: 'jumtech',
        series: {
          url: 'https://ginzajs.connpass.com/',
          id: 7805,
          title: 'Ginza.js'
        },
        updated_at: '2019-07-30T13:32:48+09:00',
        lat: '35.669616300000',
        started_at: '2019-07-30T19:30:00+09:00',
        hash_tag: 'ginzajs',
        title: 'Ginza.js#3',
        event_id: 136794,
        lon: '139.764021900000',
        waiting: 7,
        limit: 157,
        owner_id: 99616,
        owner_display_name: 'jumpei_ikegami',
        description:
          '<p>Ginza.jsは、ミニマルで楽しいJavaScript勉強会です。</p>\n<h2>Ginza.jsについて</h2>\n<p>Ginza.jsは、「主にJavaScript関連技術についての発表や議論を通じた交流を楽しむこと」を目的とした勉強会コミュニティです。</p>\n<h3>目指す価値</h3>\n<ul>\n<li>主にJavaScript関連技術について、様々な人から多様なトピックに関する発表や議論が生まれるようにする</li>\n<li>そのために、開催頻度を高く維持し、なるべく多くの人に発表機会を提供する</li>\n<li>そのために、なるべくイベント形式をシンプルにして、開催コストを最小限にする</li>\n</ul>\n<h3>シンプルさを保つために、なるべくやらないこと</h3>\n<ul>\n<li>参加費を取ったり、お金を管理したりすること</li>\n<li>飲食物をまとめて発注し提供すること</li>\n<li>会場提供以外のスポンサーを募ること</li>\n</ul>\n<h2>タイムテーブル</h2>\n<table>\n<thead>\n<tr>\n<th>時間</th>\n<th>内容</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>19:00</td>\n<td>受付開始</td>\n</tr>\n<tr>\n<td>19:30</td>\n<td>説明</td>\n</tr>\n<tr>\n<td>19:40</td>\n<td>LT</td>\n</tr>\n<tr>\n<td>21:00</td>\n<td>座談会</td>\n</tr>\n<tr>\n<td>21:30</td>\n<td>自由時間</td>\n</tr>\n<tr>\n<td>22:00</td>\n<td>撤収</td>\n</tr>\n</tbody>\n</table>\n<p>※LTのタイトルは、このページ最下部のフィードに投稿されます。</p>\n<h2>LT枠の方へ</h2>\n<ul>\n<li>LT枠は抽選です</li>\n<li>時間は1人当たり5-10分でお願いします</li>\n<li>テーマは、JavaScriptにまつわることであれば自由です</li>\n<li>連絡のために、申込時のアンケートでTwitterアカウントをお教えください</li>\n<li>LTのタイトルが決まった段階で、このページ最下部のフィードに投稿をお願いします</li>\n<li>登壇順は、特に問題なければLTタイトルの投稿がされた順とします</li>\n<li>LT枠で落選した場合も、一般枠での参加は可能です</li>\n</ul>\n<h2>座談会について</h2>\n<ul>\n<li>LT登壇者を囲んで、主にLTの内容に関して座談会の時間を設けます</li>\n<li>質問があれば、この時間に登壇者にぶつけてみましょう</li>\n<li>食事やドリンクの提供はありません</li>\n</ul>\n<h2>会場</h2>\n<p>会場提供スポンサーとして、<a href="https://plaid.co.jp/" rel="nofollow">株式会社プレイド</a>にご協力いただいています。</p>\n<h3>入館方法</h3>\n<ul>\n<li><a href="https://plaid.co.jp/office_guide.html" rel="nofollow">こちらのアクセスガイド</a>をご覧ください<ul>\n<li><strong>※商業エントランスからオフィスには上がれないので、注意してください</strong></li>\n</ul>\n</li>\n<li>時間帯によって、7Fゲートの通過方法が異なります<ul>\n<li>19:00-20:00<ul>\n<li>7Fのイベント用臨時受付で、イベント参加者向けに来訪者カードを配布しています</li>\n</ul>\n</li>\n<li>20:00-21:00<ul>\n<li>7Fのオフィス受付で、警備員さんに通常の来訪者受付をしてもらい、入館してください<ul>\n<li>写真付き身分証か名刺2枚の提示が必要です</li>\n<li>訪問先担当者の氏名を書く欄は、「池上純平」と書いてください</li>\n</ul>\n</li>\n<li>近くに人がいない場合は、受付にある内線電話で警備員さんを呼び出してください</li>\n</ul>\n</li>\n<li>21:00-<ul>\n<li>7Fエレベーターで10Fのボタンを押せないため、基本的には入館ができません</li>\n<li>特別な理由がある場合は、イベント管理者の以下誰かにTwitter等で連絡して迎えに来てもらってください<ul>\n<li><a href="https://twitter.com/jumpei_ikegami" rel="nofollow">https://twitter.com/jumpei_ikegami</a> </li>\n<li><a href="https://twitter.com/yamanoku" rel="nofollow">https://twitter.com/yamanoku</a></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2>注意</h2>\n<h3>イベントについて</h3>\n<ul>\n<li>飲食物の提供はありません。ただし、飲食物の持参および会場での飲食は自由です</li>\n<li>LT枠で落選した場合も、一般枠での参加は可能です</li>\n<li>イベント申込が無い方のイベント参加はできません。ただし、当日申込も可能です</li>\n<li>営業活動や採用のみを目的とした方のご参加はご遠慮ください</li>\n</ul>\n<h3>会場について</h3>\n<ul>\n<li>ソフトドリンクの自動販売機は利用可能です</li>\n<li>喫煙所の用意はありません</li>\n</ul>\n<h3>アンチハラスメントポリシー</h3>\n<p>Ginza.jsでは、アンチハラスメントポリシーを定めています。\nなるべく多くの人が楽しめる場を作るために、イベント参加者全員が以下のポリシーに同意していただく必要があります。\nもちろん、イベント管理者は、ポリシーに則った態度や言動を徹底します。</p>\n<p>ハラスメントには以下のようなものを含みます。また、これらに限りません。</p>\n<ul>\n<li>ジェンダー、性自認やジェンダー表現、性的指向、障碍、容貌、体型、人種、民族、年齢、宗教あるいは無宗教についての攻撃的なコメントをすること</li>\n<li>公共のスペースで性的な画像を掲示すること</li>\n<li>不快な性的アトラクション</li>\n<li>不適切な身体的接触</li>\n<li>脅迫、ストーキング、付きまとい。または、それらを計画すること</li>\n<li>いやがらせ目的の撮影や録音</li>\n<li>発表や他のイベントを継続的に妨害すること</li>\n</ul>\n<p>イベント会場内だけではなく、SNSやブログなどを通じた交流や発信についても、ハラスメント行為がないようにご留意ください。\nハラスメント行為を見聞きした方は、お手数ですがイベント管理者の誰かに直接、またはTwitter DMなどでご連絡ください。\nご協力をお願いします。</p>',
        address: '東京都中央区銀座6-10-1 GINZA SIX 10F',
        catch: '',
        accepted: 57,
        ended_at: '2019-07-30T22:00:00+09:00',
        place: '株式会社プレイド'
      },
      {
        event_url: 'https://gotandajs.connpass.com/event/132152/',
        event_type: 'participation',
        owner_nickname: 'pine613',
        series: {
          url: 'https://gotandajs.connpass.com/',
          id: 1524,
          title: 'Gotanda.js'
        },
        updated_at: '2019-07-26T19:20:58+09:00',
        lat: '35.624021300000',
        started_at: '2019-07-26T19:30:00+09:00',
        hash_tag: 'gotandajs',
        title: 'Gotanda.js #12 in ZEALS',
        event_id: 132152,
        lon: '139.722339000000',
        waiting: 0,
        limit: 40,
        owner_id: 22224,
        owner_display_name: '水音ぴね',
        description:
          '<h1>Gotanda.js (ごたじぇー) とは ?</h1>\n<p>Gotanda.js (ごたじぇー) は五反田を中心に活動する JavaScript ユーザーのコミュニティです。</p>\n<p>五反田近辺の方に限らず、JavaScript に興味がある方なら誰でも参加できます。</p>\n<h2>Slack</h2>\n<p>普段は Slack で JavaScript に関する雑談などをしています。</p>\n<p>下記のリンクから参加できるので、気軽にご参加ください!</p>\n<ul>\n<li><a href="http://gotanda.js.org/#slack" rel="nofollow">http://gotanda.js.org/#slack</a></li>\n</ul>\n<h1>Gotanda.js #12 in ZEALS</h1>\n<p>Gotanda.js #12 は五反田の <a href="https://zeals.co.jp/" rel="nofollow">ZELAS</a> さんで開催させていただけることになりました!</p>\n<h2>会場</h2>\n<ul>\n<li>会場名：株式会社ZEALS オフィス</li>\n<li>住所：〒141-0031 東京都品川区西五反田1−25−1　KANOビル4F</li>\n<li>JR五反田駅より約500m(徒歩5分)</li>\n</ul>\n<h1>LT発表者募集！</h1>\n<p>JavaScript に関連する LT であれば OK です。五反田の方でなくても発表していただいて全然構いません！</p>\n<p>LT 発表者の方は、タイトルが決まり次第イベントページのコメント欄までお願いします!\nちなみに、<a href="https://gotandajs.connpass.com/event/127779/" rel="nofollow">前回のイベントページはこちら</a>です。</p>\n<h1>タイムテーブル</h1>\n<p>LT(5分) × 8枠! 飲食しながら LT する方式です!\nはじめから全力で楽しんで行きましょう!</p>\n<table>\n<thead>\n<tr>\n<th align="left">開始時間</th>\n<th align="left">発表時間</th>\n<th align="left">内容</th>\n<th align="left">発表者</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">19:00</td>\n<td align="left">30 分</td>\n<td align="left">受付開始</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">19:30</td>\n<td align="left">5 分</td>\n<td align="left">会場紹介</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">19:35</td>\n<td align="left">5 分</td>\n<td align="left">開始挨拶 &amp; 乾杯!!</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">19:40</td>\n<td align="left">-</td>\n<td align="left">LT 枠の発表時間は目安です (最大 10 分)</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"></td>\n<td align="left">5 分</td>\n<td align="left">@slack/bolt on firebase cloud functions</td>\n<td align="left"><a href="https://connpass.com/user/Roadagain/" rel="nofollow">Roadagain</a></td>\n</tr>\n<tr>\n<td align="left"></td>\n<td align="left">5 分</td>\n<td align="left">How to use puppeteer</td>\n<td align="left"><a href="https://connpass.com/user/mk120851/" rel="nofollow">mk120851</a></td>\n</tr>\n<tr>\n<td align="left"></td>\n<td align="left">5 分</td>\n<td align="left">React Component in Vue.js</td>\n<td align="left"><a href="https://connpass.com/user/tohashi/" rel="nofollow">tohashi</a></td>\n</tr>\n<tr>\n<td align="left">20:10-</td>\n<td align="left">10 分</td>\n<td align="left">休憩</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"></td>\n<td align="left">5 分</td>\n<td align="left">worker_threadsを使ったライブラリの勘所（仮かも♪）</td>\n<td align="left"><a href="https://connpass.com/user/yo_waka/" rel="nofollow">yo_waka</a></td>\n</tr>\n<tr>\n<td align="left"></td>\n<td align="left">5 分</td>\n<td align="left">既存のVueプロジェクトをTypeScript化した際にやったこと</td>\n<td align="left"><a href="https://connpass.com/user/mizuki_r/" rel="nofollow">mizuki_r</a></td>\n</tr>\n<tr>\n<td align="left"></td>\n<td align="left">5 分</td>\n<td align="left">Migrating to BrowserView in Electron</td>\n<td align="left"><a href="https://connpass.com/user/nekobato/" rel="nofollow">nekobato</a></td>\n</tr>\n<tr>\n<td align="left"></td>\n<td align="left">5 分</td>\n<td align="left">Ma_gician (世界中のフロントエンダーの残業時間を減らす、新しいフロントエンドフレームワーク)</td>\n<td align="left"><a href="https://connpass.com/user/StewEucen/" rel="nofollow">StewEucen</a></td>\n</tr>\n<tr>\n<td align="left">21:00</td>\n<td align="left"></td>\n<td align="left">-</td>\n<td align="left">終了</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>21:00~ 引き続き懇親会 当日飛び込み LT 大歓迎!!</li>\n</ul>\n<h1>参加費について</h1>\n<p>勉強会の参加費として 1,000 円が必要です。当日は、軽食とお酒・ソフトドリンクが出ます。</p>\n<h1>当日の連絡先</h1>\n<p><a href="https://twitter.com/gotandajs" rel="nofollow">@gotandajs</a>まで Twitter でご連絡していただくか、Gotanda.js の <a href="http://gotanda.js.org/#slack" rel="nofollow">Slack</a> をご利用ください。</p>\n<h1>発表者の方へ</h1>\n<ul>\n<li>LT 希望の方は、内容が決まり次第、コメント欄に発表内容を記載してください</li>\n<li>WiFi が使えます</li>\n<li>プロジェクターとマイクがあります</li>\n<li>プロジェクターのアダプタはHDMIとUSB Type-cとVGAがあります</li>\n<li>プレゼンに使うコンピューターはご持参ください</li>\n<li>宣伝や採用に終始する内容の発表はご遠慮ください (少し含む程度は OK)</li>\n</ul>\n<h1>参加者の方へ</h1>\n<ul>\n<li>会場では WiFi が利用できます</li>\n<li>宣伝や採用のみを目的とした方のご参加はご遠慮ください</li>\n</ul>',
        address: '品川区西五反田1−25−1',
        catch: 'Gotanda.js復活から2回目の開催！',
        accepted: 34,
        ended_at: '2019-07-26T22:00:00+09:00',
        place: '五反田KANOビル 4F'
      },
      {
        event_url: 'https://megurots.connpass.com/event/138047/',
        event_type: 'participation',
        owner_nickname: 'dolow',
        series: {
          url: 'https://megurots.connpass.com/',
          id: 8391,
          title: 'Meguro.ts'
        },
        updated_at: '2019-07-26T01:00:07+09:00',
        lat: '35.630623100000',
        started_at: '2019-08-01T19:30:00+09:00',
        hash_tag: 'TypeScript',
        title: 'Meguro.ts v0.0.1',
        event_id: 138047,
        lon: '139.714274500000',
        waiting: 0,
        limit: 56,
        owner_id: 235574,
        owner_display_name: 'dolow',
        description:
          '<p><strong>meguro.css と日程が重複していたため、8/1 にリスケさせていただきました、申し訳ありません！</strong></p>\n<h1>概要</h1>\n<p>Meguro.ts は TypeScript に関する LT 形式の勉強会で、今回がはじめての試みです。</p>\n<p>発表者枠募集中！10分程度です！</p>\n<p>こんな方にオススメ！</p>\n<ul>\n<li>「TypeScript ってなに？おいしいの？」な方</li>\n<li>TypeScript 完全に理解した方</li>\n<li>TypeScript チョットデキル方</li>\n<li>TypeScript 移行への背中を押されたい方</li>\n<li>静的型付けの福音をもたらしたい方</li>\n</ul>\n<p>懇親会の時間も設けておりますので、 情報交換や交流の機会としても是非ご活用ください。</p>\n<h1>会場</h1>\n<p>下記会場にての開催となります。</p>\n<p>株式会社ドリコム　カフェスペース</p>\n<p>東京都 目黒区 下目黒 1-8-1 目黒雅叙園アルコタワー 17F <a href="https://www.wantedly.com/companies/drecom/post_articles/68063" rel="nofollow">アクセス</a></p>\n<p>会場ではゲスト用 Wi-Fi が提供されています。</p>\n<h1>タイムテーブル</h1>\n<table>\n<thead>\n<tr>\n<th>時間</th>\n<th>内容</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>19:00</td>\n<td>受付開始</td>\n</tr>\n<tr>\n<td>19:30~19:40</td>\n<td>前説・乾杯</td>\n</tr>\n<tr>\n<td>19:40~20:50</td>\n<td>LT (10分x6名)</td>\n</tr>\n<tr>\n<td>20:50 ~ 21:50</td>\n<td>懇親会</td>\n</tr>\n</tbody>\n</table>\n<h1>参加費</h1>\n<p>無料</p>\n<h1>写真撮影について</h1>\n<p>当日は会場の写真撮影が入ります。</p>\n<p>スポンサーメディアへの掲載や広報活動を目的とした撮影となります。</p>\n<h1>登壇について</h1>\n<p>登壇希望者様には、事前に登壇内容等をヒアリングさせていただく場合がございます。\n予めご了承ください。</p>\n<h1>その他</h1>\n<p>日程や会場について予告なく変更される場合があります。</p>\n<p>既に抽選申し込み済みの方や登壇者様には事後の連絡となりますので予めご了承ください。</p>',
        address: '東京都目黒区下目黒1丁目8-1',
        catch: 'TypeScript に関する LT イベントです',
        accepted: 26,
        ended_at: '2019-08-01T22:30:00+09:00',
        place: '株式会社ドリコム　カフェスペース'
      },
      {
        event_url: 'https://frokan.connpass.com/event/137261/',
        event_type: 'participation',
        owner_nickname: 'OZPA',
        series: {
          url: 'https://frokan.connpass.com/',
          id: 3852,
          title: 'Frontend de KANPAI!'
        },
        updated_at: '2019-07-19T19:16:05+09:00',
        lat: '35.659024900000',
        started_at: '2019-09-27T19:00:00+09:00',
        hash_tag: 'frokan_uit',
        title: 'FROKAN x UIT #1',
        event_id: 137261,
        lon: '139.703473000000',
        waiting: 0,
        limit: 100,
        owner_id: 104758,
        owner_display_name: 'OZPA',
        description:
          '<h1>イベント概要</h1>\n<p>DeNA主催の「Frontend de KANPAI!」略して「FROKAN」と LINE株式会社主催の「UIT」</p>\n<p>UI 実装に最も近いフロントエンドエンジニアが主催してきた、両社イベント。\nこの度、新しい勉強会のスタイルを実現するべく、コラボイベントを開催いたします！\n第1回は LINE株式会社のフロントエンドエンジニアを DeNA にお招きします。</p>\n<p>フロントエンドエンジニアは、様々な職種のチームメンバーとの、協調力が求められる職種です。\n最新技術だけではなく「コミュニケーション」や「仕事の進め方」など、\nどの様に事業にコミットしているのか、現場の生の声をお届けする予定です。</p>\n<p>2社共催ならではの「差分」を楽しめる勉強会に、ふるってご参加ください。</p>\n<h2>セッション予定</h2>\n<p>DeNA・LINE株式会社より、各1名がトークセッションで登壇します。\nその後、パネルセッションではトークセッション登壇者を交え、開発現場ならではのあるある事例や\n現在の取り組みについて、パネルセッションを合計5名(予定)でお届けします。</p>\n<h4>トークセッション(FROKAN) 15分</h4>\n<p>TBA</p>\n<h4>トークセッション(UIT) 15分</h4>\n<p>TBA</p>\n<h4>パネルセッション(FROKAN x UIT) 30分</h4>\n<p>職種横断でよくある、仕事を進めるうえで直面した問題・克服した方法などをお届けする予定です。\nフロントエンド間のみならず、デザイナー・サーバーサイドエンジニアとの関わりで\n感じている課題感を、応募者のアンケートにて募集します。\n詳細は応募者のアンケートを拝見させていただき、後日決定いたします。</p>\n<h2>タイムテーブル</h2>\n<table>\n<thead>\n<tr>\n<th>時間</th>\n<th>内容</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>19:00</td>\n<td>開場・受付開始</td>\n</tr>\n<tr>\n<td>19:30 - 19:35</td>\n<td>開演のご挨拶</td>\n</tr>\n<tr>\n<td>19:35</td>\n<td>乾杯！</td>\n</tr>\n<tr>\n<td>19:35 - 19:50</td>\n<td>トークセッション(FROKAN)</td>\n</tr>\n<tr>\n<td>19:50 - 20:05</td>\n<td>トークセッション(UIT)</td>\n</tr>\n<tr>\n<td>20:05 - 20:20</td>\n<td>休憩</td>\n</tr>\n<tr>\n<td>20:20 - 20:50</td>\n<td>パネルセッション(FROKAN x UIT)</td>\n</tr>\n<tr>\n<td>20:50 - 21:30</td>\n<td>懇親会</td>\n</tr>\n<tr>\n<td>21:30</td>\n<td>終了</td>\n</tr>\n</tbody>\n</table>\n<p>※当イベントでは、軽食やドリンクを提供します。飲んで食べながら、近くにいる人と交流してみてください。スタッフもフロントエンドエンジニアが多いので、気軽に話しかけてください！</p>\n<h2>その他</h2>\n<h3>持ち物</h3>\n<ul>\n<li>受付票の番号（6ケタ）</li>\n<li>お名刺2枚（セキュリティの都合上）</li>\n<li>年齢確認ができる身分証</li>\n</ul>\n<h3>ご注意</h3>\n<ul>\n<li>FROKAN x UIT は 立食形式 となっております。若干の座席はご用意いたしますが、ご希望に添えない場合があります。予めご了承ください。</li>\n<li>イベントで提供するドリンクには、アルコールも含まれるため、未成年の方の参加はご遠慮ください。</li>\n<li>受付時に年齢確認をさせて頂きます。当日は身分証をご持参くださいますようお願いいたします。</li>\n</ul>\n<h2>これまでの UIT</h2>\n<p><img src="https://user-images.githubusercontent.com/22139818/61525654-d095da80-aa53-11e9-96eb-fe23eb8133d0.jpg">\n<img src="https://user-images.githubusercontent.com/22139818/61525643-cb389000-aa53-11e9-85ca-8427afc77921.jpg"></p>\n<h2>これまでの FROKAN</h2>\n<p><img src="https://design.dena.com/images/report/frokan-6/board.jpg">\n<img src="https://design.dena.com/images/report/frontend-de-kanpai-04/IMG_20180725_203606.jpg"></p>',
        address: '東京都渋谷区渋谷2-21-1 渋谷ヒカリエ',
        catch: '',
        accepted: 0,
        ended_at: '2019-09-27T21:30:00+09:00',
        place: 'DeNA 渋谷ヒカリエ ※受付は11F'
      },
      {
        event_url: 'https://frokan.connpass.com/event/135584/',
        event_type: 'participation',
        owner_nickname: 'yutakam80',
        series: {
          url: 'https://frokan.connpass.com/',
          id: 3852,
          title: 'Frontend de KANPAI!'
        },
        updated_at: '2019-07-19T18:28:14+09:00',
        lat: '35.659024900000',
        started_at: '2019-07-19T19:00:00+09:00',
        hash_tag: 'frokan',
        title: '【増枠】Frontend de KANPAI! #7 - Going on 令和 -',
        event_id: 135584,
        lon: '139.703473000000',
        waiting: 40,
        limit: 140,
        owner_id: 8485,
        owner_display_name: 'yutakam80',
        description:
          '<h1>受付人数を増枠いたしました</h1>\n<p>たくさんのお申し込みをいただき誠にありがとうございます。より多くの方にご参加いただけますよう受付人数の増枠を行いました。 本イベントへの参加受付は抽選となります。先着順ではございませんので、まだまだお申し込みをお待ちしております。 どうぞ宜しくお願い致します！(2019/6/27 11:30)</p>\n<h1>イベント概要</h1>\n<p>今回で第7回目の開催となりました「Frontend de KANPAI!」略して「FROKAN」。</p>\n<p>令和最初のFROKANは「Going on 令和」と題しまして、6名の登壇者によるトークセッションを行います。\nフロントエンドに関する最新情報やプロジェクトで行っている取組みなどを語っていただきます。</p>\n<p>たくさんの方のご参加をお待ちしております。</p>\n<h2>トークセッション (各10分)</h2>\n<ul>\n<li>\n<p><strong>ReactとWebComponentsでVanillaな開発</strong><br>\n<a href="https://hack.nikkei.com" rel="nofollow">日本経済新聞社</a> 宮本 将 さん (<a href="https://twttier.com/azarashd" rel="nofollow">Twitter</a>)</p>\n</li>\n<li>\n<p><strong>事業会社一年目の僕が見たフロントエンド</strong><br>\n<a href="https://dena.com/jp/" rel="nofollow">株式会社ディー・エヌ・エー</a> 柳下 優介 (<a href="https://twitter.com/yagi_suke" rel="nofollow">Twitter</a>)</p>\n</li>\n<li>\n<p><strong>次元を超える事業化集団っぽいフロントエンドの話</strong><br>\n<a href="https://zigexn.co.jp/" rel="nofollow">株式会社じげん</a> 古賀 友輝 さん (<a href="https://twitter.com/gatchan0807" rel="nofollow">Twitter</a>)</p>\n</li>\n<li>\n<p><strong>実録フグ料理</strong><br>\n<a href="https://dena.com/jp/" rel="nofollow">株式会社ディー・エヌ・エー</a> Takepepe (<a href="https://twitter.com/takepepe" rel="nofollow">Twitter</a>)</p>\n</li>\n<li>\n<p><strong>新しい API</strong><br>\n<a href="https://dena.com/jp/" rel="nofollow">株式会社ディー・エヌ・エー</a> feb19 (<a href="https://twitter.com/feb19" rel="nofollow">Twitter</a>)</p>\n</li>\n<li>\n<p><strong>令和にFrontendと向き合う</strong><br>\n<a href="https://roxx.co.jp" rel="nofollow">株式会社ROXX</a> 石岡 将明 さん (<a href="https://twitter.com/masaakikunsan" rel="nofollow">Twitter</a>)</p>\n</li>\n</ul>\n<h2>タイムテーブル</h2>\n<table>\n<thead>\n<tr>\n<th>時間</th>\n<th>内容</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>19:00</td>\n<td>開場・受付開始</td>\n</tr>\n<tr>\n<td>19:30 - 19:35</td>\n<td>開演のご挨拶</td>\n</tr>\n<tr>\n<td>19:35</td>\n<td>乾杯！</td>\n</tr>\n<tr>\n<td>19:35 - 21:05</td>\n<td>6名の登壇者によるトークセッション  (各セッションの間に5分間の休憩があります)</td>\n</tr>\n<tr>\n<td>21:30</td>\n<td>終了</td>\n</tr>\n</tbody>\n</table>\n<p><em>※当イベントでは、軽食やドリンクを提供します。飲んで食べながら、近くにいる人と交流してみてください。スタッフもフロントエンドエンジニアが多いので、気軽に話しかけてください！</em></p>\n<h2>その他</h2>\n<h3>持ち物</h3>\n<ul>\n<li>受付票の番号（6ケタ）</li>\n<li>お名刺2枚（セキュリティの都合上）</li>\n<li>年齢確認ができる身分証</li>\n</ul>\n<h3>ご注意</h3>\n<ul>\n<li>FROKANは 立食形式 となっております。若干の座席はご用意いたしますが、ご希望に添えない場合があります。予めご了承ください。</li>\n<li>イベントで提供するドリンクには、アルコールも含まれるため、未成年の方の参加はご遠慮ください。</li>\n<li>受付時に年齢確認をさせて頂きます。当日は身分証をご持参くださいますようお願いいたします。</li>\n</ul>\n<hr>\n<h1>Frontend de KANPAI! とは</h1>\n<p>「Frontend de KANPAI!」（以下、FROKAN）は、フロントエンドエンジニアやフロントエンドに興味がある人が集い、ドリンク片手にゆるく交流・技術交換ができるコミュニティを目指しています。</p>\n<h2>こんな人におすすめです</h2>\n<ul>\n<li>フロントエンドエンジニア</li>\n<li>マークアップエンジニア</li>\n<li>フロントエンドでないその他の領域が得意なエンジニア</li>\n<li>ウェブデザイナー</li>\n<li>コーディングに関する業務に取り組んでいる方</li>\n<li>これからフロントエンドを勉強したい人</li>\n</ul>\n<h2>これまでのイベント</h2>\n<p><strong>Frontend de KANPAI! #6 - みんなのサービスづくり -</strong></p>\n<p><a href="https://frokan.connpass.com/event/120702/" rel="nofollow">イベントページ</a> / <a href="https://design.dena.com/report/frokan-6/" rel="nofollow">ブログ</a></p>\n<p><img src="https://design.dena.com/images/report/frokan-6/cover.jpg" width="340"><img src="https://design.dena.com/images/report/frokan-6/board.jpg" width="340"></p>\n<p><strong>Frontend de KANPAI! #5 - 2018年わたしはこれにお世話になりました！ -</strong></p>\n<p><a href="https://frokan.connpass.com/event/102946/" rel="nofollow">イベントページ</a></p>\n<p><img src="https://design.dena.com/images/engineering/frokan-6/prev01.jpg" width="340"><img src="https://design.dena.com/images/engineering/frokan-6/prev02.jpg" width="340"></p>\n<p><strong>Frontend de KANPAI! #4 - ものづくりの遊びごころ -</strong></p>\n<p><a href="https://frokan.connpass.com/event/92028/" rel="nofollow">イベントページ</a> / <a href="https://design.dena.com/report/frontend-de-kanpai-04/" rel="nofollow">ブログ</a></p>\n<p><img src="https://design.dena.com/images/report/frontend-de-kanpai-04/IMG_20180725_203606.jpg" width="340"><img src="https://design.dena.com/images/report/frontend-de-kanpai-04/IMG_5734.jpg" width="340"></p>\n<p><strong>Frontend de KANPAI! #03 - フロントエンドからのものづくり -</strong></p>\n<p><a href="https://frokan.connpass.com/event/79568/" rel="nofollow">イベントページ</a> / <a href="https://design.dena.com/report/frontend-de-kanpai-03/" rel="nofollow">ブログ</a></p>\n<p><img src="https://design.dena.com/images/report/frontend-de-kanpai-03/cover.jpg" width="340"><img src="https://design.dena.com/images/report/frontend-de-kanpai-03/techboard.jpg" width="340"></p>\n<p><strong>Frontend de KANPAI! #02 - エンジョイ！フロントエンド -</strong></p>\n<p><a href="https://frokan.connpass.com/event/65990/" rel="nofollow">イベントページ</a> / <a href="https://design.dena.com/report/frontend-de-kanpai-2/" rel="nofollow">ブログ</a></p>\n<p><img src="https://design.dena.com/images/report/frontend-de-kanpai-2/CR9A3739.jpg" width="340"><img src="https://design.dena.com/images/report/frontend-de-kanpai-2/CR9A3749.jpg" width="340"></p>\n<p><strong>Frontend de KANPAI! #01 - これからフロントエンドに求められる力 -</strong></p>\n<p><a href="https://frokan.connpass.com/event/57554/" rel="nofollow">イベントページ</a> / <a href="http://design.dena.com/report/frontend-de-kanpai-第一回お越し頂きありがとうございました/" rel="nofollow">ブログ</a></p>\n<p><img src="https://design.dena.com/images/report/frontend-de-kanpai-第一回お越し頂きありがとうございました/CR9A0551.jpg" width="340"><img src="https://design.dena.com/images/report/frontend-de-kanpai-第一回お越し頂きありがとうございました/zyanken.jpg" width="340"></p>\n<p><em>Organized by DeNA</em></p>',
        address: '\t東京都渋谷区渋谷2-21-1 渋谷ヒカリエ',
        catch: '',
        accepted: 140,
        ended_at: '2019-07-19T21:30:00+09:00',
        place: 'DeNA 渋谷ヒカリエ ※受付は11F'
      },
      {
        event_url: 'https://pwanight.connpass.com/event/136113/',
        event_type: 'participation',
        owner_nickname: 'moongift',
        series: {
          url: 'https://pwanight.connpass.com/',
          id: 7197,
          title: 'PWA Night'
        },
        updated_at: '2019-07-17T18:32:59+09:00',
        lat: '35.669731700000',
        started_at: '2019-07-17T19:00:00+09:00',
        hash_tag: 'pwanight',
        title: 'PWA Night vol.6 ～PWAのミライや活用方法をみんなで考えよう～',
        event_id: 136113,
        lon: '139.763941500000',
        waiting: 20,
        limit: 80,
        owner_id: 14874,
        owner_display_name: 'moongift',
        description:
          '<h1>開催趣旨</h1>\n<p>PWAについて制作・開発会社の中でも関心が高まってきています。いまは主にエンジニア中心に認知が広がっている状況で、本格的なビジネス活用や消費者への浸透はこれから・・・というところかと思います。\nこのPWA勉強会では、エンジニアはもちろん、幅広くPWAに関心をもった有志の方に集まっていただき、PWAの活用方法やPWAのミライについて考えていく会にしたいと思っています。\nまだまだ学びの多い技術、みんなでカジュアルに、フラットに情報交換していきましょう！</p>\n<h1>PWA Nightでやること</h1>\n<p>PWA Nightでは技術に関する話はもちろん、実際にどんな場面で適用できるのか、その時の留意点、顧客への提案方法や、事業への導入方法など、PWAを技術やビジネス面から捉えてコミュニケーションをしたいと考えています。</p>\n<h1>どんな方が対象？</h1>\n<p>プログラマー、デザイナー、ディレクターがメインですが、PWAに興味がある、PWAを使ってみたいという方はぜひぜひご参加ください！</p>\n<p>PWAは新しいWebの流れになります。皆さん、楽しく新しい時代を作りましょう！</p>\n<h1>PWA Nightは毎月第三水曜日に開催します！</h1>\n<h1>対象者</h1>\n<p>PWAに興味を持つ方であればどなたでも！開発もビジネスの話も、PWAに関わる（または興味がある）方であればぜひご参加ください！</p>\n<h1>タイムスケジュール</h1>\n<table>\n<thead>\n<tr>\n<th>時間</th>\n<th>内容</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>19:00</td>\n<td>開場</td>\n</tr>\n<tr>\n<td>19:20</td>\n<td>挨拶&amp;PWA Nightについて</td>\n</tr>\n<tr>\n<td>19:30</td>\n<td>自己紹介（全員）</td>\n</tr>\n<tr>\n<td>19:40</td>\n<td>PWA を Nuxt.js + serverless で本番投入して得たノウハウ・ハマりポイント by 松田さん@収益物件.com</td>\n</tr>\n<tr>\n<td>20:00</td>\n<td>個人でPWA対応の時間管理アプリ「Hackaru」を作りました by @ktmouk さん</td>\n</tr>\n<tr>\n<td>20:20</td>\n<td>休憩</td>\n</tr>\n<tr>\n<td>20:25</td>\n<td>ScrapboxでのServiceWorkerとCacheの活用 by daiiz@Notaさん</td>\n</tr>\n<tr>\n<td>20:45</td>\n<td>LT-1: cyber_snufkin さん！</td>\n</tr>\n<tr>\n<td></td>\n<td>LT-2: moksahero さん！</td>\n</tr>\n<tr>\n<td></td>\n<td>LT-3: setoken06 さん！</td>\n</tr>\n<tr>\n<td>21:05</td>\n<td>懇親会</td>\n</tr>\n<tr>\n<td>21:55</td>\n<td>片付け</td>\n</tr>\n<tr>\n<td>22:00</td>\n<td>終了</td>\n</tr>\n</tbody>\n</table>\n<h1>登壇者</h1>\n<h1>場所</h1>\n<p>株式会社プレイド@GINZA SIX</p>\n<p>会場: 最寄り駅　銀座</p>\n<h2>入館方法</h2>\n<ul>\n<li><a href="https://plaid.co.jp/office_guide.html" rel="nofollow">こちらのアクセスガイド</a>をご覧ください<ul>\n<li><strong>※商業エントランスからオフィスには上がれないので、注意してください</strong></li>\n</ul>\n</li>\n<li>時間帯によって、7Fゲートの通過方法が異なります<ul>\n<li>19:00-20:00<ul>\n<li>7Fのイベント用臨時受付で、イベント参加者向けに来訪者カードを配布しています</li>\n</ul>\n</li>\n<li>20:00-21:00<ul>\n<li>7Fのオフィス受付で、警備員さんに通常の来訪者受付をしてもらい、入館してください<ul>\n<li>写真付き身分証か名刺2枚の提示が必要です</li>\n<li>訪問先担当者の氏名を書く欄は、「株式会社プレイド 池上純平」と書いてください</li>\n</ul>\n</li>\n<li>近くに人がいない場合は、受付にある内線電話で警備員さんを呼び出してください</li>\n</ul>\n</li>\n<li>21:00-<ul>\n<li>7Fエレベーターで10Fのボタンを押せないため、基本的には入館ができません</li>\n<li>特別な理由がある場合は、イベント管理者の以下誰かにTwitter等で連絡して迎えに来てもらってください<ul>\n<li><a href="https://twitter.com/kan_dai" rel="nofollow">https://twitter.com/kan_dai</a></li>\n<li><a href="https://twitter.com/goofmint" rel="nofollow">https://twitter.com/goofmint</a></li>\n<li><a href="https://twitter.com/w_iuc" rel="nofollow">https://twitter.com/w_iuc</a></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2>会場について</h2>\n<ul>\n<li>ソフトドリンクの自動販売機は利用可能です</li>\n<li>喫煙所の用意はありません</li>\n</ul>\n<h1>注意</h1>\n<p>営業、採用などコミュニティ内で嫌がる行為を禁止します。そういった行為を受けた方はすぐに運営までご連絡ください。</p>',
        address: '東京都中央区銀座6-10-1 （GINZA SIX 10F）',
        catch:
          '今後PWAはどうなっていく？技術的・ビジネス的可能性を考え、共有しよう！',
        accepted: 80,
        ended_at: '2019-07-17T22:00:00+09:00',
        place: '株式会社プレイド'
      },
      {
        event_url: 'https://shuuu-mai.connpass.com/event/134981/',
        event_type: 'participation',
        owner_nickname: 'shuuumatu-woeker',
        series: {
          url: 'https://shuuu-mai.connpass.com/',
          id: 6595,
          title: '最新技術のエンジニア勉強会！シューマイ！'
        },
        updated_at: '2019-07-10T15:17:57+09:00',
        lat: '35.656680900000',
        started_at: '2019-07-10T19:30:00+09:00',
        hash_tag: 'shuuumai',
        title: '【シューマイ】Tech Lead Engineerから最新技術を学べ！Vue.js編',
        event_id: 134981,
        lon: '139.697798400000',
        waiting: 7,
        limit: 64,
        owner_id: 219198,
        owner_display_name: 'shuuumatu-worker',
        description:
          '<p><b><font size="5">【重要】参加枠について</font></b></p>\n<hr>\n<p><b>\nこの度皆さまから想定以上のお申し込みを頂いたため、<br>\n締め切りまでに下記アンケートにご回答頂いた方から先着順とさせて頂いております。</b>\n<br><br>\n<b>\n▼参加事前アンケート▼<br>\n回答期限 : 7月4日(木)24:00<br>\n回答時間 : 30秒〜1分程度の簡単なアンケートとなります！<br>\n参加枠 : 60名(前後する可能性がございます)</b><br>\n<a href="https://forms.gle/kbY96zYvhCAskMbX7" rel="nofollow">アンケート回答はコチラ</a><br>\n<br>\nアンケート結果につきましては、<br>\n7/5(金)に下記アドレスよりご連絡させて頂いておりますので、ご確認下さいませ。<br>\nshuuumai@shuuumatu-worker.jp\n<br><br>\n<b>\nなお先着順でご応募が間に合わなかった方も、<br>\n当日お席の許す限り参加可能とさせて頂きますが、定員に達した時点で締め切らせて頂きます...！</b>\n<br><br>\nお申し込み頂いたところ大変恐縮ではございますが、会場規模の都合上、ご理解頂けますと幸いです。\n<br><br><b>\nまた、事前にConnpassのアカウントを掲示できるようご準備頂くと、<br>\nスムーズに受付対応をさせて頂けるかと思いますので、どうぞ宜しくお願い致します！</b><br>\n<br><br>\n<b><font size="5">"シューマイ"とは？</font></b></p>\n<hr>\n<p>本イベントは、“世界をテックリードする日本人エンジニアを多く輩出する”をビジョンに、\n日本のエンジニアのレベルの底上げを目指すコミュニティです！<br>\n最新技術・ハイレベル技術に特化したエンジニアコミュニティを形成し、勉強会・情報交換を行う機会を多く作る。<br>\nそれが、『シューマイ』コミュニティ。<br>\n<br>\n<b><font size="5">イベント概要</font></b></p>\n<hr>\n<p>普段CTOやリードエンジニアとして活躍されている3~4名の方に、<br>\nVue.jsだけでなく、「Vue.js×〇〇」をテーマに、コアでマニアックな技術について熱く語って頂きます！<br>\n最後に懇親会の時間も設けております。※懇親会では本物のシューマイ出します！！<br>\n<br>\n当日ご参加の方にはイベント限定ステッカーのプレゼントもあります。皆様のご参加お待ちしております！<br>\n<br>\n<b>\n【開催日時】7月10日(水) 19:30〜（19:00時開場/受付）<br>\n【会場】東京都渋谷区道玄坂1丁目16-6 二葉ビル3F (JR渋谷駅より徒歩8分)<br>\n【参加費】無料<br>\n【定員】60名<br>\n【持ち物】名刺 ※当日、受付の際に受付票と名刺を確認させていただきます</b><br>\n<br>\n●懇親会について<br>\n発表中に聞けなかった内容について登壇者にご質問いただいたり、<br>\n参加者の皆様同士の交流のお時間に活用していただると幸いです！<br>\n<br>\n●軽食,飲み物について<br>\nシューマイ、軽食、飲物を用意しております\n<br>\n<br>\n●アンケートについて<br>\n今後の参考とさせて頂きたく思っておりますので、イベント終了後にご協力の程宜しくお願い致します！<br>\n<a href="https://forms.gle/Ek44mSKMgXckrZgQ8" rel="nofollow">アンケート回答はコチラ</a><br>\n<br>\n●登壇者へのご質問について<br>\nslidoにて受け付けます。当日改めてご案内させて頂きます。<br>\n<a href="https://www.sli.do/<br>" rel="nofollow">https://www.sli.do/<br></a>\nハッシュタグ #shuuumai<br>\n<br>\n●写真撮影について（弊社広報用）<br>\n1)当日、運営スタッフが会場の雰囲気をカメラ・ビデオにて撮影しております。<br>\n基本的にはご参加いただいた皆様のお顔（正面）が写らないようしたしますが、ご認識の程よろしくお願いいたします。<br>\n<br>\n2)集合写真の撮影を行う予定です。お顔出しの問題が無きようでございましたら、ぜご一緒頂けますと幸いです。<br>\n<br>\n3)懇親会中にお顔が写り込むような写真撮影を行う際には、スタッフより一声お声がけさせていだきます。<br>\n<br>\n【注意事項】<br>\n本会は技術に関わる発展や交流を目的とした会でございます。そのため、営業又は投資勧誘などの行為、飲食目的のご参加は禁止しております。\nこのような行為が見かけられた際には、ご退場および次回以降のご入場をお断りさせていただきます。<br>\n<br>\n<br>\n<b><font size="5">こんな方におすすめのイベントです</font></b></p>\n<hr>\n<p>・『シューマイ』コミュニティのビジョンに共感できる方"<a href="https://shuuu-mai.connpass.com/" rel="nofollow">https://shuuu-mai.connpass.com/</a>" <br>\n・すでに開発現場でVue.jsを駆使している方<br>\n・CTOやリードエンジニアなどのスキルを学びたい方<br>\nなど一歩上をいく技術に興味がある方にオススメです！！<br>\n<br>\n<br>\n<b><font size="5">登壇者</font></b></p>\n<hr>\n<p><b><font size="2">【成瀬 允宣氏＊GMOインターネット株式会社 デベロッパーエバンジェリスト】</font></b><br>\nSIer 業界からゲーム業界を経て、最終的に Web 業界に落ち着きました。<br>\nフロントエンドやバックエンドの開発を行う傍ら、<br>\n社内外問わずセミナーを開催したり、カンファレンスで登壇したりと勢いのままに活動しています。<br>\n<br>\n<u>LTテーマ：Vue.js × Atomic Design - コンポーネント分割の指針</u><br>\nLT概要："コンポーネントをどのような粒度で分割し、どのように実装するべきかというのは難しいテーマです。<br>\n一概に正解があるとも言い切れないテーマですが、この指針を疎かにすることはチームを混乱に陥れることと同義です。<br>\nそれが SPA 未経験のチームであればなおさらです。<br>\n直近のプロジェクトはまさにそんなプロジェクトでした。<br>\n本セッションではアトミックデザインのエッセンスを用いてコンポーネント分割の指針を示し、<br>\nまたコンポーネント実装時に注意すべき事柄についてお話します。"<br>\n<br>\n<br>\n<b><font size="2">【高野 拓貴氏＊外資系IT企業 Software Engineer】</font></b><br>\n1990年生まれ。慶應義塾大学を卒業後、人材系ベンチャー、広告系スタートアップを経て現在は外資系企業にてSoftware Engineerとして勤務。<br>空いた時間で読書家のためのマッチングサービス「MatchLab」開発や副業を行う。得意分野はRails, Vue, React。\n<br>\n<br>\n<u>LTテーマ： Vue/Vuexを限りなくReact/Redux風に書く話</u><br>\nLT概要：本業ではReact/Redux + TypeScript、副業ではVue/Vuexでフロントエンドを開発しています。<br>\n2つのフレームワークを行き来する中で、React/Reduxの書き味を何とかVueに取り込めないかと試行錯誤した話についてお伝えします。<br>\n<br>\n<br>\n<b><font size="2">【鳩 洋子氏＊株式会社プラムザ テクニカルリードエンジニア】</font></b><br>\nフリーランスのフロントエンドエンジニアとして約8年活動。<br>\nMSN、BIGLOBE、Exciteなどのポータルサイトを中心に、ECサイト、企業サイト、LPなど幅広い分野のサイト構築に携わる。<br>\n現在は、フロントエンド、サーバーサイド、インフラを担当するエンジニアとして株式会社プラムザにて約5年勤務。<br>\n株式会社マクアケ様の業務システム開発チームにてリードエンジニアを担当。<br>\n<br>\n<u>LTテーマ：Vue.jsのslotを活用した汎用的コンポーネント設計について</u><br>\nVue.jsのコンポーネントを作り始めると、コンテンツをカスタマイズして使えるコンポーネントを作成したいと思うようになると思います。<br>\nslotを活用すると、HTMLのタグのようにコンテンツを差し替えて使うことができるコンポーネントが手軽に作れます。<br>\nslot、scoped slotを活用した汎用性の高いコンポーネント設計について解説したいと思います。\n<br>\n<br>\n<b><font size="2">【comming-soon...】</font></b><br>\n<u>LTテーマ：...</u><br>\nLT概要：...<br>\n※内容、登壇者は変更になる可能性がございます。予めご了承ください。\n<br>\n<br>\n<b><font size="5">タイムテーブル</font></b></p>\n<hr>\n<table>\n<thead>\n<tr>\n<th align="left">時間</th>\n<th align="left">内容</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">19:00~</td>\n<td align="left">開場・受付開始</td>\n</tr>\n<tr>\n<td align="left">19:30~19:40</td>\n<td align="left">主催者からのご挨拶・当日のプログラムご案内</td>\n</tr>\n<tr>\n<td align="left">19:40~20:40</td>\n<td align="left">登壇者発表タイム〜 ※リアルタイム質疑応答あり！</td>\n</tr>\n<tr>\n<td align="left">20:40~20:50</td>\n<td align="left">写真撮影・主催者からのご挨拶・アンケートご記入</td>\n</tr>\n<tr>\n<td align="left">20:50~21:40</td>\n<td align="left">懇親会 (交流をお楽しみ下さい！）</td>\n</tr>\n<tr>\n<td align="left">21:45</td>\n<td align="left">完全撤収</td>\n</tr>\n</tbody>\n</table>\n<p><br>\n※内容に変更が生じる可能性がございます。予めご了承ください。<br>\n<br>\n<b><font size="5">主催者・お問い合わせ先<font></font></font></b></p><font size="5"><font>\n<hr>\n<p><b>主催：株式会社シューマツワーカー<br></b>\n何かご不明点・ご質問などあれば、以下のアドレスまでご連絡をお願いいたします！<br>\nシューマツワーカーコンシェルジュ\n<a href="mailto:shuuumai_info@shuuumatu-worker.jp">mailto:shuuumai_info@shuuumatu-worker.jp</a>\n<br>\n<br></p></font></font>',
        address: '東京都渋谷区道玄坂1丁目16-6 二葉ビル3F',
        catch: '',
        accepted: 63,
        ended_at: '2019-07-10T22:00:00+09:00',
        place: '二葉ビル3F'
      }
    ],
    results_start: 1,
    results_available: 59
  }
}
