import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">MECコーチング</h3>
            <p className="text-neutral-300 mb-4">
              認知科学に基づく最先端のコーチング手法で、
              あなたの理想の自分を実現します。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-primary-300 transition-colors focus-visible:focus-visible">
                  森山雄太について
                </Link>
              </li>
              <li>
                <Link href="/mec" className="text-neutral-300 hover:text-primary-300 transition-colors focus-visible:focus-visible">
                  MECとは
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-neutral-300 hover:text-primary-300 transition-colors focus-visible:focus-visible">
                  プログラム詳細
                </Link>
              </li>
              <li>
                <Link href="/concepts" className="text-neutral-300 hover:text-primary-300 transition-colors focus-visible:focus-visible">
                  主要概念
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-primary-300 transition-colors focus-visible:focus-visible">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ情報 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">お問い合わせ</h4>
            <div className="space-y-2 text-neutral-300">
              <p>初回トライアル受付中</p>
              <p>対面・オンライン対応</p>
              <Link
                href="/contact"
                className="inline-block btn-primary px-6 py-2 rounded-md mt-4 focus-visible:focus-visible"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
          <p className="text-neutral-300">
            © 2024 MECコーチング（森山雄太）. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;