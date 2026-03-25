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
        <p class="text-[#333] leading-relaxed mb-4">치과 개원 시장의 판이 근본적으로 흔들리고 있다. 건강보험 수가는 수 년째 제자리걸음이고, 경쟁은 나날이 심화된다. 신환은 줄고, 임플란트와 교정 중심의 수익 구조만으로는 성장이 멈추는 시점이 온다. 원장님들은 이미 체감하고 있다. "다음 10년을 어떻게 설계할 것인가?"</p>
        <p class="text-[#1a1a1a] font-bold text-lg mb-4">미용치과는 그 막막한 질문에 대한 가장 현실적이고 강력한 해답이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">보톡스, 필러, 레이저, 실리프팅으로 대표되는 안면미용시술 시장은 대한민국 대법원 판결을 통해 치과의사에게 법적으로 완벽하게 열려 있다.</p>
        <!-- 미용치과 시장 지표 인포그래픽 -->
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">MARKET EVIDENCE</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">미용치과 시장을 증명하는 압도적 지표</div>
          </div>
          <div style="display:flex;gap:16px;">
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="font-size:36px;font-weight:800;color:#C4929B;margin-bottom:8px;">20~40%</div>
              <div style="font-size:13px;font-weight:700;color:#2C2C2C;margin-bottom:4px;">미용시술 매출 비중</div>
              <div style="font-size:12px;color:#666;line-height:1.5;">미용시술을 도입한 치과들의<br/>평균 매출 비중</div>
            </div>
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="font-size:36px;font-weight:800;color:#C4929B;margin-bottom:8px;">845%</div>
              <div style="font-size:13px;font-weight:700;color:#2C2C2C;margin-bottom:4px;">보톡스 시술 증가율</div>
              <div style="font-size:12px;color:#666;line-height:1.5;">ASPS 통계 기준<br/>2000~2018년 18년간</div>
            </div>
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="font-size:36px;font-weight:800;color:#C4929B;margin-bottom:8px;">2016</div>
              <div style="font-size:13px;font-weight:700;color:#2C2C2C;margin-bottom:4px;">대법원 판결</div>
              <div style="font-size:12px;color:#666;line-height:1.5;">전원합의체 판결로<br/>합법성 최종 확정</div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "pro-02",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">02. 치과가 이 시장의 주도권을 쥐어야 하는 압도적 이유</h2>
        <p class="text-[#333] leading-relaxed mb-4">피부과나 성형외과가 이미 하고 있는 시장에, 치과가 굳이 들어가야 할 이유가 있을까? 있다. 그것도 압도적으로.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">첫째, 타의 추종을 불허하는 해부학적 전문성.</span> 치과의사는 안면부의 근육, 신경, 혈관 구조를 정규 교육과정에서 체계적으로 학습한다. 특히 삼차신경의 분포와 안면 근육의 기시 및 정지에 대한 이해는 보톡스와 필러 시술의 핵심 기초지식이다. 매일 마취 주사를 놓으며 쌓은 주사 숙련도 역시 무시할 수 없다.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">둘째, 유치 비용 '제로(0)'의 거대한 기존 구환 자산.</span> 신뢰 관계가 이미 형성된 수백에서 수천 명의 구환은 미용 신환 유치 비용이 제로인 잠재 고객이다. 치과 진료를 마친 환자가 자연스럽게 미용 상담으로 이어지는 경험은 피부과나 에스테틱 샵이 따라올 수 없는 구조다.</p>
        <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">셋째, 흔들림 없는 완벽한 법적 근거.</span> 2016년 대법원 전원합의체 판결로 안면부 미용시술의 합법성이 최종 확인되었다. 의료법 제27조 면허 범위 내 행위로 인정받은, 대한민국 사법체계에서 가장 강한 형태의 합법 확인이다.</p>
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
              <div style="font-size:13px;color:#666;line-height:1.6;">안면부 신경, 혈관, 근육 해부학을 체계적으로 학습. <span style="color:#C4929B;font-weight:600;">타의 추종을 불허하는</span> 안면 해부학적 이해도.</div>
            </div>
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="width:56px;height:56px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#C4929B;margin-bottom:4px;">02</div>
              <div style="font-size:15px;font-weight:700;color:#2C2C2C;margin-bottom:8px;">기존 구환<br/>자산</div>
              <div style="font-size:13px;color:#666;line-height:1.6;">수백에서 수천 명의 기존 환자와 <span style="color:#C4929B;font-weight:600;">유치 비용 제로(0)</span>의 잠재 고객 풀. 치과 진료 후 자연스러운 미용 상담 전환.</div>
            </div>
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="width:56px;height:56px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#C4929B;margin-bottom:4px;">03</div>
              <div style="font-size:15px;font-weight:700;color:#2C2C2C;margin-bottom:8px;">완벽한<br/>법적 근거</div>
              <div style="font-size:13px;color:#666;line-height:1.6;">2016년 대법원 전원합의체 판결로 <span style="color:#C4929B;font-weight:600;">안면부 미용시술 합법성</span> 최종 확인. 흔들림 없는 토대.</div>
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
        <p class="text-[#333] leading-relaxed mb-4">의료성장연구소 메디스테이션은 치과 미용시술 도입을 전문으로 연구하고 설계하는 컨설팅 및 교육 연구소다.</p>
        <p class="text-[#333] leading-relaxed mb-4">단순한 시술 교육 과정이 아니다. 원장님의 치과가 미용치과로 안정적으로 전환될 수 있도록, 도입 설계부터 운영 안정화까지 전 과정을 함께한다.</p>
        <p class="text-[#333] leading-relaxed mb-4">이 책은 그 여정의 전체 지도다. 어디서 시작해야 하는지, 무엇을 준비해야 하는지, 어떤 순서로 움직여야 하는지 -- STEP 0부터 STEP 5까지 순서대로 따라가면 된다.</p>
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
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">이 책의 구성</h2>
        <p class="text-[#333] leading-relaxed mb-6">미용 치과의학 입문 전체 로드맵 -- 6단계 (STEP 0~5)</p>
        <!-- 6단계 로드맵 도표 -->
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">ROADMAP</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">STEP 0 &rarr; 5 실전 로드맵</div>
            <div style="font-size:13px;color:#888;margin-top:4px;">각 단계의 핵심 주제와 연결 흐름</div>
          </div>
          <div style="position:relative;height:4px;background:#F5E6E8;border-radius:2px;margin:0 40px 28px;">
            <div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,#e8d5d8,#C4929B);border-radius:2px;"></div>
          </div>
          <div style="display:flex;gap:8px;">
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">0</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">법적 근거</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Legal Foundation</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">흔들리지 않는<br/>단단한 토대</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">1</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">도입 방향</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Direction</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">어떤 시술을<br/>어떻게 시작할 것인가</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">2</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">운영 시스템</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Operations</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">일상 진료에 미용을<br/>완벽하게 녹여내는 법</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">3</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">팀 &amp; 공간</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">MOT Design</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">차이를 만드는<br/>환자 경험 설계</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">4</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">환자 유입</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Marketing</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">구환 전환부터<br/>외부 마케팅까지</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">&rarr;</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#2C2C2C;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;box-shadow:0 0 0 3px #C4929B;">5</div>
              <div style="font-size:12px;font-weight:700;color:#2C2C2C;margin-bottom:2px;">재무 &amp; 리스크</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Finance</div>
              <div style="background:#2C2C2C;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#F5E6E8;line-height:1.5;">확실한 수익 창출<br/>완벽한 법적 방어</div>
              </div>
              <div style="color:#2C2C2C;font-size:12px;margin-top:8px;font-weight:700;">GOAL</div>
            </div>
          </div>
          <div style="text-align:center;margin-top:20px;padding-top:16px;border-top:1px solid #F5E6E8;">
            <div style="font-size:12px;color:#999;">각 STEP은 이전 단계의 산출물 위에 구축됩니다.</div>
          </div>
        </div>
      `,
    },
  ],

  step0: [
    {
      id: "step0-title",
      html: `
        <div class="text-center py-12 border-b border-[#eee] mb-10">
          <p class="text-[#C4929B] text-sm font-medium tracking-[0.2em] mb-4">S T E P &nbsp; 0</p>
          <h1 class="text-4xl font-bold text-[#1a1a1a] mb-3">법적 근거 -- 치과의사 미용시술은 완벽한 '합법'이다</h1>
          <p class="text-[#999] text-sm">흔들리지 않는 단단한 토대</p>
        </div>
      `,
    },
    {
      id: "step0-intro",
      html: `
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">왜 기술이나 마케팅이 아닌 '법'부터 알아야 하는가</h2>
        <p class="text-[#333] leading-relaxed mb-4">이 STEP에서는 치과의사가 미용시술을 할 수 있는 법적 근거를 다룬다. 시술 장비를 고르기 전에, 메뉴판을 짜기 전에, 직원을 교육하기 전에 -- 가장 먼저 확인해야 할 것이 이것이다. 법적으로 서 있는 땅이 단단한지 아닌지.</p>
        <p class="text-[#333] leading-relaxed mb-6">법적 토대가 흔들리면 그 위에 쌓는 모든 것이 무너진다. 수천만 원짜리 장비를 들이고, 직원을 교육시키고, 환자를 유치한 다음에 "사실 불법이었습니다"라는 결론이 나오면 되돌릴 수 없다. 반대로, 법적 근거가 확실하다면 이후의 모든 의사결정이 다른 기반 위에서 이루어진다.</p>
      `,
    },
    {
      id: "step0-intro-background",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">치과의사가 미용시술을 주도할 수 있는 3가지 강력한 배경</h3>
        <p class="text-[#333] leading-relaxed mb-4">치과의사의 미용시술 합법성은 갑자기 하늘에서 떨어진 것이 아니다. 세 가지 기반이 오래전부터 존재했다.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">1. 구강악안면외과</span> -- 치아와 구강뿐 아니라 턱뼈와 그 주변 안면부를 진료 범위로 포함하는 전문 영역이 이미 치과 안에 있다. 안면 골절 수술, 악교정 수술, 턱관절 수술 등을 치과의사가 수행해 온 역사가 수십 년이다.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">2. 해부학적 전문성</span> -- 치과의사는 안면부의 근육, 신경, 혈관 구조를 정규 교육과정에서 학습한다. 특히 삼차신경(trigeminal nerve)의 분포와 안면 근육의 기시 및 정지에 대한 이해는 보톡스와 필러 시술의 핵심 기초지식이다.</p>
        <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">3. 글로벌 스탠다드</span> -- 미국, 영국, 호주 등에서 치과의사의 안면부 미용시술은 이미 합법적으로 정착되어 있다. 한국만의 예외적 현상이 아니라 국제적 흐름 위에 서 있는 것이다.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">구강악안면외과</p>
            <p class="text-[#999] text-xs leading-relaxed">턱뼈와 안면부를 포함하는 치과 전문 영역이 이미 수십 년간 존재</p>
          </div>
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">해부학적 전문성</p>
            <p class="text-[#999] text-xs leading-relaxed">안면 근육, 신경, 혈관 정규 교육 + 매일 마취 주사 시행</p>
          </div>
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">글로벌 스탠다드</p>
            <p class="text-[#999] text-xs leading-relaxed">미국, 영국, 호주 등에서 이미 합법적으로 정착</p>
          </div>
        </div>
      `,
    },
    {
      id: "step0-intro-verdict",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2016년 대법원 판결의 압도적 의미</h3>
        <p class="text-[#333] leading-relaxed mb-4">2016년 7월 21일, 대법원 전원합의체(대법관 13명 전원 참여)가 판결을 선고했다. 치과의사가 환자의 안면부에 보톡스를 시술한 행위는 면허 범위 내 의료행위이며, 미용 목적이라 해서 달리 볼 것은 아니라는 것이다.</p>
        <p class="text-[#1a1a1a] font-bold text-lg mb-6">대한민국 사법체계에서 이보다 더 강한 형태의 합법 확인은 사실상 존재하지 않는다.</p>
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
                <div>일반 사건 처리</div>
                <div>해당 사건에 한정</div>
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
                <div>판례 변경 필요 사건</div>
                <div style="font-weight:700;">이후 하급심 구속</div>
                <div style="color:#C4929B;font-weight:700;">다른 전원합의체 판결로만 변경</div>
              </div>
              <div style="margin-top:12px;padding-top:12px;border-top:2px solid #C4929B;">
                <span style="font-size:11px;color:#C4929B;font-weight:700;">최고 수준의 법적 구속력</span>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "step0-intro-logic",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">대법원의 5가지 철벽 논리</h3>
        <p class="text-[#333] leading-relaxed mb-4">대법원은 종합적 판단 기준을 제시하고, 이를 적용하여 무죄 취지의 판결을 내렸다.</p>
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
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">구강악안면외과는 치과 영역 -- 의료법이 구강악안면외과를 치과 영역으로 인정. 진료 영역에 '턱뼈를 둘러싼 안면부' 포함</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">2</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">안면부 행위를 치과에서 배제 불가 -- 관련 규정 개정 연혁, 학회 설립 경위, 요양급여 지급 결과 등을 종합</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">3</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">의학과 치의학의 학문적 원리는 동일 -- 기초 학문 원리가 다르지 않으며, 교육과정과 수련과정에 공통부분이 상당</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">4</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">치과대학에서 보톡스를 교육 -- 대부분 치과대학/치의학전문대학원에서 보톡스 시술을 교육하고 있으며, 치과 현장에서 활용 중</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,146,155,0.1);border-radius:8px;padding:12px;">
              <span style="background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;flex-shrink:0;">5</span>
              <span style="font-size:13px;color:#F5E6E8;line-height:1.5;">보건위생상 위해가 높지 않음 -- 이미 치과에서 다양한 용도로 활용 중이며, 의료소비자 선택 가능성을 열어두는 것이 바람직</span>
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
      id: "step0-intro-preview",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 STEP을 완독하면 갖게 될 7가지 무기</h3>
        <ul class="space-y-2 mb-6">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">1. 판결의 전모:</span> 1심 유죄에서 대법원 무죄까지, 어떤 논리로 뒤집혔는가 (0-1)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">2. 허용 범위 지도:</span> 녹색/황색/적색 구역 구분과 시술 유형별 법적 방어력 (0-2)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">3. 반론과 대응:</span> 의협과 피부과가 제기하는 반론과 각각의 대응 논리 (0-3)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">4. 글로벌 스탠다드:</span> 미국, 영국, 호주에서 치과의사 미용시술의 위치 (0-4)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">5. 한의사와의 비교:</span> 같은 시장을 노리는 한의사와 법적 조건의 결정적 차이 (0-5)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">6. 법적 안정성:</span> 9년간 번복 사례가 있는가, 앞으로 뒤집힐 가능성은 있는가 (0-6)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">7. 실무 리스크 최소화:</span> 합법이라도 갖춰야 할 기록과 프로토콜 (0-7)</li>
        </ul>
        <p class="text-[#333] leading-relaxed mb-8">이 STEP을 마치면, "해도 되는 건가?"라는 질문이 "어떻게 해야 잘 하는가?"로 바뀌어 있을 것이다.</p>
      `,
    },
    {
      id: "step0-01",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-1. 판결의 전모</h2>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">사건 발단</h3>
        <p class="text-[#333] leading-relaxed mb-4">2011년 10월, 치과의사 A 원장은 자신이 운영하는 치과에서 보톡스를 이용하여 환자의 눈가와 미간 주름을 시술했다. 검찰은 이를 의료법 제27조 제1항 위반으로 기소했다. 의료법 제2조 제2항 제2호는 치과의사의 임무를 "치과 의료와 구강 보건지도"로 규정하고 있는데, 안면부 보톡스가 이 범위에 포함되는지가 핵심 쟁점이었다.</p>
        <p class="text-[#333] leading-relaxed mb-6">2016년 7월 21일, 대법원은 13명 대법관 전원이 참여하는 전원합의체에서 판결을 선고했다. <span class="text-[#1a1a1a] font-bold">치과의사가 환자의 안면부에 보톡스를 시술한 행위는 면허 범위 내 의료행위이며, 그 시술이 미용 목적이라 하여 달리 볼 것은 아니다.</span></p>
      `,
    },
    {
      id: "step0-01-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">대법원 전원합의체 판결의 무게감</h3>
        <p class="text-[#333] leading-relaxed mb-4">대법원 전원합의체는 대법관 13명 전원이 참여하는 최고 심급의 의사결정 구조다. 일반 사건은 대법관 4명으로 구성된 소부에서 처리되지만, 전원합의체가 소집되는 경우는 극히 제한적이다.</p>
        <!-- 소부 vs 전원합의체 비교 도표 -->
        <div class="mb-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border border-[#eee] rounded-lg overflow-hidden">
              <div class="bg-[#f5f5f5] px-4 py-3 text-center">
                <p class="text-[#1a1a1a] font-bold">소부 판결</p>
              </div>
              <div class="p-4 space-y-3 text-sm">
                <div class="flex justify-between"><span class="text-[#999]">구성 규모</span><span class="text-[#1a1a1a] font-bold">대법관 4명</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">사건 유형</span><span class="text-[#1a1a1a]">일반 상소 사건</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">선례 효력</span><span class="text-[#1a1a1a]">번복 가능</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">변경 방법</span><span class="text-[#1a1a1a]">다른 소부 판결로 가능</span></div>
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
                <div class="flex justify-between"><span class="text-[#999]">구성 규모</span><span class="text-[#C4929B] font-bold">대법관 13명 전원</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">사건 유형</span><span class="text-[#C4929B]">판례 변경 필요 사건</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">선례 효력</span><span class="text-[#C4929B] font-bold">판례 법리 확정</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">변경 방법</span><span class="text-[#C4929B] font-bold">다른 전원합의체로만 가능</span></div>
              </div>
              <div class="bg-[#C4929B]/10 px-4 py-2 text-center">
                <p class="text-[#C4929B] text-xs font-bold">최고 수준의 법적 구속력</p>
              </div>
            </div>
          </div>
        </div>
        <p class="text-[#333] leading-relaxed mb-6">대법원이 이 사건에 전원합의체를 소집한 것 자체가, 이 판결의 영향력이 치과계를 넘어 전체 의료체계에 미친다는 것을 인정한 것이다.</p>
      `,
    },
    {
      id: "step0-01-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">5가지 철벽 논리</h3>
        <p class="text-[#333] leading-relaxed mb-4">대법원은 종합적 판단 기준을 제시하고, 이를 적용하여 무죄 취지의 판결을 내렸다.</p>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">근거</th>
                <th class="px-4 py-2 text-left font-medium">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구강악안면외과는 치과 영역 -- 의료법이 구강악안면외과를 치과 영역으로 인정. 진료 영역에 '턱뼈를 둘러싼 안면부' 포함</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면부 행위를 치과에서 배제 불가 -- 관련 규정 개정 연혁, 학회 설립 경위, 요양급여 지급 결과 등을 종합하면, 안면부 의료행위를 모두 치과에서 배제할 수 없음</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의학과 치의학의 학문적 원리는 동일 -- 기초 학문 원리가 다르지 않으며, 교육과정과 수련과정에 공통부분이 상당</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과대학에서 보톡스를 교육 -- 대부분 치과대학/치의학전문대학원에서 보톡스 시술을 교육하고 있으며, 치과 현장에서 활용 중</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보건위생상 위해가 높지 않음 -- 이미 치과에서 다양한 용도로 활용 중이며, 의료소비자 선택 가능성을 열어두는 것이 바람직</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "step0-01-03",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">후속 판례</h3>
        <p class="text-[#333] leading-relaxed mb-4">2016년 8월 29일, 안면 프락셀 레이저 시술에 대해서도 동일 법리가 적용되어 무죄가 확정됐다(대법원 2013도7796). 전원합의체 판결 1건과 같은 법리를 적용한 확정 판결 1건이 같은 방향으로 나옴으로써, 치과의사의 안면미용시술 합법성은 단발성 판례가 아닌 <span class="text-[#1a1a1a] font-bold">일관된 사법 해석</span>으로 자리잡았다.</p>
        <p class="text-[#333] leading-relaxed mb-6">2022년에는 한의사 초음파 판결이 2013도850 판결의 논리를 직접 인용하면서, 면허 범위 해석에서 '보건위생상 위해 가능성'과 '금지 규정의 존부'를 핵심 기준으로 강화했다.</p>
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
      id: "step0-02",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-2. 허용 범위 지도</h2>
        <p class="text-[#333] leading-relaxed mb-6">판결은 '합법'이라고 선언했다. 하지만 '모든 시술이 모든 부위에서 합법'이라고 한 적은 없다. 원장이 반드시 알아야 할 것은 안전한 영역과 위험한 영역의 경계다.</p>
      `,
    },
    {
      id: "step0-02-01",
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
                <div style="font-size:14px;font-weight:700;color:#4A7C59;margin-bottom:4px;">녹색 (안전)</div>
                <div style="font-size:13px;color:#333;line-height:1.6;"><span style="font-weight:600;">부위:</span> 눈가, 미간, 교근(사각턱), 이갈이</div>
                <div style="font-size:12px;color:#666;margin-top:4px;">판결에서 직접 판시. 실무에서 문제될 가능성 극히 낮음.</div>
              </div>
            </div>
            <!-- 황색 -->
            <div style="display:flex;align-items:stretch;gap:12px;background:#fdf8ef;border:2px solid #B8860B;border-radius:12px;padding:16px;">
              <div style="width:48px;min-width:48px;background:#B8860B;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
              </div>
              <div>
                <div style="font-size:14px;font-weight:700;color:#B8860B;margin-bottom:4px;">황색 (주의)</div>
                <div style="font-size:13px;color:#333;line-height:1.6;"><span style="font-weight:600;">부위:</span> 이마, 팔자, 입술, 턱끝, 입꼬리</div>
                <div style="font-size:12px;color:#666;margin-top:4px;">판결 논리 확장 가능하나 직접 판례 없음. 기록(동의서, 차트, 사진) 철저히.</div>
              </div>
            </div>
            <!-- 적색 -->
            <div style="display:flex;align-items:stretch;gap:12px;background:#fdf0f0;border:2px solid #A63D40;border-radius:12px;padding:16px;">
              <div style="width:48px;min-width:48px;background:#A63D40;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
              </div>
              <div>
                <div style="font-size:14px;font-weight:700;color:#A63D40;margin-bottom:4px;">적색 (위험)</div>
                <div style="font-size:13px;color:#333;line-height:1.6;"><span style="font-weight:600;">부위:</span> 승모근, 바디 부위</div>
                <div style="font-size:12px;color:#666;margin-top:4px;">안면부 벗어남. 판결 논리 적용 어려움. 고발 시 방어 근거 약함.</div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "step0-02-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">시술 유형별 법적 방어력 매트릭스</h3>
        <p class="text-[#333] leading-relaxed mb-4">부위만이 아니라 시술 유형에 따라서도 법적 근거의 강도가 다르다.</p>
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
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">직접 판결</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">즉시 시작</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">레이저</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">강함</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">직접 판결</td>
                  <td class="bg-[#4A7C59] text-white text-center px-3 py-2 font-semibold">즉시 시작</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">필러 / 스킨부스터</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">보통</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">간접 적용</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">기록 철저</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">실리프팅</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">보통~약함</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">간접 적용</td>
                  <td class="bg-[#B8860B]/30 text-[#1a1a1a] text-center px-3 py-2 font-semibold">안면부 한정</td>
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
      id: "step0-02-03",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">실전 방어 3원칙</h3>
        <ol class="list-decimal list-inside space-y-3 mb-6">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">안면부에 머물러라.</span> 판결의 논리가 미치는 범위는 안면부다. 승모근과 바디는 영역 밖이다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">기록을 남겨라.</span> 동의서, 차트, 시술 전후 사진은 분쟁 시 유일한 방어 수단이다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">교육 근거를 갖춰라.</span> 시술 관련 교육 이수 이력은 '면허 범위 내'를 입증하는 보조 근거가 된다.</li>
        </ol>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-8">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 예시:</span> 사각턱 보톡스(녹색)를 시작으로, 입술 필러(황색)로 확장하고, 승모근(적색)은 메뉴에 넣지 않는다 -- 이것이 허용 범위 지도를 실무에 적용하는 가장 안전한 순서다.</p>
        </div>
      `,
    },
    {
      id: "step0-03",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-3. 반론과 현실 — 합법인데 왜 아직 불안한가</h2>
        <p class="text-[#333] leading-relaxed mb-4">대법원 전원합의체가 '합법'이라는 거대한 방패를 쥐여주었다. 그런데도 진료실로 돌아오면 원장들의 손끝에는 여전히 미세한 떨림이 남아 있다.</p>
        <p class="text-[#333] leading-relaxed mb-6">왜 그런가. 합법을 선언한 것은 대법원이지만, 그 판결을 불쾌하게 여기는 세력이 아직도 조직적으로 움직이고 있기 때문이다. 이 챕터에서는 그 불안의 정체를 낱낱이 해부하고, 현장에서 마주칠 수 있는 반론과 공격에 대한 철벽 대응 논리를 완전무장시킨다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">의협의 입장과 실제 행동</h3>
        <p class="text-[#333] leading-relaxed mb-4">대한의사협회는 2016년 판결 이후에도 치과의사의 안면미용시술에 대한 반대 입장을 한 치도 굽히지 않고 있다. 별도의 신고센터를 운영하며, 개별 민원을 경찰 고발 또는 보건소 제보로 연결하는 사례가 지금 이 순간에도 지속되고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-8">하지만 명심해야 한다. 의협이 아무리 맹렬하게 반대해도, 그 반대가 법적 구속력을 가진 적은 단 한 번도 없다. 2016년 판결 이후 의료법 개정을 통해 치과의사의 미용시술을 원천 차단하려는 시도가 있었으나, 국회의 문턱을 끝내 넘지 못했다. 피부과학회가 사활을 걸고 제기한 헌법소원 역시 각하되었다. 9년간 이어진 모든 역공이 전부 무위로 돌아갔다는 사실 자체가, 2016년 판결의 철옹성이 얼마나 견고한지를 역설적으로 증명한다.</p>
      `,
    },
    {
      id: "step0-03-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">상대방이 사용하는 4가지 반론 — 미리 알고 완전무장하라</h3>
        <p class="text-[#333] leading-relaxed mb-6">전장에 나서기 전에 적이 어떤 총을 들고 있는지 파악하는 것은 기본 중의 기본이다. 의협과 피부과학회가 집요하게 반복하는 반론은 정확히 네 가지로 수렴된다. 하나하나 해부한다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 반론 1 : "교육과정에 포함됐다고 면허 범위가 자동으로 확대되는 것은 아니다"</h4>
        <p class="text-[#333] leading-relaxed mb-6">이들이 즐겨 쓰는 비유가 있다. "간호대에서 내과를 배웠다고 간호사가 진료할 수 있는가?" 언뜻 그럴듯하게 들리지만, 대법원의 판단 구조를 의도적으로 왜곡한 궤변이다. 대법원은 '교육과정 포함' 하나만으로 합법을 선언한 적이 없다. 교육과정, 수련 체계, 의학과 치의학의 학문적 동질성, 보건위생상 위해 가능성까지 네 가지 근거를 종합적으로 직조한 복합 판단이었다. 실 한 가닥만 뽑아들고 "이건 약하다"고 흔드는 것은, 쇠사슬의 고리 하나만 보고 전체 사슬이 끊어졌다고 우기는 것과 다르지 않다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 반론 2 : "보건복지부가 '미용 보톡스는 무면허 의료행위'라고 유권해석한 바 있다"</h4>
        <p class="text-[#333] leading-relaxed mb-6">과거 복지부의 유권해석은 사실이다. 하지만 법의 위계를 모르는 사람이나 이 카드를 꺼내든다. 대법원 전원합의체 판결은 행정부의 유권해석보다 절대적으로 상위에 존재하는 최종 규범이다. 판결 이후 복지부 스스로도 해당 유권해석을 근거로 한 어떠한 행정 집행도 하지 않았다. 무기로서의 유효기간이 만료된 탄환이다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 반론 3 : "판결은 눈가와 미간에 한정된다. 이마, 사각턱, 볼 등 다른 부위에는 적용되지 않는다"</h4>
        <p class="text-[#333] leading-relaxed mb-6">판결문을 제대로 읽지 않은 사람이 범하는 전형적인 오독이다. 대법원이 인정한 것은 '눈가와 미간'이라는 특정 포인트가 아니라, '안면부'라는 영역 전체다. 판시 사항과 판결 이유의 구분은 법학의 기초 중 기초인데, 이 둘을 의도적으로 혼동시키는 것이 이 반론의 수법이다. 판결 이유에서 대법원은 구강악안면외과의 진료 범위가 안면부 전체를 아우른다는 점을 명확히 설시했다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 반론 4 : "승모근, 종아리 등 안면부 밖의 시술은 판결 적용 밖이며 고발 대상이다"</h4>
        <p class="text-[#333] leading-relaxed mb-4">이 반론은 다른 셋과 결이 다르다. 일부 타당하기 때문이다. 2016년 판결의 논리적 보호막은 '안면부'라는 대전제 위에 서 있고, 승모근이나 종아리 같은 바디 영역은 그 보호막의 바깥이다. 이것은 상대방의 공격이 아니라, 우리 스스로 직시해야 할 현실적 경계선이다. 앞서 0-2에서 적색 구역으로 분류한 이유가 정확히 여기에 있다. 바디 시술은 현재의 판결 논리로 방어하기 어렵다. 메뉴판에서 지워라.</p>
        <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-8">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#f59e0b] font-bold">주의:</span> 반론 4는 상대방 논리가 아니라 실제 리스크다. 승모근·바디 시술은 현재 판결 논리로 방어하기 어렵다.</p>
        </div>
      `,
    },
    {
      id: "step0-03-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">현실적 리스크를 직시하라</h3>
        <p class="text-[#333] leading-relaxed mb-4">합법이다. 대법원이 그렇게 판결했다. 9년간 단 한 번도 뒤집히지 않았다.</p>
        <p class="text-[#333] leading-relaxed mb-4">하지만 합법이라는 사실이 현장의 모든 마찰을 자동으로 소멸시켜주지는 않는다. 원장들이 알아야 할 현실은 이것이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">민원의 경로는 열려 있다. 의협 신고센터, 불만을 품은 환자, 경쟁 의원의 제보 — 누구든 민원을 넣을 수 있다. 민원이 접수되면 보건소는 조사를 진행하고, 보건소에서 복지부로, 복지부에서 검찰로 넘어가는 경로가 존재한다.</p>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">그러나 이것이 '하지 말아야 할 이유'가 되는가. 절대 아니다. 최종 판단의 기준은 대법원 전원합의체 판결이고, 이 철옹성을 무너뜨린 사례는 지난 9년간 단 하나도 없다. 필요한 것은 불안 앞에 멈추는 것이 아니라, 기록과 프로토콜로 완전무장하는 것이다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">현장 사례 : 기록이 원장을 지킨 순간</h3>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-4">
          <p class="text-[#333] text-sm leading-relaxed">A 치과는 보톡스 도입 3개월 차에 인근 경쟁 의원의 민원이 접수되어 보건소 조사를 받았다. 원장은 시술 동의서, 차트, 시술 전후 사진을 한 치의 빈틈 없이 보관하고 있었고, 2016년 대법원 판결문 사본을 즉시 제출했다. 결과는 명확했다. 어떠한 행정 조치 없이 종결. 기록이 없었다면, 결과가 달랐을 수 있다.</p>
        </div>
        <p class="text-[#999] text-sm mb-8">민원과 신고가 실제로 발생했을 때의 구체적인 48시간 골든타임 대응 매뉴얼은 <span class="text-[#1a1a1a] font-bold">STEP 5-3. 민원·신고 대응 매뉴얼</span>에서 실전 시나리오별로 상세히 다룬다.</p>
      `,
    },
    {
      id: "step0-04",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-4. 글로벌 스탠다드 — 세계는 이미 움직이고 있다</h2>
        <p class="text-[#333] leading-relaxed mb-4">혹시 이런 생각을 한 적이 있는가. "치과의사가 보톡스를 놓는다니, 이건 한국에서만 벌어지는 기현상 아닌가?"</p>
        <p class="text-[#333] leading-relaxed mb-6">결론부터 말한다. 천만의 말씀이다. 치과의사의 안면부 미용시술은 대한민국만의 특이한 현상이 아니라, 의료 선진국에서 이미 수십 년 전부터 확립된 글로벌 스탠다드다. 한국이 오히려 뒤늦게 합류한 셈이다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">미국 — 치과의사 미용시술 교육의 본산</h3>
        <p class="text-[#333] leading-relaxed mb-6">미국치과의사협회(ADA)는 산하의 평생교육인증프로그램(CERP)을 통해 보톡스와 필러 교육 프로그램을 공식 인증하고 있다. 약 절반에 달하는 주에서 치과의사의 구강·악안면 영역 보톡스·필러 시술을 명시적으로 허용하며, 치과의사가 안면미용시술을 수행하는 것은 논란의 대상이 아니라 제도권 안의 일상이다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">영국 — 보톡스 처방 권한을 가진 유일한 치과 등록자</h3>
        <p class="text-[#333] leading-relaxed mb-6">영국 일반치과위원회(GDC)는 치과의사를 보톡스 처방이 가능한 유일한 치과 등록 전문직으로 인정하고 있다. 보톡스는 영국에서 처방전 의약품(POM)으로 분류되며, 치과의사가 직접 처방하고 시술할 수 있는 법적 권한을 갖는다. 2021년에는 「Botulinum Toxin and Cosmetic Fillers (Children) Act 2021」이 시행되어 18세 미만에 대한 보톡스·필러 시술이 전면 금지되었는데, 이는 역으로 성인 대상 치과의사의 미용시술이 확고히 제도화되어 있음을 방증한다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">호주 — 2009년부터 교육 체계 정착</h3>
        <p class="text-[#333] leading-relaxed mb-6">호주는 2009년 AADFA(호주미용치과의사협회)가 설립된 이후, 치과의사의 안면미용시술 교육과 시행 체계가 일찌감치 자리를 잡았다. 한국보다 7년이나 앞선 셈이다.</p>
      `,
    },
    {
      id: "step0-04-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">글로벌 시장이 보내는 신호 — 845%라는 숫자</h3>
        <p class="text-[#333] leading-relaxed mb-6">이것은 단순히 각국의 법제도가 허용한다는 차원의 이야기가 아니다. 시장 자체가 폭발적으로 팽창하고 있다는 사실에 주목해야 한다. 미국성형외과학회(ASPS) 통계에 따르면, 2000년부터 2018년까지 18년간 보툴리눔 톡신 시술 건수는 무려 845% 증가했다. 국제 학술계에서도 치과의사의 안면미용 역할 확장을 '성장하는 분야'로 명시한 논문이 PubMed에 다수 등재되어 있으며, 해부학 교육 기반을 갖춘 치과의사야말로 가장 적합한 시술자라는 논거가 반복적으로 제기되고 있다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">한국의 좌표 — 뒤처진 것이 아니라, 따라잡은 것이다</h3>
        <p class="text-[#333] leading-relaxed mb-4">정리하면 이렇다. 미국, 영국, 호주 등 의료 선진국에서는 치과의사의 안면미용시술이 이미 제도의 한복판에 자리 잡고 있다. 한국은 2016년 대법원 전원합의체 판결을 통해 이 글로벌 흐름에 사법적으로 합류했다. 뒤처진 것이 아니라, 드디어 따라잡은 것이다.</p>
        <p class="text-[#333] leading-relaxed mb-8">그럼에도 아직 주저하고 있는 원장이 있다면, 이 한 가지만 기억하라. 당신이 안면미용시술을 망설이는 동안, 지구 반대편의 치과의사들은 이미 수십 년째 같은 시술로 환자의 만족과 치과의 성장이라는 두 마리 토끼를 거머쥐고 있다. 세계는 이미 움직이고 있다. 질문은 "할 것인가, 말 것인가"가 아니라, "언제 시작할 것인가"다.</p>
      `,
    },
    {
      id: "step0-05",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-5. 한의사와의 비교 — 같은 시장, 다른 무기</h2>
        <p class="text-[#333] leading-relaxed mb-4">미용 시장의 문 앞에 서 있는 것은 치과의사만이 아니다. 한의계 역시 이 거대한 시장에 적극적으로 진입을 시도하고 있다. 서울시한의사회는 피부미용센터를 개설했고, HIFU, 레이저, 보톡스, 필러 교육을 진행 중이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">하지만 같은 문을 두드린다고 해서 같은 열쇠를 쥐고 있는 것은 아니다. 법적 조건에서 치과의사와 한의사 사이에는 좁힐 수 없는 결정적 격차가 존재한다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">치과의사 vs 한의사 — 법적 조건 비교</h3>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 보톡스 시술</h4>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 대법원 무죄 확정(2013도850). 한의사는 전문의약품 처방권 자체가 없다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 필러 시술</h4>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 보톡스 판결과 동일한 논리 구조로 방어 근거를 갖추고 있다. 한의사는 대법원에서 유죄가 확정되었다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 레이저 시술</h4>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 대법원 무죄 확정(2013도7796). 한의사는 대법원에서 유죄가 확정되었다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 해부학 교육</h4>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 안면 해부학을 학부 정규 과정에서 6년간 혹독하게 훈련받는다. 한의사는 한의학 기반이며, 서양 해부학 교육은 제한적이다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">▶ 주사 숙련도</h4>
        <p class="text-[#333] leading-relaxed mb-6">치과의사는 매일 구강 내 마취 주사를 놓으며 손끝의 정밀함을 벼려왔다. 한의사의 주사 시술 빈도는 이에 비할 바가 아니다.</p>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">한마디로 정리하면 이렇다. 치과의사는 '무죄', 한의사는 '유죄'. 이보다 명쾌한 비교가 있을 수 없다.</p>
        <p class="text-[#333] leading-relaxed mb-8">그런데도 한의계가 이 시장에 사활을 걸고 진입을 시도한다는 사실 자체가, 역설적으로 이 시장의 압도적인 매력도를 반증한다. 법적으로 문이 닫혀 있는 쪽도 기를 쓰고 들어오려는 시장에, 법적으로 문이 활짝 열려 있는 치과의사가 들어가지 않을 이유가 어디에 있는가.</p>
      `,
    },
    {
      id: "step0-05-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">최근 한의사 판례 동향 — 진단기기는 허용, 침습 시술은 여전히 불법</h3>
        <p class="text-[#333] leading-relaxed mb-4">오해를 방지하기 위해 최근 판례의 흐름도 정확히 짚고 넘어간다.</p>
        <p class="text-[#333] leading-relaxed mb-4">2022년 대법원 전원합의체(2016도21314)는 한의사의 초음파 진단기기 사용을 면허 범위 내로 인정했다. 주목할 점은, 이 판결이 치과의사 보톡스 판결(2013도850)의 논리를 핵심 근거로 직접 인용했다는 사실이다. 치과의사의 미용시술 합법성이 흔들리기는커녕, 다른 직역의 판결에서까지 선례로 원용되며 더욱 단단한 반석으로 굳어지고 있는 것이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">이후 뇌파계(2023년), X-ray 골밀도 측정기(2024~2025년) 등 한의사의 비침습 진단기기 사용 허용이 확대되는 추세다. 그러나 핵심을 놓쳐서는 안 된다. <span class="text-[#1a1a1a] font-bold">허용된 것은 오직 비침습 '진단'기기뿐이다.</span> 보톡스(전문의약품 처방 불가), 필러(대법원 유죄 확정), IPL·레이저(유죄 확정) 등 침습적 시술 영역의 문은 여전히 한의사에게 굳게 닫혀 있다. 리도카인 등 전문의약품 사용 역시 유죄가 유지되고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-8">치과의사는 해부학적 교육 기반, 전문의약품 처방권, 그리고 대법원의 사법적 무죄 확정이라는 세 가지 무기를 모두 장착하고 있다. 이 시장에 진입할 수 있는 조건이 가장 완벽하게 갖춰진 직역이, 가장 신중하게 망설이고 있는 아이러니. 이 책이 그 망설임을 끝내기 위해 존재한다.</p>
      `,
    },
    {
      id: "step0-06",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-6. 9년간의 법적 안정성 — 단 한 번도 번복되지 않았다</h2>
        <p class="text-[#333] leading-relaxed mb-6">2016년 판결 직후, 의협은 비상대책위를 구성하고 의료법 개정을 통한 전면 차단을 선언했다. 피부과 전문의들은 의료법 제2조 제2항 제2호 등이 치과의사에게 안면부 의료행위를 허용해 건강권과 직업의 자유를 침해한다며 헌법소원(2016헌마897)을 제기했다.</p>
        <p class="text-[#333] leading-relaxed mb-6">결과는 참담했다 — 상대방에게. 헌법재판소는 2016년 11월 1일 이를 각하했다. 청구기간 도과, 그리고 나머지 규정은 치과의사 허용 범위를 직접 정한 것이 아니라는 이유였다. 본안 심사에 진입조차 하지 못한 것이다. 사법부의 문턱에서 되돌려 보내진 셈이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">이후 9년간의 흐름을 추적하면, 이 판결의 철옹성이 얼마나 견고한지 더욱 선명하게 드러난다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">판결 이후 9년간의 타임라인</h3>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 2016년 판결 직후 :</span> 의협, 의료법 개정 추진 — 입법 불성사.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 2016년 11월 :</span> 피부과 전문의 헌법소원(2016헌마897) — 각하. 본안 심사에 진입조차 못 함.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 2022년 12월 :</span> 한의사 초음파 판결(2016도21314 전원합의체)에서 치과의사 보톡스 판결(2013도850)의 논리를 핵심 근거로 직접 인용 — 판결의 논리가 약해지기는커녕 오히려 강화.</p>
        <p class="text-[#333] leading-relaxed mb-4"><span class="text-[#1a1a1a] font-bold">▶ 2024년 2월 :</span> 보건복지부, "의사·치과의사만 직접 시술 가능" 원칙 재확인 — 치과의사 미용시술 합법성을 행정부가 재차 공인.</p>
        <p class="text-[#333] leading-relaxed mb-6"><span class="text-[#1a1a1a] font-bold">▶ 2016~2026년 :</span> 치과의사가 안면미용시술로 유죄 확정된 공개 사례 — <span class="text-[#1a1a1a] font-bold">단 하나도 없다.</span></p>
        <p class="text-[#333] leading-relaxed mb-4">9년이다. 9년이라는 세월 동안 의료법 개정도, 헌법소원도, 새로운 판례도, 행정 제재도 — 이 판결을 흔들어본 시도는 전부 있었으나, 성공한 것은 단 하나도 없다.</p>
        <p class="text-[#333] leading-relaxed mb-8">전원합의체 판결은 대법원장을 포함한 대법관 전원이 참여해 내린 대한민국 사법체계의 최종 해석이다. 하급 법원은 이를 뒤집을 수 없으며, 오직 또 다른 전원합의체 판결로만 번복이 가능하다. 그리고 그 번복을 시도할 법적 근거도, 사회적 동력도, 현재로서는 어디에도 존재하지 않는다.</p>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-8">결론은 단호하다. 이 판결은 흔들리지 않았고, 앞으로도 흔들릴 가능성은 극히 낮다. 원장들이 세워야 할 전략의 토대는 충분히 단단하다.</p>
      `,
    },
    {
      id: "step0-07",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-7. 실무 리스크 최소화 5원칙 — 합법의 방패 위에 기록의 갑옷을 입혀라</h2>
        <p class="text-[#333] leading-relaxed mb-4">합법성은 확정되어 있다. 대법원이 그렇게 선언했고, 9년간 단 한 번도 번복되지 않았다.</p>
        <p class="text-[#333] leading-relaxed mb-6">하지만 합법이라는 방패만 믿고 빈손으로 진료실에 서는 것은 어리석다. 전장에서 방패만 든 병사와, 방패 위에 갑옷까지 걸친 병사의 생존율은 하늘과 땅 차이다. 기록과 프로토콜이 바로 그 갑옷이다.</p>
        <p class="text-[#333] leading-relaxed mb-8">민원이 접수되든, 보건소 조사가 나오든, 경찰 고발이 들어오든 — 기록이 완벽한 치과는 흔들리지 않는다. 기록이 없는 치과는 합법임에도 불필요한 소모전에 휘말린다. 차이를 만드는 것은 합법 여부가 아니라, 합법을 증명할 수 있는 기록의 밀도다.</p>
        <p class="text-[#1a1a1a] font-bold text-lg leading-relaxed mb-6">현장에서 반드시 지켜야 할 5가지 원칙을 박아둔다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">1. 시술 전 동의서를 반드시 징구하라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">충분한 설명 후 서면 동의서를 받는 것은 선택이 아니라 필수다. 동의서에는 최소한 다음 항목이 빠짐없이 포함되어야 한다 — 시술명, 시술 부위, 사용 제품명과 용량, 예상 효과 및 지속 기간, 가능한 부작용, 환자 서명과 날짜. 이 한 장의 종이가 민원 발생 시 원장을 보호하는 가장 강력한 1차 방어선이 된다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">2. 차트와 사진을 철벽같이 보존하라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">시술 전후 사진 촬영과 차트 기재는 습관이 아니라 시스템으로 박아야 한다. 매 시술마다 예외 없이 기록하고, 최소 5년 이상 보관하라. 분쟁이 터졌을 때 동의서가 방패라면, 차트와 사진은 원장의 시술이 정당하고 안전했음을 입증하는 결정적 증거다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">3. 판결문 사본을 치과에 비치하라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">2016년 대법원 판결문(2013도850) 사본을 치과 내에 비치해 두어라. 보건소 조사가 나왔을 때, 환자가 "치과에서 이런 시술을 해도 되는 거냐"고 물었을 때, 꺼내 보여줄 수 있는 즉각적인 무기가 된다. A4 몇 장이 만들어내는 신뢰감과 안도감은 생각보다 크다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">4. 전문 채널을 확보해 두어라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">법률 자문, 의료배상보험, 민원 대응과 관련된 문의는 대한치과의사협회(치협) 또는 전문 법률 채널을 통해 신속하게 처리할 수 있는 경로를 미리 확보해 두어야 한다. 문제가 터진 뒤에 채널을 찾는 것은 이미 늦다.</p>
        <h4 class="text-lg font-bold text-[#1a1a1a] mb-3">5. SOP를 표준화하라.</h4>
        <p class="text-[#333] leading-relaxed mb-6">동의서 양식, 시술 전후 사진 촬영 절차, 차트 기재 방식, 제품 관리 기록까지 — 미용시술 관련 모든 운영 절차를 표준화된 SOP(Standard Operating Procedure, 표준 운영 절차)로 정립하라. 개인의 성실함에 의존하는 시스템은 언젠가 반드시 구멍이 뚫린다. 시스템이 지키는 치과만이 오래 간다.</p>
        <p class="text-[#999] text-sm mb-8">동의서 양식, 차트 기록 가이드, SOP 표준의 구체적인 실전 템플릿은 <span class="text-[#1a1a1a] font-bold">STEP 2. 운영 시스템 구축</span>에서 상세히 다룬다. 민원과 신고가 실제로 발생했을 때의 48시간 골든타임 대응 매뉴얼은 <span class="text-[#1a1a1a] font-bold">STEP 5-3. 민원·신고 대응 매뉴얼</span>에서 시나리오별로 펼쳐낸다.</p>
      `,
    },
    {
      id: "step0-closing",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">이 책이 시작되는 이유</h2>
        <p class="text-[#333] leading-relaxed mb-4">치과의사의 미용시술은 합법이다. 대법원 전원합의체가 확인했고, 9년간 단 한 번도 번복되지 않았으며, 미국·영국·호주의 글로벌 스탠다드와도 완벽하게 궤를 같이한다.</p>
        <p class="text-[#333] leading-relaxed mb-4">하지만 합법인 것과 잘 하는 것은 전혀 다른 차원의 문제다.</p>
        <p class="text-[#333] leading-relaxed mb-4">합법이라는 흔들림 없는 법적 토대 위에서, 어떤 시술을 선택하고(STEP 1), 어떻게 운영 시스템을 구축하고(STEP 2), 팀과 공간을 어떻게 세팅하고(STEP 3), 환자를 어떻게 유입시키고(STEP 4), 리스크를 어떻게 관리하는가(STEP 5) — 그것이 이 책의 나머지 전부다.</p>
        <p class="text-[#333] leading-relaxed mb-8">STEP 0이 "내가 이걸 해도 되는가"라는 질문에 마침표를 찍는 단계였다면, STEP 1부터는 "이 거대한 시장을 어떻게 압도적으로 선점할 것인가"라는 경영자의 질문에 대한 실행의 답을 펼쳐낸다.</p>
      `,
    },
    {
      id: "step0-summary",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">서머리</h2>
        <ul class="space-y-3 mb-8">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">▶</span> 치과의사의 안면미용시술은 대법원 전원합의체 판결(2013도850, 보톡스)과 동일 법리 적용 확정 판결(2013도7796, 레이저)로 합법이 최종 확정되었다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">▶</span> 전원합의체 판결은 대한민국 사법체계의 최종 해석이며, 오직 또 다른 전원합의체 판결로만 변경이 가능하다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">▶</span> 판결은 '안면부'를 치과의사의 진료 영역으로, '미용 목적'의 시술도 합법으로 명확히 인정했다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">▶</span> 2016년부터 2026년까지 9년간, 이 판결을 뒤집는 입법이나 판례는 단 하나도 존재하지 않는다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">▶</span> 한의사 대비 치과의사가 법적으로 가장 완전한 조건 — 사법적 무죄 확정, 전문의약품 처방권, 해부학 교육 기반 — 을 보유하고 있다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">▶</span> 합법이지만, 기록(동의서·차트·사진)과 프로토콜로 리스크를 철저히 관리해야 한다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">▶</span> 안면부 밖(승모근·바디) 시술은 판결 논리의 적용이 어려우므로, 시술 범위를 안면부로 한정하라.</li>
        </ul>
      `,
    },
    {
      id: "step0-checklist",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">체크리스트 — 이 STEP을 완료했다면 아래를 확인하라</h2>
        <ul class="space-y-3 mb-8">
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>대법원 전원합의체 판결(2013도850)과 동일 법리 적용 확정 판결(2013도7796)의 결론을 설명할 수 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>안면부 시술이 합법인 이유를 5가지 근거로 정리할 수 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>부위별 허용 범위 3단계(녹색·황색·적색)를 구분할 수 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>상대방 반론 4가지에 대한 대응 논리를 알고 있다</li>
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>안면 외 부위(승모근·바디) 시술의 법적 리스크를 이해하고 있다</li>
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
