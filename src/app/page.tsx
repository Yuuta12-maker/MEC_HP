import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="bg-primary-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            認知科学に基づく<br />
            <span className="text-primary-600">最先端のコーチング</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-700 mb-8">
            MECで理想の自分を実現
          </p>
          <p className="text-lg text-secondary-600 mb-10 max-w-3xl mx-auto">
            マインドエンジニアリングコーチング（MEC）は、最新の認知科学的知見に基づいて、
            あなたのゴール達成を科学的にサポートします。
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="inline-block btn-primary px-8 py-3 rounded-md text-lg font-semibold focus-visible:focus-visible"
            >
              初回トライアル申し込み
            </Link>
            <Link
              href="/mec"
              className="inline-block btn-secondary px-8 py-3 rounded-md text-lg font-semibold focus-visible:focus-visible"
            >
              MECについて詳しく
            </Link>
          </div>
        </div>
      </section>

      {/* MECの特徴 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              MECの特徴
            </h2>
            <p className="text-lg text-secondary-600">
              科学的根拠に基づいた3つのポイント
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                科学的根拠に基づいた手法
              </h3>
              <p className="text-secondary-700">
                最新の認知科学・脳科学の研究成果を取り入れた、
                エビデンスベースのコーチング手法を提供します。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                個別最適化されたアプローチ
              </h3>
              <p className="text-secondary-700">
                一人ひとりの現状と目標に合わせて、
                最適なコーチング戦略を設計します。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                持続可能な成長の実現
              </h3>
              <p className="text-secondary-700">
                一時的な変化ではなく、
                長期にわたって継続する成長をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* プログラム概要 */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              プログラム概要
            </h2>
            <p className="text-lg text-secondary-600">
              あなたの成長を包括的にサポート
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                個別コーチングプログラム
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">期間・頻度</h4>
                    <p className="text-secondary-700">3ヶ月プログラム / 週1回セッション</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">対応方法</h4>
                    <p className="text-secondary-700">対面・オンライン両対応</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">主な内容</h4>
                    <p className="text-secondary-700">ゴール設定、エフィカシー向上、コンフォートゾーン移行</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/program"
                  className="inline-block btn-primary px-6 py-3 rounded-md font-semibold focus-visible:focus-visible"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-secondary-900 mb-4 text-center">
                初回トライアル
              </h4>
              <p className="text-secondary-600 mb-6 text-center">
                まずはお試しください
              </p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-primary-600">60分</span>
                <span className="text-secondary-600 ml-2">セッション</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  現状分析
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  目標設定
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  アクションプラン作成
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="block btn-primary px-6 py-3 rounded-md font-semibold focus-visible:focus-visible"
                >
                  申し込む
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            あなたの可能性を最大限に引き出しませんか？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            初回トライアルで、MECの効果を実感してください
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-50 hover:shadow-lg transition-all focus-visible:focus-visible"
            >
              今すぐ申し込む
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all focus-visible:focus-visible"
            >
              コーチについて
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}