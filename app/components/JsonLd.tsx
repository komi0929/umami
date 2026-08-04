export default function JsonLd() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "UMAMI VANILLA プレミアムヴィーガンアイスクリーム 業務用ラインナップ",
    description:
      "100%植物性・グルテンフリーの業務用プレミアムヴィーガンアイスクリーム。和の発酵技術を活かした2つのライン。UMAMI VANILLAとWELLNESS VANILLAをご用意。",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "UMAMI VANILLA",
          description:
            "豆乳ベースに甘酒・白味噌の発酵技術を融合した、主役級の満足感を持つプレミアムヴィーガンアイス。高級ホテルや上質な和食店のインバウンド対応デザートに最適。194kcal。",
          brand: { "@type": "Brand", name: "UMAMI VANILLA" },
          category: "業務用ヴィーガンアイスクリーム",
          additionalProperty: [
            { "@type": "PropertyValue", name: "カロリー", value: "194kcal" },
            { "@type": "PropertyValue", name: "ベース", value: "豆乳" },
            { "@type": "PropertyValue", name: "特徴", value: "甘酒・白味噌発酵" },
            { "@type": "PropertyValue", name: "アレルゲン対応", value: "乳・卵・小麦不使用" },
          ],
          audience: {
            "@type": "Audience",
            audienceType: "高級ホテル、プレミアム和食店、インバウンド対応飲食店",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "WELLNESS VANILLA",
          description:
            "米油ベース（豆乳不使用）にメープルシロップを使用した、究極のヘルシー＆リセット系ヴィーガンアイス。ヘルスカフェ、サラダバー、ウェルネスリトリートに最適。157kcal。",
          brand: { "@type": "Brand", name: "UMAMI VANILLA" },
          category: "業務用ヴィーガンアイスクリーム",
          additionalProperty: [
            { "@type": "PropertyValue", name: "カロリー", value: "157kcal" },
            { "@type": "PropertyValue", name: "ベース", value: "米油（豆乳不使用）" },
            { "@type": "PropertyValue", name: "甘味料", value: "メープルシロップ" },
            { "@type": "PropertyValue", name: "アレルゲン対応", value: "乳・卵・小麦・大豆不使用" },
          ],
          audience: {
            "@type": "Audience",
            audienceType: "ヘルスカフェ、サラダバー、ウェルネスリトリート",
          },
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "UMAMI VANILLAのヴィーガンアイスはどのようなアレルゲンに対応していますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UMAMI VANILLAは乳・卵・小麦不使用（豆乳ベース）、WELLNESS VANILLAは乳・卵・小麦・大豆すべて不使用（米油ベース）です。両製品ともグルテンフリーで、100%植物性原料のみを使用しています。",
        },
      },
      {
        "@type": "Question",
        name: "UMAMI VANILLAの業務用アイスの最小ロットと価格帯を教えてください。",
        acceptedAnswer: {
          "@type": "Answer",
          text: "クラフト生産（1日最大60リットル）のため、詳細なロットや価格については無料サンプル請求フォームよりお問い合わせください。1スクープ500円での提供時、原価率は15%〜22%を実現できます。",
        },
      },
      {
        "@type": "Question",
        name: "インバウンド対応のサポートツールはありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい。アレルゲンピクトグラム、英語メニュー、発酵ストーリーPOPなどの販促ツールを無料でご提供しています。訪日外国人のお客様への説明・訴求をサポートします。",
        },
      },
      {
        "@type": "Question",
        name: "ヴィーガンアイスの保存方法と賞味期限は？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "冷凍（-18℃以下）で保存してください。詳しい賞味期限は製品ロットにより異なりますので、サンプル請求時にご確認ください。",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
