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
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">1. 당신의 치과, 지금 변화가 필요한가</h2>
        <p class="text-[#333] leading-relaxed mb-4">치과 개원 시장이 바뀌고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-4">보험 수가는 제자리이고, 경쟁은 심해졌다. 신환은 줄고, 임플란트·교정 중심의 수익 구조만으로는 성장이 멈추는 시점이 온다. 원장님들은 이미 체감하고 있다. 문제는 '어디서부터 시작하느냐'다.</p>
        <p class="text-[#1a1a1a] font-bold text-lg mb-4">미용치과는 그 해답 중 하나다.</p>
        <p class="text-[#333] leading-relaxed mb-4">보톡스·필러·레이저·실리프팅으로 대표되는 안면미용시술 시장은 대법원 판결로 치과의사에게 법적으로 열려 있다. 법적 근거가 궁금하다면 STEP 0에서 판결의 전모와 허용 범위를 확인할 수 있다. 이 시장은 지금도 성장 중이다. 이미 이 길을 먼저 간 치과들은 기존 수익의 20~40%를 미용시술에서 만들어내고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-6">이 책은 그 길을 처음 걷는 원장님을 위한 실전 로드맵이다.</p>
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">REVENUE STRUCTURE</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">치과 수익구조 변화</div>
            <div style="font-size:13px;color:#888;margin-top:4px;">미용시술 도입 전 vs 후 매출 비중 비교</div>
          </div>
          <div style="display:flex;gap:20px;align-items:stretch;">
            <!-- BEFORE -->
            <div style="flex:1;background:#F9F5F6;border-radius:12px;padding:20px;position:relative;">
              <div style="text-align:center;margin-bottom:16px;">
                <div style="font-size:13px;font-weight:700;color:#C4929B;letter-spacing:1px;">BEFORE</div>
                <div style="font-size:15px;font-weight:600;color:#2C2C2C;">기존 수익구조</div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span>임플란트</span><span style="font-weight:700;">45%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:45%;height:100%;background:#C4929B;border-radius:6px;"></div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span>교정</span><span style="font-weight:700;">25%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:25%;height:100%;background:#C4929B;border-radius:6px;"></div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span>보존/보철</span><span style="font-weight:700;">20%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:20%;height:100%;background:#C4929B;border-radius:6px;"></div></div>
              </div>
              <div style="margin-bottom:4px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span>기타</span><span style="font-weight:700;">10%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:10%;height:100%;background:#C4929B;border-radius:6px;"></div></div>
              </div>
              <div style="text-align:center;margin-top:16px;padding-top:12px;border-top:1px solid #e0d0d3;">
                <div style="font-size:11px;color:#999;">미용시술 매출</div>
                <div style="font-size:22px;font-weight:800;color:#ccc;">0%</div>
              </div>
            </div>
            <!-- ARROW -->
            <div style="display:flex;align-items:center;font-size:28px;color:#C4929B;font-weight:700;">→</div>
            <!-- AFTER -->
            <div style="flex:1;background:#F5E6E8;border-radius:12px;padding:20px;border:2px solid #C4929B;position:relative;">
              <div style="text-align:center;margin-bottom:16px;">
                <div style="font-size:13px;font-weight:700;color:#C4929B;letter-spacing:1px;">AFTER</div>
                <div style="font-size:15px;font-weight:600;color:#2C2C2C;">미용시술 도입 후</div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span>임플란트</span><span style="font-weight:700;">30%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:30%;height:100%;background:#C4929B;border-radius:6px;"></div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span>교정</span><span style="font-weight:700;">18%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:18%;height:100%;background:#C4929B;border-radius:6px;"></div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span>보존/보철</span><span style="font-weight:700;">15%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:15%;height:100%;background:#C4929B;border-radius:6px;"></div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span style="color:#C4929B;font-weight:600;">보톡스·필러</span><span style="font-weight:700;color:#C4929B;">20%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:20%;height:100%;background:linear-gradient(90deg,#C4929B,#d4a5ad);border-radius:6px;box-shadow:0 0 8px rgba(196,146,155,0.4);"></div></div>
              </div>
              <div style="margin-bottom:4px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:4px;"><span style="color:#C4929B;font-weight:600;">리프팅·레이저</span><span style="font-weight:700;color:#C4929B;">17%</span></div>
                <div style="background:#e8d5d8;border-radius:6px;height:22px;overflow:hidden;"><div style="width:17%;height:100%;background:linear-gradient(90deg,#C4929B,#d4a5ad);border-radius:6px;box-shadow:0 0 8px rgba(196,146,155,0.4);"></div></div>
              </div>
              <div style="text-align:center;margin-top:16px;padding-top:12px;border-top:2px solid #C4929B;">
                <div style="font-size:11px;color:#C4929B;font-weight:600;">미용시술 매출 비중</div>
                <div style="font-size:26px;font-weight:800;color:#C4929B;">20~40%</div>
              </div>
            </div>
          </div>
          <div style="text-align:center;margin-top:16px;font-size:12px;color:#999;">* 미용시술 도입 치과 실데이터 기반 평균 비중 (출처: KADA 컨설팅 사례)</div>
        </div>
      `,
    },
    {
      id: "pro-02",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">2. 치과가 이 시장에 들어가야 하는 이유</h2>
        <p class="text-[#333] leading-relaxed mb-4">피부과나 성형외과가 이미 하고 있는 시장에, 치과가 굳이 들어가야 할 이유가 있을까?</p>
        <p class="text-[#1a1a1a] font-bold text-lg mb-4">있다. 그것도 분명하게.</p>
        <p class="text-[#333] leading-relaxed mb-4">치과의사는 안면부 해부학 훈련을 받은 직역이고, 매일 주사를 놓는 시술자다. 이 역량이 보톡스·필러·레이저 시술에서 어떤 강점이 되는지는 STEP 0에서 법적 근거와 함께 상세히 다룬다.</p>
        <p class="text-[#333] leading-relaxed mb-4">여기서 주목할 것은 치과만의 결정적 자산이다. <span class="text-[#1a1a1a] font-bold">기존 구환.</span></p>
        <p class="text-[#333] leading-relaxed mb-4">신뢰 관계가 이미 형성된 수백 명의 구환은 미용 신환 유치 비용이 제로인 잠재 고객이다. 치과 진료를 마친 환자가 자연스럽게 미용 상담으로 이어지는 경험은 피부과나 에스테틱 샵이 따라올 수 없는 구조다.</p>
        <p class="text-[#333] leading-relaxed mb-6">치과 안면미용시술은 남의 시장에 끼어드는 것이 아니다. <span class="text-[#1a1a1a] font-bold">치과만이 가진 자산 위에서 포지션을 확장하는 것</span>이다.</p>
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">CORE ASSETS</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">치과 미용시술 도입의 3가지 자산</div>
            <div style="font-size:13px;color:#888;margin-top:4px;">다른 진료과가 따라올 수 없는 구조적 강점</div>
          </div>
          <div style="display:flex;gap:16px;">
            <!-- Asset 1 -->
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="width:56px;height:56px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 1 5 5c0 2-1 3-2 4l-1 1v2h-4v-2l-1-1c-1-1-2-2-2-4a5 5 0 0 1 5-5z"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#C4929B;margin-bottom:4px;">ASSET 01</div>
              <div style="font-size:15px;font-weight:700;color:#2C2C2C;margin-bottom:8px;">안면부 해부학<br/>교육 기반</div>
              <div style="font-size:13px;color:#666;line-height:1.6;">치과대학 6년 + 수련 과정에서 안면부 신경·혈관·근육 해부학을 체계적으로 학습. 보톡스·필러 시술의 핵심인 <span style="color:#C4929B;font-weight:600;">안면 해부학적 이해도</span>에서 가장 깊은 기반을 보유.</div>
            </div>
            <!-- Asset 2 -->
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="width:56px;height:56px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#C4929B;margin-bottom:4px;">ASSET 02</div>
              <div style="font-size:15px;font-weight:700;color:#2C2C2C;margin-bottom:8px;">기존 구환<br/>자산</div>
              <div style="font-size:13px;color:#666;line-height:1.6;">수백~수천 명의 기존 환자와 <span style="color:#C4929B;font-weight:600;">이미 형성된 신뢰 관계</span>. 미용 신환 유치 비용 제로인 잠재 고객 풀. 치과 진료 후 자연스러운 미용 상담 전환은 타 의원이 복제 불가.</div>
            </div>
            <!-- Asset 3 -->
            <div style="flex:1;background:linear-gradient(180deg,#F5E6E8 0%,#fff 100%);border-radius:12px;padding:24px 18px;text-align:center;border:1px solid #e8d5d8;">
              <div style="width:56px;height:56px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px;color:#fff;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#C4929B;margin-bottom:4px;">ASSET 03</div>
              <div style="font-size:15px;font-weight:700;color:#2C2C2C;margin-bottom:8px;">법적 근거<br/>확보</div>
              <div style="font-size:13px;color:#666;line-height:1.6;">2016년 대법원 전원합의체 판결로 <span style="color:#C4929B;font-weight:600;">안면부 미용시술의 합법성</span>을 최종 확인. 의료법 제27조 면허 범위 내 행위로 인정. STEP 0에서 판결 전문과 실무 적용 범위를 확인.</div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "pro-03",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">3. 메디스테이션의 약속</h2>
        <p class="text-[#333] leading-relaxed mb-4">메디스테이션은 치과 미용시술 도입을 전문으로 하는 컨설팅·교육 연구소다.</p>
        <p class="text-[#333] leading-relaxed mb-4">단순한 시술 교육 과정이 아니다. 원장님의 치과가 미용치과로 안정적으로 전환될 수 있도록, 도입 설계부터 운영 안정화까지 전 과정을 함께한다.</p>
        <p class="text-[#333] leading-relaxed mb-4">이 책은 그 여정의 전체 지도다.</p>
        <p class="text-[#333] leading-relaxed mb-4">어디서 시작해야 하는지, 무엇을 준비해야 하는지, 어떤 순서로 움직여야 하는지 — Step 0부터 Step 5까지 순서대로 따라가면 된다. 처음부터 끝까지 읽는 교과서가 아니어도 된다. 지금 원장님이 서 있는 단계에 해당하는 챕터를 먼저 펼쳐도 된다.</p>
        <p class="text-[#1a1a1a] font-bold text-lg mb-6">준비된 원장님께 이 시장은 충분히 열려 있다.</p>
        <div class="border-l-4 border-[#C4929B] pl-4 py-2 mb-8">
          <p class="text-[#333] italic leading-relaxed">One core vision, many ways, one meaning.</p>
          <p class="text-[#999] text-sm mt-1">— 의료성장연구소 메디스테이션</p>
        </div>
      `,
    },
    {
      id: "pro-roadmap",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">이 책의 구성</h2>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">STEP</th>
                <th class="px-4 py-2 text-left font-medium">내용</th>
                <th class="px-4 py-2 text-left font-medium">핵심 질문</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">STEP 0</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">법적 근거</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"치과의사가 해도 되는 건가?"</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">STEP 1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">도입 방향 설정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"어떤 시술을, 어떻게 시작할 것인가?"</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">STEP 2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">운영 시스템</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"일상 진료에 어떻게 녹일 것인가?"</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">STEP 3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">팀 운영 & 공간</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"스탭과 공간을 어떻게 세팅할 것인가?"</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">STEP 4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">환자 유입</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"환자를 어떻게 모을 것인가?"</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">STEP 5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">재무·리스크</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"수익은 얼마나, 리스크는 어떻게?"</td></tr>
            </tbody>
          </table>
        </div>
        <div style="background:#fff;border:1px solid #e8d5d8;border-radius:12px;padding:28px 24px;margin-bottom:32px;font-family:'Pretendard',sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <span style="display:inline-block;background:#C4929B;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.5px;margin-bottom:8px;">ROADMAP</span>
            <div style="font-size:18px;font-weight:700;color:#2C2C2C;">STEP 0 → 5 실전 로드맵</div>
            <div style="font-size:13px;color:#888;margin-top:4px;">각 단계의 핵심 산출물과 연결 흐름</div>
          </div>
          <!-- Progress bar -->
          <div style="position:relative;height:4px;background:#F5E6E8;border-radius:2px;margin:0 40px 28px;">
            <div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,#e8d5d8,#C4929B);border-radius:2px;"></div>
          </div>
          <!-- Steps -->
          <div style="display:flex;gap:8px;">
            <!-- STEP 0 -->
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">0</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">법적 기반</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Legal Foundation</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">대법원 판결 분석<br/>허용 범위 정리<br/>법적 리스크 매핑</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">→</div>
            </div>
            <!-- STEP 1 -->
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">1</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">시장 분석</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Market Analysis</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">시장 규모 산정<br/>경쟁 환경 분석<br/>수익성 시뮬레이션</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">→</div>
            </div>
            <!-- STEP 2 -->
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">2</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">시술 설계</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Treatment Design</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">시술 메뉴 구성<br/>가격 체계 설계<br/>프로토콜 표준화</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">→</div>
            </div>
            <!-- STEP 3 -->
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">3</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">운영 체계</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Operations</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">인력 구성 설계<br/>공간·장비 세팅<br/>동선·예약 시스템</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">→</div>
            </div>
            <!-- STEP 4 -->
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;">4</div>
              <div style="font-size:12px;font-weight:700;color:#C4929B;margin-bottom:2px;">마케팅</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Marketing</div>
              <div style="background:#F5E6E8;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#555;line-height:1.5;">구환 전환 캠페인<br/>신환 유입 채널<br/>브랜딩 전략</div>
              </div>
              <div style="color:#C4929B;font-size:18px;margin-top:8px;">→</div>
            </div>
            <!-- STEP 5 -->
            <div style="flex:1;text-align:center;">
              <div style="width:40px;height:40px;background:#2C2C2C;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:#fff;font-size:14px;font-weight:800;box-shadow:0 0 0 3px #C4929B;">5</div>
              <div style="font-size:12px;font-weight:700;color:#2C2C2C;margin-bottom:2px;">성장 관리</div>
              <div style="font-size:11px;color:#2C2C2C;font-weight:600;margin-bottom:4px;">Growth</div>
              <div style="background:#2C2C2C;border-radius:8px;padding:10px 6px;min-height:72px;">
                <div style="font-size:11px;color:#F5E6E8;line-height:1.5;">KPI 대시보드<br/>재방문율 관리<br/>매출 스케일업</div>
              </div>
              <div style="color:#2C2C2C;font-size:12px;margin-top:8px;font-weight:700;">GOAL</div>
            </div>
          </div>
          <div style="text-align:center;margin-top:20px;padding-top:16px;border-top:1px solid #F5E6E8;">
            <div style="font-size:12px;color:#999;">각 STEP은 이전 단계의 산출물 위에 구축됩니다. 순서를 건너뛰지 마세요.</div>
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
          <h1 class="text-4xl font-bold text-[#1a1a1a] mb-3">법적 근거 — 치과의사 미용시술은 합법이다</h1>
          <p class="text-[#999] text-sm">대법원 전원합의체 판결이 선언한 치과의사의 안면부 시술 권한</p>
        </div>
      `,
    },
    {
      id: "step0-intro",
      html: `
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">도입</h2>
        <p class="text-[#333] leading-relaxed mb-4">이 STEP에서는 치과의사가 미용시술을 할 수 있는 법적 근거를 다룬다. 시술 장비를 고르기 전에, 메뉴판을 짜기 전에, 직원을 교육하기 전에 — 가장 먼저 확인해야 할 것이 이것이다. 법적으로 서 있는 땅이 단단한지 아닌지.</p>
      `,
    },
    {
      id: "step0-intro-why",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">왜 법적 근거부터 봐야 하는가</h3>
        <p class="text-[#333] leading-relaxed mb-4">미용시술을 도입하려는 치과 원장 대부분이 처음 만나는 감정은 기대가 아니라 불안이다. "치과의사가 보톡스를 놓아도 되는 건가?" "피부과에서 고발하면 어떡하지?" "환자한테 문제 생기면 면허가 날아가는 건 아닌가?"</p>
        <p class="text-[#333] leading-relaxed mb-4">이 불안은 자연스러운 것이다. 치과의사가 6년간 받은 교육과 수련은 치아와 구강에 집중되어 있었고, 안면부 미용시술이라는 영역은 낯설다. 게다가 피부과·성형외과 쪽에서 들려오는 반발의 목소리가 크다 보니, 합법이라는 말을 들어도 확신이 서지 않는다. 의협이 신고센터를 운영하고, 현장에서 경찰 고발 사례가 계속 보도되기도 한다.</p>
        <p class="text-[#333] leading-relaxed mb-4">그래서 이 책은 시술법이나 경영 전략이 아니라 법적 근거부터 시작한다. 이유는 단순하다. <span class="text-[#1a1a1a] font-bold">법적 토대가 흔들리면 그 위에 쌓는 모든 것이 무너진다.</span> 수천만 원짜리 장비를 들이고, 직원을 교육시키고, 환자를 유치한 다음에 "사실 불법이었습니다"라는 결론이 나오면 되돌릴 수 없다. 반대로, 법적 근거가 확실하다면 이후의 모든 의사결정이 다른 기반 위에서 이루어진다.</p>
        <p class="text-[#333] leading-relaxed mb-8">ROI(투자수익률, 투입 비용 대비 회수 금액의 비율)를 계산하든, 시술 메뉴를 구성하든, 마케팅 채널을 선택하든 — "이건 합법이다"라는 확신이 있는 상태와 없는 상태는 실행 속도부터 다르다.</p>
      `,
    },
    {
      id: "step0-intro-background",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">치과의사가 미용시술을 할 수 있는 배경</h3>
        <p class="text-[#333] leading-relaxed mb-4">치과의사의 미용시술 합법성은 갑자기 하늘에서 떨어진 것이 아니다. 세 가지 기반이 오래전부터 존재했다.</p>
        <p class="text-[#333] leading-relaxed mb-4">첫째, <span class="text-[#1a1a1a] font-bold">구강악안면외과라는 전문 영역이 이미 치과 안에 있다.</span> 구강악안면외과는 치아와 구강뿐 아니라 턱뼈와 그 주변 안면부를 진료 범위로 포함한다. 안면 골절 수술, 악교정 수술, 턱관절 수술 등을 치과의사가 수행해 온 역사가 수십 년이다. 안면부는 치과의 낯선 영토가 아니라 이미 발을 딛고 있던 영역이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">둘째, <span class="text-[#1a1a1a] font-bold">해부학적 전문성이 있다.</span> 치과의사는 안면부의 근육, 신경, 혈관 구조를 정규 교육과정에서 학습한다. 특히 삼차신경(trigeminal nerve)의 분포와 안면 근육의 기시·정지에 대한 이해는 보톡스·필러 시술의 핵심 기초지식이다. 매일 마취 주사를 놓으며 쌓은 주사 숙련도 역시 무시할 수 없다.</p>
        <p class="text-[#333] leading-relaxed mb-4">셋째, <span class="text-[#1a1a1a] font-bold">글로벌 추세와 일치한다.</span> 미국, 영국, 호주 등에서 치과의사의 안면부 미용시술은 이미 합법적으로 정착되어 있다. 한국만의 예외적 현상이 아니라 국제적 흐름 위에 서 있는 것이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">이 세 가지 기반 위에서 2016년, 대한민국 대법원이 최종적인 법적 확인을 내렸다.</p>
        <!-- 도표: 치과의사 미용시술 합법성의 3가지 기반 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">구강악안면외과 전문 영역</p>
            <p class="text-[#999] text-xs leading-relaxed">턱뼈·안면부를 포함하는 치과 전문 영역이 이미 존재</p>
          </div>
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">안면 해부학 교육 + 주사 숙련도</p>
            <p class="text-[#999] text-xs leading-relaxed">안면 근육·신경·혈관 정규 교육 + 매일 마취 주사 시행</p>
          </div>
          <div class="border border-[#eee] rounded-lg p-5 text-center">
            <div class="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
            <p class="text-[#1a1a1a] font-bold text-sm mb-2">글로벌 스탠다드</p>
            <p class="text-[#999] text-xs leading-relaxed">미국·영국·호주 등에서 이미 합법적으로 정착</p>
          </div>
        </div>
      `,
    },
    {
      id: "step0-intro-verdict",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">2016년 대법원 판결의 의미</h3>
        <p class="text-[#333] leading-relaxed mb-4">2016년 7월 21일, 대법원 전원합의체(전원합의체란 대법관 13명 전원이 참여하는 대법원 최고 의사결정 구조로, 종전 판례를 변경하거나 사회적 파급력이 극히 큰 사안에서만 소집된다)가 판결을 선고했다. 치과의사가 환자의 안면부에 보톡스를 시술한 행위는 면허 범위 내 의료행위이며, 미용 목적이라 해서 달리 볼 것은 아니라는 것이다.</p>
        <p class="text-[#333] leading-relaxed mb-4">이 판결의 무게를 가볍게 봐서는 안 된다. 전원합의체 판결은 하급심을 구속하며, 또 다른 전원합의체 판결로만 뒤집을 수 있다. 2016년 이후 9년이 지난 지금까지 이 판결을 번복하는 판례도, 이를 차단하는 입법도 존재하지 않는다. 의협이 시도한 의료법 개정은 국회를 통과하지 못했고, 피부과학회가 제기한 헌법소원도 인용되지 않았다.</p>
        <p class="text-[#1a1a1a] font-bold text-lg mb-6">대한민국 사법체계에서 이보다 더 강한 형태의 합법 확인은 사실상 존재하지 않는다.</p>
        <div style="background:linear-gradient(135deg,#2C2C2C 0%,#3a3a3a 100%);border-radius:12px;padding:32px 28px;margin-bottom:32px;font-family:'Pretendard',sans-serif;position:relative;overflow:hidden;">
          <!-- Decorative element -->
          <div style="position:absolute;top:-20px;right:-20px;width:120px;height:120px;background:rgba(196,146,155,0.1);border-radius:50%;"></div>
          <div style="position:absolute;bottom:-30px;left:-30px;width:80px;height:80px;background:rgba(196,146,155,0.08);border-radius:50%;"></div>
          <!-- Header -->
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <div style="width:44px;height:44px;background:#C4929B;border-radius:50%;display:flex;align-items:center;justify-content:center;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <div>
              <div style="font-size:11px;color:#C4929B;font-weight:700;letter-spacing:1px;">SUPREME COURT OF KOREA</div>
              <div style="font-size:16px;font-weight:700;color:#fff;">2016년 대법원 전원합의체 판결</div>
            </div>
          </div>
          <!-- Case info -->
          <div style="background:rgba(196,146,155,0.15);border-radius:8px;padding:12px 16px;margin-bottom:20px;display:flex;gap:24px;flex-wrap:wrap;">
            <div><span style="font-size:11px;color:#999;">사건번호</span><br/><span style="font-size:13px;color:#F5E6E8;font-weight:600;">2013도850</span></div>
            <div><span style="font-size:11px;color:#999;">선고일</span><br/><span style="font-size:13px;color:#F5E6E8;font-weight:600;">2016. 7. 21.</span></div>
            <div><span style="font-size:11px;color:#999;">판결 형태</span><br/><span style="font-size:13px;color:#F5E6E8;font-weight:600;">전원합의체 (대법관 13인)</span></div>
            <div><span style="font-size:11px;color:#999;">구속력</span><br/><span style="font-size:13px;color:#C4929B;font-weight:700;">최종심 — 사법부 최고 판단</span></div>
          </div>
          <!-- Quote -->
          <div style="border-left:4px solid #C4929B;padding:20px 24px;margin-bottom:20px;background:rgba(245,230,232,0.07);border-radius:0 8px 8px 0;">
            <div style="font-size:28px;color:#C4929B;line-height:1;margin-bottom:8px;font-family:Georgia,serif;">"</div>
            <div style="font-size:16px;color:#fff;font-weight:600;line-height:1.8;letter-spacing:-0.2px;">
              치과의사가 안면부에 보톡스를 시술하는 행위는<br/>
              <span style="color:#C4929B;font-size:18px;font-weight:800;">면허된 것 이외의 의료행위에 해당하지 않는다.</span><br/>
              <span style="color:#e0d0d3;">미용 목적이라 하여 달리 볼 것은 아니다.</span>
            </div>
            <div style="font-size:28px;color:#C4929B;line-height:1;text-align:right;margin-top:8px;font-family:Georgia,serif;">"</div>
          </div>
          <!-- Bottom note -->
          <div style="display:flex;align-items:center;gap:10px;padding-top:16px;border-top:1px solid rgba(196,146,155,0.3);">
            <div style="width:8px;height:8px;background:#C4929B;border-radius:50%;flex-shrink:0;"></div>
            <div style="font-size:12px;color:#999;line-height:1.5;">
              전원합의체 판결은 대법관 13인 전원이 참여하는 대한민국 사법체계 최고 수준의 판단입니다. 이보다 강한 형태의 합법 확인은 사실상 존재하지 않습니다.
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "step0-intro-preview",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">이 STEP을 읽고 나면 알게 될 것들</h3>
        <p class="text-[#333] leading-relaxed mb-4">이 STEP은 단순히 "합법이다"라는 결론만 전달하지 않는다. 다음 내용을 구체적으로 다룬다.</p>
        <ul class="space-y-2 mb-6">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">판결의 전모:</span> 1심 유죄에서 대법원 무죄까지, 어떤 논리로 뒤집혔는가 (0-1)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">허용 범위 지도:</span> 안면부 어디까지가 안전하고, 어디부터가 위험한가. 시술 유형별로는 어떤가 (0-2)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">반론과 대응:</span> 의협·피부과가 제기하는 4가지 반론과 각각의 대응 논리 (0-3)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">글로벌 스탠다드:</span> 미국·영국·호주에서 치과의사 미용시술은 어떤 위치인가 (0-4)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">한의사와의 비교:</span> 같은 시장을 노리는 한의사와 법적 조건이 어떻게 다른가 (0-5)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">법적 안정성:</span> 9년간 번복 사례가 있는가, 앞으로 뒤집힐 가능성은 있는가 (0-6)</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">실무 리스크 최소화:</span> 합법이라도 갖춰야 할 기록과 프로토콜은 무엇인가 (0-7)</li>
        </ul>
        <p class="text-[#333] leading-relaxed mb-8">이 STEP을 마치면, "해도 되는 건가?"라는 질문이 "어떻게 해야 잘 하는가?"로 바뀌어 있을 것이다. 그리고 STEP 1부터는 그 질문에 답한다.</p>
      `,
    },
    {
      id: "step0-01",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-1. 판결의 전모 — 대법원은 왜 무죄라 했는가</h2>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">사건의 경위</h3>
        <p class="text-[#333] leading-relaxed mb-4">2011년 10월, 치과의사 A는 자신이 운영하는 치과에서 보톡스를 이용하여 환자의 눈가와 미간 주름을 치료했다. 검찰은 이를 의료법 제27조 제1항("의료인도 면허된 것 이외의 의료행위를 할 수 없다") 위반으로 기소했다. 의료법 제2조 제2항 제2호는 치과의사의 임무를 "치과 의료와 구강 보건지도"로 규정하고 있는데, 안면부 보톡스가 이 범위에 포함되는지가 핵심 쟁점이었다.</p>
        <p class="text-[#333] leading-relaxed mb-6">2016년 7월 21일, 대법원은 13명 대법관 전원이 참여하는 전원합의체에서 판결을 선고했다. <span class="text-[#1a1a1a] font-bold">치과의사가 환자의 안면부에 보톡스를 시술한 행위는 면허 범위 내 의료행위이며, 그 시술이 미용 목적이라 하여 달리 볼 것은 아니다.</span></p>
      `,
    },
    {
      id: "step0-01-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">전원합의체의 의미</h3>
        <p class="text-[#333] leading-relaxed mb-4">대법원 전원합의체는 대법관 13명 전원이 참여하는 최고 심급의 의사결정 구조다. 일반 사건은 대법관 4명으로 구성된 소부에서 처리되지만, 전원합의체가 소집되는 경우는 극히 제한적이다.</p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">구분</th>
                <th class="px-4 py-2 text-left font-medium">소부</th>
                <th class="px-4 py-2 text-left font-medium">전원합의체</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">참여 인원</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법관 4명</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법관 13명 전원</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">소집 빈도</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">일반 사건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">극히 예외적</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구속력</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">해당 사건</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이후 하급심 구속</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">변경 방법</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">다른 소부 판결로 변경 가능</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">다른 전원합의체 판결로만 변경</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-[#333] leading-relaxed mb-6">대법원이 이 사건에 전원합의체를 소집한 것 자체가, 이 판결의 영향력이 치과계를 넘어 전체 의료체계에 미친다는 것을 인정한 것이다.</p>
        <!-- 도표: V-002 전원합의체 vs 소부 비교 -->
        <div class="mb-8">
          <p class="text-[#1a1a1a] font-bold text-sm text-center mb-1">소부 판결 vs 전원합의체 판결</p>
          <p class="text-[#999] text-xs text-center mb-4">대법원 판결의 법적 효력 비교</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- 소부 -->
            <div class="border border-[#eee] rounded-lg overflow-hidden">
              <div class="bg-[#f5f5f5] px-4 py-3 text-center">
                <p class="text-[#1a1a1a] font-bold">소부 판결</p>
              </div>
              <div class="p-4 space-y-3 text-sm">
                <div class="flex justify-between"><span class="text-[#999]">구성 규모</span><span class="text-[#1a1a1a] font-bold">3인 판사</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">사건 유형</span><span class="text-[#1a1a1a]">일반 상소 사건</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">선례 효력</span><span class="text-[#1a1a1a]">번복 가능</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">법적 효과</span><span class="text-[#1a1a1a]">일반적 판결</span></div>
              </div>
              <div class="bg-[#f5f5f5] px-4 py-2 text-center">
                <p class="text-[#999] text-xs font-semibold">상대적으로 약한 법적 구속력</p>
              </div>
            </div>
            <!-- 전원합의체 -->
            <div class="border-2 border-[#C4929B] rounded-lg overflow-hidden">
              <div class="bg-[#C4929B] px-4 py-3 text-center">
                <p class="text-white font-bold">전원합의체 판결</p>
              </div>
              <div class="p-4 space-y-3 text-sm">
                <div class="flex justify-between"><span class="text-[#999]">구성 규모</span><span class="text-[#C4929B] font-bold">13인 전원</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">사건 유형</span><span class="text-[#C4929B]">판례 변경 필요 사건</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">선례 효력</span><span class="text-[#C4929B] font-bold">판례 법리 확정</span></div>
                <div class="border-t border-[#f5f5f5]"></div>
                <div class="flex justify-between"><span class="text-[#999]">법적 효과</span><span class="text-[#C4929B] font-bold">사실상 법률 효과</span></div>
              </div>
              <div class="bg-[#C4929B]/10 px-4 py-2 text-center">
                <p class="text-[#C4929B] text-xs font-bold">최고 수준의 법적 구속력</p>
              </div>
            </div>
          </div>
          <p class="text-[#999] text-[10px] mt-3 text-center">2016년 대법원 전원합의체 판결은 이전 판례를 변경하며 치과의사의 보톡스, 필러 시술의 합법성을 확정</p>
        </div>
      `,
    },
    {
      id: "step0-01-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">대법원의 판단 논리 — 5가지 핵심 근거</h3>
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
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">구강악안면외과는 치과 영역 — 의료법이 구강악안면외과를 치과 영역으로 인정. 진료 영역에 '턱뼈를 둘러싼 안면부' 포함</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면부 행위를 치과에서 배제 불가 — 관련 규정 개정 연혁, 학회 설립 경위, 요양급여 지급 결과 등을 종합하면, 안면부 의료행위를 모두 치과에서 배제할 수 없음</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의학과 치의학의 학문적 원리는 동일 — 의학과 치의학은 기초 학문 원리가 다르지 않으며, 교육과정·수련과정에 공통부분이 상당</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과대학에서 보톡스를 교육 — 대부분 치과대학/치의학전문대학원에서 보톡스 시술을 교육하고 있으며, 치과 현장에서 활용 중</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">근거 5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보건위생상 위해가 높지 않음 — 이미 치과에서 다양한 용도로 활용 중이며, 의료소비자 선택 가능성을 열어두는 것이 바람직</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "step0-01-03",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">판결의 결론 — 두 가지 핵심</h3>
        <p class="text-[#333] leading-relaxed mb-4">놓치면 안 되는 두 가지:</p>
        <ol class="list-decimal list-inside space-y-2 mb-6">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">'안면부'를 치과의사의 시술 영역으로 인정했다.</span> 치아·구강에 한정되지 않는다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">'미용 목적'이라 해서 달리 보지 않는다고 명시했다.</span> 치료 목적이든 미용 목적이든 같다.</li>
        </ol>
      `,
    },
    {
      id: "step0-01-04",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">후속 판례 — 레이저 시술도 확정</h3>
        <p class="text-[#333] leading-relaxed mb-4">불과 한 달 뒤인 2016년 8월 29일, 안면 프락셀 레이저 시술에 대해서도 동일 법리가 적용되어 검사의 상고가 기각됨으로써 무죄가 확정됐다(대법원 2013도7796). 이 판결은 전원합의체가 아닌 소부 판결이지만, 2013도850 전원합의체 판결의 법리를 그대로 적용했다는 점에서 의미가 크다. 전원합의체 판결 1건과 같은 법리를 적용한 확정 판결 1건이 같은 방향으로 나옴으로써, 치과의사의 안면미용시술 합법성은 단발성 판례가 아닌 <span class="text-[#1a1a1a] font-bold">일관된 사법 해석</span>으로 자리잡았다.</p>
        <p class="text-[#333] leading-relaxed mb-6">2022년에는 한의사 초음파 판결이 2013도850 판결의 논리를 직접 인용하면서, 면허 범위 해석에서 '보건위생상 위해 가능성'과 '금지 규정의 존부'를 핵심 기준으로 강화했다. 치과의사 미용시술의 합법성을 더욱 공고히 하는 방향이다.</p>
        <!-- 도표: V-001 판결 타임라인 -->
        <div class="mb-8">
          <p class="text-[#1a1a1a] font-bold text-sm text-center mb-4">판결 타임라인: 법적 안정성의 흐름</p>
          <div class="relative">
            <!-- 타임라인 라인 -->
            <div class="absolute top-4 left-0 right-0 h-0.5 bg-[#eee]"></div>
            <!-- 노드들 -->
            <div class="flex justify-between items-start relative">
              <!-- 2011 기소 -->
              <div class="flex flex-col items-center text-center w-1/6">
                <div class="w-3.5 h-3.5 rounded-full bg-[#eee] border border-[#999] z-10"></div>
                <p class="text-[#1a1a1a] text-xs font-bold mt-2">2011</p>
                <p class="text-[#999] text-[10px]">기소</p>
              </div>
              <!-- 2012 1심 -->
              <div class="flex flex-col items-center text-center w-1/6">
                <div class="w-3.5 h-3.5 rounded-full bg-[#f5f5f5] border border-[#999] z-10"></div>
                <p class="text-[#1a1a1a] text-xs font-bold mt-2">2012</p>
                <p class="text-[#999] text-[10px]">1심·2심 유죄</p>
              </div>
              <!-- 2016.7 전원합의체 (핵심) -->
              <div class="flex flex-col items-center text-center w-1/6">
                <div class="w-5 h-5 rounded-full bg-[#C4929B] border-2 border-[#C4929B] z-10 ring-2 ring-[#C4929B]/20"></div>
                <p class="text-[#C4929B] text-xs font-bold mt-2">2016.7</p>
                <p class="text-[#C4929B] text-[10px] font-semibold">대법원 전원합의체</p>
                <p class="text-[#C4929B] text-[10px] font-semibold">보톡스 무죄</p>
              </div>
              <!-- 2016.8 레이저 -->
              <div class="flex flex-col items-center text-center w-1/6">
                <div class="w-3.5 h-3.5 rounded-full bg-[#C4929B]/30 border border-[#C4929B] z-10"></div>
                <p class="text-[#1a1a1a] text-xs font-bold mt-2">2016.8</p>
                <p class="text-[#999] text-[10px]">레이저 무죄</p>
                <p class="text-[#999] text-[10px]">(소부)</p>
              </div>
              <!-- 2022 한의사 -->
              <div class="flex flex-col items-center text-center w-1/6">
                <div class="w-3.5 h-3.5 rounded-full bg-[#C4929B]/30 border border-[#C4929B] z-10"></div>
                <p class="text-[#1a1a1a] text-xs font-bold mt-2">2022.12</p>
                <p class="text-[#999] text-[10px]">한의사 판결서</p>
                <p class="text-[#999] text-[10px]">논리 인용</p>
              </div>
              <!-- 2024 복지부 -->
              <div class="flex flex-col items-center text-center w-1/6">
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
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-2. 허용 범위 지도 — 어디까지 되고 어디부터 안 되는가</h2>
        <p class="text-[#333] leading-relaxed mb-6">판결은 '합법'이라고 선언했다. 하지만 '모든 시술이 모든 부위에서 합법'이라고 한 적은 없다. 원장이 반드시 알아야 할 것은 안전한 영역과 위험한 영역의 경계다.</p>
      `,
    },
    {
      id: "step0-02-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">부위별 허용 범위 3단계</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">단계</th>
                <th class="px-4 py-2 text-left font-medium">부위</th>
                <th class="px-4 py-2 text-left font-medium">법적 근거 강도</th>
                <th class="px-4 py-2 text-left font-medium">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">녹색 (안전)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">눈가·미간·교근(사각턱)·이갈이</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판결에서 직접 판시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실무에서 문제될 가능성 극히 낮음</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">황색 (주의)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">이마·팔자·입술·턱끝·입꼬리</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판결 논리 확장 가능, 직접 판례 없음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기록(동의서·차트·사진) 철저히</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">적색 (위험)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">승모근·바디 부위</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면부 벗어남, 판결 논리 적용 어려움</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">고발 시 방어 근거 약함</td></tr>
            </tbody>
          </table>
        </div>
        <!-- 도표: V-003 허용 범위 피라미드 -->
        <div class="mb-8">
          <p class="text-[#1a1a1a] font-bold text-sm text-center mb-1">미용 치과 시술 허용 범위</p>
          <p class="text-[#999] text-xs text-center mb-5">법적 근거에 따른 3단계 범위 분류</p>
          <div class="flex flex-col items-center gap-0">
            <!-- Top: 신중 영역 -->
            <div class="w-[40%] bg-[#1a1a1a] text-white text-center py-3 rounded-t-lg">
              <p class="text-xs font-bold">신중 영역</p>
              <p class="text-[10px] opacity-70 mt-0.5">침습적 수술</p>
            </div>
            <!-- Middle: 조건부 -->
            <div class="w-[65%] bg-[#C4929B]/20 border-x border-[#C4929B]/30 text-center py-3">
              <p class="text-[#C4929B] text-xs font-bold">조건부 가능</p>
              <p class="text-[#C4929B] text-[10px] mt-0.5">실리프팅, 레이저</p>
              <p class="text-[#999] text-[10px]">판례 근거 필수</p>
            </div>
            <!-- Bottom: 적극 가능 -->
            <div class="w-[90%] bg-[#C4929B] text-white text-center py-3 rounded-b-lg">
              <p class="text-xs font-bold">적극 가능</p>
              <p class="text-[10px] mt-0.5">보톡스 · 필러 · 스킨부스터</p>
              <p class="text-[10px] opacity-70">안전성·시장 검증 완료</p>
            </div>
          </div>
          <p class="text-[#999] text-[10px] mt-3 text-center">범위는 대법원 판례 및 의료법 해석 기준</p>
        </div>
      `,
    },
    {
      id: "step0-02-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">시술 유형별 허용 매트릭스</h3>
        <p class="text-[#333] leading-relaxed mb-4">부위만이 아니라 시술 유형에 따라서도 법적 근거의 강도가 다르다.</p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">시술 유형</th>
                <th class="px-4 py-2 text-left font-medium">법적 근거</th>
                <th class="px-4 py-2 text-left font-medium">직접 판례</th>
                <th class="px-4 py-2 text-left font-medium">실무 권고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">가장 강함</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2013도850 직접 판시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 시작 가능</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">레이저</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">강함</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2013도7796 직접 판시</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">즉시 시작 가능</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보통</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">직접 판례 없음, 같은 논리 구조로 방어 가능</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기록 철저</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">스킨부스터</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보통</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">직접 판례 없음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">기록 철저</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">실리프팅</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보통~약함</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">직접 판례 없음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면부 한정, 기록 철저</td></tr>
            </tbody>
          </table>
        </div>
        <!-- 도표: V-004 시술별 법적 근거 매트릭스 (시각화) -->
        <div class="mb-6">
          <p class="text-[#1a1a1a] font-bold text-sm text-center mb-1">시술별 법적 근거 매트릭스</p>
          <p class="text-[#999] text-xs text-center mb-4">법적 근거 강도에 따른 평가</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th class="bg-[#1a1a1a] text-white px-3 py-2 text-left font-medium"></th>
                  <th class="bg-[#1a1a1a] text-white px-3 py-2 text-center font-medium">법적 근거</th>
                  <th class="bg-[#1a1a1a] text-white px-3 py-2 text-center font-medium">직접 판례</th>
                  <th class="bg-[#1a1a1a] text-white px-3 py-2 text-center font-medium">실무 권고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">보톡스</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">강함</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">직접 판결</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">권고</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">필러</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">강함</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">직접 판결</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">권고</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">스킨부스터</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">강함</td>
                  <td class="bg-[#C4929B]/40 text-[#1a1a1a] text-center px-3 py-2 font-semibold">간접</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">권고</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">실리프팅</td>
                  <td class="bg-[#C4929B]/40 text-[#1a1a1a] text-center px-3 py-2 font-semibold">중간</td>
                  <td class="bg-[#C4929B]/40 text-[#1a1a1a] text-center px-3 py-2 font-semibold">간접</td>
                  <td class="bg-[#C4929B]/40 text-[#1a1a1a] text-center px-3 py-2 font-semibold">조건부</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">HIFU</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">강함</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">직접 판결</td>
                  <td class="bg-[#C4929B]/40 text-[#1a1a1a] text-center px-3 py-2 font-semibold">조건부</td>
                </tr>
                <tr>
                  <td class="bg-[#f5f5f5] px-3 py-2 font-semibold text-[#1a1a1a]">레이저</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">강함</td>
                  <td class="bg-[#C4929B] text-white text-center px-3 py-2 font-semibold">직접 판결</td>
                  <td class="bg-[#C4929B]/40 text-[#1a1a1a] text-center px-3 py-2 font-semibold">조건부</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex gap-4 justify-center mt-3 text-[10px]">
            <span class="flex items-center gap-1"><span class="w-3 h-3 bg-[#C4929B] rounded-sm inline-block"></span><span class="text-[#999]">강함 = 법적 근거 명확</span></span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 bg-[#C4929B]/40 rounded-sm inline-block"></span><span class="text-[#999]">중간 = 신중한 운영 필요</span></span>
          </div>
        </div>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-8">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">TIP:</span> 판결은 보톡스에 대해 직접 판시했지만, 필러·실리프팅·스킨부스터 등도 같은 논리 구조(안면부 + 구강악안면외과 교육 + 보건위생 위해 낮음)로 방어할 수 있다. 다만 직접 판례가 없으므로, <span class="text-[#1a1a1a] font-bold">기록(동의서·차트·사진)을 더욱 철저히</span> 해야 한다.</p>
        </div>
      `,
    },
    {
      id: "step0-02-03",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">핵심 원칙 3가지</h3>
        <ol class="list-decimal list-inside space-y-3 mb-6">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">안면부에 머물러라.</span> 판결의 논리가 미치는 범위는 안면부다. 승모근·바디는 영역 밖이다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">기록을 남겨라.</span> 동의서·차트·시술 전후 사진은 분쟁 시 유일한 방어 수단이다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">교육 근거를 갖춰라.</span> 시술 관련 교육 이수 이력은 '면허 범위 내'를 입증하는 보조 근거가 된다.</li>
        </ol>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-8">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 예시:</span> 사각턱 보톡스(녹색)를 시작으로, 입술 필러(황색)로 확장하고, 승모근(적색)은 메뉴에 넣지 않는다 — 이것이 허용 범위 지도를 실무에 적용하는 가장 안전한 순서다.</p>
        </div>
      `,
    },
    {
      id: "step0-03",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-3. 반론과 현실 — 합법인데 왜 아직 불안한가</h2>
        <p class="text-[#333] leading-relaxed mb-6">대법원 전원합의체 판결이 있음에도 현장에서 불안감은 남아 있다. 그 이유를 직시하고, 대응 방법을 다룬다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">의협의 입장과 실제 행동</h3>
        <p class="text-[#333] leading-relaxed mb-4">의협은 판결 이후에도 치과의사 미용시술에 대한 반대 입장을 유지하고 있다. 별도 신고센터를 운영하며, 개별 민원을 경찰 고발 또는 보건소 제보로 연결하는 사례가 지속되고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-8">다만, 의협이 입법을 통해 이를 금지시키려는 시도는 성공하지 못했다. 2016년 판결 이후 의료법 개정 움직임이 있었으나 국회를 통과하지 못했다.</p>
      `,
    },
    {
      id: "step0-03-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">상대방이 사용하는 4가지 반론 — 미리 알고 무장하라</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">반론</th>
                <th class="px-4 py-2 text-left font-medium">주장</th>
                <th class="px-4 py-2 text-left font-medium">대응 논리</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">반론 1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"교육과정 포함 = 면허 범위 확대" — 간호대에서 내과를 배웠다고 간호사가 진료할 수 없듯, 교육과정 포함이 면허 범위 자동 확대가 아니다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법원은 교육과정만으로 판단하지 않았다. 교육+수련+학문적 원리+보건위생 위해 등 종합 판단. 단일 근거가 아닌 복합 근거</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">반론 2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"보건복지부 과거 유권해석" — 복지부가 '미용 보톡스는 무면허 의료행위'라고 유권해석한 바 있다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법원 전원합의체 판결은 행정부 유권해석보다 상위 규범. 판결 이후 복지부도 집행하지 않음</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">반론 3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"판결 범위가 눈가·미간에 한정" — 이마·볼·사각턱 등 다른 부위에는 적용 안 된다</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판결은 '안면부'를 영역으로 인정한 것이지 '눈가·미간'만 인정한 것이 아니다. 판시 사항과 판결 이유를 구분해야 한다</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top whitespace-nowrap">반론 4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">"승모근·종아리 등 안면 외 시술" — 안면 외 부위는 판결 적용 밖이며 고발 대상</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">이 반론은 일부 타당하다. 안면 외 부위는 판결 논리의 적용이 어려우므로, 시술 범위를 안면부로 한정하는 것이 실무적으로 안전하다</td></tr>
            </tbody>
          </table>
        </div>
        <!-- 도표: V-005 반론 대응 카드 -->
        <div class="mb-6">
          <p class="text-[#1a1a1a] font-bold text-sm text-center mb-1">주요 반론과 대응 논리</p>
          <p class="text-[#999] text-xs text-center mb-4">법적 근거 기반 대응</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- 카드 1 -->
            <div class="rounded-lg overflow-hidden border border-[#eee]">
              <div class="bg-[#1a1a1a] px-4 py-2.5">
                <p class="text-[10px] text-[#999]">반론</p>
                <p class="text-white text-sm font-semibold">면허 범위 초과</p>
              </div>
              <div class="text-center text-[#999] text-xs py-1">&#8595;</div>
              <div class="bg-[#C4929B]/10 px-4 py-2.5">
                <p class="text-[10px] text-[#C4929B] font-semibold">대응 논리</p>
                <p class="text-[#1a1a1a] text-sm">대법원 전원합의체 판결로 합법 확정</p>
              </div>
            </div>
            <!-- 카드 2 -->
            <div class="rounded-lg overflow-hidden border border-[#eee]">
              <div class="bg-[#1a1a1a] px-4 py-2.5">
                <p class="text-[10px] text-[#999]">반론</p>
                <p class="text-white text-sm font-semibold">안전성 문제</p>
              </div>
              <div class="text-center text-[#999] text-xs py-1">&#8595;</div>
              <div class="bg-[#C4929B]/10 px-4 py-2.5">
                <p class="text-[10px] text-[#C4929B] font-semibold">대응 논리</p>
                <p class="text-[#1a1a1a] text-sm">치과의사 해부학 교육 5,000시간+ 확보</p>
              </div>
            </div>
            <!-- 카드 3 -->
            <div class="rounded-lg overflow-hidden border border-[#eee]">
              <div class="bg-[#1a1a1a] px-4 py-2.5">
                <p class="text-[10px] text-[#999]">반론</p>
                <p class="text-white text-sm font-semibold">의협 반대</p>
              </div>
              <div class="text-center text-[#999] text-xs py-1">&#8595;</div>
              <div class="bg-[#C4929B]/10 px-4 py-2.5">
                <p class="text-[10px] text-[#C4929B] font-semibold">대응 논리</p>
                <p class="text-[#1a1a1a] text-sm">법적 구속력 없는 단체 의견</p>
              </div>
            </div>
            <!-- 카드 4 -->
            <div class="rounded-lg overflow-hidden border border-[#eee]">
              <div class="bg-[#1a1a1a] px-4 py-2.5">
                <p class="text-[10px] text-[#999]">반론</p>
                <p class="text-white text-sm font-semibold">환자 인식 부족</p>
              </div>
              <div class="text-center text-[#999] text-xs py-1">&#8595;</div>
              <div class="bg-[#C4929B]/10 px-4 py-2.5">
                <p class="text-[10px] text-[#C4929B] font-semibold">대응 논리</p>
                <p class="text-[#1a1a1a] text-sm">미용치과 시장 연평균 15%+ 성장</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#fff8f0] border-l-4 border-[#f59e0b] p-4 mb-8">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#f59e0b] font-bold">주의:</span> 반론 4는 상대방 논리가 아니라 실제 리스크다. 승모근·바디 시술은 현재 판결 논리로 방어하기 어렵다.</p>
        </div>
      `,
    },
    {
      id: "step0-03-02",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">현실적 리스크를 직시하라</h3>
        <p class="text-[#333] leading-relaxed mb-4">합법이다. 대법원이 그렇게 판결했다. 하지만 현실에서 리스크가 완전히 사라진 것은 아니다.</p>
        <ul class="space-y-2 mb-4">
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">민원 가능성은 존재한다.</span> 의협 신고센터, 환자 불만, 경쟁 치과의 제보 등 경로는 열려 있다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">보건소 조사가 올 수 있다.</span> 민원이 접수되면 보건소는 조사를 진행한다.</li>
          <li class="text-[#333] leading-relaxed"><span class="text-[#1a1a1a] font-bold">경찰 고발까지 갈 수 있다.</span> 보건소에서 복지부로, 복지부에서 검찰로 넘어가는 경로가 있다.</li>
        </ul>
        <p class="text-[#1a1a1a] font-bold leading-relaxed mb-4">하지만 이것이 '하지 말아야 할 이유'는 아니다. 최종 판단 기준은 대법원 전원합의체 판결이며, 9년간 이 판결을 뒤집은 사례는 없다. 필요한 것은 불안에 멈추는 것이 아니라, 기록과 프로토콜로 무장하는 것이다.</p>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-4">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 예시:</span> A 치과는 보톡스 도입 3개월 차에 경쟁 의원의 민원이 접수되어 보건소 조사를 받았다. 시술 동의서·차트·시술 전후 사진을 모두 보관하고 있었고, 2016년 대법원 판결문 사본을 즉시 제출했다. 결과: 행정 조치 없이 종결. 기록이 없었다면 결과가 달랐을 수 있다.</p>
        </div>
        <p class="text-[#999] text-sm mb-8">민원·신고 발생 시 구체적 대응 방법은 <span class="text-[#1a1a1a] font-bold">STEP 5-3. 민원·신고 대응 매뉴얼</span>에서 상세히 다룬다.</p>
      `,
    },
    {
      id: "step0-04",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-4. 글로벌 스탠다드 — 한국만의 현상이 아니다</h2>
        <p class="text-[#333] leading-relaxed mb-6">치과의사의 안면부 미용시술은 한국만의 현상이 아니다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">국제적 흐름</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">국가</th>
                <th class="px-4 py-2 text-left font-medium">현황</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top">미국</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">ADA CERP(미국치과의사협회 평생교육인증프로그램)가 보톡스·필러 교육 프로그램을 인증. 약 절반의 주에서 치과의사의 구강·악안면 영역 보톡스·필러 시술 허용 (주별로 상이)</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top">영국</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">GDC(일반치과위원회)가 치과의사를 보톡스 처방 가능 유일 치과 등록자로 인정. 보톡스는 처방전 의약품(POM)으로 분류되며, 치과의사가 처방·시술 가능. 2021년 18세 미만 보톡스·필러 시술 전면 금지 법률 시행</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold align-top">호주</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2009년 AADFA 설립 이후 치과의사 안면미용시술 교육·시행 체계 정착</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "step0-04-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">글로벌 시장 성장</h3>
        <p class="text-[#333] leading-relaxed mb-4">글로벌 미용시술 시장은 지속적으로 성장 중이다. ASPS(미국성형외과학회) 통계에 따르면 2000~2018년 18년간 보툴리눔 톡신 시술 건수는 845% 증가했다. PubMed에 등재된 복수의 국제 논문도 치과의사의 안면미용 역할 확장을 '성장하는 분야'로 명시하고 있으며, 해부학 교육 기반이 있는 치과의사야말로 적합한 시술자라는 논거가 국제 학술계에서 반복적으로 제기되고 있다.</p>
        <p class="text-[#333] leading-relaxed mb-8">치과의사의 안면미용시술은 이미 2016년에 사법적으로 확정된 영역이다. 의료행위의 경계는 지금 이 순간에도 각 직역의 전문성에 맞춰 재편되고 있다.</p>
      `,
    },
    {
      id: "step0-05",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-5. 한의사와의 비교 — 같은 시장, 다른 조건</h2>
        <p class="text-[#333] leading-relaxed mb-4">한의계는 미용 시장에 적극적으로 진입을 시도하고 있다. 서울시한의사회가 피부미용센터를 개설하고, HIFU·레이저·보톡스·필러 교육을 진행 중이다.</p>
        <p class="text-[#333] leading-relaxed mb-6">그러나 법적 조건은 치과의사와 한의사 사이에 결정적 차이가 있다.</p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">항목</th>
                <th class="px-4 py-2 text-left font-medium">치과의사</th>
                <th class="px-4 py-2 text-left font-medium">한의사</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보톡스 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">대법원 무죄 확정 (2013도850)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">처방권 없음 (전문의약품)</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필러 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판결 논리 확장 가능, 방어 근거 있음</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">대법원 유죄 확정</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">레이저 시술</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">대법원 무죄 확정 (2013도7796)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">대법원에서 유죄 확정</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">해부학 교육</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">안면 해부학 정규 교육</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">한의학 기반, 서양 해부학 교육 제한적</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주사 숙련도</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">매일 마취 주사 시행</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">주사 시술 빈도 낮음</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-[#333] leading-relaxed mb-6">한의사의 필러 시술은 대법원에서 유죄가 확정되었다. 전문의약품인 보톡스 처방권도 없다. 그럼에도 시장 진입을 시도하고 있다는 것은, 역설적으로 <span class="text-[#1a1a1a] font-bold">이 시장의 매력도를 반증한다.</span></p>
        <!-- 도표: V-006 치과의사 vs 한의사 비교 -->
        <div class="mb-8">
          <p class="text-[#1a1a1a] font-bold text-sm text-center mb-1">치과의사 vs 한의사: 법적 근거 비교</p>
          <p class="text-[#999] text-xs text-center mb-4">미용시술 관점에서 본 전문성 및 법적 기반</p>
          <div class="grid grid-cols-2 gap-0 border border-[#eee] rounded-lg overflow-hidden text-sm">
            <!-- 헤더 -->
            <div class="bg-[#C4929B] text-white text-center py-2.5 font-bold">치과의사</div>
            <div class="bg-[#f5f5f5] text-[#1a1a1a] text-center py-2.5 font-bold border-l border-[#eee]">한의사</div>
            <!-- 대법원 판결 -->
            <div class="px-3 py-2.5 border-t border-[#eee]">
              <p class="text-[10px] text-[#999] mb-0.5">대법원 판결</p>
              <p class="text-[#1a1a1a] text-xs font-semibold">전원합의체 무죄 확정</p>
            </div>
            <div class="px-3 py-2.5 border-t border-l border-[#eee]">
              <p class="text-[10px] text-[#999] mb-0.5">대법원 판결</p>
              <p class="text-[#999] text-xs">진단기기만 허용, 침습 시술 불법</p>
            </div>
            <!-- 해부학 교육 -->
            <div class="px-3 py-2.5 border-t border-[#eee]">
              <p class="text-[10px] text-[#999] mb-0.5">해부학 교육</p>
              <p class="text-[#1a1a1a] text-xs font-semibold">구강악안면 전문 교육</p>
            </div>
            <div class="px-3 py-2.5 border-t border-l border-[#eee]">
              <p class="text-[10px] text-[#999] mb-0.5">해부학 교육</p>
              <p class="text-[#999] text-xs">한의학 중심 교육</p>
            </div>
            <!-- 시술 범위 -->
            <div class="px-3 py-2.5 border-t border-[#eee]">
              <p class="text-[10px] text-[#999] mb-0.5">시술 범위</p>
              <p class="text-[#1a1a1a] text-xs font-semibold">안면 전체 미용시술 가능</p>
            </div>
            <div class="px-3 py-2.5 border-t border-l border-[#eee]">
              <p class="text-[10px] text-[#999] mb-0.5">시술 범위</p>
              <p class="text-[#999] text-xs">침·뜸 중심, 주사 시술 불법</p>
            </div>
            <!-- 장비 사용 -->
            <div class="px-3 py-2.5 border-t border-[#eee]">
              <p class="text-[10px] text-[#999] mb-0.5">장비 사용</p>
              <p class="text-[#1a1a1a] text-xs font-semibold">HIFU·레이저 가능 (판례)</p>
            </div>
            <div class="px-3 py-2.5 border-t border-l border-[#eee]">
              <p class="text-[10px] text-[#999] mb-0.5">장비 사용</p>
              <p class="text-[#999] text-xs">현대 의료기기 사용 제한</p>
            </div>
            <!-- 결론 -->
            <div class="bg-[#C4929B]/10 px-3 py-2 text-center border-t border-[#eee]">
              <p class="text-[#C4929B] text-xs font-bold">더 강한 법적 기반</p>
            </div>
            <div class="bg-[#f5f5f5] px-3 py-2 text-center border-t border-l border-[#eee]">
              <p class="text-[#999] text-xs font-semibold">제한적 인정</p>
            </div>
          </div>
          <p class="text-[#999] text-[10px] mt-3 text-center">치과의사는 대법원 전원합의체 판결 + 5,000시간 해부학 교육으로 가장 완전한 법적 조건 보유</p>
        </div>
      `,
    },
    {
      id: "step0-05-01",
      html: `
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">최근 한의사 판례 동향 — 진단기기는 허용, 침습 시술은 여전히 불법</h3>
        <p class="text-[#333] leading-relaxed mb-4">2022년 대법원 전원합의체(2016도21314)는 한의사의 초음파 진단기기 사용을 면허 범위 내로 인정했다. 이 판결은 2013도850(치과의사 보톡스 판결)의 논리를 직접 인용하며, 면허 범위의 가변성을 강조했다.</p>
        <p class="text-[#333] leading-relaxed mb-4">이후 뇌파계(2023년), X-ray 골밀도 측정기(2024~2025년) 등 비침습 진단기기로 허용 범위가 확대되는 추세다. 그러나 핵심은 이것이다. <span class="text-[#1a1a1a] font-bold">허용된 것은 비침습 '진단'기기뿐이다.</span> 보톡스(전문의약품 처방 불가), 필러(대법원 유죄 확정), IPL·레이저(유죄 확정) 등 침습적 시술은 여전히 한의사 면허 범위 밖이다. 리도카인 등 전문의약품 사용도 유죄가 유지됐다.</p>
        <p class="text-[#333] leading-relaxed mb-8">치과의사는 해부학적 교육 기반, 처방권, 사법적 무죄 확정이라는 세 가지를 모두 갖추고 있다. 조건이 가장 충분한 직역이 가장 신중하게 진입을 망설이는 상황인 셈이다.</p>
      `,
    },
    {
      id: "step0-06",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-6. 9년간 법적 안정성 — 번복된 사례 없음</h2>
        <p class="text-[#333] leading-relaxed mb-6">2016년 판결 직후, 의협은 비상대책위를 구성하고 의료법 개정을 통한 차단을 선언했다. 피부과 전문의들은 의료법 제2조 제2항 제2호 등이 치과의사에게 안면부 의료행위를 허용해 건강권·직업의 자유를 침해한다며 헌법소원(2016헌마897)을 제기했으나, 헌법재판소는 2016년 11월 1일 이를 각하했다. 청구기간 도과, 그리고 나머지 규정은 치과의사 허용 범위를 직접 정한 것이 아니라는 이유였다. 본안 심사에 진입조차 하지 못한 것이다.</p>
        <h3 class="text-xl font-semibold text-[#1a1a1a] mb-4">판결 이후 9년간의 흐름</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">시점</th>
                <th class="px-4 py-2 text-left font-medium">사건</th>
                <th class="px-4 py-2 text-left font-medium">결과</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2016년 판결 직후</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">의협 의료법 개정 추진</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">입법 불성사</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2016년 11월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">피부과 전문의 헌법소원(2016헌마897)</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">각하 (본안 심사 불진입)</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2022년 12월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">한의사 초음파 판결에서 2013도850 논리 직접 인용</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판결 논리 오히려 강화</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2024년 2월</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">보건복지부 "의사·치과의사만 직접 시술 가능" 재확인</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과의사 미용시술 합법성 재차 확인</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333]">2016~2026년</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">치과의사 안면미용시술로 유죄 확정</td><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">공개 사례 없음</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-[#333] leading-relaxed mb-8">전원합의체 판결은 대법원장을 포함한 대법관 전원이 참여해 내린 최종 해석이다. 하급 법원은 이를 뒤집을 수 없으며, 새로운 전원합의체 판결 없이는 번복이 불가능하다.</p>
      `,
    },
    {
      id: "step0-07",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">0-7. 실무 리스크 최소화 5원칙</h2>
        <p class="text-[#333] leading-relaxed mb-6">합법성은 확정되어 있더라도, 현장에서의 기록 관리와 안전 프로토콜은 필수다.</p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse mb-6">
            <thead class="bg-[#1a1a1a] text-white">
              <tr>
                <th class="px-4 py-2 text-left font-medium">#</th>
                <th class="px-4 py-2 text-left font-medium">원칙</th>
                <th class="px-4 py-2 text-left font-medium">실행</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">1</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 전 동의서</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">충분한 설명 + 서면 동의서 징구. 시술별 표준 양식 사용</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">2</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">차트·사진 보존</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">시술 전후 사진 촬영, 차트 기재. 분쟁 시 핵심 증거</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">3</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">판결문 비치</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">필요 시 2016년 판결문 사본 치과 내 비치</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">4</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">전문 채널 활용</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">법률·보험 관련 문의는 치협 또는 전문 채널 활용</td></tr>
              <tr><td class="px-4 py-3 border-b border-[#eee] text-[#333] font-bold">5</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">SOP 표준화</td><td class="px-4 py-3 border-b border-[#eee] text-[#333]">메디스테이션의 동의서 양식·SOP(Standard Operating Procedure, 표준 운영 절차) 활용으로 운영 표준화</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-[#fdf2f5] border-l-4 border-[#C4929B] p-4 mb-4">
          <p class="text-[#333] text-sm leading-relaxed"><span class="text-[#C4929B] font-bold">실전 예시:</span> 동의서에는 최소한 다음 항목이 포함되어야 한다 — 시술명, 시술 부위, 사용 제품명·용량, 예상 효과 및 지속 기간, 가능한 부작용, 환자 서명·날짜. 이 한 장이 민원 발생 시 원장을 보호하는 핵심 증거가 된다.</p>
        </div>
        <p class="text-[#999] text-sm mb-8">동의서 양식, 차트 기록 가이드, SOP 표준은 <span class="text-[#1a1a1a] font-bold">STEP 2</span>에서 상세히 다룬다. 민원·신고 발생 시 대응 프로토콜은 <span class="text-[#1a1a1a] font-bold">STEP 5-3</span>에서 다룬다.</p>
      `,
    },
    {
      id: "step0-closing",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">이 책이 시작되는 이유</h2>
        <p class="text-[#333] leading-relaxed mb-4">치과의사의 미용시술은 합법이다. 대법원이 확인했고, 9년간 번복되지 않았으며, 글로벌 추세와도 일치한다.</p>
        <p class="text-[#333] leading-relaxed mb-4">하지만 합법인 것과 잘 하는 것은 다르다. 합법이라는 법적 토대 위에서:</p>
        <ul class="space-y-2 mb-6">
          <li class="text-[#333] leading-relaxed">어떤 시술을 선택하고 <span class="text-[#1a1a1a] font-bold">(STEP 1)</span></li>
          <li class="text-[#333] leading-relaxed">어떻게 운영하고 <span class="text-[#1a1a1a] font-bold">(STEP 2)</span></li>
          <li class="text-[#333] leading-relaxed">팀을 어떻게 꾸리고 <span class="text-[#1a1a1a] font-bold">(STEP 3)</span></li>
          <li class="text-[#333] leading-relaxed">환자를 어떻게 유입시키고 <span class="text-[#1a1a1a] font-bold">(STEP 4)</span></li>
          <li class="text-[#333] leading-relaxed">리스크를 어떻게 관리하는가 <span class="text-[#1a1a1a] font-bold">(STEP 5)</span></li>
        </ul>
        <p class="text-[#333] leading-relaxed mb-4">그것이 이 책의 나머지 전부다.</p>
        <p class="text-[#333] leading-relaxed mb-8">STEP 0이 법적 근거를 확인하는 단계였다면, STEP 1부터는 실행이다.</p>
      `,
    },
    {
      id: "step0-summary",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">서머리</h2>
        <ul class="space-y-2 mb-8">
          <li class="text-[#333] leading-relaxed">치과의사의 안면미용시술은 대법원 전원합의체 판결(2013도850, 보톡스)과 같은 법리 적용 확정 판결(2013도7796, 레이저)로 합법 확정</li>
          <li class="text-[#333] leading-relaxed">전원합의체 판결은 대한민국 사법체계의 최종 해석이며, 다른 전원합의체 판결로만 변경 가능</li>
          <li class="text-[#333] leading-relaxed">판결은 '안면부'를 치과의사 영역으로, '미용 목적'도 합법으로 인정</li>
          <li class="text-[#333] leading-relaxed">2016~2026년 9년간 이 판결을 뒤집는 입법이나 판례는 존재하지 않음</li>
          <li class="text-[#333] leading-relaxed">한의사 대비 치과의사가 법적으로 가장 완전한 조건을 보유</li>
          <li class="text-[#333] leading-relaxed">합법이지만 기록(동의서·차트·사진)과 프로토콜로 리스크를 관리해야 한다</li>
          <li class="text-[#333] leading-relaxed">안면부 밖(승모근·바디) 시술은 판결 논리 적용이 어려우므로 범위를 안면부로 한정</li>
        </ul>
      `,
    },
    {
      id: "step0-checklist",
      html: `
        <div class="border-t border-[#eee] my-8"></div>
        <h2 class="text-2xl font-bold text-[#1a1a1a] mb-6">체크리스트 — 이 STEP을 완료했다면 아래를 확인하세요</h2>
        <ul class="space-y-2 mb-8">
          <li class="text-[#333] leading-relaxed flex items-start gap-2"><span class="shrink-0 w-5 h-5 border border-[#ddd] rounded inline-block mt-0.5"></span>대법원 전원합의체 판결(2013도850)과 같은 법리 적용 확정 판결(2013도7796)의 결론을 설명할 수 있다</li>
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
