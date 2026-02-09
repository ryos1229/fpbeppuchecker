const defaultBanksData = [
    {
        name: "三菱UFJ銀行",
        criteria: {
            contract: { status: "conditional", label: "3年", details: "勤続3年以上かつ前前年度年収200万円以上目安。団信加入必須。" },
            dispatch: { status: "conditional", label: "3年", details: "同一派遣先3年以上目安。正社員に準ずる審査。" },
            part_time: { status: "ng", label: "×", details: "原則不可。収入合算者としてもハードルが高い。" },
            leave: { status: "ok", label: "○", details: "産前産後・育休中でも申込可。会社規模により制限あり。" },
            tenure: { status: "standard", label: "1年", details: "原則1年以上。大手企業間や同業種転職なら考慮あり。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。日本語能力が必要。" },
            self_employed: { status: "standard", label: "3期", details: "3期分確定申告が必要。所得安定性と公租公課の未納なきこと。" },
            land_build_split: { status: "ok", label: "○", details: "分割実行（土地先行融資）に対応。最大4回。" },
            build_split: { status: "ok", label: "○", details: "着工金・中間金等への分割融資が可能。" },
            bridging: { status: "conditional", label: "紹介", details: "提携会社によるつなぎ融資の紹介が可能。" },
            defer_order: { status: "ok", label: "○", details: "建物完成まで最大1年間の元金据置が可能。" },
            sale_loss: { status: "ok", label: "○", details: "住み替え時に売却損を含めた借入に対応。" },
            defer_replace: { status: "ok", label: "○", details: "住み替え時に最大1年の元金据置が可能。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "ペアローン向け連生団信あり。" }
        }
    },
    {
        name: "三井住友銀行",
        criteria: {
            contract: { status: "conditional", label: "3年", details: "勤続3年以上かつ前年収300万円以上目安。更新見込み重視。" },
            dispatch: { status: "ng", label: "×", details: "ネット申込不可。店舗相談でも非常に厳しい。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "育休中でも単独申込可。会社規模により制限あり。" },
            tenure: { status: "standard", label: "1年", details: "勤続1年以上。転職後すぐでも個別に検討可能。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "strict", label: "3期", details: "3期分申告要。平均所得または最低所得で算出。" },
            land_build_split: { status: "ok", label: "○", details: "分割実行（土地先行）に対応。" },
            build_split: { status: "ok", label: "○", details: "着工・中間金への分割実行に対応。" },
            bridging: { status: "ok", label: "○", details: "自社または提携の「つなぎローン」を提供。" },
            defer_order: { status: "ok", label: "○", details: "建物完成まで元金据置が可能。" },
            sale_loss: { status: "ok", label: "○", details: "住み替えローンで売却損をカバー。" },
            defer_replace: { status: "ok", label: "○", details: "対応。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "クロスサポート（連生団信）あり。" }
        }
    },
    {
        name: "みずほ銀行",
        criteria: {
            contract: { status: "conditional", label: "3年", details: "3期分の収入証明が必要。3年以上推奨。" },
            dispatch: { status: "ng", label: "×", details: "原則不可。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "育休中でも申込可。単独より合算推奨。" },
            tenure: { status: "standard", label: "1年", details: "1年以上目安。大手・公務員なら緩和。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "3期", details: "3期分必要。" },
            land_build_split: { status: "ok", label: "○", details: "分割融資に対応。" },
            build_split: { status: "ok", label: "○", details: "段階的融資が可能。" },
            bridging: { status: "ok", label: "○", details: "つなぎローンあり。" },
            defer_order: { status: "conditional", label: "相談", details: "個別相談。" },
            sale_loss: { status: "ok", label: "○", details: "住み替え時に残債を考慮可能。" },
            defer_replace: { status: "conditional", label: "相談", details: "個別相談。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "ペア一般団信・ペアがん団信あり。" }
        }
    },
    {
        name: "りそな銀行",
        criteria: {
            contract: { status: "conditional", label: "1年", details: "勤続1年以上で申込対象。更新予定重視。" },
            dispatch: { status: "conditional", label: "1年", details: "同一派遣先1年以上なら相談可。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "育休中でも申込・実行可。復職後の見込み収入審査。" },
            tenure: { status: "short_ok", label: "無制限", details: "勤続1年未満でも申込可。属性により審査。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "3期", details: "3期分必要。" },
            land_build_split: { status: "ok", label: "○", details: "分割融資に対応。" },
            build_split: { status: "ok", label: "○", details: "分割融資に対応。" },
            bridging: { status: "ok", label: "○", details: "自社/提携つなぎ融資あり。" },
            defer_order: { status: "ok", label: "○", details: "建物完成まで元金据置が可能。" },
            sale_loss: { status: "ok", label: "○", details: "りそな住みかえローンで対応。" },
            defer_replace: { status: "ok", label: "○", details: "住み替え時に1年据置可。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "ペアローン団信（どちらかに万一で全額保障）あり。" }
        }
    },
    {
        name: "住信SBIネット銀行",
        criteria: {
            contract: { status: "conditional", label: "可", details: "申込可だが属性を総合判断。" },
            dispatch: { status: "conditional", label: "可", details: "申込可。安定性が重視される。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "育休中でも申込可。復職証明が必要。" },
            tenure: { status: "short_ok", label: "無制限", details: "勤続年数の制限なし。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "2期", details: "2期分の確定申告が必要。" },
            land_build_split: { status: "ok", label: "○", details: "土地先行プランあり。" },
            build_split: { status: "ok", label: "○", details: "分割融資可能。" },
            bridging: { status: "ok", label: "○", details: "土地先行プランまたは提携つなぎ（アプラス）。" },
            defer_order: { status: "ng", label: "×", details: "-" },
            sale_loss: { status: "conditional", label: "相談", details: "専用商品なし。" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "ペア連生団信（デュエット）。" }
        }
    },
    {
        name: "auじぶん銀行",
        criteria: {
            contract: { status: "conditional", label: "200万", details: "前年度年収200万円以上必須。" },
            dispatch: { status: "conditional", label: "200万", details: "前年度年収200万円以上必須。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "育休中でも申込可。" },
            tenure: { status: "short_ok", label: "無制限", details: "勤続年数足切りなし。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "200万", details: "申告所得200万円以上必須。" },
            land_build_split: { status: "ng", label: "一括", details: "建物完成時の一括実行のみ。" },
            build_split: { status: "ng", label: "×", details: "非対応。" },
            bridging: { status: "ok", label: "○", details: "提携（とうこうブリッジローン）を利用。" },
            defer_order: { status: "ng", label: "×", details: "-" },
            sale_loss: { status: "ok", label: "○", details: "住み替え時に借入可。" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "ペアローン連生団信あり。がん保障が強力。" }
        }
    },
    {
        name: "ソニー銀行",
        criteria: {
            contract: { status: "ng", label: "×", details: "原則不可。" },
            dispatch: { status: "ng", label: "×", details: "原則不可。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "ペアローンの相手方としてなら育休中も可。" },
            tenure: { status: "short_ok", label: "無制限", details: "勤続制限なし。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "strict", label: "400万", details: "所得400万円以上（3期平均または前年低い方）。" },
            land_build_split: { status: "ng", label: "一括", details: "完成時一括。土地代金のみの実行なし。" },
            build_split: { status: "ng", label: "×", details: "非対応。" },
            bridging: { status: "ok", label: "○", details: "提携他社のつなぎ融資を紹介。" },
            defer_order: { status: "ng", label: "×", details: "-" },
            sale_loss: { status: "conditional", label: "相談", details: "個別対応。" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "conditional", label: "相談", details: "ペアローン可能だが連生団信ではない。" }
        }
    },
    {
        name: "イオン銀行",
        criteria: {
            contract: { status: "conditional", label: "6ヶ月", details: "勤続6ヶ月以上かつ社保加入なら対象。" },
            dispatch: { status: "conditional", label: "6ヶ月", details: "勤続6ヶ月以上かつ社保加入なら対象。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "育休中でも復職予定あれば可。" },
            tenure: { status: "short_ok", label: "6ヶ月", details: "勤続6ヶ月以上あれば審査対象。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "3期", details: "3期分申告、所得100万円以上。" },
            land_build_split: { status: "ok", label: "○", details: "土地先行住宅ローンあり。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "独自のつなぎ融資あり。" },
            defer_order: { status: "ok", label: "○", details: "「安心プラス」で最大5年の元金据置可（返済中も可）。" },
            sale_loss: { status: "ok", label: "○", details: "買換時に対応可能。" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "夫婦連生団信あり。" }
        }
    },
    {
        name: "楽天銀行",
        criteria: {
            contract: { status: "conditional", label: "2年", details: "原則勤続2年以上（フラット35なら不問）。" },
            dispatch: { status: "conditional", label: "2年", details: "原則勤続2年以上（フラット35なら不問）。" },
            part_time: { status: "ng", label: "×", details: "原則不可（フラット35なら可）。" },
            leave: { status: "ok", label: "○", details: "育休中でも申込可。" },
            tenure: { status: "standard", label: "1年", details: "原則1年以上。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "strict", label: "400万", details: "申告所得400万円以上。" },
            land_build_split: { status: "ok", label: "○", details: "つなぎ融資により複数回実行可。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "独自のつなぎローン（最大3回）。" },
            defer_order: { status: "ng", label: "×", details: "-" },
            sale_loss: { status: "ng", label: "×", details: "-" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "夫婦連生/ペア連生団信あり。" }
        }
    },
    {
        name: "三井住友信託銀行",
        criteria: {
            contract: { status: "conditional", label: "1年", details: "更新後1年以上なら相談可。" },
            dispatch: { status: "ng", label: "×", details: "基本対象外。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "育休中も可。元金据置サービスあり。" },
            tenure: { status: "strict", label: "1年", details: "原則1年以上。属性に一定の厳格さあり。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "strict", label: "3期", details: "3期分申告要。" },
            land_build_split: { status: "ok", label: "○", details: "分割借入が可能。" },
            build_split: { status: "ok", label: "○", details: "分割融資可能。" },
            bridging: { status: "ok", label: "○", details: "注文住宅向けつなぎ融資あり。" },
            defer_order: { status: "ok", label: "○", details: "育休中の元金据置が可能。" },
            sale_loss: { status: "conditional", label: "相談", details: "個別。" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "ペアローン連生団信あり。" }
        }
    },
    {
        name: "SBI新生銀行",
        criteria: {
            contract: { status: "conditional", label: "300万", details: "前年度年収300万円以上必須。" },
            dispatch: { status: "ng", label: "×", details: "原則不可。合算のみ考慮の余地。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "conditional", label: "要相談", details: "個別に相談。" },
            tenure: { status: "short_ok", label: "無制限", details: "転職直後でもオファーレター等で柔軟審査。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須（ない場合は配偶者保証）。" },
            self_employed: { status: "strict", label: "2年", details: "業績2年以上。所得300万円以上。" },
            land_build_split: { status: "ok", label: "○", details: "建物完成時融資だが、アプラスつなぎ併用で対応。" },
            build_split: { status: "ok", label: "○", details: "つなぎ融資併用にて対応。" },
            bridging: { status: "ok", label: "○", details: "アプラス等によるつなぎ融資を紹介。" },
            defer_order: { status: "ok", label: "○", details: "「コントロール返済」により元金支払いを休止可能。" },
            sale_loss: { status: "ok", label: "○", details: "借換/住み替え時に対応。" },
            defer_replace: { status: "ok", label: "○", details: "可能。" },
            equal_principal: { status: "ng", label: "×", details: "-" },
            joint_insurance: { status: "ok", label: "○", details: "ペア連生団信あり。" }
        }
    },
    {
        name: "横浜銀行",
        criteria: {
            contract: { status: "conditional", label: "相談", details: "単独厳格。合算推奨。" },
            dispatch: { status: "ng", label: "×", details: "原則不可。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "育休中も可。個別判断。" },
            tenure: { status: "standard", label: "1年", details: "1年以上目安。" },
            foreigner: { status: "conditional", label: "相談", details: "永住権推奨。" },
            self_employed: { status: "standard", label: "3期", details: "3期分必要。" },
            land_build_split: { status: "ok", label: "○", details: "分割融資（4回まで）に対応。" },
            build_split: { status: "ok", label: "○", details: "分割融資対応。" },
            bridging: { status: "ng", label: "×", details: "分割融資で対応。" },
            defer_order: { status: "conditional", label: "相談", details: "個別に相談。" },
            sale_loss: { status: "ok", label: "○", details: "「買い替えローン」あり。" },
            defer_replace: { status: "conditional", label: "相談", details: "個別相談。" },
            equal_principal: { status: "conditional", label: "相談", details: "窓口相談。" },
            joint_insurance: { status: "ok", label: "○", details: "疾病保障充実。" }
        }
    },
    {
        name: "静岡銀行",
        criteria: {
            contract: { status: "conditional", label: "3年", details: "原則3年以上。" },
            dispatch: { status: "conditional", label: "3年", details: "原則3年以上。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "conditional", label: "相談", details: "個別相談。" },
            tenure: { status: "strict", label: "3年", details: "原則3年以上。正社員でも他行より厳格。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "3期", details: "3期分。所得100万円以上。" },
            land_build_split: { status: "ok", label: "○", details: "分割融資に対応。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "つなぎ融資あり。" },
            defer_order: { status: "ng", label: "×", details: "-" },
            sale_loss: { status: "ok", label: "○", details: "対応。" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ng", label: "×", details: "-" },
            joint_insurance: { status: "ok", label: "○", details: "ペア/連生団信提供。" }
        }
    },
    {
        name: "千葉銀行",
        criteria: {
            contract: { status: "conditional", label: "3年", details: "原則3年以上。" },
            dispatch: { status: "conditional", label: "3年", details: "原則3年以上。" },
            part_time: { status: "conditional", label: "合算", details: "合算者としてなら相談可。" },
            leave: { status: "ok", label: "○", details: "育休中の元金据置が可能。" },
            tenure: { status: "standard", label: "1年", details: "原則1年以上。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "strict", label: "3期", details: "3期分申告要。" },
            land_build_split: { status: "ok", label: "○", details: "分割融資に対応。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "つなぎ融資対応。" },
            defer_order: { status: "ok", label: "○", details: "最大2年の元金据置（育休等）が可能。" },
            sale_loss: { status: "ok", label: "○", details: "対応。" },
            defer_replace: { status: "ok", label: "○", details: "対応。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "連生がん団信あり。" }
        }
    },
    {
        name: "群馬銀行",
        criteria: {
            contract: { status: "conditional", label: "1年", details: "勤続1年以上推奨。" },
            dispatch: { status: "ng", label: "×", details: "原則不可。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "ok", label: "○", details: "相談可。" },
            tenure: { status: "standard", label: "1年", details: "原則1年以上。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "3期", details: "3期分申告。" },
            land_build_split: { status: "ok", label: "○", details: "分割融資に対応。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "つなぎ融資あり。" },
            defer_order: { status: "conditional", label: "相談", details: "個別相談。" },
            sale_loss: { status: "ok", label: "○", details: "対応。" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "可。" }
        }
    },
    {
        name: "JAバンク",
        criteria: {
            contract: { status: "conditional", label: "1年", details: "各JAにより異なるが、概ね勤続1年以上。" },
            dispatch: { status: "conditional", label: "1年", details: "相談可。雇用実態重視。" },
            part_time: { status: "conditional", label: "相談", details: "合算なら相談可。" },
            leave: { status: "ok", label: "○", details: "対面相談で柔軟対応。" },
            tenure: { status: "standard", label: "1年", details: "原則1年以上（各JAに拠る）。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権推奨。" },
            self_employed: { status: "flexible", label: "柔軟", details: "組合員資格等を含め、地元業歴があれば柔軟。" },
            land_build_split: { status: "ok", label: "○", details: "分割融資に対応。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "つなぎ/予約融資あり。" },
            defer_order: { status: "ok", label: "○", details: "相談により対応。" },
            sale_loss: { status: "ok", label: "○", details: "対応。" },
            defer_replace: { status: "ok", label: "○", details: "対応。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "可。" }
        }
    },
    {
        name: "中央労金",
        criteria: {
            contract: { status: "conditional", label: "1年", details: "同一勤務先1年以上、年収150万円以上目安。" },
            dispatch: { status: "conditional", label: "1年", details: "同一勤務先1年以上、年収150万円以上目安。" },
            part_time: { status: "conditional", label: "可", details: "勤続1年以上、安定収入あれば検討可。" },
            leave: { status: "ok", label: "○", details: "育休中でも申込可。" },
            tenure: { status: "standard", label: "1年", details: "原則1年以上。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "3期", details: "営業年数3年以上。" },
            land_build_split: { status: "ok", label: "○", details: "分割融資に対応。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "つなぎ融資あり。" },
            defer_order: { status: "ok", label: "○", details: "相談対応。" },
            sale_loss: { status: "ok", label: "○", details: "対応。" },
            defer_replace: { status: "ok", label: "○", details: "対応。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "夫婦連生（デュエット等）対応。" }
        }
    },
    {
        name: "ARUHIフラット35",
        criteria: {
            contract: { status: "flexible", label: "1ヶ月", details: "1ヶ月分の給与明細で年収換算可。" },
            dispatch: { status: "flexible", label: "1ヶ月", details: "継続的な収入があれば申込可。" },
            part_time: { status: "flexible", label: "1ヶ月", details: "安定収入あれば対象。" },
            leave: { status: "ok", label: "○", details: "育休中も申込・実行可。" },
            tenure: { status: "short_ok", label: "1ヶ月", details: "非常に短い勤続でも審査可。" },
            foreigner: { status: "no_pr_ok", label: "相談", details: "原則永住権だが配偶者保証で相談可。" },
            self_employed: { status: "flexible", label: "1期", details: "申告1回済んでいれば審査対象。" },
            land_build_split: { status: "ng", label: "一括", details: "フラット35は完成時一括。つなぎ必須。" },
            build_split: { status: "ng", label: "×", details: "-" },
            bridging: { status: "ok", label: "○", details: "「フラットつなぎ」最大4回。" },
            defer_order: { status: "ng", label: "×", details: "-" },
            sale_loss: { status: "ok", label: "○", details: "住み替え実現ローンあり。" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "機構団信デュエットあり。" }
        }
    },
    {
        name: "UI銀行",
        criteria: {
            contract: { status: "ng", label: "×", details: "原則不可。" },
            dispatch: { status: "ng", label: "×", details: "原則不可。" },
            part_time: { status: "ng", label: "×", details: "原則不可。" },
            leave: { status: "conditional", label: "要相談", details: "個別に相談。" },
            tenure: { status: "standard", label: "1年", details: "安定性を重視。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "standard", label: "2期", details: "申告2期以上。" },
            land_build_split: { status: "ok", label: "○", details: "土地購入時のみ対応（着工時一括）。" },
            build_split: { status: "ng", label: "×", details: "-" },
            bridging: { status: "ng", label: "×", details: "-" },
            defer_order: { status: "ng", label: "×", details: "-" },
            sale_loss: { status: "ng", label: "×", details: "-" },
            defer_replace: { status: "ng", label: "×", details: "-" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "可。" }
        }
    },
    {
        name: "中南信金",
        criteria: {
            contract: { status: "flexible", label: "柔軟", details: "個別事情を柔軟に考慮。" },
            dispatch: { status: "flexible", label: "柔軟", details: "雇用実習重視。相談大。" },
            part_time: { status: "flexible", label: "相談", details: "安定収入あれば可。" },
            leave: { status: "ok", label: "○", details: "家族構成含め柔軟相談。" },
            tenure: { status: "short_ok", label: "柔軟", details: "転職直後も理由により可。" },
            foreigner: { status: "no_pr_ok", label: "相談", details: "居住歴等により相談可。" },
            self_employed: { status: "flexible", label: "柔軟", details: "収支実態重視。" },
            land_build_split: { status: "ok", label: "○", details: "対応。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "独自のつなぎ融資あり。" },
            defer_order: { status: "ok", label: "○", details: "相談可。" },
            sale_loss: { status: "ok", label: "○", details: "相談可。" },
            defer_replace: { status: "ok", label: "○", details: "相談可。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "可。" }
        }
    },
    {
        name: "平塚信金",
        criteria: {
            contract: { status: "conditional", label: "1年", details: "勤続1年以上目安。" },
            dispatch: { status: "conditional", label: "1年", details: "勤続1年以上推奨。" },
            part_time: { status: "conditional", label: "相談", details: "個別に相談。" },
            leave: { status: "ok", label: "○", details: "相談可。" },
            tenure: { status: "standard", label: "1年", details: "原則1年以上。" },
            foreigner: { status: "pr_required", label: "必須", details: "永住権必須。" },
            self_employed: { status: "strict", label: "3年", details: "業歴3年以上必須。" },
            land_build_split: { status: "ok", label: "○", details: "対応。" },
            build_split: { status: "ok", label: "○", details: "対応。" },
            bridging: { status: "ok", label: "○", details: "独自つなぎ融資あり。" },
            defer_order: { status: "ok", label: "○", details: "対応可。" },
            sale_loss: { status: "ok", label: "○", details: "対応可。" },
            defer_replace: { status: "ok", label: "○", details: "対応可。" },
            equal_principal: { status: "ok", label: "○", details: "可。" },
            joint_insurance: { status: "ok", label: "○", details: "ペアローン等の保障あり。" }
        }
    }
];

let banksData = [];

// Helper Maps for Settings Dropdowns
const statusOptions = {
    contract: [
        { value: "ok", label: "可" },
        { value: "flexible", label: "柔軟" },
        { value: "conditional", label: "条件" },
        { value: "ng", label: "不可" }
    ],
    dispatch: [
        { value: "ok", label: "可" },
        { value: "flexible", label: "柔軟" },
        { value: "conditional", label: "条件" },
        { value: "ng", label: "不可" }
    ],
    part_time: [
        { value: "ok", label: "可" },
        { value: "flexible", label: "柔軟" },
        { value: "conditional", label: "条件" },
        { value: "ng", label: "不可" }
    ],
    leave: [
        { value: "ok", label: "可能" },
        { value: "conditional", label: "相談" },
        { value: "ng", label: "不可" }
    ],
    tenure: [
        { value: "short_ok", label: "最短" },
        { value: "standard", label: "標準" },
        { value: "strict", label: "厳格" }
    ],
    foreigner: [
        { value: "no_pr_ok", label: "可" },
        { value: "conditional", label: "相談" },
        { value: "pr_required", label: "必須" }
    ],
    self_employed: [
        { value: "flexible", label: "柔軟" },
        { value: "standard", label: "標準" },
        { value: "strict", label: "厳格" }
    ],
    land_build_split: [{ value: "ok", label: "可" }, { value: "ng", label: "不可" }],
    build_split: [{ value: "ok", label: "可" }, { value: "ng", label: "不可" }],
    bridging: [{ value: "ok", label: "可" }, { value: "conditional", label: "相談" }, { value: "ng", label: "不可" }],
    defer_order: [{ value: "ok", label: "可" }, { value: "conditional", label: "相談" }, { value: "ng", label: "不可" }],
    sale_loss: [{ value: "ok", label: "可" }, { value: "conditional", label: "相談" }, { value: "ng", label: "不可" }],
    defer_replace: [{ value: "ok", label: "可" }, { value: "conditional", label: "相談" }, { value: "ng", label: "不可" }],
    equal_principal: [{ value: "ok", label: "可" }, { value: "ng", label: "不可" }],
    joint_insurance: [{ value: "ok", label: "可" }, { value: "ng", label: "不可" }]
};

const criteriaTitles = {
    contract: '契約社員',
    dispatch: '派遣社員',
    part_time: 'パート・アルバイト',
    leave: '育産休',
    tenure: '勤続年数',
    foreigner: '外国籍',
    self_employed: '自営業',
    land_build_split: '土地建物分割',
    build_split: '建物分割',
    bridging: 'つなぎ',
    defer_order: '据え置き(注)',
    sale_loss: '売却損',
    defer_replace: '据え置き(買)',
    equal_principal: '元金均等',
    joint_insurance: '連生団信'
};

function getBadgeClass(status) {
    switch (status) {
        case 'ok':
        case 'flexible':
        case 'short_ok':
        case 'no_pr_ok':
            return 'badge-ok';
        case 'conditional':
        case 'standard':
        case 'pr_required':
            return 'badge-cond';
        case 'ng':
        case 'strict':
            return 'badge-ng';
        default:
            return 'badge-cond'; // Fallback for any unmapped status
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // --- UI Element Definitions first to avoid TDZ ---

    // Main UI Elements
    const tableBody = document.getElementById('tableBody');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const searchInput = document.getElementById('bankSearch');
    const tableContainer = document.getElementById('tableContainer');
    const emptyState = document.getElementById('emptyState');

    const CRITERIA_KEYS = [
        'contract', 'dispatch', 'part_time', 'self_employed', 'leave', 'tenure', 'foreigner',
        'land_build_split', 'build_split', 'bridging', 'defer_order',
        'sale_loss', 'defer_replace',
        'equal_principal', 'joint_insurance'
    ];

    // Checkbox mapping for renderTable
    const filterMapping = [
        { id: 'chkContract', key: 'contract', allowed: ['ok', 'flexible', 'conditional'] },
        { id: 'chkDispatch', key: 'dispatch', allowed: ['ok', 'flexible', 'conditional'] },
        { id: 'chkPartTime', key: 'part_time', allowed: ['ok', 'flexible', 'conditional'] },
        { id: 'chkSelfEmployed', key: 'self_employed', allowed: ['ok', 'flexible', 'standard'] },
        { id: 'chkLeave', key: 'leave', allowed: ['ok'] },
        { id: 'chkTenure', key: 'tenure', allowed: ['ok', 'short_ok', 'standard'] },
        { id: 'chkForeigner', key: 'foreigner', allowed: ['ok', 'no_pr_ok', 'conditional'] },
        { id: 'chkLandBuildSplit', key: 'land_build_split', allowed: ['ok'] },
        { id: 'chkBuildSplit', key: 'build_split', allowed: ['ok'] },
        { id: 'chkBridging', key: 'bridging', allowed: ['ok', 'conditional'] },
        { id: 'chkDeferOrder', key: 'defer_order', allowed: ['ok', 'conditional'] },
        { id: 'chkSaleLoss', key: 'sale_loss', allowed: ['ok', 'conditional'] },
        { id: 'chkDeferReplace', key: 'defer_replace', allowed: ['ok', 'conditional'] },
        { id: 'chkEqualPrincipal', key: 'equal_principal', allowed: ['ok'] },
        { id: 'chkJointInsurance', key: 'joint_insurance', allowed: ['ok'] }
    ];

    // Settings UI Elements
    const openSettingsBtn = document.getElementById('openSettingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const closeSettingsBtn = document.querySelector('.settings-close');
    const settingsBankList = document.getElementById('settingsBankList');
    const bankEditForm = document.getElementById('bankEditForm');
    const settingsPlaceholder = document.getElementById('settingsPlaceholder');
    const addNewBankBtn = document.getElementById('addNewBankBtn');
    const saveBankBtn = document.getElementById('saveBankBtn');
    const deleteBankBtn = document.getElementById('deleteBankBtn');
    const resetDataBtn = document.getElementById('resetDataBtn');
    const editCriteriaContainer = document.getElementById('editCriteriaContainer');

    const filterInputs = filterMapping.map(m => document.getElementById(m.id));

    // --- Main Table Functions ---

    function renderTable() {
        if (!searchInput || !tableBody) return;
        const filterText = searchInput.value.toLowerCase();
        const activeConditions = [];

        filterMapping.forEach(m => {
            const input = document.getElementById(m.id);
            if (input && input.checked) {
                activeConditions.push(m);
            }
        });

        let displayKeys = activeConditions.map(c => c.key);

        // Hide table if no filters are selected and no search text
        if (activeConditions.length === 0 && filterText === "") {
            tableContainer.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        } else {
            tableContainer.style.display = 'block';
            emptyState.style.display = 'none';
        }

        // If no specifically active filter but search text exists, show all columns
        if (displayKeys.length === 0) {
            displayKeys = CRITERIA_KEYS;
        }

        // Rebuild Table Header
        const tableHead = document.querySelector('#requirementsTable thead');
        tableHead.innerHTML = '';
        const headerRow = document.createElement('tr');

        // Fixed Bank Name Header
        const bankTh = document.createElement('th');
        bankTh.className = 'fixed-col';
        bankTh.textContent = '金融機関';
        headerRow.appendChild(bankTh);

        displayKeys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = criteriaTitles[key] || key;
            headerRow.appendChild(th);
        });
        tableHead.appendChild(headerRow);

        tableBody.innerHTML = '';

        banksData.forEach(bank => {
            const normalizedName = bank.name.toLowerCase();

            // Text Search Check (Independent)
            const matchesText = !filterText || normalizedName.includes(filterText);

            // Checkbox Conditions Check
            // If no checkboxes are checked, matchCheckbox is true.
            // If checkboxes are checked, bank must match ALL of them (AND logic).
            let matchesCheckbox = true;
            if (activeConditions.length > 0) {
                for (const condition of activeConditions) {
                    const criteriaItem = bank.criteria[condition.key];
                    if (!criteriaItem || !condition.allowed.includes(criteriaItem.status)) {
                        matchesCheckbox = false;
                        break;
                    }
                }
            }

            // Must match both search box AND any selected checkboxes
            if (!matchesText || !matchesCheckbox) return;

            const row = document.createElement('tr');

            // Bank Name Column (Clickable)
            const nameCell = document.createElement('td');
            nameCell.className = 'fixed-col clickable-bank-name';
            nameCell.textContent = bank.name;
            nameCell.onclick = () => showBankFullDetails(bank);
            row.appendChild(nameCell);

            // Criteria Columns
            displayKeys.forEach(key => {
                const cell = document.createElement('td');
                const data = bank.criteria[key] || { status: 'ng', label: '-', details: '' };

                const contentDiv = document.createElement('div');
                contentDiv.className = 'cell-content';

                // Sub-criteria Display (Main badge label removed per user request)

                // Sub-criteria Display
                if (data.sub_criteria) {
                    const subDiv = document.createElement('div');
                    subDiv.className = 'sub-criteria-display';
                    const getMark = (val) => val ? '<span class="status-mark ok">○</span>' : '<span class="status-mark ng">✕</span>';
                    const ap = getMark(data.sub_criteria.applicant);
                    const sp = getMark(data.sub_criteria.spouse);
                    const ag = getMark(data.sub_criteria.aggregation);
                    const lv = getMark(data.sub_criteria.leave);

                    subDiv.innerHTML = `
                        <div class="sub-criteria-item">申${ap}</div>
                        <div class="sub-criteria-item">ペ${sp}</div>
                        <div class="sub-criteria-item">合${ag}</div>
                        <div class="sub-criteria-item">育${lv}</div>
                    `;
                    contentDiv.appendChild(subDiv);
                }

                // Detail snippet
                const detailText = document.createElement('div');
                detailText.className = 'detail-text';
                detailText.textContent = data.details;
                contentDiv.appendChild(detailText);

                // More link
                const moreBtn = document.createElement('button');
                moreBtn.className = 'more-link';
                moreBtn.textContent = '詳細を見る';
                moreBtn.onclick = () => openModal(bank.name, key, data);
                contentDiv.appendChild(moreBtn);

                cell.appendChild(contentDiv);
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }

    function showBankFullDetails(bank) {
        document.getElementById('modalBankName').textContent = bank.name;
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = ''; // Clear previous content

        CRITERIA_KEYS.forEach(key => {
            const data = bank.criteria[key] || { status: 'ng', label: '-', details: '情報なし' };
            const section = document.createElement('div');
            section.className = 'modal-section';

            let subHTML = '';
            if (data.sub_criteria) {
                const ap = data.sub_criteria.applicant ? '<span class="mark-ok">○</span>' : '<span class="mark-ng">✕</span>';
                const sp = data.sub_criteria.spouse ? '<span class="mark-ok">○</span>' : '<span class="mark-ng">✕</span>';
                const ag = data.sub_criteria.aggregation ? '<span class="mark-ok">○</span>' : '<span class="mark-ng">✕</span>';
                const lv = data.sub_criteria.leave ? '<span class="mark-ok">○</span>' : '<span class="mark-ng">✕</span>';
                subHTML = `
                    <div class="sub-criteria-display" style="margin-bottom: 0.5rem;">
                        <span class="sub-item">申込:${ap}</span>
                        <span class="sub-item">ペア:${sp}</span>
                        <span class="sub-item">合算:${ag}</span>
                        <span class="sub-item">育休:${lv}</span>
                    </div>
                `;
            }

            const displayLabel = data.label.length > 2 ? data.label.substring(0, 2) : data.label;

            section.innerHTML = `
                <h3>${criteriaTitles[key]}</h3>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 0.5rem;">
                    <div class="badge ${getBadgeClass(data.status)}" style="margin-bottom: 0;">${displayLabel}</div>
                    ${subHTML}
                </div>
                <p>${data.details}</p>
            `;
            modalBody.appendChild(section);
        });

        modal.style.display = 'block';
    }

    function openModal(bankName, criteriaKey, data) {
        document.getElementById('modalBankName').textContent = bankName;
        const modalBody = document.getElementById('modalBody');

        let subHTML = '';
        if (data.sub_criteria) {
            const ap = data.sub_criteria.applicant ? '<span class="mark-ok">○</span>' : '<span class="mark-ng">✕</span>';
            const sp = data.sub_criteria.spouse ? '<span class="mark-ok">○</span>' : '<span class="mark-ng">✕</span>';
            const ag = data.sub_criteria.aggregation ? '<span class="mark-ok">○</span>' : '<span class="mark-ng">✕</span>';
            const lv = data.sub_criteria.leave ? '<span class="mark-ok">○</span>' : '<span class="mark-ng">✕</span>';
            subHTML = `
                <div class="sub-criteria-display" style="margin-bottom: 0.5rem;">
                    <span class="sub-item">申込:${ap}</span>
                    <span class="sub-item">ペア:${sp}</span>
                    <span class="sub-item">合算:${ag}</span>
                    <span class="sub-item">育休:${lv}</span>
                </div>
            `;
        }

        const displayLabel = data.label.length > 2 ? data.label.substring(0, 2) : data.label;

        modalBody.innerHTML = `
            <div class="modal-section">
                <h3>${criteriaTitles[criteriaKey]}</h3>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                    <div class="badge ${getBadgeClass(data.status)}" style="margin-bottom: 0;">${displayLabel}</div>
                    ${subHTML}
                </div>
                <p>${data.details}</p>
            </div>
        `;

        modal.style.display = 'block';
    }

    const criteriaKeys = ['contract', 'dispatch', 'part_time', 'leave', 'tenure', 'foreigner', 'self_employed'];

    // ... (getBadgeClass is fine) ...

    function migrateBankData(data) {
        if (!data || !Array.isArray(data)) return [];

        data.forEach(bank => {
            if (!bank.criteria) bank.criteria = {};

            // Handle old 'non_regular' key if it exists
            if (bank.criteria.non_regular) {
                const nr = bank.criteria.non_regular;
                const status = typeof nr === 'object' ? (nr.status || 'ng') : 'ng';
                const label = typeof nr === 'object' ? (nr.label || '×') : (typeof nr === 'string' ? nr : '×');
                const details = typeof nr === 'object' ? (nr.details || '') : '';

                const subObj = {
                    applicant: status !== 'ng',
                    spouse: status !== 'ng',
                    aggregation: status === 'flexible' || status === 'ok',
                    leave: false
                };

                const newObj = {
                    status: status,
                    label: label,
                    details: details,
                    sub_criteria: subObj
                };

                // Apply to all non-regular categories
                if (!bank.criteria.contract) bank.criteria.contract = JSON.parse(JSON.stringify(newObj));
                if (!bank.criteria.dispatch) bank.criteria.dispatch = JSON.parse(JSON.stringify(newObj));
                if (!bank.criteria.part_time) bank.criteria.part_time = JSON.parse(JSON.stringify(newObj));

                delete bank.criteria.non_regular;
            }

            // Ensure EVERY key in CRITERIA_KEYS is an object, not a string
            CRITERIA_KEYS.forEach(key => {
                const item = bank.criteria[key];
                if (!item || typeof item !== 'object') {
                    // Convert string or missing to object
                    const label = typeof item === 'string' ? item : (key === 'part_time' ? '×' : '-');
                    const status = (label === '×' || label === '不可' || label === '✕') ? 'ng' :
                        (label === '○' || label === '可') ? 'ok' : 'conditional';

                    bank.criteria[key] = {
                        status: status,
                        label: label,
                        details: ''
                    };
                }

                // Ensure sub_criteria exists for regular work types
                if (['contract', 'dispatch', 'part_time'].includes(key) && !bank.criteria[key].sub_criteria) {
                    bank.criteria[key].sub_criteria = {
                        applicant: bank.criteria[key].status !== 'ng',
                        spouse: bank.criteria[key].status !== 'ng',
                        aggregation: bank.criteria[key].status === 'flexible' || bank.criteria[key].status === 'ok',
                        leave: false
                    };
                }
            });
        });
        return data;
    }

    // ...

    // --- Settings Functions ---

    function loadBanksData() {
        const stored = localStorage.getItem('housingLoanBanks');
        let rawData = [];

        if (stored) {
            try {
                rawData = JSON.parse(stored);
            } catch (e) {
                rawData = [];
            }
        }

        // --- Load Defaults if Empty ---
        if (!Array.isArray(rawData) || rawData.length === 0) {
            banksData = JSON.parse(JSON.stringify(defaultBanksData));
        } else {
            banksData = rawData;
        }

        // Always run migration check to fix format issues (like the part-time badge issue)
        banksData = migrateBankData(banksData);
        // Force save to ensure localStorage is up to date with 21 banks
        saveBanks(true);
    }

    function saveBanks(silent = false) {
        localStorage.setItem('housingLoanBanks', JSON.stringify(banksData));
        if (typeof renderTable === 'function' && tableBody) {
            renderTable();
        }
        if (!silent) alert('設定を保存しました');
    }

    function resetBanks() {
        if (confirm('全ての変更を破棄して初期データに戻しますか？')) {
            let data = JSON.parse(JSON.stringify(defaultBanksData));
            banksData = migrateBankData(data);
            localStorage.setItem('housingLoanBanks', JSON.stringify(banksData));
            renderTable();
            renderSettingsList();
            bankEditForm.style.display = 'none';
            settingsPlaceholder.style.display = 'block';
        }
    }

    function renderSettingsList() {
        if (!settingsBankList) return;
        settingsBankList.innerHTML = '';
        banksData.forEach((bank, index) => {
            const li = document.createElement('li');
            li.textContent = bank.name;
            li.onclick = () => loadBankForEdit(index);
            settingsBankList.appendChild(li);
        });
    }

    function loadBankForEdit(index) {
        if (!settingsBankList || !banksData[index]) return;
        const bank = banksData[index];
        const listItems = settingsBankList.querySelectorAll('li');
        listItems.forEach(item => item.classList.remove('active'));
        if (listItems[index]) listItems[index].classList.add('active');

        if (document.getElementById('editBankIndex')) document.getElementById('editBankIndex').value = index;
        if (document.getElementById('editBankName')) document.getElementById('editBankName').value = bank.name;

        if (settingsPlaceholder) settingsPlaceholder.style.display = 'none';
        if (bankEditForm) bankEditForm.style.display = 'block';

        // Render Criteria Edit Fields Categorized
        editCriteriaContainer.innerHTML = '';
        const criteriaCategories = {
            '属性': ['contract', 'dispatch', 'part_time', 'self_employed', 'leave', 'tenure', 'foreigner'],
            '注文・フリープラン': ['land_build_split', 'build_split', 'bridging', 'defer_order'],
            '買い替え': ['sale_loss', 'defer_replace'],
            'その他': ['equal_principal', 'joint_insurance']
        };

        for (const [catName, keys] of Object.entries(criteriaCategories)) {
            const catHeader = document.createElement('div');
            catHeader.className = 'settings-category-header';
            catHeader.textContent = catName;
            editCriteriaContainer.appendChild(catHeader);

            keys.forEach(key => {
                const data = bank.criteria[key] || { status: 'ng', label: '', details: '' };
                const section = document.createElement('div');
                section.className = 'criteria-section';

                const radios = statusOptions[key].map(opt => `
                    <label class="radio-option">
                        <input type="radio" 
                               name="${key}_status_${index}" 
                               value="${opt.value}" 
                               class="status-radio" 
                               data-key="${key}"
                               ${data.status === opt.value ? 'checked' : ''}>
                        <span class="radio-label">${opt.label.split(' (')[0]}</span>
                    </label>
                `).join('');

                let extraSettingsHTML = '';
                if (['contract', 'dispatch', 'part_time'].includes(key)) {
                    const sub = data.sub_criteria || { applicant: false, spouse: false, aggregation: false, leave: false };
                    extraSettingsHTML = `
                    <div class="sub-criteria-group" style="background: white; padding: 6px; border: 1px solid #eee; border-radius: 4px; margin-top: 6px;">
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; font-size: 0.85rem;">
                            <label><input type="checkbox" class="sub-checkbox" data-key="${key}" data-sub="applicant" ${sub.applicant ? 'checked' : ''}> 申込</label>
                            <label><input type="checkbox" class="sub-checkbox" data-key="${key}" data-sub="spouse" ${sub.spouse ? 'checked' : ''}> ペア</label>
                            <label><input type="checkbox" class="sub-checkbox" data-key="${key}" data-sub="aggregation" ${sub.aggregation ? 'checked' : ''}> 合算</label>
                            <label><input type="checkbox" class="sub-checkbox" data-key="${key}" data-sub="leave" ${sub.leave ? 'checked' : ''}> 育休</label>
                        </div>
                    </div>
                    `;
                }

                section.innerHTML = `
                    <div class="criteria-header" style="font-size: 0.9rem; margin-bottom: 0.4rem;">${criteriaTitles[key]}</div>
                    <div class="form-group" style="margin-bottom: 0.4rem;">
                        <div class="radio-grid" style="display:flex; flex-wrap:wrap; gap:4px;">${radios}</div>
                    </div>
                    ${extraSettingsHTML}
                    <div style="display: flex; gap: 10px; margin-top: 0.5rem;">
                        <div style="flex: 1;">
                            <input type="text" class="form-input label-input" data-key="${key}" value="${data.label}" placeholder="ラベル" style="font-size: 0.85rem; padding: 4px 8px;">
                        </div>
                        <div style="flex: 2;">
                            <textarea class="form-textarea details-input" data-key="${key}" placeholder="詳細説明" style="font-size: 0.85rem; padding: 4px 8px; min-height: 40px;">${data.details}</textarea>
                        </div>
                    </div>
                `;
                editCriteriaContainer.appendChild(section);
            });
        }
    }

    // ... saveCurrentEdits is separate ...

    function createNewBank() {
        // Deselect list
        settingsBankList.querySelectorAll('li').forEach(l => l.classList.remove('active'));

        const index = -1;
        document.getElementById('editBankIndex').value = index;
        document.getElementById('editBankName').value = "新規銀行";

        editCriteriaContainer.innerHTML = '';
        const criteriaCategories = {
            '属性': ['contract', 'dispatch', 'part_time', 'self_employed', 'leave', 'tenure', 'foreigner'],
            '注文・フリープラン': ['land_build_split', 'build_split', 'bridging', 'defer_order'],
            '買い替え': ['sale_loss', 'defer_replace'],
            'その他': ['equal_principal', 'joint_insurance']
        };

        for (const [catName, keys] of Object.entries(criteriaCategories)) {
            const catHeader = document.createElement('div');
            catHeader.className = 'settings-category-header';
            catHeader.textContent = catName;
            editCriteriaContainer.appendChild(catHeader);

            keys.forEach(key => {
                const section = document.createElement('div');
                section.className = 'criteria-section';

                const radios = statusOptions[key].map(opt => `
                    <label class="radio-option">
                        <input type="radio" 
                               name="${key}_status_new" 
                               value="${opt.value}" 
                               class="status-radio" 
                               data-key="${key}">
                        <span class="radio-label">${opt.label.split(' (')[0]}</span>
                    </label>
                `).join('');

                let extraSettingsHTML = '';
                if (['contract', 'dispatch', 'part_time'].includes(key)) {
                    extraSettingsHTML = `
                    <div class="sub-criteria-group" style="background: white; padding: 6px; border: 1px solid #eee; border-radius: 4px; margin-top: 6px;">
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; font-size: 0.85rem;">
                            <label><input type="checkbox" class="sub-checkbox" data-key="${key}" data-sub="applicant"> 申込</label>
                            <label><input type="checkbox" class="sub-checkbox" data-key="${key}" data-sub="spouse"> ペア</label>
                            <label><input type="checkbox" class="sub-checkbox" data-key="${key}" data-sub="aggregation"> 合算</label>
                            <label><input type="checkbox" class="sub-checkbox" data-key="${key}" data-sub="leave"> 育休</label>
                        </div>
                    </div>
                    `;
                }

                section.innerHTML = `
                    <div class="criteria-header" style="font-size: 0.9rem; margin-bottom: 0.4rem;">${criteriaTitles[key]}</div>
                    <div class="form-group" style="margin-bottom: 0.4rem;">
                        <div class="radio-grid" style="display:flex; flex-wrap:wrap; gap:4px;">${radios}</div>
                    </div>
                    ${extraSettingsHTML}
                    <div style="display: flex; gap: 10px; margin-top: 0.5rem;">
                        <div style="flex: 1;">
                            <input type="text" class="form-input label-input" data-key="${key}" value="" placeholder="ラベル" style="font-size: 0.85rem; padding: 4px 8px;">
                        </div>
                        <div style="flex: 2;">
                            <textarea class="form-textarea details-input" data-key="${key}" placeholder="詳細説明" style="font-size: 0.85rem; padding: 4px 8px; min-height: 40px;"></textarea>
                        </div>
                    </div>
                `;
                editCriteriaContainer.appendChild(section);
            });
        }

        settingsPlaceholder.style.display = 'none';
        bankEditForm.style.display = 'block';
    }

    function saveCurrentEdits(silent = false) {
        const indexInput = document.getElementById('editBankIndex');
        if (!indexInput) return;
        const index = parseInt(indexInput.value);
        let bankName = document.getElementById('editBankName').value;

        if (!bankName) {
            // Don't alert on auto-save for empty name, just wait
            if (!silent) alert('銀行名を入力してください');
            return;
        }

        let newCriteria = {};
        for (const key of CRITERIA_KEYS) {
            const checkedRadio = editCriteriaContainer.querySelector(`input[type="radio"][data-key="${key}"]:checked`);
            const status = checkedRadio ? checkedRadio.value : 'ng';

            const labelInput = editCriteriaContainer.querySelector(`.label-input[data-key="${key}"]`);
            const detailsInput = editCriteriaContainer.querySelector(`.details-input[data-key="${key}"]`);

            const criteriaObj = {
                status: status,
                label: labelInput ? labelInput.value : '',
                details: detailsInput ? detailsInput.value : ''
            };

            if (['contract', 'dispatch', 'part_time'].includes(key)) {
                const applicantChk = editCriteriaContainer.querySelector(`input.sub-checkbox[data-key="${key}"][data-sub="applicant"]`);
                const spouseChk = editCriteriaContainer.querySelector(`input.sub-checkbox[data-key="${key}"][data-sub="spouse"]`);
                const aggregationChk = editCriteriaContainer.querySelector(`input.sub-checkbox[data-key="${key}"][data-sub="aggregation"]`);
                const leaveChk = editCriteriaContainer.querySelector(`input.sub-checkbox[data-key="${key}"][data-sub="leave"]`);

                criteriaObj.sub_criteria = {
                    applicant: applicantChk ? applicantChk.checked : false,
                    spouse: spouseChk ? spouseChk.checked : false,
                    aggregation: aggregationChk ? aggregationChk.checked : false,
                    leave: leaveChk ? leaveChk.checked : false
                };
            }

            newCriteria[key] = criteriaObj;
        }

        if (isNaN(index) || index === -1) { // New Bank
            const newBank = {
                name: bankName,
                criteria: newCriteria
            };
            banksData.push(newBank);
            const newIdx = banksData.length - 1;

            // Set index value manually to avoid recursion in loadBankForEdit
            indexInput.value = newIdx;

            saveBanks(true);
            renderSettingsList();

            // Highlight the new bank in the sidebar
            const listItems = settingsBankList.querySelectorAll('li');
            if (listItems[newIdx]) listItems[newIdx].classList.add('active');
        } else {
            // Update Existing
            const bank = banksData[index];
            bank.name = bankName;
            bank.criteria = newCriteria;

            saveBanks(true);
            renderSettingsList();

            // Re-highlight
            const listItems = settingsBankList.querySelectorAll('li');
            if (listItems[index]) listItems[index].classList.add('active');
        }

        // Show a brief "Saved" indicator
        showAutoSaveIndicator();
    }

    function showAutoSaveIndicator() {
        const indicator = document.getElementById('autosaveIndicator');
        if (indicator) {
            indicator.style.opacity = '1';
            setTimeout(() => {
                indicator.style.opacity = '0';
            }, 1500);
        }
    }

    function deleteBank() {
        const index = parseInt(document.getElementById('editBankIndex').value);
        if (index >= 0 && confirm('本当に削除しますか？')) {
            banksData.splice(index, 1);
            saveBanks();
            renderSettingsList();
            bankEditForm.style.display = 'none';
            settingsPlaceholder.style.display = 'block';
        }
    }

    // --- Import / Export Functions ---

    function exportData() {
        const dataStr = JSON.stringify(banksData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        const exportFileDefaultName = 'bank_data.json';

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    function triggerImport() {
        document.getElementById('importFileInput').click();
    }

    function importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const importedData = JSON.parse(e.target.result);
                // Basic Validation: Check if it's an array and has criteria
                if (!Array.isArray(importedData)) throw new Error('Invalid format: Not an array');
                if (importedData.length > 0 && !importedData[0].criteria) throw new Error('Invalid format: No criteria');

                if (confirm('現在のデータを上書きして取り込みますか？(元に戻せません)')) {
                    banksData = importedData;
                    saveBanks();
                    renderSettingsList();
                    bankEditForm.style.display = 'none';
                    settingsPlaceholder.style.display = 'block';
                    alert('データの取り込みが完了しました。');
                }
            } catch (error) {
                alert('ファイルの読み込みに失敗しました: ' + error.message);
            }
            // Reset input so same file can be selected again if needed
            event.target.value = '';
        };
        reader.readAsText(file);
    }

    // --- Main Event Listeners ---

    // Filters (Top Page only)
    if (searchInput) {
        searchInput.addEventListener('input', renderTable);
    }

    if (filterInputs && filterInputs.length > 0) {
        filterInputs.forEach(input => {
            if (input) input.addEventListener('change', renderTable);
        });
    }

    // Modal Interactions (Top Page only)
    if (closeButton) {
        closeButton.onclick = () => {
            if (modal) modal.style.display = 'none';
        };
    }

    window.onclick = (event) => {
        if (modal && event.target == modal) modal.style.display = 'none';
        if (settingsModal && event.target == settingsModal) settingsModal.style.display = 'none';
    };

    // Settings Navigation/Interaction
    if (openSettingsBtn) {
        openSettingsBtn.onclick = () => {
            window.location.href = 'settings.html';
        };
    }

    if (closeSettingsBtn) {
        closeSettingsBtn.onclick = () => {
            if (settingsModal) settingsModal.style.display = 'none';
            else window.location.href = 'index.html';
        };
    }

    if (saveBankBtn) saveBankBtn.onclick = () => saveCurrentEdits(false);
    if (addNewBankBtn) addNewBankBtn.onclick = createNewBank;
    if (deleteBankBtn) deleteBankBtn.onclick = deleteBank;
    if (resetDataBtn) resetDataBtn.onclick = resetBanks;

    // Auto-save in Settings
    if (bankEditForm) {
        // Save on any interaction that triggers 'change' (radio, checkbox, built-in change)
        bankEditForm.addEventListener('change', () => saveCurrentEdits(true));

        // Save on 'input' for text fields but with a slight debounce or wait for blur
        // For now, blur is safest to avoid constant heavy saving
        bankEditForm.addEventListener('focusout', (e) => {
            if (e.target.classList.contains('form-input') ||
                e.target.classList.contains('form-textarea') ||
                e.target.id === 'editBankName') {
                saveCurrentEdits(true);
            }
        });
    }

    // Import/Export Listeners
    const exportBtn = document.getElementById('exportDataBtn');
    if (exportBtn) exportBtn.onclick = exportData;

    const importBtn = document.getElementById('importDataBtn');
    if (importBtn) importBtn.onclick = triggerImport;

    const importFile = document.getElementById('importFileInput');
    if (importFile) importFile.onchange = importData;

    // --- Final Initialization (after all listeners and variables are ready) ---
    loadBanksData();

    if (tableBody) {
        renderTable();
    }

    if (settingsBankList) {
        renderSettingsList();
    }
});
