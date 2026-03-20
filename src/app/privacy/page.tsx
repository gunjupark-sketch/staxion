import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | MEDI STAXION",
  description: "(주)더스테이션 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="bg-card">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-text-primary">개인정보처리방침</h1>
        <p className="mb-8 text-sm text-text-muted">시행일: 2025년 3월 1일</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <p>
            (주)더스테이션(이하 &quot;회사&quot;)은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제1조 (수집하는 개인정보 항목)</h2>
            <p className="mb-3">회사는 다음의 개인정보 항목을 수집합니다.</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-dark text-text-inverse">
                    <th className="border-b-2 border-brand-neon-safe px-4 py-3 text-left font-semibold">수집 시점</th>
                    <th className="border-b-2 border-brand-neon-safe px-4 py-3 text-left font-semibold">수집 항목</th>
                    <th className="border-b-2 border-brand-neon-safe px-4 py-3 text-left font-semibold">수집 방법</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">상담 신청</td>
                    <td className="border-b border-gray-200 px-4 py-3">이름, 연락처, 이메일, 치과명</td>
                    <td className="border-b border-gray-200 px-4 py-3">웹사이트 입력</td>
                  </tr>
                  <tr className="bg-surface-secondary">
                    <td className="border-b border-gray-200 px-4 py-3">회원가입</td>
                    <td className="border-b border-gray-200 px-4 py-3">이름, 이메일, 비밀번호, 연락처</td>
                    <td className="border-b border-gray-200 px-4 py-3">웹사이트 입력</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">결제</td>
                    <td className="border-b border-gray-200 px-4 py-3">결제 정보 (PG사 처리, 회사 미보관)</td>
                    <td className="border-b border-gray-200 px-4 py-3">PG사 연동</td>
                  </tr>
                  <tr className="bg-surface-secondary">
                    <td className="border-b border-gray-200 px-4 py-3">자동 수집</td>
                    <td className="border-b border-gray-200 px-4 py-3">접속 IP, 쿠키, 접속 일시, 브라우저 정보</td>
                    <td className="border-b border-gray-200 px-4 py-3">자동 생성</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제2조 (개인정보의 수집 및 이용 목적)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li><strong>상담 응대 및 서비스 제공:</strong> 상담 문의 처리, 교육·컨설팅 서비스 제공, 주문·배송 처리</li>
              <li><strong>회원 관리:</strong> 회원제 서비스 이용에 따른 본인 확인, 개인 식별, 불량회원 부정이용 방지</li>
              <li><strong>마케팅 및 광고:</strong> 신규 서비스 안내, 이벤트 정보 제공 (별도 동의 시)</li>
              <li><strong>서비스 개선:</strong> 접속 빈도 파악, 통계 분석을 통한 서비스 개선</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제3조 (개인정보의 보유 및 이용 기간)</h2>
            <p className="mb-3">
              회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 따라 보존이 필요한 경우 아래와 같이 보관합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-dark text-text-inverse">
                    <th className="border-b-2 border-brand-neon-safe px-4 py-3 text-left font-semibold">보존 근거</th>
                    <th className="border-b-2 border-brand-neon-safe px-4 py-3 text-left font-semibold">보존 항목</th>
                    <th className="border-b-2 border-brand-neon-safe px-4 py-3 text-left font-semibold">보존 기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">전자상거래법</td>
                    <td className="border-b border-gray-200 px-4 py-3">계약 또는 청약철회 기록</td>
                    <td className="border-b border-gray-200 px-4 py-3">5년</td>
                  </tr>
                  <tr className="bg-surface-secondary">
                    <td className="border-b border-gray-200 px-4 py-3">전자상거래법</td>
                    <td className="border-b border-gray-200 px-4 py-3">대금결제 및 재화 공급 기록</td>
                    <td className="border-b border-gray-200 px-4 py-3">5년</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">전자상거래법</td>
                    <td className="border-b border-gray-200 px-4 py-3">소비자 불만 또는 분쟁처리 기록</td>
                    <td className="border-b border-gray-200 px-4 py-3">3년</td>
                  </tr>
                  <tr className="bg-surface-secondary">
                    <td className="border-b border-gray-200 px-4 py-3">통신비밀보호법</td>
                    <td className="border-b border-gray-200 px-4 py-3">접속 로그 기록</td>
                    <td className="border-b border-gray-200 px-4 py-3">3개월</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제4조 (개인정보의 제3자 제공)</h2>
            <p>
              회사는 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만, 정보주체의 별도 동의가 있거나, 법률에 특별한 규정이 있는 경우에는 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제5조 (개인정보의 파기)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</li>
              <li>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</li>
              <li>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제6조 (정보주체의 권리·의무)</h2>
            <p className="mb-3">정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ol>
            <p className="mt-3">
              위 권리 행사는 서면, 이메일 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제7조 (개인정보의 안전성 확보 조치)</h2>
            <p className="mb-3">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>개인정보 접근 권한 제한</li>
              <li>개인정보의 암호화</li>
              <li>해킹 등에 대비한 기술적 대책</li>
              <li>개인정보에 대한 접근 기록의 보관 및 위변조 방지</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제8조 (쿠키의 사용)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사는 이용자에게 맞춤 서비스를 제공하기 위해 쿠키를 사용합니다.</li>
              <li>이용자는 웹브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며, 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 제한이 있을 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제9조 (개인정보 보호책임자)</h2>
            <div className="rounded-lg bg-surface-secondary p-6">
              <ul className="space-y-1 text-sm">
                <li><strong>개인정보 보호책임자:</strong> 박건주</li>
                <li><strong>직책:</strong> 대표이사</li>
                <li><strong>연락처:</strong> 0502-5552-0492</li>
              </ul>
            </div>
            <p className="mt-4">
              정보주체는 회사의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제10조 (권익침해 구제방법)</h2>
            <p className="mb-3">정보주체는 개인정보침해로 인한 구제를 받기 위하여 다음 기관에 분쟁해결이나 상담 등을 신청할 수 있습니다.</p>
            <ul className="space-y-2 pl-5 text-sm">
              <li>개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</li>
              <li>개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
              <li>대검찰청: (국번없이) 1301 (www.spo.go.kr)</li>
              <li>경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제11조 (방침 변경)</h2>
            <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
          </section>

          <section className="rounded-lg bg-surface-secondary p-6">
            <h2 className="mb-4 text-xl font-semibold text-text-primary">사업자 정보</h2>
            <ul className="space-y-1 text-sm">
              <li>상호: (주)더스테이션</li>
              <li>대표: 박건주</li>
              <li>사업자등록번호: 650-81-03586</li>
              <li>통신판매업신고: 제2025-서울서초-2513호</li>
              <li>주소: 서울 서초구 효령로53길 45, 233호</li>
              <li>연락처: 0502-5552-0492</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
