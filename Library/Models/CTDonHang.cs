//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Library.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CTDonHang
    {
        public string MaDonHang { get; set; }
        public int MaAnPham { get; set; }
        public Nullable<int> SoLuong { get; set; }
        public Nullable<decimal> GiaTien { get; set; }
    
        public virtual AnPham AnPham { get; set; }
        public virtual AnPhamLienTuc AnPhamLienTuc { get; set; }
        public virtual DonHang DonHang { get; set; }
    }
}
