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
    
    public partial class NhaCungCap
    {
        public NhaCungCap()
        {
            this.DonHangs = new HashSet<DonHang>();
        }
    
        public int ID { get; set; }
        public string TenDayDu { get; set; }
        public string DiaChi { get; set; }
        public string SDTCongTy { get; set; }
        public string Email { get; set; }
    
        public virtual ICollection<DonHang> DonHangs { get; set; }
    }
}
