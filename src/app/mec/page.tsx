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
            <p className="text-lg text-secondary-700 leading-relaxed mb-4">
              <strong className="text-primary-600">マインドエンジニアリングコーチング（MEC）</strong>は、
              最新の認知科学的知見を基盤とし、人が本来持つマインドの力を最大限に引き出す実践的プログラムです。
            </p>
            <div className="bg-white p-6 rounded-lg mt-4 border-l-2 border-primary-300">
              <h4 className="font-semibold text-secondary-900 mb-3">核心原則</h4>
              <ul className="space-y-2 text-secondary-700">
                <li>• <strong>実践方法はシンプル</strong></li>
                <li>• <strong>努力感不要</strong>（根性論ではない）</li>
                <li>• <strong>やりたいことを、やりたいだけやる</strong></li>
                <li>• <strong>過去は一切関係ない</strong>（時間は未来から過去へ流れる）</li>
              </ul>
            </div>
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

      {/* MECの理論的基盤 */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              MECの理論的基盤
            </h2>
            <p className="text-lg text-secondary-600">
              科学的根拠に基づく5つの核心理論
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary-400">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                ホメオスタシス理論
              </h3>
              <div className="text-secondary-700 space-y-3 text-sm">
                <p><strong>定義：</strong>あるべき状態に戻ろうとする機能</p>
                <p><strong>物理レベル：</strong>体温調節、恒常性維持</p>
                <p><strong>精神レベル：</strong>無意識の選択、安心感の維持</p>
                <div className="bg-primary-50 p-3 rounded mt-4">
                  <p className="font-semibold text-primary-700">エネルギー公式</p>
                  <p className="font-mono">ΔE = Ue - Ua</p>
                  <p className="text-xs">現状から遠いゴールほど大きなエネルギーが生成</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary-400">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                コンフォートゾーン理論
              </h3>
              <div className="text-secondary-700 space-y-3 text-sm">
                <p><strong>定義：</strong>当然あって然るべき空間・当たり前の環境</p>
                <p><strong>メカニズム：</strong>マインドはコンフォートゾーンを維持するように働く</p>
                <p><strong>重要原則：</strong></p>
                <div className="bg-primary-50 p-3 rounded">
                  <p className="font-semibold text-primary-700">「ゴールはおぼろげ、コンフォートゾーンはリアルに」</p>
                  <p className="text-xs">ゴールは現状の外→リアルに見えるはずがない</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">3</span>
                スコトーマ理論
              </h3>
              <div className="text-secondary-700 space-y-2 text-sm">
                <p><strong>定義：</strong>意識が覆われている領域（盲点）</p>
                <p>ゴールへの道筋は現在スコトーマに隠れている</p>
                <p className="text-primary-600 font-semibold">達成方法がわからないゴールこそ適切</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">4</span>
                RAS理論
              </h3>
              <div className="text-secondary-700 space-y-2 text-sm">
                <p><strong>定義：</strong>網様体賦活系・情報フィルタリング機能</p>
                <p>重要な情報しか意識に上げられない</p>
                <p className="text-primary-600 font-semibold">ゴール設定→RAS調整→達成方法が見える</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">5</span>
                エフィカシー理論
              </h3>
              <div className="text-secondary-700 space-y-2 text-sm">
                <p><strong>定義：</strong>自己能力の自己評価</p>
                <p>ゴール達成への確信度</p>
                <p className="text-primary-600 font-semibold">不安＝現状の外の証拠</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 従来のコーチングとの違い */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              従来のコーチングとの違い
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 従来のコーチング */}
            <div className="bg-neutral-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-6 text-center">
                従来のコーチング
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">具体的なアドバイスを提供</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">外部から解決策を提示</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">行動変容にフォーカス</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">技術やスキルを教える</span>
                </li>
              </ul>
            </div>

            {/* MEC */}
            <div className="bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
              <h3 className="text-xl font-semibold text-primary-600 mb-6 text-center">
                MEC（マインドエンジニアリングコーチング）
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">具体的なアドバイスはしない</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">自分でゴール設定、自分で方法を発見</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">マインドに働きかける</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">マインドの使い方を教えるのみ</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded border-l-4 border-primary-400">
                <p className="text-sm font-semibold text-primary-700">基本方針</p>
                <p className="text-xs text-secondary-600">クライアントの利益を100％最優先・ゴールセッティング中心・クライアント自身による発見と創造を重視</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MECが選ばれる理由 */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              MECが選ばれる理由
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                🎯 明確な結果
              </h3>
              <p className="text-secondary-700">
                科学的手法により、目標達成までのプロセスが明確で、
                結果を測定・評価できます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                ⏰ 効率的
              </h3>
              <p className="text-secondary-700">
                脳の情報処理メカニズムを活用することで、
                短期間での変化と成長を実現します。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                🔄 継続性
              </h3>
              <p className="text-secondary-700">
                一時的な変化ではなく、根本的な思考パターンの変革により、
                持続可能な成長を実現します。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                🎨 個別最適化
              </h3>
              <p className="text-secondary-700">
                一人ひとりの認知特性や価値観に合わせて、
                最適なアプローチを設計します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            科学的なコーチングを体験してみませんか？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            初回トライアルで、MECの効果を実感してください
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-50 hover:shadow-lg transition-all focus-visible:focus-visible"
            >
              初回トライアル申し込み
            </Link>
            <Link
              href="/program"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all focus-visible:focus-visible"
            >
              プログラム詳細
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}