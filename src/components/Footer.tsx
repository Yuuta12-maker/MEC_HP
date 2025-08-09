import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">MECコーチング</h3>
            <p className="text-gray-300 mb-4">
              認知科学に基づく最先端のコーチング手法で、
              あなたの理想の自分を実現します。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  森山雄太について
                </Link>
              </li>
              <li>
                <Link href="/mec" className="text-gray-300 hover:text-white transition-colors">
                  MECとは
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-300 hover:text-white transition-colors">
                  プログラム詳細
                </Link>
              </li>
              <li>
                <Link href="/concepts" className="text-gray-300 hover:text-white transition-colors">
                  主要概念
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ情報 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-gray-300">
              <p>初回トライアル受付中</p>
              <p>対面・オンライン対応</p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors mt-4"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 MECコーチング（森山雄太）. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;