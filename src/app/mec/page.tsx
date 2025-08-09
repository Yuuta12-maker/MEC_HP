import Link from "next/link";
import Layout from "@/components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MECとは | マインドエンジニアリングコーチング",
  description: "マインドエンジニアリングコーチング（MEC）の理論的背景と効果について詳しく解説。認知科学に基づく最先端のコーチング手法です。",
};

export default function MEC() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-light-gray to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            MECとは
          </h1>
          <p className="text-xl text-gray-600">
            マインドエンジニアリングコーチング（MEC）
          </p>
        </div>
      </section>

      {/* MECの定義 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-6">
              MECの定義と概要
            </h2>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-primary">マインドエンジニアリングコーチング（MEC）</strong>は、
              認知科学・脳科学の最新研究成果を基盤とした科学的なコーチング手法です。
              従来の精神論的なアプローチではなく、脳の情報処理メカニズムを理解し、
              科学的にマインド（心・精神）を設計・改良することで、
              目標達成と自己実現をサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">科学的</h3>
              <p className="text-gray-600">認知科学・脳科学に基づく</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">実践的</h3>
              <p className="text-gray-600">再現性のある手法</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">効果的</h3>
              <p className="text-gray-600">持続可能な変化を実現</p>
            </div>
          </div>
        </div>
      </section>

      {/* 最新の認知科学的知見 */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">
              最新の認知科学的知見
            </h2>
            <p className="text-lg text-gray-600">
              MECが基盤とする科学的根拠
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-4 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                脳の可塑性（Neuroplasticity）
              </h3>
              <p className="text-gray-700 ml-11">
                脳は生涯にわたって変化し続けることができます。適切な刺激と訓練により、
                新しい神経回路を形成し、既存の思考パターンを変えることが可能です。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-4 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                認知バイアスの理解
              </h3>
              <p className="text-gray-700 ml-11">
                人間の判断には様々なバイアス（偏見）が存在します。これらを理解し、
                意識的にコントロールすることで、より合理的で効果的な思考が可能になります。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-4 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                記憶と学習のメカニズム
              </h3>
              <p className="text-gray-700 ml-11">
                記憶の形成と想起のプロセスを理解することで、
                より効果的な学習方法と行動変容のアプローチを設計できます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-dark-gray mb-4 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
                注意と意識の科学
              </h3>
              <p className="text-gray-700 ml-11">
                注意のメカニズムを理解し、意識的に注意をコントロールすることで、
                集中力の向上とパフォーマンスの最適化を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 従来のコーチングとの違い */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">
              従来のコーチングとの違い
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 従来のコーチング */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-600 mb-6 text-center">
                従来のコーチング
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">精神論・根性論に依存</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">経験則に基づく手法</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">一時的なモチベーション向上</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">個人差を考慮しない画一的アプローチ</span>
                </li>
              </ul>
            </div>

            {/* MEC */}
            <div className="bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                MEC（マインドエンジニアリングコーチング）
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">認知科学・脳科学に基づく手法</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">科学的根拠に基づく再現性</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">根本的な思考パターンの変革</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">個人の特性に合わせた最適化</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MECが選ばれる理由 */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">
              MECが選ばれる理由
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-dark-gray mb-3">
                🎯 明確な結果
              </h3>
              <p className="text-gray-700">
                科学的手法により、目標達成までのプロセスが明確で、
                結果を測定・評価できます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-dark-gray mb-3">
                ⏰ 効率的
              </h3>
              <p className="text-gray-700">
                脳の情報処理メカニズムを活用することで、
                短期間での変化と成長を実現します。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-dark-gray mb-3">
                🔄 継続性
              </h3>
              <p className="text-gray-700">
                一時的な変化ではなく、根本的な思考パターンの変革により、
                持続可能な成長を実現します。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-dark-gray mb-3">
                🎨 個別最適化
              </h3>
              <p className="text-gray-700">
                一人ひとりの認知特性や価値観に合わせて、
                最適なアプローチを設計します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            科学的なコーチングを体験してみませんか？
          </h2>
          <p className="text-xl text-red-100 mb-8">
            初回トライアルで、MECの効果を実感してください
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              初回トライアル申し込み
            </Link>
            <Link
              href="/program"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              プログラム詳細
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}