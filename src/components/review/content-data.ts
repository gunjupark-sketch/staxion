// 가이드북 초고 리뷰 콘텐츠 데이터
// 각 섹션: { id: 문단 식별자, html: 렌더링할 HTML }

import { step1Data } from "./content-step1";
import { step2Data } from "./content-step2";
import { step3Data } from "./content-step3";
import { step4Data } from "./content-step4";
import { step5Data } from "./content-step5";
import { appendixData } from "./content-appendix";

export interface Section {
  id: string;
  html: string;
}

export const contentData: Record<string, Section[]> = {
  prologue: [
    {
      id: "pro-cover",
      html: `
        <div class="text-center py-16 border-b border-[#eee] mb-10">
          <div style="display:inline-block;border:2px solid #C4929B;border-radius:16px;padding:40px 48px;margin-bottom:20px;">
            <p class="text-[#C4929B] text-xs font-semibold tracking-[0.3em] mb-3">美 談</p>
            <h1 class="text-5xl font-bold text-[#1a1a1a] mb-2" style="font-family:Georgia,'Noto Serif KR',serif;">미 담</h1>
            <div class="w-12 h-0.5 bg-[#C4929B] mx-auto my-4"></div>
            <p class="text-[#666] text-sm leading-relaxed">미용치과의 아름다운 도입 이야기</p>
          </div>
          <p class="text-[#1a1a1a] text-lg font-bold mt-6 mb-2">치과의사를 위한 미용시술 도입 완전 가이드</p>
          <p class="text-[#999] text-sm">(주)더스테이션 | 의료성장연구소</p>
        </div>
      `,
    },
    {
      id: "pro-toc",
      html: `
        <div class="mb-10">
          <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">CONTENTS</h2>
          <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;font-family:'Pretendard',sans-serif;">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div style="display:flex;align-items:baseline;gap:12px;padding:10px 16px;background:#F9F5F6;border-radius:8px;">
                <span style="font-size:12px;font-weight:700;color:#C4929B;min-width:72px;">프롤로그</span>
                <span style="font-size:14px;color:#1a1a1a;">당신의 치과, 지금 변화가 필요한가</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:12px;padding:10px 16px;border-radius:8px;">
                <span style="font-size:12px;font-weight:700;color:#C4929B;min-width:72px;">STEP 0</span>
                <span style="font-size:14px;color:#1a1a1a;">법적 근거 : 흔들리지 않는 단단한 토대</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:12px;padding:10px 16px;background:#F9F5F6;border-radius:8px;">
                <span style="font-size:12px;font-weight:700;color:#C4929B;min-width:72px;">STEP 1</span>
                <span style="font-size:14px;color:#1a1a1a;">도입 방향 설정 : 어떤 시술을, 어떻게 시작할 것인가</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:12px;padding:10px 16px;border-radius:8px;">
                <span style="font-size:12px;font-weight:700;color:#C4929B;min-width:72px;">STEP 2</span>
                <span style="font-size:14px;color:#1a1a1a;">운영 시스템 구축 : 일상 진료에 미용을 완벽하게 녹여내는 법</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:12px;padding:10px 16px;background:#F9F5F6;border-radius:8px;">
                <span style="font-size:12px;font-weight:700;color:#C4929B;min-width:72px;">STEP 3</span>
                <span style="font-size:14px;color:#1a1a1a;">팀 운영과 공간 세팅 : 차이를 만드는 환자 경험(MOT) 설계</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:12px;padding:10px 16px;border-radius:8px;">
                <span style="font-size:12px;font-weight:700;color:#C4929B;min-width:72px;">STEP 4</span>
                <span style="font-size:14px;color:#1a1a1a;">환자 유입 : 구환 전환부터 외부 마케팅까지</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:12px;padding:10px 16px;background:#F9F5F6;border-radius:8px;">
                <span style="font-size:12px;font-weight:700;color:#C4929B;min-width:72px;">STEP 5</span>
                <span style="font-size:14px;color:#1a1a1a;">재무 및 리스크 관리 : 확실한 수익 창출과 완벽한 법적 방어</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:12px;padding:10px 16px;border-radius:8px;">
                <span style="font-size:12px;font-weight:700;color:#C4929B;min-width:72px;">부록</span>
                <span style="font-size:14px;color:#1a1a1a;">실전 자료 및 템플릿</span>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "pro-title",
      html: `
        <div class="text-center py-12 border-b border-[#eee] mb-10">
          <p class="text-[#C4929B] text-sm font-medium tracking-[0.2em] mb-4">A E S T H E T I C &nbsp; D E N T I S T R Y &nbsp; P R A C T I C E &nbsp; G U I D E</p>
          <h1 class="text-4xl font-bold text-[#1a1a1a] mb-3">미용치과 도입 실무 마스터</h1>
          <p class="text-[#999] text-sm">(주)더스테이션 | 의료성장연구소</p>
        </div>
      `,
    },
    {
      id: "pro-01",
      html: `
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">01. 당신의 치과는 지금, 진화하고 있는가</h2>
        <p class="text-[#333] leading-relaxed mb-4">치과 개원 시장의 판이 근본적으로 흔들리고 있다. 건강보험 수가는 수 년째 제자리걸음이고, 길 하나를 두고 마주한 개원가의 경쟁은 숨이 막힐 지경이다. 신환 유입은 눈에 띄게 줄어들며, 임플란트와 교정에만 의존하는 전통적인 수익 구조로는 머지않아 성장의 한계에 부딪히는 임계점이 반드시 찾아온다. 진료실을 지키는 원장들이라면 누구나 뼈저리게 체감하고 있는 서늘한 현실이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">변화가 필요하다는 것은 모두가 안다. 문제는 '어디서부터 어떻게 돌파구를 찾을 것인가' 이다.</p>
        <p class="text-[#1a1a1a] font-bold text-lg mb-4">미용치과는 그 막막한 질문에 대한 가장 현실적이고 강력한 해답이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">보톡스, 필러, 레이저, 실리프팅으로 대표되는 안면미용시술 시장은 대한민국 대법원 판결을 통해 치과의사에게 법적으로 완벽하게 열려 있다. 구체적인 법적 근거와 허용 범위의 전모는 이 책의 'STEP 0'에서 명확하게 확인할 수 있다. 주목해야 할 사실은, 이 시장이 정체된 치과계와 달리 지금 이 순간에도 폭발적으로 팽창하고 있는 메가 트렌드라는 점이다.</p>
        <!-- 미용치과 시장 지표 인포그래픽 -->
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">MARKET EVIDENCE</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">미용치과 시장을 증명하는 압도적 지표</div>
          </div>
          <div style="display:flex;gap:16px;">
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="font-size:36px;font-weight:800;color:#C4929B;margin-bottom:8px;">20~40%</div>
              <div style="font-size:13px;font-weight:700;color:#2C2C2C;margin-bottom:4px;">미용시술 추가 매출 비중</div>
              <div style="font-size:12px;color:#666;line-height:1.5;">기존 치과 수익 대비<br/>미용시술 추가 매출 비중</div>
            </div>
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="font-size:36px;font-weight:800;color:#C4929B;margin-bottom:8px;">845%</div>
              <div style="font-size:13px;font-weight:700;color:#2C2C2C;margin-bottom:4px;">글로벌 미용시술 성장률</div>
              <div style="font-size:12px;color:#666;line-height:1.5;">글로벌 비외과적 미용시술 시장의<br/>경이로운 성장률</div>
            </div>
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="font-size:36px;font-weight:800;color:#C4929B;margin-bottom:8px;">2016</div>
              <div style="font-size:13px;font-weight:700;color:#2C2C2C;margin-bottom:4px;">대법원 판결</div>
              <div style="font-size:12px;color:#666;line-height:1.5;">전원합의체 판결로<br/>합법성 최종 확정</div>
            </div>
          </div>
        </div>
        <p class="text-[#333] leading-relaxed mb-8">이 책은 그 낯설지만 매력적인 길을 처음 걷고자 하는 원장들을 위한 가장 완벽한 실전 로드맵이다.</p>
      `,
    },
    {
      id: "pro-02",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">02. 치과가 이 시장의 주도권을 쥐어야 하는 압도적 이유</h2>
        <p class="text-[#333] leading-relaxed mb-4">흔히들 묻는다. 피부과나 성형외과가 이미 선점하고 치열하게 다투는 시장에, 치과가 굳이 뛰어들 이유가 있을까.</p>
        <p class="text-[#333] leading-relaxed mb-4">대답은 단호하다. '있다'. 그것도 압도적으로 유리한 조건으로 존재한다.</p>
        <p class="text-[#333] leading-relaxed mb-6">치과는 미용 시장에서 타 진료과가 결코 흉내 낼 수 없는 세 가지 절대적 무기를 쥐고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째, 타의 추종을 불허하는 해부학적 전문성이다.</span> 치과의사는 학부 시절부터 6년 이상 안면부 신경과 혈관, 근육의 복잡한 해부학적 구조를 가장 혹독하고 정밀하게 훈련 받은 유일무이한 전문 직역이다. 매일같이 좁고 예민한 구강 내에 마취 주사를 놓으며 벼려진 손끝의 감각은, 보톡스와 필러 시술에서 치과만의 가장 날카로운 무기가 된다.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째, 유치 비용 '제로(0)'의 거대한 기존 구환 자산이다.</span> 이것이 치과만이 가진 결정적 승부수다. 피부과나 에스테틱 샵이 막대한 마케팅 비용을 쏟아부어 신환을 모을 때, 치과에는 이미 원장과 단단한 신뢰 관계가 형성된 수백, 수천 명의 잠재적 미용 고객이 제 발로 찾아온다. 치과 진료를 마친 환자가 자연스럽게 얼굴 라인 상담으로 이어지는 이 매끄러운 동선은, 외부 마케팅에 의존하는 일반 의원이 구조적으로 절대 모방할 수 없는 치과만의 특권이다.</p>
        <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">셋째, 흔들림 없는 완벽한 법적 근거다.</span> 2016년 대법원 전원합의체 판결을 통해 치과의사의 안면 미용시술은 합법임이 최종 확정되었다. 더 이상 눈치를 보거나 위축될 이유가 없다.</p>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">기억해야 한다. 치과의 안면미용시술은 남의 파이를 뺏어오기 위해 억지로 끼어드는 소모적인 진흙탕 싸움이 아니다. 법이 인정한 본인들의 땅에서, 이미 보유한 자산을 활용해 포지션을 가장 영리하고 우아하게 확장하는 정당한 권리다.</p>
        <!-- 3가지 자산 인포그래픽 -->
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">CORE ADVANTAGES</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">치과가 이 시장을 주도해야 하는 3가지 이유</div>
            <div style="font-size:13px;color:#888;margin-top:4px;">다른 진료과가 따라올 수 없는 구조적 강점</div>
          </div>
          <div style="display:flex;gap:16px;">
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="width:56px;height:56px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 1 5 5c0 2-1 3-2 4l-1 1v2h-4v-2l-1-1c-1-1-2-2-2-4a5 5 0 0 1 5-5z"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#C4929B;margin-bottom:4px;">01</div>
              <div style="font-size:15px;font-weight:700;color:#2C2C2C;margin-bottom:8px;">해부학적<br/>전문성</div>
              <div style="font-size:13px;color:#666;line-height:1.6;">학부 6년 이상 안면부 신경, 혈관, 근육 해부학을 가장 혹독하게 훈련. <span style="color:#C4929B;font-weight:600;">타의 추종을 불허하는</span> 유일무이한 전문 직역.</div>
            </div>
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="width:56px;height:56px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#C4929B;margin-bottom:4px;">02</div>
              <div style="font-size:15px;font-weight:700;color:#2C2C2C;margin-bottom:8px;">기존 구환<br/>자산</div>
              <div style="font-size:13px;color:#666;line-height:1.6;">수백~수천 명의 잠재적 미용 고객이 제 발로 찾아오는 <span style="color:#C4929B;font-weight:600;">유치 비용 제로(0)</span>의 결정적 승부수. 구조적으로 절대 모방 불가.</div>
            </div>
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="width:56px;height:56px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#C4929B;margin-bottom:4px;">03</div>
              <div style="font-size:15px;font-weight:700;color:#2C2C2C;margin-bottom:8px;">완벽한<br/>법적 근거</div>
              <div style="font-size:13px;color:#666;line-height:1.6;">2016년 대법원 전원합의체 판결로 <span style="color:#C4929B;font-weight:600;">안면 미용시술 합법</span> 최종 확정. 더 이상 눈치를 보거나 위축될 이유 없음.</div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "pro-03",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">03. 메디스테이션의 약속</h2>
        <p class="text-[#333] leading-relaxed mb-4">의료성장연구소 메디스테이션은 치과 미용시술 도입을 전문으로 연구하고 설계하는 컨설팅 및 교육 연구소이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">우리가 제공하는 것은 단순히 주사기 잡는 법이나 단편적인 시술 테크닉 교육에 머물지 않는다. 원장의 치과가 안전하고 품격 있는 '미용치과'로 완벽하게 전환될 수 있도록, 도입 첫날의 설계부터 스탭 교육, 환자 유입, 운영 시스템의 안착까지 전 과정을 함께 걷는 든든한 러닝메이트다.</p>
        <p class="text-[#333] leading-relaxed mb-4">이 책은 우리가 현장에서 증명해 낸 그 기나긴 여정의 전체 지도와 같다. 어디서 발을 떼어야 하는지, 무엇을 준비하고 어떤 순서로 움직여야 리스크를 줄일 수 있는지 STEP 0부터 STEP 5까지 차분히 따라가기만 하면 된다. 반드시 처음부터 끝까지 정독해야 하는 교과서일 필요는 없다. 지금 당장 치과가 직면한 현실, 가장 시급한 고민이 있는 챕터를 먼저 펼쳐 즉시 실행에 옮기면 된다.</p>
        <p class="text-[#333] leading-relaxed mb-4">준비된 원장에게, 미용치과 시장의 문은 이미 무한한 성장의 기회로 활짝 열려 있다.</p>
        <div class="border-l-4 border-[#C4929B] pl-4 py-2 mb-8">
          <p class="text-[#333] italic leading-relaxed">"One core vision, many ways, one meaning."</p>
          <p class="text-[#999] text-sm mt-1">-- 의료성장연구소 메디스테이션</p>
        </div>
      `,
    },
    {
      id: "pro-roadmap",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">이 책의 구성 : 미용 치과의학 입문 전체 로드맵</h2>
        <p class="text-[#333] leading-relaxed mb-6">법적 근거 확립부터 재무 관리까지, 성공적인 안착을 위한 6단계 체계적 입문</p>
        <!-- 6단계 로드맵 도표 -->
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">ROADMAP</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">미용 치과의학 입문 6단계 로드맵</div>
            <div style="font-size:13px;color:#888;margin-top:4px;">STEP 0 &rarr; 5 실전 로드맵</div>
          </div>
          <div style="position:relative;height:4px;background:#F5E6E8;border-radius:2px;margin:0 40px 28px;">
            <div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,#e8d5d8,#C4929B);border-radius:2px;"></div>
          </div>
          <div style="display:flex;gap:8px;">
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">0</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">법적 근거</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">판결 확정</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">"치과의사가 해도<br/>되는 건가?"</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">1</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">도입 방향</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">전략 수립</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">어떤 시술을<br/>어떻게 시작할 것인가</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">2</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">운영 시스템</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">프로세스</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">일상 진료에 미용을<br/>자연스럽게 녹이는 법</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">3</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">팀 &amp; 공간</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">환경 조성</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">차이를 만드는<br/>환자 경험 설계</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">4</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">환자 유입</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">마케팅 전략</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">구환 전환부터<br/>외부 마케팅까지</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#2C2C2C;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;box-shadow:0 0 0 3px #C4929B;">5</div>
              <div style="font-size:12px;font-weight:700;color:#2C2C2C;margin-bottom:2px;">재무 &amp; 리스크</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">통합 관리</div>
              <div style="background:#2C2C2C;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#F5E6E8;line-height:1.5;">확실한 수익 창출<br/>완벽한 법적 방어</div>
              </div>
              <div style="color:#2C2C2C;font-size:12px;margin-top:8px;font-weight:700;">GOAL</div>
            </div>
          </div>
          <div style="text-align:center;margin-top:20px;padding-top:16px;border-top:1px solid #F5E6E8;">
            <div style="font-size:12px;color:#999;">현재의 포지션 바로 그 단계부터 과감하게 페이지를 펼치길..</div>
          </div>
        </div>
        <div class="space-y-3 mb-8">
          <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">STEP 0. 법적 근거 (판결 확정)</span> "치과의사가 해도 되는 건가?" 대법원 판결 철저 분석, 시술 허용 범위 지도, 글로벌 스탠다드 및 리스크 최소화 원칙.</p>
          <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">STEP 1. 도입 방향 설정 (전략 수립)</span> "어떤 시술을, 어떻게 시작할 것인가?" 7대 핵심 시술별 가이드, 수가 체계 설계, 수익 구조 분석, 최적의 장비 및 제품 선정 노하우.</p>
          <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">STEP 2. 운영 시스템 구축 (프로세스)</span> "일상 진료에 미용을 어떻게 자연스럽게 녹일 것인가?" 표준 운영 절차(SOP) 구축, 환자 상담 매뉴얼, 세무 및 수납 관리, 응급 프로토콜, 재방문율 극대화 시스템.</p>
          <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">STEP 3. 팀 운영 및 공간 세팅 (환경 조성)</span> "스탭을 설득하고 공간을 어떻게 꾸밀 것인가?" 고객 접점(MOT) 설계, 원장의 역량 준비, 스탭 교육 매뉴얼, 최소 비용으로 완성하는 미용 공간 및 동선 세팅.</p>
          <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">STEP 4. 환자 유입 (마케팅 전략)</span> "광고비 없이 환자를 어떻게 모을 것인가?" 가장 확실한 구환 전환 업셀링 전략, 생생한 후기 수집, 내/외부 마케팅, 필수 의료광고 심의 통과 가이드.</p>
          <p class="text-[#333] leading-relaxed mb-2"><span class="text-[#1a1a1a] font-bold">STEP 5. 재무 및 리스크 관리 (통합 관리)</span> "수익은 실제로 얼마나 남고, 리스크는 어떻게 방어하는가?" 재무 분석, 현장 밀착형 법적 Q&A, 민원 및 신고 발생 시 48시간 골든타임 대응 매뉴얼, 손익분기점(BEP) 시뮬레이션.</p>
        </div>
      `,
    },
  ],

  step0: [
    {
      id: "s0-title",
      html: `
        <div class="text-center py-12 border-b border-[#eee] mb-10">
          <p class="text-[#C4929B] text-sm font-medium tracking-[0.2em] mb-4">S T E P &nbsp; 0</p>
          <h1 class="text-4xl font-bold text-[#1a1a1a] mb-3">법적 근거 -- 치과의사 미용시술은 완벽한 '합법'이다</h1>
          <p class="text-[#999] text-sm">대법원 전원합의체 판결이 선언한 치과의사의 안면부 시술 권한</p>
        </div>
      `,
    },
    {
      id: "s0-intro",
      html: `
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">도입 : 왜 기술이나 마케팅이 아닌 '법'부터 알아야 하는가</h2>
        <p class="text-[#333] leading-relaxed mb-4">이 챕터에서는 치과의사가 미용시술을 당당하게 주도할 수 있는 확고한 법적 근거를 낱낱이 파헤친다. 수천만 원짜리 장비 카탈로그를 뒤적이기 전에, 화려한 시술 메뉴판을 기획하기 전에, 직원을 모아놓고 회의를 소집하기 전에 가장 먼저 확인해야 할 단 한 가지가 있다.</p>
        <p class="text-[#333] leading-relaxed mb-4">바로 당신이 두 발로 딛고 설 영토가 푹푹 빠지는 진흙탕인지, 흔들림 없는 단단한 콘크리트인지 확인하는 일이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">미용시술을 도입하려는 치과 원장들이 가장 먼저 마주하는 감정은 안타깝게도 설레는 기대가 아니라 막연한 '불안'이다.</p>
        <div class="border-l-4 border-[#C4929B] pl-4 py-2 mb-6">
          <p class="text-[#333] italic leading-relaxed">"치과의사가 보톡스를 놔도 진짜 괜찮은 건가?"</p>
          <p class="text-[#333] italic leading-relaxed">"주변 피부과에서 꼬투리를 잡아 고발하면 어떡하지?"</p>
          <p class="text-[#333] italic leading-relaxed">"환자에게 문제라도 생기면 내 소중한 면허가 날아가는 건 아닐까?"</p>
        </div>
        <p class="text-[#333] leading-relaxed mb-4">이러한 불안과 자기검열은 지극히 자연스러운 현상이다. 치과의사가 6년의 세월 동안 피땀 흘려 받은 혹독한 수련은 치아와 구강 내부에만 고도로 집중되어 있었기에, '안면부 미용시술'이라는 영토는 심리적으로 낯설게 느껴질 수밖에 없다. 게다가 의사협회 산하의 신고센터 운영이나 현장에서의 고발 사례 같은 살벌한 뉴스를 접하다 보면, 머리로는 합법이라는 사실을 알아도 선뜻 환자의 얼굴을 향해 주사기를 들어 올릴 용기가 나지 않는다.</p>
        <p class="text-[#333] leading-relaxed mb-4">그래서 이 책은 시술 테크닉이나 경영의 마법이 아닌, 차갑고도 명징한 '법적 근거'부터 짚고 넘어간다.</p>
        <p class="text-[#333] leading-relaxed mb-8">이유는 단순명료하다. 법적 토대가 흔들리면 그 위에 쌓아 올린 모든 비즈니스는 한순간에 무너져 내리는 사상누각이 되기 때문이다. 막대한 자본을 투자해 장비를 들이고 시스템을 구축한 뒤 "사실 불법이었습니다"라는 결론이 나오면 그 피해는 돌이킬 수 없다. 반대로, 내 시술이 법적으로 완벽하게 보호받는다는 100%의 확신이 서면 이후의 모든 경영적 의사결정은 차원이 다른 추진력을 얻게 된다. ROI(투자수익률)를 치밀하게 계산하든, 마케팅에 과감하게 예산을 쏟아붓든, "이건 합법적인 내 정당한 권리다"라는 멘탈이 세팅된 원장과 늘 불안에 떠는 원장의 실행 속도는 하늘과 땅 차이로 벌어진다.</p>
      `,
    },
    {
      id: "s0-intro-background",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">치과의사가 미용시술을 주도할 수 있는 3가지 강력한 배경</h3>
        <p class="text-[#333] leading-relaxed mb-4">치과의사의 미용시술 합법성은 어느 날 갑자기 하늘에서 뚝 떨어진 특혜나 요행이 아니다. 치과계 내부에는 이미 오래전부터 이 합법성을 굳건히 떠받치는 세 가지 강력한 기반이 존재했다.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째, 치과 내에는 이미 '구강악안면외과'라는 독보적인 전문 영역이 자리 잡고 있다.</span> 구강악안면외과의 진료 범위는 치아와 구강 내부에만 국한되지 않는다. 턱뼈와 그 주변 안면부 전체를 아우른다. 안면 골절 수술, 악교정 수술, 턱관절 수술 등 고난도의 안면부 수술을 치과의사가 주도해 온 역사는 수십 년에 달한다. 안면부는 남의 땅이 아니라, 치과의사가 이미 오래전부터 깃발을 꽂고 다스려오던 고유의 영토다.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째, 타 직역이 결코 넘볼 수 없는 대체 불가능한 해부학적 전문성이다.</span> 치과의사는 안면부의 근육, 신경, 혈관 구조를 학부 시절부터 그 누구보다 깊이 있게 파고든다. 특히 삼차신경(Trigeminal nerve)의 분포와 안면 근육의 기시 및 정지에 대한 해박한 이해도는 보톡스와 필러 시술을 완벽하게 통제하는 절대적인 기초 지식이다. 여기에 더해, 매일같이 좁고 예민한 구강 내에 마취 주사를 꽂아 넣으며 손끝에 체화된 정교한 주사 핸들링 숙련도 역시 결코 무시할 수 없는 치과만의 치명적인 무기다.</p>
        <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">셋째, 거스를 수 없는 글로벌 스탠다드의 확립이다.</span> 미국, 영국, 호주 등 선진 의료 시장에서는 치과의사의 안면부 미용시술이 이미 합법적이고 보편적인 진료 트렌드로 정착한 지 오래다. 이는 대한민국 치과계만의 예외적이고 특이한 밥그릇 싸움이 아니라, 전 세계적인 진료 영역 확장의 거대하고 당연한 흐름 위에 서 있는 것이다.</p>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">바로 이 세 가지 견고한 기반 위에서, 2016년 대한민국 최고 법원인 대법원은 치과의사의 안면 미용시술 권한에 최종적이고 불가역적인 마침표를 찍었다.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">구강악안면외과</p>
            <p class="text-[#999] text-xs leading-relaxed">턱뼈와 안면부 전체를 아우르는 치과의 독보적인 전문 영역이 수십 년간 존재</p>
          </div>
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">해부학적 전문성</p>
            <p class="text-[#999] text-xs leading-relaxed">안면 근육, 신경, 혈관을 학부 시절부터 깊이 파고든 대체 불가능한 전문성</p>
          </div>
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">글로벌 스탠다드</p>
            <p class="text-[#999] text-xs leading-relaxed">미국, 영국, 호주 등에서 이미 합법적이고 보편적인 진료 트렌드로 정착</p>
          </div>
        </div>
      `,
    },
    {
      id: "s0-intro-verdict",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2016년 대법원 판결의 압도적 의미</h3>
        <p class="text-[#333] leading-relaxed mb-4">2016년 7월 21일, 대한민국 대법원 전원합의체가 역사적인 판결을 선고했다. 대법관 13명 전원이 참여하는 전원합의체는 종전의 판례를 뒤집거나 사회적 파급력이 극히 거대한 사안에서만 예외적으로 소집되는 사법부 최고 의사결정 기구다.</p>
        <p class="text-[#333] leading-relaxed mb-4">판결의 핵심은 단호하고 명쾌했다. 치과의사가 환자의 안면부에 보톡스를 시술한 행위는 명백한 면허 범위 내의 정당한 의료행위이며, 그 목적이 질병 치료가 아닌 순수 '미용'이라 하여 결코 달리 볼 이유가 없다는 것이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">이 판결이 갖는 절대적인 무게감을 결코 가볍게 여겨서는 안 된다. 전원합의체 판결은 하급심을 완벽하게 구속하며, 오직 또 다른 전원합의체 판결로만 뒤집을 수 있는 철옹성이다. 2016년 이후 9년이라는 긴 세월이 흐른 지금까지 이 판결을 번복하는 새로운 판례도, 치과의사의 안면미용시술을 원천 차단하려는 타 직역의 입법 시도도 모두 무위로 돌아갔다. 의사협회가 사활을 걸고 시도했던 의료법 개정안은 국회의 문턱을 넘지 못했고, 피부과학회가 제기한 헌법소원 역시 무참히 각하되었다.</p>
        <p class="text-[#1a1a1a] font-bold text-lg mb-6">결론은 명백하다. 대한민국 사법체계 안에서 이보다 더 강력하고 완벽한 형태의 '합법 보증 수표'는 사실상 존재하지 않는다.</p>
        <!-- 전원합의체 vs 소부 비교 도표 -->
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">COMPARISON</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">전원합의체 vs 소부</div>
            <div style="font-size:13px;color:#888;margin-top:4px;">대법원 판결의 법적 효력 비교</div>
          </div>
          <div style="display:flex;gap:16px;">
            <div style="flex:1;background:#f5f5f5;border-radius:12px;padding:20px;text-align:center;">
              <div style="font-size:14px;font-weight:700;color:#666;margin-bottom:12px;">소부</div>
              <div style="font-size:12px;color:#555;line-height:2;">
                <div>대법관 <span style="font-weight:700;">4명</span></div>
                <div>일반 상소 사건</div>
                <div>해당 사건에 국한</div>
                <div style="color:#999;">다른 소부 판결로 변경 가능</div>
              </div>
              <div style="margin-top:12px;padding-top:12px;border-top:1px solid #ddd;">
                <span style="font-size:11px;color:#999;font-weight:600;">상대적으로 약한 구속력</span>
              </div>
            </div>
            <div style="display:flex;align-items:center;font-size:20px;color:#C4929B;font-weight:700;">vs</div>
            <div style="flex:1;background:#F5E6E8;border-radius:12px;padding:20px;text-align:center;border:2px solid #C4929B;">
              <div style="font-size:14px;font-weight:700;color:#C4929B;margin-bottom:12px;">전원합의체</div>
              <div style="font-size:12px;color:#555;line-height:2;">
                <div>대법관 <span style="font-weight:700;color:#C4929B;">13명 전원</span></div>
                <div>판례 변경이 필요한 중대 사건</div>
                <div style="font-weight:700;">이후 모든 하급심을 완벽히 구속</div>
                <div style="color:#C4929B;font-weight:700;">오직 다른 전원합의체 판결로만 변경 가능</div>
              </div>
              <div style="margin-top:12px;padding-top:12px;border-top:2px solid #C4929B;">
                <span style="font-size:11px;color:#C4929B;font-weight:700;">최고 수준의 법적 구속력</span>
              </div>
            </div>
          </div>
        </div>
        <p class="text-[#333] leading-relaxed mb-8">대법원이 이 사건에 전원합의체를 소집했다는 것 자체가, 치과의사의 안면미용시술 이슈가 대한민국 의료체계의 근간을 다룰 만큼 중대한 사안임을 사법부 최고 기관이 스스로 인정한 것이다.</p>
      `,
    },
    {
      id: "s0-intro-logic",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">대법원의 판단을 이끈 5가지 철벽 논리</h3>
        <p class="text-[#333] leading-relaxed mb-4">대법원은 단순한 법조문 해석을 넘어, 의학과 치의학의 본질을 꿰뚫는 5가지의 강력한 근거를 제시했다.</p>
        <div style="background:linear-gradient(135deg,#2C2C2C 0%,#3a3a3a 100%);border-radius:12px;padding:32px 28px;margin-bottom:32px;font-family:'Pretendard',sans-serif;position:relative;overflow:hidden;">
          <div style="position:absolute;top:-20px;right:-20px;width:120px;height:120px;background:rgba(196,146,155,0.1);border-radius:50%;"></div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <div style="width:44px;height:44px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <div>
              <div style="font-size:11px;color:#C4929B;font-weight:700;letter-spacing:1px;">SUPREME COURT OF KOREA</div>
              <div style="font-size:16px;font-weight:700;color:#fff;">2016년 대법원 전원합의체 판결</div>
            </div>
          </div>
          <div style="background:rgba(196,146,155,0.15);border-radius:8px;padding:12px 16px;margin-bottom:20px;display:flex;gap:24px;flex-wrap:wrap;">
            <div><span style="font-size:11px;color:#999;">사건번호</span><br/><span style="font-size:13px;color:#F5E6E8;font-weight:600;">2013도850</span></div>
            <div><span style="font-size:11px;color:#999;">선고일</span><br/><span style="font-size:13px;color:#F5E6E8;font-weight:600;">2016. 7. 21.</span></div>
            <div><span style="font-size:11px;color:#999;">판결 형태</span><br/><span style="font-size:13px;color:#F5E6E8;font-weight:600;">전원합의체 (대법관 13인)</span></div>
            <div><span style="font-size:11px;color:#999;">구속력</span><br/><span style="font-size:13px;color:#C4929B;font-weight:700;">최종심 -- 사법부 최고 판단</span></div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">1</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">구강악안면외과는 명백한 치과 영역이다. 의료법은 구강악안면외과를 치과의 고유 영역으로 확고히 인정하며, 그 진료 범위에는 '턱뼈를 둘러싼 안면부'가 당연히 포함된다.</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">2</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">안면부 진료를 치과에서 배제할 수 없다. 규정의 개정 연혁과 학회 설립 경위 등을 종합할 때, 안면부에서 이루어지는 의료행위를 치과에서 떼어낼 논리적 명분이 없다.</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">3</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">의학과 치의학의 학문적 원리는 동일하다. 인체를 다루는 두 학문의 기초 원리는 다르지 않으며, 교육 및 수련 과정의 교집합이 상당하다.</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">4</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">치과대학 정규 교육 과정을 거친다. 이미 대부분의 치과대학과 치의학전문대학원에서 보톡스 시술을 정규 과정으로 혹독하게 교육하고 있으며, 임상 현장에서도 널리 활용 중이다.</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">5</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">보건위생상 위해 가능성이 낮다. 치과의사는 매일 안면과 구강에 마취 주사를 놓는 전문가다. 위험성이 낮으므로 의료 소비자의 선택권을 폭넓게 열어두는 것이 시대적 흐름에 부합한다.</span>
            </div>
          </div>
          <div style="border-left:4px solid #C4929B;padding:16px 20px;background:rgba(245,230,232,0.07);border-radius:0 8px 8px 0;">
            <div style="font-size:15px;color:#fff;font-weight:600;line-height:1.8;">
              치과의사가 안면부에 보톡스를 시술하는 행위는
              <span style="color:#C4929B;font-size:17px;font-weight:800;">면허된 것 이외의 의료행위에 해당하지 않는다.</span>
              <span style="color:#e0d0d3;">미용 목적이라 하여 달리 볼 것은 아니다.</span>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "s0-intro-conclusion",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">놓쳐서는 안 될 결론의 두 가지 핵심</h3>
        <p class="text-[#333] leading-relaxed mb-4">복잡한 판결문 속에서 원장들이 뼛속까지 새겨야 할 실전 지침은 딱 두 가지다.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째,</span> 치과의사의 진료 영역을 치아와 구강 내부에 가두지 않고 <span class="text-[#1a1a1a] font-bold">'안면부 전체'</span>로 확장하여 인정했다.</p>
        <p class="text-[#333] leading-relaxed mb-8"><span class="text-[#1a1a1a] font-bold">둘째,</span> 질병 치료의 보조 수단이 아닌 <span class="text-[#1a1a1a] font-bold">'순수 미용 목적'</span>의 시술이라 하더라도 합법성을 완벽하게 보장했다.</p>
      `,
    },
    {
      id: "s0-intro-preview",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 STEP을 완독한 후 장착하게 될 7가지 무기</h3>
        <p class="text-[#333] leading-relaxed mb-4">이 챕터는 단순히 "미용시술은 합법이니 안심하라"는 식의 피상적인 위안만 던져주고 끝나지 않는다. 당장 진료실에서 미용시술 도입을 앞둔 원장들이 마주할 모든 법적 의구심을 타파할 구체적이고 치밀한 무기들을 제공한다. 다음의 내용을 집중적으로 해부한다.</p>
        <ul class="space-y-2 mb-6">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">판결의 전모 (0-1) :</span> 1심의 유죄 판결이 대법원 무죄로 완벽히 뒤집히기까지, 판을 엎은 철벽 논리</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">허용 범위 지도 (0-2) :</span> 안면부 어디까지가 100% 안전 구역이고, 어디부터가 절대 피해야 할 위험 구역인지 시술 유형별로 구분한 실전 맵</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">반론과 현실적 대응 (0-3) :</span> 의협과 피부과가 집요하게 제기하는 4가지 단골 반론과, 그 입을 다물게 할 압도적인 대응 논리</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">글로벌 스탠다드 (0-4) :</span> 미국, 영국, 호주 등 의료 선진국에서 이미 확고히 정착된 치과의사 미용시술의 위상</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">한의사와의 비교 (0-5) :</span> 같은 미용 시장을 노리는 한의사와 치과의사의 좁힐 수 없는 법적 조건과 프리미엄의 차이</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">법적 안정성 (0-6) :</span> 지난 9년간 단 한 번도 번복되지 않은 판례의 역사와 앞으로의 안정성 예측</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">실무 리스크 최소화 (0-7) :</span> 완벽한 합법의 테두리 안에서도 면허를 지키기 위해 반드시 갖춰야 할 '기록'과 '방어 프로토콜'</li>
        </ul>
        <p class="text-[#333] leading-relaxed mb-8">이 STEP의 마지막 장을 덮는 순간, 원장들의 머릿속을 맴돌던 "내가 이걸 해도 되는 건가?"라는 나약한 질문은, "이 거대한 시장을 어떻게 압도적으로 선점할 것인가?"라는 경영자의 강렬한 질문으로 완벽하게 바뀌어 있을 것이다. 그리고 이어지는 STEP 1부터는 오직 그 '실행'에 대한 답만을 속도감 있게 펼쳐낸다.</p>
      `,
    },
    {
      id: "s0-01",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-1. 판결의 전모 : 대법원은 왜 '무죄'를 선언했는가</h2>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">사건의 발단과 역전의 드라마</h3>
        <p class="text-[#333] leading-relaxed mb-4">2011년 10월, 치과의사 A 원장은 자신의 치과에서 보톡스를 이용해 환자의 눈가와 미간 주름을 시술했다. 검찰은 이를 의료법 제27조 제1항이 금지하는 무면허 의료행위로 규정하여 기소했다. 치과의사의 임무를 "치과 의료와 구강 보건지도"로 좁게 한정한 법의 텍스트 안에, 과연 안면부 미용 보톡스가 포함될 수 있는지가 치열한 법정 공방의 핵심 쟁점이었다.</p>
        <p class="text-[#333] leading-relaxed mb-8">1심과 2심은 치과의사에게 유죄를 선고했다. 치과계 전체에 짙은 위기감이 감돌던 순간, 마침내 2016년 7월 21일 대법원 전원합의체는 기존의 판결을 완벽하게 뒤집고 무죄 취지의 파기환송 판결을 내렸다.</p>
      `,
    },
    {
      id: "s0-01-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">대법원 전원합의체 판결의 절대적 무게감</h3>
        <p class="text-[#333] leading-relaxed mb-4">이 판결의 의미를 제대로 알기 위해서는 '전원합의체'라는 기구의 무게를 이해해야 한다. 대법관 13명 전원이 참여하는 전원합의체는 종전의 판례를 뒤집거나 사회적 파급력이 극히 거대한 사안에서만 극도로 예외적으로 소집된다. 일반적인 사건을 처리하는 4인 체제의 '소부'와는 차원이 다르다.</p>
        <!-- 소부 vs 전원합의체 비교 도표 -->
        <div class="mb-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border border-[#eee] rounded-lg overflow-hidden">
              <div class="bg-[#f5f5f5] px-4 py-3 text-center">
                <p class="text-[#1a1a1a] font-bold">소부 판결</p>
              </div>
              <div class="p-4 space-y-3 text-sm">
                <div class="flex justify-between"><span class="text-[#999]">참여 인원</span><span class="text-[#1a1a1a] font-bold">대법관 4명</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">소집 빈도</span><span class="text-[#1a1a1a]">일반 상소 사건</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">구속력</span><span class="text-[#1a1a1a]">해당 사건에 국한</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">변경 방법</span><span class="text-[#1a1a1a]">다른 소부 판결로 변경 가능</span></div>
              </div>
              <div class="bg-[#f5f5f5] px-4 py-2 text-center">
                <p class="text-[#999] text-xs font-semibold">상대적으로 약한 법적 구속력</p>
              </div>
            </div>
            <div class="border-2 border-[#C4929B] rounded-lg overflow-hidden">
              <div class="bg-[#C4929B] px-4 py-3 text-center">
                <p class="text-white font-bold">전원합의체 판결</p>
              </div>
              <div class="p-4 space-y-3 text-sm">
                <div class="flex justify-between"><span class="text-[#999]">참여 인원</span><span class="text-[#C4929B] font-bold">대법관 13명 전원</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">소집 빈도</span><span class="text-[#C4929B]">판례 변경이 필요한 중대 사건</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">구속력</span><span class="text-[#C4929B] font-bold">이후 모든 하급심을 완벽히 구속</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">변경 방법</span><span class="text-[#C4929B] font-bold">오직 다른 전원합의체로만 가능</span></div>
              </div>
              <div class="bg-[#C4929B]/10 px-4 py-2 text-center">
                <p class="text-[#C4929B] text-xs font-bold">최고 수준의 법적 구속력</p>
              </div>
            </div>
          </div>
        </div>
        <p class="text-[#333] leading-relaxed mb-8">대법원이 이 사건에 전원합의체를 소집했다는 것 자체가, 치과의사의 안면미용시술 이슈가 대한민국 의료체계의 근간을 다룰 만큼 중대한 사안임을 사법부 최고 기관이 스스로 인정한 것이다.</p>
      `,
    },
    {
      id: "s0-01-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">대법원의 판단을 이끈 5가지 철벽 논리</h3>
        <p class="text-[#333] leading-relaxed mb-4">대법원은 단순한 법조문 해석을 넘어, 의학과 치의학의 본질을 꿰뚫는 5가지의 강력한 근거를 제시했다.</p>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">근거</th>
                <th class="px-4 py-2 text-left font-medium">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구강악안면외과는 명백한 치과 영역이다. 의료법은 구강악안면외과를 치과의 고유 영역으로 확고히 인정하며, 그 진료 범위에는 '턱뼈를 둘러싼 안면부'가 당연히 포함된다.</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면부 진료를 치과에서 배제할 수 없다. 규정의 개정 연혁과 학회 설립 경위 등을 종합할 때, 안면부에서 이루어지는 의료행위를 치과에서 떼어낼 논리적 명분이 없다.</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의학과 치의학의 학문적 원리는 동일하다. 인체를 다루는 두 학문의 기초 원리는 다르지 않으며, 교육 및 수련 과정의 교집합이 상당하다.</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과대학 정규 교육 과정을 거친다. 이미 대부분의 치과대학과 치의학전문대학원에서 보톡스 시술을 정규 과정으로 혹독하게 교육하고 있으며, 임상 현장에서도 널리 활용 중이다.</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보건위생상 위해 가능성이 낮다. 치과의사는 매일 안면과 구강에 마취 주사를 놓는 전문가다. 위험성이 낮으므로 의료 소비자의 선택권을 폭넓게 열어두는 것이 시대적 흐름에 부합한다.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "s0-01-03",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">후속 판례의 연타 : 안면 레이저 시술도 완벽한 합법</h3>
        <p class="text-[#333] leading-relaxed mb-4">보톡스 판결의 여운이 가시기도 전인 불과 한 달 뒤, 2016년 8월 29일. 대법원은 치과의사의 안면 프락셀 레이저 시술에 대해서도 동일한 법리를 적용하여 무죄를 확정 지었다(대법원 2013도7796). 비록 소부 판결이었지만, 전원합의체가 다져놓은 견고한 법리를 레이저 시술이라는 또 다른 미용 영역에 그대로 적용한 것이다. 단발성 해프닝이 아니라, 치과의사의 안면미용시술 권한이 일관된 사법부의 공식 룰(Rule)로 완벽히 자리 잡았음을 공표한 사건이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">나아가 2022년 한의사 초음파 판결에서도 치과의사 보톡스 판례(2013도850)의 논리가 핵심 근거로 직접 인용되었다. 치과의사의 미용시술 합법성은 흔들리기는커녕, 대한민국 법체계 안에서 더욱 단단한 반석으로 굳어지고 있다.</p>
        <!-- 판결 타임라인 -->
        <div class="mb-8">
          <p class="text-[#1a1a1a] font-bold text-sm text-center mb-4">판결 타임라인: 법적 안정성의 흐름</p>
          <div class="relative">
            <div class="absolute top-4 left-0 right-0 h-0.5 bg-[#eee]"></div>
            <div class="flex justify-between items-start relative">
              <div class="flex flex-col items-center text-center w-1/5">
                <div class="w-3.5 h-3.5 rounded-full bg-[#eee] border border-[#999] z-10"></div>
                <p class="text-[#1a1a1a] text-xs font-bold mt-2">2011</p>
                <p class="text-[#999] text-[10px]">기소</p>
              </div>
              <div class="flex flex-col items-center text-center w-1/5">
                <div class="w-5 h-5 rounded-full bg-[#C4929B] border-2 border-[#C4929B] z-10 ring-2 ring-[#C4929B]/20"></div>
                <p class="text-[#C4929B] text-xs font-bold mt-2">2016.7</p>
                <p class="text-[#C4929B] text-[10px] font-semibold">전원합의체</p>
                <p class="text-[#C4929B] text-[10px] font-semibold">보톡스 무죄</p>
              </div>
              <div class="flex flex-col items-center text-center w-1/5">
                <div class="w-3.5 h-3.5 rounded-full bg-[#C4929B]/30 border border-[#C4929B] z-10"></div>
                <p class="text-[#1a1a1a] text-xs font-bold mt-2">2016.8</p>
                <p class="text-[#999] text-[10px]">안면 레이저</p>
                <p class="text-[#999] text-[10px]">무죄 확정</p>
              </div>
              <div class="flex flex-col items-center text-center w-1/5">
                <div class="w-3.5 h-3.5 rounded-full bg-[#C4929B]/30 border border-[#C4929B] z-10"></div>
                <p class="text-[#1a1a1a] text-xs font-bold mt-2">2022.12</p>
                <p class="text-[#999] text-[10px]">한의사 판결서</p>
                <p class="text-[#999] text-[10px]">논리 인용</p>
              </div>
              <div class="flex flex-col items-center text-center w-1/5">
                <div class="w-3.5 h-3.5 rounded-full bg-[#C4929B]/30 border border-[#C4929B] z-10"></div>
                <p class="text-[#1a1a1a] text-xs font-bold mt-2">2024.2</p>
                <p class="text-[#999] text-[10px]">복지부 재확인</p>
              </div>
            </div>
          </div>
          <p class="text-[#999] text-[10px] mt-4 text-center">2016년 전원합의체 판결 이후 9년간 번복 사례 없음</p>
        </div>
      `,
    },
    {
      id: "s0-02",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-2. 허용 범위 지도 : 어디까지 엑셀을 밟고, 어디서 브레이크를 밟아야 하는가</h2>
        <p class="text-[#333] leading-relaxed mb-8">대법원은 분명 '합법'이라는 거대한 문을 열어주었다. 하지만 명심해야 한다. '모든 시술이 환자의 모든 신체 부위에서 무조건 합법'이라고 백지수표를 쥐여준 적은 없다. 미용치과를 이끄는 원장이 현장에서 반드시 꿰뚫고 있어야 할 것은, 안전하게 수익을 창출할 수 있는 안전 구역과 절대 넘어서는 안 될 위험 구역의 날카로운 경계선이다.</p>
      `,
    },
    {
      id: "s0-02-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">녹색/황색/적색 구역 구분</h3>
        <!-- 허용 범위 지도 (신호등 인포그래픽) -->
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">SCOPE MAP</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">미용 치과 시술 허용 범위 지도</div>
            <div style="font-size:13px;color:#888;margin-top:4px;">법적 근거 강도에 따른 3단계 분류</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <!-- 녹색 -->
            <div style="display:flex;align-items:stretch;gap:12px;background:#f0f7f2;border:2px solid #4A7C59;border-radius:12px;padding:16px;">
              <div style="width:48px;min-width:48px;background:#4A7C59;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <div>
                <div style="font-size:14px;font-weight:700;color:#4A7C59;margin-bottom:4px;">녹색 구역 (가장 안전)</div>
                <div style="font-size:13px;color:#333;line-height:1.6;"><span style="font-weight:600;">부위:</span> 눈가, 미간, 교근(사각턱), 이갈이 근육군</div>
                <div style="font-size:12px;color:#666;margin-top:4px;">대법원 판결문에서 명시적으로 적시된 가장 강력하고 안전한 구역이다. 실무적으로 법적 시비가 걸릴 가능성은 제로에 가깝다. 당장 내일부터 망설임 없이 전면 도입하고 전면에 내세워야 할 1순위 타깃이다.</div>
              </div>
            </div>
            <!-- 황색 -->
            <div style="display:flex;align-items:stretch;gap:12px;background:#fdf8ef;border:2px solid #B8860B;border-radius:12px;padding:16px;">
              <div style="width:48px;min-width:48px;background:#B8860B;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
              </div>
              <div>
                <div style="font-size:14px;font-weight:700;color:#B8860B;margin-bottom:4px;">황색 구역 (주의 관찰)</div>
                <div style="font-size:13px;color:#333;line-height:1.6;"><span style="font-weight:600;">부위:</span> 이마, 팔자주름, 입술, 턱끝, 입꼬리</div>
                <div style="font-size:12px;color:#666;margin-top:4px;">직접적인 대법원 판례는 없으나, 2016년 판결의 핵심 논리인 '안면부 전체 허용'을 확장 적용하여 충분히 방어할 수 있는 튼튼한 영역이다. 시술 자체는 문제없으나, 만에 하나 딴지를 걸어오는 민원 발생 시를 대비해 동의서, 꼼꼼한 차트 기록, 시술 전후 고해상도 사진이라는 3중 방어막을 반드시 쳐두고 영리하게 접근해야 한다.</div>
              </div>
            </div>
            <!-- 적색 -->
            <div style="display:flex;align-items:stretch;gap:12px;background:#fdf0f0;border:2px solid #A63D40;border-radius:12px;padding:16px;">
              <div style="width:48px;min-width:48px;background:#A63D40;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
              </div>
              <div>
                <div style="font-size:14px;font-weight:700;color:#A63D40;margin-bottom:4px;">적색 구역 (진입 위험)</div>
                <div style="font-size:13px;color:#333;line-height:1.6;"><span style="font-weight:600;">부위:</span> 승모근, 종아리 등 안면부를 벗어난 바디(Body) 영역</div>
                <div style="font-size:12px;color:#666;margin-top:4px;">대법원 판결의 보호막인 '안면부'라는 대전제를 완전히 벗어난다. 누군가 악의를 품고 고발할 경우 치과의사로서 방어할 논리적 근거가 턱없이 부족하다. 아무리 눈앞의 수익성이 좋아 보여도 메뉴판에서 과감히 지워야 한다.</div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "s0-02-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">시술 유형별 법적 방어력 매트릭스</h3>
        <p class="text-[#333] leading-relaxed mb-4">손에 무엇을 들고 시술하느냐에 따라서도 방어력은 달라진다.</p>
        <!-- 시술 유형별 법적 방어력 매트릭스 -->
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:20px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">DEFENSE MATRIX</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">시술 유형별 법적 방어력</div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th class="bg-[#1a1a1a] text-white px-3 py-2 text-left font-medium">시술 유형</th>
                  <th class="bg-[#1a1a1a] text-white px-3 py-2 text-center font-medium">법적 근거</th>
                  <th class="bg-[#1a1a1a] text-white px-3 py-2 text-center font-medium">직접 판례</th>
                  <th class="bg-[#1a1a1a] text-white px-3 py-2 text-center font-medium">실무 권고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">보톡스</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">가장 강함</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">대법원 직접 무죄 판시</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">즉시 시작</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">레이저</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">강함</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">대법원 직접 무죄 판시</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">즉시 시작</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">필러 / 스킨부스터</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">보통</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">동일 논리 구조로 방어</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">기록 철저</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">실리프팅</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">보통~약함</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">동일 논리 적용</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">안면부 한정 + 숙련도</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex gap-4 justify-center mt-3 text-[10px]">
            <span class="flex items-center gap-1"><span class="w-3 h-3 bg-[#4A7C59] rounded-sm inline-block"></span><span class="text-[#999]">강함 = 직접 판례 있음</span></span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 bg-[#B8860B]/30 rounded-sm inline-block"></span><span class="text-[#999]">보통 = 간접 적용, 기록 필수</span></span>
          </div>
        </div>
      `,
    },
    {
      id: "s0-02-03",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">실전 방어 3원칙</h3>
        <ol class="list-decimal list-inside space-y-3 mb-6">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">안면부에 머물러라.</span> 판결의 논리가 완벽히 커버하는 방어막은 얼굴과 턱까지다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">기록이 곧 무기다.</span> 동의서, 차트, 전후 사진은 분쟁 시 당신을 지켜줄 유일하고 강력한 방패다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">교육 이력을 갖춰라.</span> 관련 세미나 이수증은 당신의 시술이 '면허 범위 내'임을 입증하는 훌륭한 보조 근거가 된다.</li>
        </ol>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-8">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 전략의 정석:</span> 허용 범위 지도를 실무 수익 모델에 가장 영리하게 적용하는 공식은 명확하다. 사법부가 확실히 보증한 사각턱 보톡스(녹색 구역)로 환자의 첫 입구를 연다. 이후 환자와 신뢰가 단단하게 쌓이면 입술과 턱끝 필러(황색 구역)로 조심스럽게 확장하며 객단가를 높인다. 그러나 돈이 된다고 해서 목선 아래의 승모근 보톡스(적색 구역)에 손을 대는 순간, 공들여 쌓은 탑이 한 번의 고발로 무너질 수 있음을 명심해야 한다.</p>
        </div>
      `,
    },
    // ─── 0-3 이후: 기존 콘텐츠 유지 ───
    {
      id: "s0-03",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-3. 반론과 현실 -- 합법인데 왜 아직 불안한가</h2>
        <p class="text-[#333] leading-relaxed mb-4">대법원 전원합의체가 '합법'이라는 거대한 방패를 쥐여주었다. 그런데도 진료실로 돌아오면 원장들의 손끝에는 여전히 미세한 떨림이 남아 있다.</p>
        <p class="text-[#333] leading-relaxed mb-6">왜 그런가. 합법을 선언한 것은 대법원이지만, 그 판결을 불쾌하게 여기는 세력이 아직도 조직적으로 움직이고 있기 때문이다. 이 챕터에서는 그 불안의 정체를 낱낱이 해부하고, 현장에서 마주칠 수 있는 반론과 공격에 대한 철벽 대응 논리를 완전무장시킨다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">의협의 입장과 실제 행동</h3>
        <p class="text-[#333] leading-relaxed mb-4">대한의사협회는 2016년 판결 이후에도 치과의사의 안면미용시술에 대한 반대 입장을 한 치도 굽히지 않고 있다. 별도의 신고센터를 운영하며, 개별 민원을 경찰 고발 또는 보건소 제보로 연결하는 사례가 지금 이 순간에도 지속되고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-8">하지만 명심해야 한다. 의협이 아무리 맹렬하게 반대해도, 그 반대가 법적 구속력을 가진 적은 단 한 번도 없다. 2016년 판결 이후 의료법 개정을 통해 치과의사의 미용시술을 원천 차단하려는 시도가 있었으나, 국회의 문턱을 끝내 넘지 못했다. 피부과학회가 사활을 걸고 제기한 헌법소원 역시 각하되었다. 9년간 이어진 모든 역공이 전부 무위로 돌아갔다는 사실 자체가, 2016년 판결의 철옹성이 얼마나 견고한지를 역설적으로 증명한다.</p>
      `,
    },
    {
      id: "s0-03-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">상대방이 사용하는 4가지 반론 -- 미리 알고 완전무장하라</h3>
        <p class="text-[#333] leading-relaxed mb-6">전장에 나서기 전에 적이 어떤 총을 들고 있는지 파악하는 것은 기본 중의 기본이다. 의협과 피부과학회가 집요하게 반복하는 반론은 정확히 네 가지로 수렴된다. 하나하나 해부한다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">반론 1 : "교육과정에 포함됐다고 면허 범위가 자동으로 확대되는 것은 아니다"</h4>
        <p class="text-[#333] leading-relaxed mb-6">이들이 즐겨 쓰는 비유가 있다. "간호대에서 내과를 배웠다고 간호사가 진료할 수 있는가?" 언뜻 그럴듯하게 들리지만, 대법원의 판단 구조를 의도적으로 왜곡한 궤변이다. 대법원은 '교육과정 포함' 하나만으로 합법을 선언한 적이 없다. 교육과정, 수련 체계, 의학과 치의학의 학문적 동질성, 보건위생상 위해 가능성까지 네 가지 근거를 종합적으로 직조한 복합 판단이었다. 실 한 가닥만 뽑아들고 "이건 약하다"고 흔드는 것은, 쇠사슬의 고리 하나만 보고 전체 사슬이 끊어졌다고 우기는 것과 다르지 않다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">반론 2 : "보건복지부가 '미용 보톡스는 무면허 의료행위'라고 유권해석한 바 있다"</h4>
        <p class="text-[#333] leading-relaxed mb-6">과거 복지부의 유권해석은 사실이다. 하지만 법의 위계를 모르는 사람이나 이 카드를 꺼내든다. 대법원 전원합의체 판결은 행정부의 유권해석보다 절대적으로 상위에 존재하는 최종 규범이다. 판결 이후 복지부 스스로도 해당 유권해석을 근거로 한 어떠한 행정 집행도 하지 않았다. 무기로서의 유효기간이 만료된 탄환이다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">반론 3 : "판결은 눈가와 미간에 한정된다. 이마, 사각턱, 볼 등 다른 부위에는 적용되지 않는다"</h4>
        <p class="text-[#333] leading-relaxed mb-6">판결문을 제대로 읽지 않은 사람이 범하는 전형적인 오독이다. 대법원이 인정한 것은 '눈가와 미간'이라는 특정 포인트가 아니라, '안면부'라는 영역 전체다. 판시 사항과 판결 이유의 구분은 법학의 기초 중 기초인데, 이 둘을 의도적으로 혼동시키는 것이 이 반론의 수법이다. 판결 이유에서 대법원은 구강악안면외과의 진료 범위가 안면부 전체를 아우른다는 점을 명확히 설시했다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">반론 4 : "승모근, 종아리 등 안면부 밖의 시술은 판결 적용 밖이며 고발 대상이다"</h4>
        <p class="text-[#333] leading-relaxed mb-4">이 반론은 다른 셋과 결이 다르다. 일부 타당하기 때문이다. 2016년 판결의 논리적 보호막은 '안면부'라는 대전제 위에 서 있고, 승모근이나 종아리 같은 바디 영역은 그 보호막의 바깥이다. 이것은 상대방의 공격이 아니라, 우리 스스로 직시해야 할 현실적 경계선이다. 앞서 0-2에서 적색 구역으로 분류한 이유가 정확히 여기에 있다. 바디 시술은 현재의 판결 논리로 방어하기 어렵다. 메뉴판에서 지워라.</p>
        <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-8">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#f59e0b] font-bold">주의:</span> 반론 4는 상대방 논리가 아니라 실제 리스크다. 승모근/바디 시술은 현재 판결 논리로 방어하기 어렵다.</p>
        </div>
      `,
    },
    {
      id: "s0-03-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">현실적 리스크를 직시하라</h3>
        <p class="text-[#333] leading-relaxed mb-4">합법이다. 대법원이 그렇게 판결했다. 9년간 단 한 번도 뒤집히지 않았다.</p>
        <p class="text-[#333] leading-relaxed mb-4">하지만 합법이라는 사실이 현장의 모든 마찰을 자동으로 소멸시켜주지는 않는다. 원장들이 알아야 할 현실은 이것이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">민원의 경로는 열려 있다. 의협 신고센터, 불만을 품은 환자, 경쟁 의원의 제보 -- 누구든 민원을 넣을 수 있다. 민원이 접수되면 보건소는 조사를 진행하고, 보건소에서 복지부로, 복지부에서 검찰로 넘어가는 경로가 존재한다.</p>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">그러나 이것이 '하지 말아야 할 이유'가 되는가. 절대 아니다. 최종 판단의 기준은 대법원 전원합의체 판결이고, 이 철옹성을 무너뜨린 사례는 지난 9년간 단 하나도 없다. 필요한 것은 불안 앞에 멈추는 것이 아니라, 기록과 프로토콜로 완전무장하는 것이다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">현장 사례 : 기록이 원장을 지킨 순간</h3>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-4">
          <p class="text-[#333] text-sm leading-relaxed">A 치과는 보톡스 도입 3개월 차에 인근 경쟁 의원의 민원이 접수되어 보건소 조사를 받았다. 원장은 시술 동의서, 차트, 시술 전후 사진을 한 치의 빈틈 없이 보관하고 있었고, 2016년 대법원 판결문 사본을 즉시 제출했다. 결과는 명확했다. 어떠한 행정 조치 없이 종결. 기록이 없었다면, 결과가 달랐을 수 있다.</p>
        </div>
        <p class="text-[#999] text-sm mb-8">민원과 신고가 실제로 발생했을 때의 구체적인 48시간 골든타임 대응 매뉴얼은 <span class="text-[#1a1a1a] font-bold">STEP 5-3. 민원/신고 대응 매뉴얼</span>에서 실전 시나리오별로 상세히 다룬다.</p>
      `,
    },
    {
      id: "s0-04",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-4. 글로벌 스탠다드 -- 세계는 이미 움직이고 있다</h2>
        <p class="text-[#333] leading-relaxed mb-4">혹시 이런 생각을 한 적이 있는가. "치과의사가 보톡스를 놓는다니, 이건 한국에서만 벌어지는 기현상 아닌가?"</p>
        <p class="text-[#333] leading-relaxed mb-6">결론부터 말한다. 천만의 말씀이다. 치과의사의 안면부 미용시술은 대한민국만의 특이한 현상이 아니라, 의료 선진국에서 이미 수십 년 전부터 확립된 글로벌 스탠다드다. 한국이 오히려 뒤늦게 합류한 셈이다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">미국 -- 치과의사 미용시술 교육의 본산</h3>
        <p class="text-[#333] leading-relaxed mb-6">미국치과의사협회(ADA)는 산하의 평생교육인증프로그램(CERP)을 통해 보톡스와 필러 교육 프로그램을 공식 인증하고 있다. 약 절반에 달하는 주에서 치과의사의 구강/악안면 영역 보톡스/필러 시술을 명시적으로 허용하며, 치과의사가 안면미용시술을 수행하는 것은 논란의 대상이 아니라 제도권 안의 일상이다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">영국 -- 보톡스 처방 권한을 가진 유일한 치과 등록자</h3>
        <p class="text-[#333] leading-relaxed mb-6">영국 일반치과위원회(GDC)는 치과의사를 보톡스 처방이 가능한 유일한 치과 등록 전문직으로 인정하고 있다. 보톡스는 영국에서 처방전 의약품(POM)으로 분류되며, 치과의사가 직접 처방하고 시술할 수 있는 법적 권한을 갖는다. 2021년에는 "Botulinum Toxin and Cosmetic Fillers (Children) Act 2021"이 시행되어 18세 미만에 대한 보톡스/필러 시술이 전면 금지되었는데, 이는 역으로 성인 대상 치과의사의 미용시술이 확고히 제도화되어 있음을 방증한다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">호주 -- 2009년부터 교육 체계 정착</h3>
        <p class="text-[#333] leading-relaxed mb-6">호주는 2009년 AADFA(호주미용치과의사협회)가 설립된 이후, 치과의사의 안면미용시술 교육과 시행 체계가 일찌감치 자리를 잡았다. 한국보다 7년이나 앞선 셈이다.</p>
      `,
    },
    {
      id: "s0-04-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">글로벌 시장이 보내는 신호 -- 845%라는 숫자</h3>
        <p class="text-[#333] leading-relaxed mb-6">이것은 단순히 각국의 법제도가 허용한다는 차원의 이야기가 아니다. 시장 자체가 폭발적으로 팽창하고 있다는 사실에 주목해야 한다. 미국성형외과학회(ASPS) 통계에 따르면, 2000년부터 2018년까지 18년간 보툴리눔 톡신 시술 건수는 무려 845% 증가했다. 국제 학술계에서도 치과의사의 안면미용 역할 확장을 '성장하는 분야'로 명시한 논문이 PubMed에 다수 등재되어 있으며, 해부학 교육 기반을 갖춘 치과의사야말로 가장 적합한 시술자라는 논거가 반복적으로 제기되고 있다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">한국의 좌표 -- 뒤처진 것이 아니라, 따라잡은 것이다</h3>
        <p class="text-[#333] leading-relaxed mb-4">정리하면 이렇다. 미국, 영국, 호주 등 의료 선진국에서는 치과의사의 안면미용시술이 이미 제도의 한복판에 자리 잡고 있다. 한국은 2016년 대법원 전원합의체 판결을 통해 이 글로벌 흐름에 사법적으로 합류했다. 뒤처진 것이 아니라, 드디어 따라잡은 것이다.</p>
        <p class="text-[#333] leading-relaxed mb-8">그럼에도 아직 주저하고 있는 원장이 있다면, 이 한 가지만 기억하라. 당신이 안면미용시술을 망설이는 동안, 지구 반대편의 치과의사들은 이미 수십 년째 같은 시술로 환자의 만족과 치과의 성장이라는 두 마리 토끼를 거머쥐고 있다. 세계는 이미 움직이고 있다. 질문은 "할 것인가, 말 것인가"가 아니라, "언제 시작할 것인가"다.</p>
      `,
    },
    {
      id: "s0-05",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-5. 한의사와의 비교 -- 같은 시장, 다른 무기</h2>
        <p class="text-[#333] leading-relaxed mb-4">미용 시장의 문 앞에 서 있는 것은 치과의사만이 아니다. 한의계 역시 이 거대한 시장에 적극적으로 진입을 시도하고 있다. 서울시한의사회는 피부미용센터를 개설했고, HIFU, 레이저, 보톡스, 필러 교육을 진행 중이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">하지만 같은 문을 두드린다고 해서 같은 열쇠를 쥐고 있는 것은 아니다. 법적 조건에서 치과의사와 한의사 사이에는 좁힐 수 없는 결정적 격차가 존재한다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">치과의사 vs 한의사 -- 법적 조건 비교</h3>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">보톡스 시술</h4>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 대법원 무죄 확정(2013도850). 한의사는 전문의약품 처방권 자체가 없다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">필러 시술</h4>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 보톡스 판결과 동일한 논리 구조로 방어 근거를 갖추고 있다. 한의사는 대법원에서 유죄가 확정되었다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">레이저 시술</h4>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 대법원 무죄 확정(2013도7796). 한의사는 대법원에서 유죄가 확정되었다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">해부학 교육</h4>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 안면 해부학을 학부 정규 과정에서 6년간 혹독하게 훈련받는다. 한의사는 한의학 기반이며, 서양 해부학 교육은 제한적이다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">주사 숙련도</h4>
        <p class="text-[#333] leading-relaxed mb-6">치과의사는 매일 구강 내 마취 주사를 놓으며 손끝의 정밀함을 벼려왔다. 한의사의 주사 시술 빈도는 이에 비할 바가 아니다.</p>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">한마디로 정리하면 이렇다. 치과의사는 '무죄', 한의사는 '유죄'. 이보다 명쾌한 비교가 있을 수 없다.</p>
        <p class="text-[#333] leading-relaxed mb-8">그런데도 한의계가 이 시장에 사활을 걸고 진입을 시도한다는 사실 자체가, 역설적으로 이 시장의 압도적인 매력도를 반증한다. 법적으로 문이 닫혀 있는 쪽도 기를 쓰고 들어오려는 시장에, 법적으로 문이 활짝 열려 있는 치과의사가 들어가지 않을 이유가 어디에 있는가.</p>
      `,
    },
    {
      id: "s0-05-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">최근 한의사 판례 동향 -- 진단기기는 허용, 침습 시술은 여전히 불법</h3>
        <p class="text-[#333] leading-relaxed mb-4">오해를 방지하기 위해 최근 판례의 흐름도 정확히 짚고 넘어간다.</p>
        <p class="text-[#333] leading-relaxed mb-4">2022년 대법원 전원합의체(2016도21314)는 한의사의 초음파 진단기기 사용을 면허 범위 내로 인정했다. 주목할 점은, 이 판결이 치과의사 보톡스 판결(2013도850)의 논리를 핵심 근거로 직접 인용했다는 사실이다. 치과의사의 미용시술 합법성이 흔들리기는커녕, 다른 직역의 판결에서까지 선례로 원용되며 더욱 단단한 반석으로 굳어지고 있는 것이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">이후 뇌파계(2023년), X-ray 골밀도 측정기(2024~2025년) 등 한의사의 비침습 진단기기 사용 허용이 확대되는 추세다. 그러나 핵심을 놓쳐서는 안 된다. <span class="text-[#1a1a1a] font-bold">허용된 것은 오직 비침습 '진단'기기뿐이다.</span> 보톡스(전문의약품 처방 불가), 필러(대법원 유죄 확정), IPL/레이저(유죄 확정) 등 침습적 시술 영역의 문은 여전히 한의사에게 굳게 닫혀 있다. 리도카인 등 전문의약품 사용 역시 유죄가 유지되고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-8">치과의사는 해부학적 교육 기반, 전문의약품 처방권, 그리고 대법원의 사법적 무죄 확정이라는 세 가지 무기를 모두 장착하고 있다. 이 시장에 진입할 수 있는 조건이 가장 완벽하게 갖춰진 직역이, 가장 신중하게 망설이고 있는 아이러니. 이 책이 그 망설임을 끝내기 위해 존재한다.</p>
      `,
    },
    {
      id: "s0-06",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-6. 9년간의 법적 안정성 -- 단 한 번도 번복되지 않았다</h2>
        <p class="text-[#333] leading-relaxed mb-6">2016년 판결 직후, 의협은 비상대책위를 구성하고 의료법 개정을 통한 전면 차단을 선언했다. 피부과 전문의들은 의료법 제2조 제2항 제2호 등이 치과의사에게 안면부 의료행위를 허용해 건강권과 직업의 자유를 침해한다며 헌법소원(2016헌마897)을 제기했다.</p>
        <p class="text-[#333] leading-relaxed mb-6">결과는 참담했다 -- 상대방에게. 헌법재판소는 2016년 11월 1일 이를 각하했다. 청구기간 도과, 그리고 나머지 규정은 치과의사 허용 범위를 직접 정한 것이 아니라는 이유였다. 본안 심사에 진입조차 하지 못한 것이다. 사법부의 문턱에서 되돌려 보내진 셈이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">이후 9년간의 흐름을 추적하면, 이 판결의 철옹성이 얼마나 견고한지 더욱 선명하게 드러난다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">판결 이후 9년간의 타임라인</h3>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">2016년 판결 직후 :</span> 의협, 의료법 개정 추진 -- 입법 불성사.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">2016년 11월 :</span> 피부과 전문의 헌법소원(2016헌마897) -- 각하. 본안 심사에 진입조차 못 함.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">2022년 12월 :</span> 한의사 초음파 판결(2016도21314 전원합의체)에서 치과의사 보톡스 판결(2013도850)의 논리를 핵심 근거로 직접 인용 -- 판결의 논리가 약해지기는커녕 오히려 강화.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">2024년 2월 :</span> 보건복지부, "의사/치과의사만 직접 시술 가능" 원칙 재확인 -- 치과의사 미용시술 합법성을 행정부가 재차 공인.</p>
        <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">2016~2026년 :</span> 치과의사가 안면미용시술로 유죄 확정된 공개 사례 -- <span class="text-[#1a1a1a] font-bold">단 하나도 없다.</span></p>
        <p class="text-[#333] leading-relaxed mb-4">9년이다. 9년이라는 세월 동안 의료법 개정도, 헌법소원도, 새로운 판례도, 행정 제재도 -- 이 판결을 흔들어본 시도는 전부 있었으나, 성공한 것은 단 하나도 없다.</p>
        <p class="text-[#333] leading-relaxed mb-8">전원합의체 판결은 대법원장을 포함한 대법관 전원이 참여해 내린 대한민국 사법체계의 최종 해석이다. 하급 법원은 이를 뒤집을 수 없으며, 오직 또 다른 전원합의체 판결로만 번복이 가능하다. 그리고 그 번복을 시도할 법적 근거도, 사회적 동력도, 현재로서는 어디에도 존재하지 않는다.</p>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">결론은 단호하다. 이 판결은 흔들리지 않았고, 앞으로도 흔들릴 가능성은 극히 낮다. 원장들이 세워야 할 전략의 토대는 충분히 단단하다.</p>
      `,
    },
    {
      id: "s0-07",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-7. 실무 리스크 최소화 5원칙 -- 합법의 방패 위에 기록의 갑옷을 입혀라</h2>
        <p class="text-[#333] leading-relaxed mb-4">합법성은 확정되어 있다. 대법원이 그렇게 선언했고, 9년간 단 한 번도 번복되지 않았다.</p>
        <p class="text-[#333] leading-relaxed mb-6">하지만 합법이라는 방패만 믿고 빈손으로 진료실에 서는 것은 어리석다. 전장에서 방패만 든 병사와, 방패 위에 갑옷까지 걸친 병사의 생존율은 하늘과 땅 차이다. 기록과 프로토콜이 바로 그 갑옷이다.</p>
        <p class="text-[#333] leading-relaxed mb-8">민원이 접수되든, 보건소 조사가 나오든, 경찰 고발이 들어오든 -- 기록이 완벽한 치과는 흔들리지 않는다. 기록이 없는 치과는 합법임에도 불필요한 소모전에 휘말린다. 차이를 만드는 것은 합법 여부가 아니라, 합법을 증명할 수 있는 기록의 밀도다.</p>
        <p class="text-[#1a1a1a] font-bold text-lg leading-relaxed mb-6">현장에서 반드시 지켜야 할 5가지 원칙을 박아둔다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">1. 시술 전 동의서를 반드시 징구하라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">충분한 설명 후 서면 동의서를 받는 것은 선택이 아니라 필수다. 동의서에는 최소한 다음 항목이 빠짐없이 포함되어야 한다 -- 시술명, 시술 부위, 사용 제품명과 용량, 예상 효과 및 지속 기간, 가능한 부작용, 환자 서명과 날짜. 이 한 장의 종이가 민원 발생 시 원장을 보호하는 가장 강력한 1차 방어선이 된다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">2. 차트와 사진을 철벽같이 보존하라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">시술 전후 사진 촬영과 차트 기재는 습관이 아니라 시스템으로 박아야 한다. 매 시술마다 예외 없이 기록하고, 최소 5년 이상 보관하라. 분쟁이 터졌을 때 동의서가 방패라면, 차트와 사진은 원장의 시술이 정당하고 안전했음을 입증하는 결정적 증거다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">3. 판결문 사본을 치과에 비치하라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">2016년 대법원 판결문(2013도850) 사본을 치과 내에 비치해 두어라. 보건소 조사가 나왔을 때, 환자가 "치과에서 이런 시술을 해도 되는 거냐"고 물었을 때, 꺼내 보여줄 수 있는 즉각적인 무기가 된다. A4 몇 장이 만들어내는 신뢰감과 안도감은 생각보다 크다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">4. 전문 채널을 확보해 두어라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">법률 자문, 의료배상보험, 민원 대응과 관련된 문의는 대한치과의사협회(치협) 또는 전문 법률 채널을 통해 신속하게 처리할 수 있는 경로를 미리 확보해 두어야 한다. 문제가 터진 뒤에 채널을 찾는 것은 이미 늦다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">5. SOP를 표준화하라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">동의서 양식, 시술 전후 사진 촬영 절차, 차트 기재 방식, 제품 관리 기록까지 -- 미용시술 관련 모든 운영 절차를 표준화된 SOP(Standard Operating Procedure, 표준 운영 절차)로 정립하라. 개인의 성실함에 의존하는 시스템은 언젠가 반드시 구멍이 뚫린다. 시스템이 지키는 치과만이 오래 간다.</p>
        <p class="text-[#999] text-sm mb-8">동의서 양식, 차트 기록 가이드, SOP 표준의 구체적인 실전 템플릿은 <span class="text-[#1a1a1a] font-bold">STEP 2. 운영 시스템 구축</span>에서 상세히 다룬다. 민원과 신고가 실제로 발생했을 때의 48시간 골든타임 대응 매뉴얼은 <span class="text-[#1a1a1a] font-bold">STEP 5-3. 민원/신고 대응 매뉴얼</span>에서 시나리오별로 펼쳐낸다.</p>
      `,
    },
    {
      id: "s0-closing",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">이 책이 시작되는 이유</h2>
        <p class="text-[#333] leading-relaxed mb-4">치과의사의 미용시술은 합법이다. 대법원 전원합의체가 확인했고, 9년간 단 한 번도 번복되지 않았으며, 미국/영국/호주의 글로벌 스탠다드와도 완벽하게 궤를 같이한다.</p>
        <p class="text-[#333] leading-relaxed mb-4">하지만 합법인 것과 잘 하는 것은 전혀 다른 차원의 문제다.</p>
        <p class="text-[#333] leading-relaxed mb-4">합법이라는 흔들림 없는 법적 토대 위에서, 어떤 시술을 선택하고(STEP 1), 어떻게 운영 시스템을 구축하고(STEP 2), 팀과 공간을 어떻게 세팅하고(STEP 3), 환자를 어떻게 유입시키고(STEP 4), 리스크를 어떻게 관리하는가(STEP 5) -- 그것이 이 책의 나머지 전부다.</p>
        <p class="text-[#333] leading-relaxed mb-8">STEP 0이 "내가 이걸 해도 되는가"라는 질문에 마침표를 찍는 단계였다면, STEP 1부터는 "이 거대한 시장을 어떻게 압도적으로 선점할 것인가"라는 경영자의 질문에 대한 실행의 답을 펼쳐낸다.</p>
      `,
    },
    {
      id: "s0-summary",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">서머리</h2>
        <ul class="space-y-3 mb-8">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">1.</span> 치과의사의 안면미용시술은 대법원 전원합의체 판결(2013도850, 보톡스)과 동일 법리 적용 확정 판결(2013도7796, 레이저)로 합법이 최종 확정되었다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">2.</span> 전원합의체 판결은 대한민국 사법체계의 최종 해석이며, 오직 또 다른 전원합의체 판결로만 변경이 가능하다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">3.</span> 판결은 '안면부'를 치과의사의 진료 영역으로, '미용 목적'의 시술도 합법으로 명확히 인정했다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">4.</span> 2016년부터 2026년까지 9년간, 이 판결을 뒤집는 입법이나 판례는 단 하나도 존재하지 않는다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">5.</span> 한의사 대비 치과의사가 법적으로 가장 완전한 조건 -- 사법적 무죄 확정, 전문의약품 처방권, 해부학 교육 기반 -- 을 보유하고 있다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">6.</span> 합법이지만, 기록(동의서/차트/사진)과 프로토콜로 리스크를 철저히 관리해야 한다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">7.</span> 안면부 밖(승모근/바디) 시술은 판결 논리의 적용이 어려우므로, 시술 범위를 안면부로 한정하라.</li>
        </ul>
      `,
    },
    {
      id: "s0-checklist",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">체크리스트 -- 이 STEP을 완료했다면 아래를 확인하라</h2>
        <ul class="space-y-3 mb-8">
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>대법원 전원합의체 판결(2013도850)과 동일 법리 적용 확정 판결(2013도7796)의 결론을 설명할 수 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>안면부 시술이 합법인 이유를 5가지 근거로 정리할 수 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>부위별 허용 범위 3단계(녹색/황색/적색)를 구분할 수 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>상대방 반론 4가지에 대한 대응 논리를 알고 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>안면 외 부위(승모근/바디) 시술의 법적 리스크를 이해하고 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>한의사 대비 치과의사의 법적 우위를 설명할 수 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>실무 리스크 최소화 5원칙을 치과에 적용할 준비가 되어 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>판결문 사본을 치과에 비치했거나 비치할 계획이 있다</li>
        </ul>
      `,
    },
  ],

  step1: step1Data,
  step2: step2Data,
  step3: step3Data,
  step4: step4Data,
  step5: step5Data,
  appendix: appendixData,
};
