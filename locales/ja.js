export default {
  // META DATA
  nuxtSiteConfig: {
    name: "アークュレーター",
    description: "指定した日付までに確保できる資源を計算し、アークナイツのガチャ予算を管理するツール",
  },
  calendar: "マジックカレンダー",

  // ARKULATOR (HOME) PAGE
  controls: {
    header: "コントロール",
    subtext: "これらのボタンは、指定された項目を除外するために使用します。",
    today: "今日",
    week: "週",
    annih: "殲滅",
    month: "月",
    help: {
      full: "これらの設定はほとんどの計算に影響します。このボタンは、現在の時間に対して指定された項目を除外します。設定が適用されない場合、ボタンは無効になります。",
      today: "今日の報酬（ミッション、月間カード、リクルート、サインイン）に影響します。適用可能な場合、計算は翌日から開始されます。",
      week: "現在の週のオランダムと緑色証書のミッション報酬を除外します。適用可能な場合、計算は次の週から開始されます。",
      annih: "今週の殲滅でのオランダム報酬を除外します。適用可能な場合、計算は次の週から開始されます。",
      month: "今月のショップ報酬を除外します。適用可能な場合、計算は次の月から開始されます。",
    },
    calculations: {
      today: "今日の報酬が除外されました",
      annih: "今週の殲滅報酬が除外されました",
      week: "今週の報酬が除外されました",
      month: "今月の報酬およびショップアイテムが除外されました",
    },
  },
  guaranteed: {
    header: "保証されたリソース",
    subtext: "毎日ログインしてプレイすることでほぼ『保証』される所持品や報酬。",
    monthlycard: "月間カード",
    currentorundum: "現在のオランダム",
    currentpermits: "現在のHH許可証",
    currentprime: "使用するオリジニウムプライム",
    currentshards: "現在のオリジニウムシャード",
    annihilation: "殲滅報酬",
    help: {
      full: "このセクションには、毎日ログインしてプレイすることでほぼ『保証』される所持品と報酬が含まれています。すべての計算は純粋な数学に基づいており、そのため『保証された』セクションと呼ばれます。毎日コンスタントにプレイする限り、これらの計算は100%正確です。",
      monthlycard: "既に月間カードを持っているか、設定された期間中に購入する意思がある場合はこれをチェックしてください。",
      currentorundum: "現在所持しているオランダムを計算に含めます。不必要な場合は空欄のままにします。",
      currentpermits: "現在所持しているヘッドハンティング許可証を計算に含めます。不必要な場合は空欄のままにします。",
      currentprime: "引くためにオリジニウムプライムを使用する場合、計算に含める量を入力します。不必要な場合は空欄のままにします。",
      currentshards: "オリジニウムシャードをオランダムに変換する意思がある場合、変換予定の量を入力します。不必要な場合は空欄のままにします。",
      annihilation: "現在の殲滅報酬を週次のファーミング計算に設定します。週ごとの計算に影響し、現在の週は除外されます。",
    },
    calculations: {
      header: "保証されたリソース",
      monthlycard: "月間カードから",
      currentorundum: "現在のオランダム",
      currentpermits: "現在の許可証",
      currentprime: "オリジニウムプライム交換から",
      currentshards: "オリジニウムシャードから",
      daily: "デイリーミッションから",
      weekly: "ウィークリーミッションから",
      annihilation: "殲滅から",
      loginpermit: "17日ごとのログイン許可証",
    },
  },

  advanced: {
    header: "証書ショップ",
    subtext: "このセクションは、確実に取得できないリソースに関するもので、ある程度の精度で計算可能です。",
    gcs: "推薦証",
    greens: "現在のCC",
    recruits: "毎日のリクルート",
    strategy: "リクルート戦略",
    strategies: {
      minimum: "最小",
      average: "平均",
      maximum: "最大",
    },
    phase: "目標ショップページ",
    gcs_phases: {
      budget: "ページ 1",
      normal: "ページ 2",
    },
    infinite: "無限購入",
    ycs: "区別証",
    yellows: "現在のDC",
    ycsrecs: "リクルートを含めますか？",
    ycsbuys: "購入戦略",
    permitphases: {
      one: "フェーズ 1",
      two: "フェーズ 2 (貪欲)",
      twos: "フェーズ 2 (厳格)",
      three: "フェーズ 3 (貪欲)",
      threes: "フェーズ 3 (厳格)",
      four: "フェーズ 4 (貪欲)",
      fours: "フェーズ 4 (厳格)",
      five: "フェーズ 5 (貪欲)",
      fives: "フェーズ 5 (厳格)",
    },
    rerun: "情報証",
    reruncerts: "現在のIC",
    rerunstock: "在庫のオランダム",
    rerunencounters: "期待される再開催",
    calculations: {
      header: "証書ショップ",
      infinite: "無限購入から",
      greenshoporundum: "推薦証ショップ (オランダム)",
      greenshoppermits: "推薦証ショップ (許可証)",
      yellowshoppermits: "区別証ショップ",
      rerunshop: "再開催から",
      detailed: {
        user_gc: "ユーザーの推薦証",
        recruit_gc: "リクルートの推薦証",
        weekly_gc: "週ミッションの推薦証",
        login_gc: "11日目ログインの推薦証",
        user_yc: "ユーザーの区別証",
        recruit_yc: "リクルートの区別証",
        login_yc: "11日目ログインの区別証",
      },
    },
    help: {
      full: "このセクションは、確実に取得できないリソースに関するもので、ある程度の精度で計算可能です。リクルートなど、いくつかの値は変動する可能性があります。",
      greentab: "推薦証",
      yellowtab: "区別証",
      reruntab: "情報証",
      green: {
        toggle: "推薦証ショップを計算に含めるには、このチェックボックスを切り替えます。",
        buyout: "推薦証を直接オランダムに換算するには、これを有効にします。第三ページへの道は含まれません。",
        current: "現在の推薦証数を入力します。無限購入の場合、必須です。その他の場合、任意です。",
        recruit: "毎日行うリクルート数を入力します。1日6回が上限です。",
        strategy: "リクルート結果に影響します。最小は全て3*、平均は4回ごとに4*、他は3*です。最大は全て4*です。5*と6*はランダムなため含まれません。",
        target: "購入目標を設定します。ページ1は第1ページのみ、ページ2は第1ページ全体と第2ページのHH許可証のみをシミュレートします。",
      },
      yellow: {
        toggle: "区別証ショップを計算に含めるには、このチェックボックスを切り替えます。",
        current: "現在の区別証数を入力します（任意）。",
        recruit: "推薦証ショップと戦略を選択する場合のみ有効です。追加の区別証を計算に含めます（任意）。",
        strategy: "貪欲は迅速に購入し、厳格は節約しながら購入を行います。",
        condition: "例 // 条件：3ヶ月の期間、開始DC - 546、リクルートなし、15DC x3のログイン。",
        exampleone: "貪欲 + フェーズ5では、79 HH許可証が得られ、DCが17残ります。",
        exampletwo: "厳格 + フェーズ5では、76 HH許可証が得られ、DCが45残ります。",
        phases: "フェーズ： #1 - 10 DCで1 HH、#2 - 18 DCで2 HH、#3 - 40 DCで5 HH、#4 - 70 DCで10 HH、#5 - 120 DCで20 HH。合計: 38 HHが258 DC。",
      },
      rerun: {
        toggle: "計算日に情報証がある場合や再開催が期待される場合は、これを切り替えます。",
        current: "現在の情報証数を入力します。通常はオランダム購入に十分な証を獲得できます。",
        stock: "残っているオランダムパック数を入力します。再開催ごとに20パックが追加されます。",
        reruns: "再開催が予想される場合、数を入力します。再開催ごとに20パックが追加されます。",
      },
    },
  },

  maybe: {
    header: "推測",
    subtext: "このセクションは「不安定」な計算用です。",
    lottery: "オランダム抽選",
    standard: "通常/再開催",
    anniversary: "記念イベント",
    collab: "コラボレーション",
    trials: "ナビゲーターの試練",
    story: "ストーリー/エピソード",
    paradox: "パラドックスシミュレーション",
    newannih: "新殲滅作戦",
    shards: "シャード/日",
    sequence: "イベントの順序:",
    event_name: "イベント名",
    event_type: "イベントタイプ",
    use_op: "イベントでのOP使用",
    lottery: "オランダム抽選を含めますか？",
    free_pulls: "無料の抽選を含めますか？",
    calculations: {
      header: "推測",
      paradox: "パラドックスシミュレーション報酬",
      newannih: "殲滅作戦初回報酬",
      shards: "オリジニウムシャードの収集",
      detailed: {
        permits: "イベントストア",
        limited: "限定ヘッドハンティング",
        lottery: "オランダム抽選",
        prime: "OP変換",
      },
    },
    help: {
      full: "このセクションは、「保証」と「証書ショップ」とは異なり、繰り返し計算が難しい要素を含んでいます。予測が難しいため「推測」と呼ばれています。",
      paradox: "パラドックス更新を受けるオペレーター数を入力してください。各パラドックスにつき200オランダムを取得できます。",
      newannih: "最初の3つ（チェルノボーグ、龍門市街、郊外）を除く、新しい殲滅作戦の初回クリアで1500オランダムが得られます。",
      shards: "交換率はシャード2つで20オランダム。交換は2つ単位なので、奇数の場合は切り捨てられます。",
      sequence: "依存するイベントの連鎖を作成できます。各イベントは「計算」セクションに個別に表示され、詳細な統計が提供されます。",
      event_name: "デフォルトで「イベント#(連鎖内の番号)」と名付けられますが、読みやすさのため変更できます。表示にのみ影響します。",
      event_type:
        "抽選付きのイベントタイプは4種類のみ。デフォルトではイベントストアのヘッドハンティング許可証が割り当てられます（ストーリー/エピソードを除く）。ナビゲーターの試練では許可証1つのみが得られ、他のフィールドは無効になります。",
      use_op:
        "イベント中に獲得できるOPを消費したい場合は、その数を入力します。1週間イベント（ストーリーイベント）は14-18OP、2週間イベント（通常イベントやコラボ）は27-30OP、3週間イベント（記念イベントなど）は38-41OPです。エピソードは個別に確認してください。",
      lottery: "オランダム抽選は7000オランダムを追加します。500は14日間の抽選（200から800の範囲）の平均です。ピティ（救済措置）は考慮されていません。",
      free_pulls:
        "詳細統計でオレンジ色で示される限定ヘッドハンティングを思い出してください。記念イベントでは初回ログインで10連引き、14日間の1回無料で合計24回。コラボでは初回ログインで10連引き、7-8日目にもう1回10連引きが可能で合計20回です。",
    },
  },

  hopium: {
    header: "追加の希望",
    subtext: "このセクションは、ランダムなボーナスで追加のガチャを得られる可能性をカバーします。いつどれくらい得られるか分からないので、情報だけ提供します。",
    1: "メンテナンス補償",
    2: "メール配布（いくつかの実績やイベント用）",
    3: "コード（システムはありますが、まだ誰もあまり使っていません…）",
    4: "ウェブイベント",
    5: "Discordイベントと競技報酬（もちろん参加した場合）",
    6: "ドネーション（お疲れ様です、ホエールドクター）",
    7: "HH許可証を購入するための重複分のDC",
  },

  budget: {
    header: "予算",
    subtext: "予算を管理する",
    operator_field: "オペレーター",
    banner_type: "バナータイプ",
    banner_standard: "通常/カーネル",
    banner_collab: "コラボレーション",
    banner_anniversary: "アニバーサリー",
    banner_joint: "合同作戦",
    banner_debut: "デビュー",
    banner_special: "スペシャル",
    pulls_expected: "予想されるガチャ回数",
  },

  calculations: {
    header: "計算",
    days: "日数：{days}",
    weeks: "週数：{weeks}",
    months: "月数：{months}",
    subtotal: "小計：{pulls}",
    total: "総ガチャ回数：{pulls}",
  },

  help: {
    modaltitle: "ヘルプ",
  },

  // SIDEBAR MENU
  menu: {
    home: "アークュレーター",
    wiki: "知識",
    contact: "連絡先",
    changelog: "更新履歴",
  },

  // KNOWLEDGE (WIKI) PAGE
  wiki: {
    basics: {
      legend: "基本情報",
      header: "ガチャに使用される4つの通貨があります：",
      or: "オランダム",
      op: "純正原石",
      hh: "スカウト許可証",
      rm: "リアルマネー",
    },

    headhunt: {
      legend: "スカウト許可証",
      header: "推しキャラや超強力なキャラ（またはほとんどの場合はがっかり）を狙うための貴重なチケット。3種類あります：",

      regular: "スカウト許可証",
      regularsub: "初期の許可証。どこでも使用可能で、有効期限はありません。",
      regular_content: {
        1: "毎月17日目のログインで1枚配布。",
        2: "グリーンサートショップ：480CCで2枚、900CCでさらに2枚が毎月入手可能。",
        3: "イエロースートショップ：最大38枚を258DCで毎月入手可能。",
        4: "通常、記念日、コラボイベント、および復刻イベントでは、150イベント通貨でイベントショップに3枚入手可能。",
        5: "Navigatorの試練：レベル15で1枚配布。",
        6: "ログインイベント：時々配布されるが、常にではない。",
        7: "ウェブイベント：非常にまれに提供されるため、確実ではない。",
        8: "ストア購入：現地通貨で購入可能。ただし、特別なイベントパックを除き、通常はOPを購入する方が良い。",
        9: "ストアパック：一部にスカウト許可証が含まれていることがあります。",
      },

      kernel: "カーネルスカウト許可証",
      kernelsub: "カーネルバナーでのみ使用可能。オペレーターからはブルーサートのみが得られ、有効期限はありません。",
      kernel_content: {
        1: "ブルーサートショップで入手可能：最大38枚を2580ブルーサートで毎月入手可能。",
        2: "イエロースートショップで入手可能：最大38枚を216DCで毎月入手可能。",
        3: "メールやログインイベントで時折配布される。",
      },

      exclusive: "限定スカウト許可証",
      exclusivesub: "特定のバナーに関連し、バナーが終了すると期限切れになります。",
      exclusive_content: {
        1: "記念日で24枚配布（ログインで10枚 + 1日ごとに1枚）、コラボで20枚配布（ログインで10枚、7～8日目に10枚）。",
        2: "ストア購入（バベル以降）：限定で2枚と10枚が一度だけ購入可能。",
      },
    },

    general: {
      legend: "一般的なアドバイス",
      header: "長年にわたりコミュニティが実証してきたヒントの集大成。",
      1: "HGは毎年の記念日にOPのダブルお得パックをリセットします。",
      2: "イエロースートを最大化するには、258DCで38枚のスカウト許可証をまとめて購入するのが最適です。",
      3: "月間カードはストアで最もお得な選択肢で、最大90日間購入可能です。",
      4: "記念イベントの終了時には、特別な5*キャラにスパークを使うのが賢明です。特にそのキャラがほぼ限界突破済みなら、5*の複製で多くのイエロースートを得られます。",
      5: "180DCでのショップオペレーターは、ガチャを引くよりもお得です。180DCは約18回分のガチャに相当し、確実に入手できます。",
      6: "予算が限られている場合でも、記念イベントで挑戦したい場合は最終日まで待つのが良いでしょう。これで、すべての無料引きや、オランダムくじ、ログインイベント、イベントショップからの結果が得られます。",
      7: "特別なバナーには専用の天井があり、通常バナーの引き数は反映されません。",
      8: "コラボバナーの天井は120回引きで、20回の無料引きが含まれるため、100回の引きで十分です。",
      9: "記念バナーの天井は300回引きで、24回の無料引き + オランダムくじから約11回分が得られるため、約265回の引きが必要です。",
      10: "レートアップは信じないほうがいいです。",
    },

    orundum: {
      legend: "オランダム",
      header: "ドクターが最もよく使うリソースで、さまざまな入手方法があります。",
      1: "デイリーミッションで100オランダムが得られます。",
      2: "ウィークリーミッションで500オランダムが得られます。",
      3: "月間カードで毎日200オランダムが得られます（ログイン必須）。",
      4: "殲滅作戦の周回で毎週1200～1800オランダムが得られます。新規プレイヤーは1200から始まり、最初の3つの殲滅作戦マップで段階的に増加します。",
      5: "初回の殲滅作戦達成で各マイルストーンごとに合計1500オランダムが得られます（最初の3つの殲滅作戦を除く）。",
      6: "パラドックスシミュレーションの報酬として200オランダムが得られます。",
      7: "オリジニウムプライムの交換レートは1OP=180オランダムです。",
      8: "オリジニウムシャードの交換レートは2シャード=20オランダム（ペアのみで交換可能）。",
      9: "知性証明の交換レートは20IC=100オランダムです。毎回の復刻で2000オランダムと約1700ICが追加されます。",
      10: "グリーンスートショップ：240CCで600オランダム、50CCで無制限に100オランダムを入手可能。",
      11: "連続ログイン報酬：HGが時折オランダムをメールで送信します。",
      12: "メンテナンス補填：短期間のメンテナンスで通常200オランダムが得られます。",
      13: "記念イベントのオランダムくじ：およそ14日間続き、平均で約7000オランダムが得られます（結果は変動）。",
      14: "ログインイベント：時折オランダムが含まれます。",
      15: "Webイベント：まれにオランダムが提供されることがあります。",
      16: "ストアパック：一部にはオランダムが含まれています。",
    },

    prime: {
      legend: "オリジニウムプライム",
      header: "希少な輝く石で、入手と消費方法が限られています。スキン、理性回復、ガチャに使えます。新規プレイヤーはプロパックに使用することが多く、一部は家具に使うことも。",
      1: "初回3つ星マップクリア：通常マップで1 OP、チャレンジモードでさらに1 OPが得られます。インタールードとチュートリアルで1 OPを獲得。",
      2: "メンテナンス補填：長時間のメンテナンスで通常5 OPが支給されます。",
      3: "月間カード：購入ごとに6 OPが得られます（90日間の購読制限）。",
      4: "ログインイベント：時折OPが配布されますが、通常2個以下です。",
      5: "Webイベント：まれにOPが配布されることがあります。",
      6: "ストア購入：地域通貨で1 OPから購入可能。",
      7: "ストアパック：一部のパックにOPが含まれています。",
    },

    money: {
      legend: "リアルマネー",
      header: "ベストな取引は地域通貨レートによりますが、以下に一般的なガイドラインを示します。",
      subheader: "ダブルディールは一度限りの購入です。以下の計算は通常の取引に基づいています。",
      pulls: "ガチャ引き回数",
      ppulls: "1回あたり",
      sanity: "フル理性",
      psanity: "1回のリフレッシュあたり",
      calculate: "経費を計算する",
      ending: "特別イベントパック、記念パック、その他の一度限りの取引は、独自の価値が加わるため、ガチャ引き数で計算するのが難しいです。ほとんどが記念イベント中やイベントごとに一度だけ利用可能です。",
    },
  },

  // CONTACT FORM
  contact: {
    form: {
      legend: "お問い合わせフォーム",
      email: "メール",
      message: "メッセージ",
      message_placeholder: "またしても騙された気分",
      files: "添付ファイル",
      files_help: "画像またはPDFのみ",
      submit: "送信",
      type: "メッセージタイプ",
      type_placeholder: "トピックを選択",
      types: {
        1: "バグ",
        2: "翻訳",
        3: "リクエスト",
        4: "サポート",
        5: "その他",
      },
    },

    notice: {
      1: "* の付いている項目は必須です。",
      2: "返信が不要な場合、メールは任意です。",
      3: "以下の言語でご記入ください：英語、セルビア語、ウクライナ語、またはロシア語。他の言語は自動翻訳されます。",
      4: "返信は、メッセージの言語に関係なく英語で行われます。",
      5: "アーキュレーターは非英語版の翻訳にGPTを使用しています。翻訳に問題がある場合はご報告ください。",
    },

    her_highness: {
      legend: "テレサ殿下のご威光",
      message: "このアプリはテレサ殿下の忠実な支持者によって作られました。お問い合わせ中も殿下のご臨在をお楽しみください。",
    },

    socials: {
      legend: "ソーシャルメディア",
      tg: "テレグラム",
      ds: "ディスコード",
    },
  },

  // FOOTER
  footer: {
    hard_truth: "失業と過剰な自由時間に支援されています。",
  },
};
