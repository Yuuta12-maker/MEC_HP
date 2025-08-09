import Link from "next/link";
import Layout from "@/components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プログラム詳細 | MECコーチング",
  description: "MECコーチングのプログラム期間、セッション内容、料金体系について詳しく解説。初回トライアルも実施中。",
};

export default function Program() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-light-gray to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            プログラム詳細
          </h1>
          <p className="text-xl text-gray-600">
            あなたの成長を包括的にサポートするMECプログラム
          </p>
        </div>
      </section>

      {/* プログラム概要 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              プログラム概要
            </h2>
            <div className="bg-primary-50 p-6 rounded-lg max-w-4xl mx-auto mb-8">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">MECの基本方針</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded border-l-2 border-primary-400">
                  <p className="font-semibold text-secondary-900">クライアントの利益を100％最優先</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-primary-400">
                  <p className="font-semibold text-secondary-900">ゴールセッティングを中心としたアプローチ</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-primary-400">
                  <p className="font-semibold text-secondary-900">クライアント自身による発見と創造を重視</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 期間・スケジュール */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
              <div className="text-center mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">期間・スケジュール</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  基本プログラム：6ヶ月
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  セッション頻度：月1回
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1セッション：30分程度
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  総セッション数：6回
                </li>
              </ul>
            </div>

            {/* セッション内容 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
              <div className="text-center mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">セッション内容</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  現状分析・課題発見
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ゴール設定・戦略策定
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  エフィカシー向上
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  行動計画・実行支援
                </li>
              </ul>
            </div>

            {/* 対応方式 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
              <div className="text-center mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-gray">対応方式</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  対面セッション対応
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  オンラインセッション対応
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  柔軟なスケジュール調整
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  セッション間サポート
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 料金体系 */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">
              料金体系
            </h2>
            <p className="text-lg text-gray-600">
              透明性のある料金設定
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 基本プログラム */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-dark-gray mb-2">基本プログラム</h3>
                <p className="text-gray-600">3ヶ月集中コース</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-primary-600">¥220,000</span>
                <span className="text-secondary-600 block">(税込)</span>
                <p className="text-sm text-secondary-500 mt-2">継続セッション（2〜6回目）</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  30分セッション × 6回（6ヶ月間）
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  対面・オンライン（Google Meet）対応
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  個別対応原則（フレキシブル対応）
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  クライアント自身のペースと発見を最優先
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors w-full"
                >
                  申し込む
                </Link>
              </div>
            </div>

            {/* 単発セッション */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-dark-gray mb-2">単発セッション</h3>
                <p className="text-gray-600">お試し・フォローアップ</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-primary-600">¥6,000</span>
                <span className="text-secondary-600 block">(税込)</span>
                <p className="text-sm text-secondary-500 mt-2">初回トライアル</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  30分程度 × 1回
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  対面・オンライン対応
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  MECの体験・理解
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  適合性の確認
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition-colors w-full"
                >
                  申し込む
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 初回トライアル */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">
                初回トライアル実施中
              </h2>
              <p className="text-lg text-gray-600">
                まずはMECの効果を実感してください
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                  初回トライアルセッション
                </h3>
                <div className="text-center mb-6 lg:text-left">
                  <span className="text-4xl font-bold text-primary-600">30分</span>
                  <span className="text-2xl text-secondary-600 ml-2">¥6,000</span>
                  <span className="text-secondary-600 block">(税込)</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>現状分析</strong>：あなたの現在の状況と課題を詳しく分析
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>目標設定</strong>：MECに基づく科学的なゴール設定を体験
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>アクションプラン</strong>：具体的な行動計画を作成
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-700 mb-4">
                    「本当に効果があるのか試してみたい」<br />
                    そんな方にぴったりです。
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    ※ 基本プログラムをお申し込みの場合、<br />
                    トライアル料金は全額返金いたします
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors w-full"
                  >
                    初回トライアルを申し込む
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">
              よくある質問
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-dark-gray mb-3">
                Q: オンラインでも対面と同じ効果が期待できますか？
              </h3>
              <p className="text-gray-700">
                A: はい。MECは言語的なコミュニケーションを中心とした手法のため、
                オンラインでも対面と同等の効果を得ることができます。
                実際に多くのクライアントがオンラインセッションで成果を上げています。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-dark-gray mb-3">
                Q: どのような方が対象ですか？
              </h3>
              <p className="text-gray-700">
                A: 経営者、管理職、起業家、フリーランスなど、
                自己成長に真剣に取り組みたい方が主な対象です。
                年齢や業界は問いませんが、変化への意欲がある方に適しています。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-dark-gray mb-3">
                Q: 3ヶ月で本当に変化が起こりますか？
              </h3>
              <p className="text-gray-700">
                A: 個人差はありますが、多くのクライアントが1ヶ月目から変化を実感しています。
                科学的手法に基づく体系的なアプローチにより、
                効率的で持続的な変化を実現します。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-dark-gray mb-3">
                Q: 途中でキャンセルすることは可能ですか？
              </h3>
              <p className="text-gray-700">
                A: プログラム開始前であればキャンセル可能です。
                開始後のキャンセルについては、個別にご相談させていただきます。
                詳細は契約時にご説明いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            あなたの変化はここから始まります
          </h2>
          <p className="text-xl text-red-100 mb-8">
            初回トライアルで、MECの効果を実感してください
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              今すぐ申し込む
            </Link>
            <Link
              href="/concepts"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              主要概念を学ぶ
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}