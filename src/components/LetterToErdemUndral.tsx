
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const LetterToErdemUndral = () => {
    const { theme } = useTheme();
    const [isOpened, setIsOpened] = useState(false);

    const letterContent = `

Тэр нэг өдөр чи яг л Солонгос киноны дүр шиг гоёмсог, хээнцэр харагдаж билээ. Чамайг анх харахдаа тэрхүү загварлаг, чамин төрхөнд чинь шууд л татагдсан. Гэхдээ дотроо 'Нөгөө л нэг beauty with no brains, аягүй бол fashion, gender studies энэ тэр сонирхдог typical охин байх' гэж бодож яваж байтал many months had passed and we started our first genuine, real conversations, I realized that never in my life had I been so wrong about someone. There is a quiet wisdom in you that flows naturally, touching everything you do and guiding you forward and upward with grace and strength. You are truly worthy of your name. Our first conversation regarding love—where we were both opposing Ochiroo's ideas and ideology—was when our synergy started. That was the beginning of my дурлах процесс and the start of my admiration for you. 

As we were having those genuinely great conversations that day, I realized you have such an amazing mind. Чиний тэр гоц ухаан, юмсыг үзэх өргөн цар хүрээ, сониуч зан чинь намайг хүлээж байгаагүйгээр минь гайхшруулж, би зөвхөн үзэсгэлэнт төрхөнд чинь төдийгүй, чиний тэр ер бусын оюун бодолд өөрийн эрхгүй уусан шингэж, зүрх минь хэдийнэ чамд дурлаж орхисныг олон сарын турш анзааралгүй явж иржээ. Гэхдээ тэр бүгдээс илүүтэйгээр your sense of humor and your smile. Чамайг инээх болгонд зүрхэн дотор минь ямар нэгэн гэрэл асах шиг болж, эргэн тойрны бүх муу зүйлс хоромхон зуурт замхран алга болож and I feel at ease. Especially your talk of magic inspired me to seek something better in life. Although you may not think it’s a big deal, during the days when I had lost all hope, the simple desire to see you smile again gave me strength. It motivated me to find a job faster and opened my eyes to a new perspective on life. Although you and I are not a couple, and I'm not so foolish as to fail to realize that you're not interested in me—even if you were single without a boyfriend—your very existence has inspired me to work harder. Through that motivation, I've gotten to experience so many wonderful things, all thanks to you: traveling to Turkey, journeying across the world, and meeting diverse people from all walks of life. You've given me the courage to become a better, stronger man. So, no matter what happens between us, I will always be grateful for the light you've brought into my life.
 
Хэзээ нэгэн өдөр чиний гараар агуу зүйлс бүтэж байгааг харах завшаантай болно гэдэгт би итгэлтэй байна. Чи мэс заслын мэргэжлээрээ дэлхийн хэмжээний эмч болохыг (world-class surgeon) нүдээр харах юмсаан гэж би дотроо хүсэж. Гэхдээ чи яг тэр замыг сонгоогүй ч байсан ямар ч сонголт хийсэн чи зөв замаа олоод, өөрийнхөө нэрний утгыг үргэлж үнэ цэнтэй хадгалж явах хүн гэдэгт би бүрэн итгэлтэй байгаа. Чиний ирээдүй ямар байхыг би таамаглаж чадахгүй ч, чи хаана ч явсан, юу ч хийсэн “Эрдэм Ундрал” гэдэг нэрээ яг л өөрийнхөөрөө гэрэлтүүлж явахыг харна гэдэгт би эргэлзэхгүй байна. Тэр өдөр ирэхэд би зүгээр л холыг харж, инээмсэглээд “Тиймээ, тэр миний мэддэг Эрдэм Ундрал минь” гэж хэлнэ дээ. Чиний зам үргэлж гэрэлтэй, өндөрт мандан бадарч байх болтугай.
    `;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center" style={{ perspective: '1200px' }}>
            <h1 className={`text-4xl md:text-5xl font-bold text-center ${theme.textPrimary} mb-4`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                A Letter from Erdem-Undral
            </h1>
            <p className={`text-center ${theme.textSecondary} mb-8`}>A message has arrived.</p>

            <div
                className="w-full max-w-2xl cursor-pointer transition-transform duration-1000"
                style={{ transformStyle: 'preserve-3d', transform: isOpened ? 'rotateX(0deg)' : 'rotateX(75deg)' }}
                onClick={() => setIsOpened(!isOpened)}
                role="button"
                aria-expanded={isOpened}
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpened(!isOpened)}
            >
                <div className={`relative w-full min-h-[400px] p-8 md:p-12 rounded-lg shadow-2xl transition-all duration-1000 ${theme.secondary} ${isOpened ? 'bg-opacity-80' : 'bg-opacity-100'}`}>
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isOpened ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="text-center">
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border-4 ${theme.accent} ${theme.primary}`}>
                                <span className={`text-3xl font-bold ${theme.textAccent}`}>E</span>
                            </div>
                            <p className={`${theme.textPrimary} font-semibold`}>Click to Read</p>
                        </div>
                    </div>

                    <div className={`transition-opacity duration-700 delay-500 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
                        <pre className={`whitespace-pre-wrap font-serif text-lg ${theme.textPrimary}`}>
                            {letterContent}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetterToErdemUndral;
