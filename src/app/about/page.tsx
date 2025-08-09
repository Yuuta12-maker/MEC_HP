import Link from "next/link";
import Layout from "@/components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "森山雄太について | MECコーチング",
  description: "MECコーチング代表、森山雄太のプロフィールと経歴。認知科学に基づくコーチングで多くのクライアントの成長をサポートしています。",
};

export default function About() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-light-gray to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            森山雄太について
          </h1>
          <p className="text-xl text-gray-600">
            MECコーチング代表・認定コーチ
          </p>
        </div>
      </section>

      {/* プロフィール */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 写真プレースホルダー */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">プロフィール写真</span>
              </div>
            </div>
            
            {/* プロフィール内容 */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-dark-gray mb-6">
                あなたの可能性を最大限に引き出すパートナー
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  私は長年、人の成長と可能性の実現に情熱を注いできました。
                  従来のコーチング手法に疑問を感じていた時に出会ったのが、
                  認知科学に基づくマインドエンジニアリングコーチング（MEC）でした。
                </p>
                <p>
                  MECは単なる精神論ではありません。脳科学と認知科学の最新研究に基づいた、
                  科学的で再現性のある手法です。この手法により、
                  多くのクライアントが短期間で劇的な変化を遂げています。
                </p>
                <p>
                  私の使命は、一人でも多くの方に「本当の自分」を発見し、
                  理想の人生を実現していただくことです。
                  あなたの成長のパートナーとして、全力でサポートいたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 経歴・資格 */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">
              経歴・資格
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 資格・認定 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-6">
                資格・認定
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-3"></div>
                  <span className="text-gray-700">認定マインドエンジニアリングコーチ</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-3"></div>
                  <span className="text-gray-700">認知科学応用コーチング研修修了</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-3"></div>
                  <span className="text-gray-700">国際コーチ連盟（ICF）認定コーチ</span>
                </li>
              </ul>
            </div>

            {/* 専門分野 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-6">
                専門分野
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-3"></div>
                  <span className="text-gray-700">エグゼクティブコーチング</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-3"></div>
                  <span className="text-gray-700">キャリア・トランジション支援</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-3"></div>
                  <span className="text-gray-700">パフォーマンス向上コーチング</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 理念・アプローチ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">
              コーチングの理念
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                科学的アプローチ
              </h3>
              <p className="text-gray-700">
                感情論や精神論ではなく、認知科学・脳科学の研究成果に基づいた
                科学的で再現性のあるコーチング手法を提供します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                個別最適化
              </h3>
              <p className="text-gray-700">
                一人ひとりの価値観、現状、目標に合わせて、
                最適なコーチング戦略とアクションプランを設計します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                継続的成長
              </h3>
              <p className="text-gray-700">
                一時的な変化ではなく、自分で自分をコーチングできる力を身につけ、
                生涯にわたって成長し続けられるよう支援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 個人事業主として */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">
              個人事業主としての取り組み
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-gray-700 space-y-4">
              <p>
                私は個人事業主として、クライアント一人ひとりに
                最高品質のコーチングサービスを提供することにこだわっています。
              </p>
              <p>
                大手コーチング会社では実現できない、
                きめ細やかで柔軟なサポートを心がけています。
                対面でもオンラインでも、あなたのライフスタイルに合わせて
                最適な形でセッションを提供いたします。
              </p>
              <p>
                継続的な学習と研究により、常に最新の知見を取り入れ、
                より効果的なコーチング手法の開発に努めています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            あなたの成長パートナーとして
          </h2>
          <p className="text-xl text-red-100 mb-8">
            まずは初回トライアルで、MECの効果を実感してください
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              初回トライアル申し込み
            </Link>
            <Link
              href="/mec"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              MECについて詳しく
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}