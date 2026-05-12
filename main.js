// ==========================================
// 1. DỮ LIỆU FLASHCARD
// ==========================================
var data = [
    // --- BÀI 1 ---
    { id: 'g1', lesson: 'Bài 1', type: 'grammar', kr: "N + 입니다 / 입니까?", vn: "Là... / Là... phải không?", note: "입니다 dùng trong câu khẳng định. 입니까? dùng cho câu hỏi." },
    { id: 'g2', lesson: 'Bài 1', type: 'grammar', kr: "N + 은/는", vn: "Tiểu từ chủ ngữ (Chủ đề)", note: "Có patchim dùng 은. Không có patchim dùng 는. Ví dụ: 저는 학생입니다." },
    
    // --- BÀI 2 ---
    { id: 'g3', lesson: 'Bài 2', type: 'grammar', kr: "N + 이/가 아닙니다", vn: "Không phải là N", note: "Có patchim dùng 이 아닙니다. Không có patchim dùng 가 아닙니다." },
    { id: 'g4', lesson: 'Bài 2', type: 'grammar', kr: "이 / 그 / 저 (이것 / 그것 / 저것)", vn: "Đây / Đó / Kia (Cái này / đó / kia)", note: "이: Gần người nói. 그: Gần người nghe. 저: Xa cả hai." },
    { id: 'g5', lesson: 'Bài 2', type: 'grammar', kr: "장소 + 에 있습니다/없습니다", vn: "Có / Không có ở đâu", note: "Chỉ sự tồn tại của sự vật ở một địa điểm. Ví dụ: 교실에 학생이 있습니다." },

    // --- BÀI 3 ---
    { id: 'g6', lesson: 'Bài 3', type: 'grammar', kr: "N + 을/를", vn: "Tiểu từ tân ngữ", note: "Gắn sau danh từ chịu tác động của hành động. Có patchim dùng 을, không patchim dùng 를." },
    { id: 'g7', lesson: 'Bài 3', type: 'grammar', kr: "V/A + ㅂ/습니다", vn: "Đuôi câu lịch sự, trang trọng", note: "Có patchim dùng 습니다. Không có patchim dùng ㅂ니다. Câu hỏi dùng ㅂ/습니까?" },
    { id: 'g8', lesson: 'Bài 3', type: 'grammar', kr: "장소 + 에서 + V", vn: "Làm gì ở đâu", note: "Chỉ địa điểm nơi ĐANG xảy ra hành động. Ví dụ: 공원에서 운동합니다." },

    // --- BÀI 4 ---
    { id: 'g9', lesson: 'Bài 4', type: 'grammar', kr: "N + 와/과 + N", vn: "Và, với (Nối danh từ)", note: "N1 có patchim dùng 과. N1 không có patchim dùng 와." },
    { id: 'g10', lesson: 'Bài 4', type: 'grammar', kr: "시간 + 에", vn: "Vào, vào lúc (Thời gian)", note: "Không dùng '에' sau: 언제, 그저께, 어제, 오늘, 내일, 모레." },

    // --- BÀI 5 ---
    { id: 'g11', lesson: 'Bài 5', type: 'grammar', kr: "V/A + 아/어/해요", vn: "Đuôi câu thân mật", note: "Có nguyên âm ㅏ, ㅗ -> 아요. Động từ 하다 -> 해요. Còn lại -> 어요." },
    { id: 'g12', lesson: 'Bài 5', type: 'grammar', kr: "장소 + 에 가다/오다", vn: "Đi đến / Tới đâu đó", note: "Chỉ hướng di chuyển tới một địa điểm. Ví dụ: 학교에 가요." },
    { id: 'g13', lesson: 'Bài 5', type: 'grammar', kr: "안 + V/A", vn: "Không... (Phủ định)", note: "Đứng trước động/tính từ. Với V-하다 thì chuyển thành Danh từ + 안 + 하다." },

    // --- BÀI 6 ---
    { id: 'g14', lesson: 'Bài 6', type: 'grammar', kr: "N + 하고", vn: "Và, cùng, với N", note: "Dùng linh hoạt trong văn nói, không phụ thuộc vào patchim." },
    { id: 'g15', lesson: 'Bài 6', type: 'grammar', kr: "V + (으)ㅂ시다", vn: "Cùng nhau làm gì đó đi", note: "Đuôi câu rủ rê, đề nghị. Có patchim -> 읍시다. Không patchim -> ㅂ시다." },
    { id: 'g16', lesson: 'Bài 6', type: 'grammar', kr: "V/A + 았/었/했어요", vn: "Đã... (Quá khứ)", 실: "Cách chia tương tự đuôi 아/어요 nhưng gắn thêm ㅆ. Ví dụ: 샀어요, 먹었어요." },

    // --- BÀI 7 ---
    { id: 'g17', lesson: 'Bài 7', type: 'grammar', kr: "Bất quy tắc '으'", vn: "Lược bỏ '으'", note: "Khi kết hợp đuôi bắt đầu bằng nguyên âm, '으' bị lược bỏ, chia theo nguyên âm phía trước nó." },
    { id: 'g18', lesson: 'Bài 7', type: 'grammar', kr: "V + 고 싶다", vn: "Muốn làm gì đó", note: "Dùng cho ngôi thứ 1 và 2. Ngôi thứ 3 dùng '고 싶어 하다'." },

    // --- BÀI 8 ---
    { id: 'g19', lesson: 'Bài 8', type: 'grammar', kr: "V + 겠다", vn: "Sẽ làm gì (Ý định)", note: "Dự định của bản thân hoặc phỏng đoán (Chắc là sẽ...). Ví dụ: 먹겠습니다, 맵겠어요." },
    { id: 'g20', lesson: 'Bài 8', type: 'grammar', kr: "V/A + 지 않다", vn: "Không... (Phủ định dài)", note: "Đồng nghĩa với 안 + V. Ví dụ: 공부하지 않습니다." },
    { id: 'g21', lesson: 'Bài 8', type: 'grammar', kr: "V + (으)세요", vn: "Hãy... (Mệnh lệnh)", note: "Có patchim dùng 으세요. Không patchim dùng 세요." },

    // --- BÀI 9 ---
    { id: 'g22', lesson: 'Bài 9', type: 'grammar', kr: "N + (으)로", vn: "Bằng (phương tiện) / Về phía", note: "Có patchim dùng 으로. Không patchim hoặc kết thúc bằng 'ㄹ' dùng 로." },
    { id: 'g23', lesson: 'Bài 9', type: 'grammar', kr: "V + (으)ㄹ래요?", vn: "Nhé, nhỉ? (Rủ rê)", note: "Hỏi ý kiến cùng thực hiện. (Dạng trần thuật mang nghĩa là 'Muốn')." },
    { id: 'g24', lesson: 'Bài 9', type: 'grammar', kr: "V + (으)ㄹ까요?", vn: "Nhé, nhỉ? (Hỏi ý kiến)", note: "Hỏi để xin lời khuyên hoặc rủ rê. Ví dụ: 무엇을 먹을까요?" },
    { id: 'g25', lesson: 'Bài 9', type: 'grammar', kr: "N + 도", vn: "Cũng", note: "Thay thế cho các tiểu từ chủ ngữ/tân ngữ. Ví dụ: 저도..." },

    // --- BÀI 10 ---
    { id: 'g26', lesson: 'Bài 10', type: 'grammar', kr: "N + 께서/께서는", vn: "Kính ngữ của tiểu từ chủ ngữ", note: "Dùng thay cho 이/가 hoặc 은/는 khi nói về người lớn tuổi, bề trên." },
    { id: 'g27', lesson: 'Bài 10', type: 'grammar', kr: "V/A + (으)시다", vn: "Đuôi câu kính ngữ", note: "Có patchim -> 으시다. Không patchim -> 시다. Dạng hiện tại: (으)십니다 / (으)세요." },
    { id: 'g28', lesson: 'Bài 10', type: 'grammar', kr: "Bất quy tắc 'ㄹ'", vn: "Lược bỏ 'ㄹ'", note: "Khi 'ㄹ' gặp 'ㄴ, ㅂ, ㅅ' hoặc '으' thì 'ㄹ' sẽ bị biến mất. Ví dụ: 살다 + 세요 -> 사세요." },

    // --- BÀI 11 ---
    { id: 'g29', lesson: 'Bài 11', type: 'grammar', kr: "V/A + 고", vn: "Và, rồi, còn", note: "Nối 2 vế câu hoặc liệt kê hành động theo thứ tự thời gian." },
    { id: 'g30', lesson: 'Bài 11', type: 'grammar', kr: "시간 + 부터 ~ 까지", vn: "Từ (giờ) đến (giờ)", note: "Chỉ khoảng cách về mặt thời gian." },
    { id: 'g31', lesson: 'Bài 11', type: 'grammar', kr: "V + (으)ㄹ 거예요/게요", vn: "Sẽ (Dự định, tương lai)", note: "Dự định hoặc hứa hẹn sẽ làm một việc gì đó trong tương lai." },
    { id: 'g32', lesson: 'Bài 11', type: 'grammar', kr: "Bất quy tắc 'ㅂ'", vn: "'ㅂ' chuyển thành '우'", note: "Khi gặp nguyên âm, 'ㅂ' bị lược bỏ và thêm '우'. (Trừ 돕다, 곱다 -> 오)." },

    // --- BÀI 12 ---
    { id: 'g33', lesson: 'Bài 12', type: 'grammar', kr: "V + 아/어 주다 (드리다)", vn: "Làm gì cho ai", note: "드리다/주시다 dùng khi nói với người bề trên." },
    { id: 'g34', lesson: 'Bài 12', type: 'grammar', kr: "N + 에게 / 한테 / 께", vn: "Cho ai, đối với ai", note: "한테 (văn nói), 에게 (văn viết), 께 (kính ngữ)." },
    { id: 'g35', lesson: 'Bài 12', type: 'grammar', kr: "V/A + 지만", vn: "Nhưng", note: "Nối 2 vế câu mang ý nghĩa tương phản. Ví dụ: 맵지만 맛있어요." },
    { id: 'g36', lesson: 'Bài 12', type: 'grammar', kr: "V + (으)려고 하다", vn: "Dự định, định làm gì", note: "Thể hiện kế hoạch sẽ thực hiện. Có patchim -> 으려고 하다." },

    // --- BÀI 13 ---
    { id: 'g37', lesson: 'Bài 13', type: 'grammar', kr: "V/A + 아/어서", vn: "Vì... nên...", note: "Mệnh đề sau KHÔNG dùng đuôi mệnh lệnh (세요) hay rủ rê (ㅂ시다)." },
    { id: 'g38', lesson: 'Bài 13', type: 'grammar', kr: "V + 지 못하다 / 못 V", vn: "Không thể làm gì", note: "Chỉ sự bất khả kháng (muốn làm nhưng không có khả năng/điều kiện làm)." },

    // --- BÀI 14 ---
    { id: 'g39', lesson: 'Bài 14', type: 'grammar', kr: "V + (으)ㄹ 수 있다/없다", vn: "Có thể / Không thể", note: "Chỉ năng lực có thể hoặc không thể làm một việc gì đó." },
    { id: 'g40', lesson: 'Bài 14', type: 'grammar', kr: "V + 기 / 는 것", vn: "Động từ hóa Danh từ", note: "Biến động từ thành danh từ (Việc...). Ví dụ: 영화를 보는 것 (Việc xem phim)." },
    { id: 'g41', lesson: 'Bài 14', type: 'grammar', kr: "Bất quy tắc 'ㄷ'", vn: "'ㄷ' chuyển thành 'ㄹ'", note: "Khi gặp nguyên âm, 'ㄷ' biến thành 'ㄹ'. (Trừ 닫다, 받다, 믿다 thì giữ nguyên)." },

    // --- BÀI 15 ---
    { id: 'g42', lesson: 'Bài 15', type: 'grammar', kr: "장소 + 에서 ~ 까지", vn: "Từ (đâu) đến (đâu)", note: "Chỉ khoảng cách về mặt không gian, địa điểm." },
    { id: 'g43', lesson: 'Bài 15', type: 'grammar', kr: "장소 + 에 + V + (으)러 가다", vn: "Đi đến đâu để làm gì", note: "Chỉ mục đích của sự di chuyển. Ví dụ: 영화를 보러 가요." },

	
    // ==========================================
    // BÀI 1: 입니다 / 입니까? 
    // ==========================================
    { id: 1, lesson: 'Bài 1', type: 'translate', vn: "Tôi là học sinh.", kr: "저는 학생입니다." },
    { id: 2, lesson: 'Bài 1', type: 'translate', vn: "Tôi là sinh viên.", kr: "저는 대학생입니다." },
    { id: 3, lesson: 'Bài 1', type: 'translate', vn: "Tôi là nhân viên công ty.", kr: "저는 회사원입니다." },
    { id: 4, lesson: 'Bài 1', type: 'translate', vn: "Tôi là nhân viên ngân hàng.", kr: "저는 은행원입니다." },
    { id: 5, lesson: 'Bài 1', type: 'translate', vn: "Tôi là bác sĩ.", kr: "저는 의사입니다." },
    { id: 6, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Hàn Quốc.", kr: "저는 한국 사람입니다." },
    { id: 7, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Việt Nam.", kr: "저는 베트남 사람입니다." },
    { id: 8, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Nhật Bản.", kr: "저는 일본 사람입니다." },
    { id: 9, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Trung Quốc.", kr: "저는 중국 사람입니다." },
    { id: 10, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Mỹ.", kr: "저는 미국 사람입니다." },
    { id: 11, lesson: 'Bài 1', type: 'translate', vn: "Tôi người Anh.", kr: "저는 영국 사람입니다." },
    { id: 12, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Thái Lan.", kr: "저는 태국 사람입니다." },
    { id: 13, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Úc.", kr: "저는 호주 사람입니다." },
    { id: 14, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Pháp.", kr: "저는 프랑스 사람입니다." },
    { id: 15, lesson: 'Bài 1', type: 'translate', vn: "Tôi là người Đức.", kr: "저는 독일 사람입니다." },
    { id: 16, lesson: 'Bài 1', type: 'translate', vn: "Bạn là giáo viên phải không?", kr: "선생님입니까?" },
    { id: 17, lesson: 'Bài 1', type: 'translate', vn: "Bạn là công chức nhà nước phải không?", kr: "공무원입니까?" },
    { id: 18, lesson: 'Bài 1', type: 'translate', vn: "Bạn là nội trợ phải không?", kr: "주부입니까?" },
    { id: 19, lesson: 'Bài 1', type: 'translate', vn: "Bạn là tài xế lái xe phải không?", kr: "운전기사입니까?" },
    { id: 20, lesson: 'Bài 1', type: 'translate', vn: "Bạn là dược sĩ phải không?", kr: "약사입니까?" },
    { id: 21, lesson: 'Bài 1', type: 'translate', vn: "Bạn là ca sĩ phải không?", kr: "가수입니까?" },
    { id: 22, lesson: 'Bài 1', type: 'translate', vn: "Bạn là cảnh sát phải không?", kr: "경찰입니까?" },
    { id: 23, lesson: 'Bài 1', type: 'translate', vn: "Bạn là y tá phải không?", kr: "간호사입니까?" },
    { id: 24, lesson: 'Bài 1', type: 'translate', vn: "Bạn là lính cứu hoả phải không?", kr: "소방관입니까?" },
    { id: 25, lesson: 'Bài 1', type: 'translate', vn: "Bạn là kế toán phải không?", kr: "회계사입니까?" },
    { id: 26, lesson: 'Bài 1', type: 'translate', vn: "Bạn là nhân viên bảo vệ phải không?", kr: "경비원입니까?" },
    { id: 27, lesson: 'Bài 1', type: 'translate', vn: "Bạn là người Việt phải không?", kr: "베트남 사람입니까?" },
    { id: 28, lesson: 'Bài 1', type: 'translate', vn: "Bạn là người Hàn phải không?", kr: "한국 사람입니까?" },
    { id: 29, lesson: 'Bài 1', type: 'translate', vn: "Bạn là người Canada phải không?", kr: "캐나다 사람입니까?" },
    { id: 30, lesson: 'Bài 1', type: 'translate', vn: "Bạn là người Tây Ban Nha phải không?", kr: "스페인 사람입니까?" },

    // ==========================================
    // BÀI 2: ĐỊA ĐIỂM & ĐỒ VẬT
    // ==========================================
    { id: 31, lesson: 'Bài 2', type: 'translate', vn: "Chỗ này là ở đâu?", kr: "여기는 어디입니까?" },
    { id: 32, lesson: 'Bài 2', type: 'translate', vn: "Chỗ kia là ở đâu?", kr: "저기는 어디입니까?" },
    { id: 33, lesson: 'Bài 2', type: 'translate', vn: "Chỗ đó là ở đâu?", kr: "거기는 어디입니까?" },
    { id: 34, lesson: 'Bài 2', type: 'translate', vn: "Chỗ này là trường học đúng không?", kr: "여기는 학교입니까?" },
    { id: 35, lesson: 'Bài 2', type: 'translate', vn: "Chỗ kia là thư viện đúng không?", kr: "저기는 도서관입니까?" },
    { id: 36, lesson: 'Bài 2', type: 'translate', vn: "Chỗ đó là nhà hàng đúng không?", kr: "거기는 식당입니까?" },
    { id: 37, lesson: 'Bài 2', type: 'translate', vn: "Chỗ đó là khách sạn đúng không?", kr: "거기는 호텔입니까?" },
    { id: 38, lesson: 'Bài 2', type: 'translate', vn: "Chỗ này là rạp phim đúng không?", kr: "여기는 영화관입니까?" },
    { id: 39, lesson: 'Bài 2', type: 'translate', vn: "Chỗ này là bưu điện.", kr: "여기는 우체국입니다." },
    { id: 40, lesson: 'Bài 2', type: 'translate', vn: "Chỗ đó là bệnh viện.", kr: "거기는 병원입니다." },
    { id: 41, lesson: 'Bài 2', type: 'translate', vn: "Chỗ kia là ngân hàng.", kr: "저기는 은행입니다." },
    { id: 42, lesson: 'Bài 2', type: 'translate', vn: "Chỗ kia là trung tâm thương mại.", kr: "저기는 백화점입니다." },
    { id: 43, lesson: 'Bài 2', type: 'translate', vn: "Chỗ đó là hiệu thuốc.", kr: "거기는 약국입니다." },
    { id: 44, lesson: 'Bài 2', type: 'translate', vn: "Chỗ đó là phòng vệ sinh.", kr: "거기는 화장실입니다." },
    { id: 45, lesson: 'Bài 2', type: 'translate', vn: "Chỗ kia là sân vận động.", kr: "저기는 운동장입니다." },
    { id: 46, lesson: 'Bài 2', type: 'translate', vn: "Cái này là cái gì?", kr: "이것은 무엇입니까?" },
    { id: 47, lesson: 'Bài 2', type: 'translate', vn: "Cái kia là cái gì?", kr: "저것은 무엇입니까?" },
    { id: 48, lesson: 'Bài 2', type: 'translate', vn: "Cái đó là cái gì?", kr: "그것은 무엇입니까?" },
    { id: 49, lesson: 'Bài 2', type: 'translate', vn: "Cái này là quyển sách đúng không?", kr: "이것은 책입니까?" },
    { id: 50, lesson: 'Bài 2', type: 'translate', vn: "Cái kia là cái bàn đúng không?", kr: "저것은 책상입니까?" },
    { id: 51, lesson: 'Bài 2', type: 'translate', vn: "Cái đó là cái ghế đúng không?", kr: "그것은 의자입니까?" },
    { id: 52, lesson: 'Bài 2', type: 'translate', vn: "Cái kia là đồng hồ đúng không?", kr: "저것은 시계입니까?" },
    { id: 53, lesson: 'Bài 2', type: 'translate', vn: "Cái đó là cửa sổ đúng không?", kr: "그것은 창문입니까?" },
    { id: 54, lesson: 'Bài 2', type: 'translate', vn: "Cái này là quyển từ điển.", kr: "이것은 사전입니다." },
    { id: 55, lesson: 'Bài 2', type: 'translate', vn: "Cái này là bút chì.", kr: "이것은 연필입니다." },
    { id: 56, lesson: 'Bài 2', type: 'translate', vn: "Cái kia là cặp sách.", kr: "저것은 가방입니다." },
    { id: 57, lesson: 'Bài 2', type: 'translate', vn: "Cái đó là máy tính.", kr: "그것은 컴퓨터입니다." },
    { id: 58, lesson: 'Bài 2', type: 'translate', vn: "Cái đó là cục tẩy.", kr: "그것은 지우개입니다." },
    { id: 59, lesson: 'Bài 2', type: 'translate', vn: "Cái này là bản đồ.", kr: "이것은 지도입니다." },
    { id: 60, lesson: 'Bài 2', type: 'translate', vn: "Cái đó là cái bảng.", kr: "그것은 칠판입니다." },
    { id: 61, lesson: 'Bài 2', type: 'translate', vn: "Trong lớp học có bàn.", kr: "교실에 책상이 있습니다." },
    { id: 62, lesson: 'Bài 2', type: 'translate', vn: "Trong giảng đường có ghế.", kr: "강의실에 의자가 있습니다." },
    { id: 63, lesson: 'Bài 2', type: 'translate', vn: "Trong nhà ăn có học sinh.", kr: "식당에 학생이 있습니다." },
    { id: 64, lesson: 'Bài 2', type: 'translate', vn: "Trong thư viện có nhiều sách.", kr: "도서관에 책이 많이 있습니다." },
    { id: 65, lesson: 'Bài 2', type: 'translate', vn: "Trong trường đại học có khoa Hàn Quốc.", kr: "대학교에 한국학과가 있습니다." },
    { id: 66, lesson: 'Bài 2', type: 'translate', vn: "Trong bệnh viện có bác sĩ.", kr: "병원에 의사가 있습니다." },
    { id: 67, lesson: 'Bài 2', type: 'translate', vn: "Trong hiệu thuốc có thuốc.", kr: "약국에 약이 있습니다." },
    { id: 68, lesson: 'Bài 2', type: 'translate', vn: "Ở đây không có trung tâm thương mại.", kr: "여기에 백화점이 없습니다." },
    { id: 69, lesson: 'Bài 2', type: 'translate', vn: "Trong văn phòng không có người.", kr: "사무실에 사람이 없습니다." },
    { id: 70, lesson: 'Bài 2', type: 'translate', vn: "Trong phòng Lab có máy tính.", kr: "랩실에 컴퓨터가 있습니다." },
    { id: 71, lesson: 'Bài 2', type: 'translate', vn: "Ở hiệu sách không có cặp sách.", kr: "서점에 가방이 없습니다." },
    { id: 72, lesson: 'Bài 2', type: 'translate', vn: "Trong nhà ăn không có bánh mì.", kr: "식당에 빵이 없습니다." },
    { id: 73, lesson: 'Bài 2', type: 'translate', vn: "Ở khách sạn không có nhà hàng.", kr: "호텔에 식당이 없습니다." },
    { id: 74, lesson: 'Bài 2', type: 'translate', vn: "Ở sân vận động không có người.", kr: "운동장에 사람이 없습니다." },
    { id: 75, lesson: 'Bài 2', type: 'translate', vn: "Trong phòng học không có giáo viên.", kr: "교실에 선생님이 없습니다." },
    { id: 76, lesson: 'Bài 2', type: 'translate', vn: "Tôi không phải là giáo viên.", kr: "저는 선생님이 아닙니다." },
    { id: 77, lesson: 'Bài 2', type: 'translate', vn: "Tên của tôi không phải là Hương.", kr: "제 이름은 흐엉이 아닙니다." },
    { id: 78, lesson: 'Bài 2', type: 'translate', vn: "Cái kia không phải là tờ báo.", kr: "저것은 신문이 아닙니다." },
    { id: 79, lesson: 'Bài 2', type: 'translate', vn: "Ở đây không phải là lớp học.", kr: "여기는 교실이 아닙니다." },
    { id: 80, lesson: 'Bài 2', type: 'translate', vn: "Ở đó không phải phòng vệ sinh.", kr: "거기는 화장실이 아닙니다." },
    { id: 81, lesson: 'Bài 2', type: 'translate', vn: "Tôi không phải là tài xế.", kr: "저는 운전기사가 아닙니다." },
    { id: 82, lesson: 'Bài 2', type: 'translate', vn: "Cái này không phải cục tẩy.", kr: "이것은 지우개가 아닙니다." },
    { id: 83, lesson: 'Bài 2', type: 'translate', vn: "Cái đó không phải bản đồ.", kr: "그것은 지도가 아닙니다." },
    { id: 84, lesson: 'Bài 2', type: 'translate', vn: "Cái kia không phải cái bàn.", kr: "저것은 책상이 아닙니다." },
    { id: 85, lesson: 'Bài 2', type: 'translate', vn: "Ở đó không phải hiệu sách.", kr: "거기는 서점이 아닙니다." },
    { id: 86, lesson: 'Bài 2', type: 'translate', vn: "Ở kia không phải phòng hội thảo.", kr: "저기는 회의실이 아닙니다." },
    { id: 87, lesson: 'Bài 2', type: 'translate', vn: "Lan không phải người Nhật Bản.", kr: "란 씨는 일본 사람이 아닙니다." },
    { id: 88, lesson: 'Bài 2', type: 'translate', vn: "Tôi không phải là sinh viên đại học.", kr: "저는 대학생이 아닙니다." },
    { id: 89, lesson: 'Bài 2', type: 'translate', vn: "Cái này không phải quyển từ điển.", kr: "이것은 사전이 아닙니다." },
    { id: 90, lesson: 'Bài 2', type: 'translate', vn: "Cái kia không phải là bảng.", kr: "저것은 칠판이 아닙니다." },

    // ==========================================
    // BÀI 3: SINH HOẠT HÀNG NGÀY
    // ==========================================
    { id: 91, lesson: 'Bài 3', type: 'translate', vn: "Tôi ăn cơm ở nhà ăn.", kr: "저는 식당에서 밥을 먹습니다." },
    { id: 92, lesson: 'Bài 3', type: 'translate', vn: "Tôi đọc sách ở thư viện.", kr: "저는 도서관에서 책을 읽습니다." },
    { id: 93, lesson: 'Bài 3', type: 'translate', vn: "Tôi mua sắm ở bách hóa.", kr: "저는 백화점에서 쇼핑합니다." },
    { id: 94, lesson: 'Bài 3', type: 'translate', vn: "Tôi xem phim ở nhà.", kr: "저는 집에서 영화를 봅니다." },
    { id: 95, lesson: 'Bài 3', type: 'translate', vn: "Tôi thích leo núi.", kr: "저는 등산을 좋아합니다." },
    { id: 96, lesson: 'Bài 3', type: 'translate', vn: "Tôi thích tiếng Hàn.", kr: "저는 한국어를 좋아합니다." },
    { id: 97, lesson: 'Bài 3', type: 'translate', vn: "Hương đọc báo.", kr: "흐엉 씨는 신문을 읽습니다." },
    { id: 98, lesson: 'Bài 3', type: 'translate', vn: "Hương uống cà phê.", kr: "흐엉 씨는 커피를 마십니다." },
    { id: 99, lesson: 'Bài 3', type: 'translate', vn: "Hương học tiếng Hàn ở thư viện.", kr: "흐엉 씨는 도서관에서 한국어를 공부합니다." },
    { id: 100, lesson: 'Bài 3', type: 'translate', vn: "Thức ăn rất ngon.", kr: "음식이 아주 맛있습니다." },
    { id: 101, lesson: 'Bài 3', type: 'translate', vn: "Trường rất to.", kr: "학교가 아주 큽니다." },
    { id: 102, lesson: 'Bài 3', type: 'translate', vn: "Tôi ăn kimbap ở nhà ăn học sinh.", kr: "저는 학생 식당에서 김밥을 먹습니다." },
    { id: 103, lesson: 'Bài 3', type: 'translate', vn: "Tôi uống bia ở nhà.", kr: "저는 집에서 맥주를 마십니다." },
    { id: 104, lesson: 'Bài 3', type: 'translate', vn: "Lan xem phim Hàn Quốc ở rạp chiếu phim.", kr: "란 씨는 영화관에서 한국 영화를 봅니다." },
    { id: 105, lesson: 'Bài 3', type: 'translate', vn: "Tôi nghe nhạc ở phòng nghỉ.", kr: "저는 휴게실에서 음악을 듣습니다." },
    { id: 106, lesson: 'Bài 3', type: 'translate', vn: "Tôi uống trà.", kr: "저는 차를 마십니다." },
    { id: 107, lesson: 'Bài 3', type: 'translate', vn: "Tôi ăn bánh mì.", kr: "저는 빵을 먹습니다." },
    { id: 108, lesson: 'Bài 3', type: 'translate', vn: "Tôi đọc báo.", kr: "저는 신문을 읽습니다." },
    { id: 109, lesson: 'Bài 3', type: 'translate', vn: "Tôi nói chuyện với bạn.", kr: "저는 친구하고 이야기합니다." },
    { id: 110, lesson: 'Bài 3', type: 'translate', vn: "Tôi nghỉ ngơi ở nhà.", kr: "저는 집에서 쉽니다." },
    { id: 111, lesson: 'Bài 3', type: 'translate', vn: "Tôi làm việc ở công ty.", kr: "저는 회사에서 일합니다." },
    { id: 112, lesson: 'Bài 3', type: 'translate', vn: "Lan học tiếng Hàn ở thư viện.", kr: "란 씨는 도서관에서 한국어를 공부합니다." },
    { id: 113, lesson: 'Bài 3', type: 'translate', vn: "Quyển sách tiếng Hàn hay.", kr: "한국어 책이 재미있습니다." },
    { id: 114, lesson: 'Bài 3', type: 'translate', vn: "Minho cao.", kr: "민호 씨는 키가 큽니다." },
    { id: 115, lesson: 'Bài 3', type: 'translate', vn: "Bạn đang làm gì?", kr: "무엇을 합니까?" },
    { id: 116, lesson: 'Bài 3', type: 'translate', vn: "Bạn thích cái gì?", kr: "무엇을 좋아합니까?" },
    { id: 117, lesson: 'Bài 3', type: 'translate', vn: "Bạn đang ăn gì?", kr: "무엇을 먹습니까?" },
    { id: 118, lesson: 'Bài 3', type: 'translate', vn: "Bạn đang đọc gì?", kr: "무엇을 읽습니까?" },
    { id: 119, lesson: 'Bài 3', type: 'translate', vn: "Bạn đang làm gì ở đâu?", kr: "어디에서 무엇을 합니까?" },
    { id: 120, lesson: 'Bài 3', type: 'translate', vn: "Bạn đọc sách ở đâu?", kr: "어디에서 책을 읽습니까?" },
    { id: 121, lesson: 'Bài 3', type: 'translate', vn: "Bạn học bài ở đâu?", kr: "어디에서 공부합니까?" },
    { id: 122, lesson: 'Bài 3', type: 'translate', vn: "Ai đang đọc sách?", kr: "누가 책을 읽습니까?" },
    { id: 123, lesson: 'Bài 3', type: 'translate', vn: "Ai đang ăn cơm?", kr: "누가 밥을 먹습니까?" },
    { id: 124, lesson: 'Bài 3', type: 'translate', vn: "Bạn gặp ai?", kr: "누구를 만납니까?" },
    { id: 125, lesson: 'Bài 3', type: 'translate', vn: "Bạn gặp ai ở quán cà phê?", kr: "커피숍에서 누구를 만납니까?" },
    { id: 126, lesson: 'Bài 3', type: 'translate', vn: "Bạn làm gì ở đây?", kr: "여기에서 무엇을 합니까?" },
    { id: 127, lesson: 'Bài 3', type: 'translate', vn: "Bạn làm gì ở thư viện?", kr: "도서관에서 무엇을 합니까?" },
    { id: 128, lesson: 'Bài 3', type: 'translate', vn: "Bạn làm gì ở nhà?", kr: "집에서 무엇을 합니까?" },
    { id: 129, lesson: 'Bài 3', type: 'translate', vn: "Bạn học tiếng Hàn ở đâu?", kr: "어디에서 한국어를 공부합니까?" },
    { id: 130, lesson: 'Bài 3', type: 'translate', vn: "Quyển sách tiếng Hàn hay đúng không?", kr: "한국어 책이 재미있습니까?" },
    { id: 131, lesson: 'Bài 3', type: 'translate', vn: "Bạn ăn bánh mì đúng không?", kr: "빵을 먹습니까?" },
    { id: 132, lesson: 'Bài 3', type: 'translate', vn: "Bạn uống cà phê đúng không?", kr: "커피를 마십니까?" },
    { id: 133, lesson: 'Bài 3', type: 'translate', vn: "Bạn xem phim đúng không?", kr: "영화를 봅니까?" },
    { id: 134, lesson: 'Bài 3', type: 'translate', vn: "Bạn đọc báo đúng không?", kr: "신문을 읽습니까?" },
    { id: 135, lesson: 'Bài 3', type: 'translate', vn: "Bạn gặp bạn bè đúng không?", kr: "친구를 만납니까?" },
    { id: 136, lesson: 'Bài 3', type: 'translate', vn: "Bạn luyện tập thể thao đúng không?", kr: "운동합니까?" },
    { id: 137, lesson: 'Bài 3', type: 'translate', vn: "Bạn đến trường đúng không?", kr: "학교에 갑니까?" },
    { id: 138, lesson: 'Bài 3', type: 'translate', vn: "Bạn mua quần áo đúng không?", kr: "옷을 삽니까?" },
    { id: 139, lesson: 'Bài 3', type: 'translate', vn: "Bạn làm việc ở ngân hàng đúng không?", kr: "은행에서 일합니까?" },
    { id: 140, lesson: 'Bài 3', type: 'translate', vn: "Bạn ăn chuối đúng không?", kr: "바나나를 먹습니까?" },
    { id: 141, lesson: 'Bài 3', type: 'translate', vn: "Bạn mua sắm ở trung tâm thương mại đúng không?", kr: "백화점에서 쇼핑합니까?" },
    { id: 142, lesson: 'Bài 3', type: 'translate', vn: "Bạn nghỉ ngơi ở nhà đúng không?", kr: "집에서 쉬습니까?" },

    // ==========================================
    // BÀI 4: THỜI GIAN
    // ==========================================
    { id: 143, lesson: 'Bài 4', type: 'translate', vn: "Ngày mai tôi gặp người bạn.", kr: "내일 친구를 만납니다." },
    { id: 144, lesson: 'Bài 4', type: 'translate', vn: "Hôm nay tôi đọc sách ở thư viện.", kr: "오늘 도서관에서 책을 읽습니다." },
    { id: 145, lesson: 'Bài 4', type: 'translate', vn: "Thứ hai tôi mua sắm ở bách hóa.", kr: "월요일에 백화점에서 쇼핑합니다." },
    { id: 146, lesson: 'Bài 4', type: 'translate', vn: "Thứ ba tôi xem phim ở nhà.", kr: "화요일에 집에서 영화를 봅니다." },
    { id: 147, lesson: 'Bài 4', type: 'translate', vn: "Thứ tư tôi leo núi.", kr: "수요일에 등산합니다." },
    { id: 148, lesson: 'Bài 4', type: 'translate', vn: "Thứ năm tôi học tiếng Hàn cùng Hương.", kr: "목요일에 흐엉 씨하고 한국어를 공부합니다." },
    { id: 149, lesson: 'Bài 4', type: 'translate', vn: "Thứ sáu Hương tập thể dục ở công viên.", kr: "금요일에 흐엉 씨는 공원에서 운동합니다." },
    { id: 150, lesson: 'Bài 4', type: 'translate', vn: "Thứ bảy Hương uống cà phê với mẹ.", kr: "토요일에 흐엉 씨는 어머니하고 커피를 마십니다." },
    { id: 151, lesson: 'Bài 4', type: 'translate', vn: "Chủ nhật Hương học tiếng Hàn ở thư viện.", kr: "일요일에 흐엉 씨는 도서관에서 한국어를 공부합니다." },
    { id: 152, lesson: 'Bài 4', type: 'translate', vn: "Cuối tuần bạn làm gì?", kr: "주말에 무엇을 합니까?" },
    { id: 153, lesson: 'Bài 4', type: 'translate', vn: "Cuối tuần bạn gặp ai?", kr: "주말에 누구를 만납니까?" },
    { id: 154, lesson: 'Bài 4', type: 'translate', vn: "Thứ mấy bạn học tiếng Hàn?", kr: "무슨 요일에 한국어를 공부합니까?" },
    { id: 155, lesson: 'Bài 4', type: 'translate', vn: "Thứ mấy bạn leo núi?", kr: "무슨 요일에 등산합니까?" },
    { id: 156, lesson: 'Bài 4', type: 'translate', vn: "Thứ mấy bạn đi dạo?", kr: "무슨 요일에 산책합니까?" },
    { id: 157, lesson: 'Bài 4', type: 'translate', vn: "Thứ mấy bạn ôn thi?", kr: "무슨 요일에 시험 공부를 합니까?" },
    { id: 158, lesson: 'Bài 4', type: 'translate', vn: "Thứ mấy bạn uống rượu cùng người bạn?", kr: "무슨 요일에 친구하고 술을 마십니까?" },
    { id: 159, lesson: 'Bài 4', type: 'translate', vn: "Thứ mấy bạn đi bơi?", kr: "무슨 요일에 수영합니까?" },
    { id: 160, lesson: 'Bài 4', type: 'translate', vn: "Thứ mấy bạn đá bóng?", kr: "무슨 요일에 축구합니까?" },
    { id: 161, lesson: 'Bài 4', type: 'translate', vn: "Thứ mấy bạn mua sắm?", kr: "무슨 요일에 쇼핑합니까?" },
    { id: 162, lesson: 'Bài 4', type: 'translate', vn: "Thứ hai bạn có học tiếng Hàn không?", kr: "월요일에 한국어를 공부합니까?" },
    { id: 163, lesson: 'Bài 4', type: 'translate', vn: "Cuối tuần bình thường bạn mua sắm không?", kr: "보통 주말에 쇼핑합니까?" },
    { id: 164, lesson: 'Bài 4', type: 'translate', vn: "Tôi học tiếng Hàn vào cuối tuần.", kr: "저는 주말에 한국어를 공부합니다." },
    { id: 165, lesson: 'Bài 4', type: 'translate', vn: "Tôi tập thể dục hàng ngày.", kr: "저는 매일 운동합니다." },
    { id: 166, lesson: 'Bài 4', type: 'translate', vn: "Bạn gặp người bạn Hàn Quốc vào thứ mấy?", kr: "무슨 요일에 한국 친구를 만납니까?" },
    { id: 167, lesson: 'Bài 4', type: 'translate', vn: "Xem phim tại rạp chiếu phim vào ngày mấy?", kr: "며칠에 극장에서 영화를 봅니까?" },
    { id: 168, lesson: 'Bài 4', type: 'translate', vn: "Khi nào Hương mua sắm ở bách hóa?", kr: "언제 흐엉 씨는 백화점에서 쇼핑합니까?" },
    { id: 169, lesson: 'Bài 4', type: 'translate', vn: "Hương gặp người bạn Hàn Quốc vào cuối tuần.", kr: "흐엉 씨는 주말에 한국 친구를 만납니다." },
    { id: 170, lesson: 'Bài 4', type: 'translate', vn: "Tôi làm bài kiểm tra vào thứ ba, ngày 20 tháng 10 năm 2019.", kr: "저는 2019년 10월 20일 화요일에 시험을 봅니다." },
    { id: 171, lesson: 'Bài 4', type: 'translate', vn: "Vào cuối tuần, tôi đi dạo trong công viên.", kr: "주말에 공원에서 산책합니다." },
    { id: 172, lesson: 'Bài 4', type: 'translate', vn: "Vào thứ tư, tôi uống trà và cà phê tại quán cà phê.", kr: "수요일에 커피숍에서 차하고 커피를 마십니다." },
    { id: 173, lesson: 'Bài 4', type: 'translate', vn: "Vào cuối tuần này, Hương đọc sách tiếng Hàn và tạp chí tiếng Hàn trong thư viện.", kr: "이번 주말에 흐엉 씨는 도서관에서 한국어 책하고 한국어 잡지를 읽습니다." },
    { id: 174, lesson: 'Bài 4', type: 'translate', vn: "Vào cuối tuần sau có lớp học tiếng Hàn Quốc.", kr: "다음 주말에 한국어 수업이 있습니다." },
    { id: 175, lesson: 'Bài 4', type: 'translate', vn: "Vào cuối tuần trước ở lớp học không có học sinh.", kr: "지난 주말에 교실에 학생이 없었습니다." },
    { id: 176, lesson: 'Bài 4', type: 'translate', vn: "Vào ngày thường, ở lớp học có nhiều học sinh.", kr: "평일에 교실에 학생이 많습니다." },
    { id: 177, lesson: 'Bài 4', type: 'translate', vn: "Thứ tư tuần này, tôi xem phim Hàn Quốc và phim Việt Nam tại rạp chiếu phim.", kr: "이번 주 수요일에 극장에서 한국 영화하고 베트남 영화를 봅니다." },
    { id: 178, lesson: 'Bài 4', type: 'translate', vn: "Thứ bảy tuần sau, Hoa và Hương mua cặp xách và giày thể thao ở bách hóa.", kr: "다음 주 토요일에 호아 씨하고 흐엉 씨는 백화점에서 가방하고 운동화를 삽니다." },
    { id: 179, lesson: 'Bài 4', type: 'translate', vn: "Cuối tuần này, thầy Lee và thầy Kim không có tiết học tiếng Hàn.", kr: "이번 주말에 이 선생님하고 김 선생님은 한국어 수업이 없습니다." },
    { id: 180, lesson: 'Bài 4', type: 'translate', vn: "Thứ 7 tuần này tôi đi học.", kr: "이번 주 토요일에 학교에 갑니다." },

    // ==========================================
    // BÀI 5: THỜI GIAN (ĐUÔI -아/어요)
    // ==========================================
    { id: 181, lesson: 'Bài 5', type: 'translate', vn: "Tôi là nhân viên công ty.", kr: "저는 회사원이에요." },
    { id: 182, lesson: 'Bài 5', type: 'translate', vn: "Tôi là nhân viên ngân hàng.", kr: "저는 은행원이에요." },
    { id: 183, lesson: 'Bài 5', type: 'translate', vn: "Tôi là người Hàn Quốc.", kr: "저는 한국 사람이에요." },
    { id: 184, lesson: 'Bài 5', type: 'translate', vn: "Tôi là người Việt Nam.", kr: "저는 베트남 사람이에요." },
    { id: 185, lesson: 'Bài 5', type: 'translate', vn: "Tôi là người Nhật Bản.", kr: "저는 일본 사람이에요." },
    { id: 186, lesson: 'Bài 5', type: 'translate', vn: "Tôi là người Trung Quốc.", kr: "저는 중국 사람이에요." },
    { id: 187, lesson: 'Bài 5', type: 'translate', vn: "Thứ mấy bạn ôn thi?", kr: "무슨 요일에 시험 공부를 해요?" },
    { id: 188, lesson: 'Bài 5', type: 'translate', vn: "Thứ mấy bạn uống rượu cùng người bạn?", kr: "무슨 요일에 친구하고 술을 마셔요?" },
    { id: 189, lesson: 'Bài 5', type: 'translate', vn: "Thứ mấy bạn đi bơi?", kr: "무슨 요일에 수영해요?" },
    { id: 190, lesson: 'Bài 5', type: 'translate', vn: "Thứ mấy bạn đá bóng?", kr: "무슨 요일에 축구해요?" },
    { id: 191, lesson: 'Bài 5', type: 'translate', vn: "Tôi thích tiếng Hàn.", kr: "저는 한국어를 좋아해요." },
    { id: 192, lesson: 'Bài 5', type: 'translate', vn: "Hương đọc báo.", kr: "흐엉 씨는 신문을 읽어요." },
    { id: 193, lesson: 'Bài 5', type: 'translate', vn: "Hương uống cà phê.", kr: "흐엉 씨는 커피를 마셔요." },
    { id: 194, lesson: 'Bài 5', type: 'translate', vn: "Ngày mai tôi gặp người bạn.", kr: "내일 친구를 만나요." },
    { id: 195, lesson: 'Bài 5', type: 'translate', vn: "Hôm nay tôi đọc sách ở thư viện.", kr: "오늘 도서관에서 책을 읽어요." },
    { id: 196, lesson: 'Bài 5', type: 'translate', vn: "Thứ hai tôi mua sắm ở bách hóa.", kr: "월요일에 백화점에서 쇼핑해요." },
    { id: 197, lesson: 'Bài 5', type: 'translate', vn: "Thứ ba tôi xem phim ở nhà.", kr: "화요일에 집에서 영화를 봐요." },
    { id: 198, lesson: 'Bài 5', type: 'translate', vn: "Thứ tư tôi leo núi.", kr: "수요일에 등산해요." },
    { id: 199, lesson: 'Bài 5', type: 'translate', vn: "Thứ năm tôi học tiếng Hàn cùng Hương.", kr: "목요일에 흐엉 씨하고 한국어를 공부해요." },
    { id: 200, lesson: 'Bài 5', type: 'translate', vn: "Thứ sáu Hương tập thể dục ở công viên.", kr: "금요일에 흐엉 씨는 공원에서 운동해요." },
    { id: 201, lesson: 'Bài 5', type: 'translate', vn: "Thứ bảy Hương uống cà phê với mẹ.", kr: "토요일에 흐엉 씨는 어머니하고 커피를 마셔요." },
    { id: 202, lesson: 'Bài 5', type: 'translate', vn: "Chủ nhật Hương học tiếng Hàn ở thư viện.", kr: "일요일에 흐엉 씨는 도서관에서 한국어를 공부해요." },
    { id: 203, lesson: 'Bài 5', type: 'translate', vn: "Cuối tuần bạn làm gì?", kr: "주말에 무엇을 해요?" },
    { id: 204, lesson: 'Bài 5', type: 'translate', vn: "Cuối tuần bạn gặp ai?", kr: "주말에 누구를 만나요?" },
    { id: 205, lesson: 'Bài 5', type: 'translate', vn: "Thứ mấy bạn học tiếng Hàn?", kr: "무슨 요일에 한국어를 공부해요?" },
    { id: 206, lesson: 'Bài 5', type: 'translate', vn: "Thứ mấy bạn leo núi?", kr: "무슨 요일에 등산해요?" },
    { id: 207, lesson: 'Bài 5', type: 'translate', vn: "Thứ mấy bạn đi dạo?", kr: "무슨 요일에 산책해요?" },
    { id: 208, lesson: 'Bài 5', type: 'translate', vn: "Hương học tiếng Hàn ở thư viện.", kr: "흐엉 씨는 도서관에서 한국어를 공부해요." },
    { id: 209, lesson: 'Bài 5', type: 'translate', vn: "Thức ăn rất ngon.", kr: "음식이 아주 맛있어요." },
    { id: 210, lesson: 'Bài 5', type: 'translate', vn: "Tôi ăn kimbap ở nhà ăn học sinh.", kr: "저는 학생 식당에서 김밥을 먹어요." },
    { id: 211, lesson: 'Bài 5', type: 'translate', vn: "Tôi uống bia ở nhà.", kr: "저는 집에서 맥주를 마셔요." },
    { id: 212, lesson: 'Bài 5', type: 'translate', vn: "Lan xem phim Hàn Quốc ở rạp chiếu phim.", kr: "란 씨는 영화관에서 한국 영화를 봐요." },
    { id: 213, lesson: 'Bài 5', type: 'translate', vn: "Tôi nghe nhạc ở phòng nghỉ.", kr: "저는 휴게실에서 음악을 들어요." },
    { id: 214, lesson: 'Bài 5', type: 'translate', vn: "Tôi uống trà.", kr: "저는 차를 마셔요." },
    { id: 215, lesson: 'Bài 5', type: 'translate', vn: "Mùa thu thì mát mẻ và gió thổi.", kr: "가을은 시원하고 바람이 불어요." },
    { id: 216, lesson: 'Bài 5', type: 'translate', vn: "Hôm nay trời nhiều mây và âm u.", kr: "오늘 구름이 많고 흐려요." },
    { id: 217, lesson: 'Bài 5', type: 'translate', vn: "Tôi cùng người bạn Hàn Quốc ăn món ăn Việt Nam và đi du lịch.", kr: "저는 한국 친구하고 같이 베트남 음식을 먹고 여행해요." },
    { id: 218, lesson: 'Bài 5', type: 'translate', vn: "Hôm nay trời nắng và ấm áp.", kr: "오늘 날씨가 맑고 따뜻해요." },
    { id: 219, lesson: 'Bài 5', type: 'translate', vn: "Hôm qua trời đã mưa nhiều và rất lạnh.", kr: "어제 비가 많이 왔고 아주 추웠어요." },
    { id: 220, lesson: 'Bài 5', type: 'translate', vn: "Hôm qua tôi đã làm bài tập tiếng Hàn và gặp bạn ở quán cà phê.", kr: "어제 한국어 숙제를 했고 커피숍에서 친구를 만났어요." },
    { id: 221, lesson: 'Bài 5', type: 'translate', vn: "Lan là người Việt Nam và YuJin là người Hàn Quốc.", kr: "란 씨는 베트남 사람이고 유진 씨는 한국 사람이에요." },
    { id: 222, lesson: 'Bài 5', type: 'translate', vn: "Thứ hai bạn có học tiếng Hàn không?", kr: "월요일에 한국어를 공부해요?" },
    { id: 223, lesson: 'Bài 5', type: 'translate', vn: "Cuối tuần bình thường bạn mua sắm không?", kr: "보통 주말에 쇼핑해요?" },
    { id: 224, lesson: 'Bài 5', type: 'translate', vn: "Tôi học tiếng Hàn vào cuối tuần.", kr: "저는 주말에 한국어를 공부해요." },
    { id: 225, lesson: 'Bài 5', type: 'translate', vn: "Tôi tập thể dục hàng ngày.", kr: "저는 매일 운동해요." },
    { id: 226, lesson: 'Bài 5', type: 'translate', vn: "Bạn gặp người bạn Hàn Quốc vào thứ mấy?", kr: "무슨 요일에 한국 친구를 만나요?" },
    { id: 227, lesson: 'Bài 5', type: 'translate', vn: "Xem phim tại rạp chiếu phim vào ngày mấy?", kr: "며칠에 극장에서 영화를 봐요?" },
    { id: 228, lesson: 'Bài 5', type: 'translate', vn: "Khi nào Hương mua sắm ở bách hóa?", kr: "언제 흐엉 씨는 백화점에서 쇼핑해요?" },
    { id: 229, lesson: 'Bài 5', type: 'translate', vn: "Hương gặp người bạn Hàn Quốc vào cuối tuần.", kr: "흐엉 씨는 주말에 한국 친구를 만나요." },
    { id: 230, lesson: 'Bài 5', type: 'translate', vn: "Tôi làm bài kiểm tra vào thứ ba, ngày 20 tháng 10 năm 2019.", kr: "저는 2019년 10월 20일 화요일에 시험을 봐요." },
    { id: 231, lesson: 'Bài 5', type: 'translate', vn: "Vào cuối tuần, tôi đi dạo trong công viên.", kr: "주말에 공원에서 산책해요." },
    { id: 232, lesson: 'Bài 5', type: 'translate', vn: "Vào thứ tư, tôi uống trà và cà phê tại quán cà phê.", kr: "수요일에 커피숍에서 차하고 커피를 마셔요." },
    { id: 233, lesson: 'Bài 5', type: 'translate', vn: "Vào cuối tuần sau có lớp học tiếng Hàn Quốc.", kr: "다음 주말에 한국어 수업이 있어요." },
    { id: 234, lesson: 'Bài 5', type: 'translate', vn: "Chuyến du lịch Jeju đã rất thú vị.", kr: "제주도 여행이 아주 재미있었어요." },
    { id: 235, lesson: 'Bài 5', type: 'translate', vn: "Hôm qua tôi đã đi câu cá.", kr: "어제 낚시를 했어요." },
    { id: 236, lesson: 'Bài 5', type: 'translate', vn: "Thứ hai tuần trước tôi đã đi cắm trại cùng Mai.", kr: "지난주 월요일에 마이 씨하고 캠핑을 갔어요." },
    { id: 237, lesson: 'Bài 5', type: 'translate', vn: "Cuối tuần trước tôi đã chơi đá bóng.", kr: "지난주 주말에 축구를 했어요." },
    { id: 238, lesson: 'Bài 5', type: 'translate', vn: "Tối hôm qua tôi đã làm cơm trộn.", kr: "어제 저녁에 비빔밥을 만들었어요." },
    { id: 239, lesson: 'Bài 5', type: 'translate', vn: "Hôm qua tôi đã đi nhà hàng Hàn Quốc.", kr: "어제 한국 식당에 갔어요." },
    { id: 240, lesson: 'Bài 5', type: 'translate', vn: "Trưa hôm qua tôi đã ăn kimbap và uống nước ép.", kr: "어제 점심에 김밥을 먹고 주스를 마셨어요." },
    { id: 241, lesson: 'Bài 5', type: 'translate', vn: "Hôm qua tôi đã đến trường muộn.", kr: "어제 학교에 늦게 왔어요." },
    { id: 242, lesson: 'Bài 5', type: 'translate', vn: "Sáng hôm qua tôi đã dậy sớm và tập thể dục.", kr: "어제 아침에 일찍 일어나서 운동했어요." },
    { id: 243, lesson: 'Bài 5', type: 'translate', vn: "Sáng hôm qua tôi đã dậy sớm và làm bữa sáng.", kr: "어제 아침에 일찍 일어나서 아침밥을 만들었어요." },
    { id: 244, lesson: 'Bài 5', type: 'translate', vn: "Cuối tuần trước tôi đã ôn thi ở thư viện.", kr: "지난주 주말에 도서관에서 시험 공부를 했어요." },
    { id: 245, lesson: 'Bài 5', type: 'translate', vn: "Kì nghỉ trước tôi đã đi du lịch Đà Nẵng.", kr: "지난 방학에 다낭으로 여행을 갔어요." },

    // ==========================================
    // BÀI 6: QUÁ KHỨ 
    // ==========================================
    { id: 246, lesson: 'Bài 6', type: 'translate', vn: "Bạn đã gặp người bạn Việt Nam vào thứ mấy?", kr: "무슨 요일에 베트남 친구를 만났습니까?" },
    { id: 247, lesson: 'Bài 6', type: 'translate', vn: "Bạn đã xem phim tại rạp chiếu phim cùng người bạn HQ vào ngày mấy?", kr: "며칠에 한국 친구하고 같이 극장에서 영화를 봤습니까?" },
    { id: 248, lesson: 'Bài 6', type: 'translate', vn: "Hương đã gặp người bạn Hàn Quốc vào cuối tuần trước.", kr: "흐엉 씨는 지난 주말에 한국 친구를 만났습니다." },
    { id: 249, lesson: 'Bài 6', type: 'translate', vn: "Tôi đã làm bài kiểm tra vào thứ năm, ngày 20 tháng 10 năm 2021.", kr: "저는 2021년 10월 20일 목요일에 시험을 봤습니다." },
    { id: 250, lesson: 'Bài 6', type: 'translate', vn: "Vào cuối tuần trước, tôi đã đi dạo trong công viên vào buổi tối cùng em.", kr: "지난 주말 저녁에 동생하고 같이 공원에서 산책했습니다." },
	// ==========================================
// 📚 BỘ DỮ LIỆU NGỮ PHÁP SC1 (BÀI 1 - BÀI 15)
// ==========================================

    // --- BÀI 1 ---
    { id: 'g101', lesson: 'Bài 1', type: 'grammar', kr: "N + 입니다", vn: "Là... (Đuôi câu trần thuật)", note: "Là hình thức kính ngữ của '이다'. Đứng sau danh từ." },
    { id: 'g102', lesson: 'Bài 1', type: 'grammar', kr: "N + 입니까?", vn: "Là... phải không? (Đuôi câu hỏi)", note: "Dạng câu hỏi của '입니다'." },
    { id: 'g103', lesson: 'Bài 1', type: 'grammar', kr: "N + 은/는", vn: "Tiểu từ chủ đề", note: "Đứng sau N làm chủ ngữ. Có patchim + 은 / Không có patchim + 는." },

    // --- BÀI 2 ---
    { id: 'g201', lesson: 'Bài 2', type: 'grammar', kr: "이 / 그 / 저 + N", vn: "Này / Đó / Kia", note: "이 (Gần người nói), 그 (Gần người nghe), 저 (Xa cả hai). Đối với đồ vật dùng: 이것 / 그것 / 저것." },
    { id: 'g202', lesson: 'Bài 2', type: 'grammar', kr: "장소 + 에 있습니다/없습니다", vn: "Có / Không có ở...", note: "Chỉ vị trí, sự tồn tại của sự vật. (장소 = Địa điểm)." },
    { id: 'g203', lesson: 'Bài 2', type: 'grammar', kr: "N + 이/가 아닙니다", vn: "Không phải là N", note: "Phủ định của '입니다'. Có patchim + 이 아닙니다 / Không có patchim + 가 아닙니다." },

    // --- BÀI 3 ---
    { id: 'g301', lesson: 'Bài 3', type: 'grammar', kr: "V/A + ㅂ/습니다", vn: "Đuôi câu trần thuật (Kính ngữ)", note: "Có patchim + 습니다 / Không có patchim + ㅂ니다." },
    { id: 'g302', lesson: 'Bài 3', type: 'grammar', kr: "V/A + ㅂ/습니까?", vn: "Đuôi câu hỏi (Kính ngữ)", note: "Có patchim + 습니까? / Không có patchim + ㅂ니까?" },
    { id: 'g303', lesson: 'Bài 3', type: 'grammar', kr: "N + 을/를", vn: "Tiểu từ tân ngữ", note: "Đứng sau N chỉ đối tượng bị tác động. Có patchim + 을 / Không patchim + 를." },
    { id: 'g304', lesson: 'Bài 3', type: 'grammar', kr: "장소 + 에서 + V", vn: "Làm gì ở đâu", note: "Chỉ địa điểm ĐANG DIỄN RA hành động." },

    // --- BÀI 4 ---
    { id: 'g401', lesson: 'Bài 4', type: 'grammar', kr: "일, 이, 삼, 사...", vn: "Số Hán Hàn", note: "Dùng cho: Ngày, tháng, năm, số điện thoại, số tầng, số phút, tiền tệ." },
    { id: 'g402', lesson: 'Bài 4', type: 'grammar', kr: "N + 와/과 + N", vn: "Và, với (Nối danh từ)", note: "Có patchim + 과 / Không có patchim + 와." },
    { id: 'g403', lesson: 'Bài 4', type: 'grammar', kr: "시간 + 에", vn: "Vào lúc... (Thời gian)", note: "Đứng sau danh từ thời gian (Trừ 오늘, 내일, 어제, 모레, 그저께)." },

    // --- BÀI 5 ---
    { id: 'g501', lesson: 'Bài 5', type: 'grammar', kr: "하나, 둘, 셋, 넷...", vn: "Số Thuần Hàn", note: "Dùng để đếm (cái, con, người...) và chỉ Giờ. Biến đổi khi đi với danh từ đếm: 한, 두, 세, 네, 스무." },
    { id: 'g502', lesson: 'Bài 5', type: 'grammar', kr: "몇 + Danh từ đếm", vn: "Mấy, bao nhiêu", note: "Dùng để hỏi số lượng (Ví dụ: 몇 시, 몇 명...)." },
    { id: 'g503', lesson: 'Bài 5', type: 'grammar', kr: "V/A + 아/어/해요", vn: "Đuôi câu thân mật", note: "Có ㅏ, ㅗ -> 아요 / Tận cùng là 하다 -> 해요 / Còn lại -> 어요." },
    { id: 'g504', lesson: 'Bài 5', type: 'grammar', kr: "장소 + 에 가다/오다", vn: "Đi / Đến đâu", note: "Chỉ hướng di chuyển ĐẾN một địa điểm." },
    { id: 'g505', lesson: 'Bài 5', type: 'grammar', kr: "안 + V/A", vn: "Không... (Phủ định ngắn)", note: "Đứng trước động/tính từ. (Riêng với V-하다 thì chia thành: N + 안 + 하다)." },

    // --- BÀI 6 ---
    { id: 'g601', lesson: 'Bài 6', type: 'grammar', kr: "N + 하고 / (이)랑", vn: "Và, cùng với", note: "Dùng trong văn nói. (이)랑: Có patchim + 이랑 / Không patchim + 랑." },
    { id: 'g602', lesson: 'Bài 6', type: 'grammar', kr: "V + (으)ㅂ시다", vn: "Hãy cùng... (Đề nghị)", note: "Rủ rê cùng làm. Có patchim + 읍시다 / Không có patchim + ㅂ시다." },
    { id: 'g603', lesson: 'Bài 6', type: 'grammar', kr: "V/A + 았/었/였습니다", vn: "Đã... (Quá khứ)", note: "Có ㅏ,ㅗ -> 았 / 하다 -> 였(했) / Còn lại -> 었. (Thân mật: 았/었/했어요)." },

    // --- BÀI 7 ---
    { id: 'g701', lesson: 'Bài 7', type: 'grammar', kr: "N + 은/는 (So sánh)", vn: "Còn N thì...", note: "Tiểu từ mang ý nghĩa nhấn mạnh, đối chiếu, so sánh giữa 2 vế." },
    { id: 'g702', lesson: 'Bài 7', type: 'grammar', kr: "Bất quy tắc '으'", vn: "Lược bỏ '으'", note: "Khi '으' gặp nguyên âm (-아/어) -> Mất '으', chia theo nguyên âm của chữ phía trước nó." },
    { id: 'g703', lesson: 'Bài 7', type: 'grammar', kr: "V + 고 싶다", vn: "Muốn...", note: "Ngôi thứ 1, 2: -고 싶다. Ngôi thứ 3 (nói về người khác): -고 싶어 하다." },

    // --- BÀI 8 ---
    { id: 'g801', lesson: 'Bài 8', type: 'grammar', kr: "V + 겠", vn: "Sẽ... (Ý định)", note: "Thể hiện ý chí, quyết tâm mạnh mẽ của người nói." },
    { id: 'g802', lesson: 'Bài 8', type: 'grammar', kr: "V/A + 지 않다", vn: "Không... (Phủ định dài)", note: "Cùng nghĩa với '안' nhưng dùng trong hoàn cảnh trang trọng hơn." },
    { id: 'g803', lesson: 'Bài 8', type: 'grammar', kr: "V + (으)세요", vn: "Hãy... (Yêu cầu/Mệnh lệnh)", note: "Có patchim + 으세요 / Không có patchim + 세요." },

    // --- BÀI 9 ---
    { id: 'g901', lesson: 'Bài 9', type: 'grammar', kr: "N + (으)로", vn: "Về phía, hướng...", note: "Chỉ phương hướng. Có patchim + 으로 / Không patchim hoặc patchim 'ㄹ' + 로." },
    { id: 'g902', lesson: 'Bài 9', type: 'grammar', kr: "V + (으)ㄹ까요?", vn: "...Nhé? / ...Nhỉ?", note: "Hỏi ý kiến, rủ rê. Có patchim + 을까요? / Không có patchim + ㄹ까요?" },
    { id: 'g903', lesson: 'Bài 9', type: 'grammar', kr: "N + 도", vn: "Cũng...", note: "Đứng sau N. Thay thế hoàn toàn cho 은/는, 이/가, 을/를." },

    // --- BÀI 10 ---
    { id: 'g1001', lesson: 'Bài 10', type: 'grammar', kr: "N + 께서/께서는", vn: "Tiểu từ chủ ngữ (Kính ngữ)", note: "Là hình thức tôn kính của 이/가 và 은/는 (Dùng cho ông bà, bố mẹ, thầy cô...)." },
    { id: 'g1002', lesson: 'Bài 10', type: 'grammar', kr: "V/A + (으)시", vn: "Kính ngữ của Động/Tính từ", note: "Có patchim + 으시 / Không + 시. Hiện tại chia thành: -(으)십니다 / -(으)세요." },
    { id: 'g1003', lesson: 'Bài 10', type: 'grammar', kr: "N + (이)십니다/세요", vn: "Kính ngữ của '입니다'", note: "Mang nghĩa là 'Là...'. Dùng cho danh từ chỉ người bề trên." },

    // --- BÀI 11 ---
    { id: 'g1101', lesson: 'Bài 11', type: 'grammar', kr: "V/A + 고", vn: "Và, rồi, còn...", note: "Dùng để nối 2 vế câu, hoặc liệt kê hành động theo thứ tự thời gian." },
    { id: 'g1102', lesson: 'Bài 11', type: 'grammar', kr: "시간 + 부터 ~ 까지", vn: "Từ ~ Đến (Thời gian)", note: "Chỉ điểm bắt đầu và kết thúc của một khoảng thời gian." },
    { id: 'g1103', lesson: 'Bài 11', type: 'grammar', kr: "V + (으)ㄹ 겁니다/거예요", vn: "Sẽ... (Tương lai/Phỏng đoán)", note: "Có patchim + 을 겁니다 / Không có patchim + ㄹ 겁니다." },
    { id: 'g1104', lesson: 'Bài 11', type: 'grammar', kr: "Bất quy tắc 'ㅂ'", vn: "'ㅂ' biến thành '우'", note: "Khi 'ㅂ' gặp nguyên âm -> 'ㅂ' mất đi và thêm '우' (Trừ 돕다, 곱다 -> 오)." },

    // --- BÀI 12 ---
    { id: 'g1201', lesson: 'Bài 12', type: 'grammar', kr: "N + 에게/한테/께", vn: "Cho ai / Đối với ai", note: "한테: Dùng trong văn nói / 에게: Văn viết / 께: Dùng khi kính ngữ." },
    { id: 'g1202', lesson: 'Bài 12', type: 'grammar', kr: "V + (으)ㄹ래요? / (으)ㄹ게요", vn: "...Nhé? / Sẽ...", note: "ㄹ래요: Rủ rê, hỏi ý định / ㄹ게요: Hứa hẹn, quyết tâm của bản thân." },
    { id: 'g1203', lesson: 'Bài 12', type: 'grammar', kr: "못 + V (hoặc V + 지 못하다)", vn: "Không thể...", note: "Chỉ sự bất khả kháng, không có khả năng làm gì (Khác với 안 là không muốn làm)." },

    // --- BÀI 13 ---
    { id: 'g1301', lesson: 'Bài 13', type: 'grammar', kr: "V/A + 아/어서", vn: "Vì... Nên...", note: "Chỉ nguyên nhân kết quả. LƯU Ý: Vế sau KHÔNG ĐƯỢC dùng mệnh lệnh (세요), rủ rê (ㅂ시다)." },

    // --- BÀI 15 ---
    { id: 'g1501', lesson: 'Bài 15', type: 'grammar', kr: "장소 + 에서 ~ 까지", vn: "Từ ~ Đến (Địa điểm)", note: "Chỉ khoảng cách không gian từ điểm A đến điểm B." },
    { id: 'g1502', lesson: 'Bài 15', type: 'grammar', kr: "N + (으)로 (Phương tiện)", vn: "Bằng... (Phương tiện/Cách thức)", note: "Có patchim + 으로 / Không patchim hoặc kết thúc bằng 'ㄹ' + 로." },
    { id: 'g1503', lesson: 'Bài 15', type: 'grammar', kr: "V + (으)러 가다/오다", vn: "Đi / Đến để làm gì", note: "Chỉ mục đích của sự di chuyển. Có patchim + 으러 / Không có patchim + 러." },


// ==========================================
    // 📚 BÀI 1: GIỚI THIỆU (Trích từ PDF - 14 Câu)
    // ==========================================
    { id: 101, lesson: 'Bài 1', type: 'translate', vn: "1. Tôi là Nam", kr: "저는 남입니다." },
    { id: 102, lesson: 'Bài 1', type: 'translate', vn: "2. Tôi là người Hàn Quốc", kr: "저는 한국 사람입니다." },
    { id: 103, lesson: 'Bài 1', type: 'translate', vn: "3. Bạn Nam là người Việt Nam", kr: "남 씨는 베트남 사람입니다." },
    { id: 104, lesson: 'Bài 1', type: 'translate', vn: "4. Bạn Lan là người Nhật Bản", kr: "란 씨는 일본 사람입니다." },
    { id: 105, lesson: 'Bài 1', type: 'translate', vn: "5. Thầy Nam là người Thái Lan", kr: "남 선생님은 태국 사람입니다." },
    { id: 106, lesson: 'Bài 1', type: 'translate', vn: "6. Bác sỹ Kim là người Ấn Độ", kr: "김 의사 선생님은 인도 사람입니다." },
    { id: 107, lesson: 'Bài 1', type: 'translate', vn: "7. Xin chào (thân mật)! Tôi là nội trợ", kr: "안녕하세요! 저는 주부입니다." },
    { id: 108, lesson: 'Bài 1', type: 'translate', vn: "8. Xin chào (trang trọng)! Người này là người Đức", kr: "안녕하십니까! 이 사람은 독일 사람입니다." },
    { id: 109, lesson: 'Bài 1', type: 'translate', vn: "9. Người này là người Mỹ phải không? Không, tôi là người Pháp", kr: "이 사람은 미국 사람입니까? 아니요, 저는 프랑스 사람입니다." },
    { id: 110, lesson: 'Bài 1', type: 'translate', vn: "10. Bạn Nam là nhân viên công ty phải không?", kr: "남 씨는 회사원입니까?" },
    { id: 111, lesson: 'Bài 1', type: 'translate', vn: "11. Xin chào (thân mật)! Tên của tôi là Hùng", kr: "안녕하세요! 제 이름은 훙입니다." },
    { id: 112, lesson: 'Bài 1', type: 'translate', vn: "12. Hùng à, rất vui được gặp bạn~", kr: "훙 씨, 만나서 반갑습니다~" },
    { id: 113, lesson: 'Bài 1', type: 'translate', vn: "13. Bạn có phải là hướng dẫn viên du lịch không? Vâng, tôi là HDV DL", kr: "관광 가이드입니까? 네, 저는 관광 가이드입니다." },
    { id: 114, lesson: 'Bài 1', type: 'translate', vn: "14. Tôi là dược sỹ, anh trai tôi là công chức, và chị tôi là nhân viên ngân hàng", kr: "저는 약사입니다. 제 형은 공무원입니다. 그리고 제 누나는 은행원입니다." },

    // ==========================================
    // 🏫 BÀI 2: TRƯỜNG HỌC (Trích từ PDF - 35 Câu)
    // ==========================================
    { id: 201, lesson: 'Bài 2', type: 'translate', vn: "1. Xin chào! Tôi là Hoa, tôi là giáo viên", kr: "안녕하세요! 저는 호아입니다. 저는 선생님입니다." },
    { id: 202, lesson: 'Bài 2', type: 'translate', vn: "2. Người này là lái xe. Người kia không phải là lái xe", kr: "이 사람은 운전기사입니다. 저 사람은 운전기사가 아닙니다." },
    { id: 203, lesson: 'Bài 2', type: 'translate', vn: "3. Bạn Quân là người Thái Lan", kr: "꿘 씨는 태국 사람입니다." },
    { id: 204, lesson: 'Bài 2', type: 'translate', vn: "4. Tôi không phải là người Hàn Quốc", kr: "저는 한국 사람이 아닙니다." },
    { id: 205, lesson: 'Bài 2', type: 'translate', vn: "5. Hoa không phải là nhân viên công ty", kr: "호아 씨는 회사원이 아닙니다." },
    { id: 206, lesson: 'Bài 2', type: 'translate', vn: "6. Cái này không phải là cái bàn.", kr: "이것은 책상이 아닙니다." },
    { id: 207, lesson: 'Bài 2', type: 'translate', vn: "7. Cái này có ở thư viện. Không có ở bệnh viện", kr: "이것은 도서관에 있습니다. 병원에 없습니다." },
    { id: 208, lesson: 'Bài 2', type: 'translate', vn: "8. Cái kia là hộp bút. Có ở lớp học", kr: "저것은 필통입니다. 교실에 있습니다." },
    { id: 209, lesson: 'Bài 2', type: 'translate', vn: "9. Ở đây là bưu điện. Ở đây có bút và máy tính", kr: "여기는 우체국입니다. 여기에 펜하고 컴퓨터가 있습니다." },
    { id: 210, lesson: 'Bài 2', type: 'translate', vn: "10. Ở rạp chiếu phim có cửa và cửa số. Không có bảng và ghế.", kr: "극장에 문하고 창문이 있습니다. 칠판하고 의자가 없습니다." },
    { id: 211, lesson: 'Bài 2', type: 'translate', vn: "11. Ở bệnh viện có bác sỹ và dược sỹ.", kr: "병원에 의사하고 약사가 있습니다." },
    { id: 212, lesson: 'Bài 2', type: 'translate', vn: "12. Ở ngân hàng có nhân viên ngân hàng và lái xe", kr: "은행에 은행원하고 운전기사가 있습니다." },
    { id: 213, lesson: 'Bài 2', type: 'translate', vn: "13. Từ điển và cục tẩy có ở hiệu sách", kr: "사전하고 지우개가 서점에 있습니다." },
    { id: 214, lesson: 'Bài 2', type: 'translate', vn: "14. Ở văn phòng không có máy tính và bản đồ", kr: "사무실에 컴퓨터하고 지도가 없습니다." },
    { id: 215, lesson: 'Bài 2', type: 'translate', vn: "15. Bảng có ở cửa hàng bách hóa. Nhưng không có ở nhà hát.", kr: "칠판이 백화점에 있습니다. 하지만 극장에 없습니다." },
    { id: 216, lesson: 'Bài 2', type: 'translate', vn: "16. Xin chào bạn Hoa. Rất vui được gặp bạn.", kr: "호아 씨 안녕하세요. 만나서 반갑습니다." },
    { id: 217, lesson: 'Bài 2', type: 'translate', vn: "17. Người này là giáo viên tiếng Đức", kr: "이 사람은 독일어 선생님입니다." },
    { id: 218, lesson: 'Bài 2', type: 'translate', vn: "18. Người kia có phải là lái xe công ty Hàn Quốc không?", kr: "저 사람은 한국 회사 운전기사입니까?" },
    { id: 219, lesson: 'Bài 2', type: 'translate', vn: "19. Xin chào (trang trọng). Tên của tôi là Hùng", kr: "안녕하십니까. 제 이름은 훙입니다." },
    { id: 220, lesson: 'Bài 2', type: 'translate', vn: "20. Quốc tịch của tôi là Pháp", kr: "제 국적은 프랑스입니다." },
    { id: 221, lesson: 'Bài 2', type: 'translate', vn: "21. Có phải là người Nhật Bản không? Không, là người Malaysia.", kr: "일본 사람입니까? 아니요, 말레이시아 사람입니다." },
    { id: 222, lesson: 'Bài 2', type: 'translate', vn: "22. Bạn Quân là người Thái Lan. Là nhân viên ngân hàng quốc dân.", kr: "꿘 씨는 태국 사람입니다. 국민은행 은행원입니다." },
    { id: 223, lesson: 'Bài 2', type: 'translate', vn: "23. Người đó có phải là hướng dẫn viên du lịch không?", kr: "그 사람은 관광 가이드입니까?" },
    { id: 224, lesson: 'Bài 2', type: 'translate', vn: "24. Rất hân hạnh được diện kiến ngài. Tạm biệt (chào người ở lại)", kr: "처음 뵙겠습니다. 안녕히 계십시오." },
    { id: 225, lesson: 'Bài 2', type: 'translate', vn: "25. Bạn Hương có phải là người Mông Cổ không? – Không, tôi là người Philipins", kr: "흐엉 씨는 몽골 사람입니까? 아니요, 저는 필리핀 사람입니다." },
    { id: 226, lesson: 'Bài 2', type: 'translate', vn: "26. Ở phòng học lớn có nhiều từ điển", kr: "큰 교실에 사전이 많습니다." },
    { id: 227, lesson: 'Bài 2', type: 'translate', vn: "27. Đồng hồ và cặp sách không có ở ngân hàng Việt Nam", kr: "시계하고 가방이 베트남 은행에 없습니다." },
    { id: 228, lesson: 'Bài 2', type: 'translate', vn: "28. Khách sạn có cửa số nhưng không có máy vi tính", kr: "호텔에 창문이 있습니다. 하지만 컴퓨터가 없습니다." },
    { id: 229, lesson: 'Bài 2', type: 'translate', vn: "29. Ở bưu điện không có bảng. Thế á? Vậy bảng có ở đâu?", kr: "우체국에 칠판이 없습니다. 그래요? 그럼 칠판이 어디에 있습니까?" },
    { id: 230, lesson: 'Bài 2', type: 'translate', vn: "30. Ở văn phòng khoa tiếng Anh có bản đồ, cặp sách và cái bàn.", kr: "영어학과 사무실에 지도하고 가방하고 책상이 있습니다." },
    { id: 231, lesson: 'Bài 2', type: 'translate', vn: "31. Ở cửa tiệm có cái gì? Có từ điển tiếng Nhật không?", kr: "가게에 무엇이 있습니까? 일본어 사전이 있습니까?" },
    { id: 232, lesson: 'Bài 2', type: 'translate', vn: "32. Ở Hàn Quốc có nhiều cửa hàng bách hóa và sân vận động.", kr: "한국에 백화점하고 운동장이 많습니다." },
    { id: 233, lesson: 'Bài 2', type: 'translate', vn: "33. Cái này là cái gì? Cái này có ở đâu?", kr: "이것이 무엇입니까? 이것이 어디에 있습니까?" },
    { id: 234, lesson: 'Bài 2', type: 'translate', vn: "34. Cái kia có ở phòng sinh hoạt câu lạc bộ.", kr: "저것은 동아리방에 있습니다." },
    { id: 235, lesson: 'Bài 2', type: 'translate', vn: "35. Hộp bút có ở đâu? Cái đó ở bưu điện nhưng không có ở hiệu thuốc.", kr: "필통이 어디에 있습니까? 그것은 우체국에 있습니다. 하지만 약국에 없습니다." },
	// ==========================================
    // 🏃‍♂️ BÀI 3: SINH HOẠT HÀNG NGÀY (Trích từ PDF - 35 Câu)
    // ==========================================
    { id: 301, lesson: 'Bài 3', type: 'translate', vn: "1. Bố tôi tập thể dục ở nhà", kr: "제 아버지는 집에서 운동합니다." },
    { id: 302, lesson: 'Bài 3', type: 'translate', vn: "2. Mai mua cà phê ở cửa hàng bách hóa", kr: "마이 씨는 백화점에서 커피를 삽니다." },
    { id: 303, lesson: 'Bài 3', type: 'translate', vn: "3. Quân làm việc ở công ty Hàn Quốc", kr: "꿘 씨는 한국 회사에서 일합니다." },
    { id: 304, lesson: 'Bài 3', type: 'translate', vn: "4. Chị gái tôi xem phim ở rạp chiếu phim", kr: "제 누나는 극장에서 영화를 봅니다." },
    { id: 305, lesson: 'Bài 3', type: 'translate', vn: "5. Tôi nghe tiếng Hàn", kr: "저는 한국어를 듣습니다." },
    { id: 306, lesson: 'Bài 3', type: 'translate', vn: "6. Cô giáo mua sách tiếng Anh ở thư viện", kr: "선생님은 도서관에서 영어 책을 삽니다." },
    { id: 307, lesson: 'Bài 3', type: 'translate', vn: "7. Lan mua sắm ở cửa hàng bách hóa", kr: "란 씨는 백화점에서 쇼핑합니다." },
    { id: 308, lesson: 'Bài 3', type: 'translate', vn: "8. Ông tôi xem thời sự ở bưu điện", kr: "제 할아버지는 우체국에서 뉴스를 봅니다." },
    { id: 309, lesson: 'Bài 3', type: 'translate', vn: "9. Thầy giáo tiếng Hàn của tôi thích phim Trung Quốc", kr: "제 한국어 선생님은 중국 영화를 좋아합니다." },
    { id: 310, lesson: 'Bài 3', type: 'translate', vn: "10. Châu mua bánh mì ở văn phòng", kr: "쩌우 씨는 사무실에서 빵을 삽니다." },
    { id: 311, lesson: 'Bài 3', type: 'translate', vn: "11. Duẩn và Tuấn Anh uống bia ở nhà ăn học sinh", kr: "준 씨하고 뚜언아인 씨는 학생 식당에서 맥주를 마십니다." },
    { id: 312, lesson: 'Bài 3', type: 'translate', vn: "12. Huệ ăn kim chi trong lớp học", kr: "후에 씨는 교실에서 김치를 먹습니다." },
    { id: 313, lesson: 'Bài 3', type: 'translate', vn: "13. Bố của Trang gặp bạn ở nhà hàng Pháp", kr: "짱 씨의 아버지는 프랑스 식당에서 친구를 만납니다." },
    { id: 314, lesson: 'Bài 3', type: 'translate', vn: "14. Mẹ tôi thích trà nhưng tôi ghét trà", kr: "제 어머니는 차를 좋아합니다. 하지만 저는 차를 싫어합니다." },
    { id: 315, lesson: 'Bài 3', type: 'translate', vn: "15. Tôi học bài ở văn phòng công ty", kr: "저는 회사 사무실에서 공부합니다." },
    { id: 316, lesson: 'Bài 3', type: 'translate', vn: "16. Trang mua táo ở chợ", kr: "짱 씨는 시장에서 사과를 삽니다." },
    { id: 317, lesson: 'Bài 3', type: 'translate', vn: "17. Bố tôi ghét cơm Ấn Độ", kr: "제 아버지는 인도 밥을 싫어합니다." },
    { id: 318, lesson: 'Bài 3', type: 'translate', vn: "18. Bố tôi làm việc ở cửa hàng bách hóa", kr: "제 아버지는 백화점에서 일합니다." },
    { id: 319, lesson: 'Bài 3', type: 'translate', vn: "19. Trung bơi ở Đà Nẵng", kr: "쭝 씨는 다낭에서 수영합니다." },
    { id: 320, lesson: 'Bài 3', type: 'translate', vn: "20. Lan học tiếng Hàn Quốc ở trung tâm TOHO", kr: "란 씨는 토호 센터에서 한국어를 공부합니다." },
    { id: 321, lesson: 'Bài 3', type: 'translate', vn: "21. Lan mua nhiều táo ở chợ", kr: "란 씨는 시장에서 사과를 많이 삽니다." },
    { id: 322, lesson: 'Bài 3', type: 'translate', vn: "22. Bố nói chuyện với mẹ ở bếp", kr: "아버지는 부엌에서 어머니하고 이야기합니다." },
    { id: 323, lesson: 'Bài 3', type: 'translate', vn: "23. Bộ phim này hay", kr: "이 영화는 재미있습니다." },
    { id: 324, lesson: 'Bài 3', type: 'translate', vn: "24. Cái váy kia rất tốt.", kr: "저 치마는 아주 좋습니다." },
    { id: 325, lesson: 'Bài 3', type: 'translate', vn: "25. Em bé ngủ ở văn phòng khoa tiếng Anh", kr: "아기는 영어학과 사무실에서 잡니다." },
    { id: 326, lesson: 'Bài 3', type: 'translate', vn: "26. Âm nhạc Hàn Quốc rất thú vị", kr: "한국 음악은 아주 재미있습니다." },
    { id: 327, lesson: 'Bài 3', type: 'translate', vn: "27. Lan nghỉ ngơi ở phòng sinh hoạt câu lạc bộ", kr: "란 씨는 동아리방에서 쉽니다." },
    { id: 328, lesson: 'Bài 3', type: 'translate', vn: "28. Giáo viên tiếng Đức gặp bạn Hàn Quốc ở sân vận động", kr: "독일어 선생님은 운동장에서 한국 친구를 만납니다." },
    { id: 329, lesson: 'Bài 3', type: 'translate', vn: "29. Nhân viên ngân hàng kia nói chuyện ở quán cà phê", kr: "저 은행원은 커피숍에서 이야기합니다." },
    { id: 330, lesson: 'Bài 3', type: 'translate', vn: "30. Tôi đọc sách tiếng Pháp ở thư viện", kr: "저는 도서관에서 프랑스어 책을 읽습니다." },
    { id: 331, lesson: 'Bài 3', type: 'translate', vn: "31. Nam luyện tập thể thao ở công viên", kr: "남 씨는 공원에서 운동합니다." },
    { id: 332, lesson: 'Bài 3', type: 'translate', vn: "32. Ngôi nhà của tôi hơi nhỏ. Nhưng rất tốt.", kr: "제 집은 조금 작습니다. 하지만 아주 좋습니다." },
    { id: 333, lesson: 'Bài 3', type: 'translate', vn: "33. Tôi thích bánh mì. Và em tôi thích sữa.", kr: "저는 빵을 좋아합니다. 그리고 제 동생은 우유를 좋아합니다." },
    { id: 334, lesson: 'Bài 3', type: 'translate', vn: "34. Cô Lan làm gì ở chợ? -> Cô Lan mua báo và trà", kr: "란 선생님은 시장에서 무엇을 합니까? 란 선생님은 신문하고 차를 삽니다." },
    { id: 335, lesson: 'Bài 3', type: 'translate', vn: "35. Bạn Nam nghe nhạc ở đâu? -> Nam nghe nhạc ở bưu điện.", kr: "남 씨는 어디에서 음악을 듣습니까? 남 씨는 우체국에서 음악을 듣습니다." },

    // ==========================================
    // 🕒 BÀI 4: NGÀY VÀ THỨ (Trích từ PDF - Phần 1: 15 Câu)
    // ==========================================
    { id: 401, lesson: 'Bài 4', type: 'translate', vn: "1. Hôm nay là ngày 23 tháng 8", kr: "오늘은 팔월 이십삼일입니다." },
    { id: 402, lesson: 'Bài 4', type: 'translate', vn: "2. Hôm nay là ngày 18 tháng 3 năm 2017", kr: "오늘은 이천십칠 년 삼월 십팔일입니다." },
    { id: 403, lesson: 'Bài 4', type: 'translate', vn: "3. Hôm qua là thứ 4", kr: "어제는 수요일이었습니다." },
    { id: 404, lesson: 'Bài 4', type: 'translate', vn: "4. Thứ 4 ngày 23 tháng 2 là hôm kia", kr: "이월 이십삼일 수요일은 그저께입니다." },
    { id: 405, lesson: 'Bài 4', type: 'translate', vn: "5. Kí túc xá ở tầng 3", kr: "기숙사는 삼 층에 있습니다." },
    { id: 406, lesson: 'Bài 4', type: 'translate', vn: "6. Số điện thoại của tôi là 0984754854", kr: "제 전화번호는 공구팔사칠오사팔오사입니다." },
    { id: 407, lesson: 'Bài 4', type: 'translate', vn: "7. Rạp chiếu phim ở tầng mấy?", kr: "극장은 몇 층에 있습니까?" },
    { id: 408, lesson: 'Bài 4', type: 'translate', vn: "8. Tôi học tiếng Hàn vào thứ 3 và thứ 5", kr: "저는 화요일하고 목요일에 한국어를 공부합니다." },
    { id: 409, lesson: 'Bài 4', type: 'translate', vn: "9. Giá của cái bàn này là 413200 won", kr: "이 책상 가격은 사십일만 삼천이백 원입니다." },
    { id: 410, lesson: 'Bài 4', type: 'translate', vn: "10. Bao giờ đi thi tiếng Việt?", kr: "언제 베트남어 시험을 봅니까?" },
    { id: 411, lesson: 'Bài 4', type: 'translate', vn: "11. Sinh nhật là ngày mấy?", kr: "생일이 며칠입니까?" },
    { id: 412, lesson: 'Bài 4', type: 'translate', vn: "12. Sinh nhật của tôi là ngày 27 tháng 7", kr: "제 생일은 칠월 이십칠일입니다." },
    { id: 413, lesson: 'Bài 4', type: 'translate', vn: "13. Giá của cái cục tẩy này là 15 000 nghìn đồng", kr: "이 지우개 가격은 만 오천 동입니다." },
    { id: 414, lesson: 'Bài 4', type: 'translate', vn: "14. Hôm kia là ngày mấy?", kr: "그저께는 며칠이었습니까?" },
    { id: 415, lesson: 'Bài 4', type: 'translate', vn: "15. Ngày 19 tháng 8 là thứ mấy?", kr: "팔월 십구일은 무슨 요일입니까?" },

    // ==========================================
    // 🕒 BÀI 4: NGÀY VÀ THỨ (Trích từ PDF - Phần 2: 25 Câu)
    // ==========================================
    { id: 416, lesson: 'Bài 4', type: 'translate', vn: "1. Mai đến nhà của Trang hôm qua", kr: "어제 마이 씨는 짱 씨의 집에 왔습니다." },
    { id: 417, lesson: 'Bài 4', type: 'translate', vn: "2. Châu mua sữa và bánh kem ở cửa hàng bách hóa", kr: "쩌우 씨는 백화점에서 우유하고 케이크를 삽니다." },
    { id: 418, lesson: 'Bài 4', type: 'translate', vn: "3. Nam gặp bạn Hàn Quốc ở văn phòng khoa tiếng Ấn Độ", kr: "남 씨는 인도어학과 사무실에서 한국 친구를 만납니다." },
    { id: 419, lesson: 'Bài 4', type: 'translate', vn: "4. Quân học toán ở trung tâm ngoại ngữ TOHO", kr: "꿘 씨는 토호 외국어 센터에서 수학을 공부합니다." },
    { id: 420, lesson: 'Bài 4', type: 'translate', vn: "5. Mẹ tôi mua thịt gà ở chợ", kr: "제 어머니는 시장에서 닭고기를 삽니다." },
    { id: 421, lesson: 'Bài 4', type: 'translate', vn: "6. Chị tôi gặp giám đốc của công ty SM tại văn phòng vào thứ 6 tuần này", kr: "이번 주 금요일에 제 언니는 사무실에서 SM 회사 사장님을 만납니다." },
    { id: 422, lesson: 'Bài 4', type: 'translate', vn: "7. Các bạn ăn nhiều đồ ăn ở nhà hàng Thái này", kr: "여러분은 이 태국 식당에서 음식을 많이 먹습니다." },
    { id: 423, lesson: 'Bài 4', type: 'translate', vn: "8. Bạn trai của tôi rất thích phim và bài hát Trung Quốc", kr: "제 남자친구는 중국 영화하고 노래를 아주 좋아합니다." },
    { id: 424, lesson: 'Bài 4', type: 'translate', vn: "9. Bố của Tú làm việc ở ngân hàng ACB vào năm sau", kr: "뚜 씨의 아버지는 내년에 ACB 은행에서 일합니다." },
    { id: 425, lesson: 'Bài 4', type: 'translate', vn: "10. Hôm nay Trung nghe đài ở nhà vệ sinh", kr: "오늘 쭝 씨는 화장실에서 라디오를 듣습니다." },
    { id: 426, lesson: 'Bài 4', type: 'translate', vn: "11. Huệ là bạn gái của Trung. Bạn ấy đi chợ một mình", kr: "후에 씨는 쭝 씨의 여자친구입니다. 혼자 시장에 갑니다." },
    { id: 427, lesson: 'Bài 4', type: 'translate', vn: "12. Ông của tôi rất thích trà xanh. Hôm qua ông mua trà ở chợ.", kr: "제 할아버지는 녹차를 아주 좋아합니다. 어제 할아버지는 시장에서 차를 샀습니다." },
    { id: 428, lesson: 'Bài 4', type: 'translate', vn: "13. Hôm nay là ngày 17 tháng 10. Là ngày sinh nhật của Nam.", kr: "오늘은 시월 십칠일입니다. 남 씨의 생일입니다." },
    { id: 429, lesson: 'Bài 4', type: 'translate', vn: "14. Cô giáo tiếng Hàn của chúng tôi cho nhiều bài tập về nhà.", kr: "우리 한국어 선생님은 숙제를 많이 줍니다." },
    { id: 430, lesson: 'Bài 4', type: 'translate', vn: "15. Hôm kia tâm trạng của Lan rất tốt. Nhưng hôm nay thì lại tồi tệ.", kr: "그저께 란 씨의 기분이 아주 좋았습니다. 하지만 오늘은 나쁩니다." },
    { id: 431, lesson: 'Bài 4', type: 'translate', vn: "16. Âm nhạc Hàn Quốc rất thú vị. Năm ngoái tôi nghe nhiều nhạc Hàn.", kr: "한국 음악은 아주 재미있습니다. 작년에 저는 한국 음악을 많이 들었습니다." },
    { id: 432, lesson: 'Bài 4', type: 'translate', vn: "17. Văn phòng và hiệu sách ở tầng 9. Tầng 8 là phòng học toán", kr: "사무실하고 서점은 구 층에 있습니다. 팔 층은 수학 교실입니다." },
    { id: 433, lesson: 'Bài 4', type: 'translate', vn: "18. Số điện thoại của ông của thầy Kim là 0913257496", kr: "김 선생님 할아버지의 전화번호는 공구일삼의 이오칠에 사구육입니다." },
    { id: 434, lesson: 'Bài 4', type: 'translate', vn: "19. Tuần này của tháng sau chúng tôi sẽ đi du lịch tới Phillips", kr: "다음 달 이번 주에 우리는 필리핀에 여행을 갑니다." },
    { id: 435, lesson: 'Bài 4', type: 'translate', vn: "20. Tháng sau của năm ngoái tôi đang ở biển Jeju", kr: "작년 다음 달에 저는 제주 바다에 있었습니다." },
    { id: 436, lesson: 'Bài 4', type: 'translate', vn: "21. Ngày này tuần sau là ngày mấy? – Là ngày 14 tháng 1", kr: "다음 주 이 날은 며칠입니까? 일월 십사일입니다." },
    { id: 437, lesson: 'Bài 4', type: 'translate', vn: "22. Hôm kia bạn Hoa làm gì? Tôi ôn thi", kr: "그저께 호아 씨는 무엇을 했습니까? 저는 시험을 준비했습니다." },
    { id: 438, lesson: 'Bài 4', type: 'translate', vn: "23. Thứ bảy tuần sau là cuối tuần. Tôi gặp Yuchin ở quán cà phê.", kr: "다음 주 토요일은 주말입니다. 저는 커피숍에서 유진 씨를 만납니다." },
    { id: 439, lesson: 'Bài 4', type: 'translate', vn: "24. Ngày 11 tháng 8 là thứ 6. Chúng tôi tổ chức tiệc sinh nhật ở nhà Yuchin", kr: "팔월 십일일은 금요일입니다. 우리는 유진 씨의 집에서 생일 파티를 합니다." },
    { id: 440, lesson: 'Bài 4', type: 'translate', vn: "25. Thứ 7 tuần này chúng tôi nghỉ ngơi ở phòng nghỉ của trường ĐH Soeul.", kr: "이번 주 토요일에 우리는 서울대학교 휴게실에서 쉽니다." },
	// ==========================================
    // ☀️ BÀI 5: THỜI GIAN (Trích từ PDF - 32 Câu)
    // ==========================================
    { id: 501, lesson: 'Bài 5', type: 'translate', vn: "1. Lan thức dậy vào 7h sáng mỗi ngày", kr: "란 씨는 매일 아침 일곱 시에 일어납니다." },
    { id: 502, lesson: 'Bài 5', type: 'translate', vn: "2. Hôm nay tôi không có tiết học. Vì vậy tôi không tới trường", kr: "오늘 저는 수업이 없습니다. 그래서 학교에 안 갑니다." },
    { id: 503, lesson: 'Bài 5', type: 'translate', vn: "3. Bố của Quân là người Hàn Quốc. Sáng mai đến Việt Nam.", kr: "꿘 씨의 아버지는 한국 사람입니다. 내일 아침에 베트남에 옵니다." },
    { id: 504, lesson: 'Bài 5', type: 'translate', vn: "4. Sáng nay Tuân không tập thể dục ở sân vận động cùng các bạn", kr: "오늘 아침에 뚜언 씨는 친구들하고 운동장에서 운동을 안 합니다." },
    { id: 505, lesson: 'Bài 5', type: 'translate', vn: "5. Hôm nay Mai không nhận điện thoại của Nam", kr: "오늘 마이 씨는 남 씨의 전화를 안 받습니다." },
    { id: 506, lesson: 'Bài 5', type: 'translate', vn: "6. Trung không mua táo và dưa hấu ở chợ", kr: "쭝 씨는 시장에서 사과하고 수박을 안 삽니다." },
    { id: 507, lesson: 'Bài 5', type: 'translate', vn: "7. Sáng nay tâm trạng của Hoa không tốt", kr: "오늘 아침에 호아 씨의 기분이 안 좋습니다." },
    { id: 508, lesson: 'Bài 5', type: 'translate', vn: "8. Chúng tôi có tiết học Đọc vào lúc 9h15 sáng thứ 3 tuần này", kr: "우리는 이번 주 화요일 오전 아홉 시 십오 분에 읽기 수업이 있습니다." },
    { id: 509, lesson: 'Bài 5', type: 'translate', vn: "9. Hoa đến trường lúc 8h sáng. Người bạn này học Toán lúc 8h15", kr: "호아 씨는 아침 여덟 시에 학교에 갑니다. 이 친구는 여덟 시 십오 분에 수학을 공부합니다." },
    { id: 510, lesson: 'Bài 5', type: 'translate', vn: "10. Em bé của cô giáo tiếng Hàn ngủ lúc 10h30 đêm", kr: "한국어 선생님의 아기는 밤 열 시 반에 잡니다." },
    { id: 511, lesson: 'Bài 5', type: 'translate', vn: "11. Anh trai tôi là bác sỹ của khoa nhi", kr: "제 형은 소아과 의사입니다." },
    { id: 512, lesson: 'Bài 5', type: 'translate', vn: "12. Vào cuối tuần Mai không làm thêm ở nhà hàng Đức", kr: "주말에 마이 씨는 독일 식당에서 아르바이트를 안 합니다." },
    { id: 513, lesson: 'Bài 5', type: 'translate', vn: "13. Hôm qua tôi đã mua 2 con gà và 3 con cá ở chợ", kr: "어제 저는 시장에서 닭 두 마리하고 물고기 세 마리를 샀습니다." },
    { id: 514, lesson: 'Bài 5', type: 'translate', vn: "14. Hôm nay Mai đi tới siêu thị cùng các bạn", kr: "오늘 마이 씨는 친구들하고 같이 슈퍼마켓에 갑니다." },
    { id: 515, lesson: 'Bài 5', type: 'translate', vn: "15. Váy của Hà rất nhỏ", kr: "하 씨의 치마는 아주 작습니다." },
    { id: 516, lesson: 'Bài 5', type: 'translate', vn: "16. Bộ phim Trung Quốc này rất hay", kr: "이 중국 영화는 아주 재미있습니다." },
    { id: 517, lesson: 'Bài 5', type: 'translate', vn: "17. Thứ 6 bạn Mai làm gì ở bưu điện?", kr: "금요일에 마이 씨는 우체국에서 무엇을 합니까?" },
    { id: 518, lesson: 'Bài 5', type: 'translate', vn: "18. Giáo viên tiếng Hàn bao giờ đi du lịch?", kr: "한국어 선생님은 언제 여행을 갑니까?" },
    { id: 519, lesson: 'Bài 5', type: 'translate', vn: "19. Lái xe Đức đi đâu thế? – Đi tới Pháp", kr: "독일 기사님은 어디에 갑니까? 프랑스에 갑니다." },
    { id: 520, lesson: 'Bài 5', type: 'translate', vn: "20. Bao giờ chúng ta chụp ảnh? Cuối tuần này ở trường chụp ảnh cùng nhau.", kr: "우리는 언제 사진을 찍습니까? 이번 주말에 학교에서 같이 사진을 찍습니다." },
    { id: 521, lesson: 'Bài 5', type: 'translate', vn: "21. Hôm nay không phải là cuối tuần", kr: "오늘은 주말이 아닙니다." },
    { id: 522, lesson: 'Bài 5', type: 'translate', vn: "22. Tuân đến trường vào lúc 8h sáng. Trâm nghe tiếng Hàn lúc 9h36", kr: "뚜언 씨는 아침 여덟 시에 학교에 갑니다. 쩜 씨는 아홉 시 삼십육 분에 한국어를 듣습니다." },
    { id: 523, lesson: 'Bài 5', type: 'translate', vn: "23. Em gái của Nam không viết nhật kí", kr: "남 씨의 여동생은 일기를 안 씁니다." },
    { id: 524, lesson: 'Bài 5', type: 'translate', vn: "24. Cái này không phải là bài tập cuối tuần. Là món quà sinh nhật.", kr: "이것은 주말 숙제가 아닙니다. 생일 선물입니다." },
    { id: 525, lesson: 'Bài 5', type: 'translate', vn: "25. Tuyết làm gì ở phòng sinh hoạt câu lạc bộ? Tuyết gặp giám đốc của công ty YG ở đó.", kr: "뚜옛 씨는 동아리방에서 무엇을 합니까? 거기에서 YG 회사 사장님을 만납니다." },
    { id: 526, lesson: 'Bài 5', type: 'translate', vn: "26. Bây giờ là mấy giờ ? - Bây giờ là 6 giờ rưỡi", kr: "지금 몇 시입니까? 지금은 여섯 시 반입니다." },
    { id: 527, lesson: 'Bài 5', type: 'translate', vn: "27. Lúc nãy Lan học tiếng Hàn lúc mấy giờ? – Lúc 7h 35", kr: "아까 란 씨는 몇 시에 한국어를 공부했습니까? 일곱 시 삼십오 분에 공부했습니다." },
    { id: 528, lesson: 'Bài 5', type: 'translate', vn: "28. Năm nay cậu mấy tuổi? – 28 tuổi", kr: "올해 몇 살입니까? 스물여덟 살입니다." },
    { id: 529, lesson: 'Bài 5', type: 'translate', vn: "29. Có mấy học sinh trong phòng học? – Có 7 học sinh", kr: "교실에 학생이 몇 명 있습니까? 일곱 명 있습니다." },
    { id: 530, lesson: 'Bài 5', type: 'translate', vn: "30. Ở bệnh viện có mấy bác sĩ? – Có 13 bác sỹ", kr: "병원에 의사가 몇 명 있습니까? 열세 명 있습니다." },
    { id: 531, lesson: 'Bài 5', type: 'translate', vn: "31. Năm sau Lan bao nhiêu tuổi? – 29 tuổi", kr: "내년에 란 씨는 몇 살입니까? 스물아홉 살입니다." },
    { id: 532, lesson: 'Bài 5', type: 'translate', vn: "32. Năm ngoái em trai của Nam bao nhiêu tuổi?- 12 tuổi", kr: "작년에 남 씨의 남동생은 몇 살이었습니까? 열두 살이었습니다." },

    // ==========================================
    // 🏕️ BÀI 6: CUỐI TUẦN (Trích từ PDF - 15 Câu)
    // ==========================================
    { id: 601, lesson: 'Bài 6', type: 'translate', vn: "1. Thầy giáo tiếng Úc đã nấu ăn ở nhà tôi hôm qua", kr: "호주어 선생님은 어제 제 집에서 요리했습니다." },
    { id: 602, lesson: 'Bài 6', type: 'translate', vn: "2. Hôm kia mẹ tôi đã rất mệt", kr: "그저께 제 어머니는 아주 피곤했습니다." },
    { id: 603, lesson: 'Bài 6', type: 'translate', vn: "3. Cuối tuần trước chúng tôi đã đi dã ngoại tới núi Namsan", kr: "지난 주말에 우리는 남산에 소풍을 갔습니다." },
    { id: 604, lesson: 'Bài 6', type: 'translate', vn: "4. Vào sinh nhật năm ngoái, em trai tôi đã nhận được một cuốn từ điển", kr: "작년 생일에 제 남동생은 사전 한 권을 받았습니다." },
    { id: 605, lesson: 'Bài 6', type: 'translate', vn: "5. Hôm kia là ngày Tết. Mọi người đã nhảy múa", kr: "그저께는 설날이었습니다. 사람들이 춤을 췄습니다." },
    { id: 606, lesson: 'Bài 6', type: 'translate', vn: "6. Chị gái tôi đã ăn ngoài với giám đốc ở nhà hàng Úc", kr: "제 누나는 호주 식당에서 사장님하고 외식했습니다." },
    { id: 607, lesson: 'Bài 6', type: 'translate', vn: "7. Ngày mai chúng ta cùng nhau làm bài tập toán ở thư viện đi~", kr: "내일 도서관에서 같이 수학 숙제를 합시다~" },
    { id: 608, lesson: 'Bài 6', type: 'translate', vn: "8. Vào thứ năm tuần trước Mai đã thi nói tiếng Pháp", kr: "지난 주 목요일에 마이 씨는 프랑스어 말하기 시험을 봤습니다." },
    { id: 609, lesson: 'Bài 6', type: 'translate', vn: "9. Ngày 18 tháng 7 năm 1997 là sinh nhật mẹ tôi. Tôi đã tặng quà", kr: "천구백구십칠 년 칠월 십팔일은 제 어머니의 생일이었습니다. 저는 선물을 주었습니다." },
    { id: 610, lesson: 'Bài 6', type: 'translate', vn: "10. Bạn Tuấn nói tiếng Hàn giỏi. Cùng bạn ấy luyện tập hội thoại đi~", kr: "뚜언 씨는 한국어를 잘합니다. 그 친구하고 같이 회화를 연습합시다~" },
    { id: 611, lesson: 'Bài 6', type: 'translate', vn: "11. Tôi không thích ăn thịt nướng. Tôi cũng ghét cả thịt ba chỉ", kr: "저는 불고기를 안 좋아합니다. 삼겹살도 싫어합니다." },
    { id: 612, lesson: 'Bài 6', type: 'translate', vn: "12. Ở tầng 8 có bao nhiêu con mèo. Có 7 con mèo và 8 con chó", kr: "팔 층에 고양이가 몇 마리 있습니까? 고양이 일곱 마리하고 개 여덟 마리가 있습니다." },
    { id: 613, lesson: 'Bài 6', type: 'translate', vn: "13. Ôi! Buồn ngủ quá. Hôm qua tớ đã ngủ từ 2h sáng sớm", kr: "아! 아주 졸립니다. 어제 저는 새벽 두 시부터 잤습니다." },
    { id: 614, lesson: 'Bài 6', type: 'translate', vn: "14. Hôm qua là thứ mấy? Đã là chủ nhật", kr: "어제는 무슨 요일이었습니까? 일요일이었습니다." },
    { id: 615, lesson: 'Bài 6', type: 'translate', vn: "15. Số điện thoại của thầy tiếng Việt là gì? Là 0175626358", kr: "베트남어 선생님의 전화번호가 무엇입니까? 공일칠의 오육이에 육삼오팔입니다." },
	// ==========================================
    // 🛒 BÀI 7: MUA SẮM (Trích từ PDF - 13 Câu)
    // ==========================================
    { id: 701, lesson: 'Bài 7', type: 'translate', vn: "1. Anh tôi thì xấu. Và tôi thì đẹp.", kr: "제 형은 못생겼습니다. 그리고 저는 예쁩니다." },
    { id: 702, lesson: 'Bài 7', type: 'translate', vn: "2. Hôm qua tôi đã xem phim Hàn Quốc với giáo viên tiếng Hàn. Bộ phim đã rất buồn.", kr: "어제 저는 한국어 선생님하고 한국 영화를 봤습니다. 영화가 아주 슬펐습니다." },
    { id: 703, lesson: 'Bài 7', type: 'translate', vn: "3. Vào sinh nhật năm ngoái tôi đã nhận được nhiều quà", kr: "작년 생일에 선물을 많이 받았습니다." },
    { id: 704, lesson: 'Bài 7', type: 'translate', vn: "4. Thím ơi, cháu muốn mua 2 con mèo. Những con mèo xinh quá!", kr: "아주머니, 저는 고양이 두 마리를 사고 싶습니다. 고양이가 너무 예쁩니다!" },
    { id: 705, lesson: 'Bài 7', type: 'translate', vn: "5. Hôm qua mẹ tôi đã rất bận. Vì vậy tôi đã đi chợ. Tôi đã mua rau và thịt gà", kr: "어제 제 어머니는 아주 바빴습니다. 그래서 저는 시장에 갔습니다. 채소하고 닭고기를 샀습니다." },
    { id: 706, lesson: 'Bài 7', type: 'translate', vn: "6. Hoa ơi, cậu muốn ăn gì vào bữa tối? Tớ muốn ăn mỳ và kim chi", kr: "호아 씨, 저녁에 무엇을 먹고 싶습니까? 저는 라면하고 김치를 먹고 싶습니다." },
    { id: 707, lesson: 'Bài 7', type: 'translate', vn: "7. Ôi! Tớ đói bụng quá đi! Tới căng tin ăn cơm với thịt đi!", kr: "아! 배가 너무 고픕니다! 식당에 가서 고기하고 밥을 먹읍시다!" },
    { id: 708, lesson: 'Bài 7', type: 'translate', vn: "8. Sau này cậu muốn làm gì? Tớ muốn làm việc ở công ty HQ.", kr: "나중에 무엇을 하고 싶습니까? 저는 한국 회사에서 일하고 싶습니다." },
    { id: 709, lesson: 'Bài 7', type: 'translate', vn: "9. Mọi người ơi, chụp ảnh đi! Tớ có 2 cái máy ảnh", kr: "여러분, 사진을 찍읍시다! 저는 카메라가 두 대 있습니다." },
    { id: 710, lesson: 'Bài 7', type: 'translate', vn: "10. Chú ơi, bạn cháu muốn mua 7 cái kem. Bao nhiêu ạ?", kr: "아저씨, 제 친구가 아이스크림 일곱 개를 사고 싶어 합니다. 얼마입니까?" },
    { id: 711, lesson: 'Bài 7', type: 'translate', vn: "11. Giá của 7 cái camera là 1tr800 hả? Đắt quá, giảm giá đi!", kr: "카메라 일곱 대 가격이 백팔십만 동입니까? 아주 비쌉니다. 깎아 주세요!" },
    { id: 712, lesson: 'Bài 7', type: 'translate', vn: "12. Vào sinh nhật của tớ tớ muốn nhận 2 cái đĩa CD Hàn quốc", kr: "제 생일에 한국 CD 두 장을 받고 싶습니다." },
    { id: 713, lesson: 'Bài 7', type: 'translate', vn: "13. Bạn trai tôi thì muốn ăn tối ở nhà hàng Pháp. Còn mẹ tôi thì lại muốn tới nhà hàng Mông Cổ.", kr: "제 남자친구는 프랑스 식당에서 저녁을 먹고 싶어 합니다. 그리고 제 어머니는 몽골 식당에 가고 싶어 하십니다." },

    // ==========================================
    // 🍲 BÀI 8: ĐỒ ĂN (Trích từ PDF - 25 Câu)
    // ==========================================
    { id: 801, lesson: 'Bài 8', type: 'translate', vn: "1. Món cơm trộn hơi mặn. Nhưng giá thì rẻ.", kr: "비빔밥이 조금 짭니다. 하지만 가격은 쌉니다." },
    { id: 802, lesson: 'Bài 8', type: 'translate', vn: "2. Món mì lạnh này đến từ Hàn Quốc. Hãy ăn thật ngon nhé~", kr: "이 냉면은 한국에서 왔습니다. 맛있게 드세요~" },
    { id: 803, lesson: 'Bài 8', type: 'translate', vn: "3. Tôi thì thích súp sườn bò. Mẹ thì muốn ăn cơm rang", kr: "저는 갈비탕을 좋아합니다. 어머니는 볶음밥을 먹고 싶어 하십니다." },
    { id: 804, lesson: 'Bài 8', type: 'translate', vn: "4. Hãy cho tôi hóa đơn. Tôi sẽ tính tiền", kr: "영수증을 주세요. 제가 계산하겠습니다." },
    { id: 805, lesson: 'Bài 8', type: 'translate', vn: "5. Ở đây là chỗ cấm hút thuốc lá. Hãy vào nhà vệ sinh đi", kr: "여기는 금연 구역입니다. 화장실에 가세요." },
    { id: 806, lesson: 'Bài 8', type: 'translate', vn: "6. Ở nhà hàng này có gì ngon nhỉ? Món thịt ba chỉ và kim chi rất ngon. Và canh tương thì hơi cay một chút.", kr: "이 식당에 무엇이 맛있습니까? 삼겹살하고 김치가 아주 맛있습니다. 그리고 된장찌개는 조금 맵습니다." },
    { id: 807, lesson: 'Bài 8', type: 'translate', vn: "7. Người phục vụ, tôi muốn gọi món. Hãy cho tôi 2 thịt ba chỉ nướng và 1 bulgogi.", kr: "여기요, 주문하고 싶습니다. 삼겹살 이 인분하고 불고기 일 인분 주세요." },
    { id: 808, lesson: 'Bài 8', type: 'translate', vn: "8. Đồ ăn Hàn Quốc không ngon. Vì vậy tôi không ăn kim chi. Cũng không muốn ăn cả mì gói.", kr: "한국 음식은 맛없습니다. 그래서 저는 김치를 안 먹습니다. 라면도 먹고 싶지 않습니다." },
    { id: 809, lesson: 'Bài 8', type: 'translate', vn: "9. Vào buổi tối cuối tuần này tôi sẽ cùng vợ ăn bún và cơm trộn.", kr: "이번 주말 저녁에 저는 아내하고 같이 쌀국수하고 비빔밥을 먹겠습니다." },
    { id: 810, lesson: 'Bài 8', type: 'translate', vn: "10. Bạn gái tôi không thích đồ ăn Nhật Bản. Do đó hãy mua đồ ăn Việt Nam", kr: "제 여자친구는 일본 음식을 안 좋아합니다. 그러니까 베트남 음식을 사세요." },
    { id: 811, lesson: 'Bài 8', type: 'translate', vn: "11. Hãy học tiếng Hàn thật chăm chỉ", kr: "한국어를 열심히 공부하세요." },
    { id: 812, lesson: 'Bài 8', type: 'translate', vn: "12. Xin mời ngồi. Mời bạn uống nước~", kr: "앉으세요. 물을 마시세요~" },
    { id: 813, lesson: 'Bài 8', type: 'translate', vn: "13. Hãy chờ một chút.", kr: "조금 기다리세요." },
    { id: 814, lesson: 'Bài 8', type: 'translate', vn: "14. Hãy tập thể dục thường xuyên", kr: "자주 운동하세요." },
    { id: 815, lesson: 'Bài 8', type: 'translate', vn: "15. Hãy cho tôi 4 con cá và 3 con gà", kr: "물고기 네 마리하고 닭 세 마리를 주세요." },
    { id: 816, lesson: 'Bài 8', type: 'translate', vn: "16. Hãy tới nhà tôi vào cuối tuần này", kr: "이번 주말에 제 집에 오세요." },
    { id: 817, lesson: 'Bài 8', type: 'translate', vn: "17. Hãy dùng cuốn từ điển này", kr: "이 사전을 사용하세요." },
    { id: 818, lesson: 'Bài 8', type: 'translate', vn: "18. Chúc quý khách ăn ngon miệng", kr: "맛있게 드세요." },
    { id: 819, lesson: 'Bài 8', type: 'translate', vn: "19. Hôm qua Mai đã không ăn táo", kr: "어제 마이 씨는 사과를 안 먹었습니다." },
    { id: 820, lesson: 'Bài 8', type: 'translate', vn: "20. Anh trai tôi không muốn dùng từ điển Tiếng Anh", kr: "제 형은 영어 사전을 사용하고 싶어 하지 않습니다." },
    { id: 821, lesson: 'Bài 8', type: 'translate', vn: "21. Em gái tôi không mua sắm cùng Quân", kr: "제 여동생은 꿘 씨하고 같이 쇼핑하지 않습니다." },
    { id: 822, lesson: 'Bài 8', type: 'translate', vn: "22. Hôm qua tôi đã không muốn đến cửa hàng bách hóa với Hoa.", kr: "어제 저는 호아 씨하고 백화점에 가고 싶지 않았습니다." },
    { id: 823, lesson: 'Bài 8', type: 'translate', vn: "23. Tôi sẽ tới nhà bà ngoại vào chiều chủ nhật tuần này", kr: "이번 주 일요일 오후에 저는 외할머니 댁에 가겠습니다." },
    { id: 824, lesson: 'Bài 8', type: 'translate', vn: "24. Học kỳ này tôi sẽ tốt nghiệp trường ĐH Hà Nội", kr: "이번 학기에 저는 하노이 대학교를 졸업하겠습니다." },
    { id: 825, lesson: 'Bài 8', type: 'translate', vn: "25. Ngày kia tôi sẽ dọn dẹp ở nhà. Tôi sẽ nấu cơm.", kr: "모레 저는 집에서 청소하겠습니다. 밥을 하겠습니다." },
	// ==========================================
    // 🏠 BÀI 9: NHÀ CỬA & ĐỊA ĐIỂM (Trích từ PDF - 20 Câu)
    // ==========================================
    { id: 901, lesson: 'Bài 9', type: 'translate', vn: "1. Nhà của tôi nằm ở phường Sinchon.", kr: "제 집은 신촌에 있습니다." },
    { id: 902, lesson: 'Bài 9', type: 'translate', vn: "2. Ở bên cạnh nhà tôi có một cái bưu điện.", kr: "집 옆에 우체국이 있습니다." },
    { id: 903, lesson: 'Bài 9', type: 'translate', vn: "3. Thư viện nằm ở phía sau ngân hàng.", kr: "도서관은 은행 뒤에 있습니다." },
    { id: 904, lesson: 'Bài 9', type: 'translate', vn: "4. Từ nhà đến trường bạn đi bằng phương tiện gì?", kr: "집에서 학교까지 무엇을 타고 갑니까?" },
    { id: 905, lesson: 'Bài 9', type: 'translate', vn: "5. Tôi thường đi đến trường bằng xe buýt.", kr: "저는 보통 버스를 타고 갑니다." },
    { id: 906, lesson: 'Bài 9', type: 'translate', vn: "6. Đi từ nhà đến công ty mất khoảng bao nhiêu lâu?", kr: "집에서 회사까지 시간이 얼마나 걸립니까?" },
    { id: 907, lesson: 'Bài 9', type: 'translate', vn: "7. Nếu đi bằng xe buýt thì mất khoảng 30 phút.", kr: "버스로 삼십 분쯤 걸립니다." },
    { id: 908, lesson: 'Bài 9', type: 'translate', vn: "8. Ở phía trước cổng trường đại học có bến xe buýt.", kr: "대학교 문 앞에 버스 정류장이 있습니다." },
    { id: 909, lesson: 'Bài 9', type: 'translate', vn: "9. Ở bên trong phòng của tôi có giường và bàn học.", kr: "제 방 안에 침대하고 책상이 있습니다." },
    { id: 910, lesson: 'Bài 9', type: 'translate', vn: "10. Ngôi nhà của bạn hiện tại nằm ở đâu?", kr: "집이 지금 어디에 있습니까?" },
    { id: 911, lesson: 'Bài 9', type: 'translate', vn: "11. Hãy đi thẳng rồi sau đó rẽ sang bên trái nhé.", kr: "똑바로 가서 왼쪽으로 가세요." },
    { id: 912, lesson: 'Bài 9', type: 'translate', vn: "12. Anh hãy xuống xe ở ga tàu điện ngầm Seoul.", kr: "서울역에서 내리세요." },
    { id: 913, lesson: 'Bài 9', type: 'translate', vn: "13. Nhà hàng Hàn Quốc đó nằm ở tầng mấy vậy?", kr: "그 한국 식당은 몇 층에 있습니까?" },
    { id: 914, lesson: 'Bài 9', type: 'translate', vn: "14. Nhà hàng đó nằm ở tầng 3 của tòa nhà này.", kr: "그 식당은 이 건물 3층에 있습니다." },
    { id: 915, lesson: 'Bài 9', type: 'translate', vn: "15. Ở phía trước rạp chiếu phim có quán cà phê không?", kr: "극장 앞에 커피숍이 있습니까?" },
    { id: 916, lesson: 'Bài 9', type: 'translate', vn: "16. Hiện tại bạn đang sống cùng với ai?", kr: "지금 누구하고 같이 삽니까?" },
    { id: 917, lesson: 'Bài 9', type: 'translate', vn: "17. Tôi đang sống cùng với những người bạn của mình.", kr: "저는 제 친구들하고 같이 삽니다." },
    { id: 918, lesson: 'Bài 9', type: 'translate', vn: "18. Căn phòng của Hương rất rộng rãi và sạch sẽ.", kr: "흐엉 씨의 방은 아주 크고 깨끗합니다." },
    { id: 919, lesson: 'Bài 9', type: 'translate', vn: "19. Ở gần nhà tôi không có ga tàu điện ngầm.", kr: "제 집 근처에 지하철역이 없습니다." },
    { id: 920, lesson: 'Bài 9', type: 'translate', vn: "20. Tôi thường đi bộ từ nhà đến công ty để làm việc.", kr: "저는 보통 집에서 회사까지 걸어서 일하러 갑니다." },

    // ==========================================
    // 👨‍👩‍👧‍👦 BÀI 10: GIA ĐÌNH (Trích từ PDF - 20 Câu)
    // ==========================================
    { id: 1001, lesson: 'Bài 10', type: 'translate', vn: "1. Gia đình của bạn có tất cả mấy người?", kr: "가족이 모두 몇 명입니까?" },
    { id: 1002, lesson: 'Bài 10', type: 'translate', vn: "2. Gia đình tôi có tất cả là năm người.", kr: "우리 가족은 모두 다섯 명입니다." },
    { id: 1003, lesson: 'Bài 10', type: 'translate', vn: "3. Đó là bố mẹ tôi, anh trai, chị gái và tôi.", kr: "부모님, 형, 누나하고 저입니다." },
    { id: 1004, lesson: 'Bài 10', type: 'translate', vn: "4. Bố mẹ của tôi hiện tại đang sống ở Việt Nam.", kr: "부모님께서는 지금 베트남에 사십니다." },
    { id: 1005, lesson: 'Bài 10', type: 'translate', vn: "5. Anh trai của tôi là một nhân viên công ty.", kr: "제 형은 회사원입니다." },
    { id: 1006, lesson: 'Bài 10', type: 'translate', vn: "6. Bố của tôi đang làm việc ở một bệnh viện lớn.", kr: "제 아버지께서는 큰 병원에서 일하십니다." },
    { id: 1007, lesson: 'Bài 10', type: 'translate', vn: "7. Mẹ của tôi là một giáo viên dạy tiếng Anh.", kr: "제 어머니께서는 영어 선생님이십니다." },
    { id: 1008, lesson: 'Bài 10', type: 'translate', vn: "8. Ông nội của tôi năm nay tuổi đã cao rồi.", kr: "제 할아버지께서는 올해 연세가 많으십니다." },
    { id: 1009, lesson: 'Bài 10', type: 'translate', vn: "9. Chị gái của tôi đã kết hôn vào năm ngoái.", kr: "제 언니는 작년에 결혼했습니다." },
    { id: 1010, lesson: 'Bài 10', type: 'translate', vn: "10. Gia đình tôi hiện tại không sống ở Hàn Quốc.", kr: "우리 가족은 지금 한국에 살지 않습니다." },
    { id: 1011, lesson: 'Bài 10', type: 'translate', vn: "11. Ông bà ngoại của tôi đang sống ở dưới quê.", kr: "외조부모님께서는 고향에 사십니다." },
    { id: 1012, lesson: 'Bài 10', type: 'translate', vn: "12. Vào cuối tuần tôi thường gọi điện thoại cho bố mẹ.", kr: "주말에 저는 보통 부모님께 전화를 드립니다." },
    { id: 1013, lesson: 'Bài 10', type: 'translate', vn: "13. Mẹ của tôi nấu ăn thực sự rất là ngon.", kr: "어머니께서는 요리를 정말 잘하십니다." },
    { id: 1014, lesson: 'Bài 10', type: 'translate', vn: "14. Bố của tôi rất thích việc đọc sách báo ở nhà.", kr: "아버지께서는 집에서 책과 신문 읽기를 좋아하십니다." },
    { id: 1015, lesson: 'Bài 10', type: 'translate', vn: "15. Bố mẹ ơi, hai người hãy luôn giữ gìn sức khỏe nhé.", kr: "부모님, 항상 건강하세요." },
    { id: 1016, lesson: 'Bài 10', type: 'translate', vn: "16. Chị gái của tôi có một người con gái rất đáng yêu.", kr: "제 누나는 아주 귀여운 딸이 한 명 있습니다." },
    { id: 1017, lesson: 'Bài 10', type: 'translate', vn: "17. Bố ơi, người này là bạn học cùng lớp của con.", kr: "아버지, 이 사람은 제 반 친구입니다." },
    { id: 1018, lesson: 'Bài 10', type: 'translate', vn: "18. Chào cháu, rất vui được gặp cháu ở đây.", kr: "안녕, 여기에서 만나서 반가워요." },
    { id: 1019, lesson: 'Bài 10', type: 'translate', vn: "19. Vào ngày nghỉ bạn thường làm gì ở nhà?", kr: "휴일에 보통 집에서 무엇을 합니까?" },
    { id: 1020, lesson: 'Bài 10', type: 'translate', vn: "20. Tôi thường dọn dẹp phòng cùng với em trai của mình.", kr: "저는 보통 남동생하고 같이 방을 청소합니다." },
	// ==========================================
 // ==========================================
    // BÀI 6: QUÁ KHỨ & RỦ RÊ (으)ㅂ시다
    // ==========================================
    { id: 246, lesson: 'Bài 6', type: 'translate', vn: "Bạn đã gặp người bạn Việt Nam vào thứ mấy?", kr: "무슨 요일에 베트남 친구를 만났습니까?" },
    { id: 247, lesson: 'Bài 6', type: 'translate', vn: "Bạn đã xem phim tại rạp chiếu phim cùng người bạn HQ vào ngày mấy?", kr: "며칠에 한국 친구하고 같이 극장에서 영화를 봤습니까?" },
    { id: 248, lesson: 'Bài 6', type: 'translate', vn: "Hương đã gặp người bạn Hàn Quốc vào cuối tuần trước.", kr: "흐엉 씨는 지난 주말에 한국 친구를 만났습니다." },
    { id: 249, lesson: 'Bài 6', type: 'translate', vn: "Tôi đã làm bài kiểm tra vào thứ năm, ngày 20 tháng 10.", kr: "저는 10월 20일 목요일에 시험을 봤습니다." },
    { id: 250, lesson: 'Bài 6', type: 'translate', vn: "Vào cuối tuần trước, tôi đi đã dạo trong công viên cùng em.", kr: "지난 주말에 동생하고 같이 공원에서 산책했습니다." },
    { id: 251, lesson: 'Bài 6', type: 'translate', vn: "Vào thứ tư tuần trước, tôi đã uống trà tại quán cà phê.", kr: "지난주 수요일에 커피숍에서 차를 마셨습니다." },
    { id: 252, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước, Hương đã đọc sách tiếng Hàn trong thư viện.", kr: "지난 주말에 흐엉 씨는 도서관에서 한국어 책을 읽었습니다." },
    { id: 253, lesson: 'Bài 6', type: 'translate', vn: "Vào cuối tuần trước, tôi đã có tiết học tiếng Hàn.", kr: "지난 주말에 한국어 수업이 있었습니다." },
    { id: 254, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước ở phòng học không có học sinh.", kr: "지난 주말에 교실에 학생이 없었습니다." },
    { id: 255, lesson: 'Bài 6', type: 'translate', vn: "Thứ tư tuần trước, tôi đã đi ăn ở ngoài cùng gia đình.", kr: "지난주 수요일에 가족하고 같이 외식했습니다." },
    { id: 256, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã mua quần áo ở trung tâm thương mại.", kr: "어제 백화점에서 옷을 샀습니다." },
    { id: 257, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã ngủ rất nhiều ở nhà.", kr: "어제 집에서 많이 잤습니다." },
    { id: 258, lesson: 'Bài 6', type: 'translate', vn: "Sáng nay tôi đã dọn dẹp phòng.", kr: "오늘 아침에 방을 청소했습니다." },
    { id: 259, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã nói chuyện với bạn.", kr: "어제 친구하고 이야기했습니다." },
    { id: 260, lesson: 'Bài 6', type: 'translate', vn: "Tuần trước tôi đã gặp cô giáo tiếng Hàn.", kr: "지난주에 한국어 선생님을 만났습니다." },
    { id: 261, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã đi câu cá.", kr: "어제 낚시를 하러 갔습니다." },
    { id: 262, lesson: 'Bài 6', type: 'translate', vn: "Thứ hai tuần trước tôi đã đi cắm trại cùng Mai.", kr: "지난주 월요일에 마이 씨하고 캠핑을 갔습니다." },
    { id: 263, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước tôi đã chơi đá bóng.", kr: "지난주 주말에 축구를 했습니다." },
    { id: 264, lesson: 'Bài 6', type: 'translate', vn: "Tối hôm qua tôi đã làm cơm trộn.", kr: "어제 저녁에 비빔밥을 만들었습니다." },
    { id: 265, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã đi nhà hàng Hàn Quốc.", kr: "어제 한국 식당에 갔습니다." },
    { id: 266, lesson: 'Bài 6', type: 'translate', vn: "Trưa hôm qua tôi dã ăn kimbap và uống nước ép.", kr: "어제 점심에 김밥을 먹고 주스를 마셨습니다." },
    { id: 267, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã đến trường muộn.", kr: "어제 학교에 늦게 왔습니다." },
    { id: 268, lesson: 'Bài 6', type: 'translate', vn: "Sáng hôm qua tôi đã dậy sớm và tập thể dục.", kr: "어제 아침에 일찍 일어나서 운동했습니다." },
    { id: 269, lesson: 'Bài 6', type: 'translate', vn: "Sáng hôm qua tôi đã dậy sớm và làm bữa sáng.", kr: "어제 아침에 일찍 일어나서 아침을 만들었습니다." },
    { id: 270, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước tôi đã ôn thi ở thư viện.", kr: "지난주 주말에 도서관에서 시험 공부를 했습니다." },
    { id: 271, lesson: 'Bài 6', type: 'translate', vn: "Kì nghỉ trước tôi đã đi du lịch Đà Nẵng.", kr: "지난 방학에 다낭으로 여행을 갔습니다." },
    { id: 272, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã làm kimchi.", kr: "어제 김치를 만들었습니다." },
    { id: 273, lesson: 'Bài 6', type: 'translate', vn: "Kim chi và cơm trộn đã rất ngon.", kr: "김치하고 비빔밥이 아주 맛있었습니다." },
    { id: 274, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước tôi đã đi leo núi cùng bố.", kr: "지난주 주말에 아버지하고 같이 등산했습니다." },
    { id: 275, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã ăn bánh kem ở bữa tiệc sinh nhật.", kr: "어제 생일 파티에서 케이크를 먹었습니다." },
    { id: 276, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước tôi đã làm việc ở công ty.", kr: "지난주 주말에 회사에서 일했습니다." },
    { id: 277, lesson: 'Bài 6', type: 'translate', vn: "Sáng nay tôi đã tắm.", kr: "오늘 아침에 샤워했습니다." },
    { id: 278, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã đọc sách tiếng Hàn ở thư viện.", kr: "어제 도서관에서 한국어 책을 읽었습니다." },
    { id: 279, lesson: 'Bài 6', type: 'translate', vn: "Tuần trước thời tiết đã rất nóng.", kr: "지난주에 날씨가 아주 더웠습니다." },
    { id: 280, lesson: 'Bài 6', type: 'translate', vn: "Năm ngoái sân vận động này rất lớn. Nhưng bây giờ thì nhỏ.", kr: "작년에 이 운동장이 아주 컸습니다. 하지만 지금은 작습니다." },
    { id: 281, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua bài tập đã rất nhiều.", kr: "어제 숙제가 아주 많았습니다." },
    { id: 282, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua bài thi đã không khó.", kr: "어제 시험이 어렵지 않았습니다." },
    { id: 283, lesson: 'Bài 6', type: 'translate', vn: "Tôi đã không ngủ lúc 10 giờ.", kr: "저는 열 시에 자지 않았습니다." },
    { id: 284, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã nghỉ ngơi ở nhà.", kr: "어제 저는 집에서 쉬었습니다." },
    { id: 285, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã nghe nhạc.", kr: "어제 저는 음악을 들었습니다." },
    { id: 286, lesson: 'Bài 6', type: 'translate', vn: "Vào thứ ba tôi đã gặp bạn ở quán cà phê.", kr: "화요일에 커피숍에서 친구를 만났습니다." },
    { id: 287, lesson: 'Bài 6', type: 'translate', vn: "Vào thứ 2 tôi đã ngủ ở phòng nghỉ.", kr: "월요일에 휴게실에서 잤습니다." },
    { id: 288, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước tôi đã nghỉ ngơi ở nhà.", kr: "지난주 주말에 집에서 쉬었습니다." },
    { id: 289, lesson: 'Bài 6', type: 'translate', vn: "Chủ nhật tuần trước tôi đã tập thể dục ở sân vận động.", kr: "지난주 일요일에 운동장에서 운동했습니다." },
    { id: 290, lesson: 'Bài 6', type: 'translate', vn: "Thứ 2 tuần trước tôi đã ăn sáng tại nhà ăn học sinh.", kr: "지난주 월요일에 학생 식당에서 아침을 먹었습니다." },
    { id: 291, lesson: 'Bài 6', type: 'translate', vn: "Thứ 3 tuần trước tôi đã ăn trưa tại nhà ăn công ty.", kr: "지난주 화요일에 회사 식당에서 점심을 먹었습니다." },
    { id: 292, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước tôi đã đi bơi ở bể bơi Seoul.", kr: "지난주 주말에 서울 수영장에서 수영했습니다." },
    { id: 293, lesson: 'Bài 6', type: 'translate', vn: "Hôm qua tôi đã chơi bóng rổ ở sân bóng rổ ở trường.", kr: "어제 학교 농구장에서 농구를 했습니다." },
    { id: 294, lesson: 'Bài 6', type: 'translate', vn: "Thứ 6 tuần trước tôi đã uống nước ép ở nhà bạn.", kr: "지난주 금요일에 친구 집에서 주스를 마셨습니다." },
    { id: 295, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần trước tôi đã uống bia và soju ở quán nhậu.", kr: "지난주 주말에 술집에서 맥주하고 소주를 마셨습니다." },
    { id: 296, lesson: 'Bài 6', type: 'translate', vn: "Hãy cùng nhau học tiếng Hàn ở thư viện.", kr: "도서관에서 같이 한국어를 공부합시다." },
    { id: 297, lesson: 'Bài 6', type: 'translate', vn: "Hãy cùng nhau ăn trưa ở nhà ăn học sinh.", kr: "학생 식당에서 같이 점심을 먹읍시다." },
    { id: 298, lesson: 'Bài 6', type: 'translate', vn: "Gặp nhau ở quán cà phê nhé.", kr: "커피숍에서 만납시다." },
    { id: 299, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần tới cùng nhau đi xem phim ở rạp chiếu phim nhé.", kr: "다음 주말에 극장에서 같이 영화를 봅시다." },
    { id: 300, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần sau hãy cùng nhau đi câu cá nhé.", kr: "다음 주말에 같이 낚시하러 갑시다." },
    { id: 301, lesson: 'Bài 6', type: 'translate', vn: "Tháng sau hãy cùng nhau đi ăn nhà hàng nhé.", kr: "다음 달에 같이 식당에 갑시다." },
    { id: 302, lesson: 'Bài 6', type: 'translate', vn: "Chúng ta cùng uống cà phê nhé.", kr: "같이 커피를 마십시다." },
    { id: 303, lesson: 'Bài 6', type: 'translate', vn: "Chúng ta hãy cùng dọn dẹp phòng.", kr: "같이 방을 청소합시다." },
    { id: 304, lesson: 'Bài 6', type: 'translate', vn: "Thứ 7 tuần này hãy cùng nhau chơi tennis.", kr: "이번 주 토요일에 같이 테니스를 칩시다." },
    { id: 305, lesson: 'Bài 6', type: 'translate', vn: "Chủ nhật tuần sau hãy cùng nhau nấu ăn.", kr: "다음 주 일요일에 같이 요리합시다." },
    { id: 306, lesson: 'Bài 6', type: 'translate', vn: "Hãy cùng nhau nghỉ ngơi.", kr: "같이 쉽시다." },
    { id: 307, lesson: 'Bài 6', type: 'translate', vn: "Ngày mai hãy cùng làm bài tập ở thư viện.", kr: "내일 도서관에서 같이 숙제를 합시다." },
    { id: 308, lesson: 'Bài 6', type: 'translate', vn: "Chúng ta hãy cùng đi du lịch Jeju.", kr: "제주도로 같이 여행을 갑시다." },
    { id: 309, lesson: 'Bài 6', type: 'translate', vn: "Chúng ta hãy cùng làm bữa tối.", kr: "같이 저녁을 만듭시다." },
    { id: 310, lesson: 'Bài 6', type: 'translate', vn: "Ngày mai hãy cùng nhau đi bơi.", kr: "내일 같이 수영하러 갑시다." },
    { id: 311, lesson: 'Bài 6', type: 'translate', vn: "Cuối tuần sau hãy cùng nhau đi cắm trại.", kr: "다음 주말에 같이 캠핑 갑시다." },
    { id: 312, lesson: 'Bài 6', type: 'translate', vn: "Ngày mai hãy cùng đi mua sắm ở trung tâm thương mại nhé.", kr: "내일 백화점에서 같이 쇼핑합시다." },
    { id: 313, lesson: 'Bài 6', type: 'translate', vn: "Hãy cùng nhau ôn thi ở thư viện nhé.", kr: "도서관에서 같이 시험 공부를 합시다." },
    { id: 314, lesson: 'Bài 6', type: 'translate', vn: "Hãy cùng nhau chơi bóng rổ ở trường nhé.", kr: "학교에서 같이 농구를 합시다." },
    { id: 315, lesson: 'Bài 6', type: 'translate', vn: "Hãy cùng nhau ăn thịt gà và uống bia nhé.", kr: "같이 치킨을 먹고 맥주를 마십시다." },

    // ==========================================
    // BÀI 7: MUA SẮM (ĐỐI CHIẾU 은/는 & MUỐN 고 싶다)
    // ==========================================
    { id: 316, lesson: 'Bài 7', type: 'translate', vn: "Mì tôm thì rẻ. Bulgogi thì đắt.", kr: "라면은 쌉니다. 불고기는 비쌉니다." },
    { id: 317, lesson: 'Bài 7', type: 'translate', vn: "Dưa hấu thì to. Xoài thì nhỏ.", kr: "수박은 큽니다. 망고는 작습니다." },
    { id: 318, lesson: 'Bài 7', type: 'translate', vn: "Tôi thì sống ở Hàn Quốc. Bạn tôi thì sống ở Việt Nam.", kr: "저는 한국에 삽니다. 친구는 베트남에 삽니다." },
    { id: 319, lesson: 'Bài 7', type: 'translate', vn: "Phòng của tôi thì rộng. Phòng của em tôi thì hẹp.", kr: "제 방은 넓습니다. 동생 방은 좁습니다." },
    { id: 320, lesson: 'Bài 7', type: 'translate', vn: "Bố tôi là nhân viên công ty. Còn mẹ tôi là giáo viên.", kr: "아버지는 회사원입니다. 어머니는 선생님입니다." },
    { id: 321, lesson: 'Bài 7', type: 'translate', vn: "Minho là người Hàn Quốc. Còn Hương là người Việt Nam.", kr: "민호 씨는 한국 사람입니다. 흐엉 씨는 베트남 사람입니다." },
    { id: 322, lesson: 'Bài 7', type: 'translate', vn: "Tôi thì học tiếng Hàn. Lan thì học tiếng Nhật.", kr: "저는 한국어를 공부합니다. 란 씨는 일본어를 공부합니다." },
    { id: 323, lesson: 'Bài 7', type: 'translate', vn: "Tôi thích bơi. Hoa thích nấu ăn.", kr: "저는 수영을 좋아합니다. 호아 씨는 요리를 좋아합니다." },
    { id: 324, lesson: 'Bài 7', type: 'translate', vn: "Anh tôi thì béo. Tôi thì gầy.", kr: "형은 뚱뚱합니다. 저는 날씬합니다." },
    { id: 325, lesson: 'Bài 7', type: 'translate', vn: "Lan thì cao. Mai thì thấp.", kr: "란 씨는 키가 큽니다. 마이 씨는 키가 작습니다." },
    { id: 326, lesson: 'Bài 7', type: 'translate', vn: "Tôi 20 tuổi. Em tôi thì 14 tuổi.", kr: "저는 스무 살입니다. 동생은 열네 살입니다." },
    { id: 327, lesson: 'Bài 7', type: 'translate', vn: "Trung tâm thương mại thì gần. Trường học thì xa.", kr: "백화점은 가깝습니다. 학교는 멉니다." },
    { id: 328, lesson: 'Bài 7', type: 'translate', vn: "Tôi thích bóng đá. Bạn tôi thích tennis.", kr: "저는 축구를 좋아합니다. 친구는 테니스를 좋아합니다." },
    { id: 329, lesson: 'Bài 7', type: 'translate', vn: "Bút chì thì rẻ. Bút bi thì đắt.", kr: "연필은 쌉니다. 볼펜은 비쌉니다." },
    { id: 330, lesson: 'Bài 7', type: 'translate', vn: "Mùa đông thì lạnh. Mùa hè thì nóng.", kr: "겨울은 춥습니다. 여름은 덥습니다." },
    { id: 331, lesson: 'Bài 7', type: 'translate', vn: "Mẹ tôi thì nấu ăn giỏi. Tôi thì nấu ăn kém.", kr: "어머니는 요리를 잘하십니다. 저는 요리를 못합니다." },
    { id: 332, lesson: 'Bài 7', type: 'translate', vn: "Tôi thích đồ ăn Hàn Quốc. Bạn tôi thích đồ ăn Việt Nam.", kr: "저는 한국 음식을 좋아합니다. 친구는 베트남 음식을 좋아합니다." },
    { id: 333, lesson: 'Bài 7', type: 'translate', vn: "Cơm trộn thì ngon. Kimbap thì dở.", kr: "비빔밥은 맛있습니다. 김밥은 맛없습니다." },
    { id: 334, lesson: 'Bài 7', type: 'translate', vn: "Nước ép thì ngọt. Cà phê thì đắng.", kr: "주스는 답니다. 커피는 씁니다." },
    { id: 335, lesson: 'Bài 7', type: 'translate', vn: "Nước chanh thì chua. Nước táo thì ngọt.", kr: "레몬 주스는 십니다. 사과 주스는 답니다." },
    { id: 336, lesson: 'Bài 7', type: 'translate', vn: "Du lịch trong nước thì rẻ. Du lịch nước ngoài thì đắt.", kr: "국내 여행은 쌉니다. 해외 여행은 비쌉니다." },
    { id: 337, lesson: 'Bài 7', type: 'translate', vn: "Tàu điện ngầm thì rẻ. Taxi thì đắt.", kr: "지하철은 쌉니다. 택시는 비쌉니다." },
    { id: 338, lesson: 'Bài 7', type: 'translate', vn: "Trường học thì rộng. Nhà ăn thì hẹp.", kr: "학교는 넓습니다. 식당은 좁습니다." },
    { id: 339, lesson: 'Bài 7', type: 'translate', vn: "Chuối thì đắt. Táo thì rẻ.", kr: "바나나는 비쌉니다. 사과는 쌉니다." },
    { id: 340, lesson: 'Bài 7', type: 'translate', vn: "Mì thì nhạt. Canh kimchi thì mặn.", kr: "라면은 싱겁습니다. 김치찌개는 짭니다." },
    { id: 341, lesson: 'Bài 7', type: 'translate', vn: "Táo thì 5 nghìn won 3 quả. Chuối thì 3 nghìn won 1 nải.", kr: "사과는 세 개에 오천 원입니다. 바나나는 한 송이에 삼천 원입니다." },
    { id: 342, lesson: 'Bài 7', type: 'translate', vn: "Lan thì ăn cơm trộn. Hương thì ăn bánh mì.", kr: "란 씨는 비빔밥을 먹습니다. 흐엉 씨는 빵을 먹습니다." },
    { id: 343, lesson: 'Bài 7', type: 'translate', vn: "Mùa thu thì mát mẻ. Mùa xuân thì ấm áp.", kr: "가을은 시원합니다. 봄은 따뜻합니다." },
    { id: 344, lesson: 'Bài 7', type: 'translate', vn: "Trong lớp thì im lặng. Bên ngoài thì ồn ào.", kr: "교실 안은 조용합니다. 밖은 시끄럽습니다." },
    { id: 345, lesson: 'Bài 7', type: 'translate', vn: "Cái bàn thì mới. Cái ghế thì cũ.", kr: "책상은 새것입니다. 의자는 헌것입니다." },
    { id: 346, lesson: 'Bài 7', type: 'translate', vn: "Phim hài thì vui. Phim lãng mạn thì buồn.", kr: "코미디 영화는 즐겁습니다. 로맨틱 영화는 슬픕니다." },
    { id: 347, lesson: 'Bài 7', type: 'translate', vn: "Tiếng Hàn thì khó. Tiếng Việt thì dễ.", kr: "한국어는 어렵습니다. 베트남어는 쉽습니다." },
    { id: 348, lesson: 'Bài 7', type: 'translate', vn: "Xe máy thì nhanh. Xe đạp thì chậm.", kr: "오토바이는 빠릅니다. 자전거는 느립니다." },
    { id: 349, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn đi Hàn Quốc.", kr: "저는 한국에 가고 싶습니다." },
    { id: 350, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn mua máy vi tính.", kr: "저는 컴퓨터를 사고 싶습니다." },
    { id: 351, lesson: 'Bài 7', type: 'translate', vn: "Hoa muốn học tiếng Hàn.", kr: "호아 씨는 한국어를 공부하고 싶어 합니다." },
    { id: 352, lesson: 'Bài 7', type: 'translate', vn: "Bạn muốn xem phim gì?", kr: "무슨 영화를 보고 싶습니까?" },
    { id: 353, lesson: 'Bài 7', type: 'translate', vn: "Bạn muốn ăn món ăn như thế nào?", kr: "어떤 음식을 먹고 싶습니까?" },
    { id: 354, lesson: 'Bài 7', type: 'translate', vn: "Bạn muốn bơi vào thứ mấy?", kr: "무슨 요일에 수영하고 싶습니까?" },
    { id: 355, lesson: 'Bài 7', type: 'translate', vn: "Cuối tuần sau, tôi muốn leo núi cùng người bạn.", kr: "다음 주말에 친구하고 같이 등산하고 싶습니다." },
    { id: 356, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn câu cá cùng bố vào buổi chiều.", kr: "오후에 아버지하고 같이 낚시하고 싶습니다." },
    { id: 357, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn mua 1 quyển sách và 2 quyển vở.", kr: "책 한 권하고 공책 두 권을 사고 싶습니다." },
    { id: 358, lesson: 'Bài 7', type: 'translate', vn: "Tối nay tôi muốn ăn gà rán và bánh mì.", kr: "오늘 저녁에 치킨하고 빵을 먹고 싶습니다." },
    { id: 359, lesson: 'Bài 7', type: 'translate', vn: "Cuối tuần sau tôi muốn xem phim Hàn Quốc.", kr: "다음 주말에 한국 영화를 보고 싶습니다." },
    { id: 360, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn uống bia cùng người bạn.", kr: "친구하고 같이 맥주를 마시고 싶습니다." },
    { id: 361, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn đi công viên ở Busan.", kr: "부산에 있는 공원에 가고 싶습니다." },
    { id: 362, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn mua 2 quả táo và 3 quả lê ở chợ.", kr: "시장에서 사과 두 개하고 배 세 개를 사고 싶습니다." },
    { id: 363, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn mua 2 bình hoa ở trung tâm mua sắm.", kr: "백화점에서 꽃병 두 개를 사고 싶습니다." },
    { id: 364, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn đi du học Hàn Quốc.", kr: "한국으로 유학 가고 싶습니다." },
    { id: 365, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn chơi bóng đá.", kr: "축구를 하고 싶습니다." },
    { id: 366, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn chơi piano.", kr: "피아노를 치고 싶습니다." },
    { id: 367, lesson: 'Bài 7', type: 'translate', vn: "Hương muốn chơi tennis.", kr: "흐엉 씨는 테니스를 치고 싶어 합니다." },
    { id: 368, lesson: 'Bài 7', type: 'translate', vn: "Lan muốn chơi game.", kr: "란 씨는 게임을 하고 싶어 합니다." },
    { id: 369, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn mua một nải chuối và 2 bình hoa.", kr: "바나나 한 송이하고 꽃병 두 개를 사고 싶습니다." },
    { id: 370, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn đi dạo vào cuối tuần.", kr: "주말에 산책하고 싶습니다." },
    { id: 371, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn mua giày và quần áo.", kr: "신발하고 옷을 사고 싶습니다." },
    { id: 372, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn ăn đồ ăn Việt Nam", kr: "베트남 음식을 먹고 싶습니다." },
    { id: 373, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn đi xem concert Blackpink.", kr: "블랙핑크 콘서트를 보러 가고 싶습니다." },
    { id: 374, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn nghỉ ngơi ở nhà.", kr: "집에서 쉬고 싶습니다." },
    { id: 375, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn nghe nhạc Hàn Quốc.", kr: "한국 음악을 듣고 싶습니다." },
    { id: 376, lesson: 'Bài 7', type: 'translate', vn: "Hoa muốn làm việc tại công ty Samsung.", kr: "호아 씨는 삼성에서 일하고 싶어 합니다." },
    { id: 377, lesson: 'Bài 7', type: 'translate', vn: "Mai muốn trở thành thông dịch viên tiếng Hàn.", kr: "마이 씨는 한국어 통역사가 되고 싶어 합니다." },
    { id: 378, lesson: 'Bài 7', type: 'translate', vn: "Sau này Hương muốn trở thành bác sĩ.", kr: "나중에 흐엉 씨는 의사가 되고 싶어 합니다." },
    { id: 379, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn sinh sống tại Hàn Quốc.", kr: "한국에서 살고 싶습니다." },
    { id: 380, lesson: 'Bài 7', type: 'translate', vn: "Tôi muốn đi làm thêm ở cửa hàng tiện lợi.", kr: "편의점에서 아르바이트를 하고 싶습니다." },

    // ==========================================
    // BÀI 8: Ý ĐỊNH 겠, PHỦ ĐỊNH 지 않다 & MỆNH LỆNH (으)세요
    // ==========================================
    { id: 381, lesson: 'Bài 8', type: 'translate', vn: "Quý khách sẽ dùng món gì ạ?", kr: "무엇을 드시겠습니까?" },
    { id: 382, lesson: 'Bài 8', type: 'translate', vn: "Vào buổi tối nay tôi sẽ ăn cơm ở nhà ăn học sinh.", kr: "오늘 저녁에 학생 식당에서 밥을 먹겠습니다." },
    { id: 383, lesson: 'Bài 8', type: 'translate', vn: "Tôi sẽ tới nhà người bạn.", kr: "친구 집에 가겠습니다." },
    { id: 384, lesson: 'Bài 8', type: 'translate', vn: "Tôi sẽ làm bài tập tại thư viện.", kr: "도서관에서 숙제를 하겠습니다." },
    { id: 385, lesson: 'Bài 8', type: 'translate', vn: "Tôi sẽ ăn cơm trộn.", kr: "비빔밥을 먹겠습니다." },
    { id: 386, lesson: 'Bài 8', type: 'translate', vn: "Cuối tuần sau tôi sẽ leo núi.", kr: "다음 주말에 등산하겠습니다." },
    { id: 387, lesson: 'Bài 8', type: 'translate', vn: "Ngày mai tôi sẽ ăn tối cùng Hương.", kr: "내일 흐엉 씨하고 같이 저녁을 먹겠습니다." },
    { id: 388, lesson: 'Bài 8', type: 'translate', vn: "Bạn sẽ ăn trưa cùng ai?", kr: "누구하고 같이 점심을 먹겠습니까?" },
    { id: 389, lesson: 'Bài 8', type: 'translate', vn: "Bạn sẽ học bài ở đâu?", kr: "어디에서 공부하겠습니까?" },
    { id: 390, lesson: 'Bài 8', type: 'translate', vn: "Bạn sẽ ăn gì tối nay?", kr: "오늘 저녁에 무엇을 먹겠습니까?" },
    { id: 391, lesson: 'Bài 8', type: 'translate', vn: "Vào kỳ nghỉ bạn sẽ du lịch ở đâu?", kr: "방학에 어디로 여행하겠습니까?" },
    { id: 392, lesson: 'Bài 8', type: 'translate', vn: "Khi nào bạn sẽ làm kimchi?", kr: "언제 김치를 만들겠습니까?" },
    { id: 393, lesson: 'Bài 8', type: 'translate', vn: "Thứ 6 tuần này tôi sẽ đi cắm trại với bạn.", kr: "이번 주 금요일에 친구들하고 캠핑을 가겠습니다." },
    { id: 394, lesson: 'Bài 8', type: 'translate', vn: "Thứ 7 tuần sau tôi sẽ đi xem phim Hàn Quốc.", kr: "다음 주 토요일에 한국 영화를 보러 가겠습니다." },
    { id: 395, lesson: 'Bài 8', type: 'translate', vn: "Ngày mai tôi sẽ đi du lịch Hàn Quốc.", kr: "내일 한국으로 여행을 가겠습니다." },
    { id: 396, lesson: 'Bài 8', type: 'translate', vn: "Tháng sau tôi sẽ học bơi.", kr: "다음 달에 수영을 배우겠습니다." },
    { id: 397, lesson: 'Bài 8', type: 'translate', vn: "Tuần sau tôi sẽ chuyển nhà.", kr: "다음 주에 이사하겠습니다." },
    { id: 398, lesson: 'Bài 8', type: 'translate', vn: "Từ ngày mai tôi sẽ tập thể dục chăm chỉ.", kr: "내일부터 열심히 운동하겠습니다." },
    { id: 399, lesson: 'Bài 8', type: 'translate', vn: "Tôi sẽ cố gắng học tiếng Hàn.", kr: "한국어를 열심히 공부하겠습니다." },
    { id: 400, lesson: 'Bài 8', type: 'translate', vn: "Tôi sẽ ăn thật ngon miệng.", kr: "맛있게 먹겠습니다." },
    { id: 401, lesson: 'Bài 8', type: 'translate', vn: "Tôi sẽ không hút thuốc nữa.", kr: "이제 담배를 피우지 않겠습니다." },
    { id: 402, lesson: 'Bài 8', type: 'translate', vn: "Bây giờ tôi sẽ không uống rượu nữa.", kr: "이제 술을 마시지 않겠습니다." },
    { id: 403, lesson: 'Bài 8', type: 'translate', vn: "Ngày mai tôi sẽ đi công tác.", kr: "내일 출장을 가겠습니다." },
    { id: 404, lesson: 'Bài 8', type: 'translate', vn: "Một lát nữa chúng ta sẽ hạ cánh.", kr: "잠시 후에 도착하겠습니다." },
    { id: 405, lesson: 'Bài 8', type: 'translate', vn: "Em xin lỗi, từ ngày mai em sẽ đến sớm.", kr: "죄송합니다, 내일부터 일찍 오겠습니다." },
    { id: 406, lesson: 'Bài 8', type: 'translate', vn: "Cuối tuần tôi không bận.", kr: "주말에 바쁘지 않습니다." },
    { id: 407, lesson: 'Bài 8', type: 'translate', vn: "Cái bánh kem này không ngọt.", kr: "이 케이크는 달지 않습니다." },
    { id: 408, lesson: 'Bài 8', type: 'translate', vn: "Tôi không ăn kimchi.", kr: "저는 김치를 먹지 않습니다." },
    { id: 409, lesson: 'Bài 8', type: 'translate', vn: "Kimchi không cay.", kr: "김치는 맵지 않습니다." },
    { id: 410, lesson: 'Bài 8', type: 'translate', vn: "Canh tương không mặn.", kr: "된장찌개는 짜지 않습니다." },
    { id: 411, lesson: 'Bài 8', type: 'translate', vn: "Cà phê không đắng.", kr: "커피는 쓰지 않습니다." },
    { id: 412, lesson: 'Bài 8', type: 'translate', vn: "Phở thì không nhạt.", kr: "쌀국수는 싱겁지 않습니다." },
    { id: 413, lesson: 'Bài 8', type: 'translate', vn: "Quả xoài không chua.", kr: "망고는 시지 않습니다." },
    { id: 414, lesson: 'Bài 8', type: 'translate', vn: "Tôi không học tiếng Hàn.", kr: "저는 한국어를 공부하지 않습니다." },
    { id: 415, lesson: 'Bài 8', type: 'translate', vn: "Tôi không thích bóng đá.", kr: "저는 축구를 좋아하지 않습니다." },
    { id: 416, lesson: 'Bài 8', type: 'translate', vn: "Hôm nay tôi không ăn sáng.", kr: "오늘 아침을 먹지 않습니다." },
    { id: 417, lesson: 'Bài 8', type: 'translate', vn: "Thuốc này không đắng.", kr: "이 약은 쓰지 않습니다." },
    { id: 418, lesson: 'Bài 8', type: 'translate', vn: "Tôi không nấu ăn ở kí túc xá.", kr: "기숙사에서 요리하지 않습니다." },
    { id: 419, lesson: 'Bài 8', type: 'translate', vn: "Tôi không thích món ăn Hàn Quốc.", kr: "한국 음식을 좋아하지 않습니다." },
    { id: 420, lesson: 'Bài 8', type: 'translate', vn: "Tôi không xem phim Hàn Quốc.", kr: "한국 영화를 보지 않습니다." },
    { id: 421, lesson: 'Bài 8', type: 'translate', vn: "Tôi không uống rượu.", kr: "술을 마시지 않습니다." },
    { id: 422, lesson: 'Bài 8', type: 'translate', vn: "Tôi không hút thuốc lá.", kr: "담배를 피우지 않습니다." },
    { id: 423, lesson: 'Bài 8', type: 'translate', vn: "Cái túi này không lớn.", kr: "이 가방은 크지 않습니다." },
    { id: 424, lesson: 'Bài 8', type: 'translate', vn: "Tâm trạng không tốt.", kr: "기분이 좋지 않습니다." },
    { id: 425, lesson: 'Bài 8', type: 'translate', vn: "Bây giờ trời không mưa.", kr: "지금 비가 오지 않습니다." },
    { id: 426, lesson: 'Bài 8', type: 'translate', vn: "Thời tiết hôm nay không lạnh.", kr: "오늘 날씨가 춥지 않습니다." },
    { id: 427, lesson: 'Bài 8', type: 'translate', vn: "Bộ phim này không thú vị.", kr: "이 영화는 재미있지 않습니다." },
    { id: 428, lesson: 'Bài 8', type: 'translate', vn: "Đồ ăn này không ngon.", kr: "이 음식은 맛없지 않습니다." },
    { id: 429, lesson: 'Bài 8', type: 'translate', vn: "Tôi không đi du lịch nước ngoài.", kr: "해외 여행을 가지 않습니다." },
    { id: 430, lesson: 'Bài 8', type: 'translate', vn: "Cửa hàng này không đóng cửa muộn.", kr: "이 가게는 늦게 닫지 않습니다." },
    { id: 431, lesson: 'Bài 8', type: 'translate', vn: "Người kia không phải là giáo viên.", kr: "저 사람은 선생님이 아닙니다." },
    { id: 432, lesson: 'Bài 8', type: 'translate', vn: "Tôi không thích xem phim kinh dị.", kr: "공포 영화 보는 것을 좋아하지 않습니다." },
    { id: 433, lesson: 'Bài 8', type: 'translate', vn: "Nhà này không rộng lắm.", kr: "이 집은 넓지 않습니다." },
    { id: 434, lesson: 'Bài 8', type: 'translate', vn: "Cái mũ này không đắt lắm.", kr: "이 모자는 비싸지 않습니다." },
    { id: 435, lesson: 'Bài 8', type: 'translate', vn: "Cái váy này không đẹp nhỉ?", kr: "이 치마는 예쁘지 않지요?" },
    { id: 436, lesson: 'Bài 8', type: 'translate', vn: "Hãy cho tôi một cơm trộn.", kr: "비빔밥 하나 주세요." },
    { id: 437, lesson: 'Bài 8', type: 'translate', vn: "Hãy cho tôi một chút nước.", kr: "물 좀 주세요." },
    { id: 438, lesson: 'Bài 8', type: 'translate', vn: "Hãy đi tới trường.", kr: "학교에 가세요." },
    { id: 439, lesson: 'Bài 8', type: 'translate', vn: "Hãy cho tôi ba quả táo.", kr: "사과 세 개 주세요." },
    { id: 440, lesson: 'Bài 8', type: 'translate', vn: "Hãy nghỉ ngơi ở nhà.", kr: "집에서 쉬세요." },
    { id: 441, lesson: 'Bài 8', type: 'translate', vn: "Hãy tập thể dục ở công viên mỗi ngày.", kr: "매일 공원에서 운동하세요." },
    { id: 442, lesson: 'Bài 8', type: 'translate', vn: "Hãy thức dậy vào 5h.", kr: "다섯 시에 일어나세요." },
    { id: 443, lesson: 'Bài 8', type: 'translate', vn: "Hãy dọn dẹp nhà cửa.", kr: "집을 청소하세요." },
    { id: 444, lesson: 'Bài 8', type: 'translate', vn: "Hãy ăn sáng vào 8h.", kr: "여덟 시에 아침을 드세요." },
    { id: 445, lesson: 'Bài 8', type: 'translate', vn: "Hãy học tiếng Hàn.", kr: "한국어를 공부하세요." },
    { id: 446, lesson: 'Bài 8', type: 'translate', vn: "Hãy ngủ lúc 11h.", kr: "열한 시에 주무세요." },
    { id: 447, lesson: 'Bài 8', type: 'translate', vn: "Hãy ăn sườn nướng.", kr: "갈비를 드세요." },
    { id: 448, lesson: 'Bài 8', type: 'translate', vn: "Hãy học tiếng Hàn chăm chỉ.", kr: "한국어를 열심히 공부하세요." },
    { id: 449, lesson: 'Bài 8', type: 'translate', vn: "Hãy cho tôi sữa.", kr: "우유를 주세요." },
    { id: 450, lesson: 'Bài 8', type: 'translate', vn: "Xin mời ngồi ở đây.", kr: "여기에 앉으세요." },
    { id: 451, lesson: 'Bài 8', type: 'translate', vn: "Hãy đến trường đúng giờ.", kr: "학교에 제시간에 오세요." },
    { id: 452, lesson: 'Bài 8', type: 'translate', vn: "Hãy giúp tôi.", kr: "저를 도와주세요." },
    { id: 453, lesson: 'Bài 8', type: 'translate', vn: "Hãy về nhà sớm nha.", kr: "일찍 집에 가세요." },
    { id: 454, lesson: 'Bài 8', type: 'translate', vn: "Hãy ăn thật ngon miệng.", kr: "맛있게 드세요." },
    { id: 455, lesson: 'Bài 8', type: 'translate', vn: "Hãy mở cửa.", kr: "문을 여세요." },
    { id: 456, lesson: 'Bài 8', type: 'translate', vn: "Hãy đọc sách tiếng Hàn.", kr: "한국어 책을 읽으세요." },
    { id: 457, lesson: 'Bài 8', type: 'translate', vn: "Hãy mua vé ở đây.", kr: "여기에서 표를 사세요." },
    { id: 458, lesson: 'Bài 8', type: 'translate', vn: "Hãy đóng cửa vào.", kr: "문을 닫으세요." },
	// ==========================================
    // BÀI 9: NHÀ CỬA (PHƯƠNG HƯỚNG & (으)ㄹ까요)
    // ==========================================
    { id: 459, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi về phía bên trái.", kr: "왼쪽으로 가세요." },
    { id: 460, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi tới phía trước bến xe bus.", kr: "버스 정류장 앞으로 가세요." },
    { id: 461, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi về phía bên phải.", kr: "오른쪽으로 가세요." },
    { id: 462, lesson: 'Bài 9', type: 'translate', vn: "Hãy rẽ phải ở ngã tư.", kr: "사거리에서 오른쪽으로 가세요." },
    { id: 463, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi lên phía trên.", kr: "위로 올라가세요." },
    { id: 464, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi xuống phía dưới.", kr: "아래로 내려가세요." },
    { id: 465, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi vào trong lớp.", kr: "교실 안으로 들어가세요." },
    { id: 466, lesson: 'Bài 9', type: 'translate', vn: "Đi đến tầng 1 nhé.", kr: "일 층으로 가세요." },
    { id: 467, lesson: 'Bài 9', type: 'translate', vn: "Tôi ở cạnh công viên. Hãy đi về phía công viên nhé.", kr: "저는 공원 옆에 있어요. 공원 쪽으로 오세요." },
    { id: 468, lesson: 'Bài 9', type: 'translate', vn: "Hãy rẽ trái ở ngân hàng.", kr: "은행에서 왼쪽으로 가세요." },
    { id: 469, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi xuống bằng thang máy.", kr: "엘리베이터로 내려가세요." },
    { id: 470, lesson: 'Bài 9', type: 'translate', vn: "Hãy đến nhà của tôi nhé.", kr: "우리 집으로 오세요." },
    { id: 471, lesson: 'Bài 9', type: 'translate', vn: "Anh sẽ về hướng ga Seoul phải không?", kr: "서울역 쪽으로 가세요?" },
    { id: 472, lesson: 'Bài 9', type: 'translate', vn: "Nhà vệ sinh ở hướng nào?", kr: "화장실이 어느 쪽이에요?" },
    { id: 473, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi về hướng trường học.", kr: "학교 쪽으로 가세요." },
    { id: 474, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi sang phòng bên cạnh.", kr: "옆방으로 가세요." },
    { id: 475, lesson: 'Bài 9', type: 'translate', vn: "Hãy rẽ phải ở bưu điện.", kr: "우체국에서 오른쪽으로 가세요." },
    { id: 476, lesson: 'Bài 9', type: 'translate', vn: "Xin hãy đi lên tầng 3.", kr: "삼 층으로 올라가세요." },
    { id: 477, lesson: 'Bài 9', type: 'translate', vn: "Hãy đi thẳng nhé.", kr: "똑바로 가세요." },
    { id: 478, lesson: 'Bài 9', type: 'translate', vn: "Hãy gặp nhau ở trước bưu điện nhé?", kr: "우체국 앞에서 만날까요?" },
    { id: 479, lesson: 'Bài 9', type: 'translate', vn: "Chúng ta đi xem phim nhé?", kr: "같이 영화를 볼까요?" },
    { id: 480, lesson: 'Bài 9', type: 'translate', vn: "Hôm nay ăn tối cùng nhau nhé?", kr: "오늘 같이 저녁을 먹을까요?" },
    { id: 481, lesson: 'Bài 9', type: 'translate', vn: "Cùng tới thư viện nhé?", kr: "도서관에 같이 갈까요?" },
    { id: 482, lesson: 'Bài 9', type: 'translate', vn: "Tuần sau cùng leo núi nhé?", kr: "다음 주에 같이 등산할까요?" },
    { id: 483, lesson: 'Bài 9', type: 'translate', vn: "Chúng ta uống cà phê nhé?", kr: "커피를 마실까요?" },
    { id: 484, lesson: 'Bài 9', type: 'translate', vn: "Ngày mai chúng ta gặp nhau mấy giờ nhỉ?", kr: "내일 몇 시에 만날까요?" },
    { id: 485, lesson: 'Bài 9', type: 'translate', vn: "Chúng ta sẽ ăn gì đây nhỉ?", kr: "무엇을 먹을까요?" },
    { id: 486, lesson: 'Bài 9', type: 'translate', vn: "Chủ nhật tuần sau hãy cùng nhau nấu ăn nhé?", kr: "다음 주 일요일에 같이 요리할까요?" },
    { id: 487, lesson: 'Bài 9', type: 'translate', vn: "Tôi đọc sách tiếng Hàn nhé?", kr: "제가 한국어 책을 읽을까요?" },
    { id: 488, lesson: 'Bài 9', type: 'translate', vn: "Chúng ta chụp ảnh nhé?", kr: "우리 사진을 찍을까요?" },
    { id: 489, lesson: 'Bài 9', type: 'translate', vn: "Tôi mở cửa sổ nhé?", kr: "제가 창문을 열까요?" },
    { id: 490, lesson: 'Bài 9', type: 'translate', vn: "Chúng ta đi dạo ở công viên nhé?", kr: "공원에서 산책할까요?" },
    { id: 491, lesson: 'Bài 9', type: 'translate', vn: "Tối nay chúng ta ăn thịt nướng nhé?", kr: "오늘 저녁에 불고기를 먹을까요?" },
    { id: 492, lesson: 'Bài 9', type: 'translate', vn: "Trong lớp có bàn học. Cũng có ghế nữa.", kr: "교실에 책상이 있어요. 의자도 있어요." },
    { id: 493, lesson: 'Bài 9', type: 'translate', vn: "Tôi học tiếng Hàn. Bạn tôi cũng học tiếng Hàn.", kr: "저는 한국어를 공부해요. 제 친구도 한국어를 공부해요." },
    { id: 494, lesson: 'Bài 9', type: 'translate', vn: "Tôi thích Kimbap. Tôi cũng thích cả Bulgogi.", kr: "저는 김밥을 좋아해요. 불고기도 좋아해요." },
    { id: 495, lesson: 'Bài 9', type: 'translate', vn: "Hôm qua tôi đã mua táo. Tôi cũng đã mua chuối.", kr: "어제 사과를 샀어요. 바나나도 샀어요." },
    { id: 496, lesson: 'Bài 9', type: 'translate', vn: "Anh tôi béo. Chị tôi cũng béo.", kr: "형은 뚱뚱해요. 누나도 뚱뚱해요." },
    { id: 497, lesson: 'Bài 9', type: 'translate', vn: "Hôm nay tôi bận. Ngày mai tôi cũng bận.", kr: "오늘 바빠요. 내일도 바빠요." },
    { id: 498, lesson: 'Bài 9', type: 'translate', vn: "Lan là người Việt Nam. Mai cũng là người Việt Nam.", kr: "란 씨는 베트남 사람이에요. 마이 씨도 베트남 사람이에요." },
    { id: 499, lesson: 'Bài 9', type: 'translate', vn: "Tiếng Hàn khó. Tiếng Anh cũng khó.", kr: "한국어가 어려워요. 영어도 어려워요." },
    { id: 500, lesson: 'Bài 9', type: 'translate', vn: "Tôi muốn mua váy. Tôi cũng muốn mua cả mũ.", kr: "치마를 사고 싶어요. 모자도 사고 싶어요." },

    // ==========================================
    // BÀI 10: GIA ĐÌNH & KÍNH NGỮ 
    // ==========================================
    { id: 501, lesson: 'Bài 10', type: 'translate', vn: "Gia đình bạn có mấy người?", kr: "가족이 몇 명입니까?" },
    { id: 502, lesson: 'Bài 10', type: 'translate', vn: "Gia đình tôi có 4 người.", kr: "우리 가족은 네 명입니다." },
    { id: 503, lesson: 'Bài 10', type: 'translate', vn: "Gia đình tôi có bố, mẹ, anh trai và tôi.", kr: "우리 가족은 아버지, 어머니, 형하고 저입니다." },
    { id: 504, lesson: 'Bài 10', type: 'translate', vn: "Tôi không có em gái.", kr: "저는 여동생이 없습니다." },
    { id: 505, lesson: 'Bài 10', type: 'translate', vn: "Bố tôi là nhân viên công ty.", kr: "우리 아버지는 회사원이십니다." },
    { id: 506, lesson: 'Bài 10', type: 'translate', vn: "Mẹ tôi là giáo viên tiếng Hàn.", kr: "우리 어머니는 한국어 선생님이십니다." },
    { id: 507, lesson: 'Bài 10', type: 'translate', vn: "Bố tôi đang xem ti vi.", kr: "아버지께서 텔레비전을 보십니다." },
    { id: 508, lesson: 'Bài 10', type: 'translate', vn: "Mẹ tôi đang nghe radio.", kr: "어머니께서 라디오를 들으십니다." },
    { id: 509, lesson: 'Bài 10', type: 'translate', vn: "Bà tôi đang ăn tối.", kr: "할머니께서 저녁 식사를 하십니다." },
    { id: 510, lesson: 'Bài 10', type: 'translate', vn: "Ông nội tôi đang đọc báo.", kr: "할아버지께서 신문을 읽으십니다." },
    { id: 511, lesson: 'Bài 10', type: 'translate', vn: "Thầy giáo ở trong văn phòng.", kr: "선생님께서 사무실에 계십니다." },
    { id: 512, lesson: 'Bài 10', type: 'translate', vn: "Giám đốc đang làm việc ở công ty.", kr: "사장님께서 회사에서 일하십니다." },
    { id: 513, lesson: 'Bài 10', type: 'translate', vn: "Năm nay bố tôi 52 tuổi.", kr: "올해 우리 아버지는 연세가 쉰둘이십니다." },
    { id: 514, lesson: 'Bài 10', type: 'translate', vn: "Mẹ tôi năm nay 50 tuổi.", kr: "우리 어머니는 올해 쉰 살이십니다." },
    { id: 515, lesson: 'Bài 10', type: 'translate', vn: "Mẹ tôi thích món ăn Hàn Quốc.", kr: "어머니께서는 한국 음식을 좋아하십니다." },
    { id: 516, lesson: 'Bài 10', type: 'translate', vn: "Ông nội tôi thích leo núi.", kr: "할아버지께서는 등산을 좋아하십니다." },
    { id: 517, lesson: 'Bài 10', type: 'translate', vn: "Bố đã đi dạo ở công viên.", kr: "아버지께서 공원에서 산책하셨습니다." },
    { id: 518, lesson: 'Bài 10', type: 'translate', vn: "Bà ngoại đã đi chợ.", kr: "외할머니께서 시장에 가셨습니다." },
    { id: 519, lesson: 'Bài 10', type: 'translate', vn: "Hôm qua mẹ tôi đã mua hoa quả.", kr: "어제 어머니께서 과일을 사셨습니다." },
    { id: 520, lesson: 'Bài 10', type: 'translate', vn: "Ông bà tôi đang sống ở quê.", kr: "조부모님께서는 고향에 사십니다." },
    { id: 521, lesson: 'Bài 10', type: 'translate', vn: "Bố bạn bao nhiêu tuổi?", kr: "아버님 연세가 어떻게 되십니까?" },
    { id: 522, lesson: 'Bài 10', type: 'translate', vn: "Bố bạn tên là gì?", kr: "아버님 성함이 어떻게 되십니까?" },
    { id: 523, lesson: 'Bài 10', type: 'translate', vn: "Thầy giáo tên là gì?", kr: "선생님 성함이 어떻게 되십니까?" },
    { id: 524, lesson: 'Bài 10', type: 'translate', vn: "Mẹ bạn làm nghề gì?", kr: "어머님 직업이 무엇입니까?" },
    { id: 525, lesson: 'Bài 10', type: 'translate', vn: "Nhà bạn ở đâu?", kr: "댁이 어디십니까?" },
    { id: 526, lesson: 'Bài 10', type: 'translate', vn: "Bố tôi ở nhà.", kr: "아버지께서 댁에 계십니다." },
    { id: 527, lesson: 'Bài 10', type: 'translate', vn: "Mẹ tôi đang ngủ.", kr: "어머니께서 주무십니다." },
    { id: 528, lesson: 'Bài 10', type: 'translate', vn: "Thầy giáo đang nói chuyện.", kr: "선생님께서 말씀하십니다." },
    { id: 529, lesson: 'Bài 10', type: 'translate', vn: "Giám đốc đang ăn cơm.", kr: "사장님께서 진지를 드십니다." },
    { id: 530, lesson: 'Bài 10', type: 'translate', vn: "Bà tôi bị ốm.", kr: "할머니께서 편찮으십니다." },
    { id: 531, lesson: 'Bài 10', type: 'translate', vn: "Ông nội tôi đã qua đời.", kr: "할아버지께서 돌아가셨습니다." },
    { id: 532, lesson: 'Bài 10', type: 'translate', vn: "Cuối tuần bố tôi nghỉ ngơi ở nhà.", kr: "주말에 아버지께서 댁에서 쉬십니다." },
    { id: 533, lesson: 'Bài 10', type: 'translate', vn: "Bà ngoại tôi tập thể dục mỗi sáng.", kr: "외할머니께서 매일 아침 운동하십니다." },
    { id: 534, lesson: 'Bài 10', type: 'translate', vn: "Anh trai tôi là sinh viên đại học.", kr: "제 형은 대학생입니다." },
    { id: 535, lesson: 'Bài 10', type: 'translate', vn: "Chị gái tôi làm việc ở ngân hàng.", kr: "제 누나는 은행에서 일합니다." },
    { id: 536, lesson: 'Bài 10', type: 'translate', vn: "Gia đình tôi sống ở Hà Nội.", kr: "우리 가족은 하노이에 삽니다." },
    { id: 537, lesson: 'Bài 10', type: 'translate', vn: "Bố mẹ tôi sống ở Hàn Quốc.", kr: "부모님께서는 한국에 사십니다." },
    { id: 538, lesson: 'Bài 10', type: 'translate', vn: "Em trai tôi thích chơi game.", kr: "제 남동생은 게임하는 것을 좋아합니다." },
    { id: 539, lesson: 'Bài 10', type: 'translate', vn: "Gia đình tôi đi du lịch vào cuối tuần.", kr: "우리 가족은 주말에 여행을 갑니다." },
    { id: 540, lesson: 'Bài 10', type: 'translate', vn: "Chúng tôi đã chụp ảnh gia đình.", kr: "우리는 가족 사진을 찍었습니다." },
    { id: 541, lesson: 'Bài 10', type: 'translate', vn: "Tôi đã cùng mẹ đi siêu thị.", kr: "저는 어머니하고 같이 마트에 갔습니다." },
    { id: 542, lesson: 'Bài 10', type: 'translate', vn: "Bố tôi dạy toán cho em tôi.", kr: "아버지께서 동생에게 수학을 가르치십니다." },
    { id: 543, lesson: 'Bài 10', type: 'translate', vn: "Mẹ tôi làm bữa sáng rất ngon.", kr: "어머니께서 아침 식사를 맛있게 만드십니다." },
    { id: 544, lesson: 'Bài 10', type: 'translate', vn: "Gia đình tôi rất hạnh phúc.", kr: "우리 가족은 아주 행복합니다." },
    { id: 545, lesson: 'Bài 10', type: 'translate', vn: "Bố mẹ tôi luôn bận rộn.", kr: "우리 부모님은 항상 바쁘십니다." },
    { id: 546, lesson: 'Bài 10', type: 'translate', vn: "Ông nội tôi hát rất hay.", kr: "할아버지께서 노래를 아주 잘하십니다." },
    { id: 547, lesson: 'Bài 10', type: 'translate', vn: "Tôi có một người anh trai và hai người em gái.", kr: "저는 형 한 명하고 여동생 두 명이 있습니다." },
    { id: 548, lesson: 'Bài 10', type: 'translate', vn: "Bạn có anh chị em không?", kr: "형제가 어떻게 되십니까?" },
    { id: 549, lesson: 'Bài 10', type: 'translate', vn: "Tôi là con một.", kr: "저는 외동입니다." },
    { id: 550, lesson: 'Bài 10', type: 'translate', vn: "Gia đình tôi ăn tối vào lúc 7 giờ.", kr: "우리 가족은 일곱 시에 저녁을 먹습니다." },

    // ==========================================
    // BÀI 11: THỜI TIẾT & LIÊN TỪ 
    // ==========================================
    { id: 551, lesson: 'Bài 11', type: 'translate', vn: "Hôm nay thời tiết thế nào?", kr: "오늘 날씨가 어때요?" },
    { id: 552, lesson: 'Bài 11', type: 'translate', vn: "Hôm nay trời rất lạnh.", kr: "오늘은 날씨가 아주 추워요." },
    { id: 553, lesson: 'Bài 11', type: 'translate', vn: "Hôm nay trời rất nóng.", kr: "오늘은 날씨가 아주 더워요." },
    { id: 554, lesson: 'Bài 11', type: 'translate', vn: "Trời mưa và gió thổi.", kr: "비가 오고 바람이 불어요." },
    { id: 555, lesson: 'Bài 11', type: 'translate', vn: "Trời có tuyết.", kr: "눈이 와요." },
    { id: 556, lesson: 'Bài 11', type: 'translate', vn: "Mùa xuân thì ấm áp.", kr: "봄은 따뜻해요." },
    { id: 557, lesson: 'Bài 11', type: 'translate', vn: "Mùa hè thì nóng và mưa nhiều.", kr: "여름은 덥고 비가 많이 와요." },
    { id: 558, lesson: 'Bài 11', type: 'translate', vn: "Mùa thu thì mát mẻ.", kr: "가을은 시원해요." },
    { id: 559, lesson: 'Bài 11', type: 'translate', vn: "Mùa đông thì lạnh và có tuyết rơi.", kr: "겨울은 춥고 눈이 와요." },
    { id: 560, lesson: 'Bài 11', type: 'translate', vn: "Bạn thích mùa nào?", kr: "어느 계절을 좋아해요?" },
    { id: 561, lesson: 'Bài 11', type: 'translate', vn: "Tôi thích mùa thu nhất.", kr: "저는 가을을 가장 좋아해요." },
    { id: 562, lesson: 'Bài 11', type: 'translate', vn: "Hôm qua trời đã mưa.", kr: "어제 비가 왔어요." },
    { id: 563, lesson: 'Bài 11', type: 'translate', vn: "Tuần trước thời tiết đã rất đẹp.", kr: "지난주에 날씨가 아주 좋았어요." },
    { id: 564, lesson: 'Bài 11', type: 'translate', vn: "Bầu trời trong xanh.", kr: "하늘이 맑아요." },
    { id: 565, lesson: 'Bài 11', type: 'translate', vn: "Hôm nay trời nhiều mây.", kr: "오늘은 구름이 많아요." },
    { id: 566, lesson: 'Bài 11', type: 'translate', vn: "Trời âm u.", kr: "날씨가 흐려요." },
    { id: 567, lesson: 'Bài 11', type: 'translate', vn: "Tôi ăn cơm và uống trà.", kr: "저는 밥을 먹고 차를 마셔요." },
    { id: 568, lesson: 'Bài 11', type: 'translate', vn: "Buổi sáng tôi ăn bánh mì và uống sữa.", kr: "아침에 빵을 먹고 우유를 마셔요." },
    { id: 569, lesson: 'Bài 11', type: 'translate', vn: "Gia đình tôi có bố, mẹ và tôi.", kr: "우리 가족은 아버지, 어머니, 그리고 저예요." },
    { id: 570, lesson: 'Bài 11', type: 'translate', vn: "Kim chi cay và ngon.", kr: "김치가 맵고 맛있어요." },
    { id: 571, lesson: 'Bài 11', type: 'translate', vn: "Cái túi này to và nặng.", kr: "이 가방은 크고 무거워요." },
    { id: 572, lesson: 'Bài 11', type: 'translate', vn: "Nhà hàng này rẻ và đồ ăn ngon.", kr: "이 식당은 싸고 음식이 맛있어요." },
    { id: 573, lesson: 'Bài 11', type: 'translate', vn: "Căn phòng này rộng và sạch sẽ.", kr: "이 방은 넓고 깨끗해요." },
    { id: 574, lesson: 'Bài 11', type: 'translate', vn: "Tôi đi đến thư viện rồi đọc sách.", kr: "도서관에 가서 책을 읽어요." },
    { id: 575, lesson: 'Bài 11', type: 'translate', vn: "Tôi đi đến nhà ăn rồi ăn trưa.", kr: "식당에 가서 점심을 먹어요." },
    { id: 576, lesson: 'Bài 11', type: 'translate', vn: "Tôi đi đến công viên rồi tập thể dục.", kr: "공원에 가서 운동해요." },
    { id: 577, lesson: 'Bài 11', type: 'translate', vn: "Tôi tập thể thao từ 3 giờ đến 5 giờ.", kr: "세 시부터 다섯 시까지 운동해요." },
    { id: 578, lesson: 'Bài 11', type: 'translate', vn: "Tôi làm việc từ sáng đến tối.", kr: "아침부터 저녁까지 일해요." },
    { id: 579, lesson: 'Bài 11', type: 'translate', vn: "Tôi học tiếng Hàn từ thứ 2 đến thứ 6.", kr: "월요일부터 금요일까지 한국어를 공부해요." },
    { id: 580, lesson: 'Bài 11', type: 'translate', vn: "Ngân hàng mở cửa từ mấy giờ đến mấy giờ?", kr: "은행은 몇 시부터 몇 시까지 열어요?" },
    { id: 581, lesson: 'Bài 11', type: 'translate', vn: "Ngân hàng mở cửa từ 9 giờ sáng đến 4 giờ chiều.", kr: "오전 아홉 시부터 오후 네 시까지 열어요." },
    { id: 582, lesson: 'Bài 11', type: 'translate', vn: "Từ thứ 2 đến thứ 6 tôi rất bận.", kr: "월요일부터 금요일까지 아주 바빠요." },
    { id: 583, lesson: 'Bài 11', type: 'translate', vn: "Tiết học tiếng Hàn từ 8 giờ đến 10 giờ.", kr: "한국어 수업은 여덟 시부터 열 시까지예요." },
    { id: 584, lesson: 'Bài 11', type: 'translate', vn: "Ngày mai tôi sẽ gặp bạn.", kr: "내일 친구를 만날 거예요." },
    { id: 585, lesson: 'Bài 11', type: 'translate', vn: "Tối nay tôi sẽ ăn Bulgogi.", kr: "오늘 저녁에 불고기를 먹을 거예요." },
    { id: 586, lesson: 'Bài 11', type: 'translate', vn: "Cuối tuần này tôi sẽ nghỉ ngơi ở nhà.", kr: "이번 주말에 집에서 쉴 거예요." },
    { id: 587, lesson: 'Bài 11', type: 'translate', vn: "Tháng sau tôi sẽ đi du lịch Hàn Quốc.", kr: "다음 달에 한국으로 여행을 갈 거예요." },
    { id: 588, lesson: 'Bài 11', type: 'translate', vn: "Năm sau tôi sẽ tốt nghiệp đại học.", kr: "내년에 대학교를 졸업할 거예요." },
    { id: 589, lesson: 'Bài 11', type: 'translate', vn: "Chiều nay tôi sẽ mua sắm ở bách hóa.", kr: "오늘 오후에 백화점에서 쇼핑할 거예요." },
    { id: 590, lesson: 'Bài 11', type: 'translate', vn: "Kỳ nghỉ này bạn sẽ làm gì?", kr: "이번 방학에 무엇을 할 거예요?" },
    { id: 591, lesson: 'Bài 11', type: 'translate', vn: "Tôi sẽ học bơi.", kr: "저는 수영을 배울 거예요." },
    { id: 592, lesson: 'Bài 11', type: 'translate', vn: "Bạn sẽ ăn gì?", kr: "무엇을 먹을 거예요?" },
    { id: 593, lesson: 'Bài 11', type: 'translate', vn: "Tôi sẽ ăn phở.", kr: "저는 쌀국수를 먹을 거예요." },
    { id: 594, lesson: 'Bài 11', type: 'translate', vn: "Có thể ngày mai trời sẽ mưa.", kr: "내일 비가 올 거예요." },
    { id: 595, lesson: 'Bài 11', type: 'translate', vn: "Có thể thời tiết sẽ lạnh.", kr: "날씨가 추울 거예요." },
    { id: 596, lesson: 'Bài 11', type: 'translate', vn: "Quyển sách này chắc sẽ thú vị.", kr: "이 책은 재미있을 거예요." },
    { id: 597, lesson: 'Bài 11', type: 'translate', vn: "Món ăn đó chắc sẽ cay.", kr: "그 음식은 매울 거예요." },
    { id: 598, lesson: 'Bài 11', type: 'translate', vn: "Bài thi ngày mai chắc sẽ khó.", kr: "내일 시험이 어려울 거예요." },
    { id: 599, lesson: 'Bài 11', type: 'translate', vn: "Người đó chắc là người Hàn Quốc.", kr: "그 사람은 한국 사람일 거예요." },
    { id: 600, lesson: 'Bài 11', type: 'translate', vn: "Quán cà phê đó chắc sẽ đông người.", kr: "그 커피숍에 사람이 많을 거예요." },
    { id: 601, lesson: 'Bài 11', type: 'translate', vn: "Tối nay trời sẽ có tuyết.", kr: "오늘 저녁에 눈이 올 거예요." },
    { id: 602, lesson: 'Bài 11', type: 'translate', vn: "Gió thổi mạnh.", kr: "바람이 세게 불어요." },
    { id: 603, lesson: 'Bài 11', type: 'translate', vn: "Nhiệt độ đã xuống thấp.", kr: "기온이 내려갔어요." },
    { id: 604, lesson: 'Bài 11', type: 'translate', vn: "Trời trở nên ấm áp hơn.", kr: "날씨가 따뜻해졌어요." },
    { id: 605, lesson: 'Bài 11', type: 'translate', vn: "Mùa hè ở Hàn Quốc rất ẩm ướt.", kr: "한국의 여름은 습해요." },
    { id: 606, lesson: 'Bài 11', type: 'translate', vn: "Tôi sẽ dọn dẹp và giặt đồ.", kr: "청소를 하고 빨래를 할 거예요." },
    { id: 607, lesson: 'Bài 11', type: 'translate', vn: "Cuối tuần tôi thức dậy trễ và xem phim.", kr: "주말에 늦게 일어나고 영화를 봐요." },
    { id: 608, lesson: 'Bài 11', type: 'translate', vn: "Bạn tôi hát hay và nhảy đẹp.", kr: "제 친구는 노래를 잘하고 춤을 잘 춰요." },
    { id: 609, lesson: 'Bài 11', type: 'translate', vn: "Trường đại học của chúng tôi to và đẹp.", kr: "우리 대학교는 크고 예뻐요." },
    { id: 610, lesson: 'Bài 11', type: 'translate', vn: "Món ăn Việt Nam rẻ và ngon.", kr: "베트남 음식은 싸고 맛있어요." },
    { id: 611, lesson: 'Bài 11', type: 'translate', vn: "Từ ga Seoul đến ga Myeongdong mất bao lâu?", kr: "서울역부터 명동역까지 얼마나 걸려요?" },
    { id: 612, lesson: 'Bài 11', type: 'translate', vn: "Bữa tiệc bắt đầu từ 7 giờ.", kr: "파티는 일곱 시부터 시작해요." },
    { id: 613, lesson: 'Bài 11', type: 'translate', vn: "Tôi sẽ đợi đến ngày mai.", kr: "내일까지 기다릴 거예요." },
    { id: 614, lesson: 'Bài 11', type: 'translate', vn: "Chúng ta sẽ làm gì vào ngày nghỉ?", kr: "휴일에 무엇을 할 거예요?" },
    { id: 615, lesson: 'Bài 11', type: 'translate', vn: "Tôi sẽ đi leo núi cùng gia đình.", kr: "가족하고 같이 등산을 갈 거예요." },
    { id: 616, lesson: 'Bài 11', type: 'translate', vn: "Cửa hàng tiện lợi mở cửa đến 12 giờ đêm.", kr: "편의점은 밤 열두 시까지 열어요." },
    { id: 617, lesson: 'Bài 11', type: 'translate', vn: "Hôm nay tôi sẽ làm việc thêm giờ.", kr: "오늘은 야근을 할 거예요." },
    { id: 618, lesson: 'Bài 11', type: 'translate', vn: "Ngày mai tôi sẽ không đi học.", kr: "내일 학교에 안 갈 거예요." },
    { id: 619, lesson: 'Bài 11', type: 'translate', vn: "Chắc là người đó đang bận.", kr: "그 사람은 바쁠 거예요." },
    { id: 620, lesson: 'Bài 11', type: 'translate', vn: "Bây giờ chắc ngân hàng đã đóng cửa.", kr: "지금 은행이 문을 닫았을 거예요." },

    // ==========================================
    // BÀI 12: ĐIỆN THOẠI & ĐỐI CHIẾU 
    // ==========================================
    { id: 621, lesson: 'Bài 12', type: 'translate', vn: "Alo, đó có phải là số của thư viện không ạ?", kr: "여보세요, 거기 도서관이지요?" },
    { id: 622, lesson: 'Bài 12', type: 'translate', vn: "Vâng, đúng rồi ạ.", kr: "네, 맞습니다." },
    { id: 623, lesson: 'Bài 12', type: 'translate', vn: "Không, nhầm số rồi ạ.", kr: "아니요, 전화 잘못 거셨어요." },
    { id: 624, lesson: 'Bài 12', type: 'translate', vn: "Làm ơn đổi máy cho bạn Hương giúp tôi.", kr: "흐엉 씨 좀 바꿔 주세요." },
    { id: 625, lesson: 'Bài 12', type: 'translate', vn: "Vâng, xin hãy đợi một chút.", kr: "네, 잠깐만 기다리세요." },
    { id: 626, lesson: 'Bài 12', type: 'translate', vn: "Bây giờ Hương không có ở đây.", kr: "지금 흐엉 씨가 자리에 안 계십니다." },
    { id: 627, lesson: 'Bài 12', type: 'translate', vn: "Hương ra ngoài một lát rồi.", kr: "흐엉 씨는 잠깐 나갔습니다." },
    { id: 628, lesson: 'Bài 12', type: 'translate', vn: "Xin hỏi ai đang gọi đấy ạ?", kr: "실례지만 누구세요?" },
    { id: 629, lesson: 'Bài 12', type: 'translate', vn: "Tôi là Lan đây.", kr: "저는 란이에요." },
    { id: 630, lesson: 'Bài 12', type: 'translate', vn: "Bạn nhắn lại giúp tôi được không?", kr: "메시지 좀 남겨 주시겠어요?" },
    { id: 631, lesson: 'Bài 12', type: 'translate', vn: "Bảo bạn ấy gọi lại cho tôi nhé.", kr: "저에게 전화해 달라고 전해 주세요." },
    { id: 632, lesson: 'Bài 12', type: 'translate', vn: "Tôi gọi điện thoại cho bạn bè.", kr: "저는 친구에게 전화를 걸어요." },
    { id: 633, lesson: 'Bài 12', type: 'translate', vn: "Lan đã tặng quà cho An.", kr: "란 씨가 안 씨에게 선물을 주었어요." },
    { id: 634, lesson: 'Bài 12', type: 'translate', vn: "Tôi cho chó ăn.", kr: "저는 개에게 밥을 줘요." },
    { id: 635, lesson: 'Bài 12', type: 'translate', vn: "Cô giáo dạy tiếng Hàn cho học sinh.", kr: "선생님이 학생에게 한국어를 가르쳐요." },
    { id: 636, lesson: 'Bài 12', type: 'translate', vn: "Tôi nhận email từ bạn.", kr: "친구한테서 이메일을 받았어요." },
    { id: 637, lesson: 'Bài 12', type: 'translate', vn: "Tôi mượn sách từ thư viện.", kr: "도서관에서 책을 빌렸어요." },
    { id: 638, lesson: 'Bài 12', type: 'translate', vn: "Tôi gọi điện cho mẹ mỗi ngày.", kr: "매일 어머니께 전화를 드려요." },
    { id: 639, lesson: 'Bài 12', type: 'translate', vn: "Tôi biếu quà cho ông nội.", kr: "할아버지께 선물을 드려요." },
    { id: 640, lesson: 'Bài 12', type: 'translate', vn: "Tôi hỏi thầy giáo.", kr: "선생님께 물어봐요." },
    { id: 641, lesson: 'Bài 12', type: 'translate', vn: "Tôi muốn học tiếng Hàn nhưng không có thời gian.", kr: "한국어를 공부하고 싶지만 시간이 없어요." },
    { id: 642, lesson: 'Bài 12', type: 'translate', vn: "Tiếng Hàn khó nhưng thú vị.", kr: "한국어는 어렵지만 재미있어요." },
    { id: 643, lesson: 'Bài 12', type: 'translate', vn: "Chiếc váy này đắt nhưng đẹp.", kr: "이 치마는 비싸지만 예뻐요." },
    { id: 644, lesson: 'Bài 12', type: 'translate', vn: "Đồ ăn Hàn Quốc cay nhưng ngon.", kr: "한국 음식은 맵지만 맛있어요." },
    { id: 645, lesson: 'Bài 12', type: 'translate', vn: "Hôm qua tôi đã học bài nhưng hôm nay tôi đi chơi.", kr: "어제는 공부했지만 오늘은 놀아요." },
    { id: 646, lesson: 'Bài 12', type: 'translate', vn: "Anh tôi béo nhưng tôi thì gầy.", kr: "형은 뚱뚱하지만 저는 날씬해요." },
    { id: 647, lesson: 'Bài 12', type: 'translate', vn: "Căn phòng này nhỏ nhưng sạch sẽ.", kr: "이 방은 작지만 깨끗해요." },
    { id: 648, lesson: 'Bài 12', type: 'translate', vn: "Công việc vất vả nhưng lương cao.", kr: "일은 힘들지만 월급이 많아요." },
    { id: 649, lesson: 'Bài 12', type: 'translate', vn: "Ngày mai tôi định đi ngắm hoa anh đào.", kr: "내일 벚꽃 구경을 하려고 해요." },
    { id: 650, lesson: 'Bài 12', type: 'translate', vn: "Vào kì nghỉ này tôi định học bơi.", kr: "이번 방학에 수영을 배우려고 해요." },
    { id: 651, lesson: 'Bài 12', type: 'translate', vn: "Tôi định tặng quà cho mẹ.", kr: "어머니께 선물을 드리려고 해요." },
    { id: 652, lesson: 'Bài 12', type: 'translate', vn: "Tôi định học cao học.", kr: "대학원에 진학하려고 해요." },
    { id: 653, lesson: 'Bài 12', type: 'translate', vn: "Tôi định tìm việc ở công ty Hàn Quốc.", kr: "한국 회사에 취직하려고 해요." },
    { id: 654, lesson: 'Bài 12', type: 'translate', vn: "Cuối tuần này bạn định làm gì?", kr: "이번 주말에 무엇을 하려고 해요?" },
    { id: 655, lesson: 'Bài 12', type: 'translate', vn: "Tôi định đi xem phim với bạn gái.", kr: "여자친구하고 영화를 보려고 해요." },
    { id: 656, lesson: 'Bài 12', type: 'translate', vn: "Tôi định dọn dẹp nhà cửa.", kr: "집을 청소하려고 해요." },
    { id: 657, lesson: 'Bài 12', type: 'translate', vn: "Tôi định làm món cơm trộn.", kr: "비빔밥을 만들려고 해요." },
    { id: 658, lesson: 'Bài 12', type: 'translate', vn: "Tôi định chuyển nhà vào tháng sau.", kr: "다음 달에 이사하려고 해요." },
    { id: 659, lesson: 'Bài 12', type: 'translate', vn: "Điện thoại đang bận.", kr: "통화 중이에요." },
    { id: 660, lesson: 'Bài 12', type: 'translate', vn: "Làm ơn nói to lên một chút.", kr: "크게 말씀해 주세요." },
    { id: 661, lesson: 'Bài 12', type: 'translate', vn: "Tôi không nghe rõ.", kr: "잘 안 들려요." },
    { id: 662, lesson: 'Bài 12', type: 'translate', vn: "Lát nữa tôi sẽ gọi lại.", kr: "이따가 다시 전화할게요." },
    { id: 663, lesson: 'Bài 12', type: 'translate', vn: "Hãy gọi lại sau nhé.", kr: "나중에 다시 전화해 주세요." },
    { id: 664, lesson: 'Bài 12', type: 'translate', vn: "Điện thoại của tôi hết pin rồi.", kr: "제 휴대폰 배터리가 없어요." },
    { id: 665, lesson: 'Bài 12', type: 'translate', vn: "Tôi có thể sử dụng điện thoại này được không?", kr: "이 전화를 사용해도 돼요?" },
    { id: 666, lesson: 'Bài 12', type: 'translate', vn: "Bạn tôi đã gửi tin nhắn cho tôi.", kr: "친구가 저에게 문자를 보냈어요." },
    { id: 667, lesson: 'Bài 12', type: 'translate', vn: "Tôi đã kiểm tra email.", kr: "저는 이메일을 확인했어요." },
    { id: 668, lesson: 'Bài 12', type: 'translate', vn: "Tôi định gọi điện thoại quốc tế.", kr: "국제 전화를 걸려고 해요." },
    { id: 669, lesson: 'Bài 12', type: 'translate', vn: "Xin lỗi vì đã gọi điện vào đêm muộn.", kr: "밤늦게 전화해서 죄송합니다." },
    { id: 670, lesson: 'Bài 12', type: 'translate', vn: "Nhà hàng đó ngon nhưng đắt.", kr: "그 식당은 맛있지만 비싸요." },
    { id: 671, lesson: 'Bài 12', type: 'translate', vn: "Xe máy nhanh nhưng nguy hiểm.", kr: "오토바이는 빠르지만 위험해요." },
    { id: 672, lesson: 'Bài 12', type: 'translate', vn: "Tôi định làm thêm vào kỳ nghỉ đông.", kr: "겨울 방학에 아르바이트를 하려고 해요." },
    { id: 673, lesson: 'Bài 12', type: 'translate', vn: "Tôi định mua máy tính xách tay mới.", kr: "새 노트북을 사고 싶어요." },
    { id: 674, lesson: 'Bài 12', type: 'translate', vn: "Tôi đã viết thư cho bà ngoại.", kr: "외할머니께 편지를 썼어요." },
    { id: 675, lesson: 'Bài 12', type: 'translate', vn: "Cô ấy định đi du học ở Mỹ.", kr: "그녀는 미국으로 유학을 가려고 해요." },
    { id: 676, lesson: 'Bài 12', type: 'translate', vn: "Tôi đã nói bí mật với bạn.", kr: "친구한테 비밀을 말했어요." },
    { id: 677, lesson: 'Bài 12', type: 'translate', vn: "Tôi muốn mua điện thoại thông minh.", kr: "스마트폰을 사고 싶어요." },
    { id: 678, lesson: 'Bài 12', type: 'translate', vn: "Tôi sẽ để lại lời nhắn.", kr: "메시지를 남길게요." },
    { id: 679, lesson: 'Bài 12', type: 'translate', vn: "Anh trai tôi học giỏi nhưng tôi thì học kém.", kr: "형은 공부를 잘하지만 저는 공부를 못해요." },
    { id: 680, lesson: 'Bài 12', type: 'translate', vn: "Mùa hè Hàn Quốc nóng nhưng mùa đông thì rất lạnh.", kr: "한국의 여름은 덥지만 겨울은 아주 추워요." },

    // ==========================================
    // BÀI 13: SINH NHẬT & LÝ DO 
    // ==========================================
    { id: 681, lesson: 'Bài 13', type: 'translate', vn: "Sinh nhật bạn là khi nào?", kr: "생일이 언제예요?" },
    { id: 682, lesson: 'Bài 13', type: 'translate', vn: "Hôm nay là sinh nhật tôi.", kr: "오늘은 제 생일이에요." },
    { id: 683, lesson: 'Bài 13', type: 'translate', vn: "Chúc mừng sinh nhật bạn!", kr: "생일 축하해요!" },
    { id: 684, lesson: 'Bài 13', type: 'translate', vn: "Chúc thầy sinh nhật vui vẻ ạ! (Kính ngữ)", kr: "생신 축하드립니다!" },
    { id: 685, lesson: 'Bài 13', type: 'translate', vn: "Tôi đã nhận được nhiều quà sinh nhật.", kr: "생일 선물을 많이 받았어요." },
    { id: 686, lesson: 'Bài 13', type: 'translate', vn: "Tôi đã tặng quà cho bạn.", kr: "친구에게 선물을 주었어요." },
    { id: 687, lesson: 'Bài 13', type: 'translate', vn: "Tôi đã tổ chức tiệc sinh nhật ở nhà.", kr: "집에서 생일 파티를 했어요." },
    { id: 688, lesson: 'Bài 13', type: 'translate', vn: "Tôi đã mời nhiều bạn bè đến dự tiệc.", kr: "파티에 친구들을 많이 초대했어요." },
    { id: 689, lesson: 'Bài 13', type: 'translate', vn: "Chúng tôi đã cùng nhau ăn bánh kem.", kr: "우리는 같이 케이크를 먹었어요." },
    { id: 690, lesson: 'Bài 13', type: 'translate', vn: "Chúng tôi đã hát bài hát chúc mừng sinh nhật.", kr: "생일 축하 노래를 불렀어요." },
    { id: 691, lesson: 'Bài 13', type: 'translate', vn: "Vì thời tiết đẹp nên tôi định đi công viên.", kr: "날씨가 좋아서 공원에 가려고 해요." },
    { id: 692, lesson: 'Bài 13', type: 'translate', vn: "Vì đau đầu nên tôi đã uống thuốc.", kr: "머리가 아파서 약을 먹었어요." },
    { id: 693, lesson: 'Bài 13', type: 'translate', vn: "Vì bận nên tôi không thể đến bữa tiệc.", kr: "바빠서 파티에 못 갔어요." },
    { id: 694, lesson: 'Bài 13', type: 'translate', vn: "Vì không có tiền nên tôi không mua được quần áo.", kr: "돈이 없어서 옷을 못 샀어요." },
    { id: 695, lesson: 'Bài 13', type: 'translate', vn: "Vì trời mưa nên tôi đã ở nhà.", kr: "비가 와서 집에 있었어요." },
    { id: 696, lesson: 'Bài 13', type: 'translate', vn: "Vì tiếng Hàn khó nên tôi học mỗi ngày.", kr: "한국어가 어려워서 매일 공부해요." },
    { id: 697, lesson: 'Bài 13', type: 'translate', vn: "Vì mệt nên tôi muốn nghỉ ngơi.", kr: "피곤해서 쉬고 싶어요." },
    { id: 698, lesson: 'Bài 13', type: 'translate', vn: "Vì đói bụng nên tôi đã ăn nhiều.", kr: "배가 고파서 많이 먹었어요." },
    { id: 699, lesson: 'Bài 13', type: 'translate', vn: "Vì gặp được bạn nên tôi rất vui.", kr: "친구를 만나서 정말 반가워요." },
    { id: 700, lesson: 'Bài 13', type: 'translate', vn: "Vì đến trễ nên tôi xin lỗi.", kr: "늦어서 죄송합니다." },
    { id: 701, lesson: 'Bài 13', type: 'translate', vn: "Chúng ta ăn gì vào buổi trưa nhỉ?", kr: "점심에 무엇을 먹을까요?" },
    { id: 702, lesson: 'Bài 13', type: 'translate', vn: "Hãy cùng nhau ăn trưa ở nhà ăn học sinh nhé?", kr: "학생 식당에서 같이 점심을 먹을까요?" },
    { id: 703, lesson: 'Bài 13', type: 'translate', vn: "Chúng ta hãy cùng đi du lịch Nha Trang nhé?", kr: "나트랑으로 같이 여행을 갈까요?" },
    { id: 704, lesson: 'Bài 13', type: 'translate', vn: "Chúng ta gặp nhau lúc mấy giờ nhỉ?", kr: "우리 몇 시에 만날까요?" },
    { id: 705, lesson: 'Bài 13', type: 'translate', vn: "Chúng ta gặp nhau ở đâu nhỉ?", kr: "우리 어디에서 만날까요?" },
    { id: 706, lesson: 'Bài 13', type: 'translate', vn: "Cuối tuần này chúng ta đi xem phim nhé?", kr: "이번 주말에 영화 보러 갈까요?" },
    { id: 707, lesson: 'Bài 13', type: 'translate', vn: "Tôi bật đèn lên nhé?", kr: "제가 불을 켤까요?" },
    { id: 708, lesson: 'Bài 13', type: 'translate', vn: "Tôi đóng cửa sổ lại nhé?", kr: "제가 창문을 닫을까요?" },
    { id: 709, lesson: 'Bài 13', type: 'translate', vn: "Tôi giúp bạn một tay nhé?", kr: "제가 좀 도와드릴까요?" },
    { id: 710, lesson: 'Bài 13', type: 'translate', vn: "Tôi làm món cơm trộn nhé?", kr: "제가 비빔밥을 만들까요?" },
    { id: 711, lesson: 'Bài 13', type: 'translate', vn: "Bạn có thể ăn kim chi không?", kr: "김치를 먹을 수 있어요?" },
    { id: 712, lesson: 'Bài 13', type: 'translate', vn: "Không, tôi không thể ăn kim chi.", kr: "아니요, 김치를 못 먹어요." },
    { id: 713, lesson: 'Bài 13', type: 'translate', vn: "Vì không có thời gian nên tôi không thể làm bài tập.", kr: "시간이 없어서 숙제를 못 했어요." },
    { id: 714, lesson: 'Bài 13', type: 'translate', vn: "Hôm qua vì ốm nên tôi không thể đi học.", kr: "어제 아파서 학교에 못 갔어요." },
    { id: 715, lesson: 'Bài 13', type: 'translate', vn: "Vì tiếng ồn nên tôi không thể ngủ được.", kr: "시끄러워서 잠을 못 잤어요." },
    { id: 716, lesson: 'Bài 13', type: 'translate', vn: "Tôi không biết bơi.", kr: "저는 수영을 못 해요." },
    { id: 717, lesson: 'Bài 13', type: 'translate', vn: "Tôi không biết lái xe.", kr: "저는 운전을 못 해요." },
    { id: 718, lesson: 'Bài 13', type: 'translate', vn: "Vì cay quá nên tôi không thể ăn được.", kr: "너무 매워서 못 먹겠어요." },
    { id: 719, lesson: 'Bài 13', type: 'translate', vn: "Tôi đã không thể tham gia buổi họp.", kr: "회의에 참석하지 못했어요." },
    { id: 720, lesson: 'Bài 13', type: 'translate', vn: "Tôi không uống được rượu.", kr: "저는 술을 못 마셔요." },
    { id: 721, lesson: 'Bài 13', type: 'translate', vn: "Tôi tặng một bó hoa cho người yêu.", kr: "여자친구에게 꽃다발을 선물했어요." },
    { id: 722, lesson: 'Bài 13', type: 'translate', vn: "Bạn thích món quà gì nhất?", kr: "어떤 선물을 가장 좋아해요?" },
    { id: 723, lesson: 'Bài 13', type: 'translate', vn: "Vì bộ phim chán nên tôi đã đi ngủ.", kr: "영화가 재미없어서 잤어요." },
    { id: 724, lesson: 'Bài 13', type: 'translate', vn: "Trời tối rồi, tôi bật đèn nhé?", kr: "어두운데 불을 켤까요?" },
    { id: 725, lesson: 'Bài 13', type: 'translate', vn: "Xin lỗi, bây giờ tôi bận nên không thể giúp bạn được.", kr: "미안해요, 지금 바빠서 못 도와줘요." },
    { id: 726, lesson: 'Bài 13', type: 'translate', vn: "Cuối tuần vì có bài kiểm tra nên tôi định đi thư viện.", kr: "주말에 시험이 있어서 도서관에 가려고 해요." },
    { id: 727, lesson: 'Bài 13', type: 'translate', vn: "Thời tiết nóng nên uống nước ép đá nhé?", kr: "날씨가 더운데 시원한 주스를 마실까요?" },
    { id: 728, lesson: 'Bài 13', type: 'translate', vn: "Bố tôi vì mệt nên đã nghỉ ngơi từ sớm.", kr: "아버지께서 피곤하셔서 일찍 쉬셨어요." },
    { id: 729, lesson: 'Bài 13', type: 'translate', vn: "Sinh nhật bạn trai tôi định mua đồng hồ.", kr: "남자친구 생일에 시계를 사려고 해요." },
    { id: 730, lesson: 'Bài 13', type: 'translate', vn: "Vì thời tiết lạnh nên không thể đi dã ngoại.", kr: "날씨가 추워서 소풍을 못 가요." },
    { id: 731, lesson: 'Bài 13', type: 'translate', vn: "Tôi chụp ảnh cho bạn nhé?", kr: "제가 사진을 찍어 줄까요?" },
    { id: 732, lesson: 'Bài 13', type: 'translate', vn: "Chúng ta mua món quà này nhé?", kr: "이 선물을 살까요?" },
    { id: 733, lesson: 'Bài 13', type: 'translate', vn: "Dạo này vì bận rộn nên tôi không thể gặp bạn bè.", kr: "요즘 바빠서 친구들을 못 만나요." },
    { id: 734, lesson: 'Bài 13', type: 'translate', vn: "Buổi tiệc kết thúc lúc mấy giờ?", kr: "파티가 몇 시에 끝나요?" },
    { id: 735, lesson: 'Bài 13', type: 'translate', vn: "Ai sẽ đến bữa tiệc sinh nhật?", kr: "생일 파티에 누가 올 거예요?" },
    { id: 736, lesson: 'Bài 13', type: 'translate', vn: "Mẹ đã nấu canh rong biển cho tôi.", kr: "어머니께서 미역국을 끓여 주셨어요." },
    { id: 737, lesson: 'Bài 13', type: 'translate', vn: "Người Hàn Quốc thường ăn canh rong biển vào ngày sinh nhật.", kr: "한국 사람들은 생일에 보통 미역국을 먹어요." },
    { id: 738, lesson: 'Bài 13', type: 'translate', vn: "Anh trai đã mua máy tính mới cho tôi.", kr: "형이 저에게 새 컴퓨터를 사 주었어요." },
    { id: 739, lesson: 'Bài 13', type: 'translate', vn: "Chúng ta hát ở phòng karaoke nhé?", kr: "노래방에서 노래를 부를까요?" },
    { id: 740, lesson: 'Bài 13', type: 'translate', vn: "Tôi mang bánh kem đến nhé?", kr: "제가 케이크를 가져올까요?" },
    { id: 741, lesson: 'Bài 13', type: 'translate', vn: "Vì đường tắc nên tôi đã đi bằng tàu điện ngầm.", kr: "길이 막혀서 지하철을 탔어요." },
    { id: 742, lesson: 'Bài 13', type: 'translate', vn: "Vì thích quần áo Hàn Quốc nên tôi thường mua sắm trên mạng.", kr: "한국 옷을 좋아해서 인터넷으로 자주 쇼핑해요." },
    { id: 743, lesson: 'Bài 13', type: 'translate', vn: "Tôi đọc phần này nhé?", kr: "제가 이 부분을 읽을까요?" },
    { id: 744, lesson: 'Bài 13', type: 'translate', vn: "Vì không biết số điện thoại nên tôi không thể gọi được.", kr: "전화번호를 몰라서 전화를 못 걸었어요." },
    { id: 745, lesson: 'Bài 13', type: 'translate', vn: "Buổi tối chúng ta ăn Pizza nhé?", kr: "저녁에 피자를 먹을까요?" },
    { id: 746, lesson: 'Bài 13', type: 'translate', vn: "Vì không quen đường nên tôi đã đi taxi.", kr: "길을 잘 몰라서 택시를 탔어요." },
    { id: 747, lesson: 'Bài 13', type: 'translate', vn: "Vì giá đắt quá nên tôi không thể mua đôi giày đó.", kr: "값이 너무 비싸서 그 신발을 못 샀어요." },
    { id: 748, lesson: 'Bài 13', type: 'translate', vn: "Vì hôm nay là thứ 7 nên ngân hàng nghỉ làm.", kr: "오늘은 토요일이어서 은행이 쉬어요." },
    { id: 749, lesson: 'Bài 13', type: 'translate', vn: "Tôi sẽ giới thiệu một người bạn tốt cho bạn nhé?", kr: "제가 좋은 친구를 소개해 줄까요?" },
    { id: 750, lesson: 'Bài 13', type: 'translate', vn: "Vì trời nhiều mây nên chắc sẽ không thấy được trăng.", kr: "구름이 많아서 달을 못 볼 거예요." },
	// ==========================================
    // BÀI 14: SỞ THÍCH & KHẢ NĂNG (ㄹ/을 수 있다)
    // ==========================================
    { id: 751, lesson: 'Bài 14', type: 'translate', vn: "Sở thích của bạn là gì?", kr: "취미가 무엇입니까?" },
    { id: 752, lesson: 'Bài 14', type: 'translate', vn: "Sở thích của tôi là đọc sách.", kr: "제 취미는 독서입니다." },
    { id: 753, lesson: 'Bài 14', type: 'translate', vn: "Tôi thích nghe nhạc.", kr: "저는 음악 듣는 것을 좋아합니다." },
    { id: 754, lesson: 'Bài 14', type: 'translate', vn: "Tôi rất ghét việc dọn dẹp.", kr: "저는 청소하는 것을 아주 싫어합니다." },
    { id: 755, lesson: 'Bài 14', type: 'translate', vn: "Sở thích của anh tôi là xem phim.", kr: "우리 형의 취미는 영화 보기입니다." },
    { id: 756, lesson: 'Bài 14', type: 'translate', vn: "Vào thời gian rảnh rỗi bạn thường làm gì?", kr: "시간이 있을 때 보통 무엇을 합니까?" },
    { id: 757, lesson: 'Bài 14', type: 'translate', vn: "Tôi thường đi dạo ở công viên.", kr: "보통 공원에서 산책합니다." },
    { id: 758, lesson: 'Bài 14', type: 'translate', vn: "Tôi thích chơi thể thao.", kr: "저는 운동하는 것을 좋아합니다." },
    { id: 759, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thích bơi lội không?", kr: "수영하는 것을 좋아합니까?" },
    { id: 760, lesson: 'Bài 14', type: 'translate', vn: "Vâng, tôi bơi rất giỏi.", kr: "네, 저는 수영을 아주 잘합니다." },
    { id: 761, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể bơi không?", kr: "수영을 할 수 있습니까?" },
    { id: 762, lesson: 'Bài 14', type: 'translate', vn: "Vâng, tôi có thể bơi.", kr: "네, 수영을 할 수 있습니다." },
    { id: 763, lesson: 'Bài 14', type: 'translate', vn: "Không, tôi không thể bơi.", kr: "아니요, 수영을 할 수 없습니다." },
    { id: 764, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể lái xe không?", kr: "운전을 할 수 있습니까?" },
    { id: 765, lesson: 'Bài 14', type: 'translate', vn: "Không, tôi chưa biết lái xe.", kr: "아니요, 운전을 할 수 없습니다." },
    { id: 766, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể nói tiếng Hàn không?", kr: "한국어를 할 수 있습니까?" },
    { id: 767, lesson: 'Bài 14', type: 'translate', vn: "Tôi có thể nói một chút tiếng Hàn.", kr: "한국어를 조금 할 수 있습니다." },
    { id: 768, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể ăn món ăn cay không?", kr: "매운 음식을 먹을 수 있습니까?" },
    { id: 769, lesson: 'Bài 14', type: 'translate', vn: "Vâng, tôi ăn cay rất giỏi.", kr: "네, 매운 것을 아주 잘 먹습니다." },
    { id: 770, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể nấu món ăn Hàn Quốc không?", kr: "한국 음식을 만들 수 있습니까?" },
    { id: 771, lesson: 'Bài 14', type: 'translate', vn: "Tôi có thể làm món cơm trộn.", kr: "비빔밥을 만들 수 있습니다." },
    { id: 772, lesson: 'Bài 14', type: 'translate', vn: "Người đó hát rất hay.", kr: "그 사람은 노래를 아주 잘 부릅니다." },
    { id: 773, lesson: 'Bài 14', type: 'translate', vn: "Tôi hát rất dở.", kr: "저는 노래를 못 부릅니다." },
    { id: 774, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể chơi piano không?", kr: "피아노를 칠 수 있습니까?" },
    { id: 775, lesson: 'Bài 14', type: 'translate', vn: "Tôi chơi piano mỗi ngày.", kr: "저는 매일 피아노를 칩니다." },
    { id: 776, lesson: 'Bài 14', type: 'translate', vn: "Sở thích của em tôi là sưu tầm tem.", kr: "제 동생의 취미는 우표 모으기입니다." },
    { id: 777, lesson: 'Bài 14', type: 'translate', vn: "Tôi thích việc chụp ảnh.", kr: "저는 사진 찍는 것을 좋아합니다." },
    { id: 778, lesson: 'Bài 14', type: 'translate', vn: "Cuối tuần tôi hay đi xem phim một mình.", kr: "주말에 혼자 영화 보는 것을 좋아합니다." },
    { id: 779, lesson: 'Bài 14', type: 'translate', vn: "Tôi muốn học chơi guitar.", kr: "기타 치는 것을 배우고 싶습니다." },
    { id: 780, lesson: 'Bài 14', type: 'translate', vn: "Hôm nay tôi không thể gặp bạn.", kr: "오늘은 친구를 만날 수 없습니다." },
    { id: 781, lesson: 'Bài 14', type: 'translate', vn: "Vì bận nên tôi không thể đi du lịch.", kr: "바빠서 여행을 갈 수 없습니다." },
    { id: 782, lesson: 'Bài 14', type: 'translate', vn: "Tôi có thể uống được 2 chai Soju.", kr: "소주를 두 병 마실 수 있습니다." },
    { id: 783, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể đọc chữ Hán không?", kr: "한자를 읽을 수 있습니까?" },
    { id: 784, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể giải quyết bài toán này không?", kr: "이 수학 문제를 풀 수 있습니까?" },
    { id: 785, lesson: 'Bài 14', type: 'translate', vn: "Ở đây có thể hút thuốc không?", kr: "여기에서 담배를 피울 수 있습니까?" },
    { id: 786, lesson: 'Bài 14', type: 'translate', vn: "Không, ở đây không thể hút thuốc.", kr: "아니요, 여기에서는 피울 수 없습니다." },
    { id: 787, lesson: 'Bài 14', type: 'translate', vn: "Chúng ta có thể gặp nhau lúc mấy giờ?", kr: "몇 시에 만날 수 있습니까?" },
    { id: 788, lesson: 'Bài 14', type: 'translate', vn: "Tôi có thể đợi đến 5 giờ.", kr: "다섯 시까지 기다릴 수 있습니다." },
    { id: 789, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể gửi email cho tôi không?", kr: "저에게 이메일을 보낼 수 있습니까?" },
    { id: 790, lesson: 'Bài 14', type: 'translate', vn: "Sở thích của giám đốc là chơi golf.", kr: "사장님의 취미는 골프 치기입니다." },
    { id: 791, lesson: 'Bài 14', type: 'translate', vn: "Tôi thích bộ phim mà tôi đã xem hôm qua.", kr: "어제 본 영화를 좋아합니다." },
    { id: 792, lesson: 'Bài 14', type: 'translate', vn: "Người mà đang hát là bạn tôi.", kr: "노래를 부르는 사람은 제 친구입니다." },
    { id: 793, lesson: 'Bài 14', type: 'translate', vn: "Món ăn mà mẹ làm là ngon nhất.", kr: "어머니께서 만드신 음식이 가장 맛있습니다." },
    { id: 794, lesson: 'Bài 14', type: 'translate', vn: "Cuốn sách mà tôi đọc bây giờ rất hay.", kr: "제가 지금 읽는 책이 재미있습니다." },
    { id: 795, lesson: 'Bài 14', type: 'translate', vn: "Đây là bức ảnh tôi đã chụp ở Hàn Quốc.", kr: "이것은 제가 한국에서 찍은 사진입니다." },
    { id: 796, lesson: 'Bài 14', type: 'translate', vn: "Nơi tôi muốn đi nhất là đảo Jeju.", kr: "제가 가장 가고 싶은 곳은 제주도입니다." },
    { id: 797, lesson: 'Bài 14', type: 'translate', vn: "Quà mà tôi đã nhận vào sinh nhật là một cái đồng hồ.", kr: "생일에 받은 선물은 시계입니다." },
    { id: 798, lesson: 'Bài 14', type: 'translate', vn: "Hãy cho tôi xem áo mà bạn mua hôm qua.", kr: "어제 산 옷을 보여 주세요." },
    { id: 799, lesson: 'Bài 14', type: 'translate', vn: "Đó là bài hát mà tôi hay nghe dạo này.", kr: "제가 요즘 자주 듣는 노래입니다." },
    { id: 800, lesson: 'Bài 14', type: 'translate', vn: "Người bạn mà tôi gặp hôm nay là người Mỹ.", kr: "오늘 만나는 친구는 미국 사람입니다." },
    { id: 801, lesson: 'Bài 14', type: 'translate', vn: "Ở trung tâm có trung tâm thương mại nào bán đồ rẻ không?", kr: "시내에 물건을 싸게 파는 백화점이 있어요?" },
    { id: 802, lesson: 'Bài 14', type: 'translate', vn: "Người đang uống cà phê là thầy giáo.", kr: "커피를 마시는 분은 선생님이십니다." },
    { id: 803, lesson: 'Bài 14', type: 'translate', vn: "Món ăn tôi thích nhất là phở.", kr: "제가 가장 좋아하는 음식은 쌀국수입니다." },
    { id: 804, lesson: 'Bài 14', type: 'translate', vn: "Đây là quán ăn tôi thường đi.", kr: "여기는 제가 자주 가는 식당입니다." },
    { id: 805, lesson: 'Bài 14', type: 'translate', vn: "Tôi đang tìm người có thể nói tiếng Anh.", kr: "영어를 할 수 있는 사람을 찾습니다." },
    { id: 806, lesson: 'Bài 14', type: 'translate', vn: "Bạn có biết việc mà tôi nói không?", kr: "제가 말한 것을 아십니까?" },
    { id: 807, lesson: 'Bài 14', type: 'translate', vn: "Từ vựng mà tôi không biết rất nhiều.", kr: "모르는 단어가 너무 많습니다." },
    { id: 808, lesson: 'Bài 14', type: 'translate', vn: "Người bạn đang sống ở Mỹ sẽ đến chơi.", kr: "미국에 사는 친구가 놀러 올 겁니다." },
    { id: 809, lesson: 'Bài 14', type: 'translate', vn: "Nhà mà tôi đang sống hơi xa trường.", kr: "제가 사는 집은 학교에서 조금 멉니다." },
    { id: 810, lesson: 'Bài 14', type: 'translate', vn: "Tôi đã không thể đến nơi đã hẹn.", kr: "약속한 장소에 못 갔습니다." },
    { id: 811, lesson: 'Bài 14', type: 'translate', vn: "Thứ 7 tuần này tôi có nhiều việc phải làm.", kr: "이번 주 토요일에 해야 할 일이 많습니다." },
    { id: 812, lesson: 'Bài 14', type: 'translate', vn: "Người mà bạn muốn gặp là ai?", kr: "만나고 싶은 사람이 누구입니까?" },
    { id: 813, lesson: 'Bài 14', type: 'translate', vn: "Đây là bài tập mà tôi làm hôm qua.", kr: "제가 어제 한 숙제입니다." },
    { id: 814, lesson: 'Bài 14', type: 'translate', vn: "Tôi rất thích cái túi bạn đã mua.", kr: "네가 산 가방이 아주 마음에 들어." },
    { id: 815, lesson: 'Bài 14', type: 'translate', vn: "Nơi đó không có món đồ mà tôi cần.", kr: "거기에 제가 필요한 물건이 없습니다." },
    { id: 816, lesson: 'Bài 14', type: 'translate', vn: "Bộ phim chiếu ngày mai là phim hành động.", kr: "내일 상영하는 영화는 액션 영화입니다." },
    { id: 817, lesson: 'Bài 14', type: 'translate', vn: "Tôi không có ai có thể tin tưởng được.", kr: "믿을 수 있는 사람이 없습니다." },
    { id: 818, lesson: 'Bài 14', type: 'translate', vn: "Đây là bức ảnh mà bạn tôi đã gửi.", kr: "친구가 보낸 사진입니다." },
    { id: 819, lesson: 'Bài 14', type: 'translate', vn: "Khu vực mà tôi đang sống yên tĩnh.", kr: "제가 사는 동네는 조용합니다." },
    { id: 820, lesson: 'Bài 14', type: 'translate', vn: "Đồ mà tôi thích ăn nhất là thịt bò.", kr: "제가 제일 좋아하는 고기는 소고기입니다." },
    { id: 821, lesson: 'Bài 14', type: 'translate', vn: "Cái áo mà tôi đang mặc hơi nhỏ.", kr: "제가 지금 입는 옷은 조금 작습니다." },
    { id: 822, lesson: 'Bài 14', type: 'translate', vn: "Bài hát mà tôi thích là bài hát buồn.", kr: "제가 좋아하는 노래는 슬픈 노래입니다." },
    { id: 823, lesson: 'Bài 14', type: 'translate', vn: "Bạn có người bạn nào sống ở Hàn Quốc không?", kr: "한국에 사는 친구가 있습니까?" },
    { id: 824, lesson: 'Bài 14', type: 'translate', vn: "Thời gian tôi học bài là buổi tối.", kr: "제가 공부하는 시간은 저녁입니다." },
    { id: 825, lesson: 'Bài 14', type: 'translate', vn: "Đây là món quà tôi mua cho bạn.", kr: "이것은 너를 위해 산 선물이야." },
    { id: 826, lesson: 'Bài 14', type: 'translate', vn: "Vì mưa nên tôi không thể đi đá bóng.", kr: "비가 와서 축구를 할 수 없어요." },
    { id: 827, lesson: 'Bài 14', type: 'translate', vn: "Sở thích của em trai tôi là sưu tầm tiền xu.", kr: "내 동생의 취미는 동전 모으기입니다." },
    { id: 828, lesson: 'Bài 14', type: 'translate', vn: "Tôi giỏi việc làm đồ ăn Hàn Quốc.", kr: "저는 한국 음식 만드는 것을 잘합니다." },
    { id: 829, lesson: 'Bài 14', type: 'translate', vn: "Môn thể thao mà tôi thích là bóng bàn.", kr: "제가 좋아하는 운동은 탁구입니다." },
    { id: 830, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể chơi cầu lông không?", kr: "배드민턴을 칠 수 있어요?" },
    { id: 831, lesson: 'Bài 14', type: 'translate', vn: "Tôi không có quần áo để mặc vào ngày mai.", kr: "내일 입을 옷이 없어요." },
    { id: 832, lesson: 'Bài 14', type: 'translate', vn: "Chúng ta cần thời gian nghỉ ngơi.", kr: "우리는 쉴 시간이 필요해요." },
    { id: 833, lesson: 'Bài 14', type: 'translate', vn: "Có rất nhiều nơi để đi chơi ở Seoul.", kr: "서울에는 놀러 갈 곳이 많아요." },
    { id: 834, lesson: 'Bài 14', type: 'translate', vn: "Người mà đang cười kia là ai?", kr: "웃고 있는 사람은 누구입니까?" },
    { id: 835, lesson: 'Bài 14', type: 'translate', vn: "Tôi đã mất chiếc ví mà tôi yêu thích.", kr: "제가 제일 좋아하는 지갑을 잃어버렸어요." },
    { id: 836, lesson: 'Bài 14', type: 'translate', vn: "Vấn đề mà chúng ta phải giải quyết rất nhiều.", kr: "우리가 해결해야 할 문제가 많아요." },
    { id: 837, lesson: 'Bài 14', type: 'translate', vn: "Người mà nhận điện thoại là quản lý.", kr: "전화를 받는 사람은 과장님입니다." },
    { id: 838, lesson: 'Bài 14', type: 'translate', vn: "Nhà mà có sân vườn rất đắt.", kr: "정원이 있는 집은 아주 비쌉니다." },
    { id: 839, lesson: 'Bài 14', type: 'translate', vn: "Người không ăn cay có nhiều.", kr: "매운 것을 못 먹는 사람이 많습니다." },
    { id: 840, lesson: 'Bài 14', type: 'translate', vn: "Đây là từ vựng bạn phải học.", kr: "이것은 당신이 외워야 할 단어입니다." },
    { id: 841, lesson: 'Bài 14', type: 'translate', vn: "Học sinh mà không làm bài tập sẽ bị phạt.", kr: "숙제를 안 하는 학생은 벌을 받습니다." },
    { id: 842, lesson: 'Bài 14', type: 'translate', vn: "Nhà hàng mà nổi tiếng thì luôn đông khách.", kr: "유명한 식당은 항상 손님이 많습니다." },
    { id: 843, lesson: 'Bài 14', type: 'translate', vn: "Bức thư mà tôi đã viết bị rách rồi.", kr: "제가 쓴 편지가 찢어졌습니다." },
    { id: 844, lesson: 'Bài 14', type: 'translate', vn: "Bộ quần áo mà nhỏ quá thì không thoải mái.", kr: "너무 작은 옷은 불편합니다." },
    { id: 845, lesson: 'Bài 14', type: 'translate', vn: "Hôm qua tôi đã không thể hoàn thành bài tập.", kr: "어제 숙제를 다 할 수 없었어요." },
    { id: 846, lesson: 'Bài 14', type: 'translate', vn: "Em bé có thể đọc được chữ này không?", kr: "아기가 이 글자를 읽을 수 있어요?" },
    { id: 847, lesson: 'Bài 14', type: 'translate', vn: "Tôi có thể nói được 3 thứ tiếng.", kr: "저는 세 개 국어를 할 수 있습니다." },
    { id: 848, lesson: 'Bài 14', type: 'translate', vn: "Tôi thích xem kịch ở nhà hát.", kr: "저는 극장에서 연극 보는 것을 좋아합니다." },
    { id: 849, lesson: 'Bài 14', type: 'translate', vn: "Ngày xưa tôi đã không thể ăn được món này.", kr: "예전에는 이 음식을 먹을 수 없었어요." },
    { id: 850, lesson: 'Bài 14', type: 'translate', vn: "Bố tôi rất giỏi việc sửa chữa đồ đạc.", kr: "아버지는 물건 고치는 것을 아주 잘하십니다." },
    { id: 851, lesson: 'Bài 14', type: 'translate', vn: "Nghe nhạc Hàn giúp tôi học tiếng tốt hơn.", kr: "한국 음악을 듣는 것은 공부에 도움이 됩니다." },
    { id: 852, lesson: 'Bài 14', type: 'translate', vn: "Tôi thích việc đi du lịch một mình.", kr: "저는 혼자 여행 가는 것을 좋아해요." },
    { id: 853, lesson: 'Bài 14', type: 'translate', vn: "Công việc mà tôi muốn làm là kỹ sư.", kr: "제가 하고 싶은 일은 엔지니어입니다." },
    { id: 854, lesson: 'Bài 14', type: 'translate', vn: "Quyển tiểu thuyết mà tôi mua hôm qua rất dày.", kr: "어제 산 소설책은 아주 두껍습니다." },
    { id: 855, lesson: 'Bài 14', type: 'translate', vn: "Đôi giày mà tôi nhận làm quà hơi chật.", kr: "선물로 받은 신발이 조금 꽉 낍니다." },
    { id: 856, lesson: 'Bài 14', type: 'translate', vn: "Trái cây mà được bán ở đây rất tươi.", kr: "여기서 파는 과일은 아주 신선합니다." },
    { id: 857, lesson: 'Bài 14', type: 'translate', vn: "Máy bay mà khởi hành lúc 8 giờ đã bị trễ.", kr: "여덟 시에 출발하는 비행기가 지연됐습니다." },
    { id: 858, lesson: 'Bài 14', type: 'translate', vn: "Tôi không thể hiểu ý nghĩa của từ này.", kr: "이 단어의 의미를 이해할 수 없어요." },
    { id: 859, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể chỉ đường cho tôi được không?", kr: "저에게 길을 알려 주실 수 있나요?" },
    { id: 860, lesson: 'Bài 14', type: 'translate', vn: "Chắc chắn bạn có thể làm được việc đó.", kr: "당신은 그 일을 꼭 할 수 있을 거예요." },
    { id: 861, lesson: 'Bài 14', type: 'translate', vn: "Hôm nay tôi mệt nên không thể tập thể thao.", kr: "오늘 피곤해서 운동할 수 없어요." },
    { id: 862, lesson: 'Bài 14', type: 'translate', vn: "Bạn tôi có thể chơi bóng rổ rất giỏi.", kr: "제 친구는 농구를 아주 잘 할 수 있어요." },
    { id: 863, lesson: 'Bài 14', type: 'translate', vn: "Sở thích của cô ấy là cắm hoa nghệ thuật.", kr: "그녀의 취미는 꽃꽂이입니다." },
    { id: 864, lesson: 'Bài 14', type: 'translate', vn: "Tôi ghét việc phải chờ đợi lâu.", kr: "저는 오래 기다리는 것을 싫어해요." },
    { id: 865, lesson: 'Bài 14', type: 'translate', vn: "Cuốn sách mà cậu đang cầm là của tôi.", kr: "네가 들고 있는 책은 내 것이야." },
    { id: 866, lesson: 'Bài 14', type: 'translate', vn: "Tôi có thể mượn cuốn sách mà cậu đã đọc xong không?", kr: "네가 다 읽은 책을 빌릴 수 있어?" },
    { id: 867, lesson: 'Bài 14', type: 'translate', vn: "Người mà mặc áo đỏ là quản lý của chúng tôi.", kr: "빨간 옷을 입은 사람은 우리 과장님입니다." },
    { id: 868, lesson: 'Bài 14', type: 'translate', vn: "Công viên mà chúng tôi thường đi dạo rất mát.", kr: "우리가 자주 산책하는 공원은 아주 시원합니다." },
    { id: 869, lesson: 'Bài 14', type: 'translate', vn: "Không có chỗ nào để ngồi.", kr: "앉을 자리가 없습니다." },
    { id: 870, lesson: 'Bài 14', type: 'translate', vn: "Tiền mà tôi có bây giờ chỉ có 1000 won.", kr: "지금 가진 돈은 천 원밖에 없어요." },
    { id: 871, lesson: 'Bài 14', type: 'translate', vn: "Đồ ăn mà tôi thích nấu là canh rong biển.", kr: "제가 요리하기 좋아하는 음식은 미역국입니다." },
    { id: 872, lesson: 'Bài 14', type: 'translate', vn: "Bạn có thể chơi game cùng tôi không?", kr: "저랑 같이 게임을 할 수 있어요?" },
    { id: 873, lesson: 'Bài 14', type: 'translate', vn: "Vì bị đau họng nên tôi không thể hát được.", kr: "목이 아파서 노래를 부를 수 없어요." },
    { id: 874, lesson: 'Bài 14', type: 'translate', vn: "Tôi thích cảm giác đi du lịch bằng tàu hỏa.", kr: "기차로 여행하는 느낌을 좋아해요." },
    { id: 875, lesson: 'Bài 14', type: 'translate', vn: "Đó là người mà tôi muốn kết hôn.", kr: "그 사람은 제가 결혼하고 싶은 사람입니다." },

    // ==========================================
    // BÀI 15: GIAO THÔNG & MỤC ĐÍCH 
    // ==========================================
    { id: 876, lesson: 'Bài 15', type: 'translate', vn: "Từ nhà đến trường mất bao lâu?", kr: "집에서 학교까지 시간이 얼마나 걸립니까?" },
    { id: 877, lesson: 'Bài 15', type: 'translate', vn: "Mất khoảng 30 phút.", kr: "삼십 분쯤 걸립니다." },
    { id: 878, lesson: 'Bài 15', type: 'translate', vn: "Bạn đi đến trường bằng phương tiện gì?", kr: "학교에 어떻게 갑니까?" },
    { id: 879, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi bằng xe buýt.", kr: "버스를 타고 갑니다." },
    { id: 880, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi bằng tàu điện ngầm.", kr: "지하철을 타고 갑니다." },
    { id: 881, lesson: 'Bài 15', type: 'translate', vn: "Tôi đến trường bằng xe máy.", kr: "오토바이로 학교에 갑니다." },
    { id: 882, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi bộ đến trường.", kr: "걸어서 학교에 갑니다." },
    { id: 883, lesson: 'Bài 15', type: 'translate', vn: "Đi bộ mất khoảng 15 phút.", kr: "걸어서 십오 분쯤 걸립니다." },
    { id: 884, lesson: 'Bài 15', type: 'translate', vn: "Xe buýt mất khoảng 1 tiếng.", kr: "버스로 한 시간쯤 걸립니다." },
    { id: 885, lesson: 'Bài 15', type: 'translate', vn: "Đi taxi mất bao nhiêu tiền?", kr: "택시로 요금이 얼마예요?" },
    { id: 886, lesson: 'Bài 15', type: 'translate', vn: "Mất khoảng 5000 won.", kr: "오천 원쯤 나옵니다." },
    { id: 887, lesson: 'Bài 15', type: 'translate', vn: "Từ Seoul đến Busan đi bằng phương tiện gì thì nhanh?", kr: "서울에서 부산까지 어떻게 가는 것이 빠릅니까?" },
    { id: 888, lesson: 'Bài 15', type: 'translate', vn: "Đi bằng tàu hỏa KTX thì nhanh.", kr: "KTX 기차로 가는 것이 빠릅니다." },
    { id: 889, lesson: 'Bài 15', type: 'translate', vn: "Bạn phải đi xe buýt số 100.", kr: "백 번 버스를 타야 합니다." },
    { id: 890, lesson: 'Bài 15', type: 'translate', vn: "Hãy lên xe ở bến xe buýt này.", kr: "이 정류장에서 버스를 타세요." },
    { id: 891, lesson: 'Bài 15', type: 'translate', vn: "Xin hãy dừng lại ở phía trước.", kr: "앞에서 세워 주세요." },
    { id: 892, lesson: 'Bài 15', type: 'translate', vn: "Bạn hãy xuống ở ga tiếp theo.", kr: "다음 역에서 내리세요." },
    { id: 893, lesson: 'Bài 15', type: 'translate', vn: "Bạn phải đổi sang tàu số 2 ở ga Seoul.", kr: "서울역에서 이호선으로 갈아타야 합니다." },
    { id: 894, lesson: 'Bài 15', type: 'translate', vn: "Từ đây đến bến xe bao xa?", kr: "여기에서 버스 터미널까지 얼마나 멉니까?" },
    { id: 895, lesson: 'Bài 15', type: 'translate', vn: "Đi bằng máy bay mất 2 tiếng rưỡi.", kr: "비행기로 두 시간 반 걸립니다." },
    { id: 896, lesson: 'Bài 15', type: 'translate', vn: "Đường đang bị tắc nghẽn nên hãy đi bằng tàu điện ngầm.", kr: "길이 막히니까 지하철을 타세요." },
    { id: 897, lesson: 'Bài 15', type: 'translate', vn: "Vì đi bộ nên mất rất nhiều thời gian.", kr: "걸어가서 시간이 많이 걸렸어요." },
    { id: 898, lesson: 'Bài 15', type: 'translate', vn: "Bạn đã mất bao lâu để đến công ty?", kr: "회사까지 얼마나 걸렸습니까?" },
    { id: 899, lesson: 'Bài 15', type: 'translate', vn: "Xe buýt đi sân bay khởi hành lúc mấy giờ?", kr: "공항 버스는 몇 시에 출발합니까?" },
    { id: 900, lesson: 'Bài 15', type: 'translate', vn: "Cứ 15 phút sẽ có một chuyến xe buýt.", kr: "십오 분마다 버스가 한 대씩 있습니다." },
    { id: 901, lesson: 'Bài 15', type: 'translate', vn: "Tôi tới học viện để học tiếng Hàn.", kr: "한국어를 배우러 학원에 갑니다." },
    { id: 902, lesson: 'Bài 15', type: 'translate', vn: "Tôi tới quán cà phê để gặp bạn.", kr: "친구를 만나러 커피숍에 갑니다." },
    { id: 903, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi mua quà ở trung tâm thương mại.", kr: "백화점에 선물을 사러 갑니다." },
    { id: 904, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi ăn tối ở nhà hàng.", kr: "식당에 저녁을 먹으러 갑니다." },
    { id: 905, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi mua hoa quả ở cửa hàng tiện lợi.", kr: "편의점에 과일을 사러 갑니다." },
    { id: 906, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi bơi ở bể bơi.", kr: "수영장에 수영하러 갑니다." },
    { id: 907, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi đá bóng ở sân vận động.", kr: "운동장에 축구를 하러 갑니다." },
    { id: 908, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi xem phim.", kr: "영화를 보러 갑니다." },
    { id: 909, lesson: 'Bài 15', type: 'translate', vn: "Tôi đến thư viện để ôn thi.", kr: "도서관에 시험 공부를 하러 갑니다." },
    { id: 910, lesson: 'Bài 15', type: 'translate', vn: "Bạn đến công viên để đi dạo à?", kr: "공원에 산책하러 갑니까?" },
    { id: 911, lesson: 'Bài 15', type: 'translate', vn: "Tôi về nhà để nghỉ ngơi.", kr: "저는 쉬러 집에 갑니다." },
    { id: 912, lesson: 'Bài 15', type: 'translate', vn: "Thứ 7 này chúng ta đến công viên chơi nhé?", kr: "이번 주 토요일에 공원에 놀러 갈까요?" },
    { id: 913, lesson: 'Bài 15', type: 'translate', vn: "Lan đi công viên để cắm trại.", kr: "란 씨는 캠핑하러 공원에 갑니다." },
    { id: 914, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi chợ để mua quần áo.", kr: "옷을 사러 시장에 갑니다." },
    { id: 915, lesson: 'Bài 15', type: 'translate', vn: "Tôi đến đây một lát để chào mọi người.", kr: "인사하러 여기에 잠깐 왔습니다." },
    { id: 916, lesson: 'Bài 15', type: 'translate', vn: "Anh trai tôi đến ngân hàng để rút tiền.", kr: "형은 돈을 찾으러 은행에 갑니다." },
    { id: 917, lesson: 'Bài 15', type: 'translate', vn: "Tôi đến Hàn Quốc để làm việc.", kr: "저는 일하러 한국에 왔습니다." },
    { id: 918, lesson: 'Bài 15', type: 'translate', vn: "Bây giờ chúng tôi đi để ăn cơm.", kr: "지금 우리는 밥을 먹으러 갑니다." },
    { id: 919, lesson: 'Bài 15', type: 'translate', vn: "Tôi vào nhà vệ sinh để rửa tay.", kr: "손을 씻으러 화장실에 들어갑니다." },
    { id: 920, lesson: 'Bài 15', type: 'translate', vn: "Tôi vào phòng nghỉ để nghỉ ngơi.", kr: "쉬러 휴게실에 들어갑니다." },
    { id: 921, lesson: 'Bài 15', type: 'translate', vn: "Minho đến đại sứ quán để xin visa.", kr: "민호 씨는 비자를 받으러 대사관에 갑니다." },
    { id: 922, lesson: 'Bài 15', type: 'translate', vn: "Tôi đến bưu điện để gửi thư.", kr: "편지를 보내러 우체국에 갑니다." },
    { id: 923, lesson: 'Bài 15', type: 'translate', vn: "Hôm qua tôi đi đến quán rượu để uống rượu.", kr: "어제 술을 마시러 술집에 갔습니다." },
    { id: 924, lesson: 'Bài 15', type: 'translate', vn: "Buổi chiều tôi sẽ đi siêu thị để mua đồ.", kr: "오후에 물건을 사러 마트에 갈 거예요." },
    { id: 925, lesson: 'Bài 15', type: 'translate', vn: "Tôi đến công ty sớm để họp.", kr: "회의를 하러 회사에 일찍 왔습니다." },
    { id: 926, lesson: 'Bài 15', type: 'translate', vn: "Vợ tôi đi ra ngoài để tập thể dục.", kr: "제 아내는 운동하러 밖으로 나갔습니다." },
    { id: 927, lesson: 'Bài 15', type: 'translate', vn: "Chúng ta sẽ đi đến nhà ăn để ăn trưa nhé?", kr: "점심을 먹으러 식당에 갈까요?" },
    { id: 928, lesson: 'Bài 15', type: 'translate', vn: "Vì muốn chụp ảnh nên tôi đã đến đảo Jeju.", kr: "사진을 찍으러 제주도에 갔어요." },
    { id: 929, lesson: 'Bài 15', type: 'translate', vn: "Mỗi tuần tôi đến thư viện để mượn sách.", kr: "저는 매주 책을 빌리러 도서관에 가요." },
    { id: 930, lesson: 'Bài 15', type: 'translate', vn: "Hôm qua vì ốm nên tôi đã đến bệnh viện.", kr: "어제 아파서 병원에 갔어요." },
    { id: 931, lesson: 'Bài 15', type: 'translate', vn: "Xe điện ngầm nhanh và tiện lợi.", kr: "지하철이 빠르고 편리해요." },
    { id: 932, lesson: 'Bài 15', type: 'translate', vn: "Nếu đi xe máy từ đây mất khoảng 20 phút.", kr: "여기에서 오토바이로 20분쯤 걸려요." },
    { id: 933, lesson: 'Bài 15', type: 'translate', vn: "Vé xe lửa giá bao nhiêu?", kr: "기차 표는 얼마입니까?" },
    { id: 934, lesson: 'Bài 15', type: 'translate', vn: "Tuyến số mấy đi đến ga Gangnam?", kr: "몇 호선이 강남역에 갑니까?" },
    { id: 935, lesson: 'Bài 15', type: 'translate', vn: "Xin hãy báo cho tôi biết chỗ chuyển xe buýt.", kr: "어디서 버스를 갈아타는지 알려 주세요." },
    { id: 936, lesson: 'Bài 15', type: 'translate', vn: "Người Việt Nam thường đi làm bằng xe máy.", kr: "베트남 사람은 오토바이로 출근을 많이 해요." },
    { id: 937, lesson: 'Bài 15', type: 'translate', vn: "Xe đạp là phương tiện giao thông tốt cho sức khỏe.", kr: "자전거는 건강에 좋은 교통수단입니다." },
    { id: 938, lesson: 'Bài 15', type: 'translate', vn: "Ở Hàn Quốc, giao thông công cộng rất phát triển.", kr: "한국은 대중교통이 아주 발달했어요." },
    { id: 939, lesson: 'Bài 15', type: 'translate', vn: "Bạn tôi đến Mỹ để đi du lịch.", kr: "제 친구는 미국으로 여행을 갔어요." },
    { id: 940, lesson: 'Bài 15', type: 'translate', vn: "Tôi đã lái xe suốt 3 tiếng đồng hồ.", kr: "세 시간 동안 운전했어요." },
    { id: 941, lesson: 'Bài 15', type: 'translate', vn: "Bạn đừng lên chiếc xe buýt kia.", kr: "저 버스를 타지 마세요." },
    { id: 942, lesson: 'Bài 15', type: 'translate', vn: "Bạn phải cẩn thận khi sang đường.", kr: "길을 건널 때 조심해야 합니다." },
    { id: 943, lesson: 'Bài 15', type: 'translate', vn: "Từ Việt Nam sang Hàn Quốc bay mất khoảng 4 tiếng.", kr: "베트남에서 한국까지 비행기로 네 시간쯤 걸려요." },
    { id: 944, lesson: 'Bài 15', type: 'translate', vn: "Lúc 8 giờ sáng, xe điện ngầm cực kì đông đúc.", kr: "아침 여덟 시에 지하철이 아주 복잡해요." },
    { id: 945, lesson: 'Bài 15', type: 'translate', vn: "Khi đi taxi, tôi không hay nói chuyện với tài xế.", kr: "택시를 탈 때 기사님과 말을 잘 안 해요." },
    { id: 946, lesson: 'Bài 15', type: 'translate', vn: "Bạn định đi ra nước ngoài để làm gì?", kr: "외국에 무엇을 하러 가려고 해요?" },
    { id: 947, lesson: 'Bài 15', type: 'translate', vn: "Ở đây không thể bắt được taxi đâu.", kr: "여기서 택시를 잡을 수 없어요." },
    { id: 948, lesson: 'Bài 15', type: 'translate', vn: "Chiếc xe buýt này có dừng ở trước cổng trường không?", kr: "이 버스는 학교 문 앞에 서요?" },
    { id: 949, lesson: 'Bài 15', type: 'translate', vn: "Nếu trễ chuyến tàu này, phải đợi thêm 30 phút nữa.", kr: "이 기차를 놓치면 30분을 더 기다려야 해요." },
    { id: 950, lesson: 'Bài 15', type: 'translate', vn: "Từ bến xe này đi bộ một chút là tới.", kr: "이 정류장에서 조금만 걸어가면 돼요." },
    { id: 951, lesson: 'Bài 15', type: 'translate', vn: "Vì quên đồ ở nhà nên tôi đã về để lấy.", kr: "물건을 집에 두고 와서 가지러 갔어요." },
    { id: 952, lesson: 'Bài 15', type: 'translate', vn: "Tuần sau tôi sẽ về quê để thăm bố mẹ.", kr: "다음 주에 부모님을 뵈러 고향에 갈 거예요." },
    { id: 953, lesson: 'Bài 15', type: 'translate', vn: "Vui lòng cho tôi 2 vé đi đến Busan.", kr: "부산 가는 기차 표 두 장 주세요." },
    { id: 954, lesson: 'Bài 15', type: 'translate', vn: "Tuyến tàu nào thì đi qua khu Myeongdong?", kr: "무슨 선이 명동으로 가요?" },
    { id: 955, lesson: 'Bài 15', type: 'translate', vn: "Tôi đã không thể đến sân bay đúng giờ.", kr: "제시간에 공항에 도착하지 못했어요." },
    { id: 956, lesson: 'Bài 15', type: 'translate', vn: "Tôi thích đi dạo ở công viên hơn là đi xe.", kr: "차를 타는 것보다 공원에서 산책하는 것을 좋아해요." },
    { id: 957, lesson: 'Bài 15', type: 'translate', vn: "Bạn nên mua thẻ giao thông để đi xe rẻ hơn.", kr: "싸게 타려면 교통 카드를 사는 것이 좋아요." },
    { id: 958, lesson: 'Bài 15', type: 'translate', vn: "Tôi có cuộc hẹn ở nhà ga lúc 3 giờ.", kr: "세 시에 기차역에서 약속이 있어요." },
    { id: 959, lesson: 'Bài 15', type: 'translate', vn: "Tôi sẽ đưa bạn ra bến xe nhé.", kr: "제가 버스 정류장까지 데려다 줄게요." },
    { id: 960, lesson: 'Bài 15', type: 'translate', vn: "Có rất nhiều người đang đợi ở trạm chờ.", kr: "정류장에 기다리는 사람이 많아요." },
    { id: 961, lesson: 'Bài 15', type: 'translate', vn: "Bạn đừng băng qua đường khi đèn đỏ.", kr: "빨간 불일 때 길을 건너지 마세요." },
    { id: 962, lesson: 'Bài 15', type: 'translate', vn: "Hãy thắt dây an toàn khi lên xe ô tô.", kr: "자동차를 탈 때 안전벨트를 매세요." },
    { id: 963, lesson: 'Bài 15', type: 'translate', vn: "Tôi đã chạy hết tốc lực để bắt kịp xe buýt.", kr: "버스를 타려고 빨리 달렸어요." },
    { id: 964, lesson: 'Bài 15', type: 'translate', vn: "Nếu bị say xe, bạn hãy uống thuốc đi.", kr: "차멀미를 하면 약을 드세요." },
    { id: 965, lesson: 'Bài 15', type: 'translate', vn: "Nơi đó có bãi đỗ xe không?", kr: "거기에 주차장이 있어요?" },
    { id: 966, lesson: 'Bài 15', type: 'translate', vn: "Bạn hãy đỗ xe ở dưới hầm.", kr: "지하에 주차하세요." },
    { id: 967, lesson: 'Bài 15', type: 'translate', vn: "Từ trạm này mất bao lâu để đến trạm kế tiếp?", kr: "이 역에서 다음 역까지 얼마나 걸려요?" },
    { id: 968, lesson: 'Bài 15', type: 'translate', vn: "Đường hầm này dài khoảng 2 kilomet.", kr: "이 터널은 이 킬로미터쯤 돼요." },
    { id: 969, lesson: 'Bài 15', type: 'translate', vn: "Hôm nay tôi sẽ không đi xe đi làm.", kr: "오늘 차를 가지고 출근하지 않을 거예요." },
    { id: 970, lesson: 'Bài 15', type: 'translate', vn: "Hôm nay tàu điện ngầm gặp sự cố nên bị trễ.", kr: "오늘 지하철 사고가 나서 지연됐어요." },
    { id: 971, lesson: 'Bài 15', type: 'translate', vn: "Giao thông giờ tan tầm rất kinh khủng.", kr: "퇴근 시간에 교통이 아주 복잡해요." },
    { id: 972, lesson: 'Bài 15', type: 'translate', vn: "Hãy đi bộ vì khoảng cách rất gần.", kr: "가까우니까 걸어가세요." },
    { id: 973, lesson: 'Bài 15', type: 'translate', vn: "Xe đạp của tôi đã bị hỏng.", kr: "제 자전거가 고장 났어요." },
    { id: 974, lesson: 'Bài 15', type: 'translate', vn: "Ngày mai tôi phải mang xe đi sửa.", kr: "내일 차를 수리하러 가야 해요." },
    { id: 975, lesson: 'Bài 15', type: 'translate', vn: "Hãy đổ đầy xăng cho tôi.", kr: "기름을 가득 채워 주세요." },
    { id: 976, lesson: 'Bài 15', type: 'translate', vn: "Mấy giờ có chuyến bay đi Hàn Quốc?", kr: "한국 가는 비행기는 몇 시에 있어요?" },
    { id: 977, lesson: 'Bài 15', type: 'translate', vn: "Hãy cầm chắc tay nắm trên xe buýt.", kr: "버스에서 손잡이를 꽉 잡으세요." },
    { id: 978, lesson: 'Bài 15', type: 'translate', vn: "Bến xe buýt gần nhất ở đâu vậy?", kr: "가장 가까운 버스 정류장이 어디예요?" },
    { id: 979, lesson: 'Bài 15', type: 'translate', vn: "Có rất nhiều ô tô ở trên đường.", kr: "길에 자동차가 아주 많아요." },
    { id: 980, lesson: 'Bài 15', type: 'translate', vn: "Điện thoại của tôi có cài bản đồ.", kr: "제 휴대폰에 지도가 있어요." },
    { id: 981, lesson: 'Bài 15', type: 'translate', vn: "Bạn có biết đường đến sân bay không?", kr: "공항 가는 길을 알아요?" },
    { id: 982, lesson: 'Bài 15', type: 'translate', vn: "Đường này là đường một chiều.", kr: "이 길은 일방통행이에요." },
    { id: 983, lesson: 'Bài 15', type: 'translate', vn: "Tôi đi dạo quanh khu nhà.", kr: "저는 집 주변을 산책해요." },
    { id: 984, lesson: 'Bài 15', type: 'translate', vn: "Không có tàu điện ngầm chạy trực tiếp tới đó.", kr: "거기로 바로 가는 지하철은 없어요." },
    { id: 985, lesson: 'Bài 15', type: 'translate', vn: "Bạn nên đi sớm để không bị kẹt xe.", kr: "길이 막히지 않게 일찍 가세요." },
    { id: 986, lesson: 'Bài 15', type: 'translate', vn: "Thang cuốn trong ga đang được sửa chữa.", kr: "역의 에스컬레이터가 수리 중이에요." },
    { id: 987, lesson: 'Bài 15', type: 'translate', vn: "Nếu có tiền tôi muốn mua một chiếc ô tô.", kr: "돈이 있으면 자동차를 사고 싶어요." },
    { id: 988, lesson: 'Bài 15', type: 'translate', vn: "Tối qua tôi không thể đón xe về nhà.", kr: "어젯밤에 집에 갈 차를 못 탔어요." },
    { id: 989, lesson: 'Bài 15', type: 'translate', vn: "Hãy xuống xe ở cổng sau.", kr: "뒷문으로 내리세요." },
    { id: 990, lesson: 'Bài 15', type: 'translate', vn: "Tuyến đường sắt này đã được xây từ lâu.", kr: "이 철도는 오래전에 만들어졌어요." },
    { id: 991, lesson: 'Bài 15', type: 'translate', vn: "Vì mưa lớn nên chuyến bay bị hủy.", kr: "비가 많이 와서 비행기가 취소됐어요." },
    { id: 992, lesson: 'Bài 15', type: 'translate', vn: "Xin hãy xuất trình vé trước khi lên xe.", kr: "차를 타기 전에 표를 보여 주세요." },
    { id: 993, lesson: 'Bài 15', type: 'translate', vn: "Chuyến tàu muộn nhất là lúc mấy giờ?", kr: "가장 늦은 기차는 몇 시에 있어요?" },
    { id: 994, lesson: 'Bài 15', type: 'translate', vn: "Hôm qua tôi đã nhường ghế cho một bà cụ.", kr: "어제 할머니께 자리를 양보했어요." },
    { id: 995, lesson: 'Bài 15', type: 'translate', vn: "Bắt taxi ở trước ga Seoul sẽ nhanh hơn.", kr: "서울역 앞에서 택시를 타는 것이 더 빨라요." },
    { id: 996, lesson: 'Bài 15', type: 'translate', vn: "Tôi đã mua vé tháng cho xe buýt.", kr: "버스 한 달 정기권을 샀어요." },
    { id: 997, lesson: 'Bài 15', type: 'translate', vn: "Nơi đó không thể đi bằng xe buýt số 3.", kr: "거기는 삼 번 버스로 갈 수 없어요." },
    { id: 998, lesson: 'Bài 15', type: 'translate', vn: "Hãy đứng đúng vạch vạch kẻ dành cho người đi bộ.", kr: "횡단보도 선 안에 서 계세요." },
    { id: 999, lesson: 'Bài 15', type: 'translate', vn: "Chúng tôi thuê xe đạp để đi dạo quanh đảo.", kr: "우리는 섬을 구경하려고 자전거를 빌렸어요." },
    { id: 1000, lesson: 'Bài 15', type: 'translate', vn: "Tôi sẽ bay đi Hàn Quốc vào năm 2026 để học Thạc sĩ.", kr: "저는 석사를 공부하러 2026년에 한국으로 비행기를 타고 갈 거예요." },
        // =========================================================
        // PHẦN 1: MỞ ĐẦU & BÀI 1 ĐẾN 5 (KHÔNG THIẾU 1 CHỮ THEO PDF)
        // =========================================================
        // --- BÀI MỞ ĐẦU (Trang 2) ---
// =========================================================
        // 📚 KHO TỪ VỰNG PHẦN 1: MỞ ĐẦU -> BÀI 5 (FULL EMOJI)
        // =========================================================

        // --- BÀI MỞ ĐẦU ---
        { id: 'v1', lesson: "Mở đầu", type: "new", vn: "Dưa chuột", kr: "오이", note: "" },
        { id: 'v2', lesson: "Mở đầu", type: "new", vn: "Sữa", kr: "우유", note: "" },
        { id: 'v3', lesson: "Mở đầu", type: "new", vn: "Mũ", kr: "모자", note: "" },
        { id: 'v4', lesson: "Mở đầu", type: "new", vn: "Quần", kr: "바지", note: "" },
        { id: 'v5', lesson: "Mở đầu", type: "new", vn: "Váy", kr: "치마", note: "" },
        { id: 'v6', lesson: "Mở đầu", type: "new", vn: "Táo", kr: "사과", note: "" },
        { id: 'v7', lesson: "Mở đầu", type: "new", vn: "Thịt", kr: "고기", note: "" },
        { id: 'v8', lesson: "Mở đầu", type: "new", vn: "Đồng hồ", kr: "시계", note: "" },
        { id: 'v9', lesson: "Mở đầu", type: "new", vn: "Giấy lau, khăn giấy", kr: "휴지", note: "" },
        { id: 'v10', lesson: "Mở đầu", type: "new", vn: "Con lợn", kr: "돼지", note: "" },
        { id: 'v11', lesson: "Mở đầu", type: "new", vn: "Ghế", kr: "의자", note: "" },
        { id: 'v12', lesson: "Mở đầu", type: "new", vn: "Quả nho", kr: "포도", note: "" },
        { id: 'v13', lesson: "Mở đầu", type: "new", vn: "Bánh pizza", kr: "피자", note: "" },
        { id: 'v14', lesson: "Mở đầu", type: "new", vn: "Tàu hỏa", kr: "기차", note: "" },
        { id: 'v15', lesson: "Mở đầu", type: "new", vn: "Con thỏ", kr: "토끼", note: "" },
        { id: 'v16', lesson: "Mở đầu", type: "new", vn: "Bánh tteok", kr: "떡", note: "" },
        { id: 'v17', lesson: "Mở đầu", type: "new", vn: "Bánh mì", kr: "빵", note: "" },
        { id: 'v18', lesson: "Mở đầu", type: "new", vn: "Quả dâu tây", kr: "딸기", note: "" },
        { id: 'v19', lesson: "Mở đầu", type: "new", vn: "Quần áo", kr: "옷", note: "" },
        { id: 'v20', lesson: "Mở đầu", type: "new", vn: "Hoa", kr: "꽃", note: "" },
        { id: 'v21', lesson: "Mở đầu", type: "new", vn: "Con cá", kr: "생선", note: "" },
        { id: 'v22', lesson: "Mở đầu", type: "new", vn: "Cái ví", kr: "지갑", note: "" },
        { id: 'v23', lesson: "Mở đầu", type: "new", vn: "Bàn chân", kr: "발", note: "" },
        { id: 'v24', lesson: "Mở đầu", type: "new", vn: "Lá", kr: "잎", note: "" },
        { id: 'v25', lesson: "Mở đầu", type: "new", vn: "Con gà", kr: "닭", note: "" },

        // --- BÀI 1: GIỚI THIỆU ---
        { id: 'v26', lesson: "Bài 1", type: "new", vn: "Quốc gia", kr: "나라", note: "" },
        { id: 'v27', lesson: "Bài 1", type: "new", vn: "Quốc tịch", kr: "국적", note: "" },
        { id: 'v28', lesson: "Bài 1", type: "new", vn: "Hàn Quốc", kr: "한국", note: "" },
        { id: 'v29', lesson: "Bài 1", type: "new", vn: "Việt Nam", kr: "베트남", note: "" },
        { id: 'v30', lesson: "Bài 1", type: "new", vn: "Malaysia", kr: "말레이시아", note: "" },
        { id: 'v31', lesson: "Bài 1", type: "new", vn: "Nhật Bản", kr: "일본", note: "" },
        { id: 'v32', lesson: "Bài 1", type: "new", vn: "Mỹ", kr: "미국", note: "" },
        { id: 'v33', lesson: "Bài 1", type: "new", vn: "Trung Quốc", kr: "중국", note: "" },
        { id: 'v34', lesson: "Bài 1", type: "new", vn: "Thái Lan", kr: "태국", note: "" },
        { id: 'v35', lesson: "Bài 1", type: "new", vn: "Úc", kr: "호주", note: "" },
        { id: 'v36', lesson: "Bài 1", type: "new", vn: "Mông Cổ", kr: "몽골", note: "" },
        { id: 'v37', lesson: "Bài 1", type: "new", vn: "Indonexia", kr: "인도네시아", note: "" },
        { id: 'v38', lesson: "Bài 1", type: "new", vn: "Philipin", kr: "필리핀", note: "" },
        { id: 'v39', lesson: "Bài 1", type: "new", vn: "Ấn Độ", kr: "인도", note: "" },
        { id: 'v40', lesson: "Bài 1", type: "new", vn: "Anh", kr: "영국", note: "" },
        { id: 'v41', lesson: "Bài 1", type: "new", vn: "Đức", kr: "독일", note: "" },
        { id: 'v42', lesson: "Bài 1", type: "new", vn: "Pháp", kr: "프랑스", note: "" },
        { id: 'v43', lesson: "Bài 1", type: "new", vn: "Nga", kr: "러시아", note: "" },
        { id: 'v44', lesson: "Bài 1", type: "new", vn: "Nghề nghiệp", kr: "직업", note: "" },
        { id: 'v45', lesson: "Bài 1", type: "new", vn: "Học sinh", kr: "학생", note: "" },
        { id: 'v46', lesson: "Bài 1", type: "new", vn: "Giáo viên", kr: "선생님", note: "" },
        { id: 'v47', lesson: "Bài 1", type: "new", vn: "Giáo sư", kr: "교수", note: "" },
        { id: 'v48', lesson: "Bài 1", type: "new", vn: "Bác sỹ", kr: "의사", note: "" },
        { id: 'v49', lesson: "Bài 1", type: "new", vn: "Công chức", kr: "공무원", note: "" },
        { id: 'v50', lesson: "Bài 1", type: "new", vn: "Hướng dẫn viên du lịch", kr: "관광 가이드/ 여행 안내원", note: "" },
        { id: 'v51', lesson: "Bài 1", type: "new", vn: "Nội trợ", kr: "주부", note: "" },
        { id: 'v52', lesson: "Bài 1", type: "new", vn: "Dược sĩ", kr: "약사", note: "" },
        { id: 'v53', lesson: "Bài 1", type: "new", vn: "Lái xe", kr: "운전기사", note: "" },
        { id: 'v54', lesson: "Bài 1", type: "new", vn: "Bạn bè", kr: "친구", note: "" },
        { id: 'v55', lesson: "Bài 1", type: "new", vn: "Người", kr: "사람", note: "" },
        { id: 'v56', lesson: "Bài 1", type: "new", vn: "Khoa ngữ văn", kr: "국어국문학과", note: "" },
        { id: 'v57', lesson: "Bài 1", type: "new", vn: "Vâng", kr: "네", note: "" },
        { id: 'v58', lesson: "Bài 1", type: "new", vn: "Không", kr: "아니요", note: "" },
        { id: 'v59', lesson: "Bài 1", type: "new", vn: "Trường đại học", kr: "대학교", note: "" },
        { id: 'v60', lesson: "Bài 1", type: "new", vn: "Sinh viên", kr: "대학생", note: "" },
        { id: 'v61', lesson: "Bài 1", type: "new", vn: "Mẫu, ví dụ", kr: "보기", note: "" },
        { id: 'v62', lesson: "Bài 1", type: "new", vn: "Ngân hàng", kr: "은행", note: "" },
        { id: 'v63', lesson: "Bài 1", type: "new", vn: "Công ty", kr: "회사", note: "" },
        { id: 'v64', lesson: "Bài 1", type: "new", vn: "Tên", kr: "이름", note: "" },
        { id: 'v65', lesson: "Bài 1", type: "new", vn: "Email, thư điện tử", kr: "이메일", note: "" },
        { id: 'v66', lesson: "Bài 1", type: "new", vn: "Tôi", kr: "저", note: "" },
        { id: 'v67', lesson: "Bài 1", type: "new", vn: "Điện thoại", kr: "전화", note: "" },
        { id: 'v68', lesson: "Bài 1", type: "new", vn: "Của tôi", kr: "제", note: "" },
        { id: 'v69', lesson: "Bài 1", type: "new", vn: "Địa chỉ", kr: "주소", note: "" },
        { id: 'v70', lesson: "Bài 1", type: "new", vn: "Khoa/bộ môn 🏫", kr: "학과", note: "" },
        { id: 'v71', lesson: "Bài 1", type: "new", vn: "Thẻ sinh viên", kr: "학생증", note: "" },
        { id: 'v72', lesson: "Bài 1", type: "new", vn: "Mã số sinh viên", kr: "학번", note: "" },
        { id: 'v73', lesson: "Bài 1", type: "new", vn: "Khoa tiếng Hàn", kr: "한국어과", note: "" },
        { id: 'v74', lesson: "Bài 1", type: "new", vn: "Tiếng Nhật", kr: "일본어", note: "" },
        { id: 'v75', lesson: "Bài 1", type: "new", vn: "Tiếng Đức", kr: "독일어", note: "" },
        { id: 'p1', lesson: "Bài 1", type: "practice", vn: "Xin chào? (Lịch sự)", kr: "안녕하세요?", note: "Lời chào" },
        { id: 'p2', lesson: "Bài 1", type: "practice", vn: "Xin chào? (Trang trọng)", kr: "안녕하십니까?", note: "Lời chào" },
        { id: 'p3', lesson: "Bài 1", type: "practice", vn: "Tạm biệt. (Đi về bình an)", kr: "안녕히가세요.", note: "Lời chào" },
        { id: 'p4', lesson: "Bài 1", type: "practice", vn: "Tạm biệt. (Ở lại bình an)", kr: "안녕히계세요.", note: "Lời chào" },
        { id: 'p5', lesson: "Bài 1", type: "practice", vn: "Rất vui được gặp bạn.", kr: "반갑습니다.", note: "Lời chào" },
        { id: 'p6', lesson: "Bài 1", type: "practice", vn: "Lần đầu (hân hạnh) được gặp mặt.", kr: "처음 뵙겠습니다.", note: "Lời chào" },

        // --- BÀI 2: NƠI CHỐN ---
        { id: 'v76', lesson: "Bài 2", type: "new", vn: "Nơi chốn", kr: "장소", note: "" },
        { id: 'v77', lesson: "Bài 2", type: "new", vn: "Trường học", kr: "학교", note: "" },
        { id: 'v78', lesson: "Bài 2", type: "new", vn: "Thư viện", kr: "도서관", note: "" },
        { id: 'v79', lesson: "Bài 2", type: "new", vn: "Nhà ăn, nhà hàng", kr: "식당", note: "" },
        { id: 'v80', lesson: "Bài 2", type: "new", vn: "Khách sạn", kr: "호텔", note: "" },
        { id: 'v81', lesson: "Bài 2", type: "new", vn: "Nhà hát", kr: "극장", note: "" },
        { id: 'v82', lesson: "Bài 2", type: "new", vn: "Bưu điện", kr: "우체국", note: "" },
        { id: 'v83', lesson: "Bài 2", type: "new", vn: "Bệnh viện", kr: "병원", note: "" },
        { id: 'v84', lesson: "Bài 2", type: "new", vn: "Ngân hàng", kr: "은행", note: "" },
        { id: 'v85', lesson: "Bài 2", type: "new", vn: "Trung tâm thương mại", kr: "백화점", note: "" },
        { id: 'v86', lesson: "Bài 2", type: "new", vn: "Hiệu thuốc", kr: "약국", note: "" },
        { id: 'v87', lesson: "Bài 2", type: "new", vn: "Cửa tiệm, cửa hàng", kr: "가게", note: "" },
        { id: 'v88', lesson: "Bài 2", type: "new", vn: "Văn phòng", kr: "사무실", note: "" },
        { id: 'v89', lesson: "Bài 2", type: "new", vn: "Trang thiết bị", kr: "시설", note: "" },
        { id: 'v90', lesson: "Bài 2", type: "new", vn: "Giảng đường", kr: "강의실", note: "" },
        { id: 'v91', lesson: "Bài 2", type: "new", vn: "Phòng học", kr: "교실", note: "" },
        { id: 'v92', lesson: "Bài 2", type: "new", vn: "Phòng vệ sinh", kr: "화장실", note: "" },
        { id: 'v93', lesson: "Bài 2", type: "new", vn: "Phòng nghỉ", kr: "휴게실", note: "" },
        { id: 'v94', lesson: "Bài 2", type: "new", vn: "Phòng Lab", kr: "랩실", note: "" },
        { id: 'v95', lesson: "Bài 2", type: "new", vn: "Phòng sinh hoạt CLB", kr: "동아리방", note: "" },
        { id: 'v96', lesson: "Bài 2", type: "new", vn: "Nhà thể chất", kr: "체육관", note: "" },
        { id: 'v97', lesson: "Bài 2", type: "new", vn: "Sân vận động", kr: "운동장", note: "" },
        { id: 'v98', lesson: "Bài 2", type: "new", vn: "Hội trường", kr: "강당", note: "" },
        { id: 'v99', lesson: "Bài 2", type: "new", vn: "Nhà ăn học sinh", kr: "학생 식당", note: "" },
        { id: 'v100', lesson: "Bài 2", type: "new", vn: "Nhà ăn công ty", kr: "회사 식당", note: "" },
        { id: 'v101', lesson: "Bài 2", type: "new", vn: "Này", kr: "이", note: "" },
        { id: 'v102', lesson: "Bài 2", type: "new", vn: "Đó", kr: "그", note: "" },
        { id: 'v103', lesson: "Bài 2", type: "new", vn: "Kia", kr: "저", note: "" },
        { id: 'v104', lesson: "Bài 2", type: "new", vn: "Có", kr: "있다", note: "" },
        { id: 'v105', lesson: "Bài 2", type: "new", vn: "Không có", kr: "없다", note: "" },
        { id: 'v106', lesson: "Bài 2", type: "new", vn: "Không phải là", kr: "아니다", note: "" },
        { id: 'v107', lesson: "Bài 2", type: "new", vn: "Phòng hội thảo", kr: "세미나실", note: "" },
        { id: 'v108', lesson: "Bài 2", type: "new", vn: "Hiệu sách", kr: "서점", note: "" },
        { id: 'v109', lesson: "Bài 2", type: "new", vn: "Đồ vật", kr: "물건", note: "" },
        { id: 'v110', lesson: "Bài 2", type: "new", vn: "Cái bàn", kr: "책상", note: "" },
        { id: 'v111', lesson: "Bài 2", type: "new", vn: "Cái ghế", kr: "의자", note: "" },
        { id: 'v112', lesson: "Bài 2", type: "new", vn: "Cái bảng", kr: "칠판", note: "" },
        { id: 'v113', lesson: "Bài 2", type: "new", vn: "Cửa ra vào", kr: "문", note: "" },
        { id: 'v114', lesson: "Bài 2", type: "new", vn: "Cửa số", kr: "창문", note: "" },
        { id: 'v115', lesson: "Bài 2", type: "new", vn: "Đồng hồ", kr: "시계", note: "" },
        { id: 'v116', lesson: "Bài 2", type: "new", vn: "Cặp sách", kr: "가방", note: "" },
        { id: 'v117', lesson: "Bài 2", type: "new", vn: "Máy vi tính", kr: "컴퓨터", note: "" },
        { id: 'v118', lesson: "Bài 2", type: "new", vn: "Sách", kr: "책", note: "" },
        { id: 'v119', lesson: "Bài 2", type: "new", vn: "Vở", kr: "공책", note: "" },
        { id: 'v120', lesson: "Bài 2", type: "new", vn: "Từ điển", kr: "사전", note: "" },
        { id: 'v121', lesson: "Bài 2", type: "new", vn: "Cục tẩy", kr: "지우개", note: "" },
        { id: 'v122', lesson: "Bài 2", type: "new", vn: "Bản đồ", kr: "지도", note: "" },
        { id: 'v123', lesson: "Bài 2", type: "new", vn: "Bút mực", kr: "펜", note: "" },
        { id: 'v124', lesson: "Bài 2", type: "new", vn: "Bút chì", kr: "연필", note: "" },
        { id: 'v125', lesson: "Bài 2", type: "new", vn: "Hộp bút", kr: "필통", note: "" },
        { id: 'v126', lesson: "Bài 2", type: "new", vn: "Ở đây", kr: "여기", note: "" },
        { id: 'v127', lesson: "Bài 2", type: "new", vn: "Ở đó", kr: "거기", note: "" },
        { id: 'v128', lesson: "Bài 2", type: "new", vn: "Ở kia", kr: "저기", note: "" },
        { id: 'v129', lesson: "Bài 2", type: "new", vn: "Cái này", kr: "이것", note: "" },
        { id: 'v130', lesson: "Bài 2", type: "new", vn: "Cái đó", kr: "그것", note: "" },
        { id: 'v131', lesson: "Bài 2", type: "new", vn: "Cái kia", kr: "저것", note: "" },
        { id: 'v132', lesson: "Bài 2", type: "new", vn: "Nhiều", kr: "많이", note: "" },
        { id: 'v133', lesson: "Bài 2", type: "new", vn: "Cái gì", kr: "무엇", note: "" },
        { id: 'v134', lesson: "Bài 2", type: "new", vn: "Ở đâu", kr: "어디", note: "" },
        { id: 'v135', lesson: "Bài 2", type: "new", vn: "Tivi", kr: "텔레비전", note: "" },
        { id: 'v136', lesson: "Bài 2", type: "new", vn: "Đài, radio", kr: "라디오", note: "" },
        { id: 'v137', lesson: "Bài 2", type: "new", vn: "Điện thoại di động", kr: "휴대전화", note: "" },

        // --- BÀI 3: SINH HOẠT HÀNG NGÀY ---
        { id: 'v138', lesson: "Bài 3", type: "new", vn: "Sinh hoạt hàng ngày", kr: "일상생활", note: "" },
        { id: 'v139', lesson: "Bài 3", type: "new", vn: "Động từ", kr: "동사", note: "" },
        { id: 'v140', lesson: "Bài 3", type: "new", vn: "Đi", kr: "가다", note: "" },
        { id: 'v141', lesson: "Bài 3", type: "new", vn: "Đến", kr: "오다", note: "" },
        { id: 'v142', lesson: "Bài 3", type: "new", vn: "Ngủ", kr: "자다", note: "" },
        { id: 'v143', lesson: "Bài 3", type: "new", vn: "Ăn", kr: "먹다", note: "" },
        { id: 'v144', lesson: "Bài 3", type: "new", vn: "Uống", kr: "마시다", note: "" },
        { id: 'v145', lesson: "Bài 3", type: "new", vn: "Nói chuyện", kr: "이야기하다", note: "" },
        { id: 'v146', lesson: "Bài 3", type: "new", vn: "Đọc", kr: "읽다", note: "" },
        { id: 'v147', lesson: "Bài 3", type: "new", vn: "Nghe", kr: "듣다", note: "" },
        { id: 'v148', lesson: "Bài 3", type: "new", vn: "Nhìn, xem", kr: "보다", note: "" },
        { id: 'v149', lesson: "Bài 3", type: "new", vn: "Làm việc", kr: "일하다", note: "" },
        { id: 'v150', lesson: "Bài 3", type: "new", vn: "Học", kr: "공부하다", note: "" },
        { id: 'v151', lesson: "Bài 3", type: "new", vn: "Luyện tập thể thao", kr: "운동하다", note: "" },
        { id: 'v152', lesson: "Bài 3", type: "new", vn: "Nghỉ ngơi", kr: "쉬다", note: "" },
        { id: 'v153', lesson: "Bài 3", type: "new", vn: "Gặp gỡ", kr: "만나다", note: "" },
        { id: 'v154', lesson: "Bài 3", type: "new", vn: "Mua", kr: "사다", note: "" },
        { id: 'v155', lesson: "Bài 3", type: "new", vn: "Tính từ", kr: "형용사", note: "" },
        { id: 'v156', lesson: "Bài 3", type: "new", vn: "Thích", kr: "좋아하다", note: "" },
        { id: 'v157', lesson: "Bài 3", type: "new", vn: "To", kr: "크다", note: "" },
        { id: 'v158', lesson: "Bài 3", type: "new", vn: "Nhỏ", kr: "작다", note: "" },
        { id: 'v159', lesson: "Bài 3", type: "new", vn: "Nhiều", kr: "많다", note: "" },
        { id: 'v160', lesson: "Bài 3", type: "new", vn: "Ít", kr: "적다", note: "" },
        { id: 'v161', lesson: "Bài 3", type: "new", vn: "Tốt, đẹp", kr: "좋다", note: "" },
        { id: 'v162', lesson: "Bài 3", type: "new", vn: "Xấu, tồi", kr: "나쁘다", note: "" },
        { id: 'v163', lesson: "Bài 3", type: "new", vn: "Rất", kr: "아주", note: "" },
        { id: 'v164', lesson: "Bài 3", type: "new", vn: "Du lịch", kr: "여행", note: "" },
        { id: 'v165', lesson: "Bài 3", type: "new", vn: "Thư điện tử, email", kr: "이메일", note: "" },
        { id: 'v166', lesson: "Bài 3", type: "new", vn: "Trên", kr: "위", note: "" },
        { id: 'v167', lesson: "Bài 3", type: "new", vn: "Hay, thường xuyên", kr: "자주", note: "" },
        { id: 'v168', lesson: "Bài 3", type: "new", vn: "Hay, thú vị", kr: "재미있다", note: "" },
        { id: 'v169', lesson: "Bài 3", type: "new", vn: "Không hay", kr: "재미없다", note: "" },
        { id: 'v170', lesson: "Bài 3", type: "new", vn: "Trà", kr: "차", note: "" },
        { id: 'v171', lesson: "Bài 3", type: "new", vn: "Cà phê", kr: "커피", note: "" },
        { id: 'v172', lesson: "Bài 3", type: "new", vn: "Bánh mì", kr: "빵", note: "" },
        { id: 'v173', lesson: "Bài 3", type: "new", vn: "Sữa", kr: "우유", note: "" },
        { id: 'v174', lesson: "Bài 3", type: "new", vn: "Phim ảnh", kr: "영화", note: "" },
        { id: 'v175', lesson: "Bài 3", type: "new", vn: "Báo chí", kr: "신문", note: "" },
        { id: 'v176', lesson: "Bài 3", type: "new", vn: "Âm nhạc", kr: "음악", note: "" },
        { id: 'v177', lesson: "Bài 3", type: "new", vn: "Bạn bè", kr: "친구", note: "" },
        { id: 'v178', lesson: "Bài 3", type: "new", vn: "Cái gì", kr: "무엇", note: "" },
        { id: 'v179', lesson: "Bài 3", type: "new", vn: "Đâu", kr: "어디", note: "" },
        { id: 'v180', lesson: "Bài 3", type: "new", vn: "Ai", kr: "누구", note: "" },
        { id: 'v181', lesson: "Bài 3", type: "new", vn: "Khi nào, bao giờ", kr: "언제", note: "" },
        { id: 'v182', lesson: "Bài 3", type: "new", vn: "Bài hát", kr: "노래", note: "" },
        { id: 'v183', lesson: "Bài 3", type: "new", vn: "Tòa nhà", kr: "빌딩", note: "" },
        { id: 'v184', lesson: "Bài 3", type: "new", vn: "Phòng", kr: "방", note: "" },
        { id: 'v185', lesson: "Bài 3", type: "new", vn: "Quả táo", kr: "사과", note: "" },
        { id: 'v186', lesson: "Bài 3", type: "new", vn: "Đi dạo", kr: "산책하다", note: "" },
        { id: 'v187', lesson: "Bài 3", type: "new", vn: "Mua sắm", kr: "쇼핑하다", note: "" },
        { id: 'v188', lesson: "Bài 3", type: "new", vn: "Trung tâm thành phố", kr: "시내", note: "" },
        { id: 'v189', lesson: "Bài 3", type: "new", vn: "Trà xanh", kr: "녹차", note: "" },
        { id: 'v190', lesson: "Bài 3", type: "new", vn: "Nước ép", kr: "주스", note: "" },
        { id: 'v191', lesson: "Bài 3", type: "new", vn: "Dùng bữa", kr: "식사하다", note: "" },
        { id: 'v192', lesson: "Bài 3", type: "new", vn: "Kem", kr: "아이스크림", note: "" },
        { id: 'v193', lesson: "Bài 3", type: "new", vn: "Gọi điện thoại", kr: "전화하다", note: "" },
        { id: 'v194', lesson: "Bài 3", type: "new", vn: "Bây giờ", kr: "지금", note: "" },
        { id: 'v195', lesson: "Bài 3", type: "new", vn: "Đá bóng", kr: "축구를 하다", note: "" },
        { id: 'v196', lesson: "Bài 3", type: "new", vn: "Quán cà phê", kr: "카페/커피숍", note: "" },
        { id: 'v197', lesson: "Bài 3", type: "new", vn: "CLB thể dục thể thao", kr: "헬스클럽", note: "" },

        // --- BÀI 4: NGÀY VÀ THỨ ---
        { id: 'v198', lesson: "Bài 4", type: "new", vn: "Ngày tháng", kr: "날짜", note: "" },
        { id: 'v199', lesson: "Bài 4", type: "new", vn: "Thứ", kr: "요일", note: "" },
        { id: 'v200', lesson: "Bài 4", type: "new", vn: "Thứ hai", kr: "월요일", note: "" },
        { id: 'v201', lesson: "Bài 4", type: "new", vn: "Thứ ba", kr: "화요일", note: "" },
        { id: 'v202', lesson: "Bài 4", type: "new", vn: "Thứ tư", kr: "수요일", note: "" },
        { id: 'v203', lesson: "Bài 4", type: "new", vn: "Thứ năm", kr: "목요일", note: "" },
        { id: 'v204', lesson: "Bài 4", type: "new", vn: "Thứ sáu", kr: "금요일", note: "" },
        { id: 'v205', lesson: "Bài 4", type: "new", vn: "Thứ bảy", kr: "토요일", note: "" },
        { id: 'v206', lesson: "Bài 4", type: "new", vn: "Chủ nhật", kr: "일요일", note: "" },
        { id: 'v207', lesson: "Bài 4", type: "new", vn: "Năm", kr: "년", note: "" },
        { id: 'v208', lesson: "Bài 4", type: "new", vn: "Tháng", kr: "월", note: "" },
        { id: 'v209', lesson: "Bài 4", type: "new", vn: "Ngày", kr: "일", note: "" },
        { id: 'v210', lesson: "Bài 4", type: "new", vn: "Giờ", kr: "시", note: "" },
        { id: 'v211', lesson: "Bài 4", type: "new", vn: "Tháng một", kr: "일월", note: "" },
        { id: 'v212', lesson: "Bài 4", type: "new", vn: "Tháng hai", kr: "이월", note: "" },
        { id: 'v213', lesson: "Bài 4", type: "new", vn: "Tháng ba", kr: "삼월", note: "" },
        { id: 'v214', lesson: "Bài 4", type: "new", vn: "Tháng tư", kr: "사월", note: "" },
        { id: 'v215', lesson: "Bài 4", type: "new", vn: "Tháng năm", kr: "오월", note: "" },
        { id: 'v216', lesson: "Bài 4", type: "new", vn: "Tháng sáu", kr: "유월", note: "" },
        { id: 'v217', lesson: "Bài 4", type: "new", vn: "Tháng bảy", kr: "칠월", note: "" },
        { id: 'v218', lesson: "Bài 4", type: "new", vn: "Tháng tám", kr: "팔월", note: "" },
        { id: 'v219', lesson: "Bài 4", type: "new", vn: "Tháng chín", kr: "구월", note: "" },
        { id: 'v220', lesson: "Bài 4", type: "new", vn: "Tháng mười", kr: "시월", note: "" },
        { id: 'v221', lesson: "Bài 4", type: "new", vn: "Tháng mười một", kr: "십일월", note: "" },
        { id: 'v222', lesson: "Bài 4", type: "new", vn: "Tháng mười hai", kr: "십이월", note: "" },
        { id: 'v223', lesson: "Bài 4", type: "new", vn: "Ngày thường", kr: "평일/주중", note: "" },
        { id: 'v224', lesson: "Bài 4", type: "new", vn: "Cuối tuần", kr: "주말", note: "" },
        { id: 'v225', lesson: "Bài 4", type: "new", vn: "Ngày mấy", kr: "며칠", note: "" },
        { id: 'v226', lesson: "Bài 4", type: "new", vn: "Giảng viên", kr: "강사", note: "" },
        { id: 'v227', lesson: "Bài 4", type: "new", vn: "Bảng kế hoạch", kr: "계획표", note: "" },
        { id: 'v228', lesson: "Bài 4", type: "new", vn: "Ngắm, xem", kr: "구경하다", note: "" },
        { id: 'v229', lesson: "Bài 4", type: "new", vn: "Và", kr: "그리고", note: "" },
        { id: 'v230', lesson: "Bài 4", type: "new", vn: "Ngày lễ", kr: "명절", note: "" },
        { id: 'v231', lesson: "Bài 4", type: "new", vn: "Kì nghỉ (của HS)", kr: "방학", note: "" },
        { id: 'v232', lesson: "Bài 4", type: "new", vn: "Kì nghỉ hè", kr: "여름 방학", note: "" },
        { id: 'v233', lesson: "Bài 4", type: "new", vn: "Hôm kia", kr: "그저께", note: "" },
        { id: 'v234', lesson: "Bài 4", type: "new", vn: "Hôm qua", kr: "어제", note: "" },
        { id: 'v235', lesson: "Bài 4", type: "new", vn: "Hôm nay", kr: "오늘", note: "" },
        { id: 'v236', lesson: "Bài 4", type: "new", vn: "Ngày mai", kr: "내일", note: "" },
        { id: 'v237', lesson: "Bài 4", type: "new", vn: "Ngày kia", kr: "모레", note: "" },
        { id: 'v238', lesson: "Bài 4", type: "new", vn: "Năm ngoái", kr: "지난 해/작년", note: "" },
        { id: 'v239', lesson: "Bài 4", type: "new", vn: "Năm nay", kr: "올해/금년", note: "" },
        { id: 'v240', lesson: "Bài 4", type: "new", vn: "Năm sau", kr: "다음 해/내년", note: "" },
        { id: 'v241', lesson: "Bài 4", type: "new", vn: "Tháng trước", kr: "지난 달", note: "" },
        { id: 'v242', lesson: "Bài 4", type: "new", vn: "Tháng này", kr: "이번 달", note: "" },
        { id: 'v243', lesson: "Bài 4", type: "new", vn: "Tháng sau", kr: "다음 달", note: "" },
        { id: 'v244', lesson: "Bài 4", type: "new", vn: "Tuần trước", kr: "지난 주", note: "" },
        { id: 'v245', lesson: "Bài 4", type: "new", vn: "Tuần này", kr: "이번 주", note: "" },
        { id: 'v246', lesson: "Bài 4", type: "new", vn: "Tuần sau", kr: "다음 주", note: "" },
        { id: 'v247', lesson: "Bài 4", type: "new", vn: "Số từ Hán Hàn", kr: "한자어수사", note: "" },
        { id: 'v248', lesson: "Bài 4", type: "new", vn: "0", kr: "영/공", note: "" },
        { id: 'v249', lesson: "Bài 4", type: "new", vn: "1", kr: "일", note: "" },
        { id: 'v250', lesson: "Bài 4", type: "new", vn: "2", kr: "이", note: "" },
        { id: 'v251', lesson: "Bài 4", type: "new", vn: "3", kr: "삼", note: "" },
        { id: 'v252', lesson: "Bài 4", type: "new", vn: "4", kr: "사", note: "" },
        { id: 'v253', lesson: "Bài 4", type: "new", vn: "5", kr: "오", note: "" },
        { id: 'v254', lesson: "Bài 4", type: "new", vn: "6", kr: "육", note: "" },
        { id: 'v255', lesson: "Bài 4", type: "new", vn: "7", kr: "칠", note: "" },
        { id: 'v256', lesson: "Bài 4", type: "new", vn: "8", kr: "팔", note: "" },
        { id: 'v257', lesson: "Bài 4", type: "new", vn: "9", kr: "구", note: "" },
        { id: 'v258', lesson: "Bài 4", type: "new", vn: "10", kr: "십", note: "" },
        { id: 'v259', lesson: "Bài 4", type: "new", vn: "11", kr: "십일", note: "" },
        { id: 'v260', lesson: "Bài 4", type: "new", vn: "12", kr: "십이", note: "" },
        { id: 'v261', lesson: "Bài 4", type: "new", vn: "13", kr: "십삼", note: "" },
        { id: 'v262', lesson: "Bài 4", type: "new", vn: "14", kr: "십사", note: "" },
        { id: 466, lesson: "Bài 4", type: "new", vn: "15", kr: "십오", note: "" },
        { id: 467, lesson: "Bài 4", type: "new", vn: "16", kr: "십육", note: "" },
        { id: 468, lesson: "Bài 4", type: "new", vn: "17", kr: "십칠", note: "" },
        { id: 469, lesson: "Bài 4", type: "new", vn: "18", kr: "십팔", note: "" },
        { id: 470, lesson: "Bài 4", type: "new", vn: "19", kr: "십구", note: "" },
        { id: 'v263', lesson: "Bài 4", type: "new", vn: "20", kr: "이십", note: "" },
        { id: 'v264', lesson: "Bài 4", type: "new", vn: "30", kr: "삼십", note: "" },
        { id: 'v265', lesson: "Bài 4", type: "new", vn: "40", kr: "사십", note: "" },
        { id: 'v266', lesson: "Bài 4", type: "new", vn: "50", kr: "오십", note: "" },
        { id: 'v267', lesson: "Bài 4", type: "new", vn: "60", kr: "육십", note: "" },
        { id: 'v268', lesson: "Bài 4", type: "new", vn: "70", kr: "칠십", note: "" },
        { id: 'v269', lesson: "Bài 4", type: "new", vn: "80", kr: "팔십", note: "" },
        { id: 'v270', lesson: "Bài 4", type: "new", vn: "90", kr: "구십", note: "" },
        { id: 'v271', lesson: "Bài 4", type: "new", vn: "100", kr: "백", note: "" },
        { id: 'v272', lesson: "Bài 4", type: "new", vn: "1,000", kr: "천", note: "" },
        { id: 'v273', lesson: "Bài 4", type: "new", vn: "10,000", kr: "만", note: "" },
        { id: 'v274', lesson: "Bài 4", type: "new", vn: "100,000", kr: "십만", note: "" },
        { id: 'v275', lesson: "Bài 4", type: "new", vn: "1,000,000", kr: "백만", note: "" },
        { id: 'v276', lesson: "Bài 4", type: "new", vn: "10,000,000", kr: "천만", note: "" },
        { id: 'v277', lesson: "Bài 4", type: "new", vn: "100,000,000", kr: "억", note: "" },
        { id: 'v278', lesson: "Bài 4", type: "new", vn: "1,000,000,000", kr: "십억", note: "" },
        { id: 'v279', lesson: "Bài 4", type: "new", vn: "Núi", kr: "산", note: "" },
        { id: 'v280', lesson: "Bài 4", type: "new", vn: "Tổ chức tiệc", kr: "파티를하다", note: "" },
        { id: 'v281', lesson: "Bài 4", type: "new", vn: "Tiệc sinh nhật", kr: "생일 파티", note: "" },
        { id: 'v282', lesson: "Bài 4", type: "new", vn: "Kỳ thi, kiểm tra", kr: "시험", note: "" },
        { id: 'v283', lesson: "Bài 4", type: "new", vn: "Ôn thi", kr: "시험공부하다", note: "" },
        { id: 'v284', lesson: "Bài 4", type: "new", vn: "Bài tập", kr: "숙제", note: "" },
        { id: 'v285', lesson: "Bài 4", type: "new", vn: "Đẹp", kr: "아름답다", note: "" },
        { id: 'v286', lesson: "Bài 4", type: "new", vn: "Sự hướng dẫn", kr: "안내", note: "" },
        { id: 'v287', lesson: "Bài 4", type: "new", vn: "Số điện thoại", kr: "전화번호", note: "" },
        { id: 'v288', lesson: "Bài 4", type: "new", vn: "Sự làm thêm", kr: "아르바이트", note: "" },
        { id: 'v289', lesson: "Bài 4", type: "new", vn: "Tầng", kr: "층", note: "" },
        { id: 'v290', lesson: "Bài 4", type: "new", vn: "Quán cà phê", kr: "카페/커피숍", note: "" },
        { id: 'v291', lesson: "Bài 4", type: "new", vn: "Tốt nghiệp", kr: "졸업하다", note: "" },
        { id: 'v292', lesson: "Bài 4", type: "new", vn: "Giáng sinh", kr: "크리스마스", note: "" },
        { id: 'v293', lesson: "Bài 4", type: "new", vn: "Ngày tết", kr: "설날", note: "" },
        { id: 'v294', lesson: "Bài 4", type: "new", vn: "Ngày kỉ niệm chữ Hangul", kr: "한글날", note: "" },
        { id: 'v295', lesson: "Bài 4", type: "new", vn: "Số (phòng)", kr: "호", note: "" },
        { id: 'v296', lesson: "Bài 4", type: "new", vn: "Họp, hội nghị", kr: "회의하다", note: "" },
        { id: 'v297', lesson: "Bài 4", type: "new", vn: "Mấy", kr: "몇", note: "" },
        { id: 'v298', lesson: "Bài 4", type: "new", vn: "Tầng mấy", kr: "몇층", note: "" },
        { id: 'v299', lesson: "Bài 4", type: "new", vn: "Số mấy", kr: "몇번", note: "" },

        // --- BÀI 5: CÔNG VIỆC TRONG NGÀY ---
        { id: 'v300', lesson: "Bài 5", type: "new", vn: "Thời gian", kr: "시간", note: "" },
        { id: 'v301', lesson: "Bài 5", type: "new", vn: "Buổi sáng", kr: "오전", note: "" },
        { id: 'v302', lesson: "Bài 5", type: "new", vn: "Buổi chiều", kr: "오후", note: "" },
        { id: 'v303', lesson: "Bài 5", type: "new", vn: "Ban ngày", kr: "낮", note: "" },
        { id: 'v304', lesson: "Bài 5", type: "new", vn: "Ban đêm", kr: "밤", note: "" },
        { id: 'v305', lesson: "Bài 5", type: "new", vn: "Sáng sớm", kr: "새벽", note: "" },
        { id: 'v306', lesson: "Bài 5", type: "new", vn: "Sáng", kr: "아침", note: "" },
        { id: 'v307', lesson: "Bài 5", type: "new", vn: "Trưa", kr: "점심", note: "" },
        { id: 'v308', lesson: "Bài 5", type: "new", vn: "Tối", kr: "저녁", note: "" },
        { id: 'v309', lesson: "Bài 5", type: "new", vn: "Giờ", kr: "시", note: "" },
        { id: 'v310', lesson: "Bài 5", type: "new", vn: "Phút", kr: "분", note: "" },
        { id: 'v311', lesson: "Bài 5", type: "new", vn: "Giây", kr: "초", note: "" },
        { id: 'v312', lesson: "Bài 5", type: "new", vn: "Thức dậy", kr: "일어나다", note: "" },
        { id: 'v313', lesson: "Bài 5", type: "new", vn: "Đánh răng", kr: "이를 닦다", note: "" },
        { id: 'v314', lesson: "Bài 5", type: "new", vn: "Rửa mặt", kr: "세수하다", note: "" },
        { id: 'v315', lesson: "Bài 5", type: "new", vn: "Chuẩn bị bữa sáng", kr: "아침 준비하다", note: "" },
        { id: 'v316', lesson: "Bài 5", type: "new", vn: "Chuẩn bị bữa trưa", kr: "점심 준비하다", note: "" },
        { id: 'v317', lesson: "Bài 5", type: "new", vn: "Chuẩn bị bữa tối", kr: "저녁 준비하다", note: "" },
        { id: 'v318', lesson: "Bài 5", type: "new", vn: "Đi lại (thường xuyên)", kr: "다니다", note: "" },
        { id: 'v319', lesson: "Bài 5", type: "new", vn: "Học tập", kr: "배우다", note: "" },
        { id: 'v320', lesson: "Bài 5", type: "new", vn: "Giặt giũ", kr: "세탁하다/빨래하다", note: "" },
        { id: 'v321', lesson: "Bài 5", type: "new", vn: "Dọn dẹp vệ sinh", kr: "청소하다", note: "" },
        { id: 'v322', lesson: "Bài 5", type: "new", vn: "Tắm rửa", kr: "샤워하다/목욕하다", note: "" },
        { id: 'v323', lesson: "Bài 5", type: "new", vn: "Đi làm", kr: "출근하다", note: "" },
        { id: 'v324', lesson: "Bài 5", type: "new", vn: "Tan làm", kr: "퇴근하다", note: "" },
        { id: 'v325', lesson: "Bài 5", type: "new", vn: "Lái xe", kr: "운전하다", note: "" },
        { id: 'v326', lesson: "Bài 5", type: "new", vn: "Internet", kr: "인터넷", note: "" },
        { id: 'v327', lesson: "Bài 5", type: "new", vn: "Nhật ký", kr: "일기", note: "" },
        { id: 'v328', lesson: "Bài 5", type: "new", vn: "Xuất phát", kr: "출발하다", note: "" },
        { id: 'v329', lesson: "Bài 5", type: "new", vn: "Sau, sau khi", kr: "후", note: "" },
        { id: 'v330', lesson: "Bài 5", type: "new", vn: "Quán internet", kr: "PC방", note: "" },
        { id: 'v331', lesson: "Bài 5", type: "new", vn: "Quán karaoke", kr: "노래방", note: "" },
        { id: 'v332', lesson: "Bài 5", type: "new", vn: "Giờ học, buổi học", kr: "수업", note: "" },
        { id: 'v333', lesson: "Bài 5", type: "new", vn: "Khoa Anh ngữ", kr: "영문과", note: "" },
        { id: 'v334', lesson: "Bài 5", type: "new", vn: "Thi cử", kr: "시험을 보다", note: "" },
        { id: 'v335', lesson: "Bài 5", type: "new", vn: "Bắt đầu", kr: "시작하다", note: "" },
        { id: 'v336', lesson: "Bài 5", type: "new", vn: "Xong, kết thúc", kr: "끝나다", note: "" },
        { id: 'v337', lesson: "Bài 5", type: "new", vn: "Số từ Thuần Hàn", kr: "고유어수사", note: "" },
        { id: 'v338', lesson: "Bài 5", type: "new", vn: "1", kr: "하나", note: "" },
        { id: 'v339', lesson: "Bài 5", type: "new", vn: "2", kr: "둘", note: "" },
        { id: 'v340', lesson: "Bài 5", type: "new", vn: "3", kr: "셋", note: "" },
        { id: 'v341', lesson: "Bài 5", type: "new", vn: "4", kr: "넷", note: "" },
        { id: 'v342', lesson: "Bài 5", type: "new", vn: "5", kr: "다섯", note: "" },
        { id: 'v343', lesson: "Bài 5", type: "new", vn: "6", kr: "여섯", note: "" },
        { id: 'v344', lesson: "Bài 5", type: "new", vn: "7", kr: "일곱", note: "" },
        { id: 'v345', lesson: "Bài 5", type: "new", vn: "8", kr: "여덟", note: "" },
        { id: 'v346', lesson: "Bài 5", type: "new", vn: "9", kr: "아홉", note: "" },
        { id: 'v347', lesson: "Bài 5", type: "new", vn: "10", kr: "열", note: "" },
        { id: 'v348', lesson: "Bài 5", type: "new", vn: "11", kr: "열하나", note: "" },
        { id: 'v349', lesson: "Bài 5", type: "new", vn: "12", kr: "열둘", note: "" },
        { id: 'v350', lesson: "Bài 5", type: "new", vn: "13", kr: "열셋", note: "" },
        { id: 'v351', lesson: "Bài 5", type: "new", vn: "14", kr: "열넷", note: "" },
        { id: 'v352', lesson: "Bài 5", type: "new", vn: "15", kr: "열다섯", note: "" },
        { id: 'v353', lesson: "Bài 5", type: "new", vn: "16", kr: "열여섯", note: "" },
        { id: 'v354', lesson: "Bài 5", type: "new", vn: "17", kr: "열일곱", note: "" },
        { id: 'v355', lesson: "Bài 5", type: "new", vn: "18", kr: "열여덟", note: "" },
        { id: 'v356', lesson: "Bài 5", type: "new", vn: "19", kr: "열아홉", note: "" },
        { id: 'v357', lesson: "Bài 5", type: "new", vn: "20", kr: "스물", note: "" },
        { id: 'v358', lesson: "Bài 5", type: "new", vn: "30", kr: "서른", note: "" },
        { id: 'v359', lesson: "Bài 5", type: "new", vn: "40", kr: "마흔", note: "" },
        { id: 'v360', lesson: "Bài 5", type: "new", vn: "50", kr: "쉰", note: "" },
        { id: 'v361', lesson: "Bài 5", type: "new", vn: "60", kr: "예순", note: "" },
        { id: 'v362', lesson: "Bài 5", type: "new", vn: "70", kr: "일흔", note: "" },
        { id: 'v363', lesson: "Bài 5", type: "new", vn: "80", kr: "여든", note: "" },
        { id: 'v364', lesson: "Bài 5", type: "new", vn: "90", kr: "아흔", note: "" },
        { id: 'v365', lesson: "Bài 5", type: "new", vn: "100", kr: "백", note: "" },
        { id: 'v366', lesson: "Bài 5", type: "new", vn: "Mấy giờ", kr: "몇시", note: "" },
        { id: 'v367', lesson: "Bài 5", type: "new", vn: "Mấy tuổi", kr: "몇살", note: "" },
        { id: 'v368', lesson: "Bài 5", type: "new", vn: "Mấy lần", kr: "몇번", note: "" },
        { id: 'v369', lesson: "Bài 5", type: "new", vn: "1 giờ 30 phút", kr: "한시 삼십분/한시반", note: "" },
        { id: 'v370', lesson: "Bài 5", type: "new", vn: "Mùa đông", kr: "겨울", note: "" },
        { id: 'v371', lesson: "Bài 5", type: "new", vn: "Khoảng", kr: "쯤", note: "" },
        { id: 'v372', lesson: "Bài 5", type: "new", vn: "Quê hương", kr: "고향", note: "" },
        { id: 'v373', lesson: "Bài 5", type: "new", vn: "Ngày", kr: "무류", note: "" },
        { id: 'v374', lesson: "Bài 5", type: "new", vn: "Sân bay", kr: "공항", note: "" },
        { id: 'v375', lesson: "Bài 5", type: "new", vn: "Đàn ông", kr: "남자", note: "" },
        { id: 'v376', lesson: "Bài 5", type: "new", vn: "Nhận", kr: "받다", note: "" },
        { id: 'v377', lesson: "Bài 5", type: "new", vn: "Phụ nữ", kr: "여자", note: "" },
        { id: 'v378', lesson: "Bài 5", type: "new", vn: "Cơm", kr: "밥", note: "" },
        { id: 'v379', lesson: "Bài 5", type: "new", vn: "Bố mẹ", kr: "부모님", note: "" },
        { id: 'v380', lesson: "Bài 5", type: "new", vn: "Nhà", kr: "집", note: "" },
        { id: 'v381', lesson: "Bài 5", type: "new", vn: "Bơi lội (V)", kr: "수영하다", note: "" },
		// =========================================================
        // 📚 KHO TỪ VỰNG PHẦN 2: BÀI 6 -> BÀI 10 (FULL EMOJI)
        // Dữ liệu bám sát 100% tài liệu Sơ cấp 1[cite: 3]
        // =========================================================

        // --- BÀI 6: CUỐI TUẦN ---
        { id: 'v382', lesson: "Bài 6", type: "new", vn: "Cuối tuần", kr: "주말", note: "" },
        { id: 'v383', lesson: "Bài 6", type: "new", vn: "Gì", kr: "무슨", note: "" },
        { id: 'v384', lesson: "Bài 6", type: "new", vn: "(Thế) nào", kr: "어떤", note: "" },
        { id: 'v385', lesson: "Bài 6", type: "new", vn: "Nào", kr: "어느", note: "" },
        { id: 'v386', lesson: "Bài 6", type: "new", vn: "Hoạt động", kr: "활동", note: "" },
        { id: 'v387', lesson: "Bài 6", type: "new", vn: "Leo núi", kr: "등산하다", note: "" },
        { id: 'v388', lesson: "Bài 6", type: "new", vn: "Xem phim", kr: "영화를보다", note: "" },
        { id: 'v389', lesson: "Bài 6", type: "new", vn: "Tập thể dục", kr: "운동하다", note: "" },
        { id: 'v390', lesson: "Bài 6", type: "new", vn: "Cắm trại", kr: "캠핑하다", note: "" },
        { id: 'v391', lesson: "Bài 6", type: "new", vn: "Mua sắm", kr: "쇼핑하다", note: "" },
        { id: 'v392', lesson: "Bài 6", type: "new", vn: "Bơi lội", kr: "수영하다", note: "" },
        { id: 'v393', lesson: "Bài 6", type: "new", vn: "Nghỉ ngơi", kr: "쉬다", note: "" },
        { id: 'v394', lesson: "Bài 6", type: "new", vn: "Đi ăn ngoài", kr: "외식하다", note: "" },
        { id: 'v395', lesson: "Bài 6", type: "new", vn: "Gặp bạn bè", kr: "친구를 만나다", note: "" },
        { id: 'v396', lesson: "Bài 6", type: "new", vn: "Đi dạo bộ", kr: "산책하다", note: "" },
        { id: 'v397', lesson: "Bài 6", type: "new", vn: "Đi dã ngoại", kr: "소풍가다", note: "" },
        { id: 'v398', lesson: "Bài 6", type: "new", vn: "Đọc sách", kr: "책을 읽다", note: "" },
        { id: 'v399', lesson: "Bài 6", type: "new", vn: "Ca sỹ", kr: "가수", note: "" },
        { id: 'v400', lesson: "Bài 6", type: "new", vn: "Con chó (to)", kr: "개", note: "" },
        { id: 'v401', lesson: "Bài 6", type: "new", vn: "Con chó nhỏ (cún)", kr: "강아지", note: "" },
        { id: 'v402', lesson: "Bài 6", type: "new", vn: "Con mèo", kr: "고양이", note: "" },
        { id: 'v403', lesson: "Bài 6", type: "new", vn: "Môn đánh gôn", kr: "골프", note: "" },
        { id: 'v404', lesson: "Bài 6", type: "new", vn: "Phim kinh dị", kr: "공포 영화", note: "" },
        { id: 'v405', lesson: "Bài 6", type: "new", vn: "Cây cối", kr: "나무", note: "" },
        { id: 'v406', lesson: "Bài 6", type: "new", vn: "Động vật", kr: "동물", note: "" },
        { id: 'v407', lesson: "Bài 6", type: "new", vn: "Phim truyền hình", kr: "드라마", note: "" },
        { id: 'v408', lesson: "Bài 6", type: "new", vn: "Quả dâu tây", kr: "딸기", note: "" },
        { id: 'v409', lesson: "Bài 6", type: "new", vn: "Nhiều", kr: "많이", note: "" },
        { id: 'v410', lesson: "Bài 6", type: "new", vn: "Biển", kr: "바다", note: "" },
        { id: 'v411', lesson: "Bài 6", type: "new", vn: "Quả lê", kr: "배", note: "" },
        { id: 'v412', lesson: "Bài 6", type: "new", vn: "Bóng chuyền", kr: "배구", note: "" },
        { id: 'v413', lesson: "Bài 6", type: "new", vn: "Trải qua", kr: "보내다", note: "" },
        { id: 'v414', lesson: "Bài 6", type: "new", vn: "Giặt đồ", kr: "빨래하다", note: "" },
        { id: 'v415', lesson: "Bài 6", type: "new", vn: "Con chim", kr: "새", note: "" },
        { id: 'v416', lesson: "Bài 6", type: "new", vn: "Quà tặng", kr: "선물", note: "" },
        { id: 'v417', lesson: "Bài 6", type: "new", vn: "Ghét, không thích", kr: "싫어하다", note: "" },
        { id: 'v418', lesson: "Bài 6", type: "new", vn: "Rất", kr: "아주", note: "" },
        { id: 'v419', lesson: "Bài 6", type: "new", vn: "Phim hành động", kr: "액션 영화", note: "" },
        { id: 'v420', lesson: "Bài 6", type: "new", vn: "Bóng chày", kr: "야구", note: "" },
        { id: 'v421', lesson: "Bài 6", type: "new", vn: "Nấu ăn", kr: "요리하다", note: "" },
        { id: 'v422', lesson: "Bài 6", type: "new", vn: "Sớm", kr: "일찍", note: "" },
        { id: 'v423', lesson: "Bài 6", type: "new", vn: "Bóng đá", kr: "축구", note: "" },
        { id: 'v424', lesson: "Bài 6", type: "new", vn: "Nhảy múa", kr: "춤을 추다", note: "" },
        { id: 'v425', lesson: "Bài 6", type: "new", vn: "Đánh, chơi (cầu)", kr: "치다", note: "" },
        { id: 'v426', lesson: "Bài 6", type: "new", vn: "Quần vợt", kr: "테니스", note: "" },
        { id: 'v427', lesson: "Bài 6", type: "new", vn: "Mệt nhọc", kr: "피곤하다", note: "" },
        { id: 'v428', lesson: "Bài 6", type: "new", vn: "Câu cá (V)", kr: "낚시하다", note: "" },
        { id: 'v429', lesson: "Bài 6", type: "new", vn: "Bóng rổ", kr: "농구", note: "" },

        // --- BÀI 7: MUA SẮM ---
        { id: 'v430', lesson: "Bài 7", type: "new", vn: "Đơn vị", kr: "단위", note: "" },
        { id: 'v431', lesson: "Bài 7", type: "new", vn: "Danh từ", kr: "명사", note: "" },
        { id: 'v432', lesson: "Bài 7", type: "new", vn: "Cái", kr: "개", note: "" },
        { id: 'v433', lesson: "Bài 7", type: "new", vn: "Người, Vị", kr: "사람/명", note: "" },
        { id: 'v434', lesson: "Bài 7", type: "new", vn: "Con", kr: "마리", note: "" },
        { id: 'v435', lesson: "Bài 7", type: "new", vn: "Chén", kr: "잔", note: "" },
        { id: 'v436', lesson: "Bài 7", type: "new", vn: "Chiếc", kr: "대", note: "" },
        { id: 'v437', lesson: "Bài 7", type: "new", vn: "Bình", kr: "병", note: "" },
        { id: 'v438', lesson: "Bài 7", type: "new", vn: "Đôi", kr: "켤레", note: "" },
        { id: 'v439', lesson: "Bài 7", type: "new", vn: "Quyển", kr: "권", note: "" },
        { id: 'v440', lesson: "Bài 7", type: "new", vn: "Trang", kr: "장", note: "" },
        { id: 'v441', lesson: "Bài 7", type: "new", vn: "Đồ vật", kr: "물건", note: "" },
        { id: 'v442', lesson: "Bài 7", type: "new", vn: "Hoa quả", kr: "과일", note: "" },
        { id: 'v443', lesson: "Bài 7", type: "new", vn: "Rau củ quả", kr: "채소", note: "" },
        { id: 'v444', lesson: "Bài 7", type: "new", vn: "Thức uống", kr: "음료수", note: "" },
        { id: 'v445', lesson: "Bài 7", type: "new", vn: "Giày", kr: "구두", note: "" },
        { id: 'v446', lesson: "Bài 7", type: "new", vn: "Bánh quy", kr: "과자", note: "" },
        { id: 'v447', lesson: "Bài 7", type: "new", vn: "Quả quýt", kr: "귤", note: "" },
        { id: 'v448', lesson: "Bài 7", type: "new", vn: "Thiết kế", kr: "디자인", note: "" },
        { id: 'v449', lesson: "Bài 7", type: "new", vn: "Siêu thị nhỏ", kr: "마트", note: "" },
        { id: 'v450', lesson: "Bài 7", type: "new", vn: "Quả xoài", kr: "망고", note: "" },
        { id: 'v451', lesson: "Bài 7", type: "new", vn: "Văn phòng phẩm", kr: "문구점", note: "" },
        { id: 'v452', lesson: "Bài 7", type: "new", vn: "Hiệu sách", kr: "서점", note: "" },
        { id: 'v453', lesson: "Bài 7", type: "new", vn: "Hạ giá", kr: "세일/할인", note: "" },
        { id: 'v454', lesson: "Bài 7", type: "new", vn: "Sách tiểu thuyết", kr: "소설책", note: "" },
        { id: 'v455', lesson: "Bài 7", type: "new", vn: "Dưa hấu", kr: "수박", note: "" },
        { id: 'v456', lesson: "Bài 7", type: "new", vn: "Khu bán hàng điện tử", kr: "전자상가", note: "" },
        { id: 'v457', lesson: "Bài 7", type: "new", vn: "Nước hoa quả", kr: "주스", note: "" },
        { id: 'v458', lesson: "Bài 7", type: "new", vn: "Máy ảnh", kr: "카메라", note: "" },
        { id: 'v459', lesson: "Bài 7", type: "new", vn: "Áo sơ mi", kr: "티셔츠", note: "" },
        { id: 'v460', lesson: "Bài 7", type: "new", vn: "Hộp bút", kr: "필통", note: "" },
        { id: 'v461', lesson: "Bài 7", type: "new", vn: "Điện thoại thông minh", kr: "스마트폰", note: "" },

        // --- BÀI 8: THỨC ĂN ---
        { id: 'v462', lesson: "Bài 8", type: "new", vn: "Thức ăn", kr: "음식", note: "" },
        { id: 'v463', lesson: "Bài 8", type: "new", vn: "Cơm", kr: "밥", note: "" },
        { id: 'v464', lesson: "Bài 8", type: "new", vn: "Canh", kr: "국", note: "" },
        { id: 'v465', lesson: "Bài 8", type: "new", vn: "Kim chi", kr: "김치", note: "" },
        { id: 'v466', lesson: "Bài 8", type: "new", vn: "Món bulgogi", kr: "불고기", note: "" },
        { id: 'v467', lesson: "Bài 8", type: "new", vn: "Canh tương", kr: "된장찌개", note: "" },
        { id: 'v468', lesson: "Bài 8", type: "new", vn: "Cơm trộn", kr: "비빔밥", note: "" },
        { id: 'v469', lesson: "Bài 8", type: "new", vn: "Mỳ lạnh", kr: "냉면", note: "" },
        { id: 'v470', lesson: "Bài 8", type: "new", vn: "Bánh tteok", kr: "떡", note: "" },
        { id: 'v471', lesson: "Bài 8", type: "new", vn: "Mỳ gói", kr: "라면", note: "" },
        { id: 'v472', lesson: "Bài 8", type: "new", vn: "Thịt ba chỉ nướng", kr: "삼겹살", note: "" },
        { id: 'v473', lesson: "Bài 8", type: "new", vn: "Canh kim chi", kr: "김치찌개", note: "" },
        { id: 'v474', lesson: "Bài 8", type: "new", vn: "Súp sườn bò", kr: "갈비탕", note: "" },
        { id: 'v475', lesson: "Bài 8", type: "new", vn: "Gà hầm sâm", kr: "삼계탕", note: "" },
        { id: 'v476', lesson: "Bài 8", type: "new", vn: "Cơm chiên", kr: "볶음밥", note: "" },
        { id: 'v477', lesson: "Bài 8", type: "new", vn: "Món sườn nướng", kr: "갈비", note: "" },
        { id: 'v478', lesson: "Bài 8", type: "new", vn: "Mỳ, bún", kr: "국수", note: "" },
        { id: 'v479', lesson: "Bài 8", type: "new", vn: "Ngon", kr: "맛있다", note: "" },
        { id: 'v480', lesson: "Bài 8", type: "new", vn: "Không ngon", kr: "맛없다", note: "" },
        { id: 'v481', lesson: "Bài 8", type: "new", vn: "Mùi vị", kr: "맛", note: "" },
        { id: 'v482', lesson: "Bài 8", type: "new", vn: "Chua", kr: "시다", note: "" },
        { id: 'v483', lesson: "Bài 8", type: "new", vn: "Cay", kr: "맵다", note: "" },
        { id: 'v484', lesson: "Bài 8", type: "new", vn: "Mặn", kr: "짜다", note: "" },
        { id: 'v485', lesson: "Bài 8", type: "new", vn: "Ngọt", kr: "달다", note: "" },
        { id: 'v486', lesson: "Bài 8", type: "new", vn: "Đắng", kr: "쓰다", note: "" },
        { id: 'v487', lesson: "Bài 8", type: "new", vn: "Nhạt", kr: "싱겁다", note: "" },
        { id: 'v488', lesson: "Bài 8", type: "new", vn: "Nước", kr: "물", note: "" },
        { id: 'v489', lesson: "Bài 8", type: "new", vn: "Món ăn kèm", kr: "반찬", note: "" },
        { id: 'v490', lesson: "Bài 8", type: "new", vn: "Chai, bình", kr: "병", note: "" },
        { id: 'v491', lesson: "Bài 8", type: "new", vn: "Bình thường", kr: "보통", note: "" },
        { id: 'v492', lesson: "Bài 8", type: "new", vn: "Bánh mì", kr: "빵", note: "" },
        { id: 'v493', lesson: "Bài 8", type: "new", vn: "Muối", kr: "소금", note: "" },
        { id: 'v494', lesson: "Bài 8", type: "new", vn: "Ngồi", kr: "앉다", note: "" },
        { id: 'v495', lesson: "Bài 8", type: "new", vn: "Mau, nhanh", kr: "어서", note: "" },
        { id: 'v496', lesson: "Bài 8", type: "new", vn: "Ở đây", kr: "여기", note: "" },
        { id: 'v497', lesson: "Bài 8", type: "new", vn: "Thìa, muỗng", kr: "숟가락", note: "" },
        { id: 'v498', lesson: "Bài 8", type: "new", vn: "Đũa", kr: "젓가락", note: "" },
        { id: 'v499', lesson: "Bài 8", type: "new", vn: "Thực đơn", kr: "메뉴", note: "" },
        { id: 'v500', lesson: "Bài 8", type: "new", vn: "Cốc, ly", kr: "컵", note: "" },
        { id: 'v501', lesson: "Bài 8", type: "new", vn: "Bàn ăn", kr: "테이블", note: "" },
        { id: 'v502', lesson: "Bài 8", type: "new", vn: "Người phục vụ", kr: "종업원", note: "" },
        { id: 'v503', lesson: "Bài 8", type: "new", vn: "Khách hàng", kr: "손님", note: "" },
        { id: 'v504', lesson: "Bài 8", type: "new", vn: "Chỗ hút thuốc lá", kr: "흡연석", note: "" },
        { id: 'v505', lesson: "Bài 8", type: "new", vn: "Chỗ cấm hút thuốc", kr: "금연석", note: "" },
        { id: 'v506', lesson: "Bài 8", type: "new", vn: "Hóa đơn", kr: "영수증", note: "" },
        { id: 'v507', lesson: "Bài 8", type: "new", vn: "Gọi món", kr: "주문하다/시키다", note: "" },
        { id: 'v508', lesson: "Bài 8", type: "new", vn: "Tính toán, tính tiền", kr: "계산하다", note: "" },
        { id: 'v509', lesson: "Bài 8", type: "new", vn: "Phiếu tính tiền", kr: "계산서", note: "" },
        { id: 'v510', lesson: "Bài 8", type: "new", vn: "Suất ăn", kr: "인분", note: "" },
        { id: 'v511', lesson: "Bài 8", type: "new", vn: "Cà tím", kr: "가지", note: "" },
        { id: 'v512', lesson: "Bài 8", type: "new", vn: "Ớt", kr: "고추", note: "" },
        { id: 'v513', lesson: "Bài 8", type: "new", vn: "Vì vậy", kr: "그래서", note: "" },
        { id: 'v514', lesson: "Bài 8", type: "new", vn: "Chờ đợi", kr: "기다리다", note: "" },
        { id: 'v515', lesson: "Bài 8", type: "new", vn: "Chồng", kr: "남편", note: "" },
        { id: 'v516', lesson: "Bài 8", type: "new", vn: "Vợ", kr: "아내", note: "" },
        { id: 'v517', lesson: "Bài 8", type: "new", vn: "Trà xanh", kr: "녹차", note: "" },
        { id: 'v518', lesson: "Bài 8", type: "new", vn: "Thêm, nữa, càng", kr: "더", note: "" },
        { id: 'v519', lesson: "Bài 8", type: "new", vn: "Xơi, dùng bữa", kr: "드시다", note: "" },
        { id: 'v520', lesson: "Bài 8", type: "new", vn: "Chanh", kr: "레몬", note: "" },
        { id: 'v521', lesson: "Bài 8", type: "new", vn: "Làm, tạo nên", kr: "만들다", note: "" },
        { id: 'v522', lesson: "Bài 8", type: "new", vn: "Một cách ngon lành", kr: "맛있게", note: "" },
        { id: 'v523', lesson: "Bài 8", type: "new", vn: "Nhiều, vài", kr: "여러", note: "" },
        { id: 'v524', lesson: "Bài 8", type: "new", vn: "Trà sâm", kr: "인삼차", note: "" },
        { id: 'v525', lesson: "Bài 8", type: "new", vn: "Chỉ một lát", kr: "잠깐만", note: "" },
        { id: 'v526', lesson: "Bài 8", type: "new", vn: "Một chút", kr: "좀", note: "" },
        { id: 'v527', lesson: "Bài 8", type: "new", vn: "Cho", kr: "주다", note: "" },
        { id: 'v528', lesson: "Bài 8", type: "new", vn: "Cuối tuần", kr: "주말", note: "" },
        { id: 'v529', lesson: "Bài 8", type: "new", vn: "Bánh kem", kr: "케이크", note: "" },
        { id: 'v530', lesson: "Bài 8", type: "new", vn: "Đặc biệt", kr: "특히", note: "" },
        { id: 'v531', lesson: "Bài 8", type: "new", vn: "Luôn luôn", kr: "항상", note: "" },

        // --- BÀI 9: NHÀ CỬA ---
        { id: 'v532', lesson: "Bài 9", type: "new", vn: "Phương hướng", kr: "방향", note: "" },
        { id: 'v533', lesson: "Bài 9", type: "new", vn: "Vị trí", kr: "위치", note: "" },
        { id: 'v534', lesson: "Bài 9", type: "new", vn: "Trên", kr: "위", note: "" },
        { id: 'v535', lesson: "Bài 9", type: "new", vn: "Dưới", kr: "아래/밑", note: "" },
        { id: 'v536', lesson: "Bài 9", type: "new", vn: "Trong", kr: "안", note: "" },
        { id: 'v537', lesson: "Bài 9", type: "new", vn: "Ngoài", kr: "밖", note: "" },
        { id: 'v538', lesson: "Bài 9", type: "new", vn: "Bên cạnh", kr: "옆", note: "" },
        { id: 'v539', lesson: "Bài 9", type: "new", vn: "Giữa", kr: "사이", note: "" },
        { id: 'v540', lesson: "Bài 9", type: "new", vn: "Trước", kr: "앞", note: "" },
        { id: 'v541', lesson: "Bài 9", type: "new", vn: "Sau", kr: "뒤", note: "" },
        { id: 'v542', lesson: "Bài 9", type: "new", vn: "Bên trái", kr: "왼쪽", note: "" },
        { id: 'v543', lesson: "Bài 9", type: "new", vn: "Bên phải", kr: "오른쪽", note: "" },
        { id: 'v544', lesson: "Bài 9", type: "new", vn: "Hai phía", kr: "양쪽", note: "" },
        { id: 'v545', lesson: "Bài 9", type: "new", vn: "Đối diện", kr: "건너편/맞은편", note: "" },
        { id: 'v546', lesson: "Bài 9", type: "new", vn: "Thẳng", kr: "똑바로/쭉", note: "" },
        { id: 'v547', lesson: "Bài 9", type: "new", vn: "Đông", kr: "동", note: "" },
        { id: 'v548', lesson: "Bài 9", type: "new", vn: "Tây", kr: "서", note: "" },
        { id: 'v549', lesson: "Bài 9", type: "new", vn: "Nam", kr: "남", note: "" },
        { id: 'v550', lesson: "Bài 9", type: "new", vn: "Bắc", kr: "북", note: "" },
        { id: 'v551', lesson: "Bài 9", type: "new", vn: "Nhà riêng", kr: "주택", note: "" },
        { id: 'v552', lesson: "Bài 9", type: "new", vn: "Nhà chung cư", kr: "아파트", note: "" },
        { id: 'v553', lesson: "Bài 9", type: "new", vn: "Nhà tập thể", kr: "연립주택", note: "" },
        { id: 'v554', lesson: "Bài 9", type: "new", vn: "Phòng học", kr: "공부방", note: "" },
        { id: 'v555', lesson: "Bài 9", type: "new", vn: "Phòng khách", kr: "거실", note: "" },
        { id: 'v556', lesson: "Bài 9", type: "new", vn: "Phòng ngủ chính", kr: "안방", note: "" },
        { id: 'v557', lesson: "Bài 9", type: "new", vn: "Phòng ngủ", kr: "침실", note: "" },
        { id: 'v558', lesson: "Bài 9", type: "new", vn: "Ký túc xá", kr: "기숙사", note: "" },
        { id: 'v559', lesson: "Bài 9", type: "new", vn: "Căn hộ khép kín", kr: "단독주택", note: "" },
        { id: 'v560', lesson: "Bài 9", type: "new", vn: "Phức tạp", kr: "복잡하다", note: "" },
        { id: 'v561', lesson: "Bài 9", type: "new", vn: "Bất tiện", kr: "불편하다", note: "" },
        { id: 'v562', lesson: "Bài 9", type: "new", vn: "Sử dụng, dùng", kr: "사용하다", note: "" },
        { id: 'v563', lesson: "Bài 9", type: "new", vn: "Internet", kr: "인터넷", note: "" },
        { id: 'v564', lesson: "Bài 9", type: "new", vn: "Vườn", kr: "정원", note: "" },
        { id: 'v565', lesson: "Bài 9", type: "new", vn: "Sống, trải qua", kr: "지내다", note: "" },
        { id: 'v566', lesson: "Bài 9", type: "new", vn: "Bếp", kr: "부엌", note: "" },
        { id: 'v567', lesson: "Bài 9", type: "new", vn: "Nhà vệ sinh", kr: "화장실", note: "" },
        { id: 'v568', lesson: "Bài 9", type: "new", vn: "Phòng giặt đồ", kr: "세탁실", note: "" },
        { id: 'v569', lesson: "Bài 9", type: "new", vn: "Ban công", kr: "베란다", note: "" },
        { id: 'v570', lesson: "Bài 9", type: "new", vn: "Lối vào", kr: "현관", note: "" },
        { id: 'v571', lesson: "Bài 9", type: "new", vn: "Đồ gia dụng", kr: "가구", note: "" },
        { id: 'v572', lesson: "Bài 9", type: "new", vn: "Giường", kr: "침대", note: "" },
        { id: 'v573', lesson: "Bài 9", type: "new", vn: "Tủ sách", kr: "책장", note: "" },
        { id: 'v574', lesson: "Bài 9", type: "new", vn: "Tủ quần áo", kr: "옷장", note: "" },
        { id: 'v575', lesson: "Bài 9", type: "new", vn: "Tủ giày dép", kr: "신발장", note: "" },
        { id: 'v576', lesson: "Bài 9", type: "new", vn: "Ghế sofa", kr: "소파", note: "" },
        { id: 'v577', lesson: "Bài 9", type: "new", vn: "Bàn", kr: "탁자", note: "" },
        { id: 'v578', lesson: "Bài 9", type: "new", vn: "Bàn ăn", kr: "식탁", note: "" },
        { id: 'v579', lesson: "Bài 9", type: "new", vn: "Bàn trang điểm", kr: "화장대", note: "" },
        { id: 'v580', lesson: "Bài 9", type: "new", vn: "Bàn trà", kr: "다정자", note: "" },
        { id: 'v581', lesson: "Bài 9", type: "new", vn: "Sở cảnh sát", kr: "경찰서", note: "" },
        { id: 'v582', lesson: "Bài 9", type: "new", vn: "Tiệm giặt ủi", kr: "세탁소", note: "" },
        { id: 'v583', lesson: "Bài 9", type: "new", vn: "Viện bảo tàng", kr: "박물관", note: "" },
        { id: 'v584', lesson: "Bài 9", type: "new", vn: "Siêu thị nhỏ", kr: "슈퍼마켓", note: "" },
        { id: 'v585', lesson: "Bài 9", type: "new", vn: "Trạm xăng", kr: "주유소", note: "" },
        { id: 'v586', lesson: "Bài 9", type: "new", vn: "Trạm xe buýt", kr: "버스 정류장", note: "" },
        { id: 'v587', lesson: "Bài 9", type: "new", vn: "Ga tàu điện ngầm", kr: "지하철역", note: "" },
        { id: 'v588', lesson: "Bài 9", type: "new", vn: "Tiệm bánh", kr: "빵집", note: "" },
        { id: 'v589', lesson: "Bài 9", type: "new", vn: "Tiệm bán hoa", kr: "꽃집", note: "" },
        { id: 'v590', lesson: "Bài 9", type: "new", vn: "Tiệm cắt tóc nam", kr: "이발소", note: "" },
        { id: 'v591', lesson: "Bài 9", type: "new", vn: "Tiệm làm tóc nữ", kr: "미용실", note: "" },
        { id: 'v592', lesson: "Bài 9", type: "new", vn: "Hầm, dưới lòng đất", kr: "지하", note: "" },
        { id: 'v593', lesson: "Bài 9", type: "new", vn: "Thân thiện, tử tế", kr: "친절하다", note: "" },
        { id: 'v594', lesson: "Bài 9", type: "new", vn: "Tiện lợi", kr: "편리하다", note: "" },
        { id: 'v595', lesson: "Bài 9", type: "new", vn: "Thoải mái", kr: "편하다", note: "" },
        { id: 'v596', lesson: "Bài 9", type: "new", vn: "Tiền thuê nhà trọ", kr: "하숙비", note: "" },
        { id: 'v597', lesson: "Bài 9", type: "new", vn: "Nhà trọ (Chủ nhà nấu ăn)", kr: "하숙집", note: "" },
        { id: 'v598', lesson: "Bài 9", type: "new", vn: "Nhà trọ (Tự nấu ăn)", kr: "자취 집", note: "" },
        { id: 'v599', lesson: "Bài 9", type: "new", vn: "Một mình", kr: "혼자", note: "" },

        // --- BÀI 10: GIA ĐÌNH VÀ KÍNH NGỮ ---
        { id: 'v600', lesson: "Bài 10", type: "new", vn: "Gia đình", kr: "가족", note: "" },
        { id: 'v601', lesson: "Bài 10", type: "new", vn: "Ông nội", kr: "할아버지", note: "" },
        { id: 'v602', lesson: "Bài 10", type: "new", vn: "Bà nội", kr: "할머니", note: "" },
        { id: 'v603', lesson: "Bài 10", type: "new", vn: "Ông ngoại", kr: "외할아버지", note: "" },
        { id: 'v604', lesson: "Bài 10", type: "new", vn: "Bà ngoại", kr: "외할머니", note: "" },
        { id: 'v605', lesson: "Bài 10", type: "new", vn: "Bố mẹ", kr: "부모님", note: "" },
        { id: 'v606', lesson: "Bài 10", type: "new", vn: "Bố", kr: "아버지/아빠", note: "" },
        { id: 'v607', lesson: "Bài 10", type: "new", vn: "Mẹ", kr: "어머니/엄마", note: "" },
        { id: 'v608', lesson: "Bài 10", type: "new", vn: "Tôi", kr: "저/나", note: "" },
        { id: 'v609', lesson: "Bài 10", type: "new", vn: "Anh trai", kr: "형/오빠", note: "" },
        { id: 'v610', lesson: "Bài 10", type: "new", vn: "Chị gái", kr: "누나/언니", note: "" },
        { id: 'v611', lesson: "Bài 10", type: "new", vn: "Em trai", kr: "남동생", note: "" },
        { id: 'v612', lesson: "Bài 10", type: "new", vn: "Em gái", kr: "여동생", note: "" },
        { id: 'v613', lesson: "Bài 10", type: "new", vn: "Giáo sư", kr: "교수", note: "" },
        { id: 'v614', lesson: "Bài 10", type: "new", vn: "Nhà nghiên cứu", kr: "연구원", note: "" },
        { id: 'v615', lesson: "Bài 10", type: "new", vn: "Bộ đội", kr: "군인", note: "" },
        { id: 'v616', lesson: "Bài 10", type: "new", vn: "Doanh nhân", kr: "사업가", note: "" },
        { id: 'v617', lesson: "Bài 10", type: "new", vn: "Luật sư", kr: "변호사", note: "" },
        { id: 'v618', lesson: "Bài 10", type: "new", vn: "Cảnh sát", kr: "경찰관", note: "" },
        { id: 'v619', lesson: "Bài 10", type: "new", vn: "Người thông dịch", kr: "통역사", note: "" },
        { id: 'v620', lesson: "Bài 10", type: "new", vn: "Nông dân", kr: "농부", note: "" },
        { id: 'v621', lesson: "Bài 10", type: "new", vn: "Kinh doanh", kr: "사업을 하다", note: "" },
        { id: 'v622', lesson: "Bài 10", type: "new", vn: "Buôn bán", kr: "장사를 하다", note: "" },
        { id: 'v623', lesson: "Bài 10", type: "new", vn: "Đi công tác", kr: "출장을 가다", note: "" },
        { id: 'v624', lesson: "Bài 10", type: "new", vn: "Sống", kr: "살다", note: "" },
        { id: 'v625', lesson: "Bài 10", type: "new", vn: "Biết", kr: "알다", note: "" },
        { id: 'v626', lesson: "Bài 10", type: "new", vn: "Không biết", kr: "모르다", note: "" },
        { id: 'v627', lesson: "Bài 10", type: "new", vn: "Cưới hỏi (V)", kr: "결혼하다", note: "" },
        { id: 'v628', lesson: "Bài 10", type: "new", vn: "Lễ cưới", kr: "결혼식", note: "" },
        { id: 'v629', lesson: "Bài 10", type: "new", vn: "Sân bay", kr: "공항", note: "" },
        { id: 'v630', lesson: "Bài 10", type: "new", vn: "Làm việc", kr: "근무하다", note: "" },
        { id: 'v631', lesson: "Bài 10", type: "new", vn: "Gần", kr: "근처", note: "" },
        { id: 'v632', lesson: "Bài 10", type: "new", vn: "Sau này", kr: "나중에", note: "" },
        { id: 'v633', lesson: "Bài 10", type: "new", vn: "Đại gia đình", kr: "대가족", note: "" },
        { id: 'v634', lesson: "Bài 10", type: "new", vn: "Trở thành", kr: "되다", note: "" },
        { id: 'v635', lesson: "Bài 10", type: "new", vn: "Con trai", kr: "아들", note: "" },
        { id: 'v636', lesson: "Bài 10", type: "new", vn: "Con gái", kr: "딸", note: "" },
        { id: 'v637', lesson: "Bài 10", type: "new", vn: "Bác trai", kr: "큰아버지", note: "" },
        { id: 'v638', lesson: "Bài 10", type: "new", vn: "Bác gái", kr: "큰어머니", note: "" },
        { id: 'v639', lesson: "Bài 10", type: "new", vn: "Chú, bác", kr: "삼촌", note: "" },
        { id: 'v640', lesson: "Bài 10", type: "new", vn: "Cô, O", kr: "고모", note: "" },
        { id: 'v641', lesson: "Bài 10", type: "new", vn: "Dượng", kr: "고모부", note: "" },
        { id: 'v642', lesson: "Bài 10", type: "new", vn: "Anh chị em họ", kr: "사촌", note: "" },
        { id: 'v643', lesson: "Bài 10", type: "new", vn: "Con trai duy nhất", kr: "외아들", note: "" },
        { id: 'v644', lesson: "Bài 10", type: "new", vn: "Con gái duy nhất", kr: "외동딸", note: "" },
        { id: 'v645', lesson: "Bài 10", type: "new", vn: "Trẻ mẫu giáo", kr: "유치원생", note: "" },
        { id: 'v646', lesson: "Bài 10", type: "new", vn: "Học sinh tiểu học", kr: "초등학생", note: "" },
        { id: 'v647', lesson: "Bài 10", type: "new", vn: "Học chuyên ngành", kr: "전공하다", note: "" },
        { id: 'v648', lesson: "Bài 10", type: "new", vn: "Một cách chăm chỉ", kr: "열심히", note: "" },
        { id: 'v649', lesson: "Bài 10", type: "new", vn: "Rượu", kr: "술", note: "" },
        
        // --- BÀI 10: TỪ VỰNG KÍNH NGỮ ---
        { id: 'v650', lesson: "Bài 10", type: "new", vn: "Có, ở, đang sống (Kính ngữ của 있다)", kr: "있으시다/계시다", note: "Kính ngữ" },
        { id: 'v651', lesson: "Bài 10", type: "new", vn: "Không có (Kính ngữ của 없다)", kr: "없으시다/안 계시다", note: "Kính ngữ" },
        { id: 'v652', lesson: "Bài 10", type: "new", vn: "Nói (Kính ngữ của 말하다)", kr: "말씀하시다", note: "Kính ngữ" },
        { id: 'v653', lesson: "Bài 10", type: "new", vn: "Ngủ (Kính ngữ của 자다)", kr: "주무시다", note: "Kính ngữ" },
        { id: 'v654', lesson: "Bài 10", type: "new", vn: "Ăn (Kính ngữ của 먹다)", kr: "드시다/잡수시다", note: "Kính ngữ" },
        { id: 'v655', lesson: "Bài 10", type: "new", vn: "Chết, qua đời (Kính ngữ của 죽다)", kr: "돌아가시다", note: "Kính ngữ" },
        { id: 'v656', lesson: "Bài 10", type: "new", vn: "Sinh nhật, ngày sinh (Kính ngữ của 생일)", kr: "생신", note: "Kính ngữ" },
        { id: 'v657', lesson: "Bài 10", type: "new", vn: "Cơm (Kính ngữ của 밥)", kr: "진지", note: "Kính ngữ" },
        { id: 'v658', lesson: "Bài 10", type: "new", vn: "Tên, quý danh (Kính ngữ của 이름)", kr: "성함", note: "Kính ngữ" },
        { id: 'v659', lesson: "Bài 10", type: "new", vn: "Tuổi (Kính ngữ của 나이)", kr: "연세", note: "Kính ngữ" },
        { id: 'v660', lesson: "Bài 10", type: "new", vn: "Lời nói (Kính ngữ của 말)", kr: "말씀", note: "Kính ngữ" },
        { id: 'v661', lesson: "Bài 10", type: "new", vn: "Người, vị (Kính ngữ của 사람/명) 👤", kr: "분", note: "Kính ngữ" },
        { id: 'v662', lesson: "Bài 10", type: "new", vn: "Gặp gỡ (Kính ngữ của 만나다)", kr: "만나시다/뵙다", note: "Kính ngữ" },
        { id: 'v663', lesson: "Bài 10", type: "new", vn: "Cho, biếu, tặng (Kính ngữ của 주다)", kr: "주시다/드리다", note: "Kính ngữ" },
        { id: 'v664', lesson: "Bài 10", type: "new", vn: "Hỏi (Kính ngữ của 묻다)", kr: "여쭈다", note: "Kính ngữ" },
        { id: 'v665', lesson: "Bài 10", type: "new", vn: "Nhà (Kính ngữ của 집)", kr: "댁", note: "Kính ngữ" },
        { id: 'v666', lesson: "Bài 10", type: "new", vn: "Đau, ốm (Kính ngữ của 아프다)", kr: "편찮으시다", note: "Kính ngữ" },
        { id: 'v667', lesson: "Bài 10", type: "new", vn: "Mang đi, dẫn đi (Kính ngữ của 데려가다)", kr: "모셔가다", note: "Kính ngữ" },
        { id: 'v668', lesson: "Bài 10", type: "new", vn: "Chồng (của người khác)", kr: "부군", note: "Kính ngữ" },
        { id: 'v669', lesson: "Bài 10", type: "new", vn: "Vợ (của người khác)", kr: "부인", note: "Kính ngữ" },
        { id: 'v670', lesson: "Bài 10", type: "new", vn: "Đọc (Kính ngữ của 읽다)", kr: "읽으시다", note: "Kính ngữ" },
        { id: 'v671', lesson: "Bài 10", type: "new", vn: "Thích (Kính ngữ của 좋아하다)", kr: "좋아하시다", note: "Kính ngữ" },
        { id: 'v672', lesson: "Bài 10", type: "new", vn: "Đi (Kính ngữ của 가다)", kr: "가시다", note: "Kính ngữ" },
        { id: 'v673', lesson: "Bài 10", type: "new", vn: "Xem, nhìn (Kính ngữ của 보다)", kr: "보시다", note: "Kính ngữ" },
        { id: 'v674', lesson: "Bài 10", type: "new", vn: "Sống (Kính ngữ của 살다)", kr: "사시다", note: "Kính ngữ" },
		// =========================================================
        // 📚 KHO TỪ VỰNG PHẦN 3: BÀI 11 -> BÀI 15 & BỔ SUNG BÀI 7
        // =========================================================

        // --- BỔ SUNG BÀI 7: CÂU GIAO TIẾP MUA SẮM ---
        { id: 'p701', lesson: "Bài 7", type: "practice", vn: "Xin chào. Xin mời vào.", kr: "안녕하세요? 어서 오세요.", note: "Giao tiếp" },
        { id: 'p702', lesson: "Bài 7", type: "practice", vn: "Quý khách tìm gì ạ?", kr: "무얼 찾으세요?", note: "Giao tiếp" },
        { id: 'p703', lesson: "Bài 7", type: "practice", vn: "Cái mũ này thế nào ạ?", kr: "이 모자가 어때요?", note: "Giao tiếp" },
        { id: 'p704', lesson: "Bài 7", type: "practice", vn: "Cái này giá bao nhiêu ạ?", kr: "이거 얼마예요?", note: "Giao tiếp" },
        { id: 'p705', lesson: "Bài 7", type: "practice", vn: "Cho tôi 4 cái này.", kr: "이거 네 개 주세요.", note: "Giao tiếp" },
        { id: 'p706', lesson: "Bài 7", type: "practice", vn: "Đắt quá.", kr: "너무 비싸요.", note: "Giao tiếp" },
        { id: 'p707', lesson: "Bài 7", type: "practice", vn: "Bớt cho tôi đi cô (chú, anh, chị,...)", kr: "깎아 주세요.", note: "Giao tiếp" },
        { id: 'p708', lesson: "Bài 7", type: "practice", vn: "Bán rẻ cho tôi đi cô (chú, anh, chị,...)", kr: "싸게 해 주세요.", note: "Giao tiếp" },
        { id: 'p709', lesson: "Bài 7", type: "practice", vn: "Tôi lấy 8.500 won thôi.", kr: "8,500 원에 드릴게요.", note: "Giao tiếp" },
        { id: 'p710', lesson: "Bài 7", type: "practice", vn: "Mời quý khách lần sau lại đến ạ.", kr: "다음에 또 오세요.", note: "Giao tiếp" },

        // --- BÀI 11: THỜI TIẾT ---
        { id: 'v1101', lesson: "Bài 11", type: "new", vn: "Mùa", kr: "계절", note: "" },
        { id: 'v1102', lesson: "Bài 11", type: "new", vn: "Mùa xuân", kr: "봄", note: "" },
        { id: 'v1103', lesson: "Bài 11", type: "new", vn: "Mùa hạ", kr: "여름", note: "" },
        { id: 'v1104', lesson: "Bài 11", type: "new", vn: "Mùa thu", kr: "가을", note: "" },
        { id: 'v1105', lesson: "Bài 11", type: "new", vn: "Mùa đông", kr: "겨울", note: "" },
        { id: 'v1106', lesson: "Bài 11", type: "new", vn: "Thời tiết", kr: "날씨", note: "" },
        { id: 'v1107', lesson: "Bài 11", type: "new", vn: "Ấm áp", kr: "따뜻하다", note: "" },
        { id: 'v1108', lesson: "Bài 11", type: "new", vn: "Nóng", kr: "덥다", note: "" },
        { id: 'v1109', lesson: "Bài 11", type: "new", vn: "Se lạnh", kr: "쌀쌀하다", note: "" },
        { id: 'v1110', lesson: "Bài 11", type: "new", vn: "Lạnh", kr: "춥다", note: "" },
        { id: 'v1111', lesson: "Bài 11", type: "new", vn: "Trời mưa", kr: "비가 오다/내리다", note: "" },
        { id: 'v1112', lesson: "Bài 11", type: "new", vn: "Mưa tạnh", kr: "비가그치다", note: "" },
        { id: 'v1113', lesson: "Bài 11", type: "new", vn: "Tuyết rơi", kr: "눈이 오다/내리다", note: "" },
        { id: 'v1114', lesson: "Bài 11", type: "new", vn: "Tuyết ngừng rơi", kr: "눈이 그치다", note: "" },
        { id: 'v1115', lesson: "Bài 11", type: "new", vn: "Trong xanh", kr: "맑다", note: "" },
        { id: 'v1116', lesson: "Bài 11", type: "new", vn: "Âm u", kr: "흐리다", note: "" },
        { id: 'v1117', lesson: "Bài 11", type: "new", vn: "Gió thổi", kr: "바람이 불다", note: "" },
        { id: 'v1118', lesson: "Bài 11", type: "new", vn: "Nhiều mây", kr: "구름이 끼다", note: "" },
        { id: 'v1119', lesson: "Bài 11", type: "new", vn: "Mặt trời", kr: "해/태양", note: "" },
        { id: 'v1120', lesson: "Bài 11", type: "new", vn: "Mưa", kr: "비", note: "" },
        { id: 'v1121', lesson: "Bài 11", type: "new", vn: "Tuyết", kr: "눈", note: "" },
        { id: 'v1122', lesson: "Bài 11", type: "new", vn: "Mây", kr: "구름", note: "" },
        { id: 'v1123', lesson: "Bài 11", type: "new", vn: "Nhiệt độ", kr: "온도", note: "" },
        { id: 'v1124', lesson: "Bài 11", type: "new", vn: "Nhiệt độ không khí", kr: "기온", note: "" },
        { id: 'v1125', lesson: "Bài 11", type: "new", vn: "Độ °C", kr: "도", note: "" },
        { id: 'v1126', lesson: "Bài 11", type: "new", vn: "Ồn ào, ầm ĩ", kr: "시끄럽다", note: "" },
        { id: 'v1127', lesson: "Bài 11", type: "new", vn: "Đẹp", kr: "아름답다", note: "" },
        { id: 'v1128', lesson: "Bài 11", type: "new", vn: "Cái ô, cái dù", kr: "우산", note: "" },
        { id: 'v1129', lesson: "Bài 11", type: "new", vn: "Kỷ niệm, ký ức", kr: "추억", note: "" },
        { id: 'v1130', lesson: "Bài 11", type: "new", vn: "Hồ", kr: "호수", note: "" },
        { id: 'v1131', lesson: "Bài 11", type: "new", vn: "Độ dương", kr: "영상", note: "" },
        { id: 'v1132', lesson: "Bài 11", type: "new", vn: "Độ âm", kr: "영하", note: "" },
        { id: 'v1133', lesson: "Bài 11", type: "new", vn: "Giúp đỡ", kr: "돕다", note: "" },
        { id: 'v1134', lesson: "Bài 11", type: "new", vn: "Giúp đỡ cho", kr: "도와주다", note: "" },
        { id: 'v1135', lesson: "Bài 11", type: "new", vn: "Đẹp, xinh xắn", kr: "곱다", note: "" },
        { id: 'v1136', lesson: "Bài 11", type: "new", vn: "Bắt", kr: "잡다", note: "" },
        { id: 'v1137', lesson: "Bài 11", type: "new", vn: "Nhai", kr: "씹다", note: "" },
        { id: 'v1138', lesson: "Bài 11", type: "new", vn: "Nhặt", kr: "줍다", note: "" },
        { id: 'v1139', lesson: "Bài 11", type: "new", vn: "Mặc", kr: "입다", note: "" },
        { id: 'v1140', lesson: "Bài 11", type: "new", vn: "Chật, hẹp", kr: "좁다", note: "" },
        { id: 'v1141', lesson: "Bài 11", type: "new", vn: "Nhất", kr: "가장", note: "" },
        { id: 'v1142', lesson: "Bài 11", type: "new", vn: "Áo dài tay", kr: "긴팔 옷", note: "" },
        { id: 'v1143', lesson: "Bài 11", type: "new", vn: "Áo cộc tay", kr: "반팔 옷", note: "" },
        { id: 'v1144', lesson: "Bài 11", type: "new", vn: "Quần soóc", kr: "반바지", note: "" },
        { id: 'v1145', lesson: "Bài 11", type: "new", vn: "Bốt, giày ủng", kr: "부츠", note: "" },
        { id: 'v1146', lesson: "Bài 11", type: "new", vn: "Khăn quàng cổ", kr: "목도리", note: "" },
        { id: 'v1147', lesson: "Bài 11", type: "new", vn: "Găng tay, bao tay", kr: "장갑", note: "" },
        { id: 'v1148', lesson: "Bài 11", type: "new", vn: "Sạch sẽ", kr: "깨끗하다", note: "" },
        { id: 'v1149', lesson: "Bài 11", type: "new", vn: "Màu vàng", kr: "노란색", note: "" },
        { id: 'v1150', lesson: "Bài 11", type: "new", vn: "Lá phong", kr: "단풍", note: "" },
        { id: 'v1151', lesson: "Bài 11", type: "new", vn: "Thư hồi âm", kr: "답장", note: "" },
        { id: 'v1152', lesson: "Bài 11", type: "new", vn: "Tương tự, giống", kr: "비슷하다", note: "" },
        { id: 'v1153', lesson: "Bài 11", type: "new", vn: "Ván trượt tuyết", kr: "스노보드", note: "" },
        { id: 'v1154', lesson: "Bài 11", type: "new", vn: "Trượt tuyết", kr: "스키", note: "" },
        { id: 'v1155', lesson: "Bài 11", type: "new", vn: "Sân trượt tuyết", kr: "스키장", note: "" },
        { id: 'v1156', lesson: "Bài 11", type: "new", vn: "Cần thiết", kr: "필요하다", note: "" },
        { id: 'v1157', lesson: "Bài 11", type: "new", vn: "Trời, bầu trời", kr: "하늘", note: "" },
        { id: 'v1158', lesson: "Bài 11", type: "new", vn: "Tuyết trắng", kr: "하얀 눈", note: "" },

        // --- BÀI 12: ĐIỆN THOẠI ---
        { id: 'v1201', lesson: "Bài 12", type: "new", vn: "Điện thoại", kr: "전화", note: "" },
        { id: 'v1202', lesson: "Bài 12", type: "new", vn: "Công cộng", kr: "공중", note: "" },
        { id: 'v1203', lesson: "Bài 12", type: "new", vn: "Điện thoại công cộng", kr: "공중전화", note: "" },
        { id: 'v1204', lesson: "Bài 12", type: "new", vn: "Điện thoại cầm tay", kr: "휴대", note: "" },
        { id: 'v1205', lesson: "Bài 12", type: "new", vn: "Điện thoại di động", kr: "휴대전화", note: "" },
        { id: 'v1206', lesson: "Bài 12", type: "new", vn: "Điện thoại thông minh", kr: "스마트폰", note: "" },
        { id: 'v1207', lesson: "Bài 12", type: "new", vn: "Số điện thoại", kr: "전화번호", note: "" },
        { id: 'v1208', lesson: "Bài 12", type: "new", vn: "Địa chỉ liên lạc", kr: "연락처", note: "" },
        { id: 'v1209', lesson: "Bài 12", type: "new", vn: "Cước phí điện thoại", kr: "전화 요금", note: "" },
        { id: 'v1210', lesson: "Bài 12", type: "new", vn: "Thẻ điện thoại", kr: "전화 카드", note: "" },
        { id: 'v1211', lesson: "Bài 12", type: "new", vn: "Điện thoại trong nước", kr: "국내 전화", note: "" },
        { id: 'v1212', lesson: "Bài 12", type: "new", vn: "Điện thoại quốc tế", kr: "국제 전화", note: "" },
        { id: 'v1213', lesson: "Bài 12", type: "new", vn: "Người nhận trả tiền", kr: "수신자부담", note: "" },
        { id: 'v1214', lesson: "Bài 12", type: "new", vn: "Điện thoại internet", kr: "인터넷전화", note: "" },
        { id: 'v1215', lesson: "Bài 12", type: "new", vn: "Mã vùng quốc gia", kr: "국가 번호", note: "" },
        { id: 'v1216', lesson: "Bài 12", type: "new", vn: "Mã vùng khu vực", kr: "지역 번호", note: "" },
        { id: 'v1217', lesson: "Bài 12", type: "new", vn: "Gọi điện thoại", kr: "전화를 걸다/하다", note: "" },
        { id: 'v1218', lesson: "Bài 12", type: "new", vn: "Cuộc gọi đến", kr: "전화가 오다", note: "" },
        { id: 'v1219', lesson: "Bài 12", type: "new", vn: "Nhận điện thoại", kr: "전화를 받다", note: "" },
        { id: 'v1220', lesson: "Bài 12", type: "new", vn: "Kết thúc cuộc gọi", kr: "전화를 끊다", note: "" },
        { id: 'v1221', lesson: "Bài 12", type: "new", vn: "Gửi tin nhắn", kr: "문자메시지를 보내다", note: "" },
        { id: 'v1222', lesson: "Bài 12", type: "new", vn: "Gửi tin trả lời", kr: "답장을 보내다", note: "" },
        { id: 'v1223', lesson: "Bài 12", type: "new", vn: "Nhận tin nhắn", kr: "문자메시지를 받다", note: "" },
        { id: 'v1224', lesson: "Bài 12", type: "new", vn: "Tra cứu, tìm kiếm", kr: "검색하다", note: "" },
        { id: 'v1225', lesson: "Bài 12", type: "new", vn: "Vị ấy, ngài ấy", kr: "그분", note: "" },
        { id: 'v1226', lesson: "Bài 12", type: "new", vn: "Đánh thức", kr: "깨우다", note: "" },
        { id: 'v1227', lesson: "Bài 12", type: "new", vn: "Để lại, còn lại", kr: "남기다", note: "" },
        { id: 'v1228', lesson: "Bài 12", type: "new", vn: "Đưa ra", kr: "내다", note: "" },
        { id: 'v1229', lesson: "Bài 12", type: "new", vn: "Tin tức", kr: "뉴스", note: "" },
        { id: 'v1230', lesson: "Bài 12", type: "new", vn: "Muộn, trễ", kr: "늦게", note: "" },
        { id: 'v1231', lesson: "Bài 12", type: "new", vn: "Đại sứ quán", kr: "대사관", note: "" },
        { id: 'v1232', lesson: "Bài 12", type: "new", vn: "Đi vào", kr: "들어오다", note: "" },
        { id: 'v1233', lesson: "Bài 12", type: "new", vn: "Đúng", kr: "맞다", note: "" },
        { id: 'v1234', lesson: "Bài 12", type: "new", vn: "Giám đốc", kr: "사장님", note: "" },
        { id: 'v1235', lesson: "Bài 12", type: "new", vn: "Từ điển", kr: "사전", note: "" },
        { id: 'v1236', lesson: "Bài 12", type: "new", vn: "Chuyển máy", kr: "전화를 바꾸다", note: "" },
        { id: 'v1237', lesson: "Bài 12", type: "new", vn: "Âm thanh", kr: "소리", note: "" },
        { id: 'v1238', lesson: "Bài 12", type: "new", vn: "Cuộc hẹn", kr: "약속", note: "" },
        { id: 'v1239', lesson: "Bài 12", type: "new", vn: "Bao nhiêu, bao lâu", kr: "얼마나", note: "" },
        { id: 'v1240', lesson: "Bài 12", type: "new", vn: "Lịch sử", kr: "역사", note: "" },
        { id: 'v1241', lesson: "Bài 12", type: "new", vn: "Quyết định", kr: "정하다", note: "" },
        { id: 'v1242', lesson: "Bài 12", type: "new", vn: "Hành lý", kr: "짐", note: "" },
        { id: 'v1243', lesson: "Bài 12", type: "new", vn: "Xuất phát", kr: "출발하다", note: "" },
        { id: 'v1244', lesson: "Bài 12", type: "new", vn: "Thưa, báo cáo", kr: "말씀 드리다", note: "Kính ngữ" },
        { id: 'v1245', lesson: "Bài 12", type: "new", vn: "Điện thoại bận", kr: "통화 중이다", note: "" },
        { id: 'v1246', lesson: "Bài 12", type: "new", vn: "Nhận tin trả lời", kr: "답장을 받다", note: "" },
        // Câu giao tiếp Bài 12
        { id: 'p1201', lesson: "Bài 12", type: "practice", vn: "A lô?", kr: "여보세요?", note: "Giao tiếp" },
        { id: 'p1202', lesson: "Bài 12", type: "practice", vn: "Bên đó có phải là ( ) không ạ?", kr: "거기()지요?", note: "Giao tiếp" },
        { id: 'p1203', lesson: "Bài 12", type: "practice", vn: "Có () ở đấy không?", kr: "()계세요?", note: "Giao tiếp" },
        { id: 'p1204', lesson: "Bài 12", type: "practice", vn: "Rồi sao ạ?", kr: "그런데요?", note: "Giao tiếp" },
        { id: 'p1205', lesson: "Bài 12", type: "practice", vn: "Xin lỗi, ai đấy ạ?", kr: "실례지만 누구세요?", note: "Giao tiếp" },
        { id: 'p1206', lesson: "Bài 12", type: "practice", vn: "Bây giờ không có ở đây?", kr: "지금 없는데요.", note: "Giao tiếp" },
        { id: 'p1207', lesson: "Bài 12", type: "practice", vn: "Có thể chuyển máy cho ( ) không ạ?", kr: "바꿔 주시겠어요?", note: "Giao tiếp" },
        { id: 'p1208', lesson: "Bài 12", type: "practice", vn: "Đi ra ngoài một lúc rồi.", kr: "잠깐 외출하셨는데요.", note: "Giao tiếp" },
        { id: 'p1209', lesson: "Bài 12", type: "practice", vn: "Xin hãy chuyển hộ lời nhắn.", kr: "메모 좀 전해 주세요.", note: "Giao tiếp" },
        { id: 'p1210', lesson: "Bài 12", type: "practice", vn: "Xin hãy chuyển lời giúp.", kr: "말씀 좀 전해 주세요.", note: "Giao tiếp" },
        { id: 'p1211', lesson: "Bài 12", type: "practice", vn: "Tôi sẽ chuyển lời nhắn.", kr: "메모전해 드리겠습니다.", note: "Giao tiếp" },
        { id: 'p1212', lesson: "Bài 12", type: "practice", vn: "Tôi sẽ chuyển lời.", kr: "말씀전해 드리겠습니다.", note: "Giao tiếp" },
        { id: 'p1213', lesson: "Bài 12", type: "practice", vn: "Sẽ gọi lại sau.", kr: "다시 전화하겠습니다.", note: "Giao tiếp" },
        { id: 'p1214', lesson: "Bài 12", type: "practice", vn: "Tôi sẽ nhắn lại là ai gọi đến ạ?", kr: "누구라고 전해 드릴까요?", note: "Giao tiếp" },
        { id: 'p1215', lesson: "Bài 12", type: "practice", vn: "Có thể cho tôi biết số đt được không?", kr: "휴대전화 번호 좀 알려주시겠습니까?", note: "Giao tiếp" },
        { id: 'p1216', lesson: "Bài 12", type: "practice", vn: "Xin hãy gọi vào điện thoại cầm tay.", kr: "휴대전화로 해 주십시오.", note: "Giao tiếp" },

        // --- BÀI 13: SINH NHẬT ---
        { id: 'v1301', lesson: "Bài 13", type: "new", vn: "Sinh nhật", kr: "생일", note: "" },
        { id: 'v1302', lesson: "Bài 13", type: "new", vn: "Sinh nhật (kính ngữ)", kr: "생신", note: "Kính ngữ" },
        { id: 'v1303', lesson: "Bài 13", type: "new", vn: "Bánh kem", kr: "케이크", note: "" },
        { id: 'v1304', lesson: "Bài 13", type: "new", vn: "Thiệp", kr: "카드", note: "" },
        { id: 'v1305', lesson: "Bài 13", type: "new", vn: "Bài hát chúc mừng", kr: "축하 노래", note: "" },
        { id: 'v1306', lesson: "Bài 13", type: "new", vn: "Tiệc", kr: "잔치/파티", note: "" },
        { id: 'v1307', lesson: "Bài 13", type: "new", vn: "Mời", kr: "초대하다", note: "" },
        { id: 'v1308', lesson: "Bài 13", type: "new", vn: "Tổ chức sinh nhật", kr: "생일 파티를하다", note: "" },
        { id: 'v1309', lesson: "Bài 13", type: "new", vn: "Thêm 1 tuổi", kr: "한살을 먹다", note: "" },
        { id: 'v1310', lesson: "Bài 13", type: "new", vn: "Nấu canh rong biển cho", kr: "미역국을 만들어 주다", note: "" },
        { id: 'v1311', lesson: "Bài 13", type: "new", vn: "Quà sinh nhật", kr: "생일 선물", note: "" },
        { id: 'v1312', lesson: "Bài 13", type: "new", vn: "Cái ví", kr: "지갑", note: "" },
        { id: 'v1313', lesson: "Bài 13", type: "new", vn: "Mỹ phẩm", kr: "화장품", note: "" },
        { id: 'v1314', lesson: "Bài 13", type: "new", vn: "Khăn tay", kr: "손수건", note: "" },
        { id: 'v1315', lesson: "Bài 13", type: "new", vn: "Cà vạt", kr: "넥타이", note: "" },
        { id: 'v1316', lesson: "Bài 13", type: "new", vn: "Hoa tai", kr: "귀걸이", note: "" },
        { id: 'v1317', lesson: "Bài 13", type: "new", vn: "Dây chuyền", kr: "목걸이", note: "" },
        { id: 'v1318', lesson: "Bài 13", type: "new", vn: "Nhẫn", kr: "반지", note: "" },
        { id: 'v1319', lesson: "Bài 13", type: "new", vn: "Bó hoa", kr: "꽃다발", note: "" },
        { id: 'v1320', lesson: "Bài 13", type: "new", vn: "Tặng quà", kr: "선물을 주다", note: "" },
        { id: 'v1321', lesson: "Bài 13", type: "new", vn: "Kính tặng quà", kr: "선물을 드리다", note: "Kính ngữ" },
        { id: 'v1322', lesson: "Bài 13", type: "new", vn: "Nhận quà", kr: "선물을 받다", note: "" },
        { id: 'v1323', lesson: "Bài 13", type: "new", vn: "Chọn quà", kr: "선물을 고르다", note: "" },
        { id: 'v1324', lesson: "Bài 13", type: "new", vn: "Nhẹ", kr: "가볍다", note: "" },
        { id: 'v1325', lesson: "Bài 13", type: "new", vn: "Nặng", kr: "무겁다", note: "" },
        { id: 'v1326', lesson: "Bài 13", type: "new", vn: "Dài", kr: "길다", note: "" },
        { id: 'v1327', lesson: "Bài 13", type: "new", vn: "Ngắn", kr: "짧다", note: "" },
        { id: 'v1328', lesson: "Bài 13", type: "new", vn: "Nhất định", kr: "꼭", note: "" },
        { id: 'v1329', lesson: "Bài 13", type: "new", vn: "Xong, hoàn tất", kr: "끝나다", note: "" },
        { id: 'v1330', lesson: "Bài 13", type: "new", vn: "Trở thành", kr: "되다", note: "" },
        { id: 'v1331', lesson: "Bài 13", type: "new", vn: "Nhà hàng", kr: "레스토랑", note: "" },
        { id: 'v1332', lesson: "Bài 13", type: "new", vn: "Trước", kr: "먼저", note: "" },
        { id: 'v1333', lesson: "Bài 13", type: "new", vn: "Lần", kr: "번째", note: "" },
        { id: 'v1334', lesson: "Bài 13", type: "new", vn: "Gọi, hát", kr: "부르다", note: "" },
        { id: 'v1335', lesson: "Bài 13", type: "new", vn: "Bất tiện", kr: "불편하다", note: "" },
        { id: 'v1336', lesson: "Bài 13", type: "new", vn: "Sinh hoạt", kr: "생활", note: "" },
        { id: 'v1337', lesson: "Bài 13", type: "new", vn: "Áo len", kr: "스웨터", note: "" },
        { id: 'v1338', lesson: "Bài 13", type: "new", vn: "Món mì ý", kr: "스파게티", note: "" },
        { id: 'v1339', lesson: "Bài 13", type: "new", vn: "Tòa thị chính", kr: "시청", note: "" },
        { id: 'v1340', lesson: "Bài 13", type: "new", vn: "Lâu ngày không gặp", kr: "오래간만", note: "" },
        { id: 'v1341', lesson: "Bài 13", type: "new", vn: "Cười", kr: "웃다", note: "" },
        { id: 'v1342', lesson: "Bài 13", type: "new", vn: "Italy, Ý", kr: "이탈리아", note: "" },
        { id: 'v1343', lesson: "Bài 13", type: "new", vn: "Hoa hồng", kr: "장미", note: "" },
        { id: 'v1344', lesson: "Bài 13", type: "new", vn: "Rất", kr: "참", note: "" },
        { id: 'v1345', lesson: "Bài 13", type: "new", vn: "Đầu tiên, thứ nhất 1️⃣", kr: "첫", note: "" },
        { id: 'v1346', lesson: "Bài 13", type: "new", vn: "Nhà hàng Hàn Quốc", kr: "한식당", note: "" },
        { id: 'v1347', lesson: "Bài 13", type: "new", vn: "Hạnh phúc", kr: "행복하다", note: "" },
        { id: 'v1348', lesson: "Bài 13", type: "new", vn: "Nước hoa", kr: "향수", note: "" },
        { id: 'v1349', lesson: "Bài 13", type: "new", vn: "Trang điểm", kr: "화장하다", note: "" },
        { id: 'v1350', lesson: "Bài 13", type: "new", vn: "Tiệc mừng thọ 60 tuổi", kr: "환갑", note: "" },

        // --- BÀI 14: SỞ THÍCH ---
        { id: 'v1401', lesson: "Bài 14", type: "new", vn: "Môn thể thao", kr: "운동", note: "" },
        { id: 'v1402', lesson: "Bài 14", type: "new", vn: "Bóng đá (N)", kr: "축구", note: "" },
        { id: 'v1403', lesson: "Bài 14", type: "new", vn: "Bóng rổ (N)", kr: "농구", note: "" },
        { id: 'v1404', lesson: "Bài 14", type: "new", vn: "Bóng chuyền (N)", kr: "배구", note: "" },
        { id: 'v1405', lesson: "Bài 14", type: "new", vn: "Bóng chày (N)", kr: "야구", note: "" },
        { id: 'v1406', lesson: "Bài 14", type: "new", vn: "Bóng chuyền bằng chân", kr: "족구", note: "" },
        { id: 'v1407', lesson: "Bài 14", type: "new", vn: "Bóng bàn (N)", kr: "탁구", note: "" },
        { id: 'v1408', lesson: "Bài 14", type: "new", vn: "Cầu lông (N)", kr: "배드민턴", note: "" },
        { id: 'v1409', lesson: "Bài 14", type: "new", vn: "Tenis (N)", kr: "테니스", note: "" },
        { id: 'v1410', lesson: "Bài 14", type: "new", vn: "Taewondo", kr: "태권도", note: "" },
        { id: 'v1411', lesson: "Bài 14", type: "new", vn: "Gôn", kr: "골프", note: "" },
        { id: 'v1412', lesson: "Bài 14", type: "new", vn: "Trượt tuyết (N)", kr: "스키", note: "" },
        { id: 'v1413', lesson: "Bài 14", type: "new", vn: "Yoga", kr: "요가", note: "" },
        { id: 'v1414', lesson: "Bài 14", type: "new", vn: "Chạy maraton (N)", kr: "마라톤", note: "" },
        { id: 'v1415', lesson: "Bài 14", type: "new", vn: "Trượt băng (N)", kr: "스케이트", note: "" },
        { id: 'v1416', lesson: "Bài 14", type: "new", vn: "Bowling", kr: "볼링", note: "" },
        { id: 'v1417', lesson: "Bài 14", type: "new", vn: "Chạy bộ (N)", kr: "조깅", note: "" },
        { id: 'v1418', lesson: "Bài 14", type: "new", vn: "Bơi lội (N)", kr: "수영", note: "" },
        { id: 'v1419', lesson: "Bài 14", type: "new", vn: "Sở thích", kr: "취미", note: "" },
        { id: 'v1420', lesson: "Bài 14", type: "new", vn: "Đọc sách (N)", kr: "책 읽기/독서", note: "" },
        { id: 'v1421', lesson: "Bài 14", type: "new", vn: "Chụp ảnh (N)", kr: "사진 찍기", note: "" },
        { id: 'v1422', lesson: "Bài 14", type: "new", vn: "Vẽ tranh (N)", kr: "그림 그리기", note: "" },
        { id: 'v1423', lesson: "Bài 14", type: "new", vn: "Nghe nhạc (N)", kr: "음악 감상(하기)", note: "" },
        { id: 'v1424', lesson: "Bài 14", type: "new", vn: "Đi du lịch (N)", kr: "여행(하기)", note: "" },
        { id: 'v1425', lesson: "Bài 14", type: "new", vn: "Tập thể thao (N)", kr: "운동(하기)", note: "" },
        { id: 'v1426', lesson: "Bài 14", type: "new", vn: "Sức khỏe", kr: "건강", note: "" },
        { id: 'v1427', lesson: "Bài 14", type: "new", vn: "Trận đấu", kr: "경기", note: "" },
        { id: 'v1428', lesson: "Bài 14", type: "new", vn: "Cảnh trí", kr: "경치", note: "" },
        { id: 'v1429', lesson: "Bài 14", type: "new", vn: "Trường THPT", kr: "고등학교", note: "" },
        { id: 'v1430', lesson: "Bài 14", type: "new", vn: "Cơ sở, cơ bản", kr: "기초", note: "" },
        { id: 'v1431', lesson: "Bài 14", type: "new", vn: "Cơm hộp", kr: "도시락", note: "" },
        { id: 'v1432', lesson: "Bài 14", type: "new", vn: "Câu lạc bộ", kr: "동아리", note: "" },
        { id: 'v1433', lesson: "Bài 14", type: "new", vn: "Máy ảnh kĩ thuật số", kr: "디지털 카메라", note: "" },
        { id: 'v1434', lesson: "Bài 14", type: "new", vn: "Truyện tranh", kr: "만화책", note: "" },
        { id: 'v1435', lesson: "Bài 14", type: "new", vn: "Xem phim (N)", kr: "영화 보기", note: "" },
        { id: 'v1436', lesson: "Bài 14", type: "new", vn: "Sưu tập tem (N)", kr: "우표 수집/우표 모으기", note: "" },
        { id: 'v1437', lesson: "Bài 14", type: "new", vn: "Chơi trò chơi điện tử", kr: "컴퓨터 게임(하기)", note: "" },
        { id: 'v1438', lesson: "Bài 14", type: "new", vn: "Tần suất", kr: "빈도", note: "" },
        { id: 'v1439', lesson: "Bài 14", type: "new", vn: "Luôn luôn", kr: "항상/언제나/늘", note: "" },
        { id: 'v1440', lesson: "Bài 14", type: "new", vn: "Thường xuyên", kr: "자주", note: "" },
        { id: 'v1441', lesson: "Bài 14", type: "new", vn: "Thỉnh thoảng", kr: "가끔", note: "" },
        { id: 'v1442', lesson: "Bài 14", type: "new", vn: "Hầu như không", kr: "거의 안", note: "" },
        { id: 'v1443', lesson: "Bài 14", type: "new", vn: "Hoàn toàn", kr: "전혀", note: "" },
        { id: 'v1444', lesson: "Bài 14", type: "new", vn: "Năng lực, khả năng", kr: "능력", note: "" },
        { id: 'v1445', lesson: "Bài 14", type: "new", vn: "Làm tốt", kr: "잘하다", note: "" },
        { id: 'v1446', lesson: "Bài 14", type: "new", vn: "Bình thường", kr: "보통이다", note: "" },
        { id: 'v1447', lesson: "Bài 14", type: "new", vn: "Không thể làm được", kr: "못하다", note: "" },
        { id: 'v1448', lesson: "Bài 14", type: "new", vn: "Làm được một chút", kr: "조금 하다", note: "" },
        { id: 'v1449', lesson: "Bài 14", type: "new", vn: "Đóng", kr: "닫다", note: "" },
        { id: 'v1450', lesson: "Bài 14", type: "new", vn: "Tin tưởng", kr: "믿다", note: "" },
        { id: 'v1451', lesson: "Bài 14", type: "new", vn: "Giành được", kr: "얻다", note: "" },
        { id: 'v1452', lesson: "Bài 14", type: "new", vn: "Nhận, nhận được", kr: "받다", note: "" },
        { id: 'v1453', lesson: "Bài 14", type: "new", vn: "Đi bộ", kr: "걷다", note: "" },
        { id: 'v1454', lesson: "Bài 14", type: "new", vn: "Chôn", kr: "묻다", note: "" },
        { id: 'v1455', lesson: "Bài 14", type: "new", vn: "Hỏi", kr: "묻다", note: "" },
        { id: 'v1456', lesson: "Bài 14", type: "new", vn: "Mỗi sáng", kr: "아침마다", note: "" },
        { id: 'v1457', lesson: "Bài 14", type: "new", vn: "Ca khúc", kr: "가곡", note: "" },
        { id: 'v1458', lesson: "Bài 14", type: "new", vn: "Dân ca", kr: "가요", note: "" },
        { id: 'v1459', lesson: "Bài 14", type: "new", vn: "Lo lắng", kr: "걱정하다", note: "" },
        { id: 'v1460', lesson: "Bài 14", type: "new", vn: "Phụ đề", kr: "자막", note: "" },
        { id: 'v1461', lesson: "Bài 14", type: "new", vn: "Mức độ, khoảng", kr: "정도", note: "" },
        { id: 'v1462', lesson: "Bài 14", type: "new", vn: "Chủ yếu", kr: "주로", note: "" },
        { id: 'v1463', lesson: "Bài 14", type: "new", vn: "Đồ chuẩn bị", kr: "준비물", note: "" },
        { id: 'v1464', lesson: "Bài 14", type: "new", vn: "Chat", kr: "채팅하다", note: "" },
        { id: 'v1465', lesson: "Bài 14", type: "new", vn: "Đánh, chơi", kr: "치다", note: "" },
        { id: 'v1466', lesson: "Bài 14", type: "new", vn: "Đi (xe), cưỡi (ngựa)", kr: "타다", note: "" },
        { id: 'v1467', lesson: "Bài 14", type: "new", vn: "Thông dịch", kr: "통역하다", note: "" },
        { id: 'v1468', lesson: "Bài 14", type: "new", vn: "Năng khiếu", kr: "특기", note: "" },
        { id: 'v1469', lesson: "Bài 14", type: "new", vn: "Tiểu thuyết", kr: "소설책", note: "" },
        { id: 'v1470', lesson: "Bài 14", type: "new", vn: "Sau này, phía trước", kr: "앞으로", note: "" },
        { id: 'v1471', lesson: "Bài 14", type: "new", vn: "Khó", kr: "어렵다", note: "" },
        { id: 'v1472', lesson: "Bài 14", type: "new", vn: "Dễ", kr: "쉽다", note: "" },
        { id: 'v1473', lesson: "Bài 14", type: "new", vn: "Bao nhiêu", kr: "얼마나", note: "" },
        { id: 'v1474', lesson: "Bài 14", type: "new", vn: "Lái xe", kr: "운전하다", note: "" },
        { id: 'v1475', lesson: "Bài 14", type: "new", vn: "Đàn piano", kr: "피아노", note: "" },
        { id: 'v1476', lesson: "Bài 14", type: "new", vn: "Trời, bầu trời", kr: "하늘", note: "" },
        { id: 'v1477', lesson: "Bài 14", type: "new", vn: "Chữ Hangul", kr: "한글", note: "" },
        { id: 'v1478', lesson: "Bài 14", type: "new", vn: "Du lịch nước ngoài", kr: "해외여행", note: "" },
        { id: 'v1479', lesson: "Bài 14", type: "new", vn: "Một mình", kr: "혼자", note: "" },
        { id: 'v1480', lesson: "Bài 14", type: "new", vn: "Châu Âu", kr: "유럽", note: "" },

        // --- BÀI 15: GIAO THÔNG ---
        { id: 'v1501', lesson: "Bài 15", type: "new", vn: "Giao thông", kr: "교통", note: "" },
        { id: 'v1502', lesson: "Bài 15", type: "new", vn: "Phương tiện giao thông", kr: "교통수단", note: "" },
        { id: 'v1503', lesson: "Bài 15", type: "new", vn: "Xe buýt", kr: "버스", note: "" },
        { id: 'v1504', lesson: "Bài 15", type: "new", vn: "Tàu hỏa", kr: "기차", note: "" },
        { id: 'v1505', lesson: "Bài 15", type: "new", vn: "Taxi", kr: "택시", note: "" },
        { id: 'v1506', lesson: "Bài 15", type: "new", vn: "Tàu điện ngầm", kr: "지하철", note: "" },
        { id: 'v1507', lesson: "Bài 15", type: "new", vn: "Xe máy", kr: "오토바이", note: "" },
        { id: 'v1508', lesson: "Bài 15", type: "new", vn: "Ô tô", kr: "자동차", note: "" },
        { id: 'v1509', lesson: "Bài 15", type: "new", vn: "Thuyền, tàu thủy", kr: "배", note: "" },
        { id: 'v1510', lesson: "Bài 15", type: "new", vn: "Máy bay", kr: "비행기", note: "" },
        { id: 'v1511', lesson: "Bài 15", type: "new", vn: "Xe đạp", kr: "자전거", note: "" },
        { id: 'v1512', lesson: "Bài 15", type: "new", vn: "Tàu điện", kr: "전차", note: "" },
        { id: 'v1513', lesson: "Bài 15", type: "new", vn: "Xe ôm", kr: "세옴", note: "" },
        { id: 'v1514', lesson: "Bài 15", type: "new", vn: "Xích lô", kr: "시클로", note: "" },
        { id: 'v1515', lesson: "Bài 15", type: "new", vn: "Như thế nào", kr: "어떻게", note: "" },
        { id: 'v1516', lesson: "Bài 15", type: "new", vn: "Bao nhiêu, bao lâu", kr: "얼마나", note: "" },
        { id: 'v1517', lesson: "Bài 15", type: "new", vn: "Bao giờ, khi nào", kr: "언제", note: "" },
        { id: 'v1518', lesson: "Bài 15", type: "new", vn: "Tại sao", kr: "왜", note: "" },
        { id: 'v1519', lesson: "Bài 15", type: "new", vn: "Tiền taxi", kr: "택시 요금", note: "" },
        { id: 'v1520', lesson: "Bài 15", type: "new", vn: "Gọi/bắt taxi 🚕", kr: "택시를 부르다/잡다", note: "" },
        { id: 'v1521', lesson: "Bài 15", type: "new", vn: "Phí giao thông", kr: "교통비", note: "" },
        { id: 'v1522', lesson: "Bài 15", type: "new", vn: "Trạm xe buýt", kr: "버스 정류장(정거장)", note: "" },
        { id: 'v1523', lesson: "Bài 15", type: "new", vn: "Xe buýt cao tốc", kr: "고속버스", note: "" },
        { id: 'v1524', lesson: "Bài 15", type: "new", vn: "Xe buýt nội thành", kr: "시내버스", note: "" },
        { id: 'v1525', lesson: "Bài 15", type: "new", vn: "Bến xe khách", kr: "버스터미널", note: "" },
        { id: 'v1526', lesson: "Bài 15", type: "new", vn: "Màu đỏ", kr: "빨갛다", note: "" },
        { id: 'v1527', lesson: "Bài 15", type: "new", vn: "Cảnh đêm", kr: "야경", note: "" },
        { id: 'v1528', lesson: "Bài 15", type: "new", vn: "Trung tâm dạy nấu ăn", kr: "요리 학원", note: "" },
        { id: 'v1529', lesson: "Bài 15", type: "new", vn: "Muộn/trễ 🐢", kr: "지각하다", note: "" },
        { id: 'v1530', lesson: "Bài 15", type: "new", vn: "Tàu cao tốc", kr: "KTX", note: "" },
        { id: 'v1531', lesson: "Bài 15", type: "new", vn: "Thẻ giao thông", kr: "교통 카드", note: "" },
        { id: 'v1532', lesson: "Bài 15", type: "new", vn: "Xe buýt tuyến ngắn", kr: "마을버스", note: "" },
        { id: 'v1533', lesson: "Bài 15", type: "new", vn: "Quầy vé", kr: "매표소", note: "" },
        { id: 'v1534', lesson: "Bài 15", type: "new", vn: "Ga tàu điện ngầm", kr: "지하철역", note: "" },
        { id: 'v1535', lesson: "Bài 15", type: "new", vn: "Bản đồ tuyến tàu điện ngầm", kr: "지하철 노선도", note: "" },
        { id: 'v1536', lesson: "Bài 15", type: "new", vn: "Ga tàu hỏa", kr: "기차역", note: "" },
        { id: 'v1537', lesson: "Bài 15", type: "new", vn: "Sân bay", kr: "공항", note: "" },
        { id: 'v1538', lesson: "Bài 15", type: "new", vn: "Bãi đỗ xe", kr: "주차장", note: "" },
        { id: 'v1539', lesson: "Bài 15", type: "new", vn: "Trạm xăng", kr: "주유소", note: "" },
        { id: 'v1540', lesson: "Bài 15", type: "new", vn: "Vạch qua đường", kr: "횡단보도", note: "" },
        { id: 'v1541', lesson: "Bài 15", type: "new", vn: "Cầu vượt", kr: "육교", note: "" },
        { id: 'v1542', lesson: "Bài 15", type: "new", vn: "Đường hầm", kr: "지하도", note: "" },
        { id: 'v1543', lesson: "Bài 15", type: "new", vn: "Đèn giao thông", kr: "신호등", note: "" },
        { id: 'v1544', lesson: "Bài 15", type: "new", vn: "Đường cao tốc", kr: "고속도로", note: "" },
        { id: 'v1545', lesson: "Bài 15", type: "new", vn: "Đại lộ", kr: "도로", note: "" },
        { id: 'v1546', lesson: "Bài 15", type: "new", vn: "Lên, đi (phương tiện)", kr: "타다", note: "" },
        { id: 'v1547', lesson: "Bài 15", type: "new", vn: "Xuống", kr: "내리다", note: "" },
        { id: 'v1548', lesson: "Bài 15", type: "new", vn: "Đổi (phương tiện)", kr: "갈아타다", note: "" },
        { id: 'v1549', lesson: "Bài 15", type: "new", vn: "Tắc đường", kr: "길이막히다", note: "" },
        { id: 'v1550', lesson: "Bài 15", type: "new", vn: "Mất thời gian", kr: "시간이 걸리다", note: "" },
        { id: 'v1551', lesson: "Bài 15", type: "new", vn: "Xảy ra tai nạn gthông", kr: "교통사고가 나다", note: "" },
        { id: 'v1552', lesson: "Bài 15", type: "new", vn: "Bữa phụ quà vặt", kr: "간식", note: "" },
        { id: 'v1553', lesson: "Bài 15", type: "new", vn: "Núi Namsan", kr: "남산", note: "" },
        { id: 'v1554', lesson: "Bài 15", type: "new", vn: "Màu vàng", kr: "노랗다", note: "" },
        { id: 'v1555', lesson: "Bài 15", type: "new", vn: "Xe buýt cao cấp", kr: "리무진 버스", note: "" },
        { id: 'v1556', lesson: "Bài 15", type: "new", vn: "Màu xanh da trời", kr: "파랗다", note: "" },
        { id: 'v1557', lesson: "Bài 15", type: "new", vn: "Cửa hàng tiện lợi", kr: "편의점", note: "" },
        { id: 'v1558', lesson: "Bài 15", type: "new", vn: "Hội quán sinh viên", kr: "학생회관", note: "" },
];

// ==========================================
// 2. BIẾN TOÀN CỤC & KHỞI TẠO
// ==========================================
var starredCards = JSON.parse(localStorage.getItem('myStarredCards')) || [];
var currentCat = 'All';
var currentLes = 'All';
var isQuiz = false;
var isWriting = false;
var isFlashcard = false;
var isReverseLang = false; // false: Trước VN - Sau Hàn | true: Trước Hàn - Sau VN

window.onload = function () {
    renderLessonButtons();
    renderCards(data);
};

// Render nút Chọn Bài
function renderLessonButtons() {
    const container = document.getElementById('lesson-buttons');
    if (!container) return;
    for (let i = 1; i <= 15; i++) {
        let btn = document.createElement('button');
        btn.className = "btn btn-theme-outline btn-sm rounded-pill filter-btn";
        btn.innerText = "Bài " + i;
        btn.onclick = function() { setLesson('Bài ' + i, this); };
        container.appendChild(btn);
    }
}

// ==========================================
// 3. LOGIC LỌC BÀI & GIAO DIỆN NÚT
// ==========================================
function setCategory(cat, btn) {
    currentCat = cat;
    updateActiveButton(btn);
    filterCards();
}

function setLesson(les, btn) {
    currentLes = les;
    updateActiveButton(btn);
    filterCards();
}

function updateActiveButton(btn) {
    if (!btn || !btn.parentElement) return;
    
    // Xác định nhóm của nút (category-group cho Mục học & Kĩ năng / lesson-buttons cho Chọn Bài)
    let groupSelector = btn.closest('#lesson-buttons') ? '#lesson-buttons .filter-btn' : '.category-group .filter-btn';
    
    var siblings = document.querySelectorAll(groupSelector);
    siblings.forEach(b => {
        if(b.classList.contains('btn-theme')) {
            b.classList.remove('btn-theme');
            b.classList.add('btn-theme-outline');
        } else {
            b.classList.remove('active');
        }
    });
    
    if(btn.classList.contains('btn-theme-outline')){
        btn.classList.remove('btn-theme-outline');
        btn.classList.add('btn-theme');
    } else {
        btn.classList.add('active');
    }
}

function filterCards() {
    var keyword = document.getElementById('searchInput').value.toLowerCase().trim();

    var filtered = data.filter(i => {
        let passCat = false;
        if (currentCat === 'All') passCat = true;
        else if (currentCat === 'listening') passCat = (i.type === 'new');
        else if (currentCat === 'starred') passCat = starredCards.includes(i.id);
        else if (i.type === currentCat) passCat = true;

        let passLes = false;
        if (currentLes === 'All') passLes = true;
        else if (i.lesson === currentLes) passLes = true;

        let passKey = true;
        if (keyword !== '') {
            passKey = ((i.vn && i.vn.toLowerCase().includes(keyword)) ||
                       (i.kr && i.kr.toLowerCase().includes(keyword)));
        }

        return passCat && passLes && passKey;
    });

    renderCards(filtered);
}

function shuffleCards() {
    var container = document.getElementById('card-container');
    var cards = Array.from(container.children);
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        container.appendChild(cards[j]);
    }
}

// ==========================================
// 4. RENDER GIAO DIỆN THẺ (GRID)
// ==========================================
function renderCards(cards) {
    const container = document.getElementById('card-container');
    if (!container) return;
    container.innerHTML = '';

    cards.forEach(card => {
        // Cập nhật colClass: isWriting = full width (col-12)
        let colClass = (card.type === 'translate' || card.type === 'practice' || card.type === 'grammar' || isWriting) 
                        ? 'col-12' : 'col-6 col-md-4 col-lg-3';
        
        const wrapper = document.createElement('div');
        wrapper.className = colClass;

        const div = document.createElement('div');
        div.className = 'flashcard' + ((card.type === 'translate' || card.type === 'practice') ? ' translate-card' : '');

        let safeKr = (card.kr || '').replace(/'/g, "\\'");
        let isStarred = starredCards.includes(card.id);

        let starIcon = isStarred ? "fi-sr-star" : "fi-rr-star";
        let starHTML = `<i class="fi ${starIcon} star-btn ${isStarred ? 'active' : ''}" onclick="toggleStar('${card.id}', event, this)"></i>`;
        let speakerHTML = `<i class="fi fi-rr-volume speaker-btn" title="Nghe phát âm" onclick="speakKorean('${safeKr}', event)"></i>`;

        if (currentCat === 'listening') {
            div.innerHTML = starHTML + `
                <div class="py-3">
                    <button class="btn btn-theme rounded-pill px-4 shadow-sm" onclick="speakKorean('${safeKr}', event)">
                        <i class="fi fi-rr-headphones me-2"></i>Nghe
                    </button>
                </div>
                <div class="kr-result-container text-center">
                    <div class="kr-text">${card.kr}</div>
                    <div class="text-muted fw-bold mt-1">${card.vn || ''}</div>
                </div>
                <button class="btn btn-light btn-sm rounded-pill mt-3 border w-75 mx-auto text-secondary fw-bold" 
                        onclick="this.previousElementSibling.style.display = 'block'; this.style.display = 'none'; event.stopPropagation();">
                    <i class="fi fi-rr-eye me-1"></i>Đáp án
                </button>
            `;
        } else if (isQuiz) {
            div.innerHTML = starHTML + `
                <div class="vn-text mb-2">${card.vn || ''} ${speakerHTML}</div>
                <input type="text" class="quiz-input form-control" placeholder="Gõ tiếng Hàn..." onkeyup="checkInlineAnswer(this, event, '${safeKr}')">
                <div class="kr-result-container text-center mt-2">
                    <span class="kr-text">${card.kr}</span>
                </div>
            `;
        } else if (isWriting) {
            div.onclick = function (e) {
                if (e.target.closest('button') || e.target.tagName === 'CANVAS' || e.target.classList.contains('star-btn') || e.target.classList.contains('speaker-btn')) {
                    return;
                }

                const padContainer = this.querySelector('.pad-container');
                if (padContainer.style.display === 'none') {
                    padContainer.style.display = 'block'; // Hiện bảng vẽ
                    
                    const canvas = document.getElementById('pad-' + card.id);
                    if (canvas && canvas.width !== canvas.offsetWidth) {
                        canvas.width = canvas.offsetWidth;
                        canvas.height = canvas.offsetHeight;
                    }
                } else {
                    padContainer.style.display = 'none'; // Ẩn bảng vẽ
                }
            };

            div.innerHTML = starHTML + `
                <div class="vn-text mb-2">${card.vn || ''} ${speakerHTML}</div>
                
                <div class="pad-container" style="display: none; width: 100%;">
                    <canvas id="pad-${card.id}" class="drawing-pad"></canvas>
                    <div class="d-flex justify-content-between mt-3 px-2">
                        <button class="btn btn-sm btn-light border text-dark rounded-pill px-3 fw-medium" onclick="clearPad('pad-${card.id}', event)">
                            <i class="fi fi-rr-trash"></i> Xóa nét
                        </button>
                        <button class="btn btn-sm btn-theme-outline rounded-pill px-3 fw-medium" onclick="showPadAnswer(this, event)">
                            <i class="fi fi-rr-eye"></i> Đáp án
                        </button>
                    </div>
                    <div class="kr-result-container text-center mt-2" style="display: none;">
                        <span class="kr-text">${card.kr}</span>
                    </div>
                </div>
            `;
        }
        else if (isFlashcard) {
            // CHẾ ĐỘ FLASHCARD 3D
            div.className = 'flip-card'; // Đổi class để CSS lật hoạt động
            
            let frontText = !isReverseLang ? (card.vn || '') : card.kr;
            let frontClass = !isReverseLang ? "vn-text" : "kr-text";
            
            let backText = !isReverseLang ? card.kr : (card.vn || '');
            let backClass = !isReverseLang ? "kr-text" : "vn-text";
            let backNote = (!isReverseLang && card.note) ? `<div class="card-note mt-2">${card.note}</div>` : '';

            // Icon loa chỉ hiện ở mặt có tiếng Hàn
            let speakerFront = isReverseLang ? speakerHTML : '';
            let speakerBack = !isReverseLang ? speakerHTML : '';

            div.onclick = function(e) {
                // Không lật thẻ nếu click vào sao hoặc loa
                if(e.target.tagName === 'I') return; 
                
                this.classList.toggle('flipped');
                
                // Tự động đọc tiếng Hàn khi mặt thẻ lật sang tiếng Hàn
                let isNowKoreanSide = (!isReverseLang && this.classList.contains('flipped')) || 
                                      (isReverseLang && !this.classList.contains('flipped'));
                if(isNowKoreanSide) {
                    speakKorean(safeKr, null);
                }
            };

            div.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        ${starHTML}
                        <div class="${frontClass}">${frontText} ${speakerFront}</div>
                    </div>
                    <div class="flip-card-back">
                        ${starHTML}
                        <div class="${backClass}">${backText} ${speakerBack}</div>
                        ${backNote}
                    </div>
                </div>
            `;
         }
         else {
            div.onclick = function () {
                const res = this.querySelector('.kr-result-container');
                if (res) res.style.display = (res.style.display === 'block' ? 'none' : 'block');
            };
            div.innerHTML = starHTML + `
                <div class="vn-text">${card.vn || ''}</div>
                <div class="kr-result-container text-center">
                    <span class="kr-text">${card.kr}</span> ${speakerHTML}
                    <div class="card-note">${card.note || ''}</div>
                </div>
            `;
        }
        
        wrapper.appendChild(div);
        container.appendChild(wrapper);
    });

    if (isWriting) {
        setTimeout(initDrawingPads, 100); 
    }
}

// ==========================================
// 5. CÁC HÀM TIỆN ÍCH & LOGIC CHỨC NĂNG
// ==========================================

// Lưu Từ Khó (Ngôi sao)
function toggleStar(cardId, event, iconElement) {
    event.stopPropagation();
    let index = starredCards.indexOf(cardId);
    if (index === -1) index = starredCards.indexOf(parseInt(cardId));
    if (index === -1) index = starredCards.indexOf(String(cardId));

    if (index === -1) {
        starredCards.push(cardId);
        iconElement.classList.remove('fi-rr-star');
        iconElement.classList.add('fi-sr-star', 'active');
    } else {
        starredCards.splice(index, 1);
        iconElement.classList.remove('fi-sr-star', 'active');
        iconElement.classList.add('fi-rr-star');
        if (currentCat === 'starred') filterCards();
    }
    localStorage.setItem('myStarredCards', JSON.stringify(starredCards));
}

// Đọc Tiếng Hàn
function speakKorean(text, event) {
    if (event) event.stopPropagation();
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Dừng các âm đang đọc dở
        var msg = new SpeechSynthesisUtterance(text);
        var voices = window.speechSynthesis.getVoices();

        // Lấy tất cả các giọng tiếng Hàn hiện có trên máy
        var koreanVoices = voices.filter(v => v.lang.includes('ko-KR') || v.lang.includes('ko_KR'));
        var selectedVoice = null;

        if (koreanVoices.length > 0) {
            // Ưu tiên 1: Giọng nữ chuẩn, dễ nghe trên iOS/Macbook (Yuna, Sora)
            selectedVoice = koreanVoices.find(v => v.name.includes('Yuna') || v.name.includes('Sora'));

            // Ưu tiên 2: Giọng Google trên Android (cố gắng loại bỏ giọng có chữ Male)
            if (!selectedVoice) {
                selectedVoice = koreanVoices.find(v => v.name.includes('Google') && !v.name.toLowerCase().includes('male'));
            }

            // Ưu tiên 3: Nếu không tìm thấy các tên trên, lấy giọng bất kỳ NHƯNG tránh giọng nam
            if (!selectedVoice) {
                selectedVoice = koreanVoices.find(v => !v.name.toLowerCase().includes('male')) || koreanVoices[0];
            }
        }

        if (selectedVoice) {
            msg.voice = selectedVoice;
        }

        msg.lang = 'ko-KR';
        msg.rate = 0.85;  // Tốc độ đọc
        msg.pitch = 1.2;  // TĂNG ĐỘ THANH CỦA GIỌNG LÊN (1.0 là bình thường, 1.2 sẽ làm giọng cao/nữ tính và sáng hơn)

        window.speechSynthesis.speak(msg);
    } else {
        alert("Trình duyệt không hỗ trợ phát âm!");
    }
}

// Chế độ Luyện Gõ
function toggleQuizMode(btn) {
    isQuiz = !isQuiz;
    if (isQuiz) {
        btn.classList.remove('btn-theme-outline');
        btn.classList.add('btn-theme');
        isWriting = false;
        document.getElementById('write-btn').className = "btn btn-theme-outline btn-sm rounded-pill d-inline-flex align-items-center";
    } else {
        btn.classList.remove('btn-theme');
        btn.classList.add('btn-theme-outline');
    }
    filterCards();
}

function checkInlineAnswer(inputElement, event, correctAnswer) {
    let userVal = inputElement.value.trim().toLowerCase().replace(/[\s.,?!~()]/g, '');
    let correctVal = correctAnswer.trim().toLowerCase().replace(/[\s.,?!~()]/g, '');
    let krText = inputElement.parentElement.querySelector('.kr-result-container');

    inputElement.classList.remove('quiz-correct', 'quiz-wrong');

    if (userVal === '') {
        if (krText) krText.style.display = 'none';
        return;
    }

    if (userVal === correctVal) {
        inputElement.classList.add('quiz-correct');
        if (krText) krText.style.display = 'block';
        speakKorean(correctAnswer, null);
    } else if (event.key === 'Enter') {
        inputElement.classList.add('quiz-wrong');
        if (krText) krText.style.display = 'block';
    }
}

// Chế độ Luyện Viết (Bảng vẽ)
function toggleWriteMode(btn) {
    isWriting = !isWriting;
    if (isWriting) {
        btn.classList.remove('btn-theme-outline');
        btn.classList.add('btn-theme');
        isQuiz = false;
        document.getElementById('quiz-btn').className = "btn btn-theme-outline btn-sm rounded-pill d-inline-flex align-items-center";
    } else {
        btn.classList.remove('btn-theme');
        btn.classList.add('btn-theme-outline');
    }
    filterCards();
}

function initDrawingPads() {
    const canvases = document.querySelectorAll('.drawing-pad');
    canvases.forEach(canvas => {
        // KHÔNG set kích thước ở đây nữa vì thẻ đang bị ẩn (đã chuyển lên hàm onclick ở trên)
        
        const ctx = canvas.getContext('2d');
        let isDrawing = false;

        const startDrawing = (e) => {
            isDrawing = true;
            draw(e);
        };

        const stopDrawing = () => {
            isDrawing = false;
            ctx.beginPath();
        };

        const draw = (e) => {
            if (!isDrawing) return;
            e.preventDefault(); 
            
            const rect = canvas.getBoundingClientRect();
            const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
            
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#0B0B0D'; 

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        canvas.addEventListener('touchstart', startDrawing, {passive: false});
        canvas.addEventListener('touchmove', draw, {passive: false});
        canvas.addEventListener('touchend', stopDrawing);
    });
}

function clearPad(canvasId, event) {
    event.stopPropagation();
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function showPadAnswer(btn, event) {
    event.stopPropagation();
    const resultDiv = btn.parentElement.nextElementSibling;
    resultDiv.style.display = resultDiv.style.display === 'block' ? 'none' : 'block';
}

function toggleFlashcardMode(btn) {
    isFlashcard = !isFlashcard;
    let controls = document.getElementById('flashcard-controls');
    
    if (isFlashcard) {
        btn.classList.remove('btn-theme-outline');
        btn.classList.add('btn-theme');
        controls.style.display = 'block';
        
        // Tắt các chế độ khác
        isQuiz = false;
        isWriting = false;
        document.getElementById('quiz-btn').className = "btn btn-theme-outline btn-sm rounded-pill d-inline-flex align-items-center";
        document.getElementById('write-btn').className = "btn btn-theme-outline btn-sm rounded-pill d-inline-flex align-items-center";
    } else {
        btn.classList.remove('btn-theme');
        btn.classList.add('btn-theme-outline');
        controls.style.display = 'none';
    }
    filterCards();
}

function toggleLangDirection() {
    isReverseLang = document.getElementById('langToggle').checked;
    filterCards();
}