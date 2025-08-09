'use client';

import { useState } from "react";
import Layout from "@/components/Layout";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "お問い合わせ | MECコーチング",
  description: "MECコーチングのお問い合わせ・初回トライアル申し込みフォーム。対面・オンライン対応。お気軽にご連絡ください。",
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  sessionType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    sessionType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須です';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'お問い合わせ種別を選択してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージは必須です';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // フォーム送信のシミュレーション
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // エラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 bg-light-gray min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-dark-gray mb-4">
                お問い合わせありがとうございます
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                送信が完了いたしました。<br />
                48時間以内にご返信いたします。
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    inquiryType: '',
                    sessionType: '',
                    message: ''
                  });
                }}
                className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
              >
                新しいお問い合わせ
              </button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-light-gray to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600">
            初回トライアル・ご相談はお気軽にどうぞ
          </p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* フォーム */}
            <div>
              <h2 className="text-2xl font-bold text-dark-gray mb-8">
                お問い合わせフォーム
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* お名前 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-gray mb-2">
                    お名前 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="山田太郎"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* メールアドレス */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-gray mb-2">
                    メールアドレス <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* 電話番号 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-gray mb-2">
                    電話番号（任意）
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* お問い合わせ種別 */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-dark-gray mb-2">
                    お問い合わせ種別 <span className="text-primary">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">選択してください</option>
                    <option value="trial">初回トライアル申し込み</option>
                    <option value="program">基本プログラム申し込み</option>
                    <option value="single">単発セッション申し込み</option>
                    <option value="question">質問・相談</option>
                    <option value="other">その他</option>
                  </select>
                  {errors.inquiryType && (
                    <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
                  )}
                </div>

                {/* セッション形式 */}
                <div>
                  <label htmlFor="sessionType" className="block text-sm font-semibold text-dark-gray mb-2">
                    希望セッション形式（任意）
                  </label>
                  <select
                    id="sessionType"
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="online">オンライン</option>
                    <option value="inperson">対面</option>
                    <option value="both">どちらでも可</option>
                  </select>
                </div>

                {/* メッセージ */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-gray mb-2">
                    メッセージ・ご質問 <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="ご質問やご要望をお聞かせください"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* 送信ボタン */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-md font-semibold text-white transition-colors ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary hover:bg-red-700'
                    }`}
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </div>
              </form>
            </div>

            {/* サイドバー情報 */}
            <div className="space-y-8">
              {/* 連絡先情報 */}
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-dark-gray mb-6">
                  お問い合わせ情報
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">対応時間</h4>
                    <p className="text-gray-700">
                      平日 9:00 - 18:00<br />
                      土日祝日も対応可能（要相談）
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">返信時間</h4>
                    <p className="text-gray-700">
                      通常48時間以内にご返信いたします
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-2">セッション対応</h4>
                    <p className="text-gray-700">
                      オンライン・対面両方対応<br />
                      全国どこからでもご相談可能
                    </p>
                  </div>
                </div>
              </div>

              {/* 初回トライアル案内 */}
              <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-dark-gray mb-4">
                  初回トライアル
                </h3>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-primary">60分 ¥5,000</span>
                  <span className="text-gray-600 block">(税込)</span>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 現状分析とゴール設定</li>
                  <li>• MECの体験セッション</li>
                  <li>• 具体的なアクションプラン</li>
                  <li>• 基本プログラム申込時は全額返金</li>
                </ul>
              </div>

              {/* よくある質問 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-dark-gray mb-4">
                  よくある質問
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">
                      Q: 相談だけでも大丈夫ですか？
                    </h4>
                    <p className="text-gray-700">
                      A: はい、お気軽にご相談ください。無理な勧誘は一切いたしません。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">
                      Q: オンラインでも効果はありますか？
                    </h4>
                    <p className="text-gray-700">
                      A: オンラインでも対面と同等の効果を得られます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}