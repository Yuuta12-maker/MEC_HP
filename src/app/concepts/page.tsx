import Link from "next/link";
import Layout from "@/components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "主要概念 | MECコーチング",
  description: "MECの核となる概念を詳しく解説。ゴール設定、エフィカシー、コンフォートゾーン、マインドの使い方について学べます。",
};

export default function Concepts() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-light-gray to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            主要概念
          </h1>
          <p className="text-xl text-gray-600">
            MECの核となる4つの重要な概念
          </p>
        </div>
      </section>

      {/* 概要 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-gray mb-6">
            成功への4つの鍵
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            マインドエンジニアリングコーチング（MEC）は、認知科学に基づいた4つの核心的概念を軸に構成されています。
            これらの概念を理解し、実践することで、あなたの思考パターンを根本から変革し、
            理想の自分へと導きます。
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <p className="font-semibold text-dark-gray">ゴール設定</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <p className="font-semibold text-dark-gray">エフィカシー</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <p className="font-semibold text-dark-gray">コンフォートゾーン</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <p className="font-semibold text-dark-gray">マインドの使い方</p>
            </div>
          </div>
        </div>
      </section>

      {/* ゴール設定の重要性 */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h2 className="text-3xl font-bold text-dark-gray">ゴール設定の重要性</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  <strong className="text-primary">科学的なゴール設定</strong>は、MECの基盤となる最も重要な概念です。
                  単なる願望や夢ではなく、脳科学に基づいた具体的で達成可能なゴールを設定します。
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-dark-gray mb-4">効果的なゴール設定の特徴</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>具体性</strong>：曖昧さを排除し、明確で測定可能な目標
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>挑戦性</strong>：現在のコンフォートゾーンを超える設定
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>一貫性</strong>：価値観と整合した本質的な目標
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">なぜゴール設定が重要なのか？</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  脳は「目標」がなければ効率的に動作しません。
                  明確なゴールがあることで、無意識レベルで情報収集と問題解決が始まります。
                </p>
                <p>
                  また、科学的に設定されたゴールは、
                  <strong className="text-primary">RAS（網様体賦活系）</strong>を活性化し、
                  目標達成に必要な情報や機会を自然に引き寄せるようになります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* エフィカシーとは */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h2 className="text-3xl font-bold text-dark-gray">エフィカシーとは</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  <strong className="text-primary">エフィカシー（Efficacy）</strong>とは、
                  「ゴールを達成する自分の能力への確信度」のことです。
                  これは単なる自信とは異なり、科学的に向上させることができる認知機能です。
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-xl font-semibold text-dark-gray mb-4">エフィカシーの特徴</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">特定のゴールに対する能力への確信</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">現在の能力に関係なく向上可能</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">行動力とパフォーマンスに直結</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1 space-y-6">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-gray mb-3">エフィカシーが高い人の特徴</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 困難な状況でも諦めない</li>
                  <li>• 創造的な解決策を見つけられる</li>
                  <li>• ストレスに強い</li>
                  <li>• 継続的に成長し続ける</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-gray mb-3">エフィカシーが低い人の特徴</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• すぐに諦めてしまう</li>
                  <li>• 問題を他人のせいにする</li>
                  <li>• 変化を避けたがる</li>
                  <li>• 現状維持を好む</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コンフォートゾーンの拡張 */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                3
              </div>
              <h2 className="text-3xl font-bold text-dark-gray">コンフォートゾーンの拡張</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-6">コンフォートゾーンとは？</h3>
              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-primary">コンフォートゾーン</strong>とは、
                心理的に安全で居心地の良い範囲のことです。
                人は無意識のうちに、この範囲内で行動しようとする傾向があります。
              </p>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-dark-gray mb-3 flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    現在のコンフォートゾーン内
                  </h4>
                  <p className="text-gray-700">
                    既知の環境・慣れた行動・予測可能な結果<br />
                    → 安全だが成長は期待できない
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-dark-gray mb-3 flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                    コンフォートゾーン拡張中
                  </h4>
                  <p className="text-gray-700">
                    新しい挑戦・未知の体験・不確実性<br />
                    → 不安はあるが大きな成長が期待できる
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-6">拡張のメカニズム</h3>
              
              <div className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-lg font-semibold text-dark-gray mb-3">1. 認識の変化</h4>
                  <p className="text-gray-700">
                    新しい情報や体験により、「当たり前」だと思っていたことが変化します。
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-lg font-semibold text-dark-gray mb-3">2. 行動の変化</h4>
                  <p className="text-gray-700">
                    新しい認識に基づいて、これまでとは異なる行動を取るようになります。
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-lg font-semibold text-dark-gray mb-3">3. 結果の変化</h4>
                  <p className="text-gray-700">
                    新しい行動により、これまでと異なる結果を得られるようになります。
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-lg font-semibold text-dark-gray mb-3">4. ゾーンの拡張</h4>
                  <p className="text-gray-700">
                    新しい結果が「当たり前」になることで、コンフォートゾーンが拡張されます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* マインドの使い方 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                4
              </div>
              <h2 className="text-3xl font-bold text-dark-gray">マインドの使い方</h2>
            </div>
            <p className="text-lg text-gray-600">
              認知科学に基づく効果的な思考法
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-3">セルフトーク</h3>
              <p className="text-gray-700 text-sm">
                内なる声をコントロールし、ポジティブな自己対話を実践
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-3">ビジュアライゼーション</h3>
              <p className="text-gray-700 text-sm">
                目標達成した状態を鮮明にイメージする技術
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-3">注意のコントロール</h3>
              <p className="text-gray-700 text-sm">
                意識的に注意を向ける対象を選択し、集中力を向上
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-3">メンタルリハーサル</h3>
              <p className="text-gray-700 text-sm">
                成功の体験を事前に脳内で繰り返し練習
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
            <h3 className="text-2xl font-semibold text-dark-gray mb-6">統合的アプローチ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-4">認知的側面</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    思考パターンの分析と改善
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    認知バイアスの理解と活用
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    メタ認知能力の向上
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-gray mb-4">実践的側面</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    日常的な練習方法の習得
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    習慣化のテクニック
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    継続的な自己改善システム
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 統合効果 */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-gray mb-8">
            4つの概念の統合効果
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            これら4つの概念が相互に作用することで、
            劇的な変化と持続的な成長を実現します。
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-dark-gray mb-4">短期的効果</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 明確な方向性の獲得</li>
                  <li>• モチベーションの向上</li>
                  <li>• 行動力の増加</li>
                  <li>• 集中力の向上</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-dark-gray mb-4">長期的効果</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 根本的な思考パターンの変革</li>
                  <li>• 継続的な成長習慣の確立</li>
                  <li>• 自己効力感の向上</li>
                  <li>• 人生全体の質の向上</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            これらの概念を実践で身につけませんか？
          </h2>
          <p className="text-xl text-red-100 mb-8">
            初回トライアルで、MECの4つの概念を体験してください
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