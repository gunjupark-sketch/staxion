import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function ProductsPage() {
  const supabase = await createClient();

  const { data: products } = await supabase
    .from("products")
    .select("*, product_categories(name)")
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">상품 관리</h1>
          <p className="mt-1 text-sm text-text-muted">스토어 상품 목록</p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>상품명</TableHead>
              <TableHead className="text-right">정가</TableHead>
              <TableHead className="text-right">판매가</TableHead>
              <TableHead className="text-right">재고</TableHead>
              <TableHead>등록일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products && products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        product.is_published
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-gray-500"
                      }
                    >
                      {product.is_published ? "판매중" : "비공개"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-text-muted">
                    {product.product_categories?.name || "-"}
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="text-right text-text-muted whitespace-nowrap">
                    {product.price.toLocaleString()}원
                  </TableCell>
                  <TableCell className="text-right whitespace-nowrap">
                    {product.sale_price
                      ? `${product.sale_price.toLocaleString()}원`
                      : "-"}
                  </TableCell>
                  <TableCell className="text-right text-text-muted">
                    {product.is_digital ? "디지털" : product.stock ?? "-"}
                  </TableCell>
                  <TableCell className="text-text-muted text-sm whitespace-nowrap">
                    {new Date(product.created_at).toLocaleDateString("ko-KR")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center text-text-muted py-8"
                >
                  등록된 상품이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
