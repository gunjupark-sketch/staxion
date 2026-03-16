import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | MEDI STAXION",
  description: "(주)더스테이션 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-text-primary">이용약관</h1>
        <p className="mb-8 text-sm text-text-muted">시행일: 2025년 3월 1일</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제1조 (목적)</h2>
            <p>
              이 약관은 (주)더스테이션(이하 &quot;회사&quot;)이 운영하는 MEDI STAXION 웹사이트(https://staxion.co.kr, 이하 &quot;사이트&quot;)에서 제공하는 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제2조 (정의)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>&quot;서비스&quot;란 회사가 사이트를 통해 제공하는 미용치과 관련 교육, 컨설팅, 가이드북 판매, 장비·재료 판매 등 일체의 서비스를 말합니다.</li>
              <li>&quot;이용자&quot;란 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
              <li>&quot;회원&quot;이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제3조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>이 약관은 사이트에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.</li>
              <li>회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 약관 변경 시 적용일자 및 변경사유를 명시하여 사이트에 적용일자 7일 전부터 공지합니다.</li>
              <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 회원 탈퇴를 할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제4조 (서비스의 제공)</h2>
            <p className="mb-3">회사는 다음의 서비스를 제공합니다.</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>미용치과 도입 가이드북 판매</li>
              <li>미용치과 관련 교육 및 세미나</li>
              <li>미용치과 도입 컨설팅</li>
              <li>미용치과 장비 및 재료 판매 (스토어)</li>
              <li>권역 분석 서비스</li>
              <li>기타 회사가 정하는 서비스</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제5조 (회원가입)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>이용자는 회사가 정한 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</li>
              <li>회사는 전항에 따라 회원가입을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                  <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제6조 (결제 및 환불)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>유료 서비스의 결제는 회사가 정한 방법(신용카드, 계좌이체 등)으로 진행합니다.</li>
              <li>디지털 콘텐츠(가이드북 등)의 환불은 「전자상거래 등에서의 소비자보호에 관한 법률」에 따릅니다.</li>
              <li>콘텐츠를 열람 또는 다운로드한 경우, 환불이 제한될 수 있습니다.</li>
              <li>교육·세미나의 경우, 개최 7일 전까지 전액 환불, 3일 전까지 50% 환불, 이후 환불 불가를 원칙으로 합니다.</li>
              <li>실물 상품은 수령 후 7일 이내 교환·반품 가능하며, 소비자 귀책 시 반품 배송비는 소비자 부담입니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제7조 (회사의 의무)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위해 최선을 다합니다.</li>
              <li>회사는 이용자의 개인정보를 안전하게 관리하며, 개인정보처리방침에 따라 처리합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제8조 (이용자의 의무)</h2>
            <p className="mb-3">이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>신청 또는 변경 시 허위 내용의 등록</li>
              <li>타인의 정보 도용</li>
              <li>회사가 게시한 정보의 변경</li>
              <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>회사와 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>기타 관련 법령에 위반되는 행위</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제9조 (저작권)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사가 제공하는 서비스 및 콘텐츠에 대한 저작권과 지적재산권은 회사에 귀속됩니다.</li>
              <li>이용자는 회사의 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제10조 (면책조항)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
              <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
              <li>회사가 제공하는 콘텐츠(가이드북, 교육 자료 등)는 정보 제공 목적이며, 의료행위에 대한 최종 판단과 책임은 시술을 시행하는 의료인에게 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">제11조 (분쟁해결)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사와 이용자 간 발생한 분쟁에 관한 소송은 서울중앙지방법원을 전속 관할법원으로 합니다.</li>
              <li>회사와 이용자 간에 제기된 소송에는 대한민국 법을 적용합니다.</li>
            </ol>
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
